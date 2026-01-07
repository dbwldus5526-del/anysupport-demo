import { useState, useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { useModal } from "@/context/ModalContext";
import { 
  ArrowRight, 
  CheckCircle2, 
  ShieldCheck, 
  Zap, 
  Laptop, 
  Smartphone, 
  Headphones, 
  Monitor, 
  Video, 
  Clock, 
  Users, 
  Lock, 
  BarChart3, 
  Globe, 
  MessageSquare,
  FileText,
  Activity,
  Building2,
  Database
} from "lucide-react";
import { motion, useInView } from "framer-motion";
import heroImage from "@assets/hero1_1767765900169.png";
import pcSupportImg from "@assets/generated_images/pc_remote_support_professional_image.png";
import mobileSupportImg from "@assets/generated_images/mobile_remote_support_app_interface.png";
import videoSupportImg from "@assets/generated_images/video-based_remote_support_concept.png";
import companyLogos from "@assets/기업로고new_1767749031414.png";
import sessionImg from "@assets/관리자페이지__원격지원_세션관리_1767774669198.png";
import customerImg from "@assets/howto-normal-01_복사본_1767775321934.png";
import { Link, useLocation } from "wouter";

function Counter({ value, duration = 2, suffix = "" }: { value: string, duration?: number, suffix?: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  
  const numericValue = parseFloat(value.replace(/[^0-9.]/g, ''));
  const isDecimal = value.includes('.');
  const decimalPlaces = isDecimal ? value.split('.')[1].length : 0;

  useEffect(() => {
    if (isInView) {
      let start = 0;
      const end = numericValue;
      const totalFrames = duration * 60;
      let frame = 0;

      const counter = setInterval(() => {
        frame++;
        const progress = frame / totalFrames;
        const currentCount = end * (1 - Math.pow(1 - progress, 3)); 
        
        setCount(currentCount);

        if (frame === totalFrames) {
          clearInterval(counter);
          setCount(end);
        }
      }, 1000 / 60);

      return () => clearInterval(counter);
    }
  }, [isInView, numericValue, duration]);

  const displayValue = isDecimal 
    ? count.toFixed(decimalPlaces) 
    : Math.floor(count).toLocaleString();

  return (
    <div ref={ref} className="font-black mb-1 md:mb-2 text-[32px] sm:text-[38px] md:text-[45px] text-[#ffffff]">
      {displayValue}{suffix}
    </div>
  );
}

// Custom Icon Components based on the requested design style
const DesignIcon = ({ type }: { type: string }) => {
  const baseClasses = "w-12 h-12 relative flex items-center justify-center";
  
  if (type === "chat") {
    return (
      <div className={baseClasses}>
        <div className="absolute inset-0 bg-blue-50 rounded-xl" />
        <div className="absolute bottom-2 right-2 w-6 h-6 bg-blue-500 rounded-lg flex items-center justify-center shadow-sm">
          <div className="w-3 h-0.5 bg-white rounded-full" />
        </div>
        <MessageSquare className="text-blue-600 relative z-10" size={24} />
      </div>
    );
  }
  
  if (type === "control") {
    return (
      <div className={baseClasses}>
        <div className="absolute inset-0 bg-sky-50 rounded-xl" />
        <div className="absolute top-1 right-1 w-4 h-4 bg-sky-500 rounded-full border-2 border-white" />
        <Zap className="text-sky-600 relative z-10" size={24} />
      </div>
    );
  }

  if (type === "file") {
    return (
      <div className={baseClasses}>
        <div className="absolute inset-0 bg-indigo-50 rounded-xl" />
        <div className="absolute inset-2 border-2 border-indigo-500/20 rounded-lg border-dashed" />
        <FileText className="text-indigo-600 relative z-10" size={24} />
      </div>
    );
  }

  if (type === "record") {
    return (
      <div className={baseClasses}>
        <div className="absolute inset-0 bg-blue-50 rounded-xl rotate-3" />
        <div className="absolute inset-0 bg-blue-100/30 rounded-xl -rotate-3" />
        <Clock className="text-blue-700 relative z-10" size={24} />
      </div>
    );
  }

  if (type === "multi") {
    return (
      <div className={baseClasses}>
        <div className="absolute inset-0 bg-cyan-50 rounded-full" />
        <div className="absolute -top-1 -right-1 w-5 h-5 bg-cyan-500 rounded-full flex items-center justify-center text-[10px] text-white font-bold">+</div>
        <Users className="text-cyan-600 relative z-10" size={24} />
      </div>
    );
  }

  if (type === "monitor") {
    return (
      <div className={baseClasses}>
        <div className="absolute inset-0 bg-blue-100/50 rounded-xl shadow-inner" />
        <Monitor className="text-blue-800 relative z-10" size={24} />
      </div>
    );
  }

  if (type === "lock") {
    return (
      <div className={baseClasses}>
        <div className="absolute inset-0 bg-slate-100 rounded-2xl" />
        <div className="absolute bottom-1 right-1 w-4 h-4 bg-blue-600 rounded-md" />
        <Lock className="text-blue-900 relative z-10" size={24} />
      </div>
    );
  }

  if (type === "diag") {
    return (
      <div className={baseClasses}>
        <div className="absolute inset-0 bg-sky-50 rounded-xl" />
        <div className="absolute inset-3 bg-sky-500/10 rounded-full animate-ping" />
        <Activity className="text-sky-700 relative z-10" size={24} />
      </div>
    );
  }

  if (type === "browser") {
    return (
      <div className={baseClasses}>
        <div className="absolute inset-0 bg-blue-50 rounded-xl" />
        <div className="absolute top-2 left-2 w-2 h-2 bg-blue-400 rounded-full" />
        <Globe className="text-blue-600 relative z-10" size={24} />
      </div>
    );
  }

  if (type === "log") {
    return (
      <div className={baseClasses}>
        <div className="absolute inset-0 bg-slate-50 rounded-xl border border-blue-100" />
        <Database className="text-blue-500 relative z-10" size={24} />
      </div>
    );
  }

  return <Activity size={24} />;
};

import UseCasesLogos from "@/components/sections/UseCasesLogos";

export function Home() {
  const { openModal } = useModal();
  const [activeDevice, setActiveDevice] = useState("pc");

  const deviceViewItems = [
    {
      id: "pc",
      label: "PC",
      title: "PC 원격지원",
      desc: "강력한 원격 제어와 파일 전송 기능을 PC 환경에서 경험하세요.",
      image: pcSupportImg
    },
    {
      id: "mobile",
      label: "Mobile",
      title: "Mobile 원격지원",
      desc: "스마트폰 화면 공유와 실시간 가이드를 통해 모바일 이슈를 즉각 해결합니다.",
      image: mobileSupportImg
    },
    {
      id: "video",
      label: "Video",
      title: "Video 원격지원",
      desc: "현장 상황을 영상으로 공유하며 실시간 화상 가이드를 제공합니다.",
      image: videoSupportImg
    },
    {
      id: "agent",
      label: "상담원 프로그램",
      title: "전용 상담원 프로그램",
      desc: "전문 상담원을 위한 통합 제어 도구로 업무 효율성을 극대화합니다.",
      image: sessionImg
    },
    {
      id: "customer",
      label: "고객접속 페이지",
      title: "심플한 고객 접속",
      desc: "복잡한 설치 없이 브라우저에서 바로 접속 번호만으로 지원을 받습니다.",
      image: customerImg
    }
  ];

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="flex flex-col">
      {/* 1. Hero Section */}
      <section className="relative min-h-[90vh] flex items-center pt-20 pb-20 overflow-hidden bg-white">
        <div className="absolute inset-0 z-0">
          <img 
            src={heroImage} 
            alt="AnySupport Background" 
            className="w-full h-full object-cover object-right-bottom opacity-80"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-white via-white/80 to-transparent lg:w-3/4" />
        </div>
        
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-3xl sm:text-4xl md:text-6xl font-black text-slate-900 leading-[1.1] mb-6">
              기업 상담과 지원을<br />
              <span className="text-primary">빠르고 안전하게</span>
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-slate-600 mb-10 max-w-2xl font-medium leading-relaxed">
              고객 상담·IT 지원·운영 지원을 하나로 연결하는<br className="hidden md:block" />
              기업용 원격지원 SaaS 애니서포트
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" onClick={openModal} className="h-14 px-10 text-lg font-bold shadow-xl shadow-primary/20">
                무료체험 시작하기 <ArrowRight className="ml-2" />
              </Button>
              <Button variant="outline" size="lg" onClick={() => scrollToSection('what-is-remote')} className="h-14 px-10 text-lg font-bold bg-white/80 backdrop-blur-sm border-slate-200">
                제품 자세히 보기
              </Button>
            </div>
          </div>
        </div>
      </section>
      {/* 2. 원격지원이란 무엇인가 */}
      <section id="what-is-remote" className="py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <span className="text-primary font-bold text-xs tracking-widest uppercase mb-3 block">REMOTE SUPPORT</span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6 text-slate-900">원격지원(Remote Support)이란?</h2>
            <p className="text-primary font-bold text-base sm:text-lg mb-2">현장 방문 없이 온라인으로 문제를 즉각 해결하는 기술</p>
            <p className="text-slate-500 font-medium leading-relaxed max-w-2xl mx-auto text-sm sm:text-base">
              애니서포트는 상담원이 고객의 PC나 모바일 화면을 공유받아<br className="hidden md:block" />
              직접 제어함으로써 장애를 진단하고 해결하는 기업용 전문 서비스입니다.
            </p>
          </div>

          <div className="max-w-4xl mx-auto mb-16">
            <div className="bg-slate-50 rounded-2xl p-8 md:p-12 border border-slate-100 flex items-center justify-center relative overflow-hidden">
              <div className="grid grid-cols-3 gap-8 items-center w-full max-w-lg relative z-10">
                <div className="flex flex-col items-center gap-3">
                  <div className="w-20 h-20 rounded-full bg-white shadow-lg flex items-center justify-center text-primary border border-slate-50">
                    <Headphones size={36} />
                  </div>
                  <span className="text-sm font-bold text-slate-600">상담원</span>
                </div>
                <div className="flex flex-col items-center justify-center">
                  <div className="h-0.5 w-full bg-slate-200 relative">
                    <div className="absolute inset-0 bg-primary animate-pulse" />
                  </div>
                  <span className="text-[10px] font-bold text-primary mt-3 uppercase tracking-widest">Secure Connection</span>
                </div>
                <div className="flex flex-col items-center gap-3">
                  <div className="w-20 h-20 rounded-full bg-white shadow-lg flex items-center justify-center text-slate-400 border border-slate-50">
                    <Monitor size={36} />
                  </div>
                  <span className="text-sm font-bold text-slate-600">고객</span>
                </div>
              </div>
              <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[radial-gradient(#3b82f6_1px,transparent_1px)] [background-size:20px_20px]" />
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12 max-w-5xl mx-auto">
            {[
              { icon: Activity, title: "무엇을 하는가?", desc: "고객의 이탈 없이 즉각적인 장애 진단, 소프트웨어 설정, 시스템 복구 등 전문적인 기술 지원 서비스를 제공합니다." },
              { icon: Zap, title: "어떻게 작동하는가?", desc: "복잡한 설치 과정 없이 생성된 접속 번호 입력만으로 보안 세션이 연결되며, 브라우저나 앱을 통해 실시간 제어가 시작됩니다." },
              { icon: Building2, title: "왜 필요한가?", desc: "기업의 지원 비용을 획기적으로 낮추고 상담 생산성을 높이며, 대면 지원의 물리적 제약을 극복하기 위해 필수적입니다." }
            ].map((card, i) => (
              <div key={i} className="p-8 rounded-2xl border border-slate-100 bg-white shadow-sm text-center flex flex-col items-center">
                <div className="w-14 h-14 rounded-full bg-primary/10 text-primary flex items-center justify-center mb-6">
                  <card.icon size={28} />
                </div>
                <h4 className="text-xl font-bold mb-3">{card.title}</h4>
                <p className="text-slate-500 text-sm font-medium leading-relaxed">
                  {card.desc}
                </p>
              </div>
            ))}
          </div>

          <div className="text-center">
            <Button variant="outline" size="lg" onClick={() => scrollToSection('connection-process')} className="font-bold border-slate-200 text-slate-700 hover:bg-slate-50">
              원격지원 작동 방식 자세히 보기
            </Button>
          </div>
        </div>
      </section>
      {/* 3. 왜 원격지원 애니서포트인가 (신뢰 요소) */}
      <section className="py-24 bg-slate-50">
        <div className="container mx-auto px-4 md:px-6 max-w-6xl">
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            {/* Left side: Content */}
            <div className="lg:w-1/2">
              <h2 className="text-[25px] md:text-4xl font-bold mb-6 leading-tight">왜 애니서포트인가요?</h2>
              <p className="text-slate-600 text-lg mb-8 leading-relaxed">
                기업이 신뢰할 수 있는 압도적인 기술력과 안정성으로<br className="hidden md:block" />
                원격 지원의 새로운 기준을 제시합니다.
              </p>
              
              <ul className="space-y-6 mb-10">
                {[
                  { title: "검증된 신뢰성", desc: "국내외 1,200+ 기업이 매일 사용하는 안정적인 솔루션" },
                  { title: "타협 없는 보안", desc: "금융권 수준의 End-to-End 암호화 및 다중 인증 체계" },
                  { title: "효율적인 운영", desc: "관리 비용 절감과 상담원 생산성 극대화를 위한 설계" }
                ].map((item, i) => (
                  <li key={i} className="flex gap-4">
                    <div className="mt-1 w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <div className="w-2 h-2 rounded-full bg-primary" />
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-900 mb-1">{item.title}</h4>
                      <p className="text-slate-500 text-sm">{item.desc}</p>
                    </div>
                  </li>
                ))}
              </ul>
              
              <Button 
                variant="outline" 
                onClick={() => scrollToSection('use-cases')}
                className="font-bold border-slate-200 text-slate-600 hover:text-primary hover:border-primary"
              >
                고객 도입 사례 보기 <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </div>

            {/* Right side: 2x2 Grid */}
            <div className="lg:w-1/2 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                { 
                  icon: Zap, 
                  title: "압도적 안정성", 
                  desc: "끊김 없는 연결로 상담 지연을 최소화합니다.",
                  badges: ["99.9% 성공률", "저대역폭 최적화"]
                },
                { 
                  icon: ShieldCheck, 
                  title: "금융권 보안", 
                  desc: "가장 엄격한 보안 규정을 준수하며 보호합니다.",
                  badges: ["AES-256", "SSL/TLS"]
                },
                { 
                  icon: Activity, 
                  title: "운영 투명성", 
                  desc: "모든 활동은 기록되어 사후 감사가 가능합니다.",
                  badges: ["감사로그", "녹화 기능"]
                },
                { 
                  icon: Clock, 
                  title: "중단 없는 지원", 
                  desc: "글로벌 인프라로 언제 어디서나 접속 가능합니다.",
                  badges: ["24/365", "글로벌 IDC"]
                }
              ].map((item, i) => (
                <div key={i} className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-all group">
                  <div className="w-10 h-10 rounded-xl bg-primary/5 flex items-center justify-center text-primary mb-4 group-hover:scale-110 transition-transform">
                    <item.icon size={20} />
                  </div>
                  <h3 className="text-lg font-bold mb-2 text-slate-900">{item.title}</h3>
                  <p className="text-slate-500 text-xs leading-relaxed mb-4">{item.desc}</p>
                  <div className="flex flex-wrap gap-2">
                    {item.badges.map((badge, bi) => (
                      <span key={bi} className="px-2 py-1 bg-slate-50 text-[10px] font-bold text-slate-400 rounded-md border border-slate-100">
                        {badge}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      {/* 4. 다양한 환경과 기기 지원 */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <h2 className="text-[25px] md:text-4xl font-bold mb-4">환경과 기기에 제한 없는 원격지원</h2>
            <p className="text-slate-500 max-w-2xl mx-auto text-[14px] md:text-lg">어떤 환경에서도 고객과 연결될 수 있습니다.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {[
              { image: pcSupportImg, title: "PC 지원", desc: "Windows, macOS, Linux 지원", href: "/product/pc" },
              { image: mobileSupportImg, title: "Mobile 지원", desc: "Android, iOS 실시간 제어", href: "/product/mobile" },
              { image: videoSupportImg, title: "Video 지원", desc: "현장 영상 기반 원격 가이드", href: "/product/video" }
            ].map((item, i) => (
              <Link key={i} href={item.href} data-testid={`link-solution-${item.title}`}>
                <div className="overflow-hidden rounded-2xl border border-slate-100 bg-white shadow-sm flex flex-col group hover:shadow-md transition-shadow cursor-pointer h-full">
                  <div className="aspect-[4/3] overflow-hidden relative">
                    <img src={item.image} alt={item.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 to-transparent opacity-60" />
                  </div>
                  <div className="p-6 sm:p-8 text-center border-t border-slate-50 flex-1">
                    <h3 className="text-lg sm:text-xl font-bold mb-1 sm:mb-2 group-hover:text-primary transition-colors">{item.title}</h3>
                    <p className="text-slate-500 text-xs sm:text-sm font-medium">{item.desc}</p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
          <div className="text-center">
            <Button variant="outline" size="lg" onClick={() => scrollToSection('features')} className="font-bold border-primary text-primary hover:bg-primary/5">
              제품 자세히 보기
            </Button>
          </div>
        </div>
      </section>
      {/* 5. 애니서포트 핵심 기능 */}
      <section id="features" className="py-24 bg-[#f8fafc]">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <h2 className="text-[25px] md:text-4xl font-bold mb-4">애니서포트 핵심 기능</h2>
            <p className="text-slate-500 max-w-2xl mx-auto text-[14px] md:text-lg">효율적인 지원을 위한 강력한 도구 모음</p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 mb-12 max-w-6xl mx-auto">
            {[
              { type: "chat", title: "채팅/메시지", desc: "실시간 양방향 채팅 지원" },
              { type: "control", title: "화면 제어", desc: "빠르고 끊김없는 원격 제어" },
              { type: "file", title: "파일 전송", desc: "드래그 앤 드롭 대용량 전송" },
              { type: "record", title: "상담 기록", desc: "전 과정 자동 녹화 및 저장" },
              { type: "multi", title: "다중 접속", desc: "동시 여러 대의 PC 지원" },
              { type: "monitor", title: "듀얼 모니터", desc: "다중 모니터 완벽 대응" },
              { type: "lock", title: "권한 관리", desc: "상세한 사용자 접근 제어" },
              { type: "diag", title: "시스템 진단", desc: "하드웨어 및 프로세스 분석" },
              { type: "browser", title: "브라우저 제어", desc: "특정 웹페이지 원격 지원" },
              { type: "log", title: "로그 분석", desc: "상세 세션 로그 리포트" }
            ].map((item, i) => (
              <div key={i} className="bg-white p-6 rounded-xl border border-slate-100 flex flex-col items-center text-center gap-3 transition-colors">
                <div className="mb-2">
                  <DesignIcon type={item.type} />
                </div>
                <div className="flex flex-col gap-1">
                  <span className="font-bold text-slate-800 text-sm">{item.title}</span>
                  <p className="text-[11px] text-slate-500 leading-tight">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center">
            <Link href="/solution/features">
              <Button size="lg" className="font-bold shadow-lg">
                애니서포트 기능 자세히 보기
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* 5.1 Device Support Toggle Section */}
      <section className="py-24 bg-white border-y border-slate-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-black text-slate-900 mb-4 leading-tight">
              환경은 달라도, 지원은 하나로 완성됩니다
            </h2>
            <p className="text-slate-500 max-w-2xl mx-auto text-lg font-medium">
              PC·모바일·웹 환경을 아우르는 통합 원격 지원 기술
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {deviceViewItems.map((device) => (
              <button
                key={device.id}
                onClick={() => setActiveDevice(device.id)}
                className={`px-6 py-2.5 rounded-full text-sm font-bold transition-all duration-300 border ${
                  activeDevice === device.id
                    ? "bg-primary text-white border-primary shadow-lg shadow-primary/20"
                    : "bg-white text-slate-500 border-slate-200 hover:border-primary hover:text-primary"
                }`}
              >
                {device.label}
              </button>
            ))}
          </div>

          <div className="max-w-5xl mx-auto">
            <div className="relative rounded-[2.5rem] overflow-hidden bg-slate-900 shadow-2xl p-4 md:p-8 aspect-[16/10] flex items-center justify-center">
              <motion.div 
                key={activeDevice}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
                className="w-full h-full relative"
              >
                <img 
                  src={deviceViewItems.find(d => d.id === activeDevice)?.image} 
                  alt="Device View" 
                  className="w-full h-full object-cover rounded-2xl opacity-90"
                />
                <div className="absolute bottom-12 left-12 right-12 text-white z-10">
                  <h3 className="text-2xl md:text-3xl font-bold mb-2">
                    {deviceViewItems.find(d => d.id === activeDevice)?.title}
                  </h3>
                  <p className="text-white/80 text-lg">
                    {deviceViewItems.find(d => d.id === activeDevice)?.desc}
                  </p>
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent opacity-60" />
              </motion.div>
            </div>
            <p className="mt-8 text-center text-slate-400 text-sm flex items-center justify-center gap-2">
              <span className="inline-block w-4 h-4 bg-yellow-400 rounded-full flex items-center justify-center text-[10px] text-white">💡</span>
              이미지 상단의 버튼을 클릭하여 각 환경에 대한 상세 화면을 확인하세요
            </p>
          </div>
        </div>
      </section>

      {/* 6. 원격 연결 프로세스 (4단계) */}
      <section id="connection-process" className="py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <h2 className="text-[25px] md:text-4xl font-bold mb-4">간편한 4단계 연결 프로세스</h2>
            <p className="text-slate-500 max-w-2xl mx-auto text-[14px] md:text-lg">누구나 1분 안에 원격 지원을 시작할 수 있습니다.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {[
              { step: "01", title: "상담원 로그인", desc: "웹 대시보드에서 계정 로그인" },
              { step: "02", title: "접속 번호 생성", desc: "고객에게 전달할 6자리 번호 생성" },
              { step: "03", title: "고객 번호 입력", desc: "고객이 페이지에서 번호 입력" },
              { step: "04", title: "원격 연결 시작", desc: "즉시 화면 공유 및 제어 시작" }
            ].map((item, i) => (
              <div key={i} className="relative p-8 rounded-2xl bg-slate-50 border border-slate-100">
                <span className="text-primary/20 text-5xl font-black absolute top-4 right-6">{item.step}</span>
                <h3 className="text-lg font-bold mb-2 relative z-10">{item.title}</h3>
                <p className="text-slate-500 text-sm font-medium relative z-10">{item.desc}</p>
              </div>
            ))}
          </div>
          <div className="text-center">
            <Link href="/solution/guide">
              <Button variant="ghost" className="font-bold text-primary hover:bg-primary/5">
                사용 방법 자세히 보기 <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
      {/* 7. 기술력 & 보안 */}
      <section className="py-24 bg-slate-900 text-white pt-[70px] pb-[70px]">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-block p-3 rounded-full bg-primary/20 text-primary mb-6">
              <ShieldCheck size={40} />
            </div>
            <h2 className="md:text-4xl font-bold mb-6 text-[25px]">강력한 기술력과 타협 없는 보안</h2>
            <p className="text-slate-400 text-lg mb-10 leading-relaxed">
              자체 개발한 최적화 코덱으로 저대역폭에서도 끊김 없는 원격 제어를 구현했습니다.<br className="hidden md:block" />
              종단간 암호화(E2E)와 다중 보안 인증으로 기업의 엄격한 보안 요구 수준을 완벽하게 충족합니다.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div className="p-4 border border-slate-700 rounded-lg">AES-256 암호화</div>
              <div className="p-4 border border-slate-700 rounded-lg">SSL/TLS 전송</div>
              <div className="p-4 border border-slate-700 rounded-lg">이중 인증(2FA)</div>
              <div className="p-4 border border-slate-700 rounded-lg">개인정보 마스킹</div>
            </div>
          </div>
        </div>
      </section>
      {/* 8. 성과와 지표 (숫자로 증명) */}
      <section className="py-24 bg-[#0f172b] pt-[70px] pb-[70px]">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-12 text-center">
            <div>
              <Counter value="1200" suffix="+" />
              <div className="text-slate-500 text-xs sm:text-sm md:text-base font-bold">국내외 도입 기업수</div>
            </div>
            <div>
              <Counter value="50000" suffix="+" />
              <div className="text-slate-500 text-xs sm:text-sm md:text-base font-bold">하루 평균 고객지원수</div>
            </div>
            <div>
              <Counter value="100" suffix="만+" />
              <div className="text-slate-500 text-xs sm:text-sm md:text-base font-bold">한달 평균 원격연결수</div>
            </div>
            <div>
              <Counter value="99.9" suffix="%" />
              <div className="text-slate-500 text-xs sm:text-sm md:text-base font-bold">연결 성공률</div>
            </div>
          </div>
        </div>
      </section>
      {/* 9. 산업별 최적화 솔루션 */}
      <section id="use-cases">
        <UseCasesLogos />
      </section>
      {/* 10. 서비스 도입 방식 선택 */}
      <section className="py-24 bg-[#f8fafc]">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <h2 className="text-[25px] md:text-4xl font-bold mb-4">서비스 도입 방식 선택</h2>
            <p className="text-slate-500 max-w-2xl mx-auto text-[14px] md:text-lg">귀사의 규모와 환경에 맞는 플랜을 선택하세요.</p>
          </div>
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <div className="p-10 rounded-2xl border border-slate-200 hover:border-primary transition-all bg-white shadow-sm flex flex-col">
              <h3 className="text-2xl font-bold mb-4">구독형 제품 (SaaS)</h3>
              <p className="text-slate-500 mb-8 flex-1">
                월/연 단위 결제로 즉시 사용 가능한 표준 서비스입니다.<br />
                중소·중견기업 고객에게 추천합니다.
              </p>
              <Link href="/pricing" data-testid="link-pricing">
                <Button size="lg" className="w-full font-bold">
                  가격 페이지 보기
                </Button>
              </Link>
            </div>
            <div className="p-10 rounded-2xl border border-slate-200 hover:border-primary transition-all bg-white shadow-sm flex flex-col">
              <h3 className="text-2xl font-bold mb-4">솔루션 / 연동형 제품</h3>
              <p className="text-slate-500 mb-8 flex-1">
                기존 상담 시스템(CRM/KMS)과 연계 가능한 맞춤형 솔루션입니다.<br />
                대기업 및 금융권 환경에 최적화되어 있습니다.
              </p>
              <Button size="lg" variant="outline" onClick={openModal} className="w-full font-bold border-primary text-primary">
                솔루션 문의하기
              </Button>
            </div>
          </div>
        </div>
      </section>
      {/* 11. 무료체험 CTA (마무리 섹션) */}
      <section className="py-24 bg-primary text-white overflow-hidden relative">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-white/5 skew-x-12 transform translate-x-1/2" />
        <div className="container mx-auto px-4 md:px-6 text-center relative z-10">
          <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold mb-8">지금  14일간 무료로 사용해보세요</h2>
          <p className="text-base sm:text-lg md:text-xl opacity-90 mb-12 max-w-2xl mx-auto font-medium">
            별도의 결제 정보 입력 없이 즉시 무료 체험이 가능합니다.<br />
            최고의 원격 지원 기술을 직접 경험해보세요.
          </p>
          <Button size="lg" variant="secondary" onClick={openModal} className="h-16 px-12 text-xl font-bold shadow-2xl bg-white text-primary hover:bg-slate-100">
            무료체험 시작하기
          </Button>
        </div>
      </section>
    </div>
  );
}
