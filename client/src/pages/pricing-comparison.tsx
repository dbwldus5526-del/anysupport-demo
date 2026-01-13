import { useState } from "react";
import { Button } from "@/components/ui/button";
import { useModal } from "@/context/ModalContext";
import {
  ArrowRight,
  CheckCircle2,
  Shield,
  Cloud,
  Server,
  Code,
  Building2,
  Factory,
  Landmark,
  Radio,
  Users,
  Lock,
  FileText,
  EyeOff,
  Award,
  HelpCircle,
  ChevronRight,
} from "lucide-react";
import { cn } from "@/lib/utils";

type QuizStep = 0 | 1 | 2 | 3 | 4 | 5;

interface QuizAnswer {
  environment?: "internal" | "external" | "hybrid";
  security?: "high" | "normal";
  dataLocation?: "cloud" | "internal";
  scale?: "small" | "medium" | "large";
  integration?: boolean;
}

export default function PricingComparison() {
  const { openModal } = useModal();
  const [quizStep, setQuizStep] = useState<QuizStep>(0);
  const [answers, setAnswers] = useState<QuizAnswer>({});
  const [showResult, setShowResult] = useState(false);
  const [activeIndustry, setActiveIndustry] = useState(0);

  const questions = [
    {
      question: "원격지원 접속 환경은 어떻게 되나요?",
      options: [
        { value: "internal", label: "내부망 (망분리 환경)", icon: Server },
        { value: "external", label: "외부망 (인터넷)", icon: Cloud },
        { value: "hybrid", label: "혼합 (내부+외부)", icon: Code },
      ],
      key: "environment" as const,
    },
    {
      question: "보안 요구 수준은 어느 정도인가요?",
      options: [
        { value: "high", label: "높음 (ISO/감사/접근통제 필수)", icon: Shield },
        { value: "normal", label: "보통 (일반적인 보안 수준)", icon: Lock },
      ],
      key: "security" as const,
    },
    {
      question: "데이터/로그 저장 위치 정책은?",
      options: [
        { value: "cloud", label: "클라우드 저장 가능", icon: Cloud },
        { value: "internal", label: "내부 저장만 허용", icon: Server },
      ],
      key: "dataLocation" as const,
    },
    {
      question: "운영 규모는 어느 정도인가요?",
      options: [
        { value: "small", label: "소규모 (상담원 10명 이하)", icon: Users },
        { value: "medium", label: "중규모 (10~50명)", icon: Users },
        { value: "large", label: "대규모 (50명 이상)", icon: Building2 },
      ],
      key: "scale" as const,
    },
    {
      question: "기존 시스템 연동이 필요한가요?",
      options: [
        { value: true, label: "예 (헬프데스크/SSO/SDK 연동)", icon: Code },
        { value: false, label: "아니오 (독립 운영)", icon: Server },
      ],
      key: "integration" as const,
    },
  ];

  const getRecommendation = () => {
    const { environment, security, dataLocation, integration } = answers;
    
    if (environment === "internal" || dataLocation === "internal" || security === "high") {
      return {
        type: "onprem",
        title: "구축형 (On-Premise)",
        reason: "망분리/내부 저장 정책/높은 보안 요구사항에 최적화",
        features: ["내부 인증 연동", "접근통제 정책", "감사 로그 내부 저장"],
      };
    }
    
    if (integration) {
      return {
        type: "sdk",
        title: "연동형 (ASP/SDK)",
        reason: "기존 시스템과의 원활한 통합 및 커스터마이징",
        features: ["SDK/API 연동", "화이트라벨링", "맞춤 개발 지원"],
      };
    }
    
    return {
      type: "saas",
      title: "SaaS (구독형)",
      reason: "빠른 도입과 낮은 운영 부담으로 즉시 시작 가능",
      features: ["즉시 도입", "자동 업데이트", "운영 부담 최소화"],
    };
  };

  const handleAnswer = (key: keyof QuizAnswer, value: any) => {
    setAnswers(prev => ({ ...prev, [key]: value }));
    if (quizStep < 4) {
      setQuizStep((quizStep + 1) as QuizStep);
    } else {
      setShowResult(true);
    }
  };

  const resetQuiz = () => {
    setQuizStep(0);
    setAnswers({});
    setShowResult(false);
  };

  const scrollToQuiz = () => {
    document.getElementById("quiz-section")?.scrollIntoView({ behavior: "smooth" });
  };

  const deploymentOptions = [
    {
      type: "saas",
      title: "SaaS (구독형)",
      tagline: "빠른 도입, 운영 부담 최소",
      icon: Cloud,
      color: "from-blue-500 to-blue-600",
      suitable: "중소기업, 스타트업, 빠른 도입이 필요한 조직",
      features: ["즉시 사용 가능", "자동 업데이트/유지보수", "초기 비용 최소화"],
    },
    {
      type: "onprem",
      title: "구축형 (On-Premise)",
      tagline: "내부망/보안정책 최우선",
      icon: Server,
      color: "from-slate-700 to-slate-800",
      suitable: "금융, 공공기관, 대기업, 망분리 환경",
      features: ["내부망 완벽 지원", "데이터 내부 저장", "최고 수준 보안"],
    },
    {
      type: "sdk",
      title: "연동형 (ASP/SDK)",
      tagline: "기존 서비스에 내장",
      icon: Code,
      color: "from-primary to-primary/80",
      suitable: "플랫폼 사업자, 자체 서비스 보유 기업",
      features: ["SDK/API 제공", "화이트라벨 가능", "완전한 커스터마이징"],
    },
  ];

  const comparisonData = [
    { label: "도입 속도", saas: "빠름 (즉시)", onprem: "중간 (2-4주)", sdk: "맞춤 (프로젝트)" },
    { label: "보안 정책 적합", saas: "표준", onprem: "최고", sdk: "맞춤" },
    { label: "데이터/로그 저장", saas: "클라우드", onprem: "내부 서버", sdk: "선택 가능" },
    { label: "망분리/내부망", saas: "제약 있음", onprem: "완벽 지원", sdk: "구성에 따라" },
    { label: "커스터마이징", saas: "보통", onprem: "높음", sdk: "최고" },
    { label: "운영/유지보수", saas: "낮음 (자동)", onprem: "중간~높음", sdk: "중간" },
    { label: "시스템 연동", saas: "보통", onprem: "보통", sdk: "최고" },
    { label: "권장 대상", saas: "중소~일반", onprem: "금융/공공", sdk: "플랫폼 사업자" },
    { label: "비용 구조", saas: "월 구독료", onprem: "초기+유지비", sdk: "프로젝트+유지" },
  ];

  const securityFeatures = [
    { icon: Lock, title: "접근 통제", desc: "역할/권한 기반 접근 관리" },
    { icon: FileText, title: "감사 로그", desc: "모든 활동 기록 및 리포팅" },
    { icon: EyeOff, title: "화면 차단", desc: "민감 정보 부분 차단 기술" },
    { icon: Award, title: "국제 인증", desc: "ISO 27001 / GS인증 1등급" },
    { icon: Shield, title: "암호화 통신", desc: "종단간 암호화 적용" },
    { icon: Users, title: "세션 관리", desc: "실시간 세션 모니터링" },
  ];

  const industries = [
    {
      icon: Landmark,
      title: "금융/공공",
      challenge: "망분리 + 감사 + 내부 저장 필수",
      recommendation: "구축형 (On-Premise)",
      reason: "엄격한 보안 규정과 감사 요구사항 충족",
    },
    {
      icon: Factory,
      title: "제조/건설",
      challenge: "현장 영상/속도/운영 효율",
      recommendation: "SaaS 또는 혼합",
      reason: "빠른 도입과 현장 대응력 확보",
    },
    {
      icon: Radio,
      title: "통신/대기업",
      challenge: "규모 + 관리 + 기존 시스템 연동",
      recommendation: "연동형 또는 혼합",
      reason: "기존 인프라와의 완벽한 통합",
    },
    {
      icon: Building2,
      title: "플랫폼/서비스",
      challenge: "자체 브랜드 + 고객 서비스 내장",
      recommendation: "연동형 (ASP/SDK)",
      reason: "화이트라벨로 자체 서비스화 가능",
    },
  ];

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMtOS45NDEgMC0xOCA4LjA1OS0xOCAxOHM4LjA1OSAxOCAxOCAxOCAxOC04LjA1OSAxOC0xOC04LjA1OS0xOC0xOC0xOHptMCAzMmMtNy43MzIgMC0xNC02LjI2OC0xNC0xNHM2LjI2OC0xNCAxNC0xNCAxNCA2LjI2OCAxNCAxNC02LjI2OCAxNC0xNCAxNHoiIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iLjAyIi8+PC9nPjwvc3ZnPg==')] opacity-30" />
        
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/20 text-primary border border-primary/30 mb-6">
              <HelpCircle size={16} />
              <span className="text-xs font-bold tracking-wider uppercase">도입 방식 가이드</span>
            </div>
            <h1 className="text-3xl md:text-5xl font-black mb-6 leading-tight">
              나에게 딱 맞는<br />
              <span className="text-primary">도입 방식</span>을 선택하세요
            </h1>
            <p className="text-lg md:text-xl text-slate-300 mb-10 leading-relaxed">
              보안정책 / 망분리 / 운영 방식에 따라<br className="md:hidden" />
              SaaS · 구축형 · 연동형 중 최적안을 안내합니다.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                onClick={scrollToQuiz}
                className="h-14 px-8 text-lg font-bold shadow-xl shadow-primary/20"
              >
                도입 방식 진단 시작 <ArrowRight className="ml-2" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                onClick={openModal}
                className="h-14 px-8 text-lg font-bold border-white/30 text-white hover:bg-white/10"
              >
                도입 상담 문의
              </Button>
            </div>
          </div>
        </div>
      </section>
      {/* Quiz Section */}
      <section id="quiz-section" className="py-24 bg-slate-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary font-bold mb-4 text-[16px]">1분 완성</div>
            <h2 className="text-2xl md:text-4xl font-bold mb-4 text-slate-900">
              도입 방식 진단
            </h2>
            <p className="text-[#666] text-lg max-w-2xl mx-auto font-normal">
              5가지 질문으로 우리 조직에 맞는 최적의 도입 방식을 찾아보세요.
            </p>
          </div>

          <div className="max-w-3xl mx-auto">
            {!showResult ? (
              <div className="bg-white rounded-3xl shadow-xl p-8 md:p-12">
                {/* Progress */}
                <div className="flex items-center gap-2 mb-8">
                  {[0, 1, 2, 3, 4].map((step) => (
                    <div
                      key={step}
                      className={cn(
                        "h-2 flex-1 rounded-full transition-all",
                        step <= quizStep ? "bg-primary" : "bg-slate-200"
                      )}
                    />
                  ))}
                </div>

                <div className="mb-8">
                  <span className="text-primary font-bold text-sm">
                    질문 {quizStep + 1} / 5
                  </span>
                  <h3 className="text-xl md:text-2xl font-bold text-slate-900 mt-2">
                    {questions[quizStep].question}
                  </h3>
                </div>

                <div className="grid gap-4">
                  {questions[quizStep].options.map((option) => (
                    <button
                      key={String(option.value)}
                      onClick={() => handleAnswer(questions[quizStep].key, option.value)}
                      className="flex items-center gap-4 p-5 rounded-xl border-2 border-slate-200 hover:border-primary hover:bg-primary/5 transition-all text-left group"
                      data-testid={`quiz-option-${option.value}`}
                    >
                      <div className="w-12 h-12 rounded-xl bg-slate-100 group-hover:bg-primary/10 flex items-center justify-center shrink-0 transition-colors">
                        <option.icon size={24} className="text-slate-600 group-hover:text-primary" />
                      </div>
                      <span className="text-lg font-medium text-slate-700 group-hover:text-primary">
                        {option.label}
                      </span>
                      <ChevronRight className="ml-auto text-slate-400 group-hover:text-primary" />
                    </button>
                  ))}
                </div>
              </div>
            ) : (
              <div className="bg-white rounded-3xl shadow-xl p-8 md:p-12">
                <div className="text-center mb-8">
                  <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                    <CheckCircle2 size={40} className="text-primary" />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-2">
                    진단 결과
                  </h3>
                </div>

                <div className="bg-gradient-to-br from-primary to-primary/80 rounded-2xl p-6 md:p-8 text-white mb-6">
                  <div className="text-primary-foreground/70 font-medium mb-2 text-[14px] sm:text-[16px] lg:text-[18px]">
                    추천 도입 방식
                  </div>
                  <h4 className="text-2xl md:text-3xl font-black mb-4">
                    {getRecommendation().title}
                  </h4>
                  <p className="text-white/80 mb-6 text-[14px] sm:text-[16px] lg:text-[18px]">
                    {getRecommendation().reason}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {getRecommendation().features.map((feature, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 bg-white/20 rounded-full font-medium text-[14px] sm:text-[16px] lg:text-[18px]"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-4">
                  <Button
                    size="lg"
                    onClick={openModal}
                    className="flex-1 h-12 font-bold text-[14px] sm:text-[16px] lg:text-[18px]"
                  >
                    상담 요청하기
                  </Button>
                  <Button
                    size="lg"
                    variant="outline"
                    onClick={resetQuiz}
                    className="flex-1 h-12 font-bold text-[14px] sm:text-[16px] lg:text-[18px] text-[#333]"
                  >
                    다시 진단하기
                  </Button>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>
      {/* 3 Options Cards */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <h2 className="text-2xl md:text-4xl font-bold mb-4 text-slate-900">
              한눈에 보는 3가지 도입 옵션
            </h2>
            <p className="text-[#666] text-lg max-w-2xl mx-auto font-normal">
              조직의 환경과 요구사항에 맞는 최적의 방식을 선택하세요.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {deploymentOptions.map((option, i) => (
              <div
                key={i}
                className="group relative rounded-2xl border border-slate-200 bg-white hover:shadow-xl transition-all overflow-hidden"
              >
                <div className={cn("h-2 bg-gradient-to-r", option.color)} />
                <div className="p-8">
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br flex items-center justify-center mb-6 from-slate-700 to-slate-800 text-[#1868fd]">
                    <option.icon size={28} className="text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-2">
                    {option.title}
                  </h3>
                  <p className="text-primary font-medium text-[14px] sm:text-[16px] lg:text-[18px] mb-4">
                    {option.tagline}
                  </p>
                  <p className="text-[#666] text-[14px] sm:text-[16px] lg:text-[18px] mb-6 min-h-[56px]">
                    <span className="font-semibold text-slate-700">적합 대상:</span> {option.suitable}
                  </p>
                  <ul className="space-y-3 mb-6">
                    {option.features.map((feature, fi) => (
                      <li key={fi} className="flex items-center gap-2 text-[14px] sm:text-[16px] lg:text-[18px] text-[#666]">
                        <CheckCircle2 size={16} className="text-primary shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <div className="flex gap-3">
                    <Button variant="outline" size="sm" className="flex-1 text-[14px] sm:text-[16px] lg:text-[18px] text-[#333] pt-[10px] pb-[10px]" onClick={openModal}>
                      자세히
                    </Button>
                    <Button size="sm" className="flex-1 text-[14px] sm:text-[16px] lg:text-[18px] pt-[10px] pb-[10px]" onClick={openModal}>
                      상담
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* Comparison Table */}
      <section className="py-24 bg-slate-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <h2 className="text-2xl md:text-4xl font-bold mb-4 text-slate-900">
              도입 방식 상세 비교
            </h2>
            <p className="text-[#666] text-lg max-w-2xl mx-auto font-normal">
              각 도입 방식의 주요 특징을 한눈에 비교해 보세요.
            </p>
          </div>

          <div className="max-w-5xl mx-auto overflow-x-auto">
            <table className="w-full bg-white rounded-2xl shadow-lg overflow-hidden">
              <thead>
                <tr className="bg-slate-900 text-white">
                  <th className="px-6 py-4 text-left font-bold text-[14px] sm:text-[16px] lg:text-[18px]">구분</th>
                  <th className="px-6 py-4 text-center font-bold">
                    <div className="flex flex-col items-center gap-1">
                      <Cloud size={20} />
                      <span className="text-[14px] sm:text-[16px] lg:text-[18px]">SaaS</span>
                    </div>
                  </th>
                  <th className="px-6 py-4 text-center font-bold bg-primary">
                    <div className="flex flex-col items-center gap-1">
                      <Server size={20} />
                      <span className="text-[14px] sm:text-[16px] lg:text-[18px]">구축형</span>
                      <span className="text-[10px] bg-white/20 px-2 py-0.5 rounded-full">추천</span>
                    </div>
                  </th>
                  <th className="px-6 py-4 text-center font-bold">
                    <div className="flex flex-col items-center gap-1">
                      <Code size={20} />
                      <span className="text-[14px] sm:text-[16px] lg:text-[18px]">연동형</span>
                    </div>
                  </th>
                </tr>
              </thead>
              <tbody>
                {comparisonData.map((row, i) => (
                  <tr key={i} className={cn("border-b border-slate-100", i % 2 === 0 && "bg-slate-50/50")}>
                    <td className="px-6 py-4 font-semibold text-[14px] sm:text-[16px] lg:text-[18px] text-[#333]">{row.label}</td>
                    <td className="px-6 py-4 text-center text-[14px] sm:text-[16px] lg:text-[18px] text-[#666]">{row.saas}</td>
                    <td className="px-6 py-4 text-center font-medium bg-primary/5 text-[14px] sm:text-[16px] lg:text-[18px] text-[#333]">{row.onprem}</td>
                    <td className="px-6 py-4 text-center text-[14px] sm:text-[16px] lg:text-[18px] text-[#666]">{row.sdk}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>
      {/* Security Features */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <h2 className="text-2xl md:text-4xl font-bold mb-4 text-slate-900">
              공통 제공 보안 체계
            </h2>
            <p className="text-[#666] text-lg max-w-2xl mx-auto font-normal">
              어떤 도입 방식을 선택하든 동일하게 제공되는 보안 기능
            </p>
          </div>

          <div className="grid md:grid-cols-3 lg:grid-cols-6 gap-6">
            {securityFeatures.map((feature, i) => (
              <div key={i} className="text-center p-6 rounded-2xl bg-slate-50 hover:bg-primary/5 transition-colors">
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <feature.icon size={24} className="text-primary" />
                </div>
                <h4 className="font-bold text-slate-900 mb-1 text-[18px]">{feature.title}</h4>
                <p className="text-lg text-[#666] font-normal">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* Industry Recommendations */}
      <section className="py-24 bg-slate-900 text-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <h2 className="text-2xl md:text-4xl font-bold mb-4">
              업종별 추천 시나리오
            </h2>
            <p className="text-slate-400 text-lg max-w-2xl mx-auto">
              귀사의 업종에 맞는 최적의 도입 방식을 확인하세요.
            </p>
          </div>

          {/* Industry Tabs */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {industries.map((industry, i) => (
              <button
                key={i}
                onClick={() => setActiveIndustry(i)}
                className="flex items-center gap-2 px-6 py-3 rounded-full font-medium transition-all bg-white/10 text-white/70 hover:bg-white/20 text-[18px]"
              >
                <industry.icon size={18} />
                {industry.title}
              </button>
            ))}
          </div>

          {/* Active Industry Card */}
          <div className="max-w-2xl mx-auto">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
              <div className="flex items-center gap-4 mb-6">
                {(() => {
                  const Icon = industries[activeIndustry].icon;
                  return (
                    <div className="w-16 h-16 rounded-xl bg-primary flex items-center justify-center">
                      <Icon size={32} className="text-white" />
                    </div>
                  );
                })()}
                <div>
                  <h3 className="text-2xl font-bold">{industries[activeIndustry].title}</h3>
                  <p className="text-white/60 text-[14px] sm:text-[16px] lg:text-[18px]">{industries[activeIndustry].challenge}</p>
                </div>
              </div>
              
              <div className="bg-white/5 rounded-xl p-6 mb-6">
                <div className="font-bold mb-2 text-[14px] sm:text-[16px] lg:text-[18px] text-[#a8c6ff]">추천 도입 방식</div>
                <div className="text-xl font-bold">{industries[activeIndustry].recommendation}</div>
              </div>
              
              <p className="mb-6 text-[14px] sm:text-[16px] lg:text-[18px] text-[#ffffff]">
                <span className="font-bold text-[14px] sm:text-[16px] lg:text-[18px] text-[#a8c6ff]">왜?</span> {industries[activeIndustry].reason}
              </p>
              
              <Button onClick={openModal} className="w-full h-12 font-bold text-[14px] sm:text-[16px] lg:text-[18px]">
                맞춤 상담 받기 <ArrowRight className="ml-2" />
              </Button>
            </div>
          </div>
        </div>
      </section>
      {/* CTA Section */}
      <section className="py-20 bg-primary text-white">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h2 className="text-2xl md:text-4xl font-bold mb-6">
            아직 결정이 어려우신가요?
          </h2>
          <p className="text-white/80 text-lg mb-10 max-w-2xl mx-auto">
            전문 컨설턴트가 귀사의 환경을 분석하고 최적의 도입 방식을 제안해 드립니다.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              variant="secondary"
              onClick={openModal}
              className="h-12 px-6 sm:h-14 sm:px-10 text-base sm:text-lg font-bold"
            >
              무료 컨설팅 신청
            </Button>
            <Button
              size="lg"
              onClick={scrollToQuiz}
              className="h-12 px-6 sm:h-14 sm:px-10 text-base sm:text-lg font-bold hover:bg-white/30 border-2 border-white/30 bg-[#ffffff21]"
            >
              다시 진단하기
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
