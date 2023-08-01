import * as materials from "./materials";

const characters_detail = [
  {
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
      actor: ["최승훈", "小野賢章(오노 켄쇼)", "Sean Chiplock", "马洋"],
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
          "대검을 휘둘러 불 원소 피해를 준다.\n연속으로 3회까지 사용 가능하며, 일정 시간 내에 추가로 사용하지 않으면 쿨타임이 시작된다.\n각각 다이루크가 주관하고 있는 정의, 용기, 그리고 책임감을 상징한다.",
      },
      ultimate_skill: {
        name: "여명",
        content:
          "뜨거운 화염의 힘을 폭발하여 주변의 적을 밀어내고 불 원소 피해를 준다.\n그리고 뜨거운 화염을 응집시킨 후 검을 휘둘러 전방을 향해 나아가는 불새를 소환해 경로상의 적에게 대량의 불 원소 피해를 주고, 불새가 폭발하여 대량의 불 원소 피해를 준다.\n추가로 무기에 응집된 뜨거운 화염은 다이루크의 기본 공격에 불 원소 피해를 부여한다.\n어둠속을 걷는 건 빛을 가져오기 위함이다. 저 멀리 고요한 밤에 타오르는 불빛은 동틀 무렵의 전조이다.",
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
      inherence_skills: [{
        name: "새벽의 전통",
        content: "양손검 무기 단조 시 소모한 광석을 15% 반환한다.",
      }],
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
  },
];

export default characters_detail;
