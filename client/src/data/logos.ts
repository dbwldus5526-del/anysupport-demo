import logo11st from "@assets/11번가@2x_1767762695046.png";
import logoBnkBusan from "@assets/BNK부산@2x_1767762701051.png";
import logoDbSec from "@assets/db증권@2x_1767762701051.png";
import logoDgbDaegu from "@assets/DGB대구은행@2x_1767762701052.png";
import logoDoosan from "@assets/Doosan@2x_1767762701052.png";
import logoDreamSec from "@assets/dreamsecurity@2x_1767762701052.png";
import logoFasoo from "@assets/Fasoo@2x_1767762701052.png";
import logoHanwha from "@assets/Hanwha@2x_1767762701053.png";
import logoKdbBank from "@assets/KDB@2x_1767762701053.png";
import logoKdbLife from "@assets/KDB생명@2x_1767762701053.png";
import logoKorail from "@assets/korail@2x_1767762701054.png";
import logoLotte from "@assets/Lotte@2x_1767762701054.png";
import logoMeritz from "@assets/meritz@2x_1767762701054.png";
import logoPosco from "@assets/posco@2x_1767762701054.png";
import logoScBank from "@assets/sc제일은행@2x_1767762701055.png";
import logoSga from "@assets/sga@2x_1767762701055.png";
import logoSkTel from "@assets/sk-telecom@2x_1767762701055.png";
import logoWaterwall from "@assets/waterwall@2x_1767762701055.png";
import logoBohun from "@assets/국가보훈처@2x_1767762701056.png";
import logoDefense from "@assets/국방과학연구@2x_1767762701056.png";

export interface Logo {
  id: number;
  name: string;
  category: string;
  path: string;
}

export const logos: Logo[] = [
  // 글로벌/대기업
  { id: 34, name: "DOOSAN", category: "글로벌/대기업", path: logoDoosan },
  { id: 35, name: "LOTTE", category: "글로벌/대기업", path: logoLotte },
  { id: 36, name: "POSCO", category: "글로벌/대기업", path: logoPosco },

  // 국내 대기업 -> 국내 주요 기업
  { id: 37, name: "11번가", category: "국내 주요 기업", path: logo11st },
  { id: 38, name: "Fasoo", category: "국내 주요 기업", path: logoFasoo },
  { id: 39, name: "DreamSecurity", category: "국내 주요 기업", path: logoDreamSec },
  { id: 40, name: "SGA", category: "국내 주요 기업", path: logoSga },
  { id: 41, name: "Waterwall", category: "국내 주요 기업", path: logoWaterwall },

  // 금융
  { id: 42, name: "BNK부산은행", category: "금융", path: logoBnkBusan },
  { id: 43, name: "DB금융투자", category: "금융", path: logoDbSec },
  { id: 44, name: "DGB대구은행", category: "금융", path: logoDgbDaegu },
  { id: 45, name: "한화생명", category: "금융", path: logoHanwha },
  { id: 46, name: "KDB산업은행", category: "금융", path: logoKdbBank },
  { id: 47, name: "KDB생명", category: "금융", path: logoKdbLife },
  { id: 48, name: "SC제일은행", category: "금융", path: logoScBank },
  { id: 49, name: "메리츠증권", category: "금융", path: logoMeritz },

  // 공공
  { id: 50, name: "KORAIL", category: "공공", path: logoKorail },
  { id: 51, name: "국가보훈처", category: "공공", path: logoBohun },
  { id: 52, name: "국방과학연구소", category: "공공", path: logoDefense },

  // 통신
  { id: 53, name: "SK telecom", category: "통신", path: logoSkTel },
];
