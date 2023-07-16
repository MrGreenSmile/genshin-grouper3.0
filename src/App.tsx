import { useCallback, useState } from "react";
import { BrowserRouter, Routes, Route, useParams } from "react-router-dom";

import "./App.css";
import "./characters.css";
import { CharacterCard, CharacterCheckedContainer } from "./components/grouper";
import { characters } from "./datas";

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
  const [data, setData] = useState(characters);
  const [forinfo, isinfo] = useState(false);
  const [sort_btn, set_sort_btn] = useState(false);
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
          <button
            onClick={() => set_sort_btn(!sort_btn)}
            className="control-btn"
          >
            정렬
          </button>
          {sort_btn ? <ControlButton data={data} setData={setData} /> : null}
          <button onClick={() => checked_clear()} className="control-btn">
            초기화
          </button>
        </h3>
        <div>
          {data.map((character) => (
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

export interface dataSetter {
  data: Array<Array<string>>;
  setData: React.Dispatch<React.SetStateAction<Array<Array<string>>>>;
}
function ControlButton({ data, setData }: dataSetter) {
  const [rare_control, set_rare_control] = useState(false);
  function sorter_rare() {
    let unsorted = [...data];
    let sorted = rare_control
      ? unsorted.sort((a: any, b: any) => b[4] - a[4])
      : unsorted.sort((a: any, b: any) => a[4] - b[4]);

    setData(sorted);
    set_rare_control(!rare_control);
  }

  return (
    <div className="sorter-btn-container">
      <button onClick={() => sorter_rare()} className="control-btn">
        레어도
      </button>
    </div>
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
