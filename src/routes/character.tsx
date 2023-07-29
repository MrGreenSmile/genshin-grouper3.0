import { useState } from "react";
import { useParams } from "react-router-dom";
import { characters } from "../datas/combinations";
import characters_detail from "../datas/characters_detail";

function CharacterDetail() {
  const { character_id } = useParams() as { character_id: string };
  const character_name: Array<string> = characters.filter((names) =>
    names.includes(character_id)
  )[0];
  const character_detail = characters_detail.filter(
    (detail) => detail.name === character_name[0]
  )[0];

  return (
    <div className="main-container">
      <h2>{character_name[0]}</h2>

      <div>
        <img
          className="character-detail-card"
          src={"/character_card/" + character_name[1] + ".webp"}
        />
        <BasicInformation
          character_name={character_name}
          character_detail={character_detail}
        />
      </div>
    </div>
  );
}

export interface detail_info {
  character_name: Array<string>;
  character_detail: {
    name: string;
    summary: string;
    profile: {
      gender: string;
      rareness: string;
      element: string;
      weapon: string;
      constellation: string;
      birthday: string;
      union: string;
      actor: Array<string>;
      cook: {
        name: string;
        content: string;
      };
      materials: {
        penetration: Array<string | Array<string>>;
        skills: Array<string | Array<string>>;
      };
    };
  };
}

function BasicInformation({ character_name, character_detail }: detail_info) {
  const [penetrator, setPenetrator] = useState(false);
  const [skillor, setSkillor] = useState(false);
  function material_penetrator() {
    setPenetrator(!penetrator);
    setSkillor(false);
  }
  function material_skillor() {
    setPenetrator(false);
    setSkillor(!skillor);
  }

  return (
    <div>
      <h2>기본 정보</h2>

      <div className="character-summary">
        {character_detail.summary.split("\n").map((summ) => (
          <p key="">{summ}</p>
        ))}
      </div>

      <h3>프로필</h3>
      <div className="character-profile">
        <div className="left">
          <img
            className="character-card-illust"
            src={"/character_img/" + character_name[0] + "카드.webp"}
          />
        </div>
        <div className="right">
          <div className="character-profile-column">이름</div>
          <div className="character-profile-content">
            {character_detail.name + "(" + character_name[1] + ")"}
          </div>
          <div className="character-profile-column">성별</div>
          <div className="character-profile-content">
            {character_detail.profile.gender}
          </div>
          <div className="character-profile-column">등급</div>
          <div className="character-profile-content">
            {character_detail.profile.rareness}
          </div>
          <div className="character-profile-column">신의 눈</div>
          <div className="character-profile-content">
            {character_detail.profile.element}
          </div>
          <div className="character-profile-column">무기</div>
          <div className="character-profile-content">
            {character_detail.profile.weapon}
          </div>
          <div className="character-profile-column">운명의 자리</div>
          <div className="character-profile-content">
            {character_detail.profile.constellation}
          </div>
          <div className="character-profile-column">생일</div>
          <div className="character-profile-content">
            {character_detail.profile.birthday}
          </div>
          <div className="character-profile-column">소속</div>
          <div className="character-profile-content">
            {character_detail.profile.union}
          </div>
          <div className="character-profile-column">성우</div>
          <div className="character-profile-content">
            {character_detail.profile.actor.map((actor) => (
              <div key="">{actor}</div>
            ))}
          </div>
        </div>
      </div>

      <h3>특제 요리</h3>
      <div className="character-profile-2nd">
        <div className="left">
          <img
            src={
              "/character_img/" + character_detail.profile.cook.name + ".webp"
            }
          />
        </div>
        <div className="right">
          <h3>{character_detail.profile.cook.name}</h3>
          <div>
            {character_detail.profile.cook.content
              .split("\n")
              .slice(0, -1)
              .map((content) => (
                <p>{content}</p>
              ))}
            <p className="profile-describtion">
              {character_detail.profile.cook.content.split("\n").slice(-1)}
            </p>
          </div>
        </div>
      </div>

      <h3>재료</h3>
      <div className="character-materials">
        <div
          className="character-materials-column"
          onClick={() => material_penetrator()}
        >
          <div>돌파재료</div>
          <div className="materials-imgs">
            {character_detail.profile.materials.penetration.map((metarial) =>
              Array.isArray(metarial) ? (
                <div>
                  <img src={"/materials/" + metarial.slice(-1) + ".webp"} />
                </div>
              ) : (
                <div>
                  <img src={"/materials/" + metarial + ".webp"} />
                </div>
              )
            )}
          </div>
        </div>
        <div
          className="character-materials-column"
          onClick={() => material_skillor()}
        >
          <div>특성재료</div>
          <div className="materials-imgs">
            {character_detail.profile.materials.skills.map((metarial) =>
              Array.isArray(metarial) ? (
                <div>
                  <img src={"/materials/" + metarial.slice(-1) + ".webp"} />
                </div>
              ) : (
                <div>
                  <img src={"/materials/" + metarial + ".webp"} />
                </div>
              )
            )}
          </div>
        </div>
      </div>
      {penetrator ? (
        <PenetrationMaterial
          materials={character_detail.profile.materials.penetration}
        />
      ) : null}
      {skillor ? (
        <SkillsMaterial materials={character_detail.profile.materials.skills} />
      ) : null}
    </div>
  );
}

