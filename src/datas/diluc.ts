import * as materials from "./materials";

const diluc_detail = {
  name: "다이루크",
  summary:
    "대검과 불 원소를 사용하는 메인 딜러.\n몬드 최대의 양조업체 '다운 와이너리'의 주인이자, 몬드의 밤을 수호하는 '다크 히어로'로 활동한다. 원래 기사단 소속이었지만, 모종의 이유로 자진 탈퇴하고 독자의 길을 걷고 있다. 특히 심연 교단과 적대 관계에 있다.\n상시 기원을 통해 얻을 수 있는데, 상시 자체가 픽업을 방해하는 것으로 이미지가 안좋지만, 다이루크는 그중에서 '대검', '불', '장신 남캐'라는 장점을 모두 가지고 있어 취향만 맞는다면 모험을 편하게 만들어준다.\n출시된지 또한 오래되어 매커니즘이나 능력치 자체가 새로 나온 캐릭터들에게 밀리는 것은 어쩔 수 없지만, 불 메인 딜러로서는 여전히 쓸만하다.",
  profile: {
    gender: "남성",
    rareness: "★★★★★",
    element: "불",
    weapon: "양손검",
    constellation: "밤올빼미",
    birthday: "4/30",
    union: "몬드 - 다운 와이너리",
    actor: ["최승훈", "小野 賢章(오노 켄쇼)", "Sean Chiplock", "马洋"],
    cook: {
      name: "몬드의 과거",
      content:
        "'높이 쌓기' 제작 시 획득 가능.\n파티 내 모든 캐릭터의 치명타 확률이 20%, 치명타 대미지가 20% 증가한다 (지속시간 : 300초). 다인 모드 시, 자신의 캐릭터에게만 적용.\n다이루크의 특제요리. 우선 눈으로 정교하고 섬세한 플레이팅을 음미한 후, 입에 넣으면 부드러운 고기가 입에서 살살 녹는다. 흠.. 어르신이 이런 솜씨가 있을 줄을 몰랐네?",
    },
    materials: {
      penetration: [
        materials.manos,
        "꺼지지 않는 불씨",
        "등불꽃",
        materials.fatui_medal,
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
      name: "단련의 검",
      content:
        "일반 공격 : 검으로 4회 공격한다.\n강공격 : 스태미너를 지속적으로 소모해 빠른 속도의 연속 공격을 발동한다. 종료 시 추가로 크게 한 번 휘두른다.",
    },
    normal_skill: {
      name: "역날의 화염",
      content:
        "대검을 휘둘러 불 원소 피해를 준다.\n연속으로 3회까지 사용 가능하며, 일정 시간 내에 추가로 사용하지 않으면 쿨타임이 시작된다.",
      sub_content: [],
      comment:
        "각각 다이루크가 주관하고 있는 정의, 용기, 그리고 책임감을 상징한다.",
    },
    dash_skill: {
      name: "",
      content: "",
      comment: "",
    },
    ultimate_skill: {
      name: "여명",
      content:
        "뜨거운 화염의 힘을 폭발하여 주변의 적을 밀어내고 불 원소 피해를 준다.\n그리고 뜨거운 화염을 응집시킨 후 검을 휘둘러 전방을 향해 나아가는 불새를 소환해 경로상의 적에게 대량의 불 원소 피해를 주고, 불새가 폭발하여 대량의 불 원소 피해를 준다.\n추가로 무기에 응집된 뜨거운 화염은 다이루크의 기본 공격에 불 원소 피해를 부여한다.",
      sub_content: [],
      comment:
        "어둠속을 걷는 건 빛을 가져오기 위함이다. 저 멀리 고요한 밤에 타오르는 불빛은 동틀 무렵의 전조이다.",
    },
    break_skills: {
      first: {
        name: "끝임없는 정진",
        content:
          "다이루크의 강공격 스태미너 소모량이 50% 감소하고, 최대 지속시간이 3초 증가한다.",
      },
      fourth: {
        name: "융해의 날개",
        content:
          "'여명'이 제공하는 불 원소 부여 지속시간이 4초 증가한다. 추가로 효과가 지속되는 동안 다이루크는 불 원소 피해 보너스를 20% 획득한다.",
      },
    },
    inherence_skills: [
      {
        name: "새벽의 전통",
        content: "양손검 무기 단조 시 소모한 광석을 15% 반환한다.",
      },
    ],
    constellation: [
      {
        name: "죄악 징벌",
        content:
          "HP이 50%를 초과하는 적에게 다이루크가 가하는 피해가 15% 증가한다.",
      },
      {
        name: "뜨거운 잿더미",
        content:
          "다이루크가 피격 시 공격력이 10%, 공격 속도가 5% 증가한다. (지속시간 : 10초)\n해당 효과는 최대 3회 중첩되며, 1.5초마다 1회 반복된다.",
      },
      {
        name: "강철의 불꽃",
        content: "'역날의 화염' 스킬 레벨+3 (최대 Lv.15)",
      },
      {
        name: "유화의 화상",
        content:
          "'역날의 화염'을 차례대로 방출하면 가하는 피해가 대폭 증가한다.\n'역날의 화염' 발동 후 2초가 지나면 다음 '역날의 화염' 피해가 40% 증가. (지속시간 : 2초)",
      },
      {
        name: "여명을 알리는 불새",
        content: "'여명' 스킬 레벨+3 (최대 Lv.15)",
      },
      {
        name: "어둠을 가르는 화염의 검",
        content:
          "'역날의 화염' 발동 후 6초 동안 일반 공격 2회의 공격 속도와 가하는 피해가 각각 30% 씩 증가한다. 또한 '역날의 화염'은 일반 공격의 연격을 끊지 않는다.",
      },
    ],
  },
  tips: {
    summary:
      "포지션은 메인 딜러.\n특성은 결국 3가지 모두 찍어야 해 순서가 따로 없지만 기본 공격과 전투 스킬을 먼저 하는 것을 추천할 수 있다.\n별자리는 3, 4, 6번째가 핵심. 3번 별자리는 주 공격수단인 전투 스킬 레벨을 올려주고, 4번 별자리는 마찬가지로 전투 스킬의 피해량을 증가시켜준다. 4번 별자리의 효과는 2번째 타격부터 적용된다.\n6번 별자리는 전투 스킬을 사용한 후 평타 2회 동안 공속과 피해량을 증가시켜주는 데, 중요한 것은 일반 공격의 연격을 끊지 않아 전투 스킬과 평타를 섞어 써도 강한 평타의 막타도 섞어줄 수 있어 dps를 올리는 효과를 볼 수 있다.\n2번 별자리는 효과가 크지만, '피격'이라는 조건이 필요해 최대 스택을 유지하는 것이 까다롭고, 맞는다는 것 자체로 부작용이 많아 스택에 집착하지 않는 것이 좋다.\n콤보는 원소 폭발-평e평e평e, 6돌이면 원소 폭발-평e평평e평평e. 번외로 원소 폭발 사용후 평타에 부여되는 불 원소는 캐릭터를 바꿔도 없어지지 않는다. (지속시간은 흐른다.)",
    weapons: [
      {
        name: "늑대의 말로",
        content:
          "전용 무기는 아니지만 종결급 무기. 들고 다니기도 잘 어울린다.\n1재련으로도 무기 효과의 버프 효과가 크다. 다만 효과 지속시간은 12초, 쿨타임은 18초로 현타가 존재한다.",
      },
      {
        name: "천공의 긍지",
        content:
          "원소 폭발 사용 후 평타에 '진공 칼날'이 추가되어 가하는 피해가 소폭 상승한다. 이는 다이루크의 6번 별자리와 시너지가 있다.\n다만, 추가 능력치가 원소 충전 효율이라 원소 에너지가 높지 않은 다이루크에겐 다소 아쉽고, 그로인해 치명타 세팅 난이도가 높아진다.",
      },
      {
        name: "무공의 검",
        content:
          "'늑대의 말로'와 스탯이 같고, 공격이 명중할 때마다 공격력 버프를 준다. 이 버프는 보호막이 있을 때 강화되며, 보호막을 유지할 수만 있다면 dps면에선 '늑대의 말로' 못지 않는다.\n여타 4성 무기들에 비하면 좋기는 하지만, 보호막이 없다면 많이 애매해진다.",
      },
      {
        name: "고화 프로토타입",
        content:
          "무난하게 균형잡힌 4성 단조 무기.\n추가 능력치가 물리 피해라 아쉽지만, 무소과금 유저나 5성 무기가 없다면 가성비 면에서는 가장 좋다고 볼 수 있다.",
      },
      {
        name: "이무기 검",
        content:
          "스탯이 높지는 않지만, 추가 능력치가 치명타 확률이라 세팅에 도움을 준다.\n무기 효과는 가하는 피해와 받는 피해가 함께 증가하는, 일명 '유리 대포' 효과로, 풀스택 상태에서 5성 무기 못지 않는 피해량을 보여준다.\n다만 맞는 순간 스택을 잃어 적의 공격을 모두 피할 자신이 없다면 보호막이 반필수이며, 기원을 구매해야 얻을 수 있어 재련이 쉽지 않다.",
      },
      {
        name: "흑암참도",
        content:
          "다이루크의 성장 스탯은 치명타 확률로, 추가 능력치와 시너지가 좋다.\n5성 무기 못지 않는 피해량을 자랑하지만, 스타라이트로 구매해야 얻을 수 있어 상당히 비싸다.",
      },
      {
        name: "진주를 문 해황",
        content:
          "축월절 이벤트로 얻을 수 있는 무기로 지금은 얻을 수 없다.\n추가 능력치가 공격력이고, 무기 효과는 원소 폭발을 사용하면 참치를 날려 추가 타격을 줘 요긴하게 쓰일 수 있다. 이때 참치 피해는 한 명에게만 들어간다.",
      },
      {
        name: "천암고검",
        content:
          "추가 능력치가 공격력이고, 추가 효과로 공격력+치명타 확률 버프를 받을 수 있어 요긴하다.\n이때 이 버프는 조합에 리월 캐릭터가 많을 수록 증가해 제대로 효과를 보려면 조합이 고정되게 된다.",
      },
      {
        name: "훌륭한 대화수단",
        content:
          "초반에 변변찮은 무기가 없을 때 쓸만한 3성 무기.\n나중에 '고화 프로토타입'으로 갈아타게 된다.",
      },
    ],
    artifacts: {
      recommand: {
        watch: "공격력%",
        grail: "불 원소 피해",
        crown: "치명타 확률/치명타 피해",
        sub_effect: "치명타 확률/치명타 피해/공격력%/원소 마스터리",
      },
      artifact_list: [
        {
          name: ["불타오르는 화염의 마녀"],
          content:
            "거의 모든 불 메인 딜러들에게 좋은 세팅.\n4셋 효과로 원소 스킬 발동 후 불 원소 피해 증가량이 증가하는데, 원소 폭발을 사용한 후 원소 전환된 평타와 전투 스킬 콤보로 풀스택을 어렵지 않게 쌓을 수 있어 높은 잠재력을 지닌다.",
        },
        {
          name: ["검투사의 피날레", "불타오르는 화염의 마녀"],
          content:
            "무난하게 맞출 수 있는 세팅. 검투사 대신 '시메나와'를 쓸 수 있다.\n불 원소 피해와 공격력 버프를 받을 수 있어 무난하고, 마녀 4셋을 다 모으기 전까지 쓰면된다.",
        },
      ],
    },
    partners: [
      {
        name: ["Xingqiu", "Yelan"],
        content:
          "여느 불 딜러에게 좋은 서브 딜러. 원소 폭발로 물 보조 공격 평타에 섞어준다.\n'행추'의 경우 '우령검'을 둘러 피격 대미지를 감소시키고 경직 저항을 증가시켜 안정성을 올려주고, '야란'의 경우 지속시간 동안 증가하는 가하는 피해량 버프를 준다.",
      },
      {
        name: ["Kaedehara Kazuha", "Sucrose"],
        content:
          "거의 모든 딜러들에게 좋은 파트너.\n확산을 통한 원소 확산과 적을 모아주는 역할을 동시에 수행한다.\n'카즈하'의 경우 확산 발생 시 확산된 원소의 피해량 증가 버프를 주고, '설탕'의 경우 원소 마스터리 버프를 받을 수 있는데, '카즈하'의 하위호환으로 여겨진다.",
      },
      {
        name: ["Zhongli"],
        content:
          "강력한 보호막과 동시에 내성 감소 디버프를 가진 서포터. 특히 보호막 관련 무기가 있다면 좋은 시너지를 갖는다.",
      },
      {
        name: ["Bennett"],
        content:
          "힐과 공격력 버프를 동시에 주는 파트너로, '다이루크'와는 불 공명까지 받을 수 있다.\n특히 '베넷'의 6번 별자리를 얻을 경우, 불 원소 피해 보너스 15%를 추가로 받을 수 있다.",
      },
      {
        name: ["Albedo"],
        content:
          "원소 폭발 발동 시 원소 마스터리 버프를 받을 수 있어 두루 무난한 파트너. 다만, 최근엔 다른 파트너를 더 많이 사용한다.",
      },
    ],
  },
};

export default diluc_detail;
