import { useState } from "react";
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
  RefreshCw,
  ChevronDown,
  ChevronUp,
  History
} from "lucide-react";
import featuresHeroImg from "@assets/generated_images/modern_digital_dashboard_showing_various_remote_support_features_and_statistics.png";

export default function Features() {
  const { openModal } = useModal();
  const [expandedCategory, setExpandedCategory] = useState<number | null>(null);

  const featureGroups = [
    {
      title: "기본 기능",
      summary: "원격지원에 필요한 필수 기능을 가장 안정적으로 제공합니다.",
      icon: Monitor,
      items: [
        { title: "고성능 원격 제어", desc: "지연 없는 실시간 화면 제어와 빠른 응답 속도를 제공합니다.", icon: Monitor },
        { title: "화면 공유", desc: "고객의 화면을 실시간으로 공유하고 제어할 수 있습니다.", icon: Share2 },
        { title: "파일 전송", desc: "상담 중 필요한 파일을 즉시 전송하고 수신할 수 있습니다.", icon: FileUp },
        { title: "멀티 모니터 지원", desc: "고객의 여러 모니터 화면을 동시에 확인하고 전환할 수 있습니다.", icon: Monitor },
        { title: "클립보드 공유", desc: "상담원과 고객 간의 텍스트 및 이미지 복사/붙여넣기를 지원합니다.", icon: FileText }
      ]
    },
    {
      title: "부가 기능",
      summary: "상담 환경을 풍부하게 만드는 다양한 도구 세트입니다.",
      icon: Zap,
      items: [
        { title: "양방향 음성/영상", desc: "텍스트 너머의 생생한 소통으로 상담 효율을 극대화합니다.", icon: Video },
        { title: "시스템 사운드 공유", desc: "고객 PC의 소리를 상담원 쪽에서도 실시간으로 확인합니다.", icon: Mic },
        { title: "실시간 채팅", desc: "지원 도중 끊김 없는 메시지 교환이 가능합니다.", icon: MessageSquare },
        { title: "원격 프린팅", desc: "고객 PC에서 직접 문서를 인쇄할 수 있습니다.", icon: Printer },
        { title: "화면 그리기(펜)", desc: "화면에 직접 표시하며 설명하여 시각적 이해도를 높입니다.", icon: PenTool }
      ]
    },
    {
      title: "협업·보안",
      summary: "기업 환경에 최적화된 철저한 보안과 협업 기능을 제공합니다.",
      icon: ShieldCheck,
      items: [
        { title: "강력한 보안 인증", desc: "256bit AES 암호화 및 다중 보안 인증을 지원합니다.", icon: ShieldCheck },
        { title: "다중 상담원 접속", desc: "한 명의 고객을 여러 상담원이 동시에 지원할 수 있습니다.", icon: Users },
        { title: "세션 권한 제어", desc: "기능별 사용 권한을 세밀하게 제어하여 보안을 강화합니다.", icon: Settings2 },
        { title: "고객 동의 기반 접속", desc: "사용자의 명시적 허가 없이는 접속이 불가능한 구조입니다.", icon: ShieldCheck },
        { title: "IP 제한 설정", desc: "허가된 IP 대역에서만 접속 가능하도록 통제합니다.", icon: Globe }
      ]
    },
    {
      title: "관리·통계",
      summary: "상담 데이터를 체계적으로 관리하고 인사이트를 도출합니다.",
      icon: BarChart3,
      items: [
        { title: "관리자 대시보드", desc: "전체 상담 현황과 상담원 활동을 한눈에 파악하고 관리합니다.", icon: LayoutDashboard },
        { title: "상세 통계 리포트", desc: "상담 시간, 횟수 등 다양한 데이터를 분석하여 보고서로 제공합니다.", icon: BarChart3 },
        { title: "상담 이력 관리", desc: "과거 상담 내역을 체계적으로 보관하고 간편하게 조회합니다.", icon: History },
        { title: "세션 녹화", desc: "모든 과정을 영상으로 기록하여 교육 및 감사에 활용합니다.", icon: Video },
        { title: "시스템 정보 확인", desc: "고객 PC의 상세 사양과 상태를 실시간으로 확인합니다.", icon: Info }
      ]
    }
  ];

  const toggleCategory = (idx: number) => {
    setExpandedCategory(expandedCategory === idx ? null : idx);
  };

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
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
          </div>
        </div>
      </section>

      {/* 1. Category Accordion Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6 text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-black text-slate-900 mb-4">카테고리별 상세 기능</h2>
          <p className="text-slate-500 font-medium text-lg">각 카드를 클릭하여 애니서포트의 강력한 도구들을 자세히 살펴보세요.</p>
        </div>
        
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col gap-6 max-w-5xl mx-auto">
            {featureGroups.map((group, idx) => (
              <div key={idx} className="flex flex-col">
                <div 
                  onClick={() => toggleCategory(idx)}
                  className={`p-8 md:p-10 rounded-[2.5rem] bg-slate-50 border transition-all duration-500 flex flex-col md:flex-row md:items-center gap-8 cursor-pointer hover:shadow-xl ${expandedCategory === idx ? 'border-primary shadow-lg ring-1 ring-primary/20' : 'border-slate-100'}`}
                >
                  <div className="flex items-center gap-6 flex-1">
                    <div className={`w-16 h-16 rounded-2xl flex items-center justify-center shadow-lg transition-all duration-300 flex-shrink-0 ${expandedCategory === idx ? 'bg-primary text-white scale-110 shadow-primary/30' : 'bg-white text-primary shadow-slate-200'}`}>
                      <group.icon size={32} />
                    </div>
                    <div className="text-left">
                      <h2 className="text-2xl font-black text-slate-900">{group.title}</h2>
                      <p className="text-slate-500 font-bold text-sm mt-1">{group.summary}</p>
                    </div>
                  </div>
                  
                  <div className="flex flex-wrap gap-x-6 gap-y-2 md:justify-end md:items-center flex-1">
                    {group.items.slice(0, 3).map((item, i) => (
                      <div key={i} className="flex items-center gap-2">
                        <CheckCircle2 className="text-primary/60" size={16} />
                        <span className="font-bold text-slate-700 text-sm">{item.title}</span>
                      </div>
                    ))}
                    <p className="text-primary/40 text-xs font-black italic">... 외 {group.items.length - 3}개 기능</p>
                  </div>

                  <div className="md:pl-6 md:border-l border-slate-200 flex items-center gap-3 min-w-[140px] justify-end">
                    <span className="font-black text-primary text-sm whitespace-nowrap">
                      {expandedCategory === idx ? '상세 접기' : '자세히 보기'}
                    </span>
                    {expandedCategory === idx ? <ChevronUp className="text-primary" size={20} /> : <ChevronDown className="text-primary" size={20} />}
                  </div>
                </div>

                {/* Expanded Content (Accordion) */}
                <div className={`overflow-hidden transition-all duration-500 ease-in-out ${expandedCategory === idx ? 'max-h-[1000px] opacity-100 mt-4' : 'max-h-0 opacity-0'}`}>
                  <div className="bg-slate-900 rounded-[2.5rem] p-8 md:p-12 text-white shadow-2xl mx-2">
                    <div className="flex items-center justify-between mb-10 border-b border-white/10 pb-6">
                      <h3 className="text-2xl font-bold flex items-center gap-4">
                        <div className="w-10 h-10 rounded-xl bg-primary/20 flex items-center justify-center">
                          <group.icon className="text-primary" size={24} />
                        </div>
                        {group.title} 전체 기능
                      </h3>
                      <div className="hidden md:block h-[1px] flex-1 mx-8 bg-gradient-to-r from-white/10 to-transparent" />
                    </div>
                    <div className="grid md:grid-cols-2 gap-6">
                      {group.items.map((item, i) => (
                        <div key={i} className="flex gap-5 p-6 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-primary/30 transition-all group/item">
                          <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover/item:bg-primary transition-all duration-300">
                            {item.icon ? <item.icon size={24} className="text-primary group-hover/item:text-white" /> : <CheckCircle2 size={24} className="text-primary group-hover/item:text-white" />}
                          </div>
                          <div>
                            <h4 className="font-bold text-lg mb-1 group-hover/item:text-primary transition-colors">{item.title}</h4>
                            <p className="text-slate-400 text-sm leading-relaxed">{item.desc}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 2. Core Features Summary - 4x2 Grid */}
      <section className="py-24 bg-slate-50 border-y border-slate-100">
        <div className="container mx-auto px-4 md:px-6 text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-slate-900 font-black">핵심 기능 요약</h2>
          <p className="text-slate-500 text-lg max-w-2xl mx-auto font-medium">
            전체 서비스의 8가지 주요 강점을 한눈에 확인하세요.
          </p>
        </div>

        <div className="container mx-auto px-4 md:px-6">
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
      <section className="py-24 bg-white text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-10 text-glow-sm">이 모든 기능을 무료로 체험해 보세요</h2>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Button size="lg" onClick={openModal} className="h-16 px-12 text-xl font-bold shadow-2xl shadow-primary/20 bg-primary hover:bg-primary/90">
              지금 바로 시작하기 <ArrowRight className="ml-2" />
            </Button>
            <Button size="lg" variant="outline" onClick={openModal} className="h-16 px-12 text-xl font-bold border-2 border-slate-200 hover:border-primary hover:text-primary transition-all">
              도입 상담 신청
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
