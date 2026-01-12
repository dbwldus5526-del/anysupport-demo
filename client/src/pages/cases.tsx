import { useState } from "react";
import { Button } from "@/components/ui/button";
import { useModal } from "@/context/ModalContext";
import { Link } from "wouter";
import {
  ArrowRight,
  Shield,
  Clock,
  TrendingUp,
  Users,
  CheckCircle,
  Building2,
  Landmark,
  Radio,
  Factory,
  GraduationCap,
  Laptop,
  Lock,
  Eye,
  FileText,
  Server,
  Globe,
  Network,
  Monitor,
  Headphones,
  Flame,
  ArrowDown,
  ArrowLeftRight,
  User,
  HardDrive,
  Smartphone,
  Video,
} from "lucide-react";
import { motion } from "framer-motion";

const industryFilters = [
  { id: "all", label: "전체", icon: Building2 },
  { id: "public", label: "공공", icon: Landmark },
  { id: "finance", label: "금융", icon: Building2 },
  { id: "telecom", label: "통신", icon: Radio },
  { id: "manufacturing", label: "제조·건설", icon: Factory },
  { id: "education", label: "교육·일반", icon: GraduationCap },
  { id: "it", label: "IT·솔루션", icon: Laptop },
];

const allCases = [
  {
    company: "조달청",
    industry: ["public"],
    desc: "나라장터 이용기관 원격지원",
  },
  {
    company: "법무부",
    industry: ["public"],
    desc: "통합사증정보시스템 고객 원격지원",
  },
  {
    company: "KDB생명",
    industry: ["finance"],
    desc: "다이렉트 보험 고객 원격상담",
  },
  {
    company: "한화생명",
    industry: ["finance"],
    desc: "사이트 이용 고객 원격지원",
  },
  {
    company: "서울특별시",
    industry: ["public"],
    desc: "클린업시스템 이용 고객 원격지원",
  },
  {
    company: "기획재정부",
    industry: ["public"],
    desc: "디브레인 시스템 이용 고객 원격지원",
  },
  {
    company: "통계청",
    industry: ["public"],
    desc: "나라통계시스템 이용 고객 원격지원",
  },
  {
    company: "삼성전자",
    industry: ["manufacturing", "it"],
    desc: "시스템 연계 지원",
  },
  {
    company: "SK플래닛",
    industry: ["it", "telecom"],
    desc: "솔루션 연계 지원",
  },
  { company: "두산", industry: ["manufacturing"], desc: "그룹 전산지원" },
  { company: "서울대학교", industry: ["education"], desc: "내부 시스템 지원" },
  {
    company: "한국투자공사",
    industry: ["finance"],
    desc: "서버군 유지보수 및 원격지원",
  },
  { company: "ABL생명", industry: ["finance"], desc: "고객 원격지원" },
  { company: "KEB하나은행", industry: ["finance"], desc: "고객 원격지원" },
  { company: "BNK부산은행", industry: ["finance"], desc: "고객 원격지원" },
  {
    company: "SK건설",
    industry: ["manufacturing"],
    desc: "해외지사 및 건설현장 원격지원",
  },
  { company: "파수닷컴", industry: ["it"], desc: "솔루션 이용 고객 원격지원" },
  {
    company: "메가스터디",
    industry: ["education"],
    desc: "수강생 단말기 지원",
  },
  { company: "천재교육", industry: ["education"], desc: "교육 시스템 지원" },
  { company: "SK텔레콤", industry: ["telecom"], desc: "통신 시스템 연계 지원" },
  { company: "KT", industry: ["telecom"], desc: "고객 서비스 지원" },
  { company: "LG유플러스", industry: ["telecom"], desc: "원격 고객 지원" },
  {
    company: "현대건설",
    industry: ["manufacturing"],
    desc: "건설현장 원격지원",
  },
  { company: "포스코", industry: ["manufacturing"], desc: "제조 시스템 지원" },
];

