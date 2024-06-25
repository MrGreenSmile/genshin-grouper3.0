import * as materials from "./materials";

const klee_detail = {
  name: "클레",
  summary:
    "법구와 불 원소를 사용하는 메인 딜러. 원신의 마스코트 중 한 명으로, 여름마다 동화같은 모험을 안내해준다.\n작고 귀엽고 어리숙하지만, 엘프족 출신이라 나이는 생각보다 적지 않을 것으로 보인다.\n어머니는 '티바트 유람가이드'의 작가, <em>앨리스</em>. <em>앨리스</em>는 티바트에서 유명한 모험가이자 마녀로, 다른 차원을 넘나들 수 있는 것으로 보인다. (<em>바바라</em>에게 이세계의 아이돌에 대해 알려준게 그녀다.) 근데 성격이 워낙 괴짜인데다 파괴적이라 악명이 높다. 문제는 <em>클레</em>가 그 성격을 닮아 순수한 얼굴로 아무렇지 않게 아무데나 폭탄을 던지고 다니는 폭탄마가 되어 버린 것이다.\n<em>클레</em>의 취미는 폭탄으로 물고기 잡기. 근데 어느 일이든 폭탄부터 들이대는 바람에 혼이 나기 일쑤고, 대부분의 시간을 반성실에서 보낸다.\n지금은 불꽃의 기사라는 작위(?)까지 받아 페보니우스 기사단에서 돌보고 있다. <em>진</em>이 엄마 역할을 하고 있고, 다른 단원들도 어린 조카보듯 잘 어울려준다.\n가방에 엄마가 준 도도코 인형을 달고 다닌다. <em>클레</em>는 도도코가 진짜 살아있고 자신과 함께 여행하고 다닌다고 생각한다. 여름이 올 때마다 <em>클레</em>는 도도코와 함께 몽환적인 동화세계를 여행한다. 폭탄은 통통폭탄이라 부르는데, 이중에는 통신용으로 개조된 것도 있다.",
  profile: {
    en_name: "Klee",
    gender: "여성",
    rareness: "★★★★★",
    element: "불",
    weapon: "법구",
    constellation: "네잎클로버",
    birthday: "7/27",
    union: "몬드 - 페보니우스 기사단",
    actor: ["방연지", "久野 美咲(쿠노 미사키)", "Poonam Basu", "花玲"],
    cook: {
      name: "어향 토스트",
      content:
        "'어부 토스트' 제작 시 획득 가능.\n파티 내 모든 캐릭터의 방어력이 151pt 증가한다. (지속시간 300초) 다인모드 시 자신의 캐릭터에만 적용된다.\n클레의 특제 요리. 폭탄을 마구 던져 몰고기가 모두 도망치게 했다. 진의 가르침 아래 클레는 토스트 만드는 법을 열심히 배워 어부들에게 선물했다. 맛도 좋고 포만감까지 최고인 요리이다. 이제 클레가 하루종일 물에대 폭탄을 던져도 배를 곪을 걱정 없다.",
    },
    materials: {
      penetration: [
        materials.manos,
        "꺼지지 않는 불씨",
        "바람버섯",
        materials.chuchu_scroll,
      ],
      skills: [
        materials.freedoms,
        "북풍의 꼬리",
        materials.chuchu_scroll,
        "지식의 왕관",
      ],
    },
  },
  skills: {
    normal_attack: {
      name: "펑펑",
      content:
        "일반 공격 : 무언가에 부딪히면 펑하고 폭발하는 물건을 던진다! 폭발 공격을 최대 3회 발동해 불 원소 범위 피해를 준다.\n강공격 : 일정 스태미너를 소모해 짧은 영창 후 적을 폭격해 불 원소 범위 피해를 준다.",
    },
    normal_skill: {
      name: "통통 폭탄",
      content:
        "끝없는 즐거움을 가져다주는 <em>통통 폭탄</em>을 던진다!\n<em>통통 폭탄</em>은 연속으로 3회 튕기며 튕길 때마다 폭발을 일으켜 불 원소 범위 피해를 준다.\n<em>통통 폭탄</em>이 3번 튕긴 후 수많은 부비트랩으로 분열된다.\n부비트랩은 적이 밟거나 일정 시간이 지나면 폭발하여 불 원소 범위 피해를 준다.\n초기 사용 가능 횟수 : 2회",
      sub_content: [
        {
          name: "",
          content: "",
        },
      ],
      comment:
        "통통은 클레의 「친한 친구」이다... 클레는 항상 참지 못하고 모두에게 이 친구를 소개하곤 한다.",
    },
    dash_skill: {
      name: "",
      content: "",
      comment: "",
    },
    ultimate_skill: {
      name: "쾅쾅 불꽃",
      content:
        "<em>클레</em> 최대 화력! 스킬을 발동하는 동안 <em>쾅쾅 불꽃</em>을 끊임없이 소환해 주변의 적에게 불 원소 범위 피해를 준다.",
      sub_content: [
        {
          name: "",
          content: "",
        },
      ],
      comment:
        "기사단 사람들은 클레가 한 번도 자신의 폭탄에 휘말려 들지 않는 건 행운의 별이 그녀를 지켜주고 있기 때문이라고 믿는다...",
    },
    break_skills: {
      first: {
        name: "펑펑 선물",
        content:
          "<em>통통 폭탄</em>과 일반 공격으로 피해를 줄 때 50% 확률로 <em>클레</em>에게 <em>폭렬 불꽃</em> 1 송이를 부여한다. 강공격 발동 시 소모되는 스태미너를 대신해 <em>폭렬 불꽃</em>을 소모하며 가하는 피해가 50% 증가한다.",
      },
      fourth: {
        name: "무한 스파크",
        content:
          "<em>클레</em>가 강공격 시 치명타가 발생하면 파티 내 모든 캐릭터의 원소 에너지를 2pt 회복한다.",
      },
    },
    inherence_skills: [
      {
        name: "전부 보물이야",
        content: "미니맵에 주위의 몬드 지역 특산물 위치가 나타난다.",
      },
    ],
    constellation: [
      {
        name: "연쇄폭발",
        content:
          "공격과 스킬 발동 시 일정 확률로 불꽃을 소환해 적을 폭격하여 <em>쾅쾅 불꽃</em>으로 가하는 피해의 120%만큼 피해를 준다.",
      },
      {
        name: "퍄퍄 포탄 파편",
        content:
          "<em>통통 폭탄</em>의 부비트랩이 적의 방어력을 23% 감소시킨다. (지속시간 : 10초)",
      },
      {
        name: "클레 특제",
        content: "<em>통통 폭탄</em> 스킬 레벨+3 (최대 Lv.15)",
      },
      {
        name: "일촉즉발",
        content:
          "<em>쾅쾅 불꽃</em>이 지속되는 동안 퇴장하면 폭발을 일으켜 공격력의 555%의 불 원소 범위 피해를 준다.",
      },
      {
        name: "포격 천재",
        content: "<em>쾅쾅 불꽃</em> 스킬 레벨+3 (최대 Lv.15)",
      },
      {
        name: "화력 전개",
        content:
          "<em>쾅쾅 불꽃</em> 상태에서 <em>클레</em>는 3초마다 본인 제외 파티 내 모든 캐릭터의 원소 에너지 3pt를 지속적으로 회복 시킨다.\n<em>쾅쾅 불꽃</em> 발동 후 25초 동안 파티 내 모든 캐릭터는 불 원소 피해 보너스를 10% 획득한다.",
      },
    ],
  },
  tips: {
    summary:
      "주 포지션은 메인 딜러.\n특성 순서는 기본 공격 -> 통통 폭탄 -> 쾅쾅 불꽃 순이고, 메인 딜러 이므로 셋 다 찍어줘야 한다.\n평타와 강공격 모두 폭발 판정이라 바위와 방패를 잘 부순다. 또한 강공격이 다른 법구 캐릭터들과 달리 빠르다. 다만 강공격이 적들을 날려버리고, 스태미너 소모량이 많아 귀찮은 점이 있다.\n원소 전투 스킬은 커다랗고 통통 튀는 폭탄을 던진다. 세 번 튀면서 불 원소 범위 피해를 주고 마지막에 터지면서 콩알탄을 흩뿌린다. 예전엔 콩알탄이 바람 서포터의 스킬에 모여서 폭딜을 꽂을 수 있었는데, 패치되서 불가능해졌다. 번외로 물고기 잡을 때 최고의 기술 중 하나.\n원소 폭발은 주변의 적에게 불꽃 레이저를 쏟아 붓는다. 비주얼로는 <em>클레</em>의 PV만 봐도 알 수 있듯 압도적이다. 약 20번의 폭격을 가하는데, 다 합치면 총 1500%에 달하는 대미지를 가할 수 있다. 다만 오토 타겟팅 방식으로, 근처에 오브젝트도 타겟으로 잡혀 안정성이 조금 떨어진다. (특히 모닥불이 있을 때) 그리고 캐릭터를 바꾸면 효과가 끝나버린다. 만약 4 번째 별자리를 돌파하면 캐릭터를 바꿀 때 피해를 줄 수 있지만 그뿐이다. 추가로 타수가 많고 빨라 원소 마스터리 세팅의 효율이 다른 불 딜러들에 비해 떨어지는 편이다.\n별자리는 대체로 좋은 편이다. 그 중에서 2, 4번째가 노려 볼만 하고, 스킬 레벨을 올려주는 3, 5번째도 좋다. 그중 4번째는 원소 폭발을 최대로 활용할 수 있게 만들어주는데, 언급했듯 바로 퇴장하는 건 좋지 않고 효과가 끝나기 직전 타이밍을 잘 맞춰줘야 한다. 6번째 별자리는 <em>클레</em>가 나와있는 동안 원소 충전이 어려워진 서포터들의 원충을 보조하는 효과를 준다. 다만, 그 수준이 높은 편이 아니어서 추천하기엔 아쉽다.",
    weapons: [
      {
        name: "사풍 원서",
        content:
          "추가 능력치가 치명타 확률에, 추가 효과에 이동속도, 원소 피해 보너스까지 받아 최고급 무기중 하나이다.",
      },
      {
        name: "속세의 자물쇠",
        content:
          "추가 능력치가 공격력이라 치명타 세팅에 난이도가 높아지지만, 보호막과 함께라면 아무래도 버티기 함든 <em>클레</em>에게 안정성을 높여주면서, 동시에 상당히 높은 공격력 버프를 얻을 수 있다.\n공격력 버프는 평타를 치면 스택으로 쌓이는데, 캐릭터를 바꿔도 스택이 유지되고 평타만 치면 되서 스택 유지도 편하다.",
      },
      {
        name: "천공의 두루마리",
        content:
          "기초 공격력이 높고, 추가 능력치가 공격력이며, 추가 효과에서 원소 피해 보너스와 '구름'이라는 보조 공격도 얻을 수 있어 <em>클레</em>에게 잘 어울린다. 다만 역시나 치명타 세팅이 어려워진다.",
      },
      {
        name: "카구라의 진의",
        content:
          "<em>야에 미코</em>의 전용 무기로 나온 무기. 추가 능력치가 치명타 피해이고, 원소 전투 사용 시 전투 스킬 피해가 증가하고 중첩되는데, 3회 중첩 시에는 원소 피해 보너스를 얻을 수 있어 여러모로 두루 쓸만하다.\n<em>클레</em>의 경우 <em>통통 폭탄</em>을 잘 맞춰주면 스택을 유지할 수 있어 좋다.",
      },
      {
        name: "도도코 이야기집",
        content:
          "「여름! 섬? 모험!」, 일명 '금사과 제도' 이벤트 보상으로 얻을 수 있는 무기. 일반 공격으로 <em>폭렬 불꽃</em> 스택을 쌓고 강공경을 섞어가며 싸우는 <em>클레</em>의 사이클에 맞춰져 있어 전용 무기라 볼 수 있다. 다만, 추가 능력치가 공격력이라 세팅에 신경을 써줘야 한다.",
      },
      {
        name: "일월의 정수",
        content:
          "기행 무기. 추가 능력치가 치명타 확률이라 세팅의 이점이 있다. 거기다 어렵지 않게 원소 스킬과 일반 공격 버프를 얻을 수 있어 5성 무기가 없을 때 좋은 선택지가 된다. 다만 기행으로 '구매'해야하는 점과 <em>클레</em>는 강공격 위주로 운영하게 된다는 것이 아쉽다.\n만약 첫 번째 별자리를 돌파했다면, 평타에 <em>쾅쾅 불꽃</em>이 섞여 나오는데, 원소 폭발 판정이라 같이 버프를 받을 수 있다.",
      },
      {
        name: "음유시인의 악장",
        content:
          "추가 능력치가 치명타 피해이고 추가 효과의 계수가 높아 쓸만하다. 특히 공격력, 원소 피해 버프가 켜졌을 땐 5성 못지 않게 강하다. 다만 추가 효과의 쿨타임이 길다는 것을 염두해 둬야 한다.",
      },
      {
        name: "만국 항해용해도",
        content:
          "추가 효과로 원소 피해 보너스를 받을 수 있고, 단조 무기라 얻기 쉬워 쓸만하다.\n하지만 <em>클레</em>의 원소 폭발이 타수가 많고 빨라, 추가 능력치로 붙는 원소 마스터리가 제값을 하기 어렵다.",
      },
      {
        name: "1급 보옥",
        content: "3성 무기 중에 쓸만한 무기.",
      },
    ],
    artifacts: {
      recommand: {
        watch: "공격력%",
        grail: "불 원소 피해%",
        crown: "치명타 확률/치명타 피해",
        sub_effect: "치명타 확률/치명타 피해/공격력%/원소 충전 효율",
      },
      artifact_list: [
        {
          name: ["불타오르는 화염의 마녀"],
          content:
            "여느 불 딜러들에게 종결인 세팅. 4셋 효과로 원소 스킬을 맞출수록 불 원소 피해 버프를 받을 수 있다.\n<em>클레</em>의 경우 원소 전투의 쿨타임이 길어 4셋 효과를 2 스택 이상 보기는 어렵지만, 오히려 스택 지속시간과 원소 폭발의 지속시간이 같아 그 동안 폭격을 쏟아붓는 식으로 운영할 수 있다.\n참고로 원소 전투을 쓰고 폭탄이 바닥에 닿기 전에 e키를 연타하면 스택이 하나 더 차는 버그가 있다.",
        },
        {
          name: ["불 위를 걷는 현인"],
          content:
            "2셋 효과는 불 내성 증가라 별로 쓸모가 없지만 4셋 효과는 불 원소가 묻은 적에게 가하는 피해가 증가한다.\n<em>클레</em>의 경우 <em>마녀</em> 4셋의 효과를 최대치로 받지 못하지만, 원소 폭발의 공속이 빠르고 타수가 많아 불 원소가 오래 유지되는 점을 이용할 수 있다. 따라서 이것을 종결로 볼 수도 있다.",
        },
        {
          name: ["검투사의 피날레", "불타오르는 화염의 마녀"],
          content:
            "최종 세팅으로 거쳐가는 세팅.\n<em>클레</em>의 경우, 원소 마스터리의 효율이 낮아 공격력의 비중이 높기 때문에, 정 안되면 여기서 파밍을 멈추는 경우도 있다.",
        },
      ],
    },
    partners: [
      {
        name: ["Yelan", "Xingqiu"],
        content:
          "여느 불 딜러들에게 필수로 들어가는 물 서브 딜러. 평타에 물 추가 공격을 섞어준다.\n<em>야란</em>의 원소 폭발은 유지시간 동안 증가하는 공격력 버프를 주고, <em>행추</em>의 원소 폭발은 유지시간 동안 넉백 저항 증가와 효과 종료 시 소량의 HP 회복을 준다는 차이점이 있다. 딜을 올려준다는 점에서 <em>야란</em>이 더 우세하지만, 안정성이 너무 떨어진다면 <em>행추</em>를 기용하기도 한다.",
      },
      {
        name: [
          "Kaedehara Kazuha",
          "Venti",
          "Sucrose",
          "Traveler_anemo",
          "Jean",
        ],
        content:
          "바람 서브 딜러 겸 서포터로, 적들을 모아주는 역할을 한다. <em>클레</em>의 공격이 대부분 폭발이라 적들이 튕겨나가버려 이를 보완할 수 있다. 예전엔 <em>클레</em>의 원소 스킬에서 나오는 지뢰가 몹몰이 스킬들에 끌려들어갔었는데, 이후 패치되어 끌려들지 않는다.\n<em>카즈하</em>는 몹몰이도 가능하고 버프/디버프가 핵심이라 자주 함께하며, <em>설탕</em>은 몹몰이와 버프가 약해 차선책으로 선택된다.\n<em>벤티</em>의 경우, <em>벤티</em>의 원소 폭발이 강력하게 적들을 모아주지만 높이가 있다. <em>클레</em>의 강공격과 원소 스킬은 닿지만, 평타는 근접해야 겨우 닿으므로 주의할 필요가 있다.\n다른 캐릭터들과 달리 <em>바람 행자</em>의 원소 스킬과 원소 폭발에 <em>클레</em>의 지뢰가 모인다. <em>바람 행자</em>의 스킬들이 활용하기 어려워 조합을 찾기 어렵지만, 마땅한 조합이 없다면 생각해볼만 하다.\n<em>진</em>은 힐러지만 몹몰이 스킬인 <em>풍압검</em>으로 <em>클레</em>의 지뢰가 모인다. 사실 이 외에는 큰 시너지가 없어, 다른 힐러가 없는 경우를 제외하면 우선순위는 떨어진다.",
      },
      {
        name: ["Bennett"],
        content:
          "강력한 공격력 버프가 가능한 힐러. 특히 불 공명을 위해 불 메인 딜러와 많이 함께한다.",
      },
      {
        name: ["Zhongli", "Thoma"],
        content:
          "보호막 서포터. <em>클레</em>가 잘 버티지 못하는 편이라 좋은 파트너가 된다.\n<em>종려</em>는 보호막과 동시에 내성 감소 디버프도 줄 수 있어 조합에 상관 없이 쓰일 수 있지만, <em>베넷</em>을 쓰지 못하는데 불 공명이 필요한 경우 <em>토마</em>를 고려해 볼 수 있다.",
      },
    ],
  },
};

export default klee_detail;
