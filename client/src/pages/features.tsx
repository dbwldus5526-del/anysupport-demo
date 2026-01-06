import { Button } from "@/components/ui/button";
import { useModal } from "@/context/ModalContext";
import { 
  Monitor, 
  Globe, 
  Zap, 
  HelpCircle, 
  Clock, 
  LayoutDashboard,
  CheckCircle2,
  ArrowRight,
  ShieldCheck,
  Video,
  Mic,
  MessageSquare,
  FileUp,
  BarChart3,
  Settings2
} from "lucide-react";
import featuresHeroImg from "@assets/generated_images/modern_digital_dashboard_showing_various_remote_support_features_and_statistics.png";

export default function Features() {
  const { openModal } = useModal();

  const featureGroups = [
    {
      title: "원격 제어 및 공유",
      icon: Monitor,
      items: [
        { title: "고성능 원격 제어", desc: "지연 없는 실시간 화면 제어와 빠른 응답 속도를 제공합니다." },
        { title: "멀티 모니터 지원", desc: "고객의 여러 모니터 화면을 동시에 확인하고 전환할 수 있습니다." },
        { title: "화면 그리기(펜)", desc: "화면에 직접 표시하며 설명하여 시각적 이해도를 높입니다." }
      ]
    },
    {
      title: "커뮤니케이션 도구",
      icon: MessageSquare,
      items: [
        { title: "양방향 음성/영상", icon: Video, desc: "텍스트 너머의 생생한 소통으로 상담 효율을 극대화합니다." },
        { title: "실시간 채팅", icon: MessageSquare, desc: "지원 도중 끊김 없는 메시지 교환이 가능합니다." },
        { title: "시스템 사운드 공유", icon: Mic, desc: "고객 PC의 소리를 상담원 쪽에서도 실시간으로 확인합니다." }
      ]
    },
    {
      title: "파일 및 데이터 관리",
      icon: FileUp,
      items: [
        { title: "드래그 앤 드롭 전송", desc: "파일을 끌어다 놓는 것만으로 대용량 파일도 빠르게 전송합니다." },
        { title: "세션 녹화", desc: "모든 원격지원 과정을 영상으로 기록하여 교육 및 사후 검증에 활용합니다." },
        { title: "클립보드 공유", desc: "상담원과 고객 간의 텍스트 및 이미지 복사/붙여넣기를 지원합니다." }
      ]
    },
    {
      title: "관리 및 통계",
      icon: BarChart3,
      items: [
        { title: "관리자 대시보드", desc: "전체 상담 현황과 상담원 활동을 한눈에 파악하고 관리합니다." },
        { title: "상세 통계 리포트", desc: "상담 시간, 횟수 등 다양한 데이터를 분석하여 보고서로 제공합니다." },
        { title: "상담 이력 관리", desc: "과거 상담 내역을 체계적으로 보관하고 간편하게 조회합니다." }
      ]
    }
  ];

  return (
    <div className="flex flex-col">
      {/* Hero Section - Matching Security Page Style */}
      <section className="relative pt-32 pb-20 overflow-hidden bg-slate-900 text-white">
        <div className="absolute inset-0 z-0">
          <img 
            src={featuresHeroImg} 
            alt="Features Hero" 
            className="w-full h-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-slate-900/50 to-slate-900" />
        </div>
        
        <div className="container mx-auto px-4 md:px-6 relative z-10 text-center">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-black mb-6 leading-tight">
              다양한 기능
            </h1>
            <p className="text-xl md:text-2xl font-bold text-primary mb-6">
              운영 효율을 극대화하는 스마트한 도구들
            </p>
            <p className="text-lg text-slate-300 mb-4 max-w-2xl mx-auto leading-relaxed">
              단순한 원격 제어를 넘어, 기업의 운영 목적에 맞춘<br />
              애니서포트만의 혁신적인 기능들을 확인해 보세요.
            </p>
            <div className="inline-block p-4 rounded-xl bg-white/5 border border-white/10 backdrop-blur-sm">
              <p className="text-slate-400 font-medium italic">
                "복잡한 문제는 해결하고, 상담 경험은 더욱 풍부해집니다."
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Feature Groups Grid */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid lg:grid-cols-2 gap-12">
            {featureGroups.map((group, idx) => (
              <div key={idx} className="p-8 rounded-[2.5rem] bg-slate-50 border border-slate-100 hover:shadow-xl transition-all duration-500">
                <div className="flex items-center gap-4 mb-10">
                  <div className="w-14 h-14 rounded-2xl bg-primary text-white flex items-center justify-center shadow-lg shadow-primary/20">
                    <group.icon size={28} />
                  </div>
                  <h2 className="text-2xl font-black text-slate-900">{group.title}</h2>
                </div>
                
                <div className="space-y-6">
                  {group.items.map((item, i) => (
                    <div key={i} className="flex gap-4 p-5 rounded-2xl bg-white border border-slate-100 group hover:border-primary/30 transition-all">
                      <div className="mt-1">
                        <CheckCircle2 className="text-primary" size={20} />
                      </div>
                      <div>
                        <h4 className="font-bold text-slate-900 mb-1 group-hover:text-primary transition-colors">{item.title}</h4>
                        <p className="text-sm text-slate-500 leading-relaxed font-medium">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Special Power Features (Dark) */}
      <section className="py-24 bg-slate-900 text-white">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <div className="mb-16">
            <span className="text-primary font-black tracking-widest uppercase text-sm mb-4 block">POWER FEATURES</span>
            <h2 className="text-3xl md:text-5xl font-bold mb-6">운영을 위한 기능 중심 설계</h2>
            <p className="text-slate-400 text-lg max-w-2xl mx-auto">
              애니서포트는 단순한 제어 도구가 아닙니다. 기업의 워크플로우를 이해하고 상담원의 편의성을 고려합니다.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              { title: "세션 기록 및 통계", desc: "모든 상담 이력을 투명하게 관리하고 데이터화합니다.", icon: Clock },
              { title: "관리 대시보드", desc: "실시간 연결 현황과 지표를 직관적으로 파악합니다.", icon: LayoutDashboard },
              { title: "맞춤형 환경 설정", desc: "기업의 보안 정책과 브랜드에 맞게 기능을 커스터마이징합니다.", icon: Settings2 }
            ].map((item, i) => (
              <div key={i} className="p-10 rounded-3xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors group">
                <div className="w-16 h-16 rounded-2xl bg-primary/20 text-primary flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                  <item.icon size={32} />
                </div>
                <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-white text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-10">이 모든 기능을 무료로 체험해 보세요</h2>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Button size="lg" onClick={openModal} className="h-16 px-12 text-xl font-bold shadow-2xl shadow-primary/20">
              지금 바로 시작하기 <ArrowRight className="ml-2" />
            </Button>
            <Button size="lg" variant="outline" onClick={openModal} className="h-16 px-12 text-xl font-bold border-2">
              도입 상담 신청
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
