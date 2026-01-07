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
  { id: 1, name: "TOSHIBA", category: "글로벌/대기업", path: "/assets/logos/toshiba.png" },
  { id: 2, name: "HUAWEI", category: "글로벌/대기업", path: "/assets/logos/huawei.png" },
  { id: 3, name: "SONY", category: "글로벌/대기업", path: "/assets/logos/sony.png" },
  { id: 4, name: "SHARP", category: "글로벌/대기업", path: "/assets/logos/sharp.png" },
  { id: 5, name: "FUJITSU", category: "글로벌/대기업", path: "/assets/logos/fujitsu.png" },
  { id: 6, name: "DELL", category: "글로벌/대기업", path: "/assets/logos/dell.png" },
  { id: 7, name: "Lenovo", category: "글로벌/대기업", path: "/assets/logos/lenovo.png" },
  { id: 34, name: "DOOSAN", category: "글로벌/대기업", path: logoDoosan },
  { id: 35, name: "LOTTE", category: "글로벌/대기업", path: logoLotte },
  { id: 36, name: "POSCO", category: "글로벌/대기업", path: logoPosco },

  // 국내 대기업
  { id: 8, name: "SAMSUNG", category: "국내 주요 기업", path: "/assets/logos/samsung.png" },
  { id: 9, name: "LG전자", category: "국내 주요 기업", path: "/assets/logos/lg-electronics.png" },
  { id: 10, name: "HYUNDAI", category: "국내 주요 기업", path: "/assets/logos/hyundai.png" },
  { id: 11, name: "HD현대중공업", category: "국내 주요 기업", path: "/assets/logos/hd-hyundai.png" },
  { id: 12, name: "LG디스플레이", category: "국내 주요 기업", path: "/assets/logos/lg-display.png" },
  { id: 13, name: "KIA", category: "국내 주요 기업", path: "/assets/logos/kia.png" },
  { id: 14, name: "LG에너지솔루션", category: "국내 주요 기업", path: "/assets/logos/lg-energy.png" },
  { id: 37, name: "11번가", category: "국내 주요 기업", path: logo11st },
  { id: 38, name: "Fasoo", category: "국내 주요 기업", path: logoFasoo },
  { id: 39, name: "DreamSecurity", category: "국내 주요 기업", path: logoDreamSec },
  { id: 40, name: "SGA", category: "국내 주요 기업", path: logoSga },
  { id: 41, name: "Waterwall", category: "국내 주요 기업", path: logoWaterwall },

  // 금융
  { id: 15, name: "KB국민은행", category: "금융", path: "/assets/logos/kb.png" },
  { id: 16, name: "KEB하나은행", category: "금융", path: "/assets/logos/hana.png" },
  { id: 17, name: "toss", category: "금융", path: "/assets/logos/toss.png" },
  { id: 18, name: "우리은행", category: "금융", path: "/assets/logos/woori.png" },
  { id: 19, name: "신한은행", category: "금융", path: "/assets/logos/shinhan.png" },
  { id: 20, name: "kakaobank", category: "금융", path: "/assets/logos/kakao-bank.png" },
  { id: 21, name: "한국투자증권", category: "금융", path: "/assets/logos/koreainvest.png" },
  { id: 42, name: "BNK부산은행", category: "금융", path: logoBnkBusan },
  { id: 43, name: "DB금융투자", category: "금융", path: logoDbSec },
  { id: 44, name: "DGB대구은행", category: "금융", path: logoDgbDaegu },
  { id: 45, name: "한화생명", category: "금융", path: logoHanwha },
  { id: 46, name: "KDB산업은행", category: "금융", path: logoKdbBank },
  { id: 47, name: "KDB생명", category: "금융", path: logoKdbLife },
  { id: 48, name: "SC제일은행", category: "금융", path: logoScBank },
  { id: 49, name: "메리츠증권", category: "금융", path: logoMeritz },

  // 공공
  { id: 22, name: "국세청", category: "공공", path: "/assets/logos/nts.png" },
  { id: 23, name: "서울특별시", category: "공공", path: "/assets/logos/seoul.png" },
  { id: 24, name: "행정안전부", category: "공공", path: "/assets/logos/mois.png" },
  { id: 25, name: "검찰", category: "공공", path: "/assets/logos/spo.png" },
  { id: 26, name: "금융결제원", category: "공공", path: "/assets/logos/kftc.png" },
  { id: 27, name: "대한민국 국방부", category: "공공", path: "/assets/logos/mnd.png" },
  { id: 28, name: "LH", category: "공공", path: "/assets/logos/lh.png" },
  { id: 50, name: "KORAIL", category: "공공", path: logoKorail },
  { id: 51, name: "국가보훈처", category: "공공", path: logoBohun },
  { id: 52, name: "국방과학연구소", category: "공공", path: logoDefense },

  // 통신
  { id: 29, name: "LG U+", category: "통신", path: "/assets/logos/lguplus.png" },
  { id: 30, name: "kt", category: "통신", path: "/assets/logos/kt.png" },
  { id: 31, name: "SK telecom", category: "통신", path: "/assets/logos/sktelecom.png" },
  { id: 32, name: "WEST CENTRAL WIRELESS", category: "통신", path: "/assets/logos/wcw.png" },
  { id: 33, name: "docomo", category: "통신", path: "/assets/logos/docomo.png" },
  { id: 53, name: "SK telecom", category: "통신", path: logoSkTel },
];
