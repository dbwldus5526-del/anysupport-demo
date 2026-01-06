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
  Settings2,
  Users,
  FileText,
  Smartphone,
  Share2,
  Printer,
  PenTool,
  Info,
  RefreshCw
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
            <p className="text-xl md:text-2xl mb-6 text-[#ffffff] font-medium">
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
      {/* Advanced Features Section - 4x2 Grid */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-slate-900 font-black">고급 기능</h2>
            <p className="text-slate-500 text-lg max-w-2xl mx-auto font-medium">
              더욱 전문적인 원격지원을 위한 고급 기능들
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
            {[
              { title: "실시간 화면 공유", desc: "고객의 화면을 실시간으로 공유하고 제어할 수 있습니다.", icon: Share2 },
              { title: "파일 전송", desc: "상담 중 필요한 파일을 즉시 전송하고 수신할 수 있습니다.", icon: FileUp },
              { title: "원격 프린팅", desc: "고객 PC에서 직접 문서를 인쇄할 수 있습니다.", icon: Printer },
              { title: "채팅 및 음성", desc: "텍스트 채팅과 음성 통화로 원활한 소통이 가능합니다.", icon: MessageSquare },
              { title: "녹화 기능", desc: "상담 내용을 녹화하여 교육 및 품질 관리에 활용합니다.", icon: Video },
              { title: "화이트보드", desc: "화면에 그림을 그리며 직관적으로 설명할 수 있습니다.", icon: PenTool },
              { title: "시스템 정보", desc: "고객 PC의 상세한 시스템 정보를 확인할 수 있습니다.", icon: Info },
              { title: "원격 재부팅", desc: "고객 PC를 원격으로 재부팅하고 자동으로 재연결됩니다.", icon: RefreshCw }
            ].map((item, i) => (
              <div key={i} className="p-10 rounded-3xl bg-white border border-slate-200 hover:shadow-2xl hover:border-primary/20 transition-all duration-300 group flex flex-col items-start shadow-sm">
                <div className="w-14 h-14 rounded-2xl bg-primary/5 text-primary flex items-center justify-center mb-8 group-hover:bg-primary group-hover:text-white transition-all duration-300">
                  <item.icon size={28} />
                </div>
                <h3 className="text-xl font-bold mb-4 text-slate-900 group-hover:text-primary transition-colors leading-tight">{item.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed font-medium">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Core Features Summary - 4x2 Grid */}
      <section className="py-24 bg-slate-50 border-y border-slate-100">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-slate-900 font-black">핵심 기능 요약</h2>
            <p className="text-slate-500 text-lg max-w-2xl mx-auto font-medium">
              애니서포트가 제공하는 8가지 핵심 기능을 한눈에 확인하세요.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
            {[
              { title: "빠른 원격 연결", desc: "3초 이내 즉시 연결되는 초고속 원격 지원 기술", icon: Zap },
              { title: "강력한 보안", desc: "256bit AES 암호화 및 다중 보안 인증", icon: ShieldCheck },
              { title: "글로벌 지원", desc: "전세계 어디서나 안정적인 원격지원", icon: Globe },
              { title: "24/7 상담", desc: "연중무휴 동시 다중 고객 상담 가능", icon: Clock },
              { title: "다중 상담원", desc: "한 명의 상담원이 최대 10명 동시 상담", icon: Users },
              { title: "상담 기록", desc: "모든 상담 내역 자동 저장 및 분석", icon: FileText },
              { title: "화상 상담", desc: "HD 화질의 실시간 비디오 상담", icon: Video },
              { title: "모바일 지원", desc: "Android, iOS 모바일 기기 원격 제어", icon: Smartphone }
            ].map((item, i) => (
              <div key={i} className="p-10 rounded-3xl bg-white border border-slate-200 hover:shadow-2xl hover:border-primary/20 transition-all duration-300 group flex flex-col items-start shadow-sm">
                <div className="w-14 h-14 rounded-2xl bg-primary/5 text-primary flex items-center justify-center mb-8 group-hover:bg-primary group-hover:text-white transition-all duration-300">
                  <item.icon size={28} />
                </div>
                <h3 className="text-xl font-bold mb-4 text-slate-900 group-hover:text-primary transition-colors leading-tight">{item.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed font-medium">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
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
