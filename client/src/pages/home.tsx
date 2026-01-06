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
  Database
} from "lucide-react";
import heroImage from "@assets/generated_images/clean_professional_b2b_saas_hero_background.png";
import pcSupportImg from "@assets/generated_images/pc_remote_support_professional_image.png";
import mobileSupportImg from "@assets/generated_images/mobile_remote_support_app_interface.png";
import videoSupportImg from "@assets/generated_images/video-based_remote_support_concept.png";

export function Home() {
  const { openModal } = useModal();

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="flex flex-col">
      {/* 1. Hero Section */}
      <section className="relative min-h-[600px] flex items-center pt-20 pb-20 overflow-hidden bg-white">
        <div className="absolute inset-0 z-0">
          <img 
            src={heroImage} 
            alt="AnySupport Background" 
            className="w-full h-full object-cover object-right opacity-80"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-white via-white/95 to-transparent lg:w-2/3" />
        </div>
        
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-6xl font-black text-slate-900 leading-[1.1] mb-6">
              기업 상담과 지원을<br />
              <span className="text-primary">빠르고 안전하게</span>
            </h1>
            <p className="text-lg md:text-xl text-slate-600 mb-10 max-w-2xl font-medium leading-relaxed">
              고객 상담·IT 지원·운영 지원을 하나로 연결하는<br className="hidden md:block" />
              기업용 원격지원 SaaS 애니서포트
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" onClick={openModal} className="h-14 px-10 text-lg font-bold shadow-xl shadow-primary/20">
                무료체험 시작하기 <ArrowRight className="ml-2" />
              </Button>
              <Button variant="outline" size="lg" onClick={() => scrollToSection('what-is-remote')} className="h-14 px-10 text-lg font-bold bg-white/80 backdrop-blur-sm border-slate-200">
                제품 자세히 보기
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* 2. 원격지원이란 무엇인가 */}
      <section id="what-is-remote" className="py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <span className="text-primary font-bold text-xs tracking-widest uppercase mb-3 block">REMOTE SUPPORT</span>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-slate-900">원격지원(Remote Support)이란?</h2>
            <p className="text-primary font-bold text-lg mb-2">현장 방문 없이 온라인으로 문제를 즉각 해결하는 기술</p>
            <p className="text-slate-500 font-medium leading-relaxed max-w-2xl mx-auto">
              애니서포트는 상담원이 고객의 PC나 모바일 화면을 공유받아<br className="hidden md:block" />
              직접 제어함으로써 장애를 진단하고 해결하는 기업용 전문 서비스입니다.
            </p>
          </div>

          <div className="max-w-4xl mx-auto mb-16">
            <div className="bg-slate-50 rounded-2xl p-8 md:p-12 border border-slate-100 flex items-center justify-center relative overflow-hidden">
              <div className="grid grid-cols-3 gap-8 items-center w-full max-w-lg relative z-10">
                <div className="flex flex-col items-center gap-3">
                  <div className="w-20 h-20 rounded-full bg-white shadow-lg flex items-center justify-center text-primary border border-slate-50">
                    <Headphones size={36} />
                  </div>
                  <span className="text-sm font-bold text-slate-600">상담원</span>
                </div>
                <div className="flex flex-col items-center justify-center">
                  <div className="h-0.5 w-full bg-slate-200 relative">
                    <div className="absolute inset-0 bg-primary animate-pulse" />
                  </div>
                  <span className="text-[10px] font-bold text-primary mt-3 uppercase tracking-widest">Secure Connection</span>
                </div>
                <div className="flex flex-col items-center gap-3">
                  <div className="w-20 h-20 rounded-full bg-white shadow-lg flex items-center justify-center text-slate-400 border border-slate-50">
                    <Monitor size={36} />
                  </div>
                  <span className="text-sm font-bold text-slate-600">고객</span>
                </div>
              </div>
              <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[radial-gradient(#3b82f6_1px,transparent_1px)] [background-size:20px_20px]" />
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12 max-w-5xl mx-auto">
            {[
              { icon: Activity, title: "무엇을 하는가?", desc: "고객의 이탈 없이 즉각적인 장애 진단, 소프트웨어 설정, 시스템 복구 등 전문적인 기술 지원 서비스를 제공합니다." },
              { icon: Zap, title: "어떻게 작동하는가?", desc: "복잡한 설치 과정 없이 생성된 접속 번호 입력만으로 보안 세션이 연결되며, 브라우저나 앱을 통해 실시간 제어가 시작됩니다." },
              { icon: Building2, title: "왜 필요한가?", desc: "기업의 지원 비용을 획기적으로 낮추고 상담 생산성을 높이며, 대면 지원의 물리적 제약을 극복하기 위해 필수적입니다." }
            ].map((card, i) => (
              <div key={i} className="p-8 rounded-2xl border border-slate-100 bg-white shadow-sm text-center flex flex-col items-center">
                <div className="w-14 h-14 rounded-full bg-primary/10 text-primary flex items-center justify-center mb-6">
                  <card.icon size={28} />
                </div>
                <h4 className="text-xl font-bold mb-3">{card.title}</h4>
                <p className="text-slate-500 text-sm font-medium leading-relaxed">
                  {card.desc}
                </p>
              </div>
            ))}
          </div>

          <div className="text-center">
            <Button variant="outline" size="lg" onClick={() => scrollToSection('connection-process')} className="font-bold border-slate-200 text-slate-700 hover:bg-slate-50">
              원격지원 작동 방식 자세히 보기
            </Button>
          </div>
        </div>
      </section>

      {/* 3. 왜 원격지원 애니서포트인가 (신뢰 요소) */}
      <section className="py-24 bg-slate-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">왜 애니서포트인가요?</h2>
            <p className="text-slate-500 max-w-2xl mx-auto text-lg">기업이 신뢰할 수 있는 압도적인 기술력과 안정성</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: Zap, title: "안정성", desc: "99.9% 연결 성공률 보장" },
              { icon: ShieldCheck, title: "보안", desc: "금융권 수준의 암호화 기술" },
              { icon: Building2, title: "기업 도입 사례", desc: "1,000+ 글로벌 기업 도입" },
              { icon: Activity, title: "운영 신뢰성", desc: "24/365 중단 없는 모니터링" }
            ].map((item, i) => (
              <div key={i} className="bg-white p-8 rounded-2xl border border-slate-100 shadow-sm text-center">
                <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center text-primary mx-auto mb-6">
                  <item.icon size={28} />
                </div>
                <h3 className="text-lg font-bold mb-2">{item.title}</h3>
                <p className="text-slate-500 text-sm font-medium">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. 다양한 환경과 기기 지원 */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">환경과 기기에 제한 없는 원격지원</h2>
            <p className="text-slate-500 max-w-2xl mx-auto text-lg">어떤 환경에서도 고객과 연결될 수 있습니다.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {[
              { image: pcSupportImg, title: "PC 지원", desc: "Windows, macOS, Linux 지원" },
              { image: mobileSupportImg, title: "Mobile 지원", desc: "Android, iOS 실시간 제어" },
              { image: videoSupportImg, title: "Video 지원", desc: "현장 영상 기반 원격 가이드" }
            ].map((item, i) => (
              <div key={i} className="overflow-hidden rounded-2xl border border-slate-100 bg-white shadow-sm flex flex-col group hover:shadow-md transition-shadow">
                <div className="aspect-[4/3] overflow-hidden relative">
                   <img src={item.image} alt={item.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                   <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 to-transparent opacity-60" />
                </div>
                <div className="p-8 text-center border-t border-slate-50">
                  <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                  <p className="text-slate-500 text-sm font-medium">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center">
            <Button variant="outline" size="lg" onClick={() => scrollToSection('features')} className="font-bold border-primary text-primary hover:bg-primary/5">
              제품 자세히 보기
            </Button>
          </div>
        </div>
      </section>

      {/* 5. 애니서포트 핵심 기능 */}
      <section id="features" className="py-24 bg-slate-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">애니서포트 핵심 기능</h2>
            <p className="text-slate-500 max-w-2xl mx-auto text-lg">효율적인 지원을 위한 강력한 도구 모음</p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 mb-12 max-w-6xl mx-auto">
            {[
              { icon: MessageSquare, title: "채팅/메시지" },
              { icon: Zap, title: "화면 제어" },
              { icon: FileText, title: "파일 전송" },
              { icon: Clock, title: "상담 기록" },
              { icon: Users, title: "다중 접속" },
              { icon: Monitor, title: "듀얼 모니터" },
              { icon: Lock, title: "권한 관리" },
              { icon: Activity, title: "시스템 진단" },
              { icon: Globe, title: "브라우저 제어" },
              { icon: Database, title: "로그 분석" }
            ].map((item, i) => (
              <div key={i} className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm flex flex-col items-center gap-4 hover:border-primary/50 transition-colors group">
                <div className="w-12 h-12 rounded-full bg-slate-50 flex items-center justify-center group-hover:bg-primary/5 transition-colors">
                  <item.icon size={24} className="text-primary" />
                </div>
                <span className="font-bold text-slate-800 text-sm">{item.title}</span>
              </div>
            ))}
          </div>
          <div className="text-center">
            <Button size="lg" onClick={openModal} className="font-bold shadow-lg">
              애니서포트 기능 자세히 보기
            </Button>
          </div>
        </div>
      </section>

      {/* 6. 원격 연결 프로세스 (4단계) */}
      <section id="connection-process" className="py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">간편한 4단계 연결 프로세스</h2>
            <p className="text-slate-500 max-w-2xl mx-auto text-lg">누구나 1분 안에 원격 지원을 시작할 수 있습니다.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {[
              { step: "01", title: "상담원 로그인", desc: "웹 대시보드에서 계정 로그인" },
              { step: "02", title: "접속 번호 생성", desc: "고객에게 전달할 6자리 번호 생성" },
              { step: "03", title: "고객 번호 입력", desc: "고객이 페이지에서 번호 입력" },
              { step: "04", title: "원격 연결 시작", desc: "즉시 화면 공유 및 제어 시작" }
            ].map((item, i) => (
              <div key={i} className="relative p-8 rounded-2xl bg-slate-50 border border-slate-100">
                <span className="text-primary/20 text-5xl font-black absolute top-4 right-6">{item.step}</span>
                <h3 className="text-lg font-bold mb-2 relative z-10">{item.title}</h3>
                <p className="text-slate-500 text-sm font-medium relative z-10">{item.desc}</p>
              </div>
            ))}
          </div>
          <div className="text-center">
            <Button variant="ghost" onClick={openModal} className="font-bold text-primary hover:bg-primary/5">
              사용 방법 자세히 보기 <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
          </div>
        </div>
      </section>

      {/* 7. 기술력 & 보안 */}
      <section className="py-24 bg-slate-900 text-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-block p-3 rounded-full bg-primary/20 text-primary mb-6">
              <ShieldCheck size={40} />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">강력한 기술력과 타협 없는 보안</h2>
            <p className="text-slate-400 text-lg mb-10 leading-relaxed">
              자체 개발한 최적화 코덱으로 저대역폭에서도 끊김 없는 원격 제어를 구현했습니다.<br className="hidden md:block" />
              종단간 암호화(E2E)와 다중 보안 인증으로 기업의 엄격한 보안 요구 수준을 완벽하게 충족합니다.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div className="p-4 border border-slate-700 rounded-lg">AES-256 암호화</div>
              <div className="p-4 border border-slate-700 rounded-lg">SSL/TLS 전송</div>
              <div className="p-4 border border-slate-700 rounded-lg">이중 인증(2FA)</div>
              <div className="p-4 border border-slate-700 rounded-lg">개인정보 마스킹</div>
            </div>
          </div>
        </div>
      </section>

      {/* 8. 성과와 지표 (숫자로 증명) */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
            <div>
              <div className="text-5xl font-black text-primary mb-2">5,000만+</div>
              <div className="text-slate-500 font-bold">누적 지원 건수</div>
            </div>
            <div>
              <div className="text-5xl font-black text-primary mb-2">1,200+</div>
              <div className="text-slate-500 font-bold">도입 기업 수</div>
            </div>
            <div>
              <div className="text-5xl font-black text-primary mb-2">99.9%</div>
              <div className="text-slate-500 font-bold">연결 성공률</div>
            </div>
          </div>
        </div>
      </section>

      {/* 9. 산업별 최적화 솔루션 */}
      <section className="py-24 bg-slate-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">산업별 환경에 최적화된 원격지원</h2>
            <p className="text-slate-500 max-w-2xl mx-auto text-lg">국내외 주요 기업들이 애니서포트를 선택한 이유</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 opacity-40 grayscale mb-12">
            {[1,2,3,4,5,6].map(i => (
              <div key={i} className="flex items-center justify-center p-4">
                <Building2 size={48} />
              </div>
            ))}
          </div>
          <div className="text-center">
            <Button variant="outline" onClick={openModal} className="font-bold border-slate-300">
              활용 사례 자세히 보기
            </Button>
          </div>
        </div>
      </section>

      {/* 10. 서비스 도입 방식 선택 */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">서비스 도입 방식 선택</h2>
            <p className="text-slate-500 max-w-2xl mx-auto text-lg">귀사의 규모와 환경에 맞는 플랜을 선택하세요.</p>
          </div>
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <div className="p-10 rounded-2xl border border-slate-200 hover:border-primary transition-all bg-white shadow-sm flex flex-col">
              <h3 className="text-2xl font-bold mb-4">구독형 제품 (SaaS)</h3>
              <p className="text-slate-500 mb-8 flex-1">
                월/연 단위 결제로 즉시 사용 가능한 표준 서비스입니다.<br />
                중소·중견기업 고객에게 추천합니다.
              </p>
              <Button size="lg" onClick={openModal} className="w-full font-bold">
                가격 페이지 보기
              </Button>
            </div>
            <div className="p-10 rounded-2xl border border-slate-200 hover:border-primary transition-all bg-white shadow-sm flex flex-col">
              <h3 className="text-2xl font-bold mb-4">솔루션 / 연동형 제품</h3>
              <p className="text-slate-500 mb-8 flex-1">
                기존 상담 시스템(CRM/KMS)과 연계 가능한 맞춤형 솔루션입니다.<br />
                대기업 및 금융권 환경에 최적화되어 있습니다.
              </p>
              <Button size="lg" variant="outline" onClick={openModal} className="w-full font-bold border-primary text-primary">
                솔루션 문의하기
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* 11. 무료체험 CTA (마무리 섹션) */}
      <section className="py-24 bg-primary text-white overflow-hidden relative">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-white/5 skew-x-12 transform translate-x-1/2" />
        <div className="container mx-auto px-4 md:px-6 text-center relative z-10">
          <h2 className="text-3xl md:text-5xl font-bold mb-8">지금 바로 애니서포트를 사용해보세요</h2>
          <p className="text-lg md:text-xl opacity-90 mb-12 max-w-2xl mx-auto font-medium">
            별도의 결제 정보 입력 없이 즉시 무료 체험이 가능합니다.<br />
            최고의 원격 지원 기술을 직접 경험해보세요.
          </p>
          <Button size="lg" variant="secondary" onClick={openModal} className="h-16 px-12 text-xl font-bold shadow-2xl bg-white text-primary hover:bg-slate-100">
            무료체험 시작하기
          </Button>
        </div>
      </section>
    </div>
  );
}
