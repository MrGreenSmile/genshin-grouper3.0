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
  },
];

export default characters_detail;
