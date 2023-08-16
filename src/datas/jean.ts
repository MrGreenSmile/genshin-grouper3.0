import * as materials from "./materials";

const jean_detail = {
  name: "진",
  summary:
    "한손검과 바람 원소를 사용하는 서포터 겸 힐러.\n몬드의 정부이자 군대 역할을 하는 '페보니우스 기사단'의 부단장이다. 현재는 단장 '바르카'의 장거리 원정으로 자리를 비워, 단장 대행 역을 하고 있다.\n하는 업무는 주민들의 민원 해결이지만, 사실상 심부름이나 다름이 없었다. 그럼에도 '진'은 사명감이 너무 강해 자신을 혹사시킬 정도로 최선을 다한다. 이때문에 측근들은 어떻게든 쉬게 하려고 벼르고 있다.\n추가로, 몬드의 아이돌이자 부재인 '바바라'의 친언니인데, 어렸을 때 이혼한 부모로 인해 헤어지고 최근에 다시 만나 아직은 어색하다.\n'다이루크'와는 과거 선후배 사이로, 다이루크가 탈퇴한 지금도 다이루크를 선배라고 부른다.\n상시로 얻을 수 있지만, 상시 자체가 픽업을 방해하고 기간에 상관없이 얻을 수 있어 이미지가 좋지 않다.\n그중에서도 '진'은 유일한 바람 힐러이자, 힐량이 좋기도 하고 별자리 돌파 시 평타 버프를 받을 수 있어 바람 서포터로도 쓸 수 있다. 그리고 힐이 공격력 기반이라 서브딜러 역할도 어느정도는 가능하다.\n다만 최근에 가성비 좋은 4성 힐러나 하이브리드 힐러가 많이 추가되면서 입지가 많이 줄었다.\n중국 정부의 검열로 인 게임 컷신에서 옷이 바뀌었고, 중국에선 아예 옷이 수정되었지만 이외 지역(서버)에선 코스튬으로 배포되었다.",
  profile: {
    gender: "여성",
    rareness: "★★★★★",
    element: "바람",
    weapon: "한손검",
    constellation: "새끼사자",
    birthday: "3/14",
    union: "몬드 - 페보니우스 기사단",
    actor: ["안영미", "斎藤千和(사이토 치와)", "Stephanie Southerland", "林簌"],
    cook: {
      name: "정신번쩍 피자",
      content:
        "'버섯피자' 제작 시 획득 가능.\n선택한 캐릭터의 HP를 최대치의 34%를 즉시 회복시키고, 30초동안 5초마다 HP를 980pt씩 회복시킨다.\n진의 특제요리. 예술품같은 씬 피자다. 한조각만 먹어도 정신이 번쩍 든다. 이게 바로 몇날 며칠 동안 야근할 수 있게 해준 비밀 병기인가?",
    },
    materials: {
      penetration: [
        materials.turquoises,
        "폭풍의 씨앗",
        "민들레 씨앗",
        materials.chuchu_mask,
      ],
      skills: [
        materials.conflicts,
        "동풍의 깃털",
        materials.fatui_medal,
        "지식의 왕관",
      ],
    },
  },
  skills: {
    normal_attack: {
      name: "페보니우스 검술",
      content:
        "일반 공격 : 검으로 5회 공격한다.\n강공격 : 일정 스태미너를 소모해 바람 원소의 힘이 깃든 올려치기를 한다. 날아간 적은 짧은 시간 동안 천천히 추락한다.",
    },
    normal_skill: {
      name: "풍압검",
      content:
        "형체가 없는 바람의 힘을 검에 모아 작은 폭풍을 만들어낸 후 적을 향해 날려 대량의 바람 원소 피해를 준다.",
      sub_content: [
        {
          name: "홀드",
          content:
            "지속해서 스태미너를 소모해 주변의 적과 물체를 앞으로 끌어당긴다. 방향을 조절할 수 있고, 시전하는 동안 이동할 수 없다.",
        },
      ],
      comment:
        "지키고자 하는 마음뿐인 진과 동행하는 것은 모든 위험을 동료의 곁에서 몰아내는 수호의 바람이다.",
    },
    ultimate_skill: {
      name: "민들레 바람",
      content:
        "바람의 가호를 소환해 천풍이 세차게 부는 '민들레 영역'을 만들어내 적을 밀어내고, 주변의 적에게 바람 원소 피해를 준다.\n또한 파티 내 모든 캐릭터의 HP를 대량 회복하며, 회복량은 진의 공격력에 영향을 받는다.",
      sub_content: [
        {
          name: "민들레 영역",
          content:
            "· 영역 안의 캐릭터의 HP를 지속해서 회복한다.\n· 영역 안의 캐릭터는 지속해서 바람 원소의 영향을 받는다.\n· 영역에 드나드는 적에게 바람 원소 피해를 준다.",
        },
      ],
      comment:
        "바람의 은총은 대지에 흩뿌려진 민들레와 같다. 이것이 바로 진의 수호의 근원과 마음이다.",
    },
    break_skills: {
      first: {
        name: "바람과 함께",
        content:
          "진의 일반 공격 명중 시 50% 확률로 파티 내 모든 캐릭터의 HP를 진의 공격력의 15%만큼 회복시킨다.",
      },
      fourth: {
        name: "바람의 인도",
        content: "'민들레 바람' 사용 후 원소 에너지를 20% 회복한다.",
      },
    },
    inherence_skills: [
      {
        name: "인도의 바람",
        content:
          "회복류 요리를 완벽 조리하면 12% 확률로 요리량의 2배를 획득한다.",
      },
    ],
    constellation: [
      {
        name: "검척에 흐르는 폭풍",
        content:
          "'풍압검'을 1초 이상 홀드하면, 끌어당기는 속도가 증가하고 가하는 피해가 40% 증가한다.",
      },
      {
        name: "모든 이를 수호하는 방패",
        content:
          "진이 원소 구슬/입자 획득 시, 파티 내 모든 캐릭터의 공격속도와 이동속도가 15% 증가한다. (지속시간 : 15초)",
      },
      {
        name: "서풍이 스칠 무렵",
        content: "'민들레 바람' 스킬 레벨+3 (최대 Lv.15)",
      },
      {
        name: "민들레 국토",
        content:
          "'민들레 바람' 영역 내에서 모든 적의 바람 원소 내성이 40% 감소한다.",
      },
      {
        name: "삽시간의 열풍",
        content: "'풍압검' 스킬 레벨+3 (최대 Lv.15)",
      },
      {
        name: "만민을 보살피는 사자의 이빨",
        content:
          "'민들레 바람' 영역 내에서 캐릭터가 받는 피해가 35% 감소한다. 영역을 벗어난 후, 해당 효과는 3번 피격 또는 10초 후 사라진다.",
      },
    ],
  },
  tips: {
    summary:
      "주 포지션은 힐러. 특히 바람 메인 딜러와 궁합이 좋다.\n특성은 원소 폭발 -> 원소 전투 -> 기본 공격 순이 추천되며, 기본 공격은 안 해줘도 좋다.\n핵심 별자리는 2번이며, 힐러로서는 3번, 서브 딜러로서는 4번 별자리가 좋다. 2번 별자리는 평타를 주로 쓰는 여느 딜러들과 조합이 좋고, 4번은 특히 '소'와 함께 쓰일 때 좋다. 추가로 6번 별자리는 중요하진 않지만 소소하게 생존력을 올려준다.\n전투 스킬인 '풍압검'은 기본적으로 적을 날려버리는 기능을 하는 데, 심연 메이지의 보호막 회복을 방해할 수도 있고, 낙하 대미지도 줄 수 있다. 또 홀드로는 적을 끌어모으고 끝나면 날려버리는 데, 이때 '엠버'의 '토끼 백작', '향릉'의 '누룽지' 등의 소환물도 끌어당길 수 있다. 다만 홀드가 끝날 때 적을 흩트려버린다는 단점이 있는데, 홀드중에 점프나 대시로 적들을 모아놓고 끊을 수 있다.",
    weapons: [
      {
        name: "매의 검",
        content:
          "한손검 중 가장 기초 공격력이 높고, 추가 효과로 공격력 버프를 받을 수 있다.\n힐과 딜 모두 공격력에 비례하는 '진'에게 좋은 무기이지만, 추가 능력치는 물리 피해 보너스라 평타를 섞어치는 편이 아니라면 100% 활용하지는 못하게 된다.",
      },
      {
        name: "천공의 검",
        content:
          "기초 공격력도 높은 편이고, 추가 능력치가 원소 충전 효율이라 잘 어울린다.\n다만, 추가 효과는 평타에 적용되어 평타를 섞어치는 편이 아니라면 추가 효과는 없는 것과 다름이 없다.",
      },
      {
        name: "반암결록",
        content:
          "무난한 스탯과 추가 능력치로 두루 써먹기 좋은 무기. 서브 딜러에 가까운 세팅을 하게 되는 '진'에게도 잘 어울린다. 또한 추가 효과로 HP에 비례하는 공격력 버프를 받을 수 있다.",
      },
      {
        name: "부식의 검",
        content:
          "'백악과 흑룡' 이벤트에서 얻을 수 있는 무기. (현재는 얻을 수 없다.)\n기초 공격력이 높은 편이고, 추가 능력치가 원소 충전 효율인데다, 추가 효과로 '풍압검'의 피해량도 올릴 수 있어 '진'에게도 잘 어울린다.\n평타를 섞어치지 않는 편이라면 위의 언급된 무기보다 쓰기 편해진다.",
      },
      {
        name: "페보니우스 검",
        content:
          "서포터들에게 두루 좋은 무기. 원소 충전 효율에 특화되어 있다.\n특히 '진'의 2번 별자리가 있다면, 추가 효과로 떨어진 원소 입자를 얻어 공속 버프도 줄 수 있어 시너지가 좋다. (보기에도 좋다.)",
      },
      {
        name: "아메노마 카게우치가타나",
        content:
          "추가 능력치가 공격력이고, 추가 효과가 원소 충전에 도움을 줘 '진'에게 잘 어울린다.",
      },
      {
        name: "제례검",
        content:
          "원소 스킬이 맞을 때 확률적으로 쿨타임을 초기화해줘 서포터들에게 두루 좋다.\n원소 스킬을 다시 쓸 수 있게 되어 원소 입자를 많이 얻을 수 있어, '진'의 2번 별자리와 시너지가 있다.\n다만, '진'의 원소 스킬은 쿨타임이 짧고 타수가 적어 추가 효과가 터지지 않을 확률이 높다.",
      },
      {
        name: "피리검",
        content:
          "추가 능력치로 공격력을 얻을 수 있고, 추가 효과로 평타에 추가 피해를 더해줘, 평타를 섞어쓴다면 쓸만하다.",
      },
      {
        name: "흘호 생선회칼",
        content:
          "추가 능력치로 공격력을 얻을 수 있는 무기.\n탈 3성무기로 여겨지며, 한손검을 사용하는 캐릭터가 꽤 많기도 해 초반에 쓰기 좋은 무기이다. 다만, 리월 지역 보물상자에서만 얻을 수 있다.",
      },
    ],
    artifacts: {
      recommand: {
        watch: "공격력%/원소 충전 효율",
        grail: "공격력%/바람 원소 피해",
        crown: "치명타 확률/치명타 피해/치유 보너스",
        sub_effect: "공격력%/원소 충전 효율/치명타 확률/치명타 피해",
      },
      artifact_list: [
        {
          name: ["청록색 그림자"],
          content:
            "4셋 효과를 통해 확산된 원소 내성을 감소시킬 수 있어 바람 서포터/서브 딜러에게 두루 매우 좋다.\n'진'에게는 전투 스킬의 쿨타임이 짧아 확산을 자주 일으킬 수 있다. 다만 파티 내 바람 캐릭터가 '진' 혼자 일 때는 좋은 세팅이지만, '설탕', '카즈하' 등의 서포터와 함께 쓴다면 다른 세팅을 갖는 것이 좋다.",
        },
        {
          name: ["옛 왕실의 의식"],
          content:
            "원소 폭발이 핵심인 서포터나 힐러에게 주기 좋은 세팅. 원소 폭발 사용 후 파티 전체에 공격력 버프를 걸어준다.\n'진'을 힐러로 운영할 때 잘 어울리는데, 특히 파티 내 다른 캐릭터다 '청록색 그림자'를 쓰는 캐릭터가 있다면 쓰기 좋다.\n다만, 마찬가지로 파티내 다른 캐릭터가 '왕실' 4셋을 사용중이라면, '청록색 그림자'나 다른 세팅을 가는 것이 좋다.",
        },
        {
          name: ["사랑받는 소녀"],
          content:
            "힐량을 높일 수 있는 세팅.\n힐이 부족하다고 생각되거나 힐 위주로 운영한다면 괜찮은 세팅이다. 만약 딜을 좀더 높이고 싶다면 여기에 검투사 2셋을 섞을 수 있다.",
        },
        {
          name: ["검투사의 피날레", "청록색 그림자"],
          content:
            "딜 위주의 세팅. '검투사' 대신 '시메나와'를 사용할 수 있다.\n공격력 버프로 힐까지 챙길 수 있지만, 일정 수준 이상 도달하게 되면 '청록색 그림자'나 '옛 왕실의 의식'으로 넘어가 역할을 특화시켜주는 것이 좋다.",
        },
        {
          name: ["교관"],
          content:
            "5성 성유물을 갖추기 전까지 쓰기 좋은 세팅.\n'청록색' 4셋과 비슷한 메커니즘으로, 원소 반응(확산) 후 파티 전원에게 원소 마스터리 버프를 준다.",
        },
        {
          name: ["유배자"],
          content:
            "5성 성유물을 갖추기 전까지 쓰기 좋은 세팅.\n원소 충전 효율이 부족할 때 쓰면 좋다.",
        },
      ],
    },
    partners: [
      {
        name: ["Xiao"],
        content:
          "바람 공명+바람 배터리로 조합이 좋다. 특히 '진'의 4번 별자리가 '소'에게 큰 도움이 된다.",
      },
    ],
  },
};

export default jean_detail;
