import { Button } from "@/components/ui/button";
import { useModal } from "@/context/ModalContext";
import { 
  Download,
  BookOpen,
  Globe,
  Settings,
  Headphones,
  ArrowRight,
  User,
  LogIn,
  Link,
  Monitor,
  Hash,
  Activity
} from "lucide-react";
import solutionHeroImg from "@assets/generated_images/professional_enterprise_remote_support_solution_hero_background.png";

export default function Guide() {
  const { openModal } = useModal();

  const usageSteps = [
    { title: "고객의 상담요청", icon: User },
    { title: "상담원 로그인", icon: LogIn },
    { title: "세션연결 시도", icon: Link },
    { title: "고객 접속 페이지 열기", icon: Monitor },
    { title: "접속인증번호 입력", icon: Hash },
    { title: "원격제어 시작", icon: Activity },
  ];

  const sections = [
    {
      title: "가이드",
      subtitle: "쉽고 빠르게 사용해보고 싶을 때",
      icon: BookOpen,
      items: [
        { name: "웹브라우저에서 PC 지원" },
        { name: "웹브라우저에서 영상 지원" },
        { name: "웹브라우저에서 Android 지원" },
        { name: "웹브라우저에서 iOS 지원" },
        { name: "에이전트로 고객 지원" },
        { name: "관리자용 어드민 페이지" },
      ],
      cols: 2
    },
    {
      title: "Web",
      subtitle: "웹브라우저에서 사용할 때",
      icon: Globe,
      items: [
        { name: "PC 지원 매뉴얼" },
        { name: "모바일 지원 매뉴얼 (iOS)" },
        { name: "모바일 지원 매뉴얼 (Android)" },
        { name: "영상 지원 매뉴얼" },
        { name: "웹뷰어 SDK 연동 가이드" },
      ],
      cols: 1
    },
    {
      title: "관리자",
      subtitle: "관리자페이지와 제품별 상세기능이 궁금할 때",
      icon: Settings,
      items: [
        { name: "관리자 페이지 매뉴얼" },
        { name: "제품별 기능 일람표" },
      ],
      cols: 1
    },
    {
      title: "Agent",
      subtitle: "전용 에이전트로 사용할 때",
      icon: Headphones,
      items: [
        { name: "PC 지원 매뉴얼" },
        { name: "영상 지원 매뉴얼" },
        { name: "모바일 지원 매뉴얼 (iOS)" },
        { name: "모바일 지원 매뉴얼 (Android)" },
      ],
      cols: 2
    }
  ];

  const detailedSteps = [
    {
      id: "01",
      target: "고객",
      title: "고객의 상담요청",
      summary: "고객이 콜센터 또는 헬프 데스크를 통해 연락",
      description: "고객과의 통화만으로는 상황파악이 안되거나 설명이 길어져 답답하실때 고객에게 신속하게 대응하지 못하고 계실때 먼저 고객에게 원격지원을 권유하실 수 있습니다.",
      image: "/attached_assets/2_1767771415681.png"
    },
    {
      id: "02",
      target: "상담원",
      title: "상담원 로그인",
      summary: "전달받으신 ID, PW를 사용하여 로그인 합니다.",
      description: "01. 홈페이지를 통해 로그인 하신 후 프로그램을 실행합니다.\n02. 원격지원을 자주 이용하시는 PC라면 설치파일을 통해 웹페이지 접속없이 바로 프로그램을 실행 접속합니다.",
      image: "/attached_assets/howto-normal-02-kr_new_1767771431029.png"
    },
    {
      id: "03",
      target: "상담원",
      title: "세션연결시도",
      summary: "세션번호생성 후 접속페이지 URL과 함께 고객에게 전달",
      description: "상담원은 원격지원 프로그램에서 고객의 확인을 위한 암호화 된 세션번호를 생성, 접속할 원격지원 홈페이지(988.co.kr/ 전용 URL)과 함께 세션번호를 유/무선 상으로 고객에게 전달합니다.",
      image: "/attached_assets/howto-normal-03-kr_new_1767771449038.png"
    },
    {
      id: "04",
      target: "고객",
      title: "고객접속페이지 열기",
      summary: "인터넷창을 열어 988.co.kr에 접속합니다.",
      description: "상담원의 안내에 따라 전달받으신 고객접속 전용 URL 또는 988.co.kr 에 접속합니다.",
      image: "/attached_assets/img-isc01-03_1767771470812.png"
    },
    {
      id: "05",
      target: "고객",
      title: "접속 인증번호 입력",
      summary: "상담원으로부터 전달받은 6자리 번호를 입력합니다.",
      description: "상담원에게 전달받으신 세션번호를 입력하시면 원격지원이 연결됩니다. 전용 URL의 경우 인증번호 입력방식, 번호 클릭(단 한번의 클릭으로 접속) 두가지 방식 중 택1 또는 둘 다 이용하실 수 있습니다.",
      image: "/attached_assets/2image_1767771588546.png"
    },
    {
      id: "06",
      target: "상담원",
      title: "원격제어 시작",
      summary: "고객의 PC에 접속해서 원격지원을 수행합니다.",
      description: "화면공유, 파일송수신, 캔버스 기능, 키보드 / 마우스 제어, 실시간 채팅, 멀티모니터, 음성채팅, 세션전달 등 애니서포트의 다양한 기능을 이용하여 고객의 고민을 해결합니다.",
      image: "/attached_assets/ChatGPT_Image_2025년_6월_2일_오후_02_53_09_1767771623894.png"
    }
  ];

  return (
    <div className="flex flex-col min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative min-h-[40vh] flex items-center pt-32 pb-20 overflow-hidden bg-slate-900 text-white">
        <div className="absolute inset-0 z-0">
          <img 
            src={solutionHeroImg} 
            alt="Guide Hero" 
            className="w-full h-full object-cover opacity-40" 
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-900/80 to-transparent" />
        </div>

        <div className="container mx-auto px-4 md:px-6 relative z-10 text-center">
          <h1 className="text-4xl md:text-6xl font-black text-white mb-6 leading-tight">사용 방법 안내입니다.</h1>
          <p className="text-lg md:text-xl text-slate-300 font-medium max-w-4xl mx-auto leading-relaxed">
            고객님의 애니서포트 사용에 감사드리며, 순차적으로 따라하시면 애니서포트를 쉽게 이용하실 수 있습니다.
          </p>
        </div>
      </section>

      {/* 6-Step Usage Guide Section (Quick Overview) */}
      <section className="py-24 border-b border-slate-100 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 max-w-7xl mx-auto relative">
            {usageSteps.map((step, i) => (
              <div key={i} className="flex flex-col items-center group relative">
                {/* Connector Arrow (Desktop) */}
                {i < usageSteps.length - 1 && (
                  <div className="hidden lg:block absolute top-12 -right-4 translate-x-1/2 z-20">
                    <ArrowRight className="text-slate-200" size={24} />
                  </div>
                )}
                
                <div className="relative mb-6">
                  {/* Step Badge */}
                  <div className="absolute -top-2 -left-2 bg-primary text-white text-[10px] font-black px-2 py-1 rounded-md z-30 shadow-lg">
                    STEP {i + 1}
                  </div>
                  
                  {/* Icon Container with Layered Design */}
                  <div className="w-24 h-24 relative flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
                    <div className="absolute inset-0 bg-blue-50 rounded-[2rem] rotate-6 group-hover:rotate-12 transition-transform duration-500" />
                    <div className="absolute inset-0 bg-blue-600 rounded-[2rem] -rotate-3 shadow-xl shadow-blue-600/20 group-hover:rotate-0 transition-transform duration-500" />
                    <step.icon className="text-white relative z-10 w-10 h-10" strokeWidth={1.5} />
                  </div>
                </div>

                <h3 className="text-slate-900 font-black text-sm text-center leading-tight whitespace-pre-wrap max-w-[120px]">
                  {step.title}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Detailed Step-by-Step Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-7xl mx-auto space-y-32">
            {detailedSteps.map((step, i) => (
              <div key={i} className={`flex flex-col lg:items-center gap-12 lg:gap-20 ${i % 2 === 1 ? 'lg:flex-row-reverse' : 'lg:flex-row'}`}>
                {/* Text Content */}
                <div className="flex-1">
                  <div className="inline-block px-3 py-1 bg-slate-800 text-white text-xs font-bold rounded mb-6">
                    {step.target}
                  </div>
                  <div className="flex items-start gap-8 border-b border-slate-100 pb-8 mb-8">
                    <span className="text-6xl md:text-8xl font-black text-slate-200 leading-none">{step.id}</span>
                    <div>
                      <h3 className="text-2xl md:text-3xl font-black text-slate-900 mb-2">{step.title}</h3>
                      <p className="text-lg md:text-xl font-bold text-slate-800 leading-snug">{step.summary}</p>
                    </div>
                  </div>
                  <p className="text-slate-600 text-base md:text-lg font-medium leading-relaxed whitespace-pre-line">
                    {step.description}
                  </p>
                </div>
                
                {/* Image Content */}
                <div className="flex-1">
                  <div className="relative rounded-3xl overflow-hidden shadow-2xl group">
                    <img 
                      src={step.image} 
                      alt={step.title} 
                      className="w-full h-full object-cover aspect-[4/3] group-hover:scale-105 transition-transform duration-700" 
                    />
                    <div className="absolute inset-0 bg-gradient-to-tr from-slate-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* User Manual Download Section */}
      <section className="py-24 bg-slate-50/50">
        <div className="container mx-auto px-4 md:px-6 text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-black text-slate-900 mb-4">상세 사용자 매뉴얼</h2>
          <p className="text-slate-500 font-bold">필요한 매뉴얼을 다운받아 확인하세요.</p>
        </div>
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid md:grid-cols-2 gap-8 max-w-7xl mx-auto">
            {sections.map((section, idx) => (
              <div key={idx} className="bg-white rounded-3xl overflow-hidden shadow-sm border border-slate-100 flex flex-col">
                <div className="bg-primary p-8 text-white relative">
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="text-2xl font-black mb-2">{section.title}</h3>
                      <p className="text-white/80 text-sm font-bold">{section.subtitle}</p>
                    </div>
                    <div className="bg-white/20 p-3 rounded-2xl backdrop-blur-sm">
                      <section.icon size={28} />
                    </div>
                  </div>
                </div>
                <div className="p-8 bg-slate-50/50 flex-1">
                  <div className={`grid gap-4 ${section.cols === 2 ? 'grid-cols-1 sm:grid-cols-2' : 'grid-cols-1'}`}>
                    {section.items.map((item, i) => (
                      <button 
                        key={i}
                        onClick={openModal}
                        className="flex items-center justify-between p-5 bg-white rounded-2xl border border-slate-100 hover:border-primary hover:shadow-md transition-all group text-left"
                      >
                        <span className="text-slate-700 font-bold text-sm leading-tight pr-4">
                          {item.name}
                        </span>
                        <Download className="text-slate-300 group-hover:text-primary transition-colors shrink-0" size={18} />
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-white border-t border-slate-100">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-black mb-6 text-slate-900">찾으시는 내용이 없나요?</h2>
          <Button size="lg" onClick={openModal} className="h-14 px-10 rounded-2xl font-black text-lg shadow-lg group">
            고객센터 문의하기 <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </section>
    </div>
  );
}

