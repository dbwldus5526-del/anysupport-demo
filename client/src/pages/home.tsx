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
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { motion, useInView } from "framer-motion";
import heroImage1 from "@assets/hero1_1767765900169.png";
import heroImage2 from "@assets/190508_bg_-_복사본_1768208662176.jpg";
import heroImage3 from "@assets/HEAD_IMG3_1768279344021.png";
import pcSupportImgOriginal from "@assets/generated_images/pc_remote_support_professional_image.png";
import mobileSupportImgOriginal from "@assets/generated_images/mobile_remote_support_app_interface.png";
import videoSupportImgOriginal from "@assets/generated_images/video-based_remote_support_concept.png";
import pcSupportImg from "@assets/PC_에디션_이미지_1768282727248.png";
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

const heroSlides = [
  {
    image: heroImage1,
    objectPosition: "object-right-bottom",
    title: <>고객과 상담사 사이<br /><span className="block text-primary text-[32px] sm:text-[48px] lg:text-[67px]">애니서포트가 있습니다</span></>,
    subtitle: <>고객 상담·IT 지원·운영 지원을 하나로 연결하는<br className="hidden md:block" />기업용 원격지원 SaaS 애니서포트</>
  },
  {
    image: heroImage2,
    objectPosition: "object-[70%_center]",
    title: <>6,000고객사가 선택한<br /><span className="block text-primary text-[32px] sm:text-[48px] lg:text-[67px]">검증된 원격지원</span></>,
    subtitle: <>고객 상담·IT 지원·운영 지원을 하나로 연결하는<br className="hidden md:block" />기업용 원격지원 SaaS 애니서포트</>
  },
  {
    image: heroImage3,
    objectPosition: "object-right-bottom",
    title: <>다양한 원격지원 방식으로<br /><span className="block text-primary text-[32px] sm:text-[48px] lg:text-[67px]">편리하고 쉽게 지원하세요</span></>,
    subtitle: <>고객 상담·IT 지원·운영 지원을 하나로 연결하는<br className="hidden md:block" />기업용 원격지원 SaaS 애니서포트</>
  }
];

