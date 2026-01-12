import { useState } from "react";
import { Button } from "@/components/ui/button";
import { useModal } from "@/context/ModalContext";
import { Switch } from "@/components/ui/switch";
import { 
  CheckCircle2, 
  ArrowRight,
  ShieldCheck,
  Zap,
  Clock,
  Globe,
  Users,
  FileText,
  Video,
  Smartphone,
  Monitor
} from "lucide-react";
import pricingHeroImg from "@assets/generated_images/modern_b2b_saas_pricing_page_hero_background.png";
import LogoCarousel from "@/components/sections/LogoCarousel";

export default function Pricing() {
  const { openModal } = useModal();
  const [isAnnual, setIsAnnual] = useState(false);

  const pricingData = [
    {
      title: "AnySupport Basic",
      desc: "정말 필요한 기능만 최소한의 가격으로",
      monthlyPrice: "121,000",
      annualPrice: "1,161,600",
      features: [
        "화면공유 및 원격제어",
        "양방향 파일전송 (3GB)",
        "전용 접속 페이지 제공",
        "상담원 1명이 고객3명 동시지원"
      ]
    },
    {
      title: "AnySupport Premium",
      desc: "최다기능의 강력한 구성을 부재한 사용자는",
      monthlyPrice: "165,000",
      annualPrice: "1,584,000",
      features: [
        "BASIC의 모든기능",
        "상담원 기능별 출석 제공",
        "고급관리자 기능 제공",
        "상담원 1명이 고객10명 동시지원"
      ]
    },
    {
      title: "AnySupport Mobile",
      desc: "Premium 모든기능에 모바일 제어까지",
      monthlyPrice: "363,000",
      annualPrice: "3,484,800",
      popular: true,
      features: [
        "PREMIUM의 모든기능",
        "Android, iOS 실시간 지원",
        "최신 네트워크 지원 (3G/4G/5G/Wi-Fi)",
        "실시간 제빙 기능"
      ]
    },
    {
      title: "AnySupport Video",
      desc: "Mobile 모든기능에 화상상담까지",
      monthlyPrice: "484,000",
      annualPrice: "4,646,400",
      features: [
        "MOBILE의 모든기능",
        "실시간 화상상담",
        "양방향 영상/음성 통화",
        "화면 주석 및 협업 기능"
      ]
    }
  ];

  return (
    <div className="flex flex-col min-h-screen bg-slate-50/50">
      {/* Hero Section - Matching Product Header Style */}
      <section className="relative pt-32 pb-20 overflow-hidden bg-slate-900 text-white">
        <div className="absolute inset-0 z-0">
          <img 
            src={pricingHeroImg} 
            alt="Pricing Hero" 
            className="w-full h-full object-cover opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-900/80 to-transparent" />
        </div>
        
        <div className="container mx-auto px-4 md:px-6 relative z-10 text-center">
          <div className="max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/20 text-primary border border-primary/30 mb-6">
              <span className="font-bold tracking-wider text-[#ffffff] text-[16px]">애니서포트 구독형 [SaaS]</span>
            </div>
            <h1 className="text-3xl md:text-6xl font-black mb-6 leading-tight">
              합리적인 가격으로<br />
              <span className="text-primary text-glow">비즈니스 가치를 높이세요</span>
            </h1>
            <p className="text-base md:text-xl text-slate-300 mb-4 font-medium leading-relaxed">
              귀사의 규모와 필요에 맞는 최적의 플랜을 선택하세요.<br className="hidden md:block" />
              모든 플랜은 14일 무료 체험이 가능합니다.
            </p>
          </div>
        </div>
      </section>
      {/* Pricing Toggle */}
      <section className="py-12 bg-white border-b border-slate-100">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-center gap-6">
            <span className="text-lg transition-colors font-semibold text-[#333]">월간</span>
            <div className="relative">
              <Switch 
                checked={isAnnual} 
                onCheckedChange={setIsAnnual}
                className="scale-125 data-[state=checked]:bg-primary"
              />
            </div>
            <span className={`text-lg font-bold transition-colors ${isAnnual ? 'text-primary' : 'text-slate-400'}`}>
              연간 <span className="font-black text-green-500 ml-1 text-[18px]">(20% 할인)</span>
            </span>
          </div>
        </div>
      </section>
      {/* Pricing Cards */}
      <section className="py-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-[1400px] mx-auto">
            {pricingData.map((plan, i) => (
              <div 
                key={i} 
                className={`relative flex flex-col p-10 rounded-[2.5rem] bg-white border-2 transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 ${plan.popular ? 'border-primary shadow-2xl shadow-primary/10' : 'border-slate-100'}`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-amber-400 text-white text-xs font-black px-4 py-1.5 rounded-full shadow-lg z-20">
                    인기
                  </div>
                )}
                
                <div className="mb-10">
                  <h3 className="font-black mb-3 text-[26px] text-[#333]">{plan.title}</h3>
                  <p className="min-h-[40px] font-normal text-[18px] text-[#666]">{plan.desc}</p>
                </div>

                <div className="mb-10">
                  <div className="flex items-baseline gap-1">
                    <span className="text-4xl text-[#333] font-bold">
                      {isAnnual ? plan.annualPrice : plan.monthlyPrice}원
                    </span>
                  </div>
                  <span className="text-[#666] font-normal text-[18px]">/ {isAnnual ? '년' : '월'}</span>
                </div>

                <div className="flex-grow space-y-4 mb-10">
                  {plan.features.map((feature, idx) => (
                    <div key={idx} className="flex items-start gap-3">
                      <CheckCircle2 className="text-primary mt-1 shrink-0" size={18} />
                      <span className="font-normal text-[18px] text-[#666]">{feature}</span>
                    </div>
                  ))}
                </div>

                <div className="space-y-3">
                  <Button 
                    size="lg" 
                    onClick={openModal}
                    className="inline-flex items-center justify-center gap-2 whitespace-nowrap focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 hover-elevate active-elevate-2 border border-primary-border min-h-10 px-8 w-full h-14 rounded-2xl text-lg transition-all bg-slate-900 text-white hover:bg-slate-800 font-bold"
                  >
                    바로구매
                  </Button>
                  <Button 
                    size="lg" 
                    variant="outline" 
                    onClick={openModal}
                    className="w-full h-14 rounded-2xl font-bold text-lg border-2 border-slate-200 hover:border-primary hover:text-primary transition-all"
                  >
                    문의하기
                  </Button>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-16">
            <p className="text-slate-500 mb-6 font-normal text-[18px]">
              모든 플랜은 14일 무료 체험이 가능합니다. 신용카드 등록 없이 바로 시작하세요.
            </p>
            <Button 
              size="lg" 
              onClick={openModal}
              className="h-14 px-10 text-lg font-bold shadow-xl shadow-primary/20"
            >
              무료체험 시작하기 <ArrowRight className="ml-2" />
            </Button>
          </div>
        </div>
      </section>
      {/* Comparison Table Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <h2 className="text-[25px] md:text-4xl font-black mb-4 text-slate-900">제품별 상세 기능 비교</h2>
            <p className="text-slate-500 text-[14px] md:text-lg font-medium">애니서포트 클라우드형 제품의 기능을 카테고리별로 확인해 보세요.</p>
          </div>

          <div className="max-w-[1200px] mx-auto space-y-12">
            {[
              {
                id: 1,
                title: "원격제어 & 연결",
                subtitle: "기본적으로 얼마나 잘 원격으로 붙고 제어되나요?",
                rows: [
                  { name: "마우스 / 키보드 제어", basic: true, premium: true, mobile: true, video: true },
                  { name: "멀티모니터 지원", basic: true, premium: true, mobile: true, video: true },
                  { name: "화면 제어", basic: true, premium: true, mobile: true, video: true },
                  { name: "화질 조절", basic: true, premium: true, mobile: true, video: true },
                  { name: "블랙스크린", basic: true, premium: true, mobile: true, video: true },
                  { name: "안전모드 재부팅 후 자동 재접속", basic: true, premium: true, mobile: true, video: true },
                  { name: "자동 재접속", basic: true, premium: true, mobile: true, video: true },
                  { name: "상담원 화면 전송", basic: true, premium: true, mobile: true, video: true },
                ]
              },
              {
                id: 2,
                title: "커뮤니케이션 & 협업",
                subtitle: "고객과 어떻게 소통하고 설명하나요?",
                rows: [
                  { name: "채팅", basic: true, premium: true, mobile: true, video: true },
                  { name: "음성 채팅", basic: true, premium: true, mobile: true, video: true },
                  { name: "실시간 화상 상담", basic: false, premium: false, mobile: false, video: true },
                  { name: "양방향 그리기", basic: true, premium: true, mobile: true, video: true },
                  { name: "레이저 포인트 기능", basic: true, premium: true, mobile: true, video: true },
                  { name: "URL 전송", basic: true, premium: true, mobile: true, video: true },
                  { name: "상담원 초대 / 연결", basic: true, premium: true, mobile: true, video: true },
                ]
              },
              {
                id: 3,
                title: "파일 & 데이터 전송",
                subtitle: "파일은 어떻게 주고받나요?",
                rows: [
                  { name: "양방향 파일 전송", basic: true, premium: true, mobile: true, video: true },
                  { name: "Drag & Drop", basic: true, premium: true, mobile: true, video: true },
                  { name: "Ctrl+C / Ctrl+V 파일 전송", basic: true, premium: true, mobile: true, video: true },
                  { name: "파일 보내기", basic: true, premium: true, mobile: true, video: true },
                  { name: "파일 전송 사이즈", basic: "무제한", premium: "무제한", mobile: "무제한", video: "무제한" },
                  { name: "클립보드", basic: true, premium: true, mobile: true, video: true },
                ]
              },
              {
                id: 4,
                title: "모바일 & 멀티 디바이스",
                subtitle: "PC 말고 모바일도 되나요?",
                rows: [
                  { name: "모바일 제어", basic: false, premium: false, mobile: true, video: true },
                  { name: "상담원 화면 전송(모바일)", basic: false, premium: false, mobile: true, video: true },
                  { name: "화면 캡쳐(모바일 포함)", basic: true, premium: true, mobile: true, video: true },
                ]
              },
              {
                id: 5,
                title: "상담 관리 & 운영",
                subtitle: "상담사/관리자는 뭘 관리할 수 있나요?",
                rows: [
                  { name: "세션 수 관리", basic: "3개", premium: "10개", mobile: "10개", video: "10개" },
                  { name: "상담원 지정성", basic: true, premium: true, mobile: true, video: true },
                  { name: "사용 통계 보기", basic: true, premium: true, mobile: true, video: true },
                  { name: "고객 페이지 로고 변경", basic: true, premium: true, mobile: true, video: true },
                ]
              },
              {
                id: 6,
                title: "기록 · 진단 · 시스템",
                subtitle: "문제 분석과 기록은 어떻게 하나요?",
                rows: [
                  { name: "화면 녹화", basic: true, premium: true, mobile: true, video: true },
                  { name: "화면 캡쳐", basic: true, premium: true, mobile: true, video: true },
                  { name: "시스템 / 프로세스 정보 보기", basic: true, premium: true, mobile: true, video: true },
                ]
              }
            ].map((category) => (
              <div key={category.id} className="overflow-hidden rounded-3xl border border-slate-200 shadow-sm">
                <div className="bg-primary p-6 text-white">
                  <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
                    <div>
                      <div className="flex items-center gap-3 mb-1">
                        <span className="flex items-center justify-center w-6 h-6 rounded-full bg-white text-primary text-xs font-black">
                          {category.id}
                        </span>
                        <h3 className="text-xl font-medium">{category.title}</h3>
                      </div>
                      <p className="text-white/80 text-[18px] font-normal">{category.subtitle}</p>
                    </div>
                    <div className="grid-cols-4 gap-4 text-center min-w-[400px] hidden md:grid text-[19px] font-light">
                      {["BASIC", "PREMIUM", "MOBILE", "Video"].map((name) => (
                        <span key={name} className="tracking-widest opacity-80 text-[14px] font-normal">{name}</span>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="bg-white">
                  {category.rows.map((row, idx) => (
                    <div key={idx} className={`grid grid-cols-1 md:grid-cols-[1fr_400px] items-center border-b border-slate-100 last:border-0 hover:bg-slate-50 transition-colors`}>
                      <div className="p-5 pl-8 text-[18px] font-normal text-[#333]">
                        {row.name}
                      </div>
                      <div className="grid grid-cols-4 gap-4 p-5 text-center bg-slate-50/30 md:bg-transparent">
                        {[row.basic, row.premium, row.mobile, row.video].map((val, i) => (
                          <div key={i} className="flex justify-center items-center">
                            {typeof val === "boolean" ? (
                              val ? (
                                <CheckCircle2 className="text-primary" size={20} />
                              ) : (
                                <span className="text-slate-300 font-bold">-</span>
                              )
                            ) : (
                              <span className="text-[#2563eb] text-[18px] font-bold">{val}</span>
                            )}
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* FAQ Section */}
      <section className="py-24 bg-slate-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <span className="text-primary font-bold tracking-widest uppercase mb-2 block text-[18px]">FAQ</span>
            <h2 className="text-[25px] md:text-5xl font-black mb-4 text-slate-900">무엇을 도와드릴까요?</h2>
            <p className="text-slate-500 text-[14px] md:text-lg font-medium">자주 묻는 질문에 대한 답변을 확인하세요</p>
          </div>

          <div className="max-w-4xl mx-auto space-y-4">
            {[
              {
                q: "1. 애니서포트 상담원 1계정 가격은 얼마 입니까?",
                a: (
                  <div className="space-y-4">
                    <p>애니서포트 서비스제품(SaaS)은 1년 선납 기준으로 아래와 같습니다.</p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="bg-white p-4 rounded-xl border border-slate-200">
                        <p className="font-bold mb-2 text-[#333] text-[18px]">[PC 에디션]</p>
                        <p className="text-[18px] text-[#333] font-normal">Basic: 100만원 (VAT 별도)</p>
                        <p className="text-[#333] text-[18px] font-normal">Premium: 132만원 (VAT 별도)</p>
                      </div>
                      <div className="bg-white p-4 rounded-xl border border-slate-200">
                        <p className="font-bold mb-2 text-[#333] text-[18px]">[Mobile 에디션]</p>
                        <p className="text-[#333] font-normal text-[18px]">Android/iOS: 290만원 (VAT 별도)</p>
                      </div>
                      <div className="bg-white p-4 rounded-xl border border-slate-200">
                        <p className="font-bold mb-2 text-[#333] text-[18px]">[Video 에디션]</p>
                        <p className="text-[#333] font-normal text-[18px]">영상상담: 387만원 (VAT 별도)</p>
                      </div>
                    </div>
                    <div className="bg-primary/5 p-4 rounded-xl border border-primary/10">
                      <p className="font-bold text-primary mb-2 text-sm">[참고]</p>
                      <ul className="text-xs text-slate-600 space-y-1 list-disc pl-4">
                        <li className="text-[#333] text-[16px]">1계정당 동시 접속자 수는 BASIC(3명), PREMIUM/MOBILE/VIDEO(10명)입니다.</li>
                        <li className="text-[#333] text-[16px]">상기 금액은 1년 선납 기준이며, 월 단위 결제는 위 표의 월 금액을 참고해주세요.</li>
                      </ul>
                    </div>
                  </div>
                )
              },
              {
                q: "2. 무료 체험은 어떻게 신청하나요?",
                a: "홈페이지 우측 상단의 \"무료 체험\" 버튼을 클릭하여 간단한 정보 입력 후 즉시 시작할 수 있습니다. 신용카드 등록 없이 14일간 모든 기능을 체험하실 수 있습니다."
              },
              {
                q: "3. 플랜 변경은 언제든지 가능한가요?",
                a: "네, 언제든지 플랜 변경이 가능합니다. 업그레이드 시 즉시 적용되며, 다운그레이드 시 다음 결제 주기부터 적용됩니다."
              },
              {
                q: "4. 환불 정책은 어떻게 되나요?",
                a: "서비스 이용 후 7일 이내에는 100% 환불이 가능합니다. 그 이후에는 남은 기간에 대해 일할 계산하여 환불해드립니다."
              },
              {
                q: "5. 동시 접속자 수가 부족할 경우 어떻게 하나요?",
                a: "상위 플랜으로 업그레이드하시거나, 추가 라이선스를 구매하실 수 있습니다. 자세한 사항은 고객센터로 문의해주세요."
              },
              {
                q: "6. 결제 방법은 어떤 것들이 있나요?",
                a: "신용카드, 계좌이체, 법인카드 결제가 가능합니다. 연간 결제 시 세금계산서도 발행해드립니다."
              }
            ].map((item, i) => (
              <div key={i} className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                <button 
                  className="w-full px-8 py-6 text-left flex items-center justify-between group text-[#333]"
                  onClick={(e) => {
                    const content = e.currentTarget.nextElementSibling;
                    const icon = e.currentTarget.querySelector('.chevron');
                    if (content) {
                      content.classList.toggle('hidden');
                      icon?.classList.toggle('rotate-180');
                    }
                  }}
                >
                  <span className="text-lg text-slate-900 group-hover:text-primary transition-colors font-medium">{item.q}</span>
                  <div className="chevron transition-transform duration-300">
                    <ArrowRight className="text-slate-400 rotate-90" size={20} />
                  </div>
                </button>
                <div className="px-8 pb-8 text-slate-600 font-medium leading-relaxed hidden border-t border-slate-50 pt-6">
                  {item.a}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* Trust Section */}
      <section className="py-24 text-white overflow-hidden bg-[#ffffff]">
        <div className="container mx-auto px-4 md:px-6 text-center mb-12">
          <h2 className="md:text-5xl text-center text-[36px] font-bold text-[#333]">이미 많은 글로벌 기업이 함께하고 있습니다</h2>
        </div>
        <LogoCarousel />
      </section>
    </div>
  );
}
