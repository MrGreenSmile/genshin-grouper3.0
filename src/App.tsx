import { useCallback, useState } from "react";
import { BrowserRouter, Routes, Route, useParams } from "react-router-dom";

import "./App.css";
import "./characters.css";
import { CharacterCard, CharacterCheckedContainer } from "./components/grouper";
import { five_star, four_star } from "./datas";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<CharacterList />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

function CharacterList() {
  const [forinfo, isinfo] = useState(false);
  const [checked_list, set_checked_list] = useState<Array<string>>([]);

  const checker = useCallback(
    (checked: boolean, value: string) => {
      if (checked) {
        set_checked_list((prev) => [...prev, value]);
      } else if (!checked) {
        set_checked_list(checked_list.filter((ele) => ele !== value));
      }
    },
    [checked_list]
  );
  const checked_clear = useCallback(() => {
    set_checked_list([]);
  }, []);

  return (
    <div className="App">
      <h1>
        Genshin Grouper
        <span onClick={() => isinfo(!forinfo)} className="information-btn">
          안내
        </span>
      </h1>

      {forinfo ? <Information isinfo={isinfo} forinfo={forinfo} /> : null}
      <div className="main-container">
        <h3>
          캐릭터 선택
          <button onClick={() => checked_clear()} className="control-btn">
            초기화
          </button>
        </h3>
        <div>
          {five_star.map((character) => (
            <CharacterCard
              key=""
              character_info={character}
              checked_list={checked_list}
              checker={checker}
            />
          ))}
          {four_star.map((character) => (
            <CharacterCard
              key=""
              character_info={character}
              checked_list={checked_list}
              checker={checker}
            />
          ))}
        </div>
        <CharacterCheckedContainer checked_characters={checked_list} />
      </div>
    </div>
  );
}

function Information({ isinfo, forinfo }: ModalState) {
  return (
    <>
      <div
        className="information-modall-bg"
        onClick={() => isinfo(!forinfo)}
      ></div>
      <div className="information-modall">이것은 안내창이여!</div>
    </>
  );
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
export interface ModalState {
  isinfo: React.Dispatch<React.SetStateAction<boolean>>;
  forinfo: boolean;
}

export default App;
