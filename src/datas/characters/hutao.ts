import * as materials from "../equipments/materials";

const hutao_detail = {
  name: "호두",
  summary: `
    불 원소와 창을 사용하는 메인 딜러. HP를 소모해 대미지 증가 버프를 받는 일명 '버서커'형 캐릭터이며, 리월 이벤트가 올 때 대부분 큰 비중을 차지한다. 특히 독특한 성격과 귀여움, 역동적인 모션, 강력한 '버서커' 모드로 원신 초창기부터 유입을 이끌어왔다. 많은 캐릭터가 나온 지금, 편의성면에선 밀리기 시작했지만 여전히 강력한 메인 딜러로서 자리를 지키고 있다.
    <em>호두</em>는 리월의 장례와 제례를 주관하는 '왕생당(往生堂)'의 77대 당주이다. 리월 신의 죽음 사건 후, <em>종려</em>를 중심으로 떠나간 신을 기리는 송신의례를 주관했다. 해등절에서도 중심적인 역할을 하는 데, 해등절이 축제의 의미도 있지만 제령의 의미도 있기 때문이다.
    <em>호두</em>는 어렸을 때부터 걸출했다. 3살 때 물구나무를 서 고전을 외웠고, 6살 땐 관속에 들어가 꿀잠을 잤다. 8살엔 장례의식을 연구했고, 10살에 첫 장례를 주관했다. 그리고 유언에 따라 13살, 할아버지이자 75대 당주의 장례식을 주관하며 77대 당주로 임명되었다.
    <em>호두</em>는 사차원스러운 성격으로 유명하다. 칠성 건물 앞 돌사자상 두 개에 이름을 붙여주곤 빗질을 해주는 가 하면, 기묘한 시를 지어 부르기도 한다. 그중 츄츄가는 아이들을 중심으로 유행해지기도 했다. 또한 왕생당 판촉을 위해 1+1 이벤트나 할인 쿠폰을 주기도 한다.(!) <em>백출</em>에게는 라이벌 의식을 느끼고 있다.(!!) 또 요리할 땐 왜인지 확률적으로 '이상한 요리'가 튀어나온다.(!!!)
    <em>호두</em>의 모자 '건곤태괘모'는 75대 당주인 그녀의 할아버지의 것이었다. 당주는 떠나갈 때, 갖고 있던 모든 미련을 불태워야 하지만, 모자만큼은 손녀에게 물려줬다. 할아버지는 풍채가 커 모자도 컸지만, <em>호두</em>는 이걸 밤낮으로 수선해 자기 머리에 맞췄다. 모자에 꽂혀있는 매화가지는 <em>호두</em>가 직접 만든 장식으로, 바람에 말린 후 색을 칠하고 기름에 담가 3일동안 말린다. 만지면 그윽한 향이 난다고 한다. '경계'를 다시 구분짓기 위한 팔문칠문진의 의식을 치루기 전, 여행자에게 주며 주변정리를 했었다.
    <em>호두</em>의 아버지는 왕생당 76대 당주였고, <em>호두</em>와 마찬가지로 어렸을 때부터 의식을 익힐 정도의 천재였다. 하지만 '경계'에 대항하는 의식을 치르던 중 크게 실패하여 희생되었다. 때문에 무망의 언덕이 낮에도 빛이 들지 않는 심령스팟이 되어버렸고, 75대 당주인 할아버지가 뒷수습을 하면서 쇠약해 지게 되었다. <em>호두</em>는 아버지가 실패한 것을 책망하는 듯 하지만, 이렇게 말할 수 있는 건 자신뿐이라며 그래도 아버지라고 마음에 담아두고 있는 것으로 보인다.
    
    왕생당의 시작은 과거 칠문팔문의 진을 수행했던 나비 선인과 

    죽음에 가까운 특성 때문인지, 작은 유령을 데리고 다닌다.
    `,
  profile: {
    en_name: "胡桃, Hutao",
    gender: "여성",
    rareness: "★★★★★",
    element: "불",
    weapon: "장병기",
    constellation: "나비",
    birthday: "07/15",
    union: "리월 - 왕생당",
    actor: [
      "김하루",
      "高橋 李依(타카하시 리에)",
      "Brianna Knickerbocker",
      "陶典",
    ],
    cook: {
      name: "유령 대행군",
      content: `'채식 전복' 제작 시 획득 가능.
      선택한 캐릭터를 부활시키고 HP 최대치의 15%를 회복하고 추가로 550pt 더 회복한다.
      호두의 특제 요리. 머리가 동그란 유령들이 한 곳에 찌부돼있는 모습이 우스꽝스럽고 귀엽다. 하지만 호기심에 못 이겨 그 중 「한 마리」를 먹어버린다면, 아마 오랫동안 후회할 것이다…. 왜냐하면 접시에 담겨 있는 건 미각을 완전히 마비시켜버릴 정도로 충격적인——「정체 모를 식자재」이기 때문이다.`,
    },
    materials: {
      penetration: [materials.manos, "설익은 옥", "예상꽃", materials.guragura],
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
      name: "왕생 비법 창술",
      content: `
        일반 공격 : 창으로 최대 6번 공격한다.
        강공격 : 일정 스태미나를 소모해 올려치기 공격을 가한다.
        낙하 공격 : 공중에서 땅을 내려찍어 경로상의 적을 공격하고 착지 시 범위 피해를 준다.`,
    },
    normal_skill: {
      name: "나비의 서",
      content: `
        소멸하지 않는 화염만이 세상의 불결한 것을 정화할 수 있다.
        호두는 일정량의 HP를 소모해 주변 적을 밀쳐내고 <em>피안접무</em>로 들어간다.
        `,
      sub_content: [
        {
          name: "피안접무",
          content: `
          현재 체력의 30%를 소모하고, 최대 체력에 비례해 공격력이 증가한다. 이때 공격력 증가량은 기초 공격력의 400%를 넘을 수 없다.
          · 기본 공격이 불 원소 피해로 전환된다.(다른 원소 부여 효과로 대체되지 않는다.)
          · <em>호두</em>의 경직 저항력이 상승한다.
          · 강공격이 명중된 적에게 <em>혈매향</em> 효과를 부여한다.
          · 지속시간이 지나거나 <em>호두</em>가 퇴장, 전투불능 되면 효과는 종료된다.
          `,
        },
        {
          name: "혈매향",
          content: `
          강공격이 명중된 적에게 <em>혈매향</em> 표식이 부여된다. <em>혈매향</em>이 붙은 적은 4초에 한 번씩 불 원소 피해를 받는다. 적 하나 당 <em>혈매향</em>은 하나만 존재할 수 있다.
          `,
        },
      ],
      comment:
        "호두가 배운 비법 창술, 그 가르침의 첫 구절은 이러하다 : 「창으로 저승길 문을 열고, 나비를 따라 삼도천을 건너네」",
    },
    dash_skill: {
      name: "",
      content: "",
      comment: "",
    },
    ultimate_skill: {
      name: "평안의 서",
      content: `
        타오르는 유령을 휘둘러 넓은 범위의 불 원소 피해를 준다.
        추가로 명중한 적의 수 만큼 <em>호두</em> 최대 체력에 비례해 체력을 회복한다. (최대 5명) 스킬 명중 시 체력이 50% 미만일 경우, 가하는 피해량과 치유량이 증가한다.
        `,
      sub_content: [
        {
          name: "",
          content: ``,
        },
      ],
      comment:
        "이미 세상을 떠난 존재가 이 세상에 버젓이 남아있다면, 왕생당은 애가 탄다. 화장(火葬)은 호두를 안심시킬 수 있는 가장 좋은 방법이다. 그녀가 초조해할수록 화력은 더욱 거세질 것이다.",
    },
    break_skills: {
      first: {
        name: "모습을 감춘 나비",
        content:
          "<em>나비의 서</em>가 부여하는 <em>피안접무</em> 상태가 끝난 후, <em>호두</em>를 제외한 모든 캐릭터의 치명타 확률이 12% 증가한다. (지속시간 8초)",
      },
      fourth: {
        name: "핏빛 분장",
        content:
          "<em>호두</em>의 체력이 50%이하일 때, 33%의 불 원소 피해 보너스를 획득한다.",
      },
    },
    inherence_skills: [
      {
        name: "다다익선",
        content:
          "요리를 완벽 조리하면 18% 확률로 같은 종류의 「이상한」 품질의 요리를 1개 획득한다.",
      },
    ],
    constellation: [
      {
        name: "진홍의 꽃다발",
        content: `<em>나비의 서</em>가 부여한 <em>피안접무</em> 상태일 때, <em>호두</em>의 강공격은 스태미나를 소모하지 않는다.`,
      },
      {
        name: "비처럼 내리는 불안",
        content: `
        <em>혈매향</em>이 가하는 피해가 증가한다. 피해 증가량은 효과 부여 시, <em>호두</em> 최대 체력의 10%만큼 증가한다.
        <em>평안의 서</em>가 명중할 때 적에게 <em>혈매향</em> 효과를 부여한다.
        `,
      },
      {
        name: "적색 피의 의식",
        content: "<em>나비의 서</em> 스킬 레벨+3 (최대 Lv.15)",
      },
      {
        name: "영원한 안식의 정원",
        content: `
        <em>호두</em>가 부여한 <em>혈매향</em> 효과 상태의 적 처치 시, 주변 파티 내(<em>호두</em> 제외) 캐릭터의 치명타 확률이 12% 증가한다. (지속시간 : 15초)
        `,
      },
      {
        name: "꽃잎 향초의 기도",
        content: "<em>평안의 서</em> 스킬 레벨+3 (최대 Lv.15)",
      },
      {
        name: "나비 잔향",
        content: `
          <em>호두</em>의 체력이 25%이하로 떨어지거나 전투 불능 될 정도의 피해를 입으면 아래 효과를 발동한다.
          · <em>호두</em>는 해당 피해로 전투 불능 상태에 빠지지 않고, 다음 10초 동안 <em>호두</em>가 받는 데미지가 90% 감소한다.
          · 치명타 확률이 100% 증가하고, 경직 저항력이 대폭 상승한다. (<em>호두</em>의 체력이 25% 미만일 때 자동 발동)
          해당 효과는 60초마다 1번 발동한다.
          `,
      },
    ],
  },
  tips: {
    summary: `
      포지션은 메인 딜러 외에는 어렵다. <em>코코미</em>가 처음 나왔을 때 치명타를 터뜨리겠다고 <em>호두</em>의 돌파 특성까지 끌어온 적은 있었다.
      특성 우선순위는 기본 공격 -> 원소 전투 -> 원소 폭발 순이고, 셋 다 찍어주는게 좋다. 노려볼만 한 별자리는 1, 4, 6이다. 특히 첫 번째 별자리는 강공격 스테미나 소모를 없애버려 <em>호두</em>를 비로소 0티어로 만들어 줄 수 있다. 4 번째 별자리는 관점에 따라 중요하다 생각하지 않을 수도 있지만, 6 번째 별자리는 경직 면역+치명타 확률 100%+받는 데미지 90% 감소로 <em>호두</em>를 '버서커'로 만들 수 있다.
      장병기 특성상 강공격은 도약거리가 꽤 긴데, 별자리 1돌파가 없다면 '점프'로 짧게 끊으면서 최대한 많이 쳐야한다. 1돌파가 됐다면 대쉬로 끊어 쳐도 된다.
      `,
    weapons: [
      {
        name: "호마의 지팡이",
        content: `치명타 피해+체력 증가+체력 비례 공격력 증가+체력이 절반 이하일 때 추가 공격력 보너스까지 <em>호두</em>에게 있어 버려지는 효과가 없어 전용무기가 됐다.`,
      },
      {
        name: "화박연",
        content: `추가 능력치가 치명타 확률이라 세팅이 쉬워지고, 추가 효과의 피해 증가량이 꽤나 크다. 다만, <em>호마의 지팡이</em>가 있다면 우선순위는 밀린다.`,
      },
      {
        name: "용학살창",
        content:
          "<em>호두</em>의 4성 전용무기. 추가 능력치가 원소 마스터리이고, 추가 효과로 물·불 원소가 묻은 적에게 가하는 피해가 증가해 증발을 곁들이면 상당히 강력해진다. 다만, 치명타 관련 세팅이 어려워진다는 단점이 있고, 4성 무기라 재련을 해주어야 한다는 단점이 있다.",
      },
      {
        name: "결투의 창",
        content:
          "추가 능력치가 치명타 확률이라 세팅이 쉬워지고, 추가 효과의 공격력+방어력 버프도 나쁘지 않다. 다만 <em>용학살창</em>으로 치명타 세팅이 된다면 밀리게 되고, 기행으로 '구매'해야해 재련이 어렵다.",
      },
      {
        name: "흑암창",
        content:
          "추가 능력치가 치명타 피해량이라 치명타 확률만 신경쓰면 되지만, 스타라이트로 '구매'해야해 상당히 비싼 편이다.",
      },
      {
        name: "천암장창",
        content:
          "추가 능력치가 공격력이고, 추가 효과로 공격력과 치명타 확률을 올려줘 나쁘지는 않지만, 버프 수준이 그렇게 높지는 않다.",
      },
      {
        name: "백술창",
        content: "3성 메인 딜러 무기. 변변한 무기가 없을 때 쓸만하다.",
      },
    ],
    artifacts: {
      recommand: {
        watch: "HP%",
        grail: "불 원소 피해량",
        crown: "치명타 확률, 치명타 피해",
        sub_effect:
          "HP%, 치명타 피해, 치명타 확률, 원소 충전 효율, 원소 마스터리",
      },
      artifact_list: [
        {
          name: ["불타오르는 화염의 마녀"],
          content: `
          거의 모든 불 메인 딜러에게 좋은 세팅으로, <em>호두</em>에게도 좋다.
          종결을 볼 수 있지만, 비경의 특성상 <em>현인</em> 셋을 쓸 계획이 없다면, 세팅 난이도가 상당히 높아진다. 더욱 아쉬운 점은 <em>마녀</em> 4셋의 효과를 1번 밖에 받지 못한다는 것이다.
          `,
        },
        {
          name: ["추억의 시메나와"],
          content: `
          2셋 효과로 공격력을 챙길 수 있고, 4셋 효과까지 받으면 <em>마녀</em> 4셋 못지않게 강해진다. 그리고 전체적으로 활용도가 높은 <em>절연</em> 파밍 하면서 모을 수 있기 때문에 <em>마녀</em>보단 세팅 난이도가 낮아진다.
          다만, 원소 원소 폭발을 다소 희생해야 한다는 단점이 있다. <em>호두</em>의 특성상 체력이 낮은 상태일 때가 많은데, 원소 원소 폭발을 생존기로 활용할 수 있기 때문에 이러한 점이 단점이 된다.
          `,
        },
        {
          name: ["대지를 유랑하는 악단", "불타오르는 화염의 마녀"],
          content: `
          <em>마녀</em> 4셋을 가기 전에 거쳐가는 과정에서 주로 사용 된다.
          2+2 셋이고, <em>악단</em> 셋은 얻기 쉬워 세팅 난이도가 낮다. <em>악단</em> 대신 <em>천암</em>이 있으면 사용할 수 있다.
          `,
        },
      ],
    },
    partners: [
      {
        name: ["Xingqiu", "Yelan", "Furina"],
        content: `
        여느 불딜러에게 좋은 파트너. 원소 폭발로 물을 뿌려주는 서브딜러 역할을 한다.
        <em>행추</em>는 원소 전투 · 원소 폭발 모두 <em>우령검</em>을 만들어 경직 저항력을 올려주고 받는 피해를 감소시켜 준다. <em>피안 접무</em>에도 경직 저항력이 있어, 웬만하면 넘어지지 않는다.
        <em>야란</em>은 원소 폭발 사용 후 평타 대미지 버프를 줘, 안정성은 떨어지더라도 DPS는 강하다.
        따로 한명씩 쓰기도 하지만, 둘을 같이 쓰는 <em>호야행종</em> 조합이 유명하다.
        <em>푸리나</em>는 힐러와 서브 딜러를 번갈아가며 수행할 수 있는데, 여기서는 힐러로 운영되며 <em>야란</em>나 <em>행추</em>이 함께 하게 된다.
        `,
      },
      {
        name: ["Zhongli", "Thoma"],
        content: `
        강력한 보호막으로 불안정한 <em>호두</em>의 생존력을 보조해 준다.
        <em>종려</em>는 강력한 보호막과 원소 피해 저항 디버프를 갖춰 조합을 타지 않고 보호막이 필요한 곳이라면 어디든 들어갈 수 있다.
        <em>토마</em>는 <em>종려</em> 못지않게 강한 보호막을 가졌지만, 다른 부가 효과가 없다. 다만 불 공명을 받을 수 있는 유일한 보호막 캐릭터라 좋은 대안이 된다.
        `,
      },
      {
        name: ["Kaedehara Kazuha"],
        content: `
        거의 모든 딜러들에게 좋은 몹몰이 파트너. 확산을 일으켜 원소 피해 보너스를 얻을 수 있다. 다만, <em>호두</em>로 불을 확산하기는 어려워 불 캐릭터를 한 명 넣어줘야 한다.
        `,
      },
      {
        name: ["Bennett"],
        content: `
        다른 불 딜러와 달리 <em>호두</em>는 공격력 계수를 사용하지 않고 힐이 필요없어 <em>베넷</em>과의 궁합이 좋지 않다.
        `,
      },
      {
        name: ["Albedo", "Chiori", "Kachina"],
        content: `
        <em>알베도</em>는 <em>종려</em>를 쓸 때 바위 공명을 위해 함께 쓰인다. <em>야란</em>이 나오면서 쓰이진 않고, <em>치오리</em>나 <em>잿더미</em>를 착용한 <em>카치나</em>도 고려할 수 있다.
        `,
      },
    ],
  },
};

export default hutao_detail;
