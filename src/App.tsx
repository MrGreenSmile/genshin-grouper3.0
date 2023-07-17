import { useCallback, useState, useEffect } from "react";
import { BrowserRouter, Routes, Route, useParams } from "react-router-dom";

import "./App.css";
import "./characters.css";
import {
  ControlButton,
  CharacterCard,
  CharacterCheckedContainer,
} from "./components/grouper";
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

export interface informationModalState {
  isinfo: React.Dispatch<React.SetStateAction<boolean>>;
  forinfo: boolean;
}
function Information({ isinfo, forinfo }: informationModalState) {
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

export default App;
