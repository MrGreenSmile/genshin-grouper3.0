import { useState } from "react";
import { combinations } from "../datas";

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
      <h2>
        <div onClick={() => set_view_checked(!view_checked)}>
          선택된 캐릭터
          <span className="selected-number">{checked_characters.length}</span>
        </div>
      </h2>
      {checked_characters.map((character) => (
        <CharacterChecked key="" character_name={character} />
      ))}

      <Combinations checked_characters={checked_characters} />
    </div>
  );
}
function CharacterChecked({ character_name }: CheckedCharacter) {
  return <img src={"character_card/" + character_name + ".webp"}></img>;
}

function Combinations({ checked_characters }: CheckedCharacterList) {
  return (
    <div className="temp">
      <h3>당장 가능한 조합</h3>
      <h3>해볼만한 조합</h3>
      {combinations.map((combi) =>
        checked_characters.filter((cha) => combi.includes(cha)).length >= 2 ? (
          <div key="">
            {combi.map((ea) => (
              <img src={"character_card/" + ea + ".webp"} key="" />
            ))}
          </div>
        ) : null
      )}
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

export { CharacterCard, CharacterCheckedContainer };
