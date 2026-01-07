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

  // 국내 대기업
  { id: 8, name: "SAMSUNG", category: "국내 주요 기업", path: "/assets/logos/samsung.png" },
  { id: 9, name: "LG전자", category: "국내 주요 기업", path: "/assets/logos/lg-electronics.png" },
  { id: 10, name: "HYUNDAI", category: "국내 주요 기업", path: "/assets/logos/hyundai.png" },
  { id: 11, name: "HD현대중공업", category: "국내 주요 기업", path: "/assets/logos/hd-hyundai.png" },
  { id: 12, name: "LG디스플레이", category: "국내 주요 기업", path: "/assets/logos/lg-display.png" },
  { id: 13, name: "KIA", category: "국내 주요 기업", path: "/assets/logos/kia.png" },
  { id: 14, name: "LG에너지솔루션", category: "국내 주요 기업", path: "/assets/logos/lg-energy.png" },

  // 금융
  { id: 15, name: "KB국민은행", category: "금융", path: "/assets/logos/kb.png" },
  { id: 16, name: "KEB하나은행", category: "금융", path: "/assets/logos/hana.png" },
  { id: 17, name: "toss", category: "금융", path: "/assets/logos/toss.png" },
  { id: 18, name: "우리은행", category: "금융", path: "/assets/logos/woori.png" },
  { id: 19, name: "신한은행", category: "금융", path: "/assets/logos/shinhan.png" },
  { id: 20, name: "kakaobank", category: "금융", path: "/assets/logos/kakao-bank.png" },
  { id: 21, name: "한국투자증권", category: "금융", path: "/assets/logos/koreainvest.png" },

  // 공공
  { id: 22, name: "국세청", category: "공공", path: "/assets/logos/nts.png" },
  { id: 23, name: "서울특별시", category: "공공", path: "/assets/logos/seoul.png" },
  { id: 24, name: "행정안전부", category: "공공", path: "/assets/logos/mois.png" },
  { id: 25, name: "검찰", category: "공공", path: "/assets/logos/spo.png" },
  { id: 26, name: "금융결제원", category: "공공", path: "/assets/logos/kftc.png" },
  { id: 27, name: "대한민국 국방부", category: "공공", path: "/assets/logos/mnd.png" },
  { id: 28, name: "LH", category: "공공", path: "/assets/logos/lh.png" },

  // 통신
  { id: 29, name: "LG U+", category: "통신", path: "/assets/logos/lguplus.png" },
  { id: 30, name: "kt", category: "통신", path: "/assets/logos/kt.png" },
  { id: 31, name: "SK telecom", category: "통신", path: "/assets/logos/sktelecom.png" },
  { id: 32, name: "WEST CENTRAL WIRELESS", category: "통신", path: "/assets/logos/wcw.png" },
  { id: 33, name: "docomo", category: "통신", path: "/assets/logos/docomo.png" },
];