export interface penetration_materials {
  materials: Array<Array<string> | string>;
}

function PenetrationMaterial({ materials }: penetration_materials) {
  return (
    <div className="character-materials-list">
      <div className="character-materials-list-line">
        <div>lv.20</div>
        <div>
          <img src={"/materials/" + materials[0][0] + ".webp"} />
          <div className="materials-count">1</div>
        </div>
        <div></div>
        <div>
          <img src={"/materials/" + materials[2] + ".webp"} />
          <div className="materials-count">3</div>
        </div>
        <div>
          <img src={"/materials/" + materials[3][0] + ".webp"} />
          <div className="materials-count">3</div>
        </div>
      </div>

      <div className="character-materials-list-line">
        <div>lv.40</div>
        <div>
          <img src={"/materials/" + materials[0][1] + ".webp"} />
          <div className="materials-count">3</div>
        </div>
        <div>
          <img src={"/materials/" + materials[1] + ".webp"} />
          <div className="materials-count">2</div>
        </div>
        <div>
          <img src={"/materials/" + materials[2] + ".webp"} />
          <div className="materials-count">10</div>
        </div>
        <div>
          <img src={"/materials/" + materials[3][0] + ".webp"} />
          <div className="materials-count">15</div>
        </div>
      </div>

      <div className="character-materials-list-line">
        <div>lv.50</div>
        <div>
          <img src={"/materials/" + materials[0][1] + ".webp"} />
          <div className="materials-count">6</div>
        </div>
        <div>
          <img src={"/materials/" + materials[1] + ".webp"} />
          <div className="materials-count">4</div>
        </div>
        <div>
          <img src={"/materials/" + materials[2] + ".webp"} />
          <div className="materials-count">20</div>
        </div>
        <div>
          <img src={"/materials/" + materials[3][1] + ".webp"} />
          <div className="materials-count">12</div>
        </div>
      </div>

      <div className="character-materials-list-line">
        <div>lv.60</div>
        <div>
          <img src={"/materials/" + materials[0][2] + ".webp"} />
          <div className="materials-count">3</div>
        </div>
        <div>
          <img src={"/materials/" + materials[1] + ".webp"} />
          <div className="materials-count">8</div>
        </div>
        <div>
          <img src={"/materials/" + materials[2] + ".webp"} />
          <div className="materials-count">30</div>
        </div>
        <div>
          <img src={"/materials/" + materials[3][1] + ".webp"} />
          <div className="materials-count">18</div>
        </div>
      </div>

      <div className="character-materials-list-line">
        <div>lv.70</div>
        <div>
          <img src={"/materials/" + materials[0][2] + ".webp"} />
          <div className="materials-count">6</div>
        </div>
        <div>
          <img src={"/materials/" + materials[1] + ".webp"} />
          <div className="materials-count">12</div>
        </div>
        <div>
          <img src={"/materials/" + materials[2] + ".webp"} />
          <div className="materials-count">45</div>
        </div>
        <div>
          <img src={"/materials/" + materials[3][2] + ".webp"} />
          <div className="materials-count">12</div>
        </div>
      </div>

      <div className="character-materials-list-line">
        <div>lv.80</div>
        <div>
          <img src={"/materials/" + materials[0][3] + ".webp"} />
          <div className="materials-count">6</div>
        </div>
        <div>
          <img src={"/materials/" + materials[1] + ".webp"} />
          <div className="materials-count">20</div>
        </div>
        <div>
          <img src={"/materials/" + materials[2] + ".webp"} />
          <div className="materials-count">60</div>
        </div>
        <div>
          <img src={"/materials/" + materials[3][2] + ".webp"} />
          <div className="materials-count">24</div>
        </div>
      </div>
    </div>
  );
}
function SkillsMaterial({ materials }: penetration_materials) {
  return (
    <div className="character-materials-list">
      <div className="character-materials-list-line">
        <div>lv.2</div>
        <div>
          <img src={"/materials/" + materials[0][0] + ".webp"} />
          <div className="materials-count">3</div>
        </div>
        <div></div>
        <div>
          <img src={"/materials/" + materials[2][0] + ".webp"} />
          <div className="materials-count">6</div>
        </div>
        <div></div>
      </div>

      <div className="character-materials-list-line">
        <div>lv.3</div>
        <div>
          <img src={"/materials/" + materials[0][1] + ".webp"} />
          <div className="materials-count">2</div>
        </div>
        <div></div>
        <div>
          <img src={"/materials/" + materials[2][1] + ".webp"} />
          <div className="materials-count">3</div>
        </div>
        <div></div>
      </div>

      <div className="character-materials-list-line">
        <div>lv.4</div>
        <div>
          <img src={"/materials/" + materials[0][1] + ".webp"} />
          <div className="materials-count">4</div>
        </div>
        <div></div>
        <div>
          <img src={"/materials/" + materials[2][1] + ".webp"} />
          <div className="materials-count">4</div>
        </div>
        <div></div>
      </div>

      <div className="character-materials-list-line">
        <div>lv.5</div>
        <div>
          <img src={"/materials/" + materials[0][1] + ".webp"} />
          <div className="materials-count">6</div>
        </div>
        <div></div>
        <div>
          <img src={"/materials/" + materials[2][1] + ".webp"} />
          <div className="materials-count">6</div>
        </div>
        <div></div>
      </div>

      <div className="character-materials-list-line">
        <div>lv.6</div>
        <div>
          <img src={"/materials/" + materials[0][1] + ".webp"} />
          <div className="materials-count">9</div>
        </div>
        <div></div>
        <div>
          <img src={"/materials/" + materials[2][1] + ".webp"} />
          <div className="materials-count">9</div>
        </div>
        <div></div>
      </div>

      <div className="character-materials-list-line">
        <div>lv.7</div>
        <div>
          <img src={"/materials/" + materials[0][2] + ".webp"} />
          <div className="materials-count">4</div>
        </div>
        <div>
          <img src={"/materials/" + materials[1] + ".webp"} />
          <div className="materials-count">1</div>
        </div>
        <div>
          <img src={"/materials/" + materials[2][2] + ".webp"} />
          <div className="materials-count">4</div>
        </div>
        <div></div>
      </div>

      <div className="character-materials-list-line">
        <div>lv.8</div>
        <div>
          <img src={"/materials/" + materials[0][2] + ".webp"} />
          <div className="materials-count">6</div>
        </div>
        <div>
          <img src={"/materials/" + materials[1] + ".webp"} />
          <div className="materials-count">1</div>
        </div>
        <div>
          <img src={"/materials/" + materials[2][2] + ".webp"} />
          <div className="materials-count">6</div>
        </div>
        <div></div>
      </div>

      <div className="character-materials-list-line">
        <div>lv.9</div>
        <div>
          <img src={"/materials/" + materials[0][2] + ".webp"} />
          <div className="materials-count">12</div>
        </div>
        <div>
          <img src={"/materials/" + materials[1] + ".webp"} />
          <div className="materials-count">2</div>
        </div>
        <div>
          <img src={"/materials/" + materials[2][2] + ".webp"} />
          <div className="materials-count">9</div>
        </div>
        <div></div>
      </div>

      <div className="character-materials-list-line">
        <div>lv.10</div>
        <div>
          <img src={"/materials/" + materials[0][2] + ".webp"} />
          <div className="materials-count">16</div>
        </div>
        <div>
          <img src={"/materials/" + materials[1] + ".webp"} />
          <div className="materials-count">2</div>
        </div>
        <div>
          <img src={"/materials/" + materials[2][2] + ".webp"} />
          <div className="materials-count">12</div>
        </div>
        <div>
          <img src={"/materials/" + materials[3] + ".webp"} />
          <div className="materials-count">1</div>
        </div>
      </div>
    </div>
  );
}

export default CharacterDetail;
