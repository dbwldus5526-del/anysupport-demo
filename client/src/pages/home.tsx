import { Button } from "@/components/ui/button";
import { useModal } from "@/context/ModalContext";
import { ArrowRight, CheckCircle2, ShieldCheck, Zap, Laptop, Smartphone, Headphones } from "lucide-react";
import heroImage from "@assets/generated_images/saas_dashboard_abstract_hero_visualization.png";

export function Home() {
  const { openModal } = useModal();

  return (
    <div className="flex flex-col">
      {/* 1. Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 bg-slate-50 overflow-hidden">
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="flex-1 text-center lg:text-left">
              <h1 className="text-4xl md:text-6xl font-black text-slate-900 leading-[1.1] mb-6">
                언제 어디서나,<br />
                <span className="text-primary">가장 완벽한 원격지원</span>
              </h1>
              <p className="text-lg md:text-xl text-slate-600 mb-10 max-w-2xl mx-auto lg:mx-0 font-medium leading-relaxed">
                AnySupport는 복잡한 설치 없이 브라우저만으로 PC와 모바일을 원격 제어합니다. 
                전 세계 1,000개 이상의 기업이 신뢰하는 최고의 솔루션을 경험해보세요.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Button size="lg" onClick={openModal} className="h-14 px-10 text-lg font-bold shadow-xl shadow-primary/20">
                  무료체험 시작하기 <ArrowRight className="ml-2" />
                </Button>
                <Button variant="outline" size="lg" className="h-14 px-10 text-lg font-bold bg-white border-slate-200">
                  데모 영상 보기
                </Button>
              </div>
            </div>
            <div className="flex-1 w-full max-w-[600px] lg:max-w-none">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-slate-200 bg-white">
                <img src={heroImage} alt="Dashboard" className="w-full h-auto object-cover" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Key Values Section */}
      <section className="py-24 bg-white border-y border-slate-100">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">왜 애니서포트인가요?</h2>
            <p className="text-slate-500 max-w-2xl mx-auto text-lg">성능, 보안, 그리고 편의성까지 모두 갖춘 유일한 솔루션입니다.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-10">
            {[
              { icon: Zap, title: "압도적인 연결 속도", desc: "자체 최적화 코덱으로 저대역폭에서도 끊김 없는 원격 제어를 보장합니다." },
              { icon: ShieldCheck, title: "금융권 수준의 보안", desc: "E2E 암호화 및 2단계 인증으로 모든 세션을 완벽하게 보호합니다." },
              { icon: Headphones, title: "누구나 쉬운 사용성", desc: "사용자 교육이 필요 없는 직관적인 UI로 도입 즉시 활용이 가능합니다." }
            ].map((item, i) => (
              <div key={i} className="flex flex-col items-center text-center p-8 rounded-2xl bg-slate-50">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center text-primary mb-6">
                  <item.icon size={32} />
                </div>
                <h3 className="text-xl font-bold mb-4">{item.title}</h3>
                <p className="text-slate-500 leading-relaxed font-medium">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Features Section */}
      <section className="py-24 bg-slate-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="flex-1 space-y-8">
              <h2 className="text-3xl md:text-4xl font-bold leading-tight">
                다양한 환경에서도<br />한계 없는 원격 지원
              </h2>
              <div className="space-y-6">
                {[
                  { icon: Laptop, title: "멀티 플랫폼 지원", desc: "Windows, macOS, Linux 등 모든 PC 환경을 지원합니다." },
                  { icon: Smartphone, title: "모바일 원격 제어", desc: "Android와 iOS 기기까지 실시간 화면 공유 및 제어가 가능합니다." },
                  { icon: CheckCircle2, title: "강력한 부가 기능", desc: "파일 전송, 화면 녹화, 화이트보드 등 원격지원을 돕는 30여 종의 도구를 제공합니다." }
                ].map((item, i) => (
                  <div key={i} className="flex gap-5 items-start p-6 rounded-xl bg-white border border-slate-100 shadow-sm">
                    <div className="mt-1 text-primary"><item.icon size={24} /></div>
                    <div>
                      <h4 className="font-bold text-lg mb-1">{item.title}</h4>
                      <p className="text-slate-500 text-sm font-medium">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="flex-1 bg-slate-200 rounded-2xl aspect-video flex items-center justify-center font-bold text-slate-400">
              [기능 소개 영상/이미지 영역]
            </div>
          </div>
        </div>
      </section>

      {/* 4. Industrial Solutions */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-16">산업별 최적화 솔루션</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {["금융/보험", "공공기관", "제조/물류", "교육/서비스"].map((item, i) => (
              <div key={i} className="p-10 border border-slate-100 rounded-2xl hover:border-primary hover:shadow-lg transition-all cursor-default">
                <div className="text-4xl mb-4">🏢</div>
                <h4 className="font-bold text-lg">{item}</h4>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Final CTA */}
      <section className="py-20 md:py-32 bg-primary text-white text-center">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-3xl md:text-5xl font-bold mb-8">지금 바로 무료로 시작하세요</h2>
          <p className="text-lg md:text-xl opacity-80 mb-12 max-w-2xl mx-auto font-medium">
            별도의 결제 정보 입력 없이 즉시 체험이 가능합니다.<br />
            애니서포트가 만드는 새로운 원격지원의 세계를 만나보세요.
          </p>
          <Button size="lg" variant="secondary" onClick={openModal} className="h-16 px-12 text-xl font-bold shadow-2xl bg-white text-primary hover:bg-slate-100">
            무료체험 신청하기
          </Button>
        </div>
      </section>
    </div>
  );
}
