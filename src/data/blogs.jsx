import {
  SiCodechef,
  SiCodeforces,
  SiMedium,
  SiQuora,
  SiReddit,
  SiStackoverflow,
} from "react-icons/si";

const style = { width: "16%", height: "auto", margin: 25, opacity: 0.8 };
export default [
  {
    site: "Medium",
    logo: <SiMedium style={style} />,
    url: "",
  },
  {
    site: "Quora",
    logo: <SiQuora style={style} />,
    url: "",
  },
  {
    site: "Codeforces",
    logo: <SiCodeforces style={style} />,
    url: "",
  },
  {
    site: "CodeChef",
    logo: <SiCodechef style={style} />,
    url: "",
  },
  {
    site: "Stack Overflow",
    logo: <SiStackoverflow style={style} />,
    url: "",
  },
  {
    site: "Reddit",
    logo: <SiReddit style={style} />,
    url: "",
  },
];