const scenarios = [
  {
    id: "internet",
    title: "인터넷망 고객 지원",
    subtitle: "대고객 지원을 위한 AnySupport 도입",
    description:
      "홈페이지, 암호화 모듈, PC보안 프로그램 설치 문의 등 인터넷망 기반의 고객 원격지원",
    securityPoints: ["종단간 암호화", "세션 자동 종료", "고객 동의 기반 접속"],
    cases: [
      { logo: "조달청", desc: "조달청 나라장터 이용기관/개인 원격지원" },
      { logo: "법무부", desc: "통합사증정보시스템 이용 고객 원격지원" },
      { logo: "KDB생명", desc: "KDB생명 다이렉트 보험 고객 원격상담" },
      { logo: "한화생명", desc: "한화생명 사이트 이용 고객 원격지원" },
      {
        logo: "대한민국 법원",
        desc: "가족관계등록정보시스템 이용 고객 원격지원",
      },
      { logo: "리드코프", desc: "리드코프 대출상담 고객 원격지원" },
      { logo: "ABL생명", desc: "ABL생명 고객 원격지원" },
      { logo: "KEB하나은행", desc: "KEB하나은행 고객 원격지원" },
      { logo: "BNK부산은행", desc: "BNK부산은행 고객 원격지원" },
    ],
    industry: ["public", "finance"],
  },
  {
    id: "internal",
    title: "내부망/내외부망 지원",
    subtitle: "사용시스템 연계지원을 위한 AnySupport 도입",
    description:
      "수강생/직원 전용 단말기, 공급솔루션·서비스 연계, 공장관리·운영 시스템 지원",
    securityPoints: [
      "접근 승인 프로세스",
      "화면 부분 차단",
      "그룹별 권한 관리",
    ],
    cases: [
      {
        logo: "기획재정부",
        desc: "디브레인(D-Brain) 시스템 이용 고객 원격지원",
      },
      { logo: "통계청", desc: "나라통계시스템 이용 고객 원격지원" },
      { logo: "서울특별시", desc: "서울시청 클린업시스템 이용 고객 원격지원" },
      { logo: "한국동서발전", desc: "독립망 내 발전소 및 사무실 PC 원격지원" },
      { logo: "파수닷컴", desc: "파수닷컴 솔루션 이용 고객 원격지원" },
      { logo: "ISC", desc: "공장 생산관리시스템 사용 직원 원격지원" },
      { logo: "삼성전자", desc: "삼성전자 시스템 연계 지원" },
      { logo: "SK플래닛", desc: "SK플래닛 솔루션 연계 지원" },
    ],
    industry: ["public", "manufacturing", "it"],
  },
  {
    id: "dmz",
    title: "내부 전산·유지보수(DMZ)",
    subtitle: "내부 전산지원·유지보수를 위한 AnySupport 도입",
    description:
      "고객사 내부망 접속 승인 프로세스를 통한 시스템 접근 보안성 강화",
    securityPoints: [
      "DMZ 구간 분리",
      "접속 승인 워크플로우",
      "세션 녹화 및 감사",
    ],
    cases: [
      { logo: "통일부", desc: "직원 및 협력부처 전산지원" },
      { logo: "한국투자공사", desc: "서버군 유지보수 및 원격지원" },
      { logo: "한국남부발전", desc: "발전소 및 내부 직원 PC 원격지원" },
      { logo: "국립산림과학원", desc: "직원용 내부 포탈 전산지원" },
      { logo: "국군복지단", desc: "복지단 내부 PC 및 서버 전산지원" },
      { logo: "SK건설", desc: "해외지사 및 건설현장 원격지원" },
      { logo: "서울대학교", desc: "서울대학교 내부 시스템 지원" },
      { logo: "분당서울대병원", desc: "분당서울대학교병원 전산지원" },
      { logo: "두산", desc: "두산 그룹 전산지원" },
      { logo: "서울경제", desc: "서울경제 내부 시스템 지원" },
    ],
    industry: ["public", "manufacturing", "education"],
  },
];

const implementationEffects = [
  {
    title: "신속한 장애처리",
    highlight: "장애처리",
    desc: "장애 유형과 관계없이 즉시 지원",
    details: "실시간 화면공유, 제어 가능 (전화 상담: 15분 → 직접 방문: 1시간)",
  },
  {
    title: "획기적인 비용절감",
    highlight: "비용절감",
    desc: "방문 고객지원 비용: 103억원",
    details: "재콜 처리 비용: 50억원 / 고객서비스 지출 비용: 22억원",
  },
  {
    title: "업무효율성 제고",
    highlight: "업무효율성",
    desc: "맞춤형 기능 설정 및 이력 관리",
    details:
      "유형별 상담 통계내역 제공 / 그룹별 상담원 권한 설정 및 실시간 관리",
  },
  {
    title: "FCR 비율 증가",
    highlight: "FCR",
    desc: "첫 고객 대응으로 문제 해결",
    details:
      "(FCR: First Call Resolution) 최대 75%까지 증가 → 재문의 전화 비용 감소",
  },
  {
    title: "고객서비스 강화",
    highlight: "고객서비스",
    desc: "신속·정확한 지원으로",
    details: "원격지원 해결률 92% / 고객 이탈방지 비용 최대 65% 증가",
  },
];

