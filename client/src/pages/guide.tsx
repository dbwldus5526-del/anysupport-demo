import { Button } from "@/components/ui/button";
import { useModal } from "@/context/ModalContext";
import { 
  Download,
  BookOpen,
  Globe,
  Settings,
  Headphones,
  ArrowRight
} from "lucide-react";
import solutionHeroImg from "@assets/generated_images/professional_enterprise_remote_support_solution_hero_background.png";

export default function Guide() {
  const { openModal } = useModal();

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

  return (
    <div className="flex flex-col min-h-screen bg-slate-50">
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
          <h1 className="text-4xl md:text-6xl font-black text-white mb-6">사용자 매뉴얼</h1>
          <p className="text-lg md:text-xl text-slate-300 font-medium max-w-2xl mx-auto">
            필요한 매뉴얼을 다운받아 확인하세요.
          </p>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-20">
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
