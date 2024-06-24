import * as materials from "./materials";

const xiao_detail = {
  name: "소",
  summary: "바람과 창을 사용하는 메인 딜러.",
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
      name: "태평성대",
      content:
        "'세계 평화' 제작 시 획득 가능.\n선택한 캐릭터 HP 최대치의 40%를 회복하고 추가로 HP를 2350pt 회복한다.\n감우의 특제 요리. 기린이 꽃밭에서 쉬는 모습을 바라보기만 해도 마음이 차분해진다. 감우는 소중히 여기는 여행자에게 세상이 아름답길 바라는 마음을 담아 만든 요리와 자신이 제일 좋아하는 청심화를 남겼다.",
    },
    materials: {
      penetration: [materials.frozens, "서리의 핵", "청심", materials.guragura],
      skills: [
        materials.industries,
        "무예의 혼",
        materials.guragura,
        "지식의 왕관",
      ],
    },
  },
  skills: {
    normal_attack: {
      name: "유천 사격술",
      content:
        "일반 공격 : 활로 최대 6번 공격한다.\n강공격 : 피해가 더 크고 정확한 조준 사격을 한다. 조준 시 서리의 힘이 화살촉에 계속해서 모여 공격과 동시에 발사된다. 차지 시간에 따라 다른 효과가 발동한다.\n· 1단 차지 : 한기가 서린 화살을 발사해 얼음 원소 피해를 준다.\n· 2단 차지 : <em>서리꽃 화살</em>을 발사해 얼음 원소 피해를 준다. 명중 후 서리꽃이 피어나 얼음 원소 범위 피해를 추가로 준다.",
    },
    normal_skill: {
      name: "산과 강의 기린 흔적",
      content:
        "<em>감우</em>가 <em>얼음 연꽃</em>을 남긴 후 빠른 속도로 후퇴하고 모든 이매망량을 멀리하며 얼음 원소 범위 피해를 준다.",
      sub_content: [
        {
          name: "얼음 연꽃",
          content:
            "· 주변의 적을 계속 도발해 적의 공격을 유인한다.\n· <em>얼음 연꽃</em>은 <em>감우</em> HP 최대치의 영향을 받는다.\n· <em>얼음 연꽃</em>은 파괴당하거나 지속 시간이 끝나면 격렬히 피어나 얼음 원소 범위 피해를 준다.",
        },
      ],
      comment: "절 봤다구요? 잘못 본 거 아닌가요? 전 그때 야근 중이었을 텐데요",
    },
    dash_skill: {
      name: "",
      content: "",
      comment: "",
    },
    ultimate_skill: {
      name: "쏟아지는 천화",
      content:
        "대기 중의 서리눈을 모아 퇴마의 <em>빙령주</em>를 소환한다. <em>빙령주</em>가 존재하는 동안 계속해서 고드름을 내려 공격 범위 내 적에게 얼음 원소 피해를 준다.",
      sub_content: [
        {
          name: "",
          content: "",
        },
      ],
      comment:
        "감우는 달콤한 비를 내릴 수도 있지만 사마외도엔 고한의 눈보라가 될 뿐이다.",
    },
    break_skills: {
      first: {
        name: "단 하나의 마음",
        content:
          "<em>서리꽃 화살</em> 발사 후 5초 동안 다음으로 발사되는 <em>서리꽃 화살</em>과 이로 인해 피어나는 <em>서리꽃</em>의 치명타 확률이 20% 증가한다.",
      },
      fourth: {
        name: "천지교태",
        content:
          "<em>쏟아지는 천화</em> 영역 내에서 현재 필드 위 캐릭터는 얼음 원소 피해 보너스 20%를 획득한다.",
      },
    },
    inherence_skills: [
      {
        name: "감춰둔 활",
        content: "활 무기 단조 시 소모한 광석을 15% 반환한다.",
      },
    ],
    constellation: [
      {
        name: "이슬 먹는 신수",
        content:
          "2단 차치 강공격의 서리꽃 화살 혹은 피어난 서리꽃에 명중된 적은 얼음 원소 내성이 15% 감소한다. (지속 시간 : 6초) 또한 명중 시 감우의 원소 에너지를 2pt 회복한다. 서리꽃 화살과 피어나는 서리꽃의 명중 여부와 상관없이, 2단 차지 강공격은 매번 원소 에너지 회복 효과를 1번만 발동한다.",
      },
      {
        name: "확린",
        content:
          "<em>산과 강의 기린 흔적</em>의 사용 가능 횟수가 1회 증가한다.",
      },
      {
        name: "구름여행",
        content: "<em>쏟아지는 천화</em> 스킬 레벨+3 (최대 Lv.15)",
      },
      {
        name: "서수",
        content:
          "<em>쏟아지는 천화</em> 영역 내에서 적이 받는 피해가 증가한다. 해당 효과는 시간이 지날수록 점점 강해진다.\n초기 받는 피해 보너스는 5%, 이후 3초마다 5%씩 증가하며, 최대 25%까지 상승한다. 영역을 벗어나면 효과는 최대 3초 동안 유지된다.",
      },
      {
        name: "잡초근절",
        content: "<em>산과 강의 기린 흔적</em> 스킬 레벨+3 (최대 Lv.15)",
      },
      {
        name: "살생의 발걸음",
        content:
          "<em>산과 강의 기린 흔적</em> 발동 후 30초 안에 발동되는 첫 번째 <em>서리꽃 화살</em>은 차지 없이 발동할 수 있다.",
      },
    ],
  },
  tips: {
    summary:
      "주 포지션은 메인 딜러. 원소 폭발을 활용해 서브 딜러로도 활용할 수 있다.\n특성은 기본 공격 -> 원소 폭발 -> 원소 전투 순이다. 원소 전투는 6까지만 찍어줘도 되지만, 피해량이 쏠쏠해 8까지 찍어줘도 괜찮다.\n전투 스킬을 사용하면 <em>감우</em>는 연꽃을 남기고 빠르게 뒤로 빠지며, 연꽃은 적들을 도발한다. 연꽃의 HP은 <em>감우</em>의 HP에 비례한다. 처음 연꽃 생기면서 한 번, 터지면서 한 번 피해를 주는데, 피해가 은근 쏠쏠하며 터질 때마다 한 번 씩 원소 충전도 해준다. 따라서 굳이 도발 때문에 HP를 고려하지 않아도 된다.\n원소 폭발은 넓은 범위에 고드름을 비처럼 쏟아낸다. 이때 적이 없다면 무작위로 쏟아지지만, 적이 있다면 적의 머리 위로 순서대로 떨어진다. 지속시간이 꽤 길고 범위가 넓어 적들을 얼리는 등 원소 반응에 유리하다. 또한, 4단계 특성을 얻게되면 얼음 원소 피해 버프까지 받을 수 있어 서브 딜러로도 활용할 수 있다. 특히 4번 별자리를 돌파하면 서브 딜러로서의 역할이 강화된다.\n별자리는 1, 4, 6번째 별자리가 좋다. 1번째 별자리는 2단 차지에 얼음 원소 내성 감소와 원소 충전 효율 효과를 준다. 2번째 별자리는 그 자체로 보면 큰 의미는 없어보이지만, 6번째 별자리와 시너지가 좋다. 4번째 별자리는 원소 폭발에 적 디버프 효과를 추가해 서브 딜러로서의 역할을 강화해준다. 6번째 별자리는 전투 스킬을 사용하면 차지 없이 <em>서리꽃 화살</em>을 쏠 수 있게 된다. 따라서 EQ평-E평-E평 콤보로 강력한 화력을 퍼부을 수 있다.\n메인 딜러로 활용할 경우, 2단 차지를 주로 사용하는데, 피격당하면 차지가 풀려버려서 잘 피하거나 보호막 파트너(종려, 디오나 등)가 거의 필수다. 이부분에서 RPG게임에서 혼자 FPS하는 느낌이라 호불호가 있을 수 있다.\n조합은 과거부터 주류인 빙결 조합과 현재 주류인 융해 조합이 있다. 특히 바람 파트너로도 잘 끌려오지 않는 적들이 늘어나고, <em>나히다</em> 같은 풀 원소가 나오면서, 융해 조합과 <em>감우</em>를 서브 딜러로 하는 조합의 비중이 늘었다.",
    weapons: [
      {
        name: "최초의 대마술",
        content:
          "<em>리니</em>가 나오면서 함께 나온 <em>리니</em>의 전용무기.\n추가 능력치로 치명타 피해를 받고, 추가 효과로 강공격 버프를 받을 수 있는데, 파티 내 원소 공명을 받을 경우 공격력 버프를 받을 수 있다.\n강공격만 강화되는 <em>아모스의 활</em>과 달리, 추가적으로 스킬 피해량 버프까지 받을 수 있어 융해/빙결 조합 가리지 않고 사용할 수 있다.",
      },
      {
        name: "아모스의 활",
        content:
          "<em>감우</em>가 나오기 전까진 활용할 방안이 없던 무기로 평가절하당했지만, 추가 효과으로 붙은 화살이 날아간 시간에 비례하는 피해 증가 버프가 <em>감우</em>에게 딱 어울려 전용무기가 되었다.\n추가로 강공격 피해 버프도 있고, 추가 능력치가 공격력이라 피해량 상승치가 꽤 높다. 이는 <em>감우</em>의 성장 스탯이 치명타 확률이고, 얼음 공명에 얼음 성유물까지 맞출 경우 치명타 세팅에 유리해져 최상급 조합이 된다.",
      },
      {
        name: "사냥꾼의 길",
        content:
          "<em>타이나리</em>가 나오면서 함께 나온 <em>타이나리</em>의 전용무기.\n치명타 확률과 원소 마스터리에 따라 강공격이 강화되는 버프를 받을 수 있어, 원소 마스터리 세팅을 해야 하는 융해 조합에서 사용하기 좋다.",
      },
      {
        name: "약수",
        content:
          "<em>야란</em>이 나오면서 함께 나온 <em>야란</em>의 전용무기.\n약 88%에 달하는 치명타 피해량 버프를 받을 수 있지만, 기초 공격력이 낮아져 불 공명을 받는 등의 조치가 필요하다.\n또한 추가 효과에 의해 근접한 전투를 치르게 되어, <em>향릉</em>을 활용한 융해 조합에서는 괜찮지만, 빙결 조합에서는 거리 조절을 잘 해야 한다.",
      },
      {
        name: "천공의 날개",
        content:
          "치명타 확률과 치명타 피해를 챙겨줘 <em>악단</em> 세팅을 할 때 추천되는 무기이다.",
      },
      {
        name: "극지의 별",
        content:
          "<em>타르탈리아</em>의 전용무기.\n추가 능력치로 치명타 확률을 받을 수 있고, 추가 효과로 스택에 따라 공격력 버프를 받을 수 있다.\n빙결 조합 시 주의할 점은, 얼음 공명과 <em>얼음</em> 세팅으로 치명타 확률이 100%를 초과할 가능성이 높아 치명타 피해량 위주로 맞춰야 해 세팅이 어려워진다.",
      },
      {
        name: "종말 탄식의 노래",
        content:
          "서브 딜러로 운영할 때 추천되는 무기. 추가 능력치가 원소 충전 효율이고, 추가 효과에서 원소 마스터리와 함께 전투/원소 폭발 적중 시 스택을 부여한다. 4스택이 모이면 12초 동안 원소 마스터리 및 공격력 버프를 추가로 받을 수 있다.\n스택은 필드에 나와있지 않아도 얻을 수 있어 원소 폭발을 활용해 서브 딜러로 운영하는 감우에게도 잘 어울린다.",
      },
      {
        name: "담월 프로토타입",
        content:
          "4성 단조 무기. 조준 사격이 약점에 맞으면 이동속도와 공격력 버프를 받는다. 추가 능력치가 공격력이라 세팅의 난이도는 있지만, <em>감우</em>의 경우 성장 스탯이 치명타 확률이라 그 부담을 덜 수 있다.\n다만, 약점 공격이라는 조건이 있어 에임이 좋지 않거나 약점이 없는 적(슬라임, 보스 등)에겐 옵션이 발동되지 않는다는 단점이 있다.",
      },
      {
        name: "파마궁",
        content:
          "일반 공격, 강공격 피해 버프를 받을 수 있다. 버프는 <em>담월</em>이 더 좋지만, 번거로움을 피하고 싶다면 사용해 볼 만 하다.",
      },
      {
        name: "흑암 배틀 보우",
        content:
          "추가 능력치가 치명타 피해라 치명타 확률 세팅이 상대적으로 쉬운 감우에게 좋은 선택지가 된다. 다만, 스타라이트로 '구매'해야 하는데 꽤나 비싸다.",
      },
      {
        name: "절현",
        content:
          "원소 폭발위주로 서브 딜러로 활용하기에 쓸만한 무기. 추가 능력치는 원소 마스터리, 추가 효과은 전투/원소 폭발 대미지 버프라 메인 딜러로 쓴다면 비추천이다.",
      },
      {
        name: "청록의 사냥활",
        content:
          "기행으로 '구매'하는 무기. 추가 능력치가 치명타 확률이라 세팅의 편의성은 있지만, 얼음 딜러인 감우에겐 의미가 적다. 그래도 일반 공격, 강공격 명중시 50% 확률로 적들을 끌어당기는 <em>바람의 눈</em>을 형성해 적을 모을 수 있다.\n하지만 그것을 제외하면 세팅의 이점도 적고, 메인 딜러로서의 무기는 담월, 파마궁이 있고, 서브 딜러로서의 무기는 절현이 있어 추천하긴 어렵다.",
      },
    ],
    artifacts: {
      recommand: {
        watch: "공격력%",
        grail: "얼음 원소 피해량, 공격력%",
        crown: "치명타 피해, 치명타 확률",
        sub_effect:
          "치명타 확률, 치명타 피해, 공격력%, 원소 충전 효율, 원소 마스터리(융해 딜러)",
      },
      artifact_list: [
        {
          name: ["얼음바람 속에서 길잃은 용사"],
          content:
            "대부분의 얼음 딜러에게 종결이 되는 세팅.\n2셋 효과로 얼음 원소 피해, 4셋 효과로 얼음이 묻은 적을 대상으로 치명타 확률 20%추가, 빙결된 적을 대상으로 추가로 치명타 확률 20% 버프를 준다. 얼려두기만 한다면 치명타 확률 40% 버프를 받을 수 있고, 얼음 공명까지 받으면 60%에 육박한다. 따라서 왕관자리에 치명타 피해 옵션을 사용할 수 있게 된다.\n단점은 물 파트너가 필수가 되고, 빙결이 걸리지 않는 적에게는 효과가 줄어든다.",
        },
        {
          name: ["대지를 유랑하는 악단"],
          content:
            "4셋 효과로 활·법구 강공격 피해 증가가 있어 또다른 종결 세팅이 된다. 이때 조준 공격 뿐만 아니라 <em>감우</em>의 <em>서리꽃</em>에도 버프가 들어간다.\n추가로 불 파트너를 함께 하면 2셋 효과까지 활용할 수 있어, 이를 활용하는 조합도 있다.\n다만 일부러 파밍을 하기 시작하면 <em>얼음바람 속에서 길잃은 용사</em>보다 세팅 난이도가 높을 수 있어서, 지금껏 캐릭터 육성하면서 모아온 것들을 활용하는 방식으로 하는 것이 좋다.",
        },
        {
          name: ["그림자 사냥꾼"],
          content:
            "<em>얼음바람</em> 4셋 수준의 치명타 확률 버프를 받을 수 있고, <em>얼음바람</em>과 달리 빙결이 걸리지 않는 적에게도 효과를 볼 수 있다.\n다만, 온필드 상태에서만 효과를 볼 수 있어, <em>푸리나</em>와 함께 쓰는 것이 아니라면 효과를 보기 어렵다.",
        },
        {
          name: ["옛 왕실의 의식"],
          content:
            "원소 폭발을 활용한 서브 딜러용 세팅. 원소 폭발을 사용하면 파티 전체에 공격력 버프를 준다.",
        },
        {
          name: ["옛 왕실의 의식", "얼음바람 속에서 길잃은 용사"],
          content:
            "메인 딜러로서는 <em>얼음바람 속에서 길잃은 용사</em> 세팅으로 거쳐가는 세팅이 되고, 서브 딜러로서는 이대로 활용하거나 <em.왕실</em> 4셋으로 넘어가도 된다.",
        },
      ],
    },
    partners: [
      {
        name: ["Zhongli"],
        content:
          "<em>감우</em>는 차지를 해야 하는데, 이때 상대의 공격에 취약해진다. 컨트롤이 아무리 좋아도 차지하는 시간은 필요하기 때문에, 6돌 <em>감우</em> 급의 속공이 가능하지 않는 한 보호막은 꽤 중요하다.\n만약 융해 조합을 사용할 경우, 얼음 보호막이 원소 반응을 뺏을 수 있어, <em>종려</em>가 거의 고정된다.",
      },
      {
        name: ["Kaedehara Kazuha", "Venti", "Sucrose"],
        content:
          "몹몰이 바람 파트너. <em>감우</em>의 핵심 공격은 모두 범위 피해기 때문에, 적이 뭉칠수록 강력해진다. 따라서 몹몰이 파트너들과의 시너지가 매우 좋다.\n<em>벤티</em>는 강력한 몹몰이가 가능해 <em>감우</em>의 영혼의 파트너였다. 하지만, 이나즈마 이후 잘 끌려오지 않는 적들이 많아지며 입지를 잃게 되었다. 물론 그런 적이 아니라면 여전히 강력한 파트너가 된다.\n<em>카즈하</em>의 경우 몹몰이 뿐 아니라 버프와 디버프를 동시에 제공할 수 있어 빙결/융해 조합 모두에서 고점을 뚫어주는 역할을 한다. 다만, 조합 상 보호막 파트너를 쓰기 어려워져, 타임어택을 하거나 고난이도 비경을 뚫어야 하는 경우에 동원된다.\n<em>설탕</em>은 이 둘이 없을 때 가능한 선택지 특히 <em>카즈하</em>의 하위 호환이다.",
      },
      {
        name: ["Xiangling", "Bennett"],
        content:
          "융해 조합의 파트너. 특히 <em>향릉</em>의 <em>화륜</em>은 원소 반응에 쿨타임이 없어 거의 모든 공격으로 융해를 터뜨릴 수 있고, 스킬을 처음 킬 때의 스탯이 스킬이 끝날 때까지 유지되는, 일명 스냅샷 스킬로, <em>베넷</em>의 버프와의 시너지가 좋다.\n이때 <em>감우</em> 원소 폭발이 오히려 원소 반응을 뺏어갈 수 있어, 아예 사용하지 않거나, 딜 타임이 끝날 때 원소 폭발을 쓰고 빠지는 방식으로 운영할 수 있다.",
      },
      {
        name: ["Nahida", "Dehya"],
        content:
          "융해 조합의 파트너. 풀과 불의 반응인 연소 반응 동안, 불 원소가 유지되는 것을 이용한다.\n<em>나히다</em>는 사슬로 넓은 범위에 걸쳐 풀 원소를 유지해주고, <em>데히야</em>는 전투 스킬의 협동 공격 범위가 매우 넓어 불 원소를 유지하기 좋다.\n<em>베넷</em>까지 쓰게 되면, 버프+힐+경직 저항까지 받을 수 있어 완성도가 높다.",
      },
      {
        name: ["Shenhe"],
        content:
          "얼음 딜러에게 특화된 서포터. <em>깃털</em> 효과로 얼음 원소 피해 보너스를 줄 수 있어, 특히 빙결 조합에서 자주 함께한다.",
      },
      {
        name: ["Shenhe", "Jean", "Bennett"],
        content:
          "일명 Sunfire 조합. <em>베넷</em>의 자기 부착을 <em>진</em>의 확산으로 퍼뜨리는 방식으로 운영한다. 이때 <em>신학</em>의 <em>깃털</em>을 적용시켜 순간적으로 폭발적인 피해를 줄 수 있다.\n다만, <em>진</em>의 원소 폭발 지속시간이 길지 않아, 사실상 6돌 <em>감우</em>의 속공을 활용하기 위한 조합이다.",
      },
      {
        name: ["Sangonomiya Kokomi", "Furina"],
        content:
          "물을 뿌리는 데 특화된 파트너. 보통 보호막이 없는 조합이 만들어지는데, 이때 물을 끊임없이 뿌려 빙결을 계속 유지하는 것이 핵심이다.\n<em>푸리나</em>의 경우, 원소 스킬이 지속적으로 HP를 깎아먹어 파티 전체 힐이 가능한 힐러가 필요한데, <em>신학</em>과 함께 한다면 <em>진</em> 밖에 없다. 바람 서포터와 함께 한다면, 얼음 힐러로 <em>샤를로트</em>를 쓸 수 있다. 다만, <em>샤를로트</em>는 얼음 원소 입자를 만들기 함들어 <em>벤티</em>가 아니면 원소 충전에 문제가 될 수 있다.",
      },
      {
        name: ["Mona"],
        content:
          "<em>벤티</em>, <em>디오나</em>와 함께 일명 <em>감모벤디</em> 조합으로 들어간다.\n<em>모나</em>의 포영을 건 후, <em>벤티</em>로 한 점에 모아놓고, <em>감우</em>의 원소 폭발과 서리꽃으로 폭발적인 피해를 욱여넣을 수 있다.\n한때는 종결이었지만, <em>벤티</em>로도 잘 끌려오지 않는 적들이 많아지며 예전같은 힘을 내진 못하게 되었다. 물론 끌려오는 적들이라면 여전히 강력하다.",
      },
      {
        name: ["Kamisato Ayaka", "Kamisato Ayato", "Hutao"],
        content:
          "<em>감우</em>를 서브 딜러로 하는 파트너.\n<em>아야카</em>의 경우, <em>신학</em> 대신 <em>감우</em>를 넣어 <em>아야카</em>의 현자타임을 커버하는 2딜러 체제로 운영할 수 있어, 해외에서 주류로 인정받고 있다. 같은 얼음 캐릭터로서 서로 원소 에너지에도 보탬이 되며, 메인 딜러로 쓰던 <em>감우</em>를 별다른 조치 없이 바로 서브 딜러로 활용활 수 있다..\n<em>아야토</em>의 경우, 원소 폭발의 매커니즘이 똑같아 2딜러 체제의 빙결 조합으로 활용할 수 있다.\n<em>호두</em>의 경우, <em>감우</em>의 원소 폭발로 <em>호두</em>의 원소 폭발을 최대한 강화하는 역할로 활용된다. 타임어택 시 활용되는 편으로 주류는 아니다.",
      },
    ],
  },
};

export default xiao_detail;
