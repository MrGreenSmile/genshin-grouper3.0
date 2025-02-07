import * as materials from "./materials";

const albedo_detail = {
  name: "알베도",
  summary: `바위와 한손검을 사용하는 서브 딜러.
    페보니우스 기사단 소속 수석 연금술사 겸 수사대 대장으로, 뛰어난 지능과 지식과 함께 나긋하고 감성적인 면을 가졌다.
    <em>알베도</em>는 연금술사인데다 천재로 유명하고 표정도 것보기에는 차가워 보이지만, 따뜻하고 배려심이 있다. 말투도 나긋하고 친절하다. 또한 지능이 높아서 그런지 눈치도 빠르다. 그림과 요리라는 감성적인 취미가 있는데, 실력은 두루 뛰어나다.
    <em>알베도</em>에겐 <em>클레</em>라는 동생이 있다. <em>클레</em>는 본래 마녀 <em>앨리스</em>의 딸이지만, 워낙 자유분방한 성격에 <em>알베도</em>에게 맡겨놓았다. 동시에 <em>엘리스</em>는 <em>알베도</em>를 양자로 둬 둘은 남매 사이가 된다. <em>클레</em>는 오빠인 <em>알베도</em>를 잘 따르며, <em>알베도</em>는 <em>클레</em>를 지극정성으로 돌본다.
    <em>알베도</em>에겐 두 명의 제자가 있다. 한 명은 몬드성 연금술 작업대에 있는 <em>데마로우스</em>, 다른 한 명은 <em>설탕</em>이다. <em>알베도</em>는 타지역에서도 자문을 구할 정도로 천재이기 때문인지, 두 사람 모두 상당히 겸손한 편이다. 물론 <em>데마로우스</em>는 초심자에게 연금술을 가르치기도 하고, <em>설탕</em>은 생물학에 가까운 생물 연금술로 품종개량도 하는 걸 보면 둘 다 실력이 떨어지지 않는다.
    <em>알베도</em>는 순수히 탐구적인 면에서 <em>여행자</em>에게 관심이 많았다. 특히 알고 지낸지 얼마되지 않은 시점에는 <em>여행자</em>의 정체나 힘의 원천 등을 알아내기 위해 실험을 진행했다. 현재는 자신의 비밀도 공유할 정도의 친구가 되었다.
    <em>알베도</em>는 사실 인조인간이다. 그의 목에 나타난 마름모 모양의 표식이 그 흔적이다. 그를 만든것은 수 백년 전 켄리아 출신의 <em>라인도티르</em>. 당시 켄리아는 인구가 적어 생명 창조를 다루는 연금술 학문인 흑토술이 발달했다. <em>라인도티르</em>는 흑토술로 <em>알베도</em>를 만들고, '백악의 아이'라는 호칭을 붙여 연금술을 가르쳤다. 그러던 중 <em>라인도티르</em>는 갑자기 홀연히 사라졌고, 그가 남긴 추천서에 따라 몬드의 <em>앨리스</em>에게 가게 된다. <em>엘리스</em>는 <em>알베도</em>의 추천서와 사연을 듣고 양자로 받아주게 되었다.
    <em>알베도</em>는 이 과거로 인해 자신의 정체성에 혼란을 느꼈다. 그는 <em>라인도티르</em>의 또다른 작품인 '악룡' <em>두린</em>이 묻힌 드래곤 스파인에 거점을 잡아 <em>두린</em>을 비롯한 연금술 연구에 몰두했다. 사실 악룡 <em>두린</em>은 처음부터 악하지 않았다. <em>두린</em>은 흑토에 오염되어 재앙을 뿌리고 다닌 탓에 악룡으로 낙인 찍혔고, <em>알베도</em>는 자신도 그렇게 될지 모른다고 생각해 외진 곳에 거점을 잡았던 것이다. 그러던 중, <em>여행자</em>와의 다양한 모험, 그중 <em>두린</em>의 힘에 영향을 받은 거대 구라구라꽃이 자신을 모방한 사건을 기점으로 생각을 조금씩 고치게 되었다.
    <em>알베도</em>는 처음엔 따뜻나긋한 성격에 미소년 외모로 인기가 있었지만, 원신의 그래픽 수준이 높아지고, 스타레일까지 나오면서 3D 모델 퀄리티가 비교되기 시작했다. 게임 내에서도 다양한 조합에 빈자리가 나면 들어갈 수 있을 정도로 범용적이었지만, 그 빈자리가 하나씩 메워지면서 점차 입지를 잃고 있다. 바위 조합, 특히 <em>나비아</em>가 나오면서 그나마 나아졌다.`,
  profile: {
    en_name: "Albedo",
    gender: "남성",
    rareness: "★★★★★",
    element: "바위",
    weapon: "한손검",
    constellation: "백악의 아이",
    birthday: "09/13",
    union: "몬드 - 페보니우스 기사단",
    actor: ["김명준", "野島 健児(노지마 켄지)", "Khoi Dao", "Mace"],
    cook: {
      name: "숲의 꿈",
      content:
        "'버터 생선 구이' 제작 시 획득 가능.\n파티 내 모든 캐릭터의 보호막 강화 효과가 35% 증가한다. (지속시간 : 300초) 다인모드 시, 자신의 캐릭터에게만 적용된다.\n알베도의 특제 요리. 야채와 과일이 풀이 되고 나무가 된다. 알록달록한 성벽을 돌고 갈색 오솔길을 따라 주황색 성으로 들어선 세계가 담겨있다. 꽃이 핀 듯 부드럽고 달콤한 맛에 백발의 왕자가 웃음을 머금는다.",
    },
    materials: {
      penetration: [
        materials.geos,
        "현암의 탑",
        "세실리아 꽃",
        materials.chuchu_scroll,
      ],
      skills: [
        materials.quotes,
        "하늘을 삼킨 고래",
        materials.chuchu_scroll,
        "지식의 왕관",
      ],
    },
  },
  skills: {
    normal_attack: {
      name: "페보니우스 검술 · 백",
      content:
        "일반 공격 : 검으로 최대 5번 공격한다.\n강공격 : 일정 스태미너를 소모해 순간적으로 전방을 향해 검을 2번 휘두른다.",
    },
    normal_skill: {
      name: "창생법 · 모조 태양꽃",
      content: "<em>태양꽃</em>을 생성해 바위 원소 범위 피해를 준다.",
      sub_content: [
        {
          name: "태양꽃",
          content:
            "<em>태양꽃</em>은 다음 특성을 가진다.\n· <em>태양꽃</em>을 중심으로 한 영역에서 적이 피해를 받으면 <em>태양꽃</em>은 <em>찰나의 꽃</em>을 피워 바위 원소 범위피해를 주며, 해당 피해는 <em>알베도</em>의 방어력의 영향을 받는다.\n· <em>찰나의 꽃</em>은 2초마다 1번만 생성된다.\n· 캐릭터가 <em>태양꽃</em> 위에 있을 때, <em>태양꽃</em>은 바위 원소의 힘을 모아 캐릭터를 일정 높이까지 들어 올리는 <em>크리스탈 플랫폼</em>을 만든다. <em>크리스탈 플랫폼</em>은 동시에 1개만 존재할 수 있다.\n· <em>알베도</em>가 만들어 낸 <em>태양꽃</em>은 동시에 1개만 존재할 수 있으며, 바위 원소 창조물로 간주한다.",
        },
        {
          name: "홀드",
          content: "<em>태양꽃</em>이 생성되는 위치를 조정할 수 있다.",
        },
      ],
      comment:
        "이러한 바위 꽃은 연금술의 목적과 일치하는 독특한 특징을 가지고 있다. 대지에서 태어났지만, 하늘 높이 올라가서 태양이 되고 싶어 한다.",
    },
    dash_skill: {
      name: "",
      content: "",
      comment: "",
    },
    ultimate_skill: {
      name: "탄생식 · 대지의 파동",
      content:
        "바위 수정은 <em>알베도</em>의 지시에 따라 폭발해 <em>알베도</em> 전방에 바위 원소 범위 피해를 준다.\n필드 위에 <em>알베도</em>가 만든 <em>태양꽃</em>이 존재할 때, <em>태양꽃</em> 영역 안에 <em>생멸의 꽃</em> 7송이가 맹렬하게 피어나면서 바위 원소 범위 피해를 준다. 폭발 피해와 <em>생멸의 꽃</em> 피해는 <em>찰나의 꽃</em>을 만들어 낼 수 없다.",
      sub_content: [
        {
          name: "",
          content: "",
        },
      ],
      comment: "백악색 왕자의 명령에 따라, 대지의 창조물이 용솟음 친다.",
    },
    break_skills: {
      first: {
        name: "백악색의 위압",
        content:
          "<em>창생법 · 모조 태양꽃</em>의 <em>찰나의 꽃</em>이 HP가 50% 미만인 적에게 가하는 피해가 25% 증가한다.",
      },
      fourth: {
        name: "병 속 인간의 지혜",
        content:
          "<em>탄생식 · 대지의 파동</em> 발동 시 주변의 파티 내 캐릭터의 원소 마스터리가 125pt 증가한다. (지속시간 : 10초)",
      },
    },
    inherence_skills: [
      {
        name: "천재의 발견",
        content:
          "무기 돌파 소재를 합성 시 10%의 확률로 생산량의 2배를 획득한다.",
      },
    ],
    constellation: [
      {
        name: "에덴의 꽃",
        content:
          "<em>알베도</em>의 <em>창생법 · 모조 태양꽃</em>으로 생성된 <em>찰나의 꽃</em>이 피어날 때, <em>알베도</em> 자신의 원소 에너지가 1.2pt 회복된다.",
      },
      {
        name: "현생의 누대",
        content:
          "<em>창생법 · 모조 태양꽃</em>의 <em>찰나의 꽃</em>이 피어날 때 <em>알베도</em>에게 <em>생멸 카운트</em> 효과를 부여한다. (지속시간 : 30초)\n · <em>탄생식 · 대지의 파동</em>을 발동하면 모든 <em>생멸 카운트</em> 효과를 지우고, 지운 스택이 많을수록 <em>탄생식 · 대지의 파동</em>의 폭발 피해와 <em>생멸의 꽃</em>으로 가하는 피해가 증가한다.\n · <em>생멸 카운트</em>가 1 스택 쌓일 때마다 피해가 <em>알베도</em> 방어력의 30%만큼 증가한다.\n · 최대 중첩 수 : 4회",
      },
      {
        name: "태양의 꽃",
        content: "<em>창생법 · 모조 태양꽃</em> 스킬 레벨+3 (최대 Lv.15)",
      },
      {
        name: "신성의 추락",
        content:
          "<em>태양꽃</em> 범위 안에 있는 현재 필드 위 캐릭터의 낙하 공격 피해가 30% 증가한다.",
      },
      {
        name: "명왕누대의 파동",
        content: "<em>탄생식 · 대지의 파동</em> 스킬 레벨+3 (최대 Lv.15)",
      },
      {
        name: "무구의 흙",
        content:
          "<em>태양꽃</em> 범위 안에 있는 현재 필드 위 캐릭터가 결정 반응로 생성된 방패의 보호를 받고 있을 때, 가하는 피해가 17% 증가한다.",
      },
    ],
  },
  tips: {
    summary:
      "주 포지션은 서포터 겸 서브 딜러. 동시에 수행할 수 있다.\n특성은 원소 전투 -> 원소 폭발 -> 기본 공격 순인데, 기본 공격은 필요 없다면 안 해줘도 된다.\n전투 스킬은 바닥에 바위꽃을 피운다. 꽃 주변 범위에서 적에게 피해를 주면 <em>찰나의 꽃</em> 효과로 방어력 기반 추가 피해를 준다. 어떤 피해든 숫자가 뜨면 발동 가능하다. 반대로 적이 보호막, 방패, 껍데기 등으로 보호되거나, 슬라임 처럼 대미지가 들어가지 않으면 발동하지 않는다. 효과는 2초마다 한 번 발동하는데, 적마다 한 번이 아닌 범위(꽃) 내에서 한 번이다. 이 효과의 쿨타임은 꽃을 다시 깔면 초기화된다.\n원소 폭발은 <em>태양꽃</em>이 있을 때에는 7개의 <em>생멸의 꽃</em>을 터뜨려 피해를 준다. 즉, 7번의 바위 피해를 준다. <em>태양꽃</em>이 없다면, <em>생멸의 꽃</em>을 터뜨리지 못하고 버스트 피해만 준다. <em>생멸의 꽃</em>은 범위 내에서 무작위로 터지는데, 발동하면서 평타같은 걸로 적을 때리게 되면 그 적에게 몰리는 경향이 있다. 돌파 특성을 올리면 원소 마스터리 버프를 받을 수 있어, 불 딜러 같은 증폭 반응 딜러에게도 좋다. 필요 원소 에너지도 40으로 매우 낮아 빨리 돈다. 다만 피해량은 공격력 비례라, 방어력 세팅을 하는 <em>알베도</em> 특성상 세팅에 불편함이 있다.\n별자리는 2, 6번째 별자리가 좋은데, 명함으로도 좋다. 1 번째 별자리는 애초에 원소 에너지가 낮아 빨리 돌아 영향력이 적다. 2 번째 별자리는 <em>찰나의 꽃</em>이 터질 때마다 <em>생멸 카운트</em>라는 스택을 쌓는다. 이 스택이 쌓일 때마다 원소 폭발의 피해량이 방어력에 비례해 추가로 상승한다. 4 번째 별자리는 현재로선 <em>소</em> 조합이 아니면 의미가 없다. 6 번째 별자리는 결정을 먹고 보호막을 얻으면 피해량이 증가하는데, 보탬은 되지만 계수가 큰 느낌은 아니다.\n<em>태양꽃</em>을 깔고 원소 폭발을 사용하는 사이클을 사용할 수 있지만, <em>태양꽃</em>은 바위 창조물이라 보스급 몬스터가 밟으면 깨져서 깔 때 신경써줘야 한다.",
    weapons: [
      {
        name: "반암결록",
        content:
          "높은 수준의 치명타 확률을 제공해 세팅에 이점이 있다. 다만, 체력관련 버프는 딱히 쓸모가 없어서 가성비가 떨어진다는 의견도 있다.",
      },
      {
        name: "진사의 방추",
        content:
          "이벤트 「눈보라 속 그림자」에서 얻을 수 있는 알베도 전용무기. 추가 능력치가 방어력인데다, 방어력 비례 원소 전투 피해량 버프까지 받을 수 있다.",
      },
      {
        name: "페보니우스 검",
        content:
          "서포터가 활용하기 좋은 무기. 원소 구슬을 발생시켜 캐릭터의 원소 충전에 도움을 줄 수 있다. 참고로 원소 구슬을 먹은 캐릭터에게 원소 에너지를 채워준다.",
      },
      {
        name: "부식의 검",
        content:
          "이벤트 「백악과 흑룡」에서 얻을 수 있는 무기. 추가 능력치로 원소 충전 효율을 주고, 옵션으로 원소 전투 스킬의 피해량과 치명타 확률을 보정해준다. 원소 폭발엔 도움이 없는 것이 단점.\n다른 서포터 계열 캐릭터들에게 두루 좋아, <em>알베도</em>에겐 다른 걸 주는 경우가 많다.",
      },
      {
        name: "여명신검",
        content:
          "추가 능력치로 치명타 피해량, 옵션으로 치명타 확률을 크게 채워준다. 치명타 확률 버프는 HP가 90%가 넘어야 한다는 조건이 있는데, <em>알베도</em>는 결정을 이용한 보호막이 있어 나름 쓸만하다.",
      },
    ],
    artifacts: {
      recommand: {
        watch: "방어력%",
        grail: "바위 원소 피해량, 방어력%",
        crown: "치명타 확률, 치명타 피해, 방어력%",
        sub_effect: "치명타 확률, 치명타 피해, 방어력%",
      },
      artifact_list: [
        {
          name: ["풍요로운 꿈의 껍데기"],
          content:
            "2셋 효과는 방어력 30%, 4셋 효과는 바위 원소 명중 시 스택을 쌓고, 스택 당 방어력 5% + 바위 원소 피해 6% 버프를 받을 수 있다. 서브 딜러인 <em>알베도</em>에게 잘 어울린다.",
        },
        {
          name: ["유구한 반암"],
          content:
            "4셋 효과로 결정을 먹으면 원소 피해 보너스를 얻을 수 있는데, <em>태양꽃</em>과 <em>찰나의 꽃</em>이 꾸준히 결정을 만들어줘 4셋 효과를 활용해볼 수 있다.",
        },
        {
          name: ["유구한 반암", "풍요로운 꿈의 껍데기"],
          content:
            "원소 전투 스킬을 극대화한 세팅. 별자리 2 번 돌파 시 효과가 더 좋아진다. <em>껍데기</em> 셋이 없었을 땐 4성 성유물인 <em>수호자의 마음</em>을 넣었다.",
        },
        {
          name: ["유구한 반암", "옛 왕실의 의식"],
          content:
            "<em>반암</em> 2셋으로 바위 원소 피해, <em>왕실</em> 2셋으로 원소 폭발 피해 버프를 받는다. <em>반암</em> 2 / <em>껍데기</em> 2과는 달리, 원소 폭발에 초점을 둔 세팅.",
        },
      ],
    },
    partners: [
      {
        name: ["Arataki Itto", "Noelle"],
        content:
          "원소 반응을 활용하지 않는 바위 메인 딜러들은 <em>고로</em>를 활용하게 되는데, 이때 <em>고로</em>의 효과를 받기 위해선 바위 캐릭터 3명을 조합해야 한다. 이때 서포터 포지션으로 <em>알베도</em>를 넣을 수 있다.\n같은 방어력 기반 서포터인 <em>고로</em>와의 상성도 좋고, 파티 내 바위 캐릭터에게 바위 입자를 만들어줘 원소 충전에 도움도 줄 수 있다. 다만, 조합 자체가 원소 반응을 사용하지 않기 때문에 인기가 많지 않은 편이다.",
      },
      {
        name: ["Navia"],
        content:
          "<em>나비아</em>는 결정 반응을 활용하는 메인 딜러인데, <em>알베도</em>는 <em>태양꽃</em>을 이용해 결정을 만들기 쉬워 좋은 시너지를 갖게 된다.",
      },
      {
        name: ["Gorou"],
        content:
          "<em>고로</em>는 바위 캐릭터가 많을수록 버프가 강해지는 특성이 있다. 특히 방어력 버프를 줄 수 있는데, 방어력 기반의 특성을 가진 캐릭터와 시너지가 매우 좋다. <em>알베도</em>역시 마찬가지.",
      },
      {
        name: ["Hutao", "Xingqiu", "Zhongli"],
        content:
          "일명 '호행종알'. <em>호두</em>에겐 바위 공명의 효과가 나름 어울리는데, <em>알베도</em>는 원소 마스터리 버프도 줄 수 있어, <em>호두</em>에게 잘 어울렸다.\n다만, <em>야란</em>의 등장과 동시에 물 공명의 효과가 HP 증가로 바뀌었는데, 이로인해 <em>알베도</em> 대신 물 공명을 위한 물 서브 딜러를 넣게 되면서 조합의 수명이 다하게 된다.",
      },
    ],
  },
};

export default albedo_detail;
