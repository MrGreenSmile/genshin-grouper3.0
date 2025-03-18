import * as materials from "./materials";

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
    element: "번개",
    weapon: "한손검",
    constellation: "금자정수",
    birthday: "11/20",
    union: "리월 - 칠성",
    actor: ["이보희", "喜多村 英梨(키타무라 에리)", "Kayli Mills", "谢莹"],
    cook: {
      name: "절체절명 생선구이",
      content:
        "'흘호어 구이' 제작 시 획득 가능.\n선택한 캐릭터 HP 최대치의 16%를 회복하고 추가로 HP를 1350pt 회복한다.\n각청의 특제 요리. 불에 익히지 않고 정밀한 번개 원소 조작으로 생선 살을 익힌 요리다. 한입 베어 물면 바삭한 생선 껍질이 고소한 생선 살을 감싸줄 정도로 적당히 잘 익었다. 황야를 떠돌며 이런 기술로 살아가는 걸까? 도통 종 잡을 수가 없다.",
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
        "일반 공격 : 창으로 최대 6번 공격한다.\n강공격 : 일정 스태미나를 소모해 올려치기 공격을 가한다.\n공중에서 땅을 내려찍어 경로상의 적을 공격하고 착지 시 범위 피해를 준다. <em>소</em>는 낙하 공격 시, 추락 피해를 입지 않는다.",
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

export default hutao_detail;
