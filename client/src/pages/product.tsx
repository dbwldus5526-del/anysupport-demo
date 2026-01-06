import { Button } from "@/components/ui/button";
import { useModal } from "@/context/ModalContext";
import { 
  Monitor, 
  ShieldCheck, 
  Zap, 
  Clock, 
  FileText, 
  ArrowRight,
  CheckCircle2,
  Users,
  Lock,
  MousePointer2,
  Copy
} from "lucide-react";
import pcHeroImg from "@assets/generated_images/pc_remote_support_hero_background_with_desk_setup.png";

export default function Product() {
  const { openModal } = useModal();

  const features = [
    {
      title: "사내/외부 PC 원격 접속",
      desc: "장소에 구애받지 않고 사내 망 내부나 외부망에 있는 모든 PC에 즉각 연결합니다.",
      icon: Monitor
    },
    {
      title: "관리자 권한 및 세션 제어",
      desc: "보안이 중요한 기업 환경에 맞춰 관리자 권한 승인 및 세션별 접근 통제가 가능합니다.",
      icon: Lock
    },
    {
      title: "강력한 협업 도구",
      desc: "다중 모니터 지원, 대용량 파일 전송, 실시간 원격 제어로 업무 효율을 극대화합니다.",
      icon: Zap
    },
    {
      title: "상담 이력 및 로그 기록",
      desc: "모든 접속 기록과 상담 이력이 클라우드에 자동으로 저장되어 투명한 운영이 가능합니다.",
      icon: FileText
    }
  ];

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden bg-slate-900 text-white">
        <div className="absolute inset-0 z-0">
          <img 
            src={pcHeroImg} 
            alt="PC Remote Support" 
            className="w-full h-full object-cover opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-900/80 to-transparent" />
        </div>
        
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/20 text-primary border border-primary/30 mb-6">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              <span className="text-xs font-bold tracking-wider uppercase">Enterprise IT Support</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-black mb-6 leading-tight">
              기업 내 IT 이슈를<br />
              <span className="text-primary text-glow">가장 빠르고 안전하게</span>
            </h1>
            <p className="text-lg md:text-xl text-slate-300 mb-10 max-w-2xl font-medium leading-relaxed">
              사내 PC부터 외부 현장까지, 전문가의 손길이 필요한 모든 곳을<br className="hidden md:block" />
              애니서포트 PC 원격지원으로 즉각 해결하세요.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button size="lg" onClick={openModal} className="h-14 px-10 text-lg font-bold shadow-xl shadow-primary/20">
                무료체험 시작하기 <ArrowRight className="ml-2" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Summary Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
                복잡한 IT 장애,<br />
                <span className="text-primary">단 한 번의 연결</span>로 해결됩니다.
              </h2>
              <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                기업 환경에서는 사소한 PC 장애도 생산성 저하로 이어집니다. 애니서포트는 
                현장 방문 없이도 상담원이 고객의 PC 화면을 직접 제어하며 문제를 진단하고 
                해결할 수 있는 최적의 환경을 제공합니다.
              </p>
              <ul className="space-y-4">
                {[
                  "사내 PC / 외부 PC 원격 접속 지원",
                  "관리자 권한 제어 및 세션 통제",
                  "다중 모니터 · 파일 전송 · 원격 제어",
                  "상담 이력 및 접속 로그 자동 저장"
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-slate-700 font-semibold">
                    <CheckCircle2 className="text-primary shrink-0" size={24} />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {features.map((feature, i) => (
                <div key={i} className="p-8 rounded-2xl bg-slate-50 border border-slate-100 hover:border-primary/30 transition-all group">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <feature.icon size={24} />
                  </div>
                  <h3 className="text-lg font-bold mb-2 text-slate-900">{feature.title}</h3>
                  <p className="text-sm text-slate-500 leading-relaxed font-medium">{feature.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Detailed Features Cards */}
      <section className="py-24 bg-slate-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-slate-900">압도적인 전문 기능</h2>
            <p className="text-slate-500 text-lg max-w-2xl mx-auto">전문 기술 지원에 특화된 다양한 도구들을 경험해보세요.</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-3xl overflow-hidden border border-slate-200 shadow-sm hover:shadow-xl transition-all">
              <div className="h-48 bg-slate-200 flex items-center justify-center">
                 <MousePointer2 size={64} className="text-slate-400 opacity-20" />
              </div>
              <div className="p-8">
                <h3 className="text-xl font-bold mb-3">고속 원격 제어</h3>
                <p className="text-slate-500 text-sm leading-relaxed mb-4">
                  자체 개발 코덱으로 끊김 없는 고해상도 원격 제어가 가능합니다. 실제 앞에 앉아있는 것 같은 빠른 반응 속도를 보장합니다.
                </p>
              </div>
            </div>
            <div className="bg-white rounded-3xl overflow-hidden border border-slate-200 shadow-sm hover:shadow-xl transition-all">
              <div className="h-48 bg-slate-200 flex items-center justify-center">
                 <Copy size={64} className="text-slate-400 opacity-20" />
              </div>
              <div className="p-8">
                <h3 className="text-xl font-bold mb-3">파일 및 클립보드 공유</h3>
                <p className="text-slate-500 text-sm leading-relaxed mb-4">
                  패치 파일이나 가이드를 즉각 전송하고, 텍스트나 복사한 내용을 서로 공유하여 상담 시간을 획기적으로 단축합니다.
                </p>
              </div>
            </div>
            <div className="bg-white rounded-3xl overflow-hidden border border-slate-200 shadow-sm hover:shadow-xl transition-all">
              <div className="h-48 bg-slate-200 flex items-center justify-center">
                 <Users size={64} className="text-slate-400 opacity-20" />
              </div>
              <div className="p-8">
                <h3 className="text-xl font-bold mb-3">협업 지원(다중 접속)</h3>
                <p className="text-slate-500 text-sm leading-relaxed mb-4">
                  고난도 이슈 발생 시 다른 상담원이 세션에 참여하여 함께 화면을 보며 문제를 해결할 수 있는 협업 환경을 지원합니다.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-white">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-10">복잡한 IT 기술 지원, 지금 바로 시작하세요</h2>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Button size="lg" variant="secondary" onClick={openModal} className="h-16 px-12 text-xl font-bold bg-white text-primary hover:bg-slate-100 shadow-2xl">
              PC 원격지원 자세히 보기
            </Button>
            <Button size="lg" onClick={openModal} className="h-16 px-12 text-xl font-bold bg-primary-foreground text-primary hover:bg-slate-100 border-2 border-white/20">
              무료 체험 시작하기
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
