import { useState } from "react";

export interface profile {
  character_names: Array<string>;
  character_name: string;
  character_profile: {
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
  };
}

function CharacterProfile({
  character_names,
  character_name,
  character_profile,
}: profile) {
  return (
    <div className="character-profile">
      <div className="left">
        <img
          className="character-card-illust"
          src={"/character_img/" + character_names[0] + "카드.webp"}
        />
      </div>
      <div className="right">
        <div className="character-profile-column">이름</div>
        <div className="character-profile-content">
          {character_name + "(" + character_names[1] + ")"}
        </div>
        <div className="character-profile-column">성별</div>
        <div className="character-profile-content">
          {character_profile.gender}
        </div>
        <div className="character-profile-column">등급</div>
        <div className="character-profile-content">
          {character_profile.rareness}
        </div>
        <div className="character-profile-column">신의 눈</div>
        <div className="character-profile-content">
          {character_profile.element}
        </div>
        <div className="character-profile-column">무기</div>
        <div className="character-profile-content">
          {character_profile.weapon}
        </div>
        <div className="character-profile-column">운명의 자리</div>
        <div className="character-profile-content">
          {character_profile.constellation}
        </div>
        <div className="character-profile-column">생일</div>
        <div className="character-profile-content">
          {character_profile.birthday}
        </div>
        <div className="character-profile-column">소속</div>
        <div className="character-profile-content">
          {character_profile.union}
        </div>
        <div className="character-profile-column">성우</div>
        <div className="character-profile-content">
          {character_profile.actor.map((actor) => (
            <div key="">{actor}</div>
          ))}
        </div>
      </div>
    </div>
  );
}

export interface special_cook {
  special_cook: {
    name: string;
    content: string;
  };
}
function SpecialCook({ special_cook }: special_cook) {
  return (
    <div className="character-profile-cook">
      <div className="left">
        <img src={"/character_img/" + special_cook.name + ".webp"} />
      </div>
      <div className="right">
        <h3>{special_cook.name}</h3>
        <div>
          {special_cook.content
            .split("\n")
            .slice(0, -1)
            .map((line) => (
              <p>{line}</p>
            ))}
          <p className="profile-describtion">
            {special_cook.content.split("\n").slice(-1)}
          </p>
        </div>
      </div>
    </div>
  );
}

export interface each_materials {
  materials: Array<Array<string> | string>;
}
function PenetrationMaterial({ materials }: each_materials) {
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

function SkillsMaterial({ materials }: each_materials) {
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

export interface materials {
  penetration_materials: Array<Array<string> | string>;
  skill_materials: Array<Array<string> | string>;
}
function Materials({ penetration_materials, skill_materials }: materials) {
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
    <>
      <div className="character-materials">
        <div
          className="character-materials-column"
          onClick={() => material_penetrator()}
        >
          <div>돌파재료</div>
          <div className="materials-imgs">
            {penetration_materials.map((metarial) =>
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
            {skill_materials.map((metarial) =>
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
        <PenetrationMaterial materials={penetration_materials} />
      ) : null}
      {skillor ? <SkillsMaterial materials={skill_materials} /> : null}
    </>
  );
}

export { CharacterProfile, SpecialCook, Materials };