const securityFeatures = [
  {
    icon: Lock,
    title: "접근 통제",
    items: ["승인 프로세스", "권한 관리", "화이트리스트", "IP 제한"],
  },
  {
    icon: Eye,
    title: "정보 보호",
    items: [
      "화면 부분 차단",
      "클립보드·파일 정책",
      "개인정보 마스킹",
      "워터마크",
    ],
  },
  {
    icon: FileText,
    title: "감사·추적",
    items: ["세션 로그", "전 과정 녹화", "리포트 생성", "관리자 대시보드"],
  },
];

export default function Cases() {
  const { openModal } = useModal();
  const [activeScenario, setActiveScenario] = useState("internet");
  const [activeIndustry, setActiveIndustry] = useState("all");

  const currentScenario = scenarios.find((s) => s.id === activeScenario);

  const filteredIndustryCases =
    activeIndustry === "all"
      ? allCases
      : allCases.filter((c) => c.industry.includes(activeIndustry));

  return (
    <div className="flex flex-col">
      {/* Section A: Hero */}
      <section className="relative pt-32 pb-20 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-72 h-72 bg-primary rounded-full blur-3xl" />
          <div className="absolute bottom-10 right-10 w-96 h-96 bg-blue-500 rounded-full blur-3xl" />
        </div>

        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/20 rounded-full text-primary text-sm font-medium mb-6">
              <Shield size={16} />
              주요 도입사례
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl font-black mb-6 leading-tight">
              보안 정책을 지키면서,
              <br />
              <span className="text-primary">지원 속도를 끌어올리는</span>{" "}
              원격지원 관제탑
            </h1>

            <p className="text-lg text-slate-300 mb-10 max-w-2xl mx-auto">
              인터넷망 · 내부망 · 내부전산/DMZ 환경까지
              <br />
              시나리오별 구축과 성공사례를 제공합니다.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Button
                size="lg"
                onClick={openModal}
                className="h-14 px-8 text-lg font-bold shadow-xl"
              >
                도입 상담 문의 <ArrowRight className="ml-2" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                onClick={openModal}
                className="h-14 px-8 text-lg font-bold border-white/30 text-white hover:bg-white/10"
              >
                보안·인증 자료 요청
              </Button>
            </div>

            {/* Trust Badges */}
            <div className="flex flex-wrap justify-center gap-4 md:gap-8">
              {["ISO/IEC 27001", "GS 인증", "조달 등록", "99.9% 가동률"].map(
                (badge, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-2 px-4 py-2 bg-white/10 rounded-lg font-medium text-[18px]"
                  >
                    <CheckCircle size={16} className="text-green-400" />
                    {badge}
                  </div>
                ),
              )}
            </div>
          </div>
        </div>
      </section>
      {/* Section B: Performance Metrics */}
      <section className="py-20 bg-white border-y border-slate-100">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="text-center p-8 bg-slate-50 rounded-2xl border border-slate-100">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-4">
                <Clock size={32} className="text-primary" />
              </div>
              <div className="text-5xl md:text-6xl font-black mb-2 text-[#333]">
                3분
              </div>
              <div className="text-xl font-bold text-slate-700 mb-2">
                내 해결
              </div>
              <p className="text-[#666] text-[18px]">평균 장애 해결 시간</p>
            </div>

            <div className="text-center p-8 bg-slate-50 rounded-2xl border border-slate-100">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-4">
                <TrendingUp size={32} className="text-primary" />
              </div>
              <div className="text-5xl md:text-6xl font-black mb-2 text-[#333]">
                175<span className="text-3xl">억원</span>
              </div>
              <div className="text-xl font-bold text-slate-700 mb-2">
                연간 절감
              </div>
              <p className="text-[#666] text-[18px]">* 보안업체 OOO사 사례</p>
            </div>

            <div className="text-center p-8 bg-slate-50 rounded-2xl border border-slate-100">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-4">
                <Users size={32} className="text-primary" />
              </div>
              <div className="text-5xl md:text-6xl font-black mb-2 text-[#333]">
                95<span className="text-3xl">%</span>
              </div>
              <div className="text-xl font-bold text-slate-700 mb-2">
                고객만족도
              </div>
              <p className="text-[18px] text-[#666]">
                원격지원 AnySupport를 사용했을 때
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* Section C: Scenario Tabs */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-4xl font-bold mb-4 text-[#333]">
              우리 환경은 어디에 해당하나요?
            </h2>
            <p className="text-slate-500 max-w-2xl mx-auto text-[18px]">
              조직의 네트워크 환경에 맞는 시나리오를 선택해 보세요
            </p>
          </div>

          {/* Scenario Tabs */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {scenarios.map((scenario) => (
              <button
                key={scenario.id}
                onClick={() => setActiveScenario(scenario.id)}
                className={`px-6 py-3 rounded-full font-bold transition-all duration-300 border text-[18px] ${
                  activeScenario === scenario.id
                    ? "bg-primary text-white border-primary"
                    : "bg-white text-slate-600 border-slate-200 hover:border-primary hover:text-primary"
                }`}
              >
                {scenario.id === "internet" && (
                  <Globe className="inline mr-2 w-4 h-4" />
                )}
                {scenario.id === "internal" && (
                  <Network className="inline mr-2 w-4 h-4" />
                )}
                {scenario.id === "dmz" && (
                  <Server className="inline mr-2 w-4 h-4" />
                )}
                {scenario.title}
              </button>
            ))}
          </div>

          {/* Scenario Content */}
          {currentScenario && (
            <motion.div
              key={currentScenario.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="max-w-6xl mx-auto"
            >
              {/* Visual Flow Diagram */}
              <div className="bg-slate-50 rounded-2xl p-8 mb-8 border border-slate-100">
                <div className="text-center mb-6">
                  <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary font-bold rounded-full mb-2 text-[18px]">
                    시나리오
                  </span>
                  <h3 className="text-xl font-bold text-slate-800">
                    {currentScenario.subtitle}
                  </h3>
                  <p className="mt-2 text-[18px] text-[#666]">
                    {currentScenario.description}
                  </p>
                </div>

                {/* Internet Scenario Flow */}
                {currentScenario.id === "internet" && (
                  <div className="py-6 text-[18px] text-[#666]">
                    {/* Top: 상담원 그룹 */}
                    <div className="flex justify-center gap-4 md:gap-8 mb-6">
                      {["A사", "B사", "C사"].map((company, i) => (
                        <div key={i} className="flex flex-col items-center">
                          <div className="px-3 py-1 bg-primary text-white font-bold rounded-full mb-2 text-[18px]">
                            {company}
                          </div>
                          <div className="w-16 h-16 md:w-20 md:h-20 bg-blue-50 rounded-xl border-2 border-dashed border-blue-200 flex items-center justify-center">
                            <div className="flex items-center gap-1">
                              <Headphones size={20} className="text-blue-600" />
                              <Monitor size={16} className="text-blue-400" />
                            </div>
                          </div>
                          <span className="font-bold mt-1 text-[#333] text-[18px]">
                            상담원
                          </span>
                        </div>
                      ))}
                    </div>

                    {/* 화살표 */}
                    <div className="flex justify-center gap-8 md:gap-16 mt-[9px] mb-[9px]">
                      <ArrowDown size={24} className="text-slate-300" />
                      <ArrowDown size={24} className="text-slate-300" />
                      <ArrowDown size={24} className="text-slate-300" />
                    </div>

                    {/* Middle: 지원 유형 */}
                    <div className="flex justify-center gap-3 md:gap-6 mb-6">
                      <div className="flex flex-col items-center p-3 md:p-4 bg-white rounded-xl border border-slate-200 w-28 md:w-36">
                        <Globe size={28} className="text-blue-500 mb-2" />
                        <span className="md:text-xs font-bold text-center text-[18px] text-[#333]">
                          홈페이지
                        </span>
                        <span className="md:text-xs text-center text-[18px] text-[#666]">
                          이용문의
                        </span>
                      </div>
                      <div className="flex flex-col items-center p-3 md:p-4 bg-white rounded-xl border border-slate-200 w-28 md:w-36">
                        <Lock size={28} className="text-orange-500 mb-2" />
                        <span className="md:text-xs font-bold text-center text-[18px] text-[#333]">
                          암호화모듈
                        </span>
                        <span className="md:text-xs text-center text-[18px] text-[#666]">
                          PC보안/설치문의
                        </span>
                      </div>
                      <div className="flex flex-col items-center p-3 md:p-4 bg-white rounded-xl border border-slate-200 w-28 md:w-36">
                        <Laptop size={28} className="text-green-500 mb-2" />
                        <span className="md:text-xs font-bold text-center text-[18px] text-[#333]">
                          서비스
                        </span>
                        <span className="md:text-xs text-center text-[#666] text-[18px]">
                          이용문의
                        </span>
                      </div>
                    </div>

                    {/* 화살표 */}
                    <div className="flex justify-center mt-[9px] mb-[9px]">
                      <ArrowDown size={24} className="text-slate-300" />
                    </div>

                    {/* Bottom: 고객 */}
                    <div className="flex justify-center">
                      <div className="px-6 py-4 bg-primary/10 rounded-2xl border-2 border-primary/20 flex items-center gap-4">
                        <div className="flex items-center gap-2">
                          <Monitor size={28} className="text-primary" />
                          <Smartphone size={24} className="text-primary" />
                        </div>
                        <div>
                          <div className="font-bold text-primary text-[18px]">
                            고객 (인터넷망)
                          </div>
                          <div className="text-[18px] text-[#666]">
                            PC·모바일 이용고객
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {/* Internal Network Scenario Flow */}
                {currentScenario.id === "internal" && (
                  <div className="py-6">
                    {/* Top: 상담원 그룹 */}
                    <div className="flex justify-center gap-4 md:gap-8 mb-6">
                      {["A사", "B사", "C사"].map((company, i) => (
                        <div key={i} className="flex flex-col items-center">
                          <div className="px-3 py-1 bg-sky-500 text-white font-bold rounded-full mb-2 text-[18px]">
                            {company}
                          </div>
                          <div className="w-16 h-16 md:w-20 md:h-20 bg-sky-50 rounded-xl border-2 border-dashed border-sky-200 flex items-center justify-center">
                            <div className="flex items-center gap-1">
                              <Headphones size={20} className="text-sky-600" />
                              <Monitor size={16} className="text-sky-400" />
                            </div>
                          </div>
                          <span className="font-bold mt-1 text-[#333] text-[18px]">
                            상담원
                          </span>
                        </div>
                      ))}
                    </div>

                    {/* 화살표 */}
                    <div className="flex justify-center gap-8 md:gap-16 mt-[9px] mb-[9px]">
                      <ArrowDown size={24} className="text-slate-300" />
                      <ArrowDown size={24} className="text-slate-300" />
                      <ArrowDown size={24} className="text-slate-300" />
                    </div>

                    {/* Middle: 연계 시스템 */}
                    <div className="flex justify-center gap-3 md:gap-6 mb-6">
                      <div className="flex flex-col items-center p-3 md:p-4 bg-white rounded-xl border border-slate-200 w-28 md:w-36">
                        <GraduationCap
                          size={28}
                          className="text-purple-500 mb-2"
                        />
                        <span className="font-bold text-center text-[#333] text-[18px]">
                          수강생/직원
                        </span>
                        <span className="text-center text-[18px] text-[#666]">
                          전용 단말기
                        </span>
                      </div>
                      <div className="flex flex-col items-center p-3 md:p-4 bg-white rounded-xl border border-slate-200 w-28 md:w-36">
                        <Network size={28} className="text-blue-500 mb-2" />
                        <span className="font-bold text-center text-[18px] text-[#333]">
                          공급솔루션
                        </span>
                        <span className="text-center text-[18px] text-[#666]">
                          서비스 연계
                        </span>
                      </div>
                      <div className="flex flex-col items-center p-3 md:p-4 bg-white rounded-xl border border-slate-200 w-28 md:w-36">
                        <Factory size={28} className="text-slate-600 mb-2" />
                        <span className="font-bold text-center text-[#333] text-[18px]">
                          공장관리
                        </span>
                        <span className="text-center text-[18px] text-[#666]">
                          운영시스템
                        </span>
                      </div>
                    </div>

                    {/* 화살표 */}
                    <div className="flex justify-center mt-[9px] mb-[9px]">
                      <ArrowDown size={24} className="text-slate-300" />
                    </div>

                    {/* Bottom: 고객 */}
                    <div className="flex justify-center">
                      <div className="px-6 py-4 bg-sky-50 rounded-2xl border-2 border-sky-200 flex items-center gap-4">
                        <div className="flex items-center gap-2">
                          <Monitor size={28} className="text-sky-600" />
                          <Smartphone size={24} className="text-sky-500" />
                        </div>
                        <div>
                          <div className="font-bold text-sky-700 text-[18px]">
                            고객 (내외부망)
                          </div>
                          <div className="text-[18px] text-[#666]">
                            PC·모바일 이용고객
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {/* DMZ Scenario Flow */}
                {currentScenario.id === "dmz" && (
                  <div className="py-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      {/* Left: 외부 IT협력업체 */}
                      <div className="flex flex-col items-center">
                        <div className="w-full max-w-md">
                          <div className="flex items-center gap-3 p-4 bg-amber-50 rounded-xl border border-amber-200 mb-4">
                            <div className="w-12 h-12 bg-amber-100 rounded-lg flex items-center justify-center">
                              <User size={24} className="text-amber-700" />
                            </div>
                            <div>
                              <div className="font-bold text-amber-800 text-[18px]">
                                외부 IT협력업체
                              </div>
                              <div className="text-amber-600 text-[18px]">
                                유지보수 엔지니어
                              </div>
                            </div>
                          </div>

                          {/* 방화벽 */}
                          <div className="flex items-center justify-center gap-2 mb-4">
                            <div className="flex-1 h-px bg-slate-300"></div>
                            <div className="w-10 h-10 bg-red-100 rounded-lg flex items-center justify-center border border-red-200">
                              <Flame size={20} className="text-red-500" />
                            </div>
                            <div className="flex-1 h-px bg-slate-300"></div>
                          </div>

                          {/* 프로세스 단계 */}
                          <div className="space-y-3">
                            <div className="flex items-start gap-3 p-3 bg-white rounded-lg border border-slate-200">
                              <div className="w-6 h-6 bg-primary text-white rounded-full flex items-center justify-center shrink-0 text-[16px] font-extrabold">
                                2
                              </div>
                              <div>
                                <div className="font-bold text-[#333] text-[16px]">
                                  원격세션 연결
                                </div>
                                <div className="text-[#666] text-[16px]">
                                  제어 주체: 고객사 / 제어 대상: 유지보수업체
                                </div>
                              </div>
                            </div>
                            <div className="flex items-start gap-3 p-3 bg-white rounded-lg border border-slate-200">
                              <div className="w-6 h-6 bg-primary text-white rounded-full flex items-center justify-center shrink-0 text-[16px] font-extrabold">
                                3
                              </div>
                              <div>
                                <div className="font-bold text-[#333] text-[16px]">
                                  접속 승인 시, 고객사 직원 PC화면에 대한 제어권
                                  이양
                                </div>
                                <div className="text-[#666] text-[16px]">
                                  제어 주체: 유지보수업체 / 제어 대상: 고객사
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Right: 내부망 구조 */}
                      <div className="p-4 bg-red-50 rounded-xl border-2 border-red-200">
                        <div className="text-center font-bold text-red-700 mb-3 text-[16px]">
                          내부망 (업무망)
                        </div>
                        <div className="p-3 bg-yellow-50 rounded-lg border border-yellow-200 mb-3">
                          <div className="text-center font-bold text-yellow-800 mb-2 text-[16px]">
                            고객사 내부서버
                          </div>
                          <div className="grid grid-cols-2 gap-2">
                            <div className="flex items-center gap-2 p-2 bg-white rounded border border-slate-200">
                              <Server size={16} className="text-slate-600" />
                              <span className="text-[16px] text-[#333]">
                                기간계 서버
                              </span>
                            </div>
                            <div className="flex items-center gap-2 p-2 bg-white rounded border border-slate-200">
                              <HardDrive size={16} className="text-slate-600" />
                              <span className="text-[#333] text-[16px]">
                                원격지원 서버
                              </span>
                            </div>
                          </div>
                        </div>
                        <div className="p-3 bg-green-50 rounded-lg border border-green-200">
                          <div className="text-center font-bold text-green-800 mb-2 text-[18px]">
                            DMZ
                          </div>
                          <div className="flex items-center justify-center gap-2 p-2 bg-white rounded border border-slate-200">
                            <Server size={16} className="text-green-600" />
                            <span className="text-[#333] text-[16px]">
                              원격지원 서버
                            </span>
                          </div>
                          <div className="flex items-center justify-center mt-2">
                            <div className="flex items-center gap-2 px-3 py-1.5 bg-blue-50 rounded-full border border-blue-200">
                              <div className="w-5 h-5 bg-primary text-white rounded-full flex items-center justify-center text-[10px] font-bold">
                                1
                              </div>
                              <span className="text-[10px] text-blue-700">
                                내부PC-내부망 서버 연결 (터미널 등)
                              </span>
                            </div>
                          </div>
                        </div>
                        {/* 고객사 직원 */}
                        <div className="flex justify-center mt-4">
                          <div className="flex items-center gap-2 px-4 py-2 bg-white rounded-lg border border-slate-200">
                            <Monitor size={20} className="text-slate-600" />
                            <span className="text-xs font-bold text-slate-700">
                              고객사 직원
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {/* Security Points & Info */}
                <div className="grid md:grid-cols-2 gap-6 mt-6">
                  <div className="bg-white rounded-xl p-5 border border-slate-100">
                    <h4 className="font-bold text-slate-800 mb-3 flex items-center gap-2 text-[18px]">
                      <Shield size={18} className="text-primary" />
                      보안 포인트
                    </h4>
                    <div className="space-y-2">
                      {currentScenario.securityPoints.map((point, i) => (
                        <div
                          key={i}
                          className="flex items-center gap-2 text-[18px] text-[#666]"
                        >
                          <CheckCircle size={14} className="text-green-500" />
                          <span className="text-slate-600">{point}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="bg-blue-50 rounded-xl p-5 border border-blue-100">
                    <h4 className="font-bold text-blue-800 mb-3 flex items-center gap-2 text-[18px]">
                      <Users size={18} className="text-blue-600" />
                      지원 대상
                    </h4>
                    <div className="space-y-2 text-blue-700 text-[18px]">
                      <div className="flex items-center gap-2 text-[18px]">
                        <Headphones size={14} />
                        <strong>누가:</strong> 상담원/운영자
                      </div>
                      <div className="flex items-center gap-2">
                        {currentScenario.id === "internet" ? (
                          <Monitor size={14} />
                        ) : currentScenario.id === "internal" ? (
                          <Network size={14} />
                        ) : (
                          <Server size={14} />
                        )}
                        <strong>어디에:</strong>{" "}
                        {currentScenario.id === "internet"
                          ? "인터넷망 고객 PC"
                          : currentScenario.id === "internal"
                            ? "내부망/연계 시스템"
                            : "DMZ/내부 서버"}
                      </div>
                      <div className="flex items-center gap-2">
                        <ArrowLeftRight size={14} />
                        <strong>무엇을:</strong> 실시간 원격 지원 및 장애 해결
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Case Logos Grid */}
              <div className="rounded-2xl border border-slate-200 p-8 bg-[#f8fafc] text-[#333]">
                <h3 className="text-lg font-bold mb-6 text-center">
                  대표 사례
                </h3>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {currentScenario.cases.slice(0, 8).map((caseItem, i) => (
                    <div
                      key={i}
                      className="p-4 rounded-xl border border-slate-100 hover:border-primary/30 transition-colors text-[18px] text-[#333] bg-[#ffffff]"
                    >
                      <div className="font-bold mb-1 text-[18px] text-[#333]">
                        {caseItem.logo}
                      </div>
                      <p className="text-[18px] text-[#666]">{caseItem.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          )}
        </div>
      </section>
      {/* Section D: Industry Filter + Cases Grid */}
      <section className="py-24 bg-slate-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-4xl font-bold mb-4">
              업종별 도입 사례
            </h2>
            <p className="text-[#666] text-lg font-normal">
              다양한 산업군에서 애니서포트를 활용하고 있습니다
            </p>
          </div>

          {/* Industry Filter */}
          <div className="flex flex-wrap justify-center gap-2 mb-12">
            {industryFilters.map((filter) => (
              <button
                key={filter.id}
                onClick={() => setActiveIndustry(filter.id)}
                className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all ${
                  activeIndustry === filter.id
                    ? "bg-primary text-white"
                    : "bg-white text-slate-600 border border-slate-200 hover:border-primary"
                }`}
              >
                {filter.label}
              </button>
            ))}
          </div>

          {/* Cases Grid */}
          <motion.div
            key={activeIndustry}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
            className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 max-w-6xl mx-auto"
          >
            {filteredIndustryCases.map((caseItem, i) => (
              <div
                key={i}
                className="bg-white p-6 rounded-xl border border-slate-100 hover:border-primary/30 hover:shadow-md transition-all text-center group cursor-pointer"
              >
                <div className="w-12 h-12 bg-slate-100 rounded-lg mx-auto mb-3 flex items-center justify-center group-hover:bg-primary/10 transition-colors">
                  <Building2
                    size={24}
                    className="text-slate-400 group-hover:text-primary"
                  />
                </div>
                <div className="font-bold text-sm text-slate-700">
                  {caseItem.company}
                </div>
                <p className="text-xs text-slate-400 mt-1">{caseItem.desc}</p>
              </div>
            ))}
          </motion.div>

          <div className="text-center mt-10">
            <Button
              variant="outline"
              size="lg"
              onClick={openModal}
              className="font-bold"
            >
              전체 도입사례 보기 <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
          </div>
        </div>
      </section>
      {/* Section E: Implementation Effects */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-4xl font-bold mb-4">
              도입 효과 (업무 성과)
            </h2>
            <p className="text-[#666] text-lg font-normal">
              애니서포트 도입으로 기대할 수 있는 효과
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 max-w-6xl mx-auto">
            {implementationEffects.map((effect, i) => (
              <div
                key={i}
                className="bg-slate-50 rounded-2xl p-6 border border-slate-100 hover:border-primary/30 transition-all pl-[20px] pr-[20px] pt-[21px] pb-[21px]"
              >
                <div className="inline-block px-4 py-2 bg-gradient-to-r from-slate-200 to-slate-100 rounded-full text-sm font-bold mb-4">
                  {effect.title.replace(effect.highlight, "")}
                  <span className="text-primary">{effect.highlight}</span>
                </div>
                <p className="mb-2 text-[#333] text-[18px] font-semibold">
                  {effect.desc}
                </p>
                <p className="text-[#666] text-[18px] font-normal">
                  {effect.details}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* Section F: Security Control Tower */}
      <section className="py-24 bg-slate-900 text-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <div className="inline-block p-3 rounded-full bg-primary/20 text-primary mb-6">
              <Shield size={40} />
            </div>
            <h2 className="text-2xl md:text-4xl font-bold mb-4">보안 관제탑</h2>
            <p className="text-slate-400 max-w-2xl mx-auto text-[18px]">
              접근 통제부터 감사·추적까지, 엔터프라이즈급 보안을 제공합니다
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto mb-12">
            {securityFeatures.map((feature, i) => (
              <div
                key={i}
                className="bg-slate-800 rounded-2xl p-8 border border-slate-700"
              >
                <div className="inline-flex items-center justify-center w-14 h-14 bg-primary/20 rounded-xl mb-6">
                  <feature.icon size={28} className="text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-4">{feature.title}</h3>
                <ul className="space-y-2">
                  {feature.items.map((item, j) => (
                    <li
                      key={j}
                      className="flex items-center gap-2 text-slate-300 text-[18px]"
                    >
                      <CheckCircle size={14} className="text-green-400" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="text-center">
            <Link href="/solution/management">
              <Button
                size="lg"
                variant="outline"
                className="font-bold border-white text-white hover:bg-white/10 text-[18px]"
              >
                원격지원 관리 기능 보기 <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
      {/* Section G: Bottom CTA */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <div className="bg-white rounded-2xl p-10 border border-slate-200 text-center">
              <h3 className="text-xl font-bold mb-4">
                보안망/내부망 환경 상담이 필요하신가요?
              </h3>
              <p className="text-slate-500 mb-6">
                귀사의 네트워크 환경에 맞는
                <br />최적의 구축 방안을 제안드립니다
              </p>
              <Button
                size="lg"
                onClick={openModal}
                className="w-full font-bold"
              >
                도입 상담 문의 <ArrowRight className="ml-2" />
              </Button>
            </div>

            <div className="bg-white rounded-2xl p-10 border border-slate-200 text-center">
              <h3 className="text-xl font-bold mb-4">
                보안·인증 자료가 필요하신가요?
              </h3>
              <p className="text-slate-500 mb-6">
                구축 방식 비교표, 보안 인증 자료를 제공해 드립니다
              </p>
              <Button
                size="lg"
                variant="outline"
                onClick={openModal}
                className="w-full font-bold border-primary text-primary"
              >
                자료 요청
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
