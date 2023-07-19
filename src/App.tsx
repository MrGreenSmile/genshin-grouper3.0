import { useCallback, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./App.css";
import "./characters.css";
import {
  ControlButton,
  CharacterCard,
  CharacterCheckedContainer,
} from "./components/grouper";
import Information from "./components/information";
import CharacterDetail from "./routes/character";
import { characters } from "./datas";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<CharacterList />}></Route>
          <Route
            path="/character-detail/:character_id"
            element={<CharacterDetail />}
          ></Route>
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
  function checked_clear() {
    set_checked_list([]);
  }

  return (
    <div className="App" key="App">
      <h1 key="genshin-grouper">
        Genshin Grouper
        <span
          onClick={() => isinfo(!forinfo)}
          className="information-btn"
          key="information-btn"
        >
          안내
        </span>
      </h1>

      {forinfo ? <Information isinfo={isinfo} forinfo={forinfo} /> : null}
      <div className="main-container" key="main-container">
        <h3>
          캐릭터 선택
          <button
            onClick={() => set_sort_btn(!sort_btn)}
            className="control-btn"
            key="sorter-btn"
          >
            정렬
          </button>
          {sort_btn ? (
            <ControlButton data={data} setData={setData} key="sorter-btns" />
          ) : null}
          <button
            onClick={() => checked_clear()}
            className="control-btn"
            key="clear-selected"
          >
            초기화
          </button>
        </h3>
        <div key="">
          {data.map((character) => (
            <CharacterCard
              key=""
              character_info={character}
              checked_list={checked_list}
              checker={checker}
            />
          ))}
        </div>
        <CharacterCheckedContainer checked_characters={checked_list} key="" />
      </div>
    </div>
  );
}

export default App;
