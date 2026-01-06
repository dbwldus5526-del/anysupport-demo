import { Button } from "@/components/ui/button";
import { useModal } from "@/context/ModalContext";
import { 
  ShieldCheck, 
  Settings, 
  HelpCircle, 
  Monitor, 
  Smartphone, 
  Cloud, 
  Building2,
  CheckCircle2,
  Lock,
  Zap,
  Clock,
  LayoutDashboard,
  ArrowRight,
  Globe,
  Database,
  FileText
} from "lucide-react";
import solutionHeroImg from "@assets/generated_images/professional_enterprise_remote_support_solution_hero_background.png";
import { Link } from "wouter";

export default function Solution() {
  const { openModal } = useModal();

  return (
    <div className="flex flex-col">
      {/* 1. 애니서포트 소개 Hero */}
      <section className="relative pt-32 pb-20 overflow-hidden bg-slate-50">
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="max-w-2xl">
              <span className="text-primary font-bold text-sm tracking-widest uppercase mb-4 block">ANY SUPPORT SOLUTION</span>
              <h1 className="text-4xl md:text-5xl font-black text-slate-900 mb-6 leading-tight">
                고객과 기업을 잇는<br />
                <span className="text-primary">최고의 원격지원 SaaS</span>
              </h1>
              <p className="text-xl font-bold text-slate-800 mb-4">
                애니서포트는 고객 상담, IT 지원, 운영 지원을 하나로 연결하는 기업용 원격지원 SaaS입니다.
              </p>
              <div className="space-y-4 mb-8">
                {[
                  "기업 환경에 최적화된 원격지원 솔루션",
                  "보안·관리·확장성 중심 설계",
                  "국내 기업 환경에 맞춘 기술 지원"
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3 text-slate-600 font-medium">
                    <CheckCircle2 className="text-primary" size={20} />
                    {item}
                  </div>
                ))}
              </div>
              <Button size="lg" onClick={openModal} className="h-14 px-8 font-bold text-lg shadow-lg">
                도입 문의하기 <ArrowRight className="ml-2" />
              </Button>
            </div>
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-slate-200 aspect-video">
              <img src={solutionHeroImg} alt="Solution Background" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* 3. 다양한 기능 */}
      <section className="py-24 bg-slate-900 text-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">다양한 기능</h2>
            <p className="text-slate-400 text-lg">단순한 원격 제어가 아닌 운영을 위한 기능 중심 설계</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 mb-16">
            {[
              { title: "원격 제어", icon: Monitor },
              { title: "화면 공유", icon: Globe },
              { title: "파일 전송", icon: Zap },
              { title: "채팅/음성/영상", icon: HelpCircle },
              { title: "세션 기록/통계", icon: Clock },
              { title: "관리 대시보드", icon: LayoutDashboard }
            ].map((item, i) => (
              <div key={i} className="p-8 rounded-2xl border border-white/10 bg-white/5 text-center flex flex-col items-center gap-4 hover:bg-white/10 transition-colors">
                <item.icon className="text-primary" size={32} />
                <span className="font-bold">{item.title}</span>
              </div>
            ))}
          </div>
          <div className="flex justify-center">
            <Link href="/solution/features">
              <Button size="lg" className="h-14 px-10 text-lg font-bold border-2 border-primary/20 bg-transparent hover:bg-primary/10 text-white transition-all">
                기능 더 자세히 보기 <ArrowRight className="ml-2" size={20} />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* 4. 사용 방법 */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">사용 방법</h2>
            <p className="text-slate-500">누구나 바로 사용 가능한 간편한 프로세스</p>
          </div>
          <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-8">
            <div className="flex-1 space-y-6">
              {[
                { step: "01", title: "상담원이 접속 요청", desc: "상담원이 고객에게 링크 또는 번호 전달" },
                { step: "02", title: "고객 인증 및 동의", desc: "고객의 명시적 동의 후 원격 연결" },
                { step: "03", title: "원격 연결 시작", desc: "문제 진단 및 실시간 지원 진행" },
                { step: "04", title: "지원 완료 및 종료", desc: "종료 후 상담 이력 자동 저장" }
              ].map((item, i) => (
                <div key={i} className="flex gap-4 p-4 rounded-xl border border-slate-50 hover:bg-slate-50 transition-colors">
                  <span className="text-2xl font-black text-primary/30 leading-none">{item.step}</span>
                  <div>
                    <h4 className="font-bold text-slate-900 mb-1">{item.title}</h4>
                    <p className="text-sm text-slate-500">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="flex-1 bg-slate-50 p-10 rounded-3xl border border-slate-100 flex flex-col items-center text-center">
              <div className="text-5xl mb-6">🚀</div>
              <h3 className="text-2xl font-bold mb-4">설치 없는 원격지원</h3>
              <p className="text-slate-600 mb-8 font-medium">
                복잡한 설치 없이 브라우저에서 바로!<br />
                언제 어디서나 즉각적인 고객 응대가 가능합니다.
              </p>
              <div className="flex gap-4">
                <div className="px-4 py-2 bg-white rounded-lg shadow-sm font-bold text-slate-400">설치 ❌</div>
                <div className="px-4 py-2 bg-white rounded-lg shadow-sm font-bold text-primary">즉시 사용 ⭕️</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. 사용 환경 */}
      <section className="py-24 bg-slate-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">사용 환경</h2>
            <p className="text-slate-500">기업의 환경에 맞춰 유연하게 도입하세요.</p>
          </div>
          <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
            <div className="bg-white p-10 rounded-3xl border border-slate-200 shadow-sm">
              <h3 className="text-xl font-bold mb-8 flex items-center gap-2">
                <Monitor className="text-primary" size={24} /> 지원 환경
              </h3>
              <div className="space-y-4">
                <div className="flex justify-between p-3 border-b border-slate-50">
                  <span className="font-bold text-slate-600">OS</span>
                  <span className="font-medium">Windows / macOS / Android / iOS</span>
                </div>
                <div className="flex justify-between p-3 border-b border-slate-50">
                  <span className="font-bold text-slate-600">Browser</span>
                  <span className="font-medium">Chrome / Edge / Safari</span>
                </div>
              </div>
            </div>
            <div className="bg-white p-10 rounded-3xl border border-slate-200 shadow-sm">
              <h3 className="text-xl font-bold mb-8 flex items-center gap-2">
                <Cloud className="text-primary" size={24} /> 도입 형태
              </h3>
              <div className="space-y-4">
                <div className="flex items-center gap-4 p-4 rounded-xl bg-slate-50">
                  <Cloud className="text-primary" size={24} />
                  <div>
                    <h4 className="font-bold text-slate-900">클라우드(SaaS)</h4>
                    <p className="text-xs text-slate-500">별도 서버 구축 없이 즉시 사용</p>
                  </div>
                </div>
                <div className="flex items-center gap-4 p-4 rounded-xl bg-slate-50">
                  <Building2 className="text-primary" size={24} />
                  <div>
                    <h4 className="font-bold text-slate-900">온프레미스</h4>
                    <p className="text-xs text-slate-500">기업 내 인프라 직접 설치 (문의 필요)</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-primary text-white text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-8">성공적인 디지털 전환, 애니서포트와 시작하세요.</h2>
          <Button size="lg" variant="secondary" onClick={openModal} className="h-16 px-12 text-xl font-bold bg-white text-primary hover:bg-slate-100 shadow-2xl">
            솔루션 문의하기
          </Button>
        </div>
      </section>
    </div>
  );
}
