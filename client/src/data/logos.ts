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

// New logos 1
import logoFss from "@assets/금감원@2x_1767763176433.png";
import logoMoef from "@assets/기획재정부@2x_1767763176433.png";
import logoGimcheon from "@assets/김천시@2x_1767763176434.png";
import logoSupremeCourt from "@assets/대법원@2x_1767763176434.png";
import logoMiraeAsset from "@assets/미래에셋@2x_1767763176434.png";
import logoMoj from "@assets/법무부@2x_1767763176434.png";
import logoSamsungDisplay from "@assets/삼성display@2x_1767763176435.png";
import logoSamsungSds from "@assets/삼성sds@2x_1767763176435.png";
import logoSeoulCity from "@assets/서울특별시@2x_1767763176435.png";
import logoLguPlus from "@assets/아트보드_17@2x_1767763176436.png";
import logoSkCnc from "@assets/아트보드_18@2x_1767763176436.png";
import logoLgCns from "@assets/아트보드_19@2x_1767763176436.png";
import logoLgCorp from "@assets/아트보드_20@2x_1767763176437.png";
import logoWoowa from "@assets/우아한형제@2x_1767763176437.png";
import logoPps from "@assets/조달청@2x_1767763176437.png";
import logoKostat from "@assets/통계청@2x_1767763176437.png";
import logoUnikorea from "@assets/통일부@2x_1767763176438.png";
import logoHanaFinancial from "@assets/하나금융@2x_1767763176438.png";

// New logos 2
import logoKedi from "@assets/한국교육개발@2x_1767763259885.png";
import logoKospo from "@assets/한국남부발전@2x_1767763259885.png";
import logoEwp from "@assets/한국동서발전@2x_1767763259886.png";
import logoBok from "@assets/한국은행@2x_1767763259886.png";
import logoSeoulUniv from "@assets/3-1-1_1768531337398.png";
import logoKIC from "@assets/koreainvestmentcorp_logo_1768531344266.jpeg";

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
  { id: 54, name: "LG", category: "글로벌/대기업", path: logoLgCorp },
  { id: 55, name: "LG CNS", category: "글로벌/대기업", path: logoLgCns },
  { id: 56, name: "SK C&C", category: "글로벌/대기업", path: logoSkCnc },
  { id: 57, name: "삼성SDS", category: "글로벌/대기업", path: logoSamsungSds },
  { id: 58, name: "삼성디스플레이", category: "글로벌/대기업", path: logoSamsungDisplay },
  { id: 46, name: "KDB산업은행", category: "글로벌/대기업", path: logoKdbBank },
  { id: 45, name: "한화생명", category: "글로벌/대기업", path: logoHanwha },
  { id: 39, name: "DreamSecurity", category: "글로벌/대기업", path: logoDreamSec },
  { id: 50, name: "KORAIL", category: "글로벌/대기업", path: logoKorail },
  { id: 53, name: "SK telecom", category: "글로벌/대기업", path: logoSkTel },
  { id: 61, name: "미래에셋", category: "글로벌/대기업", path: logoMiraeAsset },
  { id: 71, name: "LG U+", category: "글로벌/대기업", path: logoLguPlus },
  { id: 62, name: "하나금융그룹", category: "글로벌/대기업", path: logoHanaFinancial },
  { id: 37, name: "11번가", category: "글로벌/대기업", path: logo11st },

  // 국내 주요 기업
  { id: 37, name: "11번가", category: "국내 주요 기업", path: logo11st },
  { id: 38, name: "Fasoo", category: "국내 주요 기업", path: logoFasoo },
  { id: 39, name: "DreamSecurity", category: "국내 주요 기업", path: logoDreamSec },
  { id: 40, name: "SGA", category: "국내 주요 기업", path: logoSga },
  { id: 41, name: "Waterwall", category: "국내 주요 기업", path: logoWaterwall },
  { id: 59, name: "우아한형제들", category: "국내 주요 기업", path: logoWoowa },

  // 금융
  { id: 42, name: "BNK부산은행", category: "금융", path: logoBnkBusan },
  { id: 43, name: "DB금융투자", category: "금융", path: logoDbSec },
  { id: 44, name: "DGB대구은행", category: "금융", path: logoDgbDaegu },
  { id: 45, name: "한화생명", category: "금융", path: logoHanwha },
  { id: 46, name: "KDB산업은행", category: "금융", path: logoKdbBank },
  { id: 47, name: "KDB생명", category: "금융", path: logoKdbLife },
  { id: 48, name: "SC제일은행", category: "금융", path: logoScBank },
  { id: 49, name: "메리츠증권", category: "금융", path: logoMeritz },
  { id: 60, name: "금융감독원", category: "금융", path: logoFss },
  { id: 61, name: "미래에셋", category: "금융", path: logoMiraeAsset },
  { id: 62, name: "하나금융그룹", category: "금융", path: logoHanaFinancial },
  { id: 75, name: "한국은행", category: "금융", path: logoBok },

  // 공공
  { id: 50, name: "KORAIL", category: "공공", path: logoKorail },
  { id: 51, name: "국가보훈처", category: "공공", path: logoBohun },
  { id: 52, name: "국방과학연구소", category: "공공", path: logoDefense },
  { id: 63, name: "기획재정부", category: "공공", path: logoMoef },
  { id: 64, name: "김천시", category: "공공", path: logoGimcheon },
  { id: 65, name: "대법원", category: "공공", path: logoSupremeCourt },
  { id: 66, name: "법무부", category: "공공", path: logoMoj },
  { id: 67, name: "서울특별시", category: "공공", path: logoSeoulCity },
  { id: 68, name: "조달청", category: "공공", path: logoPps },
  { id: 69, name: "통계청", category: "공공", path: logoKostat },
  { id: 70, name: "통일부", category: "공공", path: logoUnikorea },
  { id: 72, name: "한국교육개발원", category: "공공", path: logoKedi },
  { id: 73, name: "한국남부발전", category: "공공", path: logoKospo },
  { id: 74, name: "한국동서발전", category: "공공", path: logoEwp },

  // 통신
  { id: 53, name: "SK telecom", category: "통신", path: logoSkTel },
  { id: 71, name: "LG U+", category: "통신", path: logoLguPlus },

  // 추가
  { id: 75, name: "서울대학교", category: "공공", path: logoSeoulUniv },
  { id: 76, name: "한국투자공사", category: "금융", path: logoKIC },
];
