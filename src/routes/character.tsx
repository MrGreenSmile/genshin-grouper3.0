import { useParams } from "react-router-dom";

function CharacterDetail() {
  const character_name = useParams().character_id;

  return <div>{character_name}</div>;
}

export default CharacterDetail;
