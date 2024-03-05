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
      "주 포지션은 보호막과 내성 감소를 겸비한 서포터. 조합도 자유롭고 사용도 간단해 굳이 보호막이 필요없는 경우를 제외하면 거의 모든 조합에서 사용 가능하다.\n특성은 원소 전투 -> 원소 폭발 -> 기본 공격 순이다. 기본 공격은 거의 사용하지 않는다.\n원소 전투 스킬은 <em>종려</em>의 핵심이다. 보호막과 내성 감소를 동시에 부여할 수 있어 편의성이 매우 높다. 보호막의 수준도 게임 내 탑급이라 지속시간 내에 파괴할 수 있는 공격이 별로 없다. <em>암주</em>의 파동은 주변에 바위 창조물이 있다면 공명해 파동이 옮겨간다. (바위 창조물은 <em>바위 행자</em>, <em>이토</em>, <em>알베도</em>의 원소 스킬 같은 거) 또한 바위 기믹과 모험에서도 유용하다. 짧은 터치로 사용하면, 똑같은 효과를 보지만 보호막이 없다.\n원소 폭발은 운석을 떨어뜨려 적에게 <em>석화</em>를 건다. <em>빙결</em>과 달리 <em>석화</em>는 지속시간 동안 깨지지 않지만, <em>빙결</em>과 같이 보스 급 적들에겐 먹히지 않는다. 4단계 특성을 돌파하면 체력에 비례해 피해량이 증가하는 데, 이를 이용해 일명 '딜종려'를 만들 수 있다. 다만, 체력과 함께 공격력, 치명타, 바위 원소 피해까지 챙겨야 해 자기만족의 영역이다. <a href='https://gall.dcinside.com/mgallery/board/view/?id=onshinproject&no=4047499'>관련 정보는 여기에</a>",
    weapons: [
      {
        name: "극지의 별",
        content:
          "<em>타르탈리아</em>에게 가장 잘 어울리는 <em>전용 무기</em>. 추가 능력치가 치명타 확률이라 세팅에 이로울 뿐 아니라 <em>단류</em> 부여에도 이점이 있으며, 전투 스킬/원소 폭발 피해 증가 및 평타/강공 명중 시 공격력 버프도 받아 시너지가 강하다.",
      },
      {
        name: "비뢰의 고동",
        content:
          "평타 위주의 버프를 주는 무기. 추가 능력치가 치명타 피해이고, 기본적으로 공격력 20% 버프를 줘 강한 편이다. 하지만 <em>극지의 별</em>이 스택관리가 더 쉬워 선호된다.",
      },
      {
        name: "천공의 날개",
        content:
          "높은 기초 공격력, 추가 능력치의 치명타 확률, 추가 효과로 치명타 피해를 줘 범용성이 높다. 하지만 잠재력 자체는 <em>비뢰의 고동</em>에 밀린다.",
      },
      {
        name: "녹슨 활",
        content:
          "추가 능력치로 공격력을 주고, 추가 효과으로 평타를 강화하는 버프를 줘 어울리는 5성 무기가 없다면 쓸만하다. 다만 추가 효과에 강공격 불이익이 있고(피해 -10%), 평타만 강화시킨다는 단점이 있다.",
      },
      {
        name: "파마궁",
        content:
          "<em>녹슨 활</em>과 비슷한 메커니즘의 무기. <em>녹슨 활</em>의 하위호환이고 단조로 만들 수 있지만, 설계도를 타타라스나 섬에서 '이상한 소라'를 수집하는 녀석에게서 얻어야 한다.",
      },
      {
        name: "절현",
        content:
          "원소 폭발 위주로 활용할 때 쓸만한 무기. 추가 능력치도 원소 마스터리라 원소 반응에 유리하다.\n다만 평타 강화가 되지 않아 원소 폭발 위주로 해야 한다. 평타 위주로 하고 싶다면 <em>녹슨 활</em>이 더 낫다.",
      },
      {
        name: "청록의 사냥활",
        content:
          "기행으로 '구매'해야 하지만, 추가 능력치가 치명타 확률이라 세팅에 유리하다.\n추가 효과으로 평타/강공이 명중 할 때 절반 확률로 작은 소용돌이가 생겨 적들을 끌어당긴다. 그렇게 끌어 당긴 후 <em>단류</em>를 뿌리고 피해를 욱여 넣을 수 있다. 다만, <em>타르탈리아</em>와 <em>청록의 그림자</em>의 기초 공격력이 낮은편이라 공격력 세팅이 필요해진다.",
      },
      {
        name: "흑암 배틀 보우",
        content:
          "추가 효과이 치명타 피해이고, 추가 효과이 적을 처치할 수록 강해져 다수 난전에 유리한 <em>타르탈리아</em>에게 좋다. 다만 반대로 소수를 상대로는 잠재력이 낮고, 무엇보다 스타라이트로 '구매'해야 해 무과금으론 구경도 못한다.",
      },
      {
        name: "바람 꽃의 노래",
        content:
          "'윈드 블룸 축제' 이벤트로 얻을 수 있는 무기. 전투 스킬을 쓰면 공격력 버프를 받을 수 있다. 다만 버프 시간이 6초로 너무 짧고, 추가 능력치가 원소 마스터리라 치명타 세팅이 만만치 않다.",
      },
      {
        name: "탄궁",
        content:
          "치명타 확률과 평타 강화를 가진 3성 무기. 3성 치고 은근 쓸만하다.",
      },
    ],
    artifacts: {
      recommand: {
        watch: "공격력%",
        grail: "물 원소 피해%",
        crown: "치명타 확률/치명타 피해",
        sub_effect:
          "치명타 확률/치명타 피해/공격력%/원소 마스터리/원소 충전 효율",
      },
      artifact_list: [
        {
          name: ["님프의 꿈"],
          content:
            "2셋 효과로 물 원소 피해 보너스, 4셋 효과로 일반 공격/강공격/낙하 공격/원소 전투/폭발 스킬 명중 시 공격력과 물 원소 피해 보너스를 스택으로 얻을 수 있다.\n4세트 효과의 지속시간이 짧아 풀스택을 유지하긴 매우 어려워지지만, <em>몰락</em> 4셋과는 다르게 원소 폭발과 <em>단류</em> 피해도 함께 증가하기 때문에 고점이 높다.",
        },
        {
          name: ["몰락한 마음"],
          content:
            "2셋 효과로 물 원소 피해 보너스, 4셋 효과로 전투 스킬 발동 시 일반/강공격 피해 버프를 받을 수 있다.\n<em>님프의 꿈</em>이 나오기 전까진 물 관련 성유물이 거의 유일해 종결로 쓰였다.",
        },
        {
          name: ["몰락한 마음", "님프의 꿈"],
          content:
            "거쳐가는 세팅이지만, 세팅 난이도가 매우 쉬워져 여기서 마무리 짓는 경우도 많다.\n최대치는 내려가지만, 둘 중 하나는 <em>검투사</em>나 <em>시메나와</em>와 같은 공격력 셋으로 바꿀 수 있다.",
        },
        {
          name: ["제사의 여운"],
          content:
            "2셋 효과로 공격력 버프, 4셋 효과로 평타의 피해량 버프를 준다.\n본래 <em>아야토</em>에 맞춰진 것이지만, 마찬가지로 근접 평타 위주의 딜러인 <em>타르탈리아</em>에게도 잘 어울린다.\n다만, 함께 나오는 성유물은 거의 쓰이지 않고, <em>몰락</em> 셋과 최종적으로 큰 차이가 나지 않아 추천되지는 않는다.",
        },
      ],
    },
    partners: [
      {
        name: ["Xiangling", "Kaedehara Kazuha", "Bennett"],
        content:
          "일명 탈향카베 조합.\n상성이 유리한 물/불/바람으로 구성되며 <em>타르탈리아</em> 전투 스킬의 쿨타임과 전체 사이클이 맞아 떨어져 현타가 거의 없다. 다만 그만큼 각자의 원소 충전 효율이 중요해지며, <em>카즈하</em>가 물과 불을 동시에 확산시켜야 해 운용이 까다롭다.\n<em>향릉</em>의 원소 폭발인 <em>화륜</em>은 거의 모든 타수에서 원소 반응을 일으킬 수 있는데, <em>타르탈리아</em> 역시 마찬가지라 시너지가 뛰어나다.\n<em>카즈하</em>는 확산을 통한 버프가 강하고, 몹몰이가 가능해 <em>화륜</em>과 <em>단류</em>의 위력을 더 끌어올릴 수 있다.\n<em>베넷</em>은 힐러임과 동시에 강력한 공격력 버프를 준다. 특히 <em>향릉</em>과 함께 공격력 버프를 주는 불 공명도 받을 수 있고, 원소 충전이 어려운 <em>향릉</em>의 배터리 역할도 해줄 수 있다.",
      },
      {
        name: ["Neuvillette"],
        content:
          "<em>느비예트</em>는 HP를 기반으로 하는 강공경 위주의 메인 딜러다.\n때문에 물 원소 공명을 위한 물 서포터가 필요한 데, 현재까진 마땅한 물 서포터라 하면 <em>푸리나</em> 밖에 없다. 하지만 <em>푸리나</em>는 다른 조합에서도 많이 쓰이기 때문에 캐릭터를 바꾸지 않아도 된다는 점에서 <em>타르탈리아</em>를 일명 '토템'으로 넣는다.\n추가로 <em>느비예트</em>는 보호막에 대한 대처가 약한편인데, 이를 <em>타르탈리아</em>가 보완해줄 수 있다.",
      },
      {
        name: ["Yunjin"],
        content:
          "평타 위주의 메인 딜러를 위한 서포터.\n원소 스킬로 일정 횟수의 평타 피해 증가 버프를 준다. 이 수가 꽤 넉넉하고, 돌파까지 하면 평타 공속 버프까지 받을 수 있어 시너지가 좋다. 거기다 <em>종려</em>, <em>알베도</em> 등의 바위 서포터를 더 붙여 바위 공명을 받을 수도 있다.",
      },
      {
        name: ["Kaeya"],
        content:
          "빙결을 위한 서브 딜러. <em>향릉</em>과 매우 비슷한 형태의 원소 폭발 스킬을 갖고 있어 빙결 유지와 서브딜 모두 우수하다.",
      },
      {
        name: ["Qiqi", "Diona", "Layla"],
        content:
          "빙결을 위한 서포터.\n<em>치치</em>는 원소 스킬로 힐과 빙결을 위한 서브 딜 역할을 함께 해줄 수 있고, <em>디오나</em>는 힐과 보호막을 동시에 줄 수 있어 안정성이 좋다. <em>레일라</em>는 보호막과 얼음 추가 타수가 있어 빙결과 안정감 모두 좋은 서포터가 된다.",
      },
      {
        name: ["Nahida", "Baizhu", "Yaoyao"],
        content:
          "만개 위주의 조합에 좋은 서브 딜러 겸 서포터.\n<em>나히다</em>는 원소 스킬을 맞춘 적들을 하나로 묶어 원소 반응을 동시에 일으킬 수 있어 한 번에 다수를 상대해야 할 때 유리하다.\n<em>백출</em>은 힐과 보호막을 함께 제공할 수 있고, 특히 만개가 주는 자폭 피해로부터 보호가 되어 안정성이 뛰어나다. <em>요요</em> 역시 원소 스킬을 통해 힐과 서브딜을 함께 할 수 있어 원소 반응과 안정성이 좋다.",
      },
      {
        name: ["Raiden Shougun", "Beidou", "Fischl"],
        content:
          "감전 위주의 조합에 좋은 서브 딜러. 특히 <em>라이덴 쇼군</em>은 <em>타르탈리아</em>의 현타 동안 메인 딜러 역할을 대신 할 수도 있고, 동시 원소 충전에 도움을 줄 수도 있어 시너지가 좋다.\n<em>북두</em>의 경우, 경직 저항과 피격 피해 감소를 함께 가져 다수를 상대해야 할 때 좋지만, 원소 충전 효율이 좋지 않아 다른 번개 캐릭터와 함께 쓰는 경우가 많다.",
      },
    ],
  },
};

export default zhongli_detail;
