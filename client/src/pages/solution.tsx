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
  FileText,
  Headphones,
  Activity,
} from "lucide-react";
import solutionHeroImg from "@assets/generated_images/professional_enterprise_remote_support_solution_hero_background.png";
import { Link } from "wouter";

export default function Solution() {
  const { openModal } = useModal();

  return (
    <div className="flex flex-col">
      {/* 1. 애니서포트 소개 Hero */}
      <section className="relative min-h-[80vh] flex items-center pt-32 pb-20 overflow-hidden bg-slate-900 text-white">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <img
            src={solutionHeroImg}
            alt="Solution Background"
            className="w-full h-full object-cover opacity-60"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-900/80 to-transparent" />
        </div>

        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="grid lg:grid-cols-1 gap-12 items-center">
            <div className="max-w-3xl">
              <span className="font-bold md:text-sm tracking-widest uppercase mb-4 block text-[16px] text-[#ffffff]">
                ANY SUPPORT SOLUTION
              </span>
              <h1 className="text-4xl md:text-6xl font-black text-white mb-6 leading-tight">
                고객과 기업을 잇는
                <br />
                <span className="text-primary">최고의 원격지원 SaaS</span>
              </h1>
              <p className="text-lg md:text-2xl font-bold text-slate-200 mb-8 leading-relaxed">
                애니서포트는 고객 상담, IT 지원, 운영 지원을 하나로 연결하는
                <br className="hidden md:block" /> 기업용 원격지원애니서포트
              </p>
              <div className="grid md:grid-cols-2 gap-x-8 gap-y-4 mb-10">
                {[
                  "기업 환경에 최적화된 원격지원 솔루션",
                  "보안·관리·확장성 중심 설계",
                  "국내 기업 환경에 맞춘 기술 지원",
                ].map((item, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-3 font-medium text-[18px] text-[#dce8f5]"
                  >
                    <CheckCircle2 className="text-primary shrink-0" size={22} />
                    {item}
                  </div>
                ))}
              </div>
              <Button
                size="lg"
                onClick={openModal}
                className="h-16 px-10 font-black text-xl shadow-2xl shadow-primary/20 group"
              >
                도입 문의하기{" "}
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
          </div>
        </div>
      </section>
      {/* 2. 원격지원이란 무엇인가 */}
      <section id="what-is-remote" className="py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mt-[34px] mb-[34px]">
            <span className="text-primary font-bold tracking-widest uppercase mb-3 block text-[14px]">
              REMOTE SUPPORT
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6 text-[#333]">
              원격지원(Remote Support)이란?
            </h2>
            <p className="text-primary font-bold text-base sm:text-lg mb-2">
              현장 방문 없이 온라인으로 문제를 즉각 해결하는 기술
            </p>
            <p className="max-w-2xl mx-auto sm:text-base font-normal text-[18px] text-[#666]">
              애니서포트는 상담원이 고객의 PC나 모바일 화면을 공유받아
              <br className="hidden md:block" />
              직접 제어함으로써 장애를 진단하고 해결하는 기업용 전문
              서비스입니다.
            </p>
          </div>

          <div className="max-w-4xl mx-auto mb-16">
            <div className="bg-slate-50 rounded-2xl p-8 md:p-12 border border-slate-100 flex items-center justify-center relative overflow-hidden pt-[36px] pb-[36px] pl-[52px] pr-[52px]">
              <div className="grid grid-cols-3 gap-8 items-center w-full max-w-lg relative z-10">
                <div className="flex flex-col items-center gap-3">
                  <div className="w-20 h-20 rounded-full bg-white shadow-lg flex items-center justify-center text-primary border border-slate-50">
                    <Headphones size={36} />
                  </div>
                  <span className="text-[18px] font-medium text-[#333]">
                    상담원
                  </span>
                </div>
                <div className="flex flex-col items-center justify-center">
                  <div className="h-0.5 w-full bg-slate-200 relative">
                    <div className="absolute inset-0 bg-primary animate-pulse" />
                  </div>
                  <span className="text-primary uppercase tracking-widest text-center text-[18px] font-extrabold mt-[3px] mb-[3px]">
                    Secure Connection
                  </span>
                </div>
                <div className="flex flex-col items-center gap-3">
                  <div className="w-20 h-20 rounded-full bg-white shadow-lg flex items-center justify-center text-slate-400 border border-slate-50">
                    <Monitor size={36} />
                  </div>
                  <span className="text-[18px] text-[#333] font-medium">고객</span>
                </div>
              </div>
              <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[radial-gradient(#3b82f6_1px,transparent_1px)] [background-size:20px_20px]" />
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12 max-w-5xl mx-auto">
            {[
              {
                icon: Activity,
                title: "무엇을 하는가?",
                desc: "고객의 이탈 없이 즉각적인 장애 진단, 소프트웨어 설정, 시스템 복구 등 전문적인 기술 지원 서비스를 제공합니다.",
              },
              {
                icon: Zap,
                title: "어떻게 작동하는가?",
                desc: "복잡한 설치 과정 없이 생성된 접속 번호 입력만으로 보안 세션이 연결되며, 브라우저나 앱을 통해 실시간 제어가 시작됩니다.",
              },
              {
                icon: Building2,
                title: "왜 필요한가?",
                desc: "기업의 지원 비용을 획기적으로 낮추고 상담 생산성을 높이며, 대면 지원의 물리적 제약을 극복하기 위해 필수적입니다.",
              },
            ].map((card, i) => (
              <div
                key={i}
                className="p-8 rounded-2xl border border-slate-100 bg-white shadow-sm text-center flex flex-col items-center"
              >
                <div className="w-14 h-14 rounded-full bg-primary/10 text-primary flex items-center justify-center mb-6">
                  <card.icon size={28} />
                </div>
                <h4 className="text-xl font-bold mb-3 text-[#333]">{card.title}</h4>
                <p className="text-[18px] font-normal text-[#666]">
                  {card.desc}
                </p>
              </div>
            ))}
          </div>

          <div className="text-center">
            <Link href="/solution/guide">
              <Button
                variant="outline"
                size="lg"
                className="font-bold border-slate-200 hover:bg-slate-50 text-[18px] text-[#333]"
              >
                원격지원 작동 방식 자세히 보기
              </Button>
            </Link>
          </div>
        </div>
      </section>
      {/* 3. 다양한 기능 */}
      <section className="py-24 bg-slate-900 text-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <h2 className="text-[25px] md:text-4xl font-bold mb-4">
              다양한 기능
            </h2>
            <p className="text-slate-400 text-[14px] md:text-lg">
              단순한 원격 제어가 아닌 운영을 위한 기능 중심 설계
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 mb-16">
            {[
              { title: "원격 제어", icon: Monitor },
              { title: "화면 공유", icon: Globe },
              { title: "파일 전송", icon: Zap },
              { title: "채팅/음성/영상", icon: HelpCircle },
              { title: "세션 기록/통계", icon: Clock },
              { title: "관리 대시보드", icon: LayoutDashboard },
            ].map((item, i) => (
              <div
                key={i}
                className="p-8 rounded-2xl border border-white/10 bg-white/5 text-center flex flex-col items-center gap-4 hover:bg-white/10 transition-colors"
              >
                <item.icon className="text-primary" size={32} />
                <span className="text-[18px] font-medium">{item.title}</span>
              </div>
            ))}
          </div>
          <div className="flex justify-center">
            <Link href="/solution/features">
              <Button
                size="lg"
                className="h-14 px-10 text-lg font-bold border-2 border-primary/20 bg-transparent hover:bg-primary/10 text-white transition-all"
              >
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
            <h2 className="text-[25px] md:text-4xl font-bold mb-4 text-[#333]">
              사용 방법
            </h2>
            <p className="md:text-base text-[#666] text-[18px]">
              누구나 바로 사용 가능한 간편한 프로세스
            </p>
          </div>
          <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-8">
            <div className="flex-1 space-y-6">
              {[
                {
                  step: "01",
                  title: "상담원이 접속 요청",
                  desc: "상담원이 고객에게 링크 또는 번호 전달",
                },
                {
                  step: "02",
                  title: "고객 인증 및 동의",
                  desc: "고객의 명시적 동의 후 원격 연결",
                },
                {
                  step: "03",
                  title: "원격 연결 시작",
                  desc: "문제 진단 및 실시간 지원 진행",
                },
                {
                  step: "04",
                  title: "지원 완료 및 종료",
                  desc: "종료 후 상담 이력 자동 저장",
                },
              ].map((item, i) => (
                <div
                  key={i}
                  className="flex gap-4 p-4 rounded-xl border border-slate-50 hover:bg-slate-50 transition-colors pt-[11px] pb-[11px]"
                >
                  <span className="font-black text-primary/30 text-[30px]">
                    {item.step}
                  </span>
                  <div>
                    <h4 className="font-bold mb-1 text-[18px] text-[#333]">
                      {item.title}
                    </h4>
                    <p className="text-[18px] text-[#666]">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="flex-1 bg-slate-50 p-10 rounded-3xl border border-slate-100 flex flex-col items-center text-center">
              <div className="text-5xl mb-6">🚀</div>
              <h3 className="text-2xl font-bold mb-4">설치 없는 원격지원</h3>
              <p className="mb-8 text-[18px] font-normal text-[#666]">
                복잡한 설치 없이 브라우저에서 바로!
                <br />
                언제 어디서나 즉각적인 고객 응대가 가능합니다.
              </p>
              <div className="flex gap-4">
                <div className="px-4 py-2 bg-white rounded-lg shadow-sm font-bold text-slate-400">
                  설치 ❌
                </div>
                <div className="px-4 py-2 bg-white rounded-lg shadow-sm font-bold text-primary">
                  즉시 사용 ⭕️
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* 5. 사용 환경 */}
      <section className="py-24 bg-slate-50 pt-[66px] pb-[66px]">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <h2 className="text-[25px] md:text-4xl font-bold mb-4 text-[#333]">
              사용 환경
            </h2>
            <p className="md:text-base text-[#666] text-[18px]">
              기업의 환경에 맞춰 유연하게 도입하세요.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
            <div className="bg-white p-10 rounded-3xl border border-slate-200 shadow-sm">
              <h3 className="text-xl font-bold mb-8 flex items-center gap-2 text-[#333]">
                <Monitor className="text-primary" size={24} /> 지원 환경
              </h3>
              <div className="space-y-4">
                <div className="flex justify-between p-3 border-b border-slate-50">
                  <span className="font-extrabold text-[18px] text-[#333]">OS</span>
                  <span className="font-normal text-[18px] text-[#666]">
                    Windows / macOS / Android / iOS
                  </span>
                </div>
                <div className="flex justify-between p-3 border-b border-slate-50">
                  <span className="text-[#333] font-extrabold text-[18px]">Browser</span>
                  <span className="text-[#666] text-[18px] font-normal">Chrome / Edge / Safari</span>
                </div>
              </div>
            </div>
            <div className="bg-white p-10 rounded-3xl border border-slate-200 shadow-sm pl-[21px] pr-[21px]">
              <h3 className="text-xl font-bold mb-8 flex items-center gap-2 text-[#333]">
                <Cloud className="text-primary" size={24} /> 도입 형태
              </h3>
              <div className="space-y-4">
                <div className="flex items-center gap-4 p-4 rounded-xl bg-slate-50">
                  <Cloud className="text-primary" size={24} />
                  <div>
                    <h4 className="font-bold text-[18px] text-[#333]">클라우드(SaaS)</h4>
                    <p className="text-[18px] text-[#666]">
                      별도 서버 구축 없이 즉시 사용
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-4 p-4 rounded-xl bg-slate-50">
                  <Building2 className="text-primary" size={24} />
                  <div>
                    <h4 className="font-bold text-[#333] text-[18px]">온프레미스</h4>
                    <p className="text-[18px] text-[#666]">
                      기업 내 인프라 직접 설치 (문의 필요)
                    </p>
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
          <h2 className="text-3xl md:text-4xl font-bold mb-8">
            성공적인 디지털 전환, 애니서포트와 시작하세요.
          </h2>
          <Button
            size="lg"
            variant="secondary"
            onClick={openModal}
            className="h-16 px-12 text-xl font-bold bg-white text-primary hover:bg-slate-100 shadow-2xl"
          >
            솔루션 문의하기
          </Button>
        </div>
      </section>
    </div>
  );
}
