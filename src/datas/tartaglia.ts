import * as materials from "./materials";

const tartaglia_detail = {
  name: "타르탈리아",
  summary: `활과 물을 사용하는 메인 딜러. 다만 활을 사용하면서도 근접전 위주로 싸워, 현재 대세가 된 무기와 어울리지 않는 전투를 하는 시초격 인물이다. 또한 최초의 <em>우인단</em> 캐릭터로, <em>우인단</em>이 플레이어블로 들어올 여지를 남겨준 캐릭터이기도 하다.
    <em>타르탈리아</em>는 스네즈나야의 외교기관 겸 정보기관 역할을 하는 <em>우인단</em>의 집행관 중 한 명이다. 리월을 관할하며 바위신의 심장을 얻기 위해 공작활동을 하고 있던 중, 몬드에서부터 온 <em>여행자</em>를 도우면서 처음 만나게 되었다. 특유의 친화력으로 <em>여행자</em>와 친해진 후 공작을 펼쳤지만, 오히려 <em>종려</em>의 계획에 이용되며 리월에 위기를 초래하게 하는 역할을 한다.
    이 과정에서 <em>여행자</em>와 대적한다. 우인단 집행관 중 낮은 서열임에도 불구하고, 신의 눈과 사안을 사용하는 전투로 <em>여행자</em>를 몰아붙였다. <em>여행자</em>는 이 때 사안을 제대로 사용할 수 있는 자와는 처음 대적하게 되었다.
    <em>타르탈리아</em>는 호쾌하고 밝은 성격의 인싸임과 동시에 전쟁광이다. 또한 순수하기도 한데, <em>여행자</em>와 대적한 후에도 그 힘에 감탄해 친구로 지내자고 할 정도. 또한 공격적인 성격 때문에 일을 그르칠 것을 염려해 항상 먼 타지에 파견되는데, 오히려 마음대로 싸워댈 수 있다고 좋아한다. 그와중에 여왕에 대한 충성심이 광적이거나 윤리의식이 박살난 다른 인물들에 비하면 정상인에 가까운 편이다.
    <em>타르탈리아</em>의 형재는 6남매로, 남매들에게 잘 대해주는 의외로 가정적인 면도 있다. 특히 뭔가 갖고싶다고 하면 심해 생물이라 할지라도 어떻게든 구해다 준다.
    한번은 리월에 동생 <em>테우세르</em>가 몰래 놀러온 적이 있었다. <em>테우세르</em>는 형이 장남감 영업을 하는 사람으로 알고 있었는데, 하루는 형이 일하는 것을 보고 싶다고 따라 나섰다. <em>타르탈리아</em>는 당시 우인단 단원들에게 할 연설을 준비하고 있었는데, 몰래 숨어있는 <em>테우세르</em>를 발견하고는 일원들 앞에서 장난감에 대한 일장 연설을 늘어놓는 헤프닝이 발생했다. 와중에 일원들은 은어나 암호인 줄 알고는 혼신의 연설(?)에 감탄의 기립박수를 보냈다. (이때문에 <em>티바트 최고의 장난감 판매원</em>이라는 별명이 생겼다.)
    <em>타르탈리아</em>는 명언을 남겼다. 리월에서의 일이 일단락 된 후 떠나는 <em>여행자</em>에게 '나 타르탈리아는 매 순간 강해지고 있다고,...(중략)'이라는 말을 남겼다. 허나 재밌는 것은, 실재로 새로 합류한 <em>카즈하</em>, 이나즈마의 추가로 <em>어획</em>을 얻은 <em>향릉</em>, 전용 무기가 된 <em>극지의 별</em>, 수메르와 함께 추가된 성유물 <em>님프의 꿈</em>, 폰타인이 추가된 후에는 <em>느비예트</em>의 물 공명까지, 입지를 잃지 않고 점점 강해져가고 있다. 덕분에 또다른 별명(?)으로 <em>나탈매강</em>도 생겼다.
    여담으로 수메르가 추가되기 전까지 복각을 상당히 자주 받았다. <em>타르탈리아</em> 픽업이 3번 돌 동안 한 번도 복각하지 못한 캐릭터도 있었기에, 당시에 '미호요의 아들'이라 불렸다. (벌써 별명이 3개.)
    코드명은 '귀공자'이지만, 한국어 인게임에선 귀공자 보단 본명으로 더 많이 불린다. 반면 영어권에선 등장인물들에게 귀공자(Childe)로 더 많이 불려 유저들에게도 귀공자로 불린다.`,
  profile: {
    en_name: "Tartaglia",
    gender: "남성",
    rareness: "★★★★★",
    element: "물",
    weapon: "활",
    constellation: "경천",
    birthday: "7/20",
    union: "스네즈나야 - 우인단",
    actor: ["남도형", "木村 良平(키무라 료헤이)", "Griffin Burns", "鱼冻"],
    cook: {
      name: "낙시의 극치",
      content:
        "'통통 연꽃 해산물 수프' 제작 시 획득 가능.\n파티 내 모든 캐릭터의 방어력이 282pt 증가한다. (지속시간 : 300초) 다인모드 시 자신의 캐릭터에만 적용된다.\n타르탈리아의 특제 요리. 피바다를 표류하는 야수가 죽기 직전에 울부짖는 것 같이 끔찍하다... 그러나 타르탈리아는 웃으며 바다에서 건진 전리품에 고향 특산물을 곁들였을 뿐이라고 설명한다.",
    },
    materials: {
      penetration: [
        materials.lapises,
        "물처럼 맑은 마음",
        "별소라",
        materials.fatui_medal,
      ],
      skills: [
        materials.freedoms,
        "마왕의 칼날",
        materials.fatui_medal,
        "지식의 왕관",
      ],
    },
  },
  skills: {
    normal_attack: {
      name: "단우",
      content:
        "일반 공격 : 활로 최대 6번 공격한다.\n강공격 : 피하가 더 크고 정확한 조준 사격을 한다. 조준 시 물 원소의 힘이 화살 끝에 계속해서 모인다. 격류의 힘이 가득 찬 화살이 적에게 명중하면 물 원소 피해를 주고 <em>단류</em>효과를 부여한다.\n<em>단류</em>\n<em>단류</em> 상태의 적이 <em>타르탈리아</em>의 각종 공격을 받으면 물 원소 범위 피해 효과가 발생한다. 해당 효과로 가하는 피해는 <em>일반공격</em>으로 간주한다.\n· 단류 · 섬 : 풀 차지 조준 사격이 <em>단류</em> 상태의 적을 명중하면 연속 범위 피해를 준다. 0.7초마다 1번 발동한다.\n· 단류 · 파 : <em>단류</em> 상태의 적 처치 시 물이 피어나 주변 적에게 <em>단류</em> 효과를 부여한다.\n<em>마왕 무장 · 광란</em> 상태에서 <em>낙하 공격</em>이 불가능하다.",
    },
    normal_skill: {
      name: "마왕 무장 · 광란",
      content:
        "순수한 물로 구성된 무장을 발동해 주변의 적에게 물 원소 피해를 주고 근접 상태에 진입한다.\n이 상태에서, <em>타르탈리아</em>의 일반 공격과 강공격은 기타 원소로 전환될 수 없는 물 원소 피해로 바뀌며 다음과 같은 변화가 일어난다.",
      sub_content: [
        {
          name: "일반 공격",
          content: "최대 6번 물 원소 참격을 가한다.",
        },
        {
          name: "강공격",
          content:
            "일정 스태미너를 소모해 순간적으로 전방을 향해 검을 2번 휘둘러 물 원소 피해를 준다.",
        },
        {
          name: "단류 · 참",
          content:
            "근접 공격이 <em>단류</em> 상태의 적을 명중하면 <em>단류 · 참</em>을 1회 발동해 물 원소 범위 피해를 준다. <em>단류 · 참</em>으로 가하는 피해는 원소 전투 스킬 피해로 취급하며, 1.5초마다 1번 발동한다.\n30초 후 혹은 다시 발동하면 스킬 효과가 해제되고 원거리 상태로 돌아오게 되며, 스킬은 재사용 대기시간에 진입한다.\n근접 상태 유지 시간이 길수록 재사용 대기시간이 길어진다. 만약 30초 후 자동으로 원거리 상태로 돌아오면 스킬은 더욱 긴 재사용 대기시간에 진입한다.",
        },
      ],
      comment:
        "그가 활을 무기로 사용하는 이유는 활을 잘 다루지 못하는 자신의 약점을 극복하기 위해서다. 하지만 전력을 다해야 하는 상황이 오면 진짜 실력을 보여줘야만 한다...",
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

export default tartaglia_detail;
