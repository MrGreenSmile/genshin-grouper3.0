import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { characters, combinations } from "../datas/combinations";

function ScrollToTop() {
  const { pathname } = useLocation(); //

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}
export interface emphasizing {
  line: string;
}
function SentencesEmp({ line }: emphasizing) {
  return (
    <p key="">
      {line.includes("<em>")
        ? line.split("<em>").map((word) =>
            word.includes("</em>") ? (
              <>
                <em key={word} className="emphasis">
                  {word.split("</em>")[0]}
                </em>
                {word.split("</em>")[1]}
              </>
            ) : (
              word
            )
          )
        : line}
    </p>
  );
}

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
    const unsorted = [...data];
    const sorted = rare_btn
      ? unsorted.sort((a: Array<string>, b: Array<string>) =>
          b[4].localeCompare(a[4])
        )
      : unsorted.sort((a: Array<string>, b: Array<string>) =>
          a[4].localeCompare(b[4])
        );

    setData(sorted);
    set_rare_btn(!rare_btn);
  }
  function sorter_weapon() {
    const unsorted = [...data];
    const sorted = weapon_btn
      ? unsorted.sort((a: Array<string>, b: Array<string>) =>
          a[3] == b[3] ? b[4].localeCompare(a[4]) : a[3].localeCompare(b[3])
        )
      : unsorted.sort((a: Array<string>, b: Array<string>) =>
          a[3] == b[3] ? b[4].localeCompare(a[4]) : b[3].localeCompare(a[3])
        );

    setData(sorted);
    set_weapon_btn(!weapon_btn);
  }
  function sorter_element() {
    const unsorted = [...data];
    const sorted = element_btn
      ? unsorted.sort((a: Array<string>, b: Array<string>) =>
          a[2] == b[2] ? b[4].localeCompare(a[4]) : a[2].localeCompare(b[2])
        )
      : unsorted.sort((a: Array<string>, b: Array<string>) =>
          a[2] == b[2] ? b[4].localeCompare(a[4]) : b[2].localeCompare(a[2])
        );

    setData(sorted);
    set_element_btn(!element_btn);
  }

  return (
    <div className="sorter-btn-container">
      <button
        onClick={() => sorter_defualt()}
        className="control-btn"
        key="defualt-sorter"
      >
        디폴트
      </button>
      <button
        onClick={() => sorter_rare()}
        className="control-btn"
        key="rare-sorter"
      >
        레어도 {rare_btn ? <span>↑</span> : <span>↓</span>}
      </button>
      <button
        onClick={() => sorter_weapon()}
        className="control-btn"
        key="weapon-sorter"
      >
        무기별 {weapon_btn ? <span>↑</span> : <span>↓</span>}
      </button>
      <button
        onClick={() => sorter_element()}
        className="control-btn"
        key="element-sorter"
      >
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
        key={character_info[1] + "-checkbox"}
      />
      <label
        htmlFor={character_info[0].replace(/ /gi, "_")}
        className="character-card"
        key={character_info[1] + "-checkbox-label"}
      >
        <img
          src={"character_card/" + character_info[1] + ".webp"}
          key={character_info[1] + "-checkbox-label-img"}
        />
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
      key="selected-result"
    >
      {/*<div>{checked_list.join("/")}</div>*/}
      <h2 id="view_top" key="selected-header">
        <div
          onClick={() => set_view_checked(!view_checked)}
          key="selected-list"
        >
          선택된 캐릭터
          <span className="selected-number" key="selected-list-quantity">
            {checked_characters.length}
          </span>
        </div>
      </h2>
      {checked_characters.map((character) => (
        <CharacterChecked character_name={character} key="checked-characters" />
      ))}

      <Combinations
        checked_characters={checked_characters}
        key="selected-combinations"
      />
      <div
        className="to-top"
        onClick={() =>
          view_checked
            ? (location.href = "#view_top")
            : (location.href = "#top")
        }
        key="to-top-btn"
      >
        Top
      </div>
    </div>
  );
}
function CharacterChecked({ character_name }: CheckedCharacter) {
  return (
    <Link to={"/character-detail/" + character_name}>
      <img
        src={"character_card/" + character_name + ".webp"}
        key="character-card-img"
      />
    </Link>
  );
}

function Combinations({ checked_characters }: CheckedCharacterList) {
  return (
    <div className="combination-container" key="result-container">
      <h3 key="now-possible">지금 가능한 조합</h3>
      {combinations
        .filter((combi) => combi.every((i) => checked_characters.includes(i)))
        .map((combi) => (
          <div key={combi.join("/")}>
            {combi.map((ea) => (
              <span className="combination-images" key="combinations">
                <img
                  src={"character_card/" + ea + ".webp"}
                  alt={ea}
                  key="combinations-member"
                />
                <span
                  className="combination-character"
                  key="combinations-member-name"
                >
                  {characters.filter((char) => char[1] === ea)[0]}
                </span>
              </span>
            ))}
          </div>
        ))}

      <h3 key="probably-possible">해볼만한 조합</h3>
      {checked_characters.map((checked) =>
        combinations
          .filter((combi) => combi.includes(checked))
          .map((combi) => (
            <div key={combi.join("/")}>
              {combi.map((ea) => (
                <span className="combination-images" key="combinations">
                  <img
                    src={"character_card/" + ea + ".webp"}
                    alt={ea}
                    key="combinations-member"
                  />
                  <span
                    className="combination-character"
                    key="combinations-member-name"
                  >
                    {characters.filter((char) => char[1] === ea)[0]}
                  </span>
                </span>
              ))}
            </div>
          ))
      )}
    </div>
  );
}

export {
  ScrollToTop,
  SentencesEmp,
  ControlButton,
  CharacterCard,
  CharacterCheckedContainer,
};