function HeroCarousel({ openModal, scrollToSection }: { openModal: () => void; scrollToSection: (id: string) => void }) {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 8000);
    return () => clearInterval(interval);
  }, []);

  const goToPrevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length);
  };

  const goToNextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
  };

  return (
    <section className="relative min-h-[90vh] flex items-center pt-20 pb-20 overflow-hidden bg-white">
      <div className="absolute inset-0 z-0">
        {heroSlides.map((slide, index) => (
          <img
            key={index}
            src={slide.image}
            alt={`AnySupport Background ${index + 1}`}
            className={`absolute inset-0 w-full h-full object-cover ${slide.objectPosition} transition-opacity duration-1000 ${
              currentSlide === index ? "opacity-80" : "opacity-0"
            }`}
          />
        ))}
        <div className="absolute inset-0 bg-gradient-to-r from-white via-white/80 to-transparent lg:w-3/4" />
      </div>

      <div className="max-w-[1280px] w-full mx-auto px-4 sm:px-6 lg:px-10 relative z-10">
        <div className="max-w-3xl">
          <h1 className="font-black mt-[0px] mb-[20px] text-[#333] text-[32px] sm:text-[48px] lg:text-[67px] leading-[1.1]">
            {heroSlides[currentSlide].title}
          </h1>
          <p className="sm:text-lg md:text-xl mb-10 max-w-2xl text-[#333] mt-6 text-[21px] font-normal">
            {heroSlides[currentSlide].subtitle}
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button
              size="lg"
              onClick={openModal}
              className="h-12 px-6 sm:h-14 sm:px-10 text-base sm:text-lg font-bold"
            >
              무료체험 시작하기 <ArrowRight className="ml-2" />
            </Button>
            <Button
              variant="outline"
              size="lg"
              onClick={() => scrollToSection("features")}
              className="h-12 px-6 sm:h-14 sm:px-10 text-base sm:text-lg font-bold bg-[#f7f8fc] border border-slate-200"
            >
              제품 자세히 보기
            </Button>
          </div>
        </div>
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={goToPrevSlide}
        className="absolute left-4 lg:left-8 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-white/80 hover:bg-white border border-slate-200 flex items-center justify-center shadow-lg transition-all hover:scale-110"
        aria-label="이전 슬라이드"
      >
        <ChevronLeft size={24} className="text-slate-700" />
      </button>
      <button
        onClick={goToNextSlide}
        className="absolute right-4 lg:right-8 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-white/80 hover:bg-white border border-slate-200 flex items-center justify-center shadow-lg transition-all hover:scale-110"
        aria-label="다음 슬라이드"
      >
        <ChevronRight size={24} className="text-slate-700" />
      </button>

      {/* Slide Indicators */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex gap-2">
        {heroSlides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-all ${
              currentSlide === index ? "bg-primary w-8" : "bg-slate-300"
            }`}
          />
        ))}
      </div>
    </section>
  );
}

export function Home() {
  const { openModal } = useModal();
  const [activeDevice, setActiveDevice] = useState("agent");
  const [contactModalOpen, setContactModalOpen] = useState(false);
  const [hoveredSpot, setHoveredSpot] = useState<number | null>(null);

  const deviceViewItems = [
    {
      id: "agent",
      label: "상담원 프로그램",
      title: "전용 상담원 프로그램",
      desc: "전문 상담원을 위한 통합 제어 도구로 업무 효율성을 극대화합니다.",
      image: sessionImg,
      spots: [
        { id: 1, top: "15%", left: "10%", title: "고객 접속 인증번호 생성", description: "고객에게 6자리 접속 인증번호를 안내하여 언제 어디서든 간편하고 빠르게 연결하여 지원을 시작할 수 있습니다." },
        { id: 2, top: "40%", left: "50%", title: "다중 모니터링", description: "국내 유일 다중 모니터링 지원 기능으로 실시간으로 유지보수 및 패치작업시 진행상황을 파악하여 처리할 수 있습니다." },
        { id: 3, top: "70%", left: "85%", title: "웹브라우저로 바로 연결", description: "PC,스마트폰,태블릿 등 어떤 기기에서도 고객에게 원격지원 요청 URL페이지를 제공하여 컴퓨터를 모르는 고객도 단한번의 클릭으로 지원 받을 수 있습니다." },
      ],
    },
    {
      id: "pc",
      label: "PC",
      title: "PC 원격지원",
      desc: "강력한 원격 제어와 파일 전송 기능을 PC 환경에서 경험하세요.",
      image: pcSupportImg,
      spots: [
        { id: 1, top: "20%", left: "15%", title: "화면 제어 도구", description: "마우스와 키보드를 통해 고객 PC를 직접 제어할 수 있습니다." },
        { id: 2, top: "50%", left: "50%", title: "양방향 파일전송", description: "제한된 용량만 허용하는 타사와 달리 무제한 용량의 양방향 파일전송을 지원하며 '드래그드롭'/'Cntrl+C/V' 기능으로 편의성을 더했습니다." },
        { id: 3, top: "75%", left: "80%", title: "툴바 설정", description: "스스로 만드는 퀵 메뉴로써 사용자에 따라 필요한 메뉴를 따로 선택하고, 뷰어창 상단에 구성해 빠르고 쉽게 사용할 수 있습니다." },
      ],
    },
    {
      id: "mobile",
      label: "Mobile",
      title: "Mobile 원격지원",
      desc: "스마트폰 화면 공유와 실시간 가이드를 통해 모바일 이슈를 즉각 해결합니다.",
      image: mobileSupportImg,
      spots: [
        { id: 1, top: "25%", left: "30%", title: "애니서포트 모바일 에디션", description: "직접 모바일 기기를 사용하듯이 고객의 모바일 화면을 실시간으로 보며 설치 및 실행 중인 프로세스를 함께 확인하고 지원할 수 있습니다." },
        { id: 2, top: "10%", left: "63%", title: "퀵메뉴설정", description: "화면 상단에 모바일 제어용 메뉴바를 배치하여 화면만으로는 제어되지 않는 기능이나 편리한 기능을 빠르게 확인할 수 있습니다." },
        { id: 3, top: "75%", left: "25%", title: "실시간채팅", description: "원격지원 중 전화가 끊기더라도 고객과 채팅으로 소통이 가능하며 실시간으로 작업내역이 채팅을 통해 안내되고 기록저장이 가능합니다." },
      ],
    },
    {
      id: "video",
      label: "Video",
      title: "Video 원격지원",
      desc: "현장 상황을 영상으로 공유하며 실시간 화상 가이드를 제공합니다.",
      image: videoSupportImg,
      spots: [
        { id: 1, top: "20%", left: "25%", title: "실시간 영상", description: "고객의 카메라를 통해 현장 상황을 실시간으로 확인합니다." },
        { id: 2, top: "45%", left: "70%", title: "비디오 전용 퀵메뉴", description: "모바일 화면 상으로 제어 되지않는 플래시. 초점 조정 등의 기능을 사용하기 편리하도록 퀵 메뉴바로 배치하여 상담원이 현장을 더 빠르게 파악 할 수있습니다." },
        { id: 3, top: "70%", left: "35%", title: "애니서포트 비디오 에디션", description: "카메라를 통해 고객과 같은 화면을 보면서 현장상황의 문제를 현장 방문없이 생생하게 해결할 수 있습니다." },
      ],
    },
    {
      id: "customer",
      label: "고객접속 페이지",
      title: "심플한 고객 접속",
      desc: "복잡한 설치 없이 브라우저에서 바로 접속 번호만으로 지원을 받습니다.",
      image: customerImg,
      spots: [
        { id: 1, top: "30%", left: "50%", title: "접속 번호 입력", description: "상담원이 안내한 6자리 접속 번호를 입력합니다." },
        { id: 2, top: "55%", left: "50%", title: "연결 버튼", description: "번호 입력 후 클릭 한 번으로 즉시 연결됩니다." },
        { id: 3, top: "80%", left: "50%", title: "안내 문구", description: "처음 사용하는 고객을 위한 간단한 사용 안내입니다." },
      ],
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
      {/* 1. Hero Section with Carousel */}
      <HeroCarousel openModal={openModal} scrollToSection={scrollToSection} />
      {/* 다양한 환경과 기기 지원 */}
      <section className="py-24 bg-white pt-[154px] pb-[154px]">
        <div className="max-w-[1280px] w-full mx-auto px-4 sm:px-6 lg:px-10">
          <div className="text-center mb-16">
            <h2 className="font-bold mb-4 text-[24px] sm:text-[32px] lg:text-[40px] text-[#333]">
              환경과 기기에 제한 없는 원격지원
            </h2>
            <p className="text-[#666] max-w-2xl mx-auto text-[14px] sm:text-[16px] lg:text-[18px]">
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
                    <p className="text-[#666] text-[14px] sm:text-[16px] lg:text-[18px]">
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
              className="text-[14px] sm:text-[16px] lg:text-[18px] font-bold border-primary text-primary hover:bg-primary/5"
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
            <h2 className="font-bold mb-4 text-[#333] text-[24px] sm:text-[32px] lg:text-[40px]">
              효율적인 지원을 위한 핵심적인 기능
            </h2>
            <p className="text-[#666] max-w-2xl mx-auto text-[14px] sm:text-[16px] lg:text-[18px]"></p>
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
                  <span className="text-[14px] sm:text-[16px] lg:text-[18px] text-[#333] font-semibold">
                    {item.title}
                  </span>
                  <p className="text-slate-500 text-[14px] sm:text-[16px] lg:text-[18px] font-normal">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center">
            <Link href="/solution/features">
              <Button size="lg" className="text-[14px] sm:text-[16px] lg:text-[18px] font-semibold">
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
            <h2 className="mb-4 font-bold text-[#333] text-[24px] sm:text-[32px] lg:text-[40px]">
              환경은 달라도, 지원은 하나로 완성됩니다
            </h2>
            <p className="text-[#666] max-w-2xl mx-auto text-[14px] sm:text-[16px] lg:text-[18px]">
              PC·모바일·웹 환경을 아우르는 통합 원격 지원 기술
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {deviceViewItems.map((device) => (
              <button
                key={device.id}
                onClick={() => setActiveDevice(device.id)}
                className={`px-6 py-2.5 rounded-full font-bold transition-all duration-300 border text-[14px] sm:text-[16px] lg:text-[18px] ${
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
            <div className="relative aspect-[16/10] flex items-center justify-center">
              <motion.div
                key={activeDevice}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
                className="w-full h-full relative"
              >
                <img
                  src={
                    deviceViewItems.find((d) => d.id === activeDevice)?.image
                  }
                  alt="Device View"
                  className="w-full h-full object-cover rounded-2xl border border-slate-200"
                />
                {deviceViewItems.find((d) => d.id === activeDevice)?.spots.map((spot) => {
                  const topPercent = parseInt(spot.top);
                  const leftPercent = parseInt(spot.left);
                  const showAbove = topPercent > 60;
                  const alignLeft = leftPercent > 70;
                  const alignRight = leftPercent < 30;
                  
                  return (
                    <div
                      key={spot.id}
                      className="absolute"
                      style={{ top: spot.top, left: spot.left, transform: 'translate(-50%, -50%)' }}
                      onMouseEnter={() => setHoveredSpot(spot.id)}
                      onMouseLeave={() => setHoveredSpot(null)}
                    >
                      <div className="w-8 h-8 sm:w-10 sm:h-10 bg-primary text-white rounded-full flex items-center justify-center font-bold text-sm sm:text-base cursor-pointer shadow-lg border-2 border-white hover:scale-110 transition-transform z-10 relative">
                        {spot.id}
                      </div>
                      {hoveredSpot === spot.id && (
                        <div 
                          className={`absolute z-50 bg-white rounded-xl shadow-[0_10px_40px_rgba(0,0,0,0.25)] border border-slate-200 p-4 w-64 ${
                            showAbove ? 'bottom-full mb-2' : 'top-full mt-2'
                          } ${
                            alignLeft ? 'right-0' : alignRight ? 'left-0' : 'left-1/2 -translate-x-1/2'
                          }`}
                        >
                          <div 
                            className={`absolute w-4 h-4 bg-white border-slate-200 rotate-45 ${
                              showAbove 
                                ? 'bottom-[-8px] border-r border-b' 
                                : 'top-[-8px] border-l border-t'
                            } ${
                              alignLeft ? 'right-4' : alignRight ? 'left-4' : 'left-1/2 -translate-x-1/2'
                            }`} 
                          />
                          <h2 className="font-bold text-[#4785f4] mb-2 text-[18px]">{spot.title}</h2>
                          <p className="text-[#666] text-[16px] leading-relaxed">{spot.description}</p>
                        </div>
                      )}
                    </div>
                  );
                })}
              </motion.div>
            </div>
            <p className="mt-8 text-center flex items-center justify-center gap-2 text-[14px] sm:text-[16px] lg:text-[18px] text-[#888]">
              <span className="inline-block w-4 h-4 bg-yellow-400 rounded-full flex items-center justify-center text-[10px] text-white">
                💡
              </span>
              이미지의 번호 위에 마우스를 올려 기능 설명을 확인하세요
            </p>
          </div>
        </div>
      </section>
      {/* 6. 원격 연결 프로세스 (4단계) */}
      <section id="connection-process" className="py-24 bg-white">
        <div className="max-w-[1280px] w-full mx-auto px-4 sm:px-6 lg:px-10">
          <div className="text-center mb-16">
            <h2 className="font-bold mb-4 text-[#333] text-[24px] sm:text-[32px] lg:text-[40px]">
              간편한 4단계 연결로 시간과 비용을 단축하세요
            </h2>
            <p className="text-[#666] max-w-2xl mx-auto text-[14px] sm:text-[16px] lg:text-[18px]">
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
                <p className="text-[#666] text-[14px] sm:text-[16px] lg:text-[18px] relative z-10">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
          <div className="text-center">
            <Link href="/solution/guide">
              <Button
                variant="ghost"
                className="text-[14px] sm:text-[16px] lg:text-[18px] text-[#888] font-bold hover:bg-primary/5"
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
            <h2 className="font-bold mb-4 text-[#333] text-[24px] sm:text-[32px] lg:text-[40px]">애니서포트 원격지원, 5초안에 연결!</h2>
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
                  <p className="text-[#666] text-[14px] sm:text-[16px] lg:text-[18px]">
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
                  <p className="text-[#666] text-[14px] sm:text-[16px] lg:text-[18px]">
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
                  <p className="text-[#666] text-[14px] sm:text-[16px] lg:text-[18px]">
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
              className="h-12 px-6 sm:h-14 sm:px-10 text-base sm:text-lg font-bold shadow-xl shadow-primary/20"
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
            <p className="text-[14px] sm:text-[16px] lg:text-[18px] mb-10 leading-relaxed text-[#d8e2f2]">
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
              <Button size="lg" variant="outline" className="font-bold hover:bg-white/10 border-0 text-[14px] sm:text-[16px] lg:text-[18px] bg-[#ffffff00] text-[#b5b5b5]">
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
            <h2 className="text-[24px] sm:text-[32px] lg:text-[40px] font-bold text-[#333] mb-4 leading-[1.2]">
              26년의 원격지원
              <br />
              숫자와 성과가 증명합니다
            </h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4 md:gap-6 text-center text-[#333] pt-[23px] pb-[23px]">
            <div>
              <Counter value="6000" suffix="+" textColor="#333" />
              <div className="font-normal text-[14px] sm:text-[16px] lg:text-[18px] text-[#666]">
                국내외 도입 기업수
              </div>
            </div>
            <div>
              <Counter value="60000" suffix="+" textColor="#333" />
              <div className="font-normal text-[14px] sm:text-[16px] lg:text-[18px] text-[#666]">
                하루 평균 고객지원수
              </div>
            </div>
            <div>
              <Counter value="93" suffix="%" textColor="#333" />
              <div className="font-normal text-[14px] sm:text-[16px] lg:text-[18px] text-[#666]">
                원격지원 해결율
              </div>
            </div>
            <div>
              <Counter value="95" suffix="%" textColor="#333" />
              <div className="font-normal text-[14px] sm:text-[16px] lg:text-[18px] text-[#666]">
                고객만족도 증가
              </div>
            </div>
            <div>
              <Counter value="175" suffix="억원" textColor="#333" />
              <div className="font-normal text-[14px] sm:text-[16px] lg:text-[18px] text-[#666]">
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
            <h2 className="font-bold mb-4 text-[24px] sm:text-[32px] lg:text-[40px] text-[#333]">
              서비스 도입 방식 선택
            </h2>
            <p className="text-[#666] max-w-2xl mx-auto text-[14px] sm:text-[16px] lg:text-[18px]">
              귀사의 규모와 환경에 맞는 플랜을 선택하세요.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <div className="p-10 rounded-2xl border border-slate-200 hover:border-primary transition-all flex flex-col bg-[#f7f8fc]">
              <h3 className="text-xl lg:text-2xl font-bold mb-4 text-[#333]">구독형 제품 (SaaS)</h3>
              <p className="text-[#666] mb-8 flex-1 text-[14px] sm:text-[16px] lg:text-[18px]">
                월/연 단위 결제로 즉시 사용 가능한 표준 서비스입니다.
                <br />
                중소·중견기업 고객에게 추천합니다.
              </p>
              <Link href="/pricing" data-testid="link-pricing">
                <Button size="lg" className="w-full font-semibold text-[14px] sm:text-[16px] lg:text-[18px]">
                  가격 페이지 보기
                </Button>
              </Link>
            </div>
            <div className="p-10 rounded-2xl border border-slate-200 hover:border-primary transition-all bg-[#f7f8fc] flex flex-col">
              <h3 className="text-xl lg:text-2xl font-bold mb-4 text-[#333]">솔루션 / 연동형 제품</h3>
              <p className="text-[#666] mb-8 flex-1 text-[14px] sm:text-[16px] lg:text-[18px]">
                기존 상담 시스템(CRM/KMS)과 연계 가능한 맞춤형 솔루션입니다.
                <br />
                대기업 및 금융권 환경에 최적화되어 있습니다.
              </p>
              <Button
                size="lg"
                variant="outline"
                onClick={openModal}
                className="w-full text-[14px] sm:text-[16px] lg:text-[18px] font-semibold border-primary text-primary"
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
          <p className="text-[14px] sm:text-[16px] lg:text-[18px] opacity-90 mb-12 max-w-2xl mx-auto font-medium">
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
