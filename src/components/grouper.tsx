import { useState } from "react";
import { characters, combinations } from "../datas";

export interface dataSetter {
  data: Array<Array<string>>;
  setData: React.Dispatch<React.SetStateAction<Array<Array<string>>>>;
}
export interface CheckedCharacter {
  character_name: string;
}
export interface CharacterInfo {
  character_info: Array<string>;
  checked_list: Array<string>;
  checker: (checked: boolean, id: string) => void;
}
export interface CheckedCharacterList {
  checked_characters: Array<string>;
}

function ControlButton({ data, setData }: dataSetter) {
  const [temp_data, set_temp_data] = useState(data);
  const [rare_btn, set_rare_btn] = useState(false);
  const [weapon_btn, set_weapon_btn] = useState(false);
  const [element_btn, set_element_btn] = useState(false);

  function sorter_defualt() {
    setData(temp_data);
  }
  function sorter_rare() {
    let unsorted = [...data];
    let sorted = rare_btn
      ? unsorted.sort((a: Array<any>, b: Array<any>) => b[4] - a[4])
      : unsorted.sort((a: Array<any>, b: Array<any>) => a[4] - b[4]);

    setData(sorted);
    set_rare_btn(!rare_btn);
  }
  function sorter_weapon() {
    let unsorted = [...data];
    let sorted = weapon_btn
      ? unsorted.sort((a: Array<any>, b: Array<any>) =>
          a[3] == b[3] ? b[4] - a[4] : a[3].localeCompare(b[3])
        )
      : unsorted.sort((a: Array<any>, b: Array<any>) =>
          a[3] == b[3] ? b[4] - a[4] : b[3].localeCompare(a[3])
        );

    setData(sorted);
    set_weapon_btn(!weapon_btn);
  }
  function sorter_element() {
    let unsorted = [...data];
    let sorted = element_btn
      ? unsorted.sort((a: Array<any>, b: Array<any>) =>
          a[2] == b[2] ? b[4] - a[4] : a[2].localeCompare(b[2])
        )
      : unsorted.sort((a: Array<any>, b: Array<any>) =>
          a[2] == b[2] ? b[4] - a[4] : b[2].localeCompare(a[2])
        );

    setData(sorted);
    set_element_btn(!element_btn);
  }

  return (
    <div className="sorter-btn-container">
      <button onClick={() => sorter_defualt()} className="control-btn">
        디폴트
      </button>
      <button onClick={() => sorter_rare()} className="control-btn">
        레어도 {rare_btn ? <span>↑</span> : <span>↓</span>}
      </button>
      <button onClick={() => sorter_weapon()} className="control-btn">
        무기별 {weapon_btn ? <span>↑</span> : <span>↓</span>}
      </button>
      <button onClick={() => sorter_element()} className="control-btn">
        원소별 {element_btn ? <span>↑</span> : <span>↓</span>}
      </button>
    </div>
  );
}

function CharacterCard({
  character_info,
  checked_list,
  checker,
}: CharacterInfo) {
  return (
    <>
      <input
        type="checkbox"
        id={character_info[0].replace(/ /gi, "_")}
        value={character_info[1]}
        name="characters"
        checked={checked_list.includes(character_info[1]) ? true : false}
        onChange={(e) => {
          checker(e.target.checked, e.target.value);
        }}
      />
      <label
        htmlFor={character_info[0].replace(/ /gi, "_")}
        className="character-card"
      >
        <img src={"character_card/" + character_info[1] + ".webp"} />
      </label>
    </>
  );
}

function CharacterCheckedContainer({
  checked_characters,
}: CheckedCharacterList) {
  const [view_checked, set_view_checked] = useState(false);

  return (
    <div
      className={
        view_checked
          ? "selected-character selected-character-checked"
          : "selected-character"
      }
    >
      {/*<div>{checked_list.join("/")}</div>*/}
      <h2 id="view_top">
        <div onClick={() => set_view_checked(!view_checked)}>
          선택된 캐릭터
          <span className="selected-number">{checked_characters.length}</span>
        </div>
      </h2>
      {checked_characters.map((character) => (
        <CharacterChecked key="" character_name={character} />
      ))}

      <Combinations checked_characters={checked_characters} />
      <div
        className="to-top"
        onClick={() =>
          view_checked
            ? (location.href = "#view_top")
            : (location.href = "#top")
        }
      >
        Top
      </div>
    </div>
  );
}
function CharacterChecked({ character_name }: CheckedCharacter) {
  return <img src={"character_card/" + character_name + ".webp"}></img>;
}

function Combinations({ checked_characters }: CheckedCharacterList) {
  return (
    <div className="combination-container">
      <h3>지금 가능한 조합</h3>
      <h3>해볼만한 조합</h3>
      {checked_characters.map((checked) =>
        combinations
          .filter((combi) => combi.includes(checked))
          .map((combi) => (
            <div>
              {combi.map((ea) => (
                <span className="combination-images">
                  <img src={"character_card/" + ea + ".webp"} alt={ea} />
                  <span className="combination-character">
                    {characters.filter((char) => char[1] === ea)[0][0]}
                  </span>
                </span>
              ))}
            </div>
          ))
      )}
      {/*combinations.map((combi) =>
        checked_characters.filter((cha) => combi.includes(cha)).length >= 2 ? (
          <div key="">
            {combi.map((ea) => (
              <img src={"character_card/" + ea + ".webp"} key="" />
            ))}
          </div>
        ) : null
            )*/}
      {/*hutao.map((line) => (
        <div>
          {line.map((ea) => (
            <img src={"character_card/" + ea + ".webp"} />
          ))}
        </div>
          ))*/}
    </div>
  );
}

export { ControlButton, CharacterCard, CharacterCheckedContainer };
