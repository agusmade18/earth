import { MdHomeFilled, MdPermIdentity, MdOtherHouses } from "react-icons/md";
const Menus = [
  {
    name: "ホーム",
    link: "/",
    icon: <MdHomeFilled />,
  },
  {
    name: "会社概要",
    link: "/company",
    icon: <MdHomeFilled />,
  },
  {
    name: "サービス紹介",
    link: "/service",
    icon: <MdPermIdentity />,
  },
  {
    name: "実績紹介",
    link: "/actual-introduction",
    icon: <MdOtherHouses />,
  },
  {
    name: "採用情報",
    link: "/recruitment-information",
    icon: <MdOtherHouses />,
  },
  {
    name: "協力会社募集",
    link: "/recruitment-partner",
    icon: <MdOtherHouses />,
  },
  {
    name: "Q＆A",
    link: "/QA",
    icon: <MdOtherHouses />,
  },
  {
    name: "お問い合わせ",
    link: "/inquiry",
    icon: <MdOtherHouses />,
  },
];

export { Menus };
