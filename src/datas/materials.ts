//  ---보석
const gem = ["가루", "조각", "덩이", ""];
const geo = "단단한 황옥";
const mano = "불타오르는 마노";
const frozen = "서늘한 빙옥";
const lapis = "순수한 청금석";
const amethyst = "승리의 자수정";
const jade = "자라나는 비취";
const turquois = "자유로운 터키석";

const geos = gem.map((g) => (g === "" ? geo : geo + " " + g));
const manos = gem.map((g) => (g === "" ? mano : mano + " " + g));
const frozens = gem.map((g) => (g === "" ? frozen : frozen + " " + g));
const lapises = gem.map((g) => (g === "" ? lapis : lapis + " " + g));
const amethysts = gem.map((g) => (g === "" ? amethyst : amethyst + " " + g));
const jades = gem.map((g) => (g === "" ? jade : jade + " " + g));
const turquoises = gem.map((g) => (g === "" ? turquois : turquois + " " + g));

//  ---책
const book_name = ["가르침", "인도", "철학"];

const freedom = "자유";
const conflict = "투쟁";
const quote = "시문";

const industry = "근면";
const prosperity = "번영";
const golden = "황금";

const fusei = "부세";
const tenkou = "천광";
const fuuga = "풍아";

const remonstrance = "간언";
const implement = "실천";
const creativity = "창의";

const freedoms = book_name.map((book) => freedom + "의 " + book);
const conflicts = book_name.map((book) => conflict + "의 " + book);
const quotes = book_name.map((book) => quote + "의 " + book);

const industries = book_name.map((book) => industry + "의 " + book);
const prosperities = book_name.map((book) => prosperity + "의 " + book);
const goldens = book_name.map((book) => golden + "의 " + book);

const fuuseis = book_name.map((book) => fusei + "의 " + book);
const tenkous = book_name.map((book) => tenkou + "의 " + book);
const fuugas = book_name.map((book) => fuuga + "의 " + book);

const remonstrances = book_name.map((book) => remonstrance + "의 " + book);
const implementes = book_name.map((book) => implement + "의 " + book);
const creativities = book_name.map((book) => creativity + "의 " + book);

//  ---몬스터 재료
const guragura = ["구라구라 꽃꿀", "반짝반짝 꽃꿀", "원소 꽃꿀"];
const chuchu_mask = ["부서진 가면", "오염된 가면", "불길한 가면"];
const chuchu_scroll = ["이능 두루마리", "봉마의 두루마리", "금주의 두루마리"];
const chuchu_arrow = ["견고한 화살촉", "날카로운 화살촉", "역전의 화살촉"];
const slime_esens = ["슬라임 응축액", "슬라임청", "슬라임 원액"];
const fatui_medal = ["신병의 휘장", "사관의 휘장", "위관의 휘장"];
const crows_medal = [
  "보물찾기 까마귀 휘장",
  "실버 까마귀 휘장",
  "골드 까마귀 휘장",
];
const handguard = ["오래된 코등이", "카게우치 코등이", "명검 코등이"];
const spirit_core = [
  "떠도는 정령 코어 껍데기",
  "떠도는 정령 코어",
  "떠도는 정령 결정화 코어",
];
const spores = ["버섯몬 포자", "형광 포자 분말", "포낭 결정 가루"];
const red_silk = ["빛바랜 붉은 비단", "장식된 붉은 비단", "금자수 붉은 비단"];

//  ---결론
export {
  geos, //보석
  manos,
  frozens,
  lapises,
  amethysts,
  jades,
  turquoises,
  freedoms, //책
  conflicts,
  quotes,
  industries,
  prosperities,
  goldens,
  fuuseis,
  tenkous,
  fuugas,
  remonstrances,
  implementes,
  creativities,
  guragura, //몬스터 재료
  chuchu_mask,
  chuchu_scroll,
  chuchu_arrow,
  slime_esens,
  fatui_medal,
  crows_medal,
  handguard,
  spirit_core,
  spores,
  red_silk,
};
