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
      ? unsorted.sort((a: string, b: string) => b[4] - a[4])
      : unsorted.sort((a: string, b: string) => a[4] - b[4]);

    setData(sorted);
    set_rare_btn(!rare_btn);
  }
  function sorter_weapon() {
    let unsorted = [...data];
    let sorted = weapon_btn
      ? unsorted.sort((a: string, b: string) =>
          a[3] == b[3] ? b[4] - a[4] : a[3].localeCompare(b[3])
        )
      : unsorted.sort((a: string, b: string) =>
          a[3] == b[3] ? b[4] - a[4] : b[3].localeCompare(a[3])
        );

    setData(sorted);
    set_weapon_btn(!weapon_btn);
  }
  function sorter_element() {
    let unsorted = [...data];
    let sorted = element_btn
      ? unsorted.sort((a: string, b: string) =>
          a[2] == b[2] ? b[4] - a[4] : a[2].localeCompare(b[2])
        )
      : unsorted.sort((a: string, b: string) =>
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
