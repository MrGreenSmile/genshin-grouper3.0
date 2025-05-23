import * as materials from "../equipments/materials";

const xiao_detail = {
  name: "소",
  summary: `바람과 창을 사용하는 메인 딜러. 낙공을 메인으로 사용한다.
    <em>소</em>는 삼안오현 선인으로, 호법야차라 불리는 퇴마 전문 선인들의 대장이다. 퇴마 대상은 마신의 힘에 물든 마물들. 하지만 오랜 세월동안 마물들과 싸워온 탓에 업장이라 불리는 마신의 잔재이자 독소가 몸과 정신을 물들였고, 호법야차의 다른 구성원들은 미친 채로 사라지거나 비명횡사하며 비극적 결말을 맞이했다. 이로인해 많은 야차들이 몰락했다. <em>소</em>는 유일하게 살아남아 지금까지도 호법야차의 명맥을 잇고 있다. 이 내용이 전설처럼 내려전해지며「호법야차선중록」에 담겼다. 여담으로 삼안오현에서 '삼안'은 제 3의 눈, 즉 신의 눈을 의미한다.
    야차들의 대장이자 가장 강한 야차였던 <em>소</em> 역시 이 업장으로부터 자유롭지 못했다. 한번은 지칠대로 지친 상태에서 업장에 잠식되어 이성을 잃은 적이 있었지만, 어느 피리꾼의 맑은 선율을 들으며 겨우 진정할 수 있었다. 그의 업장은 주변 인간과 마물들에게도 영향을 줄 수 있어, <em>소</em>는 평소에는 <em>망서객잔</em> 꼭대기에 은거하며 사람들을 피하고 있다.
    <em>소</em>는 과거 다른 마신의 소유물이었고, 약점이 잡혀 살인을 일삼던 불우한 과거를 가지고 있었다. 그의 손에 많은 무고한 이와 야망가들이 쓰러졌다. <em>소</em>의 업장은 이때부터 쌓이기 시작했다.
    <em>암왕제군</em>이 <em>소</em>를 그 마수에게서 구해내 <em>소</em>라는 가명을 붙여주었다. 본명을 그대로 사용하면 원한을 살 것이었기 때문이다. <em>소</em>라는 이름은 끝없는 고난과 시련을 겪은 요괴의 이름이었다. <em>소</em>는 자신을 구해준 <em>암왕제군</em>에게 충성을 다했고, 지금까지도 그의 명을 받들어 호법야차의 일을 하고 있다. 현재는 신분을 바꾼 <em>암왕제군</em>을 당연하게도 한눈에 알아봤다. 물론 한낱 인간의 신분이 된 <em>암왕제군</em>이 자신을 높여 부를 땐 당황하고 곤란해하기도 한다.
    평소 사람들을 멀리한 그이지만, <em>여행자</em>와의 만남으로 태도가 점차 바뀌게 되었다. 리월에서 <em>암왕제군</em> 암살사건을 조사하기 위해 선인들을 찾아다닐 당시, <em>암왕제군</em>이 남긴 약속의 증표인 백무금기 비록과 <em>행인두부</em>를 보이며 예우를 갖춘 모습을 좋게 봤다. 오셀과의 전투 후에는 무슨 일이 생기면 자신의 이름을 부르라 알려준다. <em>소</em>가 속세의 주전자에서 언급하길, <em>여행자</em>의 곁에 있으면, 업장이 약해진다고 한다. (여행자의 정화능력이 도움이 되는 듯 하다.)
    이후로 축제 때마다 챙겨주는 <em>여행자</em>와는 둘만의 행사를 갖기도 하며 많이 가까워졌다. 다른 사람이 필요로 할 때 <em>여행자</em>가 대신 불러 부탁할 때에도 들어줄 정도로 <em>여행자</em>를 신경써준다. 이제는 사람이 많이 모이는 연회에 (반강제로, 물론 범인은 <em>호두</em>) 참여할 수 있을 정도로 마음이 열리게 되었다.
    사실 <em>소</em>는 먹을 것에는 눈이 쌓이면 눈을 퍼먹으면 된다고 할 정도로 무신경한데, <em>행인두부</em> 만큼은 좋아한다. 행인두부는 두부라고 부르긴 하지만, 은행으로 만든 일종의 푸딩이다. 특히 어린아이들이 좋아하는 달달한 간식거리인데, 단맛 보다는 특유의 식감이 동심을 잃은 <em>소</em>에게 과거 <em>아름다운 꿈</em>을 떠올리게 한다.
    그가 머물고 있는 망서객잔은 <em>칠성</em>에서 파견된 퇴마 전문가들이 <em>소</em>를 돕기위해 위장운영하고 있다.
    <em>소</em>는 축제를 별로 좋아하지 않는다. 축제란 자고로 과거 선인들이 마신들을 물리친 일화를 재현하며 기리는 행사였는데, 점차 성대해져 지금의 모습이 되었다. 이때문에 과거 마신의 잔재가 축제때만 되면 올라와 리월을 위협한다. <em>소</em>는 사람 많은 곳을 꺼리는 것도 있지만, 이 위협을 물리치기 위해서라도 리월에 돌아오지 않는다. <em>여행자</em>와 만난 후로는, 단 둘이서 작은 행사를 갖게 되었다.
    <em>소</em>는 미소년에 특유의 무거운 이야기로 초반부터 인기가 많았다. 특히 <em>여행자</em>와의 애틋한 분위기로 인해 비공식 커플로 여겨지고 있다. <em>남행자</em>는... 화이팅.`,
  profile: {
    en_name: "魈, Xiao",
    gender: "남성",
    rareness: "★★★★★",
    element: "바람",
    weapon: "장병기",
    constellation: "황금날개천붕왕",
    birthday: "4/17",
    union: "리월 - 선인",
    actor: [
      "심규혁(前 정유미)",
      "松岡 禎丞(마츠오카 요시츠구)",
      "Laila Berzins",
      "kinsen",
    ],
    cook: {
      name: "아름다운 꿈",
      content:
        "'행인두부' 제작 시 획득 가능.\n파티 내 모든 캐릭터의 공격력이 114pt 증가한다. (지속시간 : 300초) 다인모드 시 자신의 캐릭터에만 적용된다.\n소의 특제 요리. 그의 「아름다운 꿈」은 아주 간단하다. 그저 아름다운 꿈을 꾸기만 하면 된다.",
    },
    materials: {
      penetration: [
        materials.turquoises,
        "설익은 옥",
        "청심",
        materials.slime_esens,
      ],
      skills: [
        materials.prosperities,
        "무예의 혼",
        materials.slime_esens,
        "지식의 왕관",
      ],
    },
  },
  skills: {
    normal_attack: {
      name: "권적미진",
      content:
        "일반 공격 : 창으로 최대 6번 공격한다.\n강공격 : 일정 스태미나를 소모해 올려치기 공격을 가한다.\n낙하 공격 : 공중에서 땅을 내려찍어 경로상의 적을 공격하고 착지 시 범위 피해를 준다. <em>소</em>는 낙하 공격 시, 추락 피해를 입지 않는다.",
    },
    normal_skill: {
      name: "풍륜양립",
      content:
        "아주 빠르게 돌진하여 경로상의 적에게 바람 원소 피해를 준다. 공중에서도 발동 가능하다. (초기 사용 가능 횟수 : 2회)",
      sub_content: [
        {
          name: "",
          content: "",
        },
      ],
      comment:
        "타국에선 세계가 두 개의 거대한 풍륜에 의해 파괴될 것이라는 전설이 있다. 소(魈)의 창술은 절정에 이르러 마치 두 개의 풍륜이 동시에 적을 찢어 버리는 것처럼 보인다.",
    },
    dash_skill: {
      name: "",
      content: "",
      comment: "",
    },
    ultimate_skill: {
      name: "나자의 춤",
      content:
        "수천 년 전 악마와 요괴들을 두려움에 떨게 했던 <em>야차의 가면</em>을 착용한다.",
      sub_content: [
        {
          name: "야차의 가면",
          content:
            "· <em>소</em>의 점프력이 대폭 상승한다.\n· <em>소</em>의 공격 범위와 가하는 피해가 증가한다.\n· 공격은 바람 원소 피해로 전환되며, 해당 원소 전환은 다른 원소 부여 효과로 대체될 수 없다.\n해당 상태일 때 <em>소</em>는 HP를 지속적으로 잃는다.\n해당 효과는 <em>소</em>가 퇴장할 때 사라진다.",
        },
      ],
      comment:
        "항마의 가면을 쓰면 요마를 소멸시키는 잔인한 「호법야차」가 나타난다. 강한 힘을 얻었으나, 큰 고통도 함께 따라올지니 그 이름은 「나자의 춤」이다.",
    },
    break_skills: {
      first: {
        name: "항마 · 평요대성",
        content:
          "<em>나자의 춤</em> 상태에서 <em>소</em>가 가하는 모든 피해가 5% 증가하고, 이후 스킬 지속 시간 동안 3초가 지날 때마다 가하는 피해가 추가로 증가한다. 피해 보너스는 최대 25%까지 획득한다.",
      },
      fourth: {
        name: "괴겁 · 국토연진",
        content:
          "<em>풍륜양립</em> 발동 후, 7초 동안 <em>풍륜양립</em>으로 가하는 피해가 15% 증가한다. (지속시간 : 7초, 최대 중첩수 : 3회) 중첩 시 지속 시간이 갱신된다.",
      },
    },
    inherence_skills: [
      {
        name: "신통 · 공준유희",
        content:
          "파티 내 자신의 캐릭터의 등반 시 소모하는 스태미너가 20% 감소한다. 같은 효과의 고유 특성과 중첩되지 않는다.",
      },
    ],
    constellation: [
      {
        name: "괴겁 · 삼계파멸",
        content: "<em>풍륜양립</em>의 사용 가능 횟수가 1회 증가한다.",
      },
      {
        name: "공겁 · 피어난 공허의 꽃",
        content:
          "대기 상태일 때 <em>소</em> 자신의 원소 충전 효율이 25% 상승한다.",
      },
      {
        name: "항마 · 분노의 형상",
        content: "<em>풍륜양립</em> 스킬 레벨+3 (최대 Lv.15)",
      },
      {
        name: "신통 · 사라진 고통",
        content: "<em>소</em>의 HP가 50% 미만일 때, 방어력이 100% 상승한다.",
      },
      {
        name: "성겁 · 늘어나는 번뇌",
        content: "<em>나자의 춤</em> 스킬 레벨+3 (최대 Lv.15)",
      },
      {
        name: "항마 · 호법야차",
        content:
          "<em>나자의 춤</em> 상태에서 낙하 공격으로 최소 2명의 적을 명중하면, 즉시 <em>풍륜양립</em> 사용 횟수 1회를 획득하며, 1초 동안 재사용 대기시간에 상관없이 <em>풍륜양립</em>을 발동할 수 있다.",
      },
    ],
  },
  tips: {
    summary:
      "주 포지션은 메인 딜러.\n특성은 기본 공격 -> 원소 폭발 -> 원소 전투 순이다. 메인 딜러들은 전체적으로 고루 찍어주는 게 좋다.\n보통 낙공을 하게 되면 추락 피해를 줄일수는 있지만, 아얘 없어지는 것은 아니다. 다만 <em>소</em>의 경우, 추락 피해를 없애주는 패시브를 가지고 있다.\n전투 스킬은 한 방향 일직선으로 나간다. 공중에서도 쓸 수 있어 이동기로 활용할 수 있으며, 공중에서 사용할 경우, 높이에 상관없이 낙공을 할 수 있게 된다. 특히, 원소 입자를 만들어줘 원소 충전에 도움이 된다. 다만 문제는 <em>나자의 춤</em> 상태에선 원소 입자가 만들어지지 않아 <em>파루잔</em> 같은 바람 파트너가 강제된다.\n원소 폭발은 기본공격과 점프력 버프, 바람 원소 부여를 갖춘 버프 스킬이다. 핵심은 낙하 공격으로, 낙하 공격의 피해 범위도 증가해, 높은 계수의 낙하 공격을 주로 쓰게 된다. 주의할 점은 지속시간 동안 HP가 서서히 줄어든다는 것. 따라서 체력 관리나 보호막이 필요할 수 있다. 또한 낙공이 적들을 밀어내는 경향이 있어 신경써야 하는 부분이다.\n별자리는 1번과 6번이 좋은데, 나머지는 효율이 좋지 못하다고 평가된다. 1번과 6번은 <em>소</em>의 기동력을 증가시켜줘 더 역동적이고 빠른 템포를 유지할 수 있게 한다. 2번은 원소 충전이 불리한 <em>소</em>에게 큰 도움이 되지 않는다. 4번의 경우, HP 감소로 생존력에 패널티를 갖는 <em>소</em>이지만, 딜러 세팅을 하는 이상 방어력이 높아져도 큰 도움이 되지 않는다.\n앞서 언급했듯, <em>소</em>는 원소 충전에 문제가 있기 때문에, 파트너는 원소 충전에 도움이 되는 바람 파트너가 필수이다. 특히 바람 메인 딜러 보조에 특화된 <em>파루잔</em>은 반드시 들어가는 편이며, <em>소</em> 한정으로 낙공 버프를 줄 수 있는 <em>한운</em>도 반 필수이다.",
    weapons: [
      {
        name: "화박연",
        content:
          "치명타 확률과 높은 기초 공격력을 갖춘 무기. 추가 효과로 적을 맞출수록 공격력 버프를 주는데, <em>소</em>의 딜타임이 길어 이를 맞춰줄 수 있다. <em>진사 왕생록</em> 4셋과 시너지가 좋다.",
      },
      {
        name: "호마의 지팡이",
        content:
          "높은 치명타 피해 버프를 받을 수 있어, <em>그림자 사냥꾼</em> 4셋과 함께 쓸 때, <em>화박연</em> 보다 고점이 높다. 다만, 보통 힐러를 함께하기 때문에 HP 50% 미만 조건은 맞추기 어렵다.",
      },
      {
        name: "관홍의 창",
        content:
          "높은 공격력 버프를 받을 수 있고, 보호막이 있을 때 버프가 강화된다. 치명타 관련 옵션이 없어 치명타 세팅에 난이도가 높아지지만, 보호막 캐릭터와 함께 한다면 좋은 무기이다.",
      },
      {
        name: "식재",
        content:
          "<em>신학</em>과 함께 나온 <em>신학</em>의 전용무기. <em>신학</em>에게 맞춰져 높은 공격력을 받을 수 있다. <em>관홍의 창</em>과 마찬가지로 치명타 세팅의 난이도가 높아지지만, 세팅이 된다면 고려해 볼만 하다.",
      },
      {
        name: "천암장창",
        content:
          "추가 능력치가 공격력이고, 파티 내 리월 캐릭터 수만큼 공격력과 치명타 확률 버프를 얻을 수 있다. <em>소</em>부터가 리월 소속이라 써볼만 하다.",
      },
      {
        name: "결투의 창",
        content:
          "기행으로 '구매'할 수 있는 무기. 추가 능력치가 치명타 확률이라 세팅에 큰 도움이 되고, 추가 효과으로 주변의 적이 2명 이상일 땐 공격력과 방어력 버프를, 1명만 있을 땐 더 큰 공격력 버프만을 받을 수 있어 좋은 범용성을 가지고 있다. 특히 소는 다수 전투가 많아 생존력까지 얻을 수 있고, 다소 부족한 1대1 전투도 보정받을 수 있다.",
      },
      {
        name: "흑암창",
        content:
          "추가 능력치로 치명타 피해, 추가 효과로 적을 처치할 때마다 공격력 버프를 얻는다. <em>소</em>의 경우, 돌파 스탯이 치명타 확률이라 잘 어울린다. 다만, 스타라이트로 '구매'해야 하는 무기라 꽤나 비싸다.",
      },
      {
        name: "별의 낫 프로토타입",
        content:
          "본래 서포터용 무기지만, 추가 능력치가 원소 충전 효율기반이라 사이클이 깔끔하게 돈다는 장점이 있다. 다만 추가 효과로 받을 수 있는 버프가 일반/강공격이라 낙공에는 버프를 받지 못한다.",
      },
      {
        name: "백술창",
        content:
          "3성 메인 딜러 무기. 추가 능력치로 치명타 확률을 주고, 추가 효과으로 평타 강화가 되어 3성 치곤 쓸만하다.",
      },
    ],
    artifacts: {
      recommand: {
        watch: "공격력%",
        grail: "바람 원소 피해량, 공격력%",
        crown: "치명타 피해, 치명타 확률",
        sub_effect: "치명타 확률, 치명타 피해, 공격력%, 원소 충전 효율",
      },
      artifact_list: [
        {
          name: ["그림자 사냥꾼"],
          content:
            "4셋 효과로 HP를 회복하거나 잃을 때, 치명타 확률을 최대 36% 얻을 수 있다.\n<em>소</em>의 경우, <em>나자의 춤</em> 상태에서 지속적으로 HP를 잃고, 성장 스탯이 치명타 확률이라 치명타 피해에 맞춰 세팅하면 기존의 <em>진사 왕생록</em>보다 높은 고점을 뽑을 수 있다.\n다만, 2셋 효과를 거의 보지 못하고, 무기 역시 치명타 피해나 공격력 무기가 고정된다.",
        },
        {
          name: ["진사 왕생록"],
          content:
            "4셋 효과로 원소 폭발 사용 및 사용 이후 HP가 감소할 때 지속적으로 공격력 버프를 받을 수 있다. <em>푸리나</em>를 함께 쓰는 것이 아닌 이상, 효과를 볼 수 있는 캐릭터가 <em>소</em> 밖에 없다.\n공격력 버프를 받는 만큼 치명타 확률 세팅이 필요한데, 이때문에 <em>화박연</em>과의 시너지가 좋아진다.",
        },
        {
          name: ["모래 위 누각의 역사"],
          content:
            "4셋 효과로, 강공기을 맞춘 후 평타 버프를 받을 수 있어 <em>소</em> 역시 활용 가능하다.\n다만, <em>소</em>의 경우, 강공격을 맞추는 동안 <em>나자의 춤</em>의 지속시간이 낭비된다는 점, <em>파루잔</em>과 함께 한다면 이미 피해 증가 버프를 받기 때문에 효율이 떨어진다는 점에서 우선순위가 떨어진다.",
        },
        {
          name: ["검투사의 피날레", "청록색 그림자"],
          content:
            "세팅을 갖추기 전에 거쳐가는 세팅. <em>진사 왕생록</em>이 나오기 전까지 메인으로 사용하던 세팅이었고, 나온 후에는 가성비로 사용할 수 있는 세팅이다.",
        },
      ],
    },
    partners: [
      {
        name: ["Faruzan", "Xianyun", "Jean", "Sucrose"],
        content:
          "바람 메인 딜러에 특화된 바람 서포터.\n<em>파루잔</em>의 경우, 바람 내성 감소, 바람 피해량 증가, 몹몰이, 원소 충전 배터리 역할이 가능하며, 6돌파 시 바람 원소 치명타 피해 버프까지 받을 수 있다. 다만 역으로 6돌파가 아닐 경우, 버프 수준이 높은 편은 아니며, 특시 4돌파가 되지 않을 경우 <em>파루잔</em>의 원소 충전까지 문제가 되어, 6돌 <em>파루잔</em>의 의존도가 매우 높아진다.\n<em>한운</em>의 경우, 파티 전체에 힐을 해줄 수 있는 힐러이자, 낙공 버프를 추가로 제공해 줄 수 있어, <em>소</em>에게 특화된 서포터이다.\n특히 둘 다 강력한 버프를 제공해주고, <em>소</em>와 같은 바람 캐릭터라는 원소 충전에도 좋아, 둘이 함께 쓰이는 경우가 많다.\n<em>진</em>의 경우, <em>파루잔</em>과 <em>한운</em>이 나오기 전부터 함께한 파트너다. 힐, 바람 공명, 원소 충전 배터리를 보고 쓰게 되지만, 4돌파 이후 바람 내성 감소를 갖추게 된다.\n<em>설탕</em>의 경우, <em>제례의 악장</em>을 가지고 원소 스킬 두방을 한번에 때렸을 때, 원소 충전에 큰 도움이 된다.",
      },
      {
        name: ["Zhongli"],
        content:
          "강력한 보호막을 갖춘 파트너. <em>파루잔</em>, <em>한운</em>이 없거나, 있더라도 안정감이 떨어지거나, 안정감과 경직 저항을 우선시 한다면 여전히 활용되는 편이다.",
      },
      {
        name: ["Bennett"],
        content:
          "힐과 공격력 버프를 동시에 제공하는 파트너. 다만, <em>소</em>의 낙공으로 인해 적들이 밀려나 장판을 벗어나야 하는 경우가 많고, 도트힐로 들어와 위험한 상황에서의 안정감이 부족해진다는 단점이 있다.",
      },
      {
        name: ["Furina"],
        content:
          "<em>푸리나</em>는 물 뿌리개와 원소 폭발의 <em>열기</em> 스택을 통해 피해 증가 버프를 줄 수 있는 파트너다. 특히 <em>열기</em> 스택은 HP가 감소하거나 증가할 때마다 쌓이는데, <em>소</em>는 자체적으로 HP를 감소시키는 특성이 있어, 스택을 빠르게 쌓을 수 있다는 장점이 있다.\n다만, <em>푸리나</em> 자체가 다른 조합에서도 높은 활용도를 갖고 있어, <em>소</em> 조합보다는 다른 조합에 활용되는 경우가 많다.",
      },
      {
        name: ["Albedo"],
        content:
          "<em>알베도</em>는 원소 충전에 도움을 줄 수 있다. 특히 4돌파시, <em>태양의 꽃</em> 범위 내에서 낙공 피해 버프를 받을 수 있다. 다만, <em>파루잔</em>과 <em>한운</em>이 나온 시점부터 입지를 잃고, 현재는 잘 쓰이지 않는다.",
      },
      {
        name: ["Xiangling"],
        content:
          "<em>향릉</em>의 강력한 원소 폭발, <em>화륜</em>을 활용한다. 특히 <em>화륜</em>은 <em>소</em>가 하늘을 날고 있을 때에도 지면에 붙어 지속적으로 불 피해를 줄 수 있어, 활용도가 좋다.\n또한 <em>향릉</em>은 <em>카즈하</em>, <em>베넷</em>과 함께, 고점이 높은 것으로 인정받은, 일명 <em>-향카배</em> 조합으로, <em>파루잔</em>이 나오기 전부터 자주 사용되었다.",
      },
    ],
  },
};

export default xiao_detail;
