import * as materials from "./materials";

const zhongli_detail = {
  name: "종려",
  summary:
    "창과 바위를 사용하는 서포터. 바위의 신이며, 마신 이름은 '모락스'. 가장 오래된 신 중 한 명이자 가장 강력한 존재로서 긴 역사와 굵직한 사건들의 중심에 서있었다.\n<em>종려</em>는 바위의 신이자, 원신 세계관에 등장한 인물 중 가장 나이가 많다. 하지만 지금은 신의 자리에서 내려와 <em>종려</em>라는 이름으로 왕생당의 객경(외부에서 초청된 고문, 강사같은 사람)으로서 일하고 있다. 오래 산 만큼 해박하고 넓은 상식, 지식을 가지고 있으며 왕생당 이외에도 <em>종려</em>를 아는 사람이 많다. 특히 전통적인 의식을 주로 주도했다.\n<em>종려</em>는 종종 건망증을 드러내는데, 특히 돈에 관해서는 항상 가져오는 걸 잊어먹는다. 그도 그럴게 신이었던 때엔 자신의 권능으로 돈(모라)을 스스로 만들 수 있었기 때문이다. 현재 티바트 대륙에 유통되는 화폐인 모라가 바로 그의 권능으로 만들어진 것이다.\n전성기였던 마신 전쟁시기에는 그를 거스를 수 있었던 존재가 없었을 정도로 강했는데, 심지어 7명의 신들 중 가장 강했다. 하지만 오로지 사람들을 지키고, 그들이 살 땅을 구하기 위해 야타용왕, 선중야차, 자신의 바위창을 앞세워 리월 지역을 정복했고, 자리를 내려놓기 전까진 직접 정치에도 관여했다. 하지만 세월이 흐르면서 인간 사회가 많이 변했고, 특히 칠성중 한 명인 <em>각청</em>의 말을 시작으로 자신이 물러나야 할 때가 오고 있음을 느끼게 되었다.\n<em>종려</em>는 자신이 떠나도 인간들이 자립할 수 있을 지에 대해 확신을 갖기 위해 <em>종려</em>라는 이름으로 신분을 위장한 채 지내다가, 1년에 한 번 신탁을 받는 제사인 '청신의례' 현장에 자신의 허물을 던저 죽은 척을 했다. 이때 도와준게 <em>우인단</em>인데, 자신이 신성시하는 '계약'을 통해 일을 극비리에 진행하던 중, <em>타르탈리아</em>가 이 사실을 모른 채 일을 크게 키운다. 이 과정에서 인간과 선인 사이가 좋아지고, 인간 사회가 한데 뭉쳐 마신과 대적하면서, 오히려 <em>종려</em>가 생각한 것 보다 더 큰 확신을 갖게 되었다.\n<em>종려</em>는 인간 생활을 시작한 지 얼마 되지 않았을 땐 돈을 자주 두고 다녀서 빌리는 일이 많았는데, 일이 일단락되고 나서도 익숙해지지 않았다. 때문에 '나탈메강'과 더불에 희대의 명대사를 남겼다. 아쉽게도 까먹었어.\n<em>종려</em>는 거의 유일한 보호막 서포터일 때부터 현재에 이르기까지 0티어 서포터로 분류된다. 보호막 중에서도 가장 강력한 편이며 보호막을 만듦과 동시에 적에게 모든 원소 내성 감소 디버프까지 걸 수 있다. 현재에는 다양한 보호막 캐릭터들이 생겨나며 조합에 따라 필요한 캐릭터를 쓸 수 있게 되었지만, <em>종려</em>는 여전히 조합에 상관없이 쓰일 수 있다. 또한 성능을 떠나서 외모와 목소리까지 좋아 남녀 불문하고 인기가 많다.\n중국 출시 초창기, <em>종려</em>의 위상은 지금같지 않았다. 특히 신의 이름을 달고 나온 만큼 기대치가 높았지만, 오히려 보통 캐릭터들 보다 쓰기 어려웠다. 때문에 중국 커뮤니티를 중심으로 업무 방해, 영수증 태러 등 거센 반발에 부딫혔고, 대망의 과대 광고에 대한 고소를 받기에 이른다. 이때문에 <em>종려</em>는 대폭 버프를 받게 되었고, 이는 지금까지도 유일한 버프 사례가 되었다. (이 때 버프가 얼마나 컸는지 파워 인플레이션이 두드러진 최근까지도 0티어를 유지하고 있다.)\n여담으로, 한자를 그대로 읽으면 <em>종리(钟离)</em>지만, 어째선지 한국에서만 <em>종려</em>로 번역되었다.",
  profile: {
    en_name: "Zhongli",
    gender: "남성",
    rareness: "★★★★★",
    element: "바위",
    weapon: "장병기",
    constellation: "암왕제군",
    birthday: "12/31",
    union: "리월항",
    actor: [
      "표영재",
      "前野 智昭(마에노 토모아키)",
      "Keith Silverstein",
      "彭博",
    ],
    cook: {
      name: "약불로 천천히 끓인 죽순 수프",
      content:
        "'죽순 수프' 제작 시 획득 가능.\n선택한 캐릭터 HP 최대치의 34%를 즉시 회복하고, 30초 동안 5초마다 HP를 980pt씩 회복한다.\n종려의 특제 요리. 햄은 월해정 연회 표준인 최고급 부위를, 고기는 샘물 마을에서 당일 사냥한 삼겹살을, 죽순은 경책산장의 꽉 찬 봄 죽순을 사용한다. 꼼꼼하고 세심하게 약불로 천천히 푹 삷는다... 이렇게 「까다로운」요리이기 때문에, 그는 이런 맛을 감상할 줄 아는 사람과만 나누고 싶어 한다.",
    },
    materials: {
      penetration: [
        materials.geos,
        "현암의 탑",
        "콜 라피스",
        materials.slime_esens,
      ],
      skills: [
        materials.goldens,
        "하늘을 삼킨 고래",
        materials.slime_esens,
        "지식의 왕관",
      ],
    },
  },
  skills: {
    normal_attack: {
      name: "바위 비",
      content:
        "일반 공격 : 창으로 최대 6번 공격한다.\n강공격 : 일정 스태미너를 소모해 전방으로 돌진한다. 경로 및 종착점에 비 같은 바위창을 내린다.",
    },
    normal_skill: {
      name: "지핵",
      content:
        "대지 위, 산맥, 반석 사이엔 바위의 힘이 널리 퍼져있다. 그러나 이 힘을 자유자재로 사용할 수 있는 이는 거의 없다.",
      sub_content: [
        {
          name: "짧은 터치",
          content:
            "대지에 퍼져 있는 바위 원소를 소환해 <em>암주</em>를 생성한다.",
        },
        {
          name: "홀드",
          content:
            "근처의 바위 원소를 폭발시켜 다음 효과를 생성한다.\n· <em>암주</em>의 수량이 최대 수량에 미치지 못하면 <em>암주</em>를 생성한다.\n· <em>옥홀 방패</em>를 생성한다. 피해 흡수량은 <em>종려</em> HP 최대치의 영향을 받는다.\n· 바위 원소 범위 피해를 준다.\n· 근처에 바위 원소를 보유한 타깃이 있다면, 최대 2개 타깃의 바워 원소를 대량 소모한다. 해당 효과로 피해를 줄 수 없다.",
        },
        {
          name: "암주",
          content:
            "생성 시, 바위 원소 범위 피해를 준다. 또한 <em>암주</em>는 주변의 다른 바위 원소 창조물과 간헐적으로 <em>원암 공명</em>을 일으켜 주변 적에게 바위 원소 피해를 준다.\n<em>암주</em>는 바위 원소 창조물로 간주되며, 공격을 막거나 등반할 수 있다.\n종려가 만든 <em>암주</em>는 동시에 1개만 존재할 수 있다.",
        },
        {
          name: "옥홀 방패",
          content:
            "모든 원소 피해와 물리 피해에 대해 150% 흡수 효과가 있다.\n<em>옥홀 방패</em>로 보호를 받고 있는 캐릭터는, 주변의 좁은 범위 내의 적들의 원소 내성과 물리 내성을 20% 감소시킨다. 이 효과는 중첩되지 않는다.",
        },
      ],
      comment:
        "바위는 평범해 보이지만 옥을 갈고 금에 모양을 새길 수 있을 만큼 단단하다.",
    },
    dash_skill: {
      name: "",
      content: "",
      comment: "",
    },
    ultimate_skill: {
      name: "천성",
      content:
        "거대한 운석을 떨어뜨려 추락 범위 내의 적에게 대량의 바위 원소 피해를 주고 <em>석화</em> 상태로 만든다.",
      sub_content: [
        {
          name: "석화",
          content: "<em>석화</em> 상태가 된 적은 움직일 수 없다.",
        },
      ],
      comment: "하늘의 운석을 떨어뜨려 운명의 어둠을 밝게 비춘다.",
    },
    break_skills: {
      first: {
        name: "낭떠러지의 재결",
        content:
          "<em>옥홀 방패</em>가 피해를 받으면 <em>철벽</em> 효과가 발동한다.\n· <em>옥홀 방패</em>의 보호를 받는 캐릭터의 보호막 강화 효과가 5% 증가한다.\n· 해당 효과 최대 중첩 횟수는 5회. 효과는 <em>옥홀 방패</em>가 사라질 때까지 지속된다.",
      },
      fourth: {
        name: "호의호식",
        content:
          "HP의 최대치에 영향을 받아, <em>종려</em>가 가하는 공격의 피해가 증가한다.\n· 일반 공격, 강공격, 낙하 공격으로 가하는 피해 :  HP 최대치의 1.39%\n· <em>지핵</em>의 <em>암주</em>, <em>공명</em> 피해 : HP 최대치의 1.9%\n· <em>천성</em> 피해 : HP 최대치의 33%",
      },
    },
    inherence_skills: [
      {
        name: "수정석의 이치",
        content: "장병기 무기 단조 시 소모한 광석을 15% 반환한다.",
      },
    ],
    constellation: [
      {
        name: "암석 · 천지의 기반",
        content:
          "<em>지핵</em>으로 만든 <em>암주</em>는 동시에 최대 2개 존재할 수 있다.",
      },
      {
        name: "돌 · 옥으로 인해 빛나는 세상",
        content:
          "<em>천성</em>이 떨어질 때 근처에 있는 현재 캐릭터에게 <em>옥홀 방패</em>를 부여한다.",
      },
      {
        name: "옥그릇 · 저물어도 사라지지 않는 광채",
        content: "<em>지핵</em> 스킬 레벨+3 (최대 Lv.15)",
      },
      {
        name: "옥홀 · 부서져도 건재한 견고함",
        content:
          "<em>천성</em>의 영향 범위가 20% 증가한다. 또한, <em>천성</em>의 <em>석화</em> 효과 지속 시간이 2초 증가한다.",
      },
      {
        name: "푸른 규벽 · 천지의 이치",
        content: "<em>천성</em> 스킬 레벨+3 (최대 Lv.15)",
      },
      {
        name: "금옥 · 천하에 주는 선물",
        content:
          "<em>옥홀 방패</em>가 피해를 받을 경우, 받은 피해의 40%만큼 현재 캐릭터의 HP를 회복한다. 단일 회복량은 현재 캐릭터 HP 최대치의 8%를 초과할 수 없다.",
      },
    ],
  },
  tips: {
    summary:
      "주 포지션은 보호막과 내성 감소를 겸비한 서포터. 조합도 자유롭고 사용도 간단해 굳이 보호막이 필요없는 경우를 제외하면 거의 모든 조합에서 사용 가능하다.\n특성은 원소 전투 -> 원소 폭발 -> 기본 공격 순이다. 기본 공격은 거의 사용하지 않는다.\n원소 전투 스킬은 <em>종려</em>의 핵심이다. 보호막과 내성 감소를 동시에 부여할 수 있어 편의성이 매우 높다. 보호막의 수준도 게임 내 탑급이라 지속시간 내에 파괴할 수 있는 공격이 별로 없다. <em>암주</em>의 파동은 주변에 바위 창조물이 있다면 공명해 파동이 옮겨간다. (바위 창조물은 <em>바위 행자</em>, <em>이토</em>, <em>알베도</em>의 원소 스킬 같은 거) 또한 바위 기믹과 모험에서도 유용하다. 짧은 터치로 사용하면, 똑같은 효과를 보지만 보호막이 없다.\n원소 폭발은 운석을 떨어뜨려 적에게 <em>석화</em>를 건다. <em>빙결</em>과 달리 <em>석화</em>는 지속시간 동안 깨지지 않지만, <em>빙결</em>과 같이 보스 급 적들에겐 먹히지 않는다. 4단계 특성을 돌파하면 체력에 비례해 피해량이 증가하는 데, 이를 이용해 일명 '딜종려'를 만들 수 있다. 다만, 체력과 함께 공격력, 치명타, 바위 원소 피해까지 챙길것이 많아, 결국 자기만족의 영역이다. <a href='https://gall.dcinside.com/mgallery/board/view/?id=onshinproject&no=4047499'>관련 정보는 여기에</a>\n별자리는 첫 번째를 제외하고 전체적으로 서포터 역할에 맞춰져 있다. 첫 번째 별자리는 서브 딜 역할을 강화해준다. 원래 <em>암주</em>는 하나만 세워 둘 수 있는데, 이걸 두 개로 늘려준다. 물론 바위 파동까지 나와 서브 딜이 강화된다. 두 번째 별자리는 <em>천성</em>을 떨어뜨리면 보호막을 부여해준다. 이때, 다인모드라면 동료들까지 보호막을 줄 수 있다. 4 번째 별자리는 <em>천성</em>의 효과를 강화해준다. 마지막 별자리는 <em>종려를</em> 완전체로 만들 수 있다. 보호막이 피해를 입으면 현재 캐릭터의 체력을 회복시킨다. 이렇게 되면 힐러가 필요 없어진다.\n기본적인 운영이 어렵지 않고 편리하다. 원소 폭발은 적들이 예쁘게 잘 모여있다 싶으면 쓰면 되고, 웬만한 상황에선 보호막만 줘도 1인분 이상 한다.\n세팅은 딜과 서폿으로 나뉘는데 딜을 올리려고 공격력 시계를 주는 것보단, 돌파 특성도 있으니 체력 시계를 주는 것이 무난한 세팅이 된다. 그리고 <em>종려</em>는 스스로 원충이 잘 되는 편은 아니어서 원소 충전 효율을 챙겨주는 것도 중요하다.",
    weapons: [
      {
        name: "흑술창",
        content:
          "추가 능력치가 HP인 3성 무기. 하지만 그 수치가 매우 크고 창중에선 거의 유일한 HP 무기라, 원충과 딜을 포기하고 오로지 보호막만 추구한다면 전용무기가 된다.",
      },
      {
        name: "호마의 지팡이",
        content:
          "추가 효과로 체력을 추가로 올려준다. 거기다 추가 능력치에 치명타 피해, 또 추가 효과에 체력 비례 피해량 증가가 있어, <em>종려</em>에게 서포팅과 딜링을 모두 챙겨줄 수 있다.\n다만 <em>호마의 지팡이</em>는 메인 딜러용이기에 <em>종려</em>의 딜이 중요하지 않다면 우선순위는 떨어진다.",
      },
      {
        name: "관홍의 창",
        content:
          "보호막을 강화하고, 공격이 명중하면 공격력 버프를 준다. 매체에선 <em>종려</em>가 가지고 나오는 경우가 많고, 보기에도 잘 어울려보이지만, 사실상 딜러용 무기라 <em>종려</em>에겐 거의 쓸모가 없다.",
      },
      {
        name: "천공의 마루",
        content:
          "원소 충전 효율을 위해 사용한다. 하지만 원소 폭발 위주로 운영할 거 아니면, 우선순위는 낮다.",
      },
      {
        name: "페보니우스 장창",
        content:
          "원소 충전 효율이 높고, 치명타 발생 시 원소 구슬이 쏟아져 원소 폭발을 안정적으로 돌릴 수 있다. 원소 폭발 위주로 운영할 때 유용하다.",
      },
      {
        name: "별의 낫 프로토타입",
        content:
          "<em>페보니우스 장창</em>의 하위호환이지만, 추가 효과가 <em>종려</em>에게 의미가 없다.",
      },
    ],
    artifacts: {
      recommand: {
        watch: "HP%",
        grail: "HP%",
        crown: "HP%",
        sub_effect: "원소 충전 효율/HP/HP%/치명타 확률",
      },
      artifact_list: [
        {
          name: ["옛 왕실의 의식"],
          content:
            "4셋 효과로 원소 폭발을 사용하면, 파티 전체에 공격력 버프를 준다.\n<em>종려</em>의 경우 원소 폭발을 거의 사용하지 않지만, 2돌의 경우 원소 폭발 사용 시 보호막을 적용받는데, 2셋 효과로 원소 폭발 피해 버프를 받을 수 있어 2돌 이상일 때 주로 사용하는 세팅이 된다.",
        },
        {
          name: ["견고한 천암"],
          content:
            "2셋 효과로 체력 증가를, 4셋 효과로 전투 스킬 명중 시 보호막 강화 + 파티 전체 공격력 버프를 준다.\n지속적으로 <em>암주</em>로 피해를 줄 수 있으면 높은 효율을 낼 수 있지만, <em>암주</em> 범위를 지켜야해 최대치를 유지하기에는 까다롭다.",
        },
        {
          name: ["유구한 반암"],
          content:
            "4셋 효과로 원소 반응으로 생긴 결정을 먹으면, 그 원소의 피해량이 증가한다.\n버프는 좋은 편이지만, <em>종려</em>가 착용한 경우 <em>종려</em>로 결정을 골라서 먹어야하며, 결정이 생기지 않는 바람/바위/풀/물리 피해는 버프를 받을 수 없어 활용이 제한된다. 물론 풀의 경우, 번개 원소를 대신 먹으면서 대체할 수는 있다.",
        },
        {
          name: ["견고한 천암", "감로빛 꽃바다"],
          content:
            "둘다 2셋 효과로 HP 20%, 총 40%를 버프를 받을 수 있다.\n다른 세팅이 조합을 타거나 조건이 붙어 제대로 활용하기 어려워, 가장 무난한 세팅이 된다.",
        },
      ],
    },
    partners: [
      {
        name: ["Navia", "Arataki Itto", "Albedo", "Ningguang", "Gorou"],
        content:
          "바위 공명이 필요한 파티에선 빠질 수 없는 서포터.\n<em>이토</em>와 <em>응광</em>은 바위 소환물을 사용하는 딜러이며 특히 스스로 취약하다는 단점이 있는데, 이를 <em>종려</em>의 보호막으로 커버할 수 있다.\n<em>나비아</em>의 경우, 결정 반응을 활용한 정석정인 보호막 서포터로 사용된다. 이때에는 파티 사이클에 도움이 되는 <em>페보니우스 창</em>을 사용하기도 한다.\n<em>알베도</em>와 <em>고로</em>는 바위 파티의 서포터로 쓰이는데, 특히 <em>알베도</em>는 바위 구조물인 <em>태양의 꽃</em>도 있고, 원소 폭발을 통한 딜과 배터리 역할로 <em>종려</em>와의 시너지가 좋다.",
      },
      {
        name: ["Hutao", "Klee", "Yoimiya"],
        content:
          "보호막은 특히 HP를 쉽게 잃거나 쉽게 넘어지는 캐릭터들한테는 특히 중요하다.\n<em>호두</em>의 경우, 스킬을 사용할 때 HP를 잃는데 <em>호마의 지팡이</em>를 사용한다면 낮은 HP를 유지해야해 까딱 잘못하면 죽기 십상이다. 불 공명을 받기 위해 <em>토마</em>를 쓰기도 하지만, 보호막의 안정성이 떨어진다면 <em>종려</em>를 추천할 수 있다.\n<em>요이미야</em>와 <em>클레</em>는 둘다 경직 저항이 낮아 맞았을 때 밀려나는 일이 많다. 평타와 강공격은 흐름이 중요한 만큼 이를 방지하는 것이 중요하다.",
      },
      {
        name: ["Xiao", "Wanderer"],
        content:
          "<em>종려</em>는 현재 유일하게 명함만으로 바람 원소 내성을 걸어 줄 수 있어, <em>파루잔</em>과 함께 몇 안되는 바람의 서포터로 쓸 수 있다. 또한 <em>소</em>는 <em>나자의 춤</em> 상태에서 서서히 HP가 떨어지고, <em>방랑자</em>는 법구 캐릭터라 경직 저항이 약해, 보호막의 중요성이 높다.",
      },
      {
        name: ["Neuvillette", "Nahida"],
        content:
          "<em>느비예트</em>역시 법구 캐릭터라 경직 저항이 약하다. 특히 강공격을 유지하는 방식으로 사용하기 때문에, 경직당하지 않는 것이 중요하다.\n<em>나히다</em> 또한 법구에다 여자아이 체형이라 생존력이 좋지 않아, 필드 딜러 역할을 한다면 보호막을 갖추는 것이 좋다. 추가로, <em>종려</em>가 풀 원소 디버프를 걸어줄 수 있다. 만약 <em>나히다</em>가 <em>도금된 꿈</em> 셋을 사용하는데, 다른 캐릭터에게 <em>숲의 기억</em> 셋이 없다면, <em>종려</em>에게 <em>숲의 기억</em> 세팅을 해주는 경우도 있다.",
      },
      {
        name: ["Ganyu", "Tighnari", "Lyney"],
        content:
          "활의 조준 사격을 주로 사용하는 캐릭터들 역시 조준 중, 특히 2단 차지까지 해야 해 경직에 취약하다.",
      },
    ],
  },
};

export default zhongli_detail;
