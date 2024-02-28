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
      name: "극악기 · 진멸섬",
      content: "<em>타르탈리아</em>의 현재 상태에 따라 공격 방식이 달라진다.",
      sub_content: [
        {
          name: "원거리 상태 · 마탄 일섬",
          content:
            "전방을 향해 물 원소가 깃든 마법 화살을 쏴 물 원소 피해를 주도 <em>단류</em> 효과를 부여한다. 발동 후, 일부 원소 에너지를 반환한다.",
        },
        {
          name: "근접 상태 · 진멸의 물빛",
          content:
            "큰 범위의 참격을 발동해 근처의 모든 적에게 대량의 물 원소 피해를 주고 <em>단류 · 폭</em>을 발동한다.",
        },
        {
          name: "단류 · 폭",
          content:
            "<em>진멸의 물빛</em>이 <em>단류</em> 상태의 적을 명중하면 <em>단류</em> 효과를 소모하며 물 폭발을 일으켜 물 원소 범위 피해를 준다. <em>단류 · 폭</em>으로 가하는 피해는 원소 폭발 피해로 간주한다.",
        },
      ],
      comment:
        "급하고 세차게 흐르는 물은 그의 고향인 설국에선 보기 힘들다. 흐르는 물의 진귀함을 알기 때문에 그는 그것을 손에 쥘 수 있는걸지도 모른다.",
    },
    break_skills: {
      first: {
        name: "존재하지 않는 커튼콜",
        content: "<em>단류</em> 효과의 지속 시간이 8초 증가한다.",
      },
      fourth: {
        name: "수형검",
        content:
          "<em>마왕 무장 · 광란</em>의 근접 상태일 때, 일반 공격과 강공격에 치명타가 발동되면 명중된 적에게 <em>단류</em> 효과를 부여한다.",
      },
    },
    inherence_skills: [
      {
        name: "무예 마스터리",
        content: "파티 내 모든 캐릭터의 일반 공격 스킬의 레벨이 1 증가한다.",
      },
    ],
    constellation: [
      {
        name: "마왕 무장 · 파도 억제",
        content: "<em>마왕 무장 · 광란</em>의 재사용 대기시간이 20% 감소한다.",
      },
      {
        name: "마왕 무장 · 암류",
        content:
          "<em>단류</em> 상태의 적 처치 시 <em>타르탈리아</em>의 원소 에너지를 4pt 회복한다.",
      },
      {
        name: "심연의 재앙 · 분쟁의 근원",
        content: "<em>마왕 무장 · 광란</em> 스킬 레벨+3 (최대 Lv.15)",
      },
      {
        name: "심연의 재앙 · 차오르는 물",
        content:
          "4초마다 <em>타르탈리아</em> 자신이 부여한 <em>단류</em> 효과가 필드 위에 있을 때, <em>타르탈리아</em>가 현재 <em>마왕 무장 · 광란</em>의 근접 상태라면 <em>단류 · 참</em> 혹은 <em>단류 · 섬</em>을 발동한다.\n이 운명의 자리로 발동된 <em>단류 · 참</em>과 <em>단류 · 섬</em>은 각각의 발동 시간 간격에 제한을 받지 않고 영향도 주지 않는다.",
      },
      {
        name: "극악기 · 빗물 베기",
        content: "<em>극악기 · 진멸섬</em> 스킬 레벨+3 (최대 Lv.15)",
      },
      {
        name: "극악기 · 천사멸진",
        content:
          "근접 상태에서 <em>극악기 · 진멸섬</em> 발동 시 <em>마왕 무장 · 광란</em>의 재사용 대기시간이 초기화된다. 해당 효과는 <em>타르탈리아</em>가 원거리 상태로 돌아간 후에 발동한다.",
      },
    ],
  },
  tips: {
    summary:
      "주 포지션은 메인 딜러. 활을 쓰지만 근접전 위주로 운영한다.\n특성 순서는 원소 전투 -> 원소 폭발 -> 기본 공격순으로, 원소 전투 스킬을 사용하면 기본 공격이 전투 스킬로 판정되어 기본 공격 자체는 우선순위가 밀리게 된다.\n원소 전투 스킬은 기본 공격을 활에서 칼로 바꾸고 근접전으로 돌입한다. 이때 기본 공격이 원소 전투 스킬로 판정된다. 유의해야할 점은, 효과가 지속 되는 만큼 쿨타임이 길어지고, 지속시간이 끝나면 꽤 긴 쿨타임을 갖게 된다. 따라서 스킬을 끄는 시점을 익혀야 한다. 아니면 두 메인 딜러를 사용하는 조합을 고려할 수도 있다.\n원소 폭발은 두 가지 기능을 갖는데, 활을 든 상태로 원소 폭발을 쓰면 맞은 적들에게 <em>단류</em>를 부여하면서 원소 에너지를 돌려준다. 표식을 뿌리고 원충을 받으면서 다음 사이클을 이어가는 방식으로 활용될 수 있는데, 그만큼 사이클을 잘 이해하고 있어야 한다. 근접 상태에서 원소 폭발을 쓰면, <em>단류</em> 표식을 터뜨리면서 추가 피해를 가한다. 즉, 활로 쏜 원소 폭발은 사이클을 이어갈 때, 근접으로 쓴 원소 폭발은 마무리용이라 할 수 있다.\n<em>타르탈리아</em>에게 가장 중요한 것은 <em>단류</em>이다. <em>단류</em>는 표식을 부여하는 것인데, <em>섬</em>·<em>파</em>·<em>참</em>·<em>폭</em> 총 네 가지가 있고, 4단계 돌파 특성을 얻게 되면 근접 상태의 평타와 강공에 치명타가 터지면 <em>단류</em> 표식을 남길 수 있다. 이중 <em>섬</em>은 조준 공격으로 하는 거라 쓸 일이 거의 없다. <em>참</em>은 근접 공격을 맞은 적에게 추가 대미지를 주는 것이고, <em>폭</em>은 표식을 터뜨려 큰 피해를 준다. 이중 가장 핵심이라 할 수 있는 것은 <em>파</em>이다.\n<em>파</em>는 표식을 가진 적이 죽으면 표식이 터지고 범위 피해를 가하며, 피해를 맞은 적에게 다시 표식을 부여한다. 이런 이유로 <em>타르탈리아</em>는 표식을 퍼뜨리고 터뜨리고를 반복하며 일 대 다수 전투에 상당히 강한 편이다. 그렇기 때문에 <em>파</em>의 위력을 증가시키기 위해서라도 기본 공격 레벨을 찍어두는 것이 좋다.\n별자리는 1, 3 번째가 추천되고, 6 번째는 나쁘진 않지만 아쉽다. 첫 번째 별자리는 현자타임을 줄여주는 것인데, 6 번째 돌파를 하게 되면 효과가 떨어진다. 두 번째 별자리는 <em>타르탈리아</em>의 부족한 원충을 채워줄 수 있다. 그런데 <em>타르탈리아</em>의 원충이 부족하긴 해도 다수를 상대할 때가 아니면 효과가 줄어들게 되는데, 그렇게 되면 딱히 별자리까지 필요해지는 것은 아니다. 4 번째 별자리는 특정 조합(감전 조합, 국대 조합)을 제외하면 원소 반응을 방해한다. 그나마 <em>감우</em>의 서브 딜러로 넣을 수는 있다. 6 번째 별자리는 원소 전투 스킬의 쿨타임을 초기화 시켜줄 수 있지만, 이것 때문에 6 돌파까지 할 정도인가 하면 못내 아쉬워진다.\n기본적인 운영법은 <em>단류</em>를 묻히면서 시작한다. 활 조준 공격(<em>단류</em> 부착) -> (서포터 사이클) -> 원소 전투 -> 평평강 x 3 -> 원소 폭발.",
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
