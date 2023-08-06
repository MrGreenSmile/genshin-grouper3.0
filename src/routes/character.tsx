import { useParams } from "react-router-dom";
import { characters } from "../datas/combinations";

import characters_detail from "../datas/characters_detail";
import * as Details from "./character_detail";

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
        <TipInformation
          character_name={character_name}
          character_detail={character_detail}
        />
      </div>

      <ToTop />
      <ToMain />
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
    skills: {
      normal_attack: {
        name: string;
        content: string;
      };
      normal_skill: {
        name: string;
        content: string;
      };
      ultimate_skill: {
        name: string;
        content: string;
      };
      break_skills: {
        first: {
          name: string;
          content: string;
        };
        fourth: {
          name: string;
          content: string;
        };
      };
      inherence_skills: {
        name: string;
        content: string;
      }[];
      constellation: {
        name: string;
        content: string;
      }[];
    };
    tips: {
      summary: string;
      weapons: {
        name: string;
        content: string;
      }[];
      artifacts: {
        recommand: {
          watch: string;
          grail: string;
          crown: string;
          sub_effect: string;
        };
        artifact_list: {
          name: Array<string>;
          content: string;
        }[];
      };
      partners: {
        name: Array<string>;
        content: string;
      }[];
    };
  };
}

function BasicInformation({ character_name, character_detail }: detail_info) {
  return (
    <>
      <h2>기본 정보</h2>
      <div className="character-summary">
        {character_detail.summary.split("\n").map((summ) => (
          <p key="">{summ}</p>
        ))}
      </div>

      <h3>프로필</h3>
      <Details.CharacterProfile
        character_names={character_name}
        character_name={character_detail.name}
        character_profile={character_detail.profile}
      />

      <h3>특제 요리</h3>
      <Details.SpecialCook special_cook={character_detail.profile.cook} />

      <h3>재료</h3>
      <Details.Materials
        penetration_materials={character_detail.profile.materials.penetration}
        skill_materials={character_detail.profile.materials.skills}
      />

      <h3>특성</h3>
      <Details.Skills
        character_name={character_name[0]}
        character_skill={character_detail.skills}
      />
    </>
  );
}
function TipInformation({ character_detail }: detail_info) {
  return (
    <>
      <h2>팁</h2>
      <h3>요령</h3>
      {character_detail.tips.summary.split("\n").map((line) => (
        <p>{line}</p>
      ))}

      <h3>무기</h3>
      <div className="character-weapons">
        {character_detail.tips.weapons.map((weapon) => (
          <Details.Weapons weapon={weapon} />
        ))}
      </div>

      <h3>성유물</h3>
      <Details.ArtifactAttribute
        recommand={character_detail.tips.artifacts.recommand}
      />
      <div className="character-artifacts">
        {character_detail.tips.artifacts.artifact_list.map((artifact) => (
          <Details.Artifacts artifacts={artifact} />
        ))}
      </div>

      <h3>파트너</h3>
      {character_detail.tips.partners.map((partner) => (
        <Details.Partners partner={partner} />
      ))}
    </>
  );
}

function ToMain() {
  return (
    <div className="to-top second-top" onClick={() => (location.href = "/")}>
      Main
    </div>
  );
}
function ToTop() {
  return (
    <div className="to-top" onClick={() => (location.href = "#top")}>
      Top
    </div>
  );
}

export default CharacterDetail;
