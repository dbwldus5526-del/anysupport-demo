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
  Database,
} from "lucide-react";
import { motion, useInView } from "framer-motion";
import heroImage from "@assets/hero1_1767765900169.png";
import pcSupportImgOriginal from "@assets/generated_images/pc_remote_support_professional_image.png";
import mobileSupportImgOriginal from "@assets/generated_images/mobile_remote_support_app_interface.png";
import videoSupportImgOriginal from "@assets/generated_images/video-based_remote_support_concept.png";
import pcSupportImg from "@assets/uibg-pc_new_1767775521573.png";
import mobileSupportImg from "@assets/uibg-mobile_NEW_1767775657450.png";
import videoSupportImg from "@assets/uibg-video_new_1767775875384.png";
import customerImg from "@assets/uibg-customer_new_1767776369054.png";
import companyLogos from "@assets/기업로고new_1767749031414.png";
import sessionImg from "@assets/상담원프로그램._1767776278541.png";
import connectionProcessImg from "@assets/img-ic-agent-03_-_복사본_1768197714194.png";
import { Link, useLocation } from "wouter";

function Counter({
  value,
  duration = 2,
  suffix = "",
  textColor = "#ffffff",
}: {
  value: string;
  duration?: number;
  suffix?: string;
  textColor?: string;
}) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const numericValue = parseFloat(value.replace(/[^0-9.]/g, ""));
  const isDecimal = value.includes(".");
  const decimalPlaces = isDecimal ? value.split(".")[1].length : 0;

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
    <div
      ref={ref}
      className="font-black mb-1 md:mb-2 text-[46px]"
      style={{ color: textColor }}
    >
      {displayValue}
      {suffix}
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
        <div className="absolute -top-1 -right-1 w-5 h-5 bg-cyan-500 rounded-full flex items-center justify-center text-[10px] text-white font-bold">
          +
        </div>
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
  const [activeDevice, setActiveDevice] = useState("agent");
  const [contactModalOpen, setContactModalOpen] = useState(false);

  const deviceViewItems = [
    {
      id: "agent",
      label: "상담원 프로그램",
      title: "전용 상담원 프로그램",
      desc: "전문 상담원을 위한 통합 제어 도구로 업무 효율성을 극대화합니다.",
      image: sessionImg,
    },
    {
      id: "pc",
      label: "PC",
      title: "PC 원격지원",
      desc: "강력한 원격 제어와 파일 전송 기능을 PC 환경에서 경험하세요.",
      image: pcSupportImg,
    },
    {
      id: "mobile",
      label: "Mobile",
      title: "Mobile 원격지원",
      desc: "스마트폰 화면 공유와 실시간 가이드를 통해 모바일 이슈를 즉각 해결합니다.",
      image: mobileSupportImg,
    },
    {
      id: "video",
      label: "Video",
      title: "Video 원격지원",
      desc: "현장 상황을 영상으로 공유하며 실시간 화상 가이드를 제공합니다.",
      image: videoSupportImg,
    },
    {
      id: "customer",
      label: "고객접속 페이지",
      title: "심플한 고객 접속",
      desc: "복잡한 설치 없이 브라우저에서 바로 접속 번호만으로 지원을 받습니다.",
      image: customerImg,
    },
  ];

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
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

        <div className="max-w-[1280px] w-full mx-auto px-4 sm:px-6 lg:px-10 relative z-10">
          <div className="max-w-3xl">
            <h1 className="font-black mt-[0px] mb-[20px] text-[#333] text-[67px] leading-[1.1]">
              고객과 상담사 사이
              <br />
              <span className="block text-primary text-[67px]">애니서포트가 있습니다</span>
            </h1>
            <p className="sm:text-lg md:text-xl mb-10 max-w-2xl text-[#333] mt-6 text-[21px] font-normal">
              고객 상담·IT 지원·운영 지원을 하나로 연결하는
              <br className="hidden md:block" />
              기업용 원격지원 SaaS 애니서포트
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                onClick={openModal}
                className="h-14 px-10 text-lg font-bold"
              >
                무료체험 시작하기 <ArrowRight className="ml-2" />
              </Button>
              <Button
                variant="outline"
                size="lg"
                onClick={() => scrollToSection("features")}
                className="h-14 px-10 text-lg font-bold bg-[#f7f8fc] border border-slate-200"
              >
                제품 자세히 보기
              </Button>
            </div>
          </div>
        </div>
      </section>
      {/* 다양한 환경과 기기 지원 */}
      <section className="py-24 bg-white pt-[154px] pb-[154px]">
        <div className="max-w-[1280px] w-full mx-auto px-4 sm:px-6 lg:px-10">
          <div className="text-center mb-16">
            <h2 className="lg:text-4xl font-bold mb-4 text-[40px] text-[#333]">
              환경과 기기에 제한 없는 원격지원
            </h2>
            <p className="text-[#666] max-w-2xl mx-auto text-[18px]">
              어떤 환경에서도 고객과 연결될 수 있습니다.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {[
              {
                image: pcSupportImgOriginal,
                title: "PC 지원",
                desc: "Windows, macOS, Linux 지원",
                href: "/product/pc",
              },
              {
                image: mobileSupportImgOriginal,
                title: "Mobile 지원",
                desc: "Android, iOS 실시간 제어",
                href: "/product/mobile",
              },
              {
                image: videoSupportImgOriginal,
                title: "Video 지원",
                desc: "현장 영상 기반 원격 가이드",
                href: "/product/video",
              },
            ].map((item, i) => (
              <Link
                key={i}
                href={item.href}
                data-testid={`link-solution-${item.title}`}
              >
                <div className="overflow-hidden rounded-2xl border border-slate-200 bg-[#f7f8fc] flex flex-col group hover:border-primary/30 transition-colors cursor-pointer h-full">
                  <div className="h-56 sm:h-64 overflow-hidden relative">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 to-transparent opacity-60" />
                  </div>
                  <div className="p-6 sm:p-8 text-center border-t border-slate-50 flex-1">
                    <h3 className="text-lg lg:text-2xl font-bold mb-1 sm:mb-2 group-hover:text-primary transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-[#666] text-[18px]">
                      {item.desc}
                    </p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
          <div className="text-center">
            <Button
              variant="outline"
              size="lg"
              onClick={() => scrollToSection("features")}
              className="text-[18px] font-bold border-primary text-primary hover:bg-primary/5"
            >
              제품 자세히 보기
            </Button>
          </div>
        </div>
      </section>
      {/* 5. 애니서포트 핵심 기능 */}
      <section id="features" className="py-24 bg-[#f8fafc]">
        <div className="max-w-[1280px] w-full mx-auto px-4 sm:px-6 lg:px-10">
          <div className="text-center mb-16">
            <h2 className="lg:text-4xl font-bold mb-4 text-[#333] text-[40px]">
              효율적인 지원을 위한 핵심적인 기능
            </h2>
            <p className="text-[#666] max-w-2xl mx-auto text-[18px]"></p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 mb-12 max-w-6xl mx-auto">
            {[
              {
                type: "chat",
                title: "채팅/메시지",
                desc: "실시간 양방향 채팅 지원",
              },
              {
                type: "control",
                title: "화면 제어",
                desc: "빠르고 끊김없는 원격 제어",
              },
              {
                type: "file",
                title: "파일 전송",
                desc: "드래그 앤 드롭 대용량 전송",
              },
              {
                type: "record",
                title: "상담 기록",
                desc: "전 과정 자동 녹화 및 저장",
              },
              {
                type: "multi",
                title: "다중 접속",
                desc: "동시 여러 대의 PC 지원",
              },
              {
                type: "monitor",
                title: "듀얼 모니터",
                desc: "다중 모니터 완벽 대응",
              },
              {
                type: "lock",
                title: "권한 관리",
                desc: "상세한 사용자 접근 제어",
              },
              {
                type: "diag",
                title: "시스템 진단",
                desc: "하드웨어 및 프로세스 분석",
              },
              {
                type: "browser",
                title: "브라우저 제어",
                desc: "특정 웹페이지 원격 지원",
              },
              {
                type: "log",
                title: "로그 분석",
                desc: "상세 세션 로그 리포트",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="p-6 rounded-xl border border-slate-300 flex flex-col items-center text-center gap-3 transition-colors bg-[#ffffff]"
              >
                <div className="mb-2">
                  <DesignIcon type={item.type} />
                </div>
                <div className="flex flex-col gap-1">
                  <span className="text-[18px] text-[#333] font-semibold">
                    {item.title}
                  </span>
                  <p className="text-slate-500 text-[18px] font-normal">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center">
            <Link href="/solution/features">
              <Button size="lg" className="text-[18px] font-semibold">
                애니서포트 기능 자세히 보기
              </Button>
            </Link>
          </div>
        </div>
      </section>
      {/* 5.1 Device Support Toggle Section */}
      <section className="py-24 bg-white border-y border-slate-50">
        <div className="max-w-[1280px] w-full mx-auto px-4 sm:px-6 lg:px-10">
          <div className="text-center mb-16">
            <h2 className="lg:text-4xl mb-4 font-bold text-[#333] text-[40px]">
              환경은 달라도, 지원은 하나로 완성됩니다
            </h2>
            <p className="text-[#666] max-w-2xl mx-auto text-[18px]">
              PC·모바일·웹 환경을 아우르는 통합 원격 지원 기술
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {deviceViewItems.map((device) => (
              <button
                key={device.id}
                onClick={() => setActiveDevice(device.id)}
                className={`px-6 py-2.5 rounded-full font-bold transition-all duration-300 border text-[18px] ${
                  activeDevice === device.id
                    ? "bg-primary text-white border-primary"
                    : "bg-white text-[#333] border-slate-300 hover:border-primary hover:text-primary"
                }`}
              >
                {device.label}
              </button>
            ))}
          </div>

          <div className="max-w-5xl mx-auto">
            <div className="relative overflow-hidden aspect-[16/10] flex items-center justify-center">
              <motion.div
                key={activeDevice}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
                className="w-full h-full"
              >
                <img
                  src={
                    deviceViewItems.find((d) => d.id === activeDevice)?.image
                  }
                  alt="Device View"
                  className="w-full h-full object-cover rounded-2xl border border-slate-200"
                />
              </motion.div>
            </div>
            <p className="mt-8 text-center flex items-center justify-center gap-2 text-[18px] text-[#888]">
              <span className="inline-block w-4 h-4 bg-yellow-400 rounded-full flex items-center justify-center text-[10px] text-white">
                💡
              </span>
              이미지 상단의 버튼을 클릭하여 각 환경에 대한 상세 화면을
              확인하세요
            </p>
          </div>
        </div>
      </section>
      {/* 6. 원격 연결 프로세스 (4단계) */}
      <section id="connection-process" className="py-24 bg-white">
        <div className="max-w-[1280px] w-full mx-auto px-4 sm:px-6 lg:px-10">
          <div className="text-center mb-16">
            <h2 className="lg:text-4xl font-bold mb-4 text-[#333] text-[40px]">
              간편한 4단계 연결로 시간과 비용을 단축하세요
            </h2>
            <p className="text-[#666] max-w-2xl mx-auto text-[18px]">
              누구나 1분 안에 원격 지원을 시작할 수 있습니다.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {[
              {
                step: "01",
                title: "상담원 로그인",
                desc: "웹 대시보드에서 계정 로그인",
              },
              {
                step: "02",
                title: "접속 번호 생성",
                desc: "고객에게 전달할 6자리 번호 생성",
              },
              {
                step: "03",
                title: "고객 번호 입력",
                desc: "고객이 페이지에서 번호 입력",
              },
              {
                step: "04",
                title: "원격 연결 시작",
                desc: "즉시 화면 공유 및 제어 시작",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="relative p-8 rounded-2xl bg-slate-50 border border-slate-100"
              >
                <span className="text-primary/20 text-5xl font-black absolute top-4 right-6">
                  {item.step}
                </span>
                <h3 className="text-lg font-bold mb-2 relative z-10 text-[#333]">
                  {item.title}
                </h3>
                <p className="text-[#666] text-[18px] relative z-10">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
          <div className="text-center">
            <Link href="/solution/guide">
              <Button
                variant="ghost"
                className="text-[18px] text-[#888] font-bold hover:bg-primary/5"
              >
                사용 방법 자세히 보기 <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
      {/* 6.5 원격지원 연결 과정 상세 */}
      <section className="py-24 bg-[#f8fafc]">
        <div className="max-w-[1280px] w-full mx-auto px-4 sm:px-6 lg:px-10">
          <div className="text-center mb-16">
            <h2 className="lg:text-4xl font-bold mb-4 text-[#333] text-[40px]">애니서포트 원격지원, 5초안에 연결!</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            <div className="flex justify-center">
              <img 
                src={connectionProcessImg} 
                alt="원격지원 연결 화면" 
                className="max-w-full rounded-2xl"
              />
            </div>
            <div className="space-y-0">
              <div className="flex items-start gap-4">
                <div className="flex flex-col items-center">
                  <div className="w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center font-bold shrink-0">
                    1
                  </div>
                  <div className="w-px h-20 bg-slate-300 mt-2"></div>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-[#333] mb-2">접속 준비</h3>
                  <p className="text-[#666] text-[18px]">
                    PC에서 에이전트 실행 후 로그인하거나<br />
                    PC·모바일에서 웹브라우저로 접속해 로그인하세요.
                  </p>
                  <a href="/attached_assets/AnySupport_Setup_10_(4)_1768201870901.exe" download="AnySupport_Setup.exe">
                    <Button 
                      size="sm" 
                      variant="outline" 
                      className="mt-3 font-bold border-slate-300 text-[#333] hover:border-primary hover:text-primary"
                    >
                      원격지원 바로시작
                    </Button>
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-4 pt-[9px] pb-[9px]">
                <div className="flex flex-col items-center">
                  <div className="w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center font-bold shrink-0">
                    2
                  </div>
                  <div className="w-px h-16 bg-slate-300 mt-2"></div>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-[#333] mb-2">접속번호 생성</h3>
                  <p className="text-[#666] text-[18px]">
                    [원격지원 시작하기] 클릭하면<br />
                    접속번호와 URL이 자동 생성됩니다.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="flex flex-col items-center">
                  <div className="w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center font-bold shrink-0">
                    3
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-[#333] mb-2">원격지원 연결</h3>
                  <p className="text-[#666] text-[18px]">
                    고객이 안내받은 번호를 입력하면<br />
                    즉시 연결되어 지원을 시작할 수 있습니다.
                  </p>
                  <div className="flex flex-wrap gap-2 mt-3">
                    <a href="https://988.co.kr/" target="_blank" rel="noopener noreferrer">
                      <Button 
                        size="sm"
                        variant="outline" 
                        className="font-bold border-slate-300 text-[#333] hover:border-primary hover:text-primary"
                      >
                        고객접속페이지 바로가기
                      </Button>
                    </a>
                    <Link href="/solution/guide">
                      <Button 
                        variant="ghost" 
                        className="text-primary font-bold hover:bg-primary/5 px-0"
                      >
                        애니서포트 매뉴얼 보기 <ArrowRight className="ml-1 w-4 h-4" />
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="text-center mt-16">
            <Button 
              size="lg" 
              onClick={openModal}
              className="h-14 px-10 text-lg font-bold shadow-xl shadow-primary/20"
            >
              <Clock className="mr-2 w-5 h-5" />
              애니서포트, 14일간 제한 없이 써보세요
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </div>
        </div>
      </section>
      {/* 7. 기술력 & 보안 */}
      <section className="py-24 bg-slate-900 text-white pt-[70px] pb-[70px]">
        <div className="max-w-[1280px] w-full mx-auto px-4 sm:px-6 lg:px-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-block p-3 rounded-full bg-primary/20 text-primary mb-6">
              <ShieldCheck size={40} />
            </div>
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">
              강력한 기술력과 타협 없는 보안
            </h2>
            <p className="text-[18px] mb-10 leading-relaxed text-[#d8e2f2]">
              자체 개발한 최적화 코덱으로 저대역폭에서도 끊김 없는 원격 제어를
              구현했습니다.
              <br className="hidden md:block" />
              종단간 암호화(E2E)와 다중 보안 인증으로 기업의 엄격한 보안 요구
              수준을 완벽하게 충족합니다.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-10">
              <div className="p-4 border border-slate-700 rounded-lg">
                AES-256 암호화
              </div>
              <div className="p-4 border border-slate-700 rounded-lg">
                SSL/TLS 전송
              </div>
              <div className="p-4 border border-slate-700 rounded-lg">
                이중 인증(2FA)
              </div>
              <div className="p-4 border border-slate-700 rounded-lg">
                개인정보 마스킹
              </div>
            </div>
            <Link href="/solution/security">
              <Button size="lg" variant="outline" className="font-bold hover:bg-white/10 border-0 text-[18px] bg-[#ffffff00] text-[#b5b5b5]">
                보안기술 자세히보기 <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
      {/* 8. 성과와 지표 (숫자로 증명) */}
      <section className="py-24 bg-white pt-[92px] pb-[92px]">
        <div className="max-w-[1280px] w-full mx-auto px-4 sm:px-6 lg:px-10">
          <div className="text-center mb-12">
            <h2 className="text-[40px] font-bold text-[#333] mb-4 leading-[1.2]">
              26년의 원격지원
              <br />
              숫자와 성과가 증명합니다
            </h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4 md:gap-6 text-center text-[#333] pt-[23px] pb-[23px]">
            <div>
              <Counter value="6000" suffix="+" textColor="#333" />
              <div className="font-normal text-[18px] text-[#666]">
                국내외 도입 기업수
              </div>
            </div>
            <div>
              <Counter value="60000" suffix="+" textColor="#333" />
              <div className="font-normal text-[18px] text-[#666]">
                하루 평균 고객지원수
              </div>
            </div>
            <div>
              <Counter value="93" suffix="%" textColor="#333" />
              <div className="font-normal text-[18px] text-[#666]">
                원격지원 해결율
              </div>
            </div>
            <div>
              <Counter value="95" suffix="%" textColor="#333" />
              <div className="font-normal text-[18px] text-[#666]">
                고객만족도 증가
              </div>
            </div>
            <div>
              <Counter value="175" suffix="억원" textColor="#333" />
              <div className="font-normal text-[18px] text-[#666]">
                누적 비용 절감액
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* 9. 산업별 최적화 솔루션 */}
      <section id="use-cases">
        <UseCasesLogos />
      </section>
      {/* 10. 서비스 도입 방식 선택 */}
      <section className="py-24 bg-[#ffffff]">
        <div className="max-w-[1280px] w-full mx-auto px-4 sm:px-6 lg:px-10">
          <div className="text-center mb-16">
            <h2 className="lg:text-4xl font-bold mb-4 text-[40px] text-[#333]">
              서비스 도입 방식 선택
            </h2>
            <p className="text-[#666] max-w-2xl mx-auto text-[18px]">
              귀사의 규모와 환경에 맞는 플랜을 선택하세요.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <div className="p-10 rounded-2xl border border-slate-200 hover:border-primary transition-all flex flex-col bg-[#f7f8fc]">
              <h3 className="text-xl lg:text-2xl font-bold mb-4 text-[#333]">구독형 제품 (SaaS)</h3>
              <p className="text-[#666] mb-8 flex-1 text-[18px]">
                월/연 단위 결제로 즉시 사용 가능한 표준 서비스입니다.
                <br />
                중소·중견기업 고객에게 추천합니다.
              </p>
              <Link href="/pricing" data-testid="link-pricing">
                <Button size="lg" className="w-full font-semibold text-[18px]">
                  가격 페이지 보기
                </Button>
              </Link>
            </div>
            <div className="p-10 rounded-2xl border border-slate-200 hover:border-primary transition-all bg-[#f7f8fc] flex flex-col">
              <h3 className="text-xl lg:text-2xl font-bold mb-4 text-[#333]">솔루션 / 연동형 제품</h3>
              <p className="text-[#666] mb-8 flex-1 text-[18px]">
                기존 상담 시스템(CRM/KMS)과 연계 가능한 맞춤형 솔루션입니다.
                <br />
                대기업 및 금융권 환경에 최적화되어 있습니다.
              </p>
              <Button
                size="lg"
                variant="outline"
                onClick={openModal}
                className="w-full text-[18px] font-semibold border-primary text-primary"
              >
                솔루션 문의하기
              </Button>
            </div>
          </div>
        </div>
      </section>
      {/* 11. 무료체험 CTA (마무리 섹션) */}
      <section className="py-24 bg-primary text-white overflow-hidden relative">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-white/5 skew-x-12 transform translate-x-1/2" />
        <div className="max-w-[1280px] w-full mx-auto px-4 sm:px-6 lg:px-10 text-center relative z-10">
          <h2 className="text-3xl lg:text-4xl font-bold mb-8">
            지금 14일간 무료로 사용해보세요
          </h2>
          <p className="text-[18px] opacity-90 mb-12 max-w-2xl mx-auto font-medium">
            별도의 결제 정보 입력 없이 즉시 무료 체험이 가능합니다.
            <br />
            최고의 원격 지원 기술을 직접 경험해보세요.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              variant="secondary"
              onClick={openModal}
              className="h-16 px-12 text-xl font-bold bg-[#f7f8fc] text-primary hover:bg-slate-100 border border-slate-200"
            >
              무료체험 시작하기
            </Button>
            <Button
              size="lg"
              variant="outline"
              onClick={() => setContactModalOpen(true)}
              className="h-16 px-12 text-xl font-bold bg-transparent text-white border-white hover:bg-white/10"
            >
              문의하기
            </Button>
          </div>
        </div>
      </section>

      {/* Contact Modal */}
      {contactModalOpen && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="bg-white rounded-2xl p-8 max-w-md w-full mx-4 relative">
            <button
              onClick={() => setContactModalOpen(false)}
              className="absolute top-4 right-4 text-slate-400 hover:text-slate-600 text-2xl font-bold"
            >
              ×
            </button>
            <h2 className="text-2xl font-bold text-[#333] mb-6">애니서포트 문의하기</h2>
            <div className="space-y-4 text-[#666]">
              <div className="flex items-start gap-3">
                <span className="font-semibold text-[#333] min-w-[70px]">대표전화</span>
                <span>02-839-7500</span>
              </div>
              <div className="flex items-start gap-3">
                <span className="font-semibold text-[#333] min-w-[70px]">팩스</span>
                <span>02-857-0054</span>
              </div>
              <div className="flex items-start gap-3">
                <span className="font-semibold text-[#333] min-w-[70px]">Email</span>
                <span>anysupport@koino.co.kr</span>
              </div>
            </div>
            <Button
              onClick={() => setContactModalOpen(false)}
              className="w-full mt-8 h-12 font-bold"
            >
              닫기
            </Button>
          </div>
        </div>
      )}
    </div>
  );
}
