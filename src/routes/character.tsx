import { useParams } from "react-router-dom";
import { characters } from "../datas/combinations";
import characters_detail from "../datas/characters_detail.json";

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
        <BasicInformation character_detail={character_detail} />
        <img
          className="character-card-illust"
          src={"/character_img/" + character_name[0] + "카드.webp"}
        />
      </div>
    </div>
  );
}

export interface detail_info {
  character_detail: JSON;
}

function BasicInformation({ character_detail }: detail_info) {
  return (
    <div>
      <h2>기본 정보</h2>

      <div className="character-summary">
        {character_detail.summary.split("\n").map((summ) => (
          <p key="">{summ}</p>
        ))}
      </div>
    </div>
  );
}

export default CharacterDetail;
