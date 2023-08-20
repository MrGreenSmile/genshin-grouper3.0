import * as materials from "./materials";

const venti_detail = {
  name: "벤티",
  summary:
    "활과 바람 원소를 사용하는 몹몰이 서포터. 몬드를 관장하는 바람의 신이며, 본명은 '바르바토스'. 가장 오래된 신 중 한 명이기도 해 티바트의 비밀을 알고 있는 몇 안되는 존재이다.\n<em>벤티</em>는 자유분방하고 음주가무를 즐기는 음유시인이라는 신분으로 위장한 채, 천사의 몫 같은 주점에서 공연을 해주고 술을 얻어마시는 삶을 살고 있다.\n사실 <em>벤티</em> 과거 몬드의 자유를 위해 싸운 적이 있었다. 당시 <em>벤티</em>는 작은 선령이었고, 자유를 원하는 한 소년의 편에서 당시 몬드의 왕이자 폭군이었던 '폭풍의 마신'에 대항했다. 이 전쟁으로 소년은 사망했지만, 소년의 의지를 이어 소년의 모습으로 변한 <em>벤티</em>는 신으로 인정받게 되었다. 이후부터 몬드는 왕이 없는 나라가 되었고, 대신 기사단이 만들어졌다.\n하지만 귀족 '로렌스' 가문은 남아있었고, 권위주의가 강한 그들이 점차 부패해 비인간적인 행위를 일삼고 노예를 부리기 시작했다. 평소에도 장난을 좋아하던 <em>벤티</em>는 바위의 신이자 친구인 <em>모락스</em>의 사인을 베끼는 연습을 했었는데, 이를 이용해 귀족의 지도자가 몬드를 리월에 팔아넘기려 한다는 거짓 선동을 해 귀족을 무너뜨리는 사건을 일으켰다. 이때의 혁명을 이끈 사람이 바로 전설이 된 '바네사'다.\n이후 <em>벤티</em>는 몬드를 신에게서도 자유로운 나라로 만들기 위해 떠났다. 사실 신은 사람들의 숭배를 받으며 통치를 하지 않으면 힘을 잃게 되는데, 본래 강력한 신이었던 <em>벤티</em>는 그렇게 약해져갔다. 몬드에는 바람의 신이 전설이자 종교가 되어 성당이 세워졌지만, <em>벤티</em>는 그조차 자유롭지 않다며 탐탁찮아 했다.\n<em>벤티</em>는 평소에는 능글맞고 여유가 넘치지만, <em>여행자</em>가 난관에 부딪히거나 할 때면 직접 개입하려하진 않지만 지혜를 빌려준다.\n<em>모락스</em>와는 함께 오랜 시간동안 친구였다. 민들레주를 가지고 종종 만나는 사이였지만, <em>벤티</em>가 워낙 장난기가 많고 취해서 실수를 많이 해 도망다니기도 한듯하다. 다른 젊고 어린 신들과도 잘 아는 사이인 듯 보이지만, 얼음의 신과는 500년 전 대재앙 이후 소통이 끊겼다고 한다. 얼음의 신이 무슨 일을 꾸미는 지 아는 것처럼 보이기도 한다.\n<em>벤티</em>는 중성적인 외모와 능글맞는 성격 때문에 호불호가 많이 갈렸지만, 지금은 강력한 몹몰이와 중간중간 보여주는 어른스러우면서도 지혜로운 면모로 이미지가 많이 바뀌었다.\n이름인 바르바토스(Barbatos)는 솔로몬 72악마 중 하나의 이름으로, 녹색 옷, 녹색 모자와 망토를 두른 사냥꾼으로 묘사된다. 새나 짐승의 소리를 듣고 점지하거나 과거와 미래의 일을 알 수 있으며, 달변가이기도 하다.",
  profile: {
    en_name: "Venti",
    gender: "무성",
    rareness: "★★★★★",
    element: "바람",
    weapon: "활",
    constellation: "가선",
    birthday: "6/16",
    union: "몬드",
    actor: ["정유정", "村瀬 歩(무라세 아유무)", "Erika Harlacher", "喵酱"],
    cook: {
      name: "암울한 미래",
      content:
        "'흥얼채' 제작 시 획득 가능.\n파티 내 모든 캐릭터의 치명타 확률가 20%, 치명타 피해가 20% 증가한다. (지속시간 : 300초). 다인 모드 시 자신의 캐릭터에만 적용된다.\n치치의 특제 요리. 식재료가 가지런히 놓여서 보기엔 아주 맛있어 보인다. 어쩐지 치치가 이 요리를 만드는 데 시간이 많이 걸렸다고 백출이 말하더라... 하지만 미각이 없는 치치를 생각하면 용기 없인 먹지 못할 것 같다.",
    },
    materials: {
      penetration: [
        materials.frozens,
        "서리의 핵",
        "유리주머니",
        materials.chuchu_scroll,
      ],
      skills: [
        materials.prosperities,
        "북풍의 꼬리",
        materials.chuchu_scroll,
        "지식의 왕관",
      ],
    },
  },
  skills: {
    normal_attack: {
      name: "운래의 고대 검법",
      content:
        "일반 공격 : 검으로 최대 5번 공격한다.\n강공격 : 일정 스태미너를 소모해 순간적으로 전방을 향해 검을 2번 휘두른다.",
    },
    normal_skill: {
      name: "선법 · 한병의 귀차",
      content:
        "얼음과 피로 만들어진 부적으로 <em>한병의 귀차</em>를 소환해 주변의 적에게 얼음 원소 피해를 준다.",
      sub_content: [
        {
          name: "한병의 귀차",
          content:
            "· <em>치치</em>의 일반/강공격 명중 시, 자신의 파티 내 모든 캐릭터 및 근처 아군 캐릭터의 HP를 회복시킨다. 회복량은 <em>치치</em>의 공격력에 비례한다.\n· 일정 시간이 지날 때마다 현재 필드 위 자신의 캐릭터의 HP를 회복한다.\n· 캐릭터를 따라다니며 경로상의 적에게 얼음 원소 피해를 준다.",
        },
      ],
      comment:
        "「얘는 주로 온도가 올라서 부패하는 걸 방지해줘요... 음, 그러니까 백 선생님의 진귀한 약재들 말이에요.」",
    },
    dash_skill: {
      name: "",
      content: "",
      comment: "",
    },
    ultimate_skill: {
      name: "선법 · 구고도액",
      content:
        "<em>치치</em>가 체내에 봉인된 선력을 해방해 주변의 적에게 <em>도액 부적</em> 표식을 남기고, 얼음 원소 피해를 준다.",
      sub_content: [
        {
          name: "도액 부적",
          content:
            "<em>도액 부적</em> 표식이 있는 적에게 피해를 주면 필드 위 캐릭터의 HP를 회복시킨다.",
        },
      ],
      comment:
        "「본명, 구고도액진군. 죽다 살아난 해골 동자.」——치치는 이 말을 기억하지 못한다.",
    },
    break_skills: {
      first: {
        name: "생명 연장의 묘법",
        content:
          "<em>선법 · 한병의 귀차</em> 상태의 캐릭터가 원소 반응을 일으키면, 받는 치유 보너스가 20% 증가한다. (지속시간 : 8초).",
      },
      fourth: {
        name: "우연히 얻은 옥첨",
        content:
          "<em>치치</em>의 일반/강공격이 적에게 명중 시 50% 확률로, 적에게 <em>도액 부적</em>을 한 장 부여한다. (지속시간 : 6초). 해당 효과는 30초마다 한 번 발동한다.",
      },
    },
    inherence_skills: [
      {
        name: "지나간 기억",
        content: "미니맵에 주위의 리월 지역 특산물 위치가 나타난다.",
      },
    ],
    constellation: [
      {
        name: "한고의 회양",
        content:
          "<em>한병의 귀차</em>의 공격이 <em>도액 부적</em> 표식이 있는 적에게 명중할 때, <em>치치</em>의 원소 에너지를 2pt 회복한다.",
      },
      {
        name: "뼛속까지 스며드는 한기",
        content:
          "얼음 원소의 영향을 받은 적을 공격할 때, <em>치치</em>가 가하는 일반/강공격 피해가 15% 증가한다.",
      },
      {
        name: "승천 보고",
        content: "<em>선법 · 구고도액</em> 스킬 레벨+3 (최대 Lv.15)",
      },
      {
        name: "중생을 압도하는 천위",
        content: "<em>도액 부적</em> 표식이 있는 적은 공격력이 20% 감소한다.",
      },
      {
        name: "피어난 홍련",
        content: "<em>선법 · 한병의 귀차</em> 스킬 레벨+3 (최대 Lv.15)",
      },
      {
        name: "기사회해",
        content:
          "<em>선법 · 구고도액</em> 발동 시 근처 파티 내 전투 불능이 된 캐릭터를 부활시키고 HP를 50% 회복한다. 해당 효과는 15분마다 한 번 발동한다.",
      },
    ],
  },
  tips: {
    summary:
      "주 포지션은 힐러. 게임 내에서 힐량만으론 최고 수준이다. 다만, 퓨어 힐러, 즉 힐 외에는 역할이 없어 다른 역할이 가능한 힐러들에게 거의 자리를 내어주었다. 여담으로 평타 모션이 아기자기하면서도 시원시원하다.\n공격력 위주의 세팅을 해야 하지만, <em>진</em>과는 다르게 공격 스킬이 없어 딜은 기대하기 어렵다. 그나마 있다면 원소 폭발 정도. (이걸로 약팔이 하는 영상도 심심찮게 볼 수 있다.)\n특성은 원소 폭발 -> 원소 스킬 -> 기본 공격 순이 좋지만, 평타는 안 찍어줘도 좋다.\n원소 스킬은 주기적으로 힐을 주는 데, 힐 간격이 꽤 길고, 시전 하자마자 <em>치치</em>를 한 번 회복 시켜주고 시작해, 지속시간 동안 최대 3번까지 힐을 받을 수 있다. 이 지속시간 동안 <em>치치</em>가 평타를 칠 때 회복을 시켜줄 수 있는데, 힐량 자체는 다른 캐릭터들의 것들을 웃돌지만, 적들은 죽지 않는다.\n원소 폭발은 한 번 터뜨릴 때 맞은 적들에게 <em>도액 부적</em>을 붙이고, 부적을 가진 적들을 맞추면 힐을 받을 수 있다. 이때 여러 부적을 동시에 때린다 해도 한 번만 회복한다. 그래도 원소 스킬과 원소 폭발의 지속시간과 쿨타임이 얼추 맞아 힐의 지속력이 좋다.\n운명의 자리는 전체적으로 효율적이지 않다. 1번 별자리는 부적이 붙은 적을 <em>한병의 귀차</em>로 때려야 효과를 받을 수 있어 까다롭고, 2번 별자리는 <em>치치</em>의 포지션 상 평타를 섞어 쓰기 쉽지 않아 비효율적이다.\n그나마 6번 별자리가 게임 내에서 보기 힘든 효과인 부활을 가지고 있다. 특히 다인 모드에서 다른 유저들을 부활시킬 수 있어 조커로 활용할 수도 있다. (5성 캐릭터라 찍기 힘들고, 그정도 시점이 되면 다인 모드 파트너들도 죽을 일이 별로 없을 뿐.)",
    weapons: [
      {
        name: "천공의 검",
        content:
          "기초 공격력이 높아 쓰게 된다.\n기초 공격력이 높은 <em>매의 검</em>도 있지만, 원소 충전이 중요한 <em>치치</em>에겐 원소 충전 효율이 붙은 <em>천공의 검</em>이 더 어울린다.",
      },
      {
        name: "제례검",
        content:
          "원소 스킬이 맞을 때 확률적으로 쿨타임을 초기화시켜준다.\n원소 스킬이 지속스킬이라 효과를 보기 좋고, 원소 충전 효율도 받을 수 있어 준종결로도 보지만, 다른 캐릭터들에게 우선순위가 있다.",
      },
      {
        name: "페보니우스 검",
        content: "원소 충전에 특화된 무기. <em>제례검</em>이 없을 때 줄만하다.",
      },
      {
        name: "피리검",
        content: "추가 능력치가 공격력이라 사용된다.",
      },
      {
        name: "비천어검",
        content: "원소 충전 효율을 가진 3성 무기.",
      },
    ],
    artifacts: {
      recommand: {
        watch: "원소 충전 효율/공격력%",
        grail: "공격력%",
        crown: "공격력%",
        sub_effect: "원소 충전 효율/공격력%",
      },
      artifact_list: [
        {
          name: ["바다에 물든 거대 조개"],
          content:
            "힐이 특별히 강한 캐릭터들에게 좋은 세팅. 힐러, 특히 딜로스가 큰 퓨어 힐러들의 딜로스를 보완해준다.",
        },
        {
          name: ["옛 왕실의 의식"],
          content:
            "원소 폭발을 사용하면 파티 전체에 공격력 버프를 준다. 파티 내 <em>왕실</em> 4셋 캐릭터가 이미 있다면 다른 세팅이 좋다.",
        },
        {
          name: ["검투사의 피날레", "바다에 물든 거대 조개"],
          content:
            "딜이 필요하거나 <em>조개</em> 4셋을 하기 전에 쓰는 세팅. <em>치치</em>는 딜을 기대하기 어려워 그저 거쳐가는 세팅이 된다.",
        },
        {
          name: ["사랑받는 소녀"],
          content:
            "순수 힐량을 극대화 하는 세팅.\n힐이 부족하다면 할만 하지만, <em>청록색 그림자</em> 파밍을 하면서 남는 게 아니라면 굳이 파밍할 필요는 없고, 굳이 한다면 <em>거대 조개</em> 세팅을 갖추는 것이 좋다.",
        },
      ],
    },
    partners: [
      {
        name: ["Razor"],
        content:
          "초전도를 활용할 수 있는 메인 딜러. <em>치치</em>의 원소 스킬이 지속적으로 힐과 얼음을 묻혀줘 안정성이 좋다.",
      },
      {
        name: ["Diluc", "Klee"],
        content:
          "근거리 불 메인 딜러들에게 좋은 힐러가 된다.\n<em>클레</em>는 법구 치고 근거리 전투를 하게 되어, <em>치치</em>와의 조합이 나쁘지 않다.\n<em>호두</em>도 근거리 전투를 하지만, HP를 낮게 유지해야 해 <em>치치</em>가 어울리지 않는다.",
      },
      {
        name: ["Eula"],
        content:
          "<em>라이덴</em>과 함께 할 때, 힐러 포지션에서 얼음 공명을 위해 포함될 수 있다.",
      },
    ],
  },
};

export default venti_detail;
