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
            <h1 className="text-4xl md:text-6xl font-black mb-6 leading-tight">
              합리적인 가격으로<br />
              <span className="text-primary text-glow">비즈니스 가치를 높이세요</span>
            </h1>
            <p className="text-lg md:text-xl text-slate-300 mb-4 font-medium leading-relaxed">
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
            <span className={`text-lg font-bold transition-colors ${!isAnnual ? 'text-primary' : 'text-slate-400'}`}>월간</span>
            <div className="relative">
              <Switch 
                checked={isAnnual} 
                onCheckedChange={setIsAnnual}
                className="scale-125 data-[state=checked]:bg-primary"
              />
            </div>
            <span className={`text-lg font-bold transition-colors ${isAnnual ? 'text-primary' : 'text-slate-400'}`}>
              연간 <span className="text-sm font-black text-green-500 ml-1">(20% 할인)</span>
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
                  <h3 className={`text-2xl font-black mb-3 ${plan.popular ? 'text-primary' : 'text-slate-900'}`}>{plan.title}</h3>
                  <p className="text-slate-500 text-sm font-bold min-h-[40px]">{plan.desc}</p>
                </div>

                <div className="mb-10">
                  <div className="flex items-baseline gap-1">
                    <span className="text-4xl font-black text-slate-900">
                      {isAnnual ? plan.annualPrice : plan.monthlyPrice}원
                    </span>
                  </div>
                  <span className="text-slate-400 font-bold text-sm">/ {isAnnual ? '년' : '월'}</span>
                </div>

                <div className="flex-grow space-y-4 mb-10">
                  {plan.features.map((feature, idx) => (
                    <div key={idx} className="flex items-start gap-3">
                      <CheckCircle2 className="text-primary mt-1 shrink-0" size={18} />
                      <span className="text-slate-600 text-[15px] font-bold leading-tight">{feature}</span>
                    </div>
                  ))}
                </div>

                <div className="space-y-3">
                  <Button 
                    size="lg" 
                    onClick={openModal}
                    className={`w-full h-14 rounded-2xl font-black text-lg transition-all ${plan.popular ? 'bg-primary text-white hover:bg-primary/90 shadow-lg shadow-primary/20' : 'bg-slate-900 text-white hover:bg-slate-800'}`}
                  >
                    바로구매
                  </Button>
                  <Button 
                    size="lg" 
                    variant="outline" 
                    onClick={openModal}
                    className="w-full h-14 rounded-2xl font-black text-lg border-2 border-slate-200 hover:border-primary hover:text-primary transition-all"
                  >
                    문의하기
                  </Button>
                </div>
              </div>
            ))}
          </div>

          <p className="text-center mt-16 text-slate-500 font-bold">
            모든 플랜은 14일 무료 체험이 가능합니다. 신용카드 등록 없이 바로 시작하세요.
          </p>
        </div>
      </section>

      {/* Trust Section */}
      <section className="py-24 bg-slate-900 text-white">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h2 className="text-3xl md:text-5xl font-black mb-16">이미 많은 글로벌 기업이 함께하고 있습니다</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-12 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
            {/* Logos could go here */}
            {['SAMSUNG', 'LG', 'HYUNDAI', 'SK', 'NAVER', 'KAKAO'].map((logo, i) => (
              <div key={i} className="flex items-center justify-center font-black text-2xl tracking-tighter">
                {logo}
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
