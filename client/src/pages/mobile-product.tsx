import { Button } from "@/components/ui/button";
import { useModal } from "@/context/ModalContext";
import { 
  Smartphone, 
  ShieldCheck, 
  Zap, 
  Clock, 
  FileText, 
  ArrowRight,
  CheckCircle2,
  Users,
  Lock,
  MousePointer2,
  Copy,
  Touchpad,
  SmartphoneNfc,
  MessageSquare
} from "lucide-react";
import mobileHeroImg from "@assets/generated_images/mobile_remote_support_hero_background_with_smartphones_and_professional_support_agent_silhouette.png";
import mobileDeviceSupportImg from "@assets/generated_images/mobile_device_remote_support.png";
import smsRemoteImg from "@assets/generated_images/sms_remote_connection_concept.png";
import realTimeImg from "@assets/generated_images/real-time_screen_sharing.png";
import googlePlayFullLogo from "@assets/image_1768199304085.png";
import appStoreFullLogo from "@assets/image-removebg-preview_(23)_1768199353224.png";

export default function MobileProduct() {
  const { openModal } = useModal();

  const specialFeatures = [
    {
      title: "모바일 기기에서도 지원",
      desc: "애니서포트 모바일 지원은 PC없이 모바일 기기에서도 언제 어디서나 사용 지원이 가능합니다.",
      image: mobileDeviceSupportImg
    },
    {
      title: "SMS전송으로 빠른 원격접속 연결",
      desc: "지원받을 대상에게 SMS로 접속주소를 발송하면, 상대방이 별도의 앱 없이도 원격접속으로 이어집니다.",
      image: smsRemoteImg
    },
    {
      title: "실시간 화면 공유",
      desc: "모바일 기기의 화면을 상담사가 실시간으로 보며 고객의 요청 사항을 정확하게 파악하고 해결합니다.",
      image: realTimeImg
    }
  ];

  const features = [
    {
      title: "Android / iOS 동시 지원",
      desc: "운영체제 구분 없이 모든 모바일 기기에 대해 완벽한 화면 공유 및 가이드를 제공합니다.",
      icon: Smartphone
    },
    {
      title: "강조 표시 및 드로잉",
      desc: "중요한 부분을 직접 그리거나 강조하여 고객이 조작 방법을 직관적으로 이해하도록 돕습니다.",
      icon: Touchpad
    },
    {
      title: "비대면 응대 최적화",
      desc: "금융, 공공기관 등 대면 상담이 어려운 환경에서도 빠르고 정확한 비대면 고객 응대가 가능합니다.",
      icon: MessageSquare
    },
    {
      title: "성능 데이터 분석",
      desc: "원격 지원 중 발생하는 기기 상태 및 성능 정보를 수집하여 효율적인 장애 분석을 지원합니다.",
      icon: Clock
    }
  ];

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative pt-40 pb-20 overflow-hidden bg-slate-900 text-white">
        <div className="absolute inset-0 z-0">
          <img 
            src={mobileHeroImg} 
            alt="Mobile Remote Support" 
            className="w-full h-full object-cover opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-900/80 to-transparent" />
        </div>
        
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/20 text-primary border border-primary/30 mb-6">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              <span className="text-[10px] md:text-xs font-bold tracking-wider uppercase text-[#fafafa]">Mobile IT Support</span>
            </div>
            <h1 className="text-3xl md:text-6xl font-black mb-6 leading-tight">
              모바일 환경에서도<br />
              <span className="text-primary text-glow">정확하고 직관적인 지원</span>
            </h1>
            <p className="text-[14px] md:text-xl text-slate-300 mb-10 max-w-2xl leading-relaxed font-normal">
              모바일 앱 사용 가이드부터 금융 상담까지, 비대면 고객 응대에 최적화된<br className="hidden md:block" />
              애니서포트 Mobile 원격지원을 경험해 보세요.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button size="lg" onClick={openModal} className="h-12 px-6 sm:h-14 sm:px-10 text-base sm:text-lg font-bold shadow-xl shadow-primary/20">
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
              <h2 className="text-[25px] md:text-4xl font-bold text-slate-900 mb-6 leading-tight">
                고객의 손끝까지 닿는<br />
                <span className="text-primary">실시간 모바일 가이드</span>
              </h2>
              <p className="text-[14px] md:text-lg text-slate-600 mb-8 leading-relaxed">
                모바일 환경은 PC보다 더 직관적이고 빠른 대응이 필요합니다. 애니서포트는 
                고객의 이탈 없이 실시간 화면 공유와 터치 포인트 가이드를 통해 
                최상의 모바일 경험을 제공합니다.
              </p>
              <ul className="space-y-4">
                {[
                  "Android / iOS 화면 공유 및 가이드",
                  "터치 포인터, 강조 표시 지원",
                  "앱 설치 최소화 설계",
                  "비대면 고객 응대 최적화"
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 font-semibold text-[#333] text-[14px] sm:text-[16px] lg:text-[18px]">
                    <CheckCircle2 className="text-primary shrink-0" size={24} />
                    {item}
                  </li>
                ))}
              </ul>
              <div className="mt-8 p-6 bg-slate-50 rounded-xl border border-slate-100">
                <h4 className="font-bold mb-3 text-[#2563eb]">활용 예</h4>
                <div className="flex flex-wrap gap-2">
                  <span className="px-4 py-2 bg-white rounded-full border border-slate-200 text-[14px] sm:text-[16px] lg:text-[18px] text-[#333] font-normal">금융 / 공공 / 교육 고객 상담</span>
                  <span className="px-4 py-2 bg-white rounded-full border border-slate-200 text-[#333] text-[14px] sm:text-[16px] lg:text-[18px] font-normal">모바일 앱 사용 가이드</span>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {features.map((feature, i) => (
                <div key={i} className="p-8 rounded-2xl bg-slate-50 border border-slate-100 hover:border-primary/30 transition-all group">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <feature.icon size={24} />
                  </div>
                  <h3 className="text-lg font-bold mb-2 text-[#333]">{feature.title}</h3>
                  <p className="text-[14px] sm:text-[16px] lg:text-[18px] font-normal text-[#666]">{feature.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      {/* Mobile Special Features Section */}
      <section className="py-24 bg-slate-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <h2 className="text-[25px] md:text-4xl font-bold mb-4 text-slate-900">[Mobile Edition만의 특별한 기능]</h2>
            <p className="text-slate-500 text-[14px] md:text-lg max-w-2xl mx-auto">모바일 원격지원을 더욱 강력하게 만드는 전문 기능들</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {specialFeatures.map((feature, i) => (
              <div key={i} className="group relative aspect-square rounded-3xl overflow-hidden border border-slate-200 shadow-sm hover:shadow-2xl transition-all cursor-pointer bg-white">
                <img 
                  src={feature.image} 
                  alt={feature.title} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-slate-900/0 group-hover:bg-slate-900/80 transition-all duration-300 flex flex-col justify-center items-center p-8 text-center opacity-0 group-hover:opacity-100">
                  <h3 className="text-2xl font-bold mb-4 text-white transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                    {feature.title}
                  </h3>
                  <p className="text-white/90 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-75 text-[14px] sm:text-[16px] lg:text-[18px]">
                    {feature.desc}
                  </p>
                </div>
                <div className="absolute bottom-6 left-6 right-6 group-hover:hidden transition-all">
                  <div className="bg-white/90 backdrop-blur-sm px-4 py-2 rounded-lg inline-block border border-slate-100">
                    <span className="font-bold text-slate-900">{feature.title}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* Connection Process Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <h2 className="text-[25px] md:text-4xl font-bold mb-4 text-slate-900">모바일 원격지원 연결 프로세스</h2>
            <p className="text-slate-500 text-[14px] md:text-lg max-w-2xl mx-auto">간편하고 안전한 4단계 연결 과정을 통해 즉각적인 지원을 시작하세요.</p>
          </div>

          <div className="relative">
            <div className="hidden lg:block absolute top-1/2 left-0 w-full h-0.5 bg-slate-100 -translate-y-1/2 z-0" />
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
              {[
                {
                  step: "STEP 01",
                  title: "원격지원 요청",
                  icon: <ArrowRight className="text-primary" size={32} />,
                  desc: "상담원이 고객에게 원격지원 요청을 전달합니다. SMS, 알림톡 등을 통해 간편하게 전달 가능합니다.",
                  points: ["SMS/알림톡 발송", "고객 주도 접속"]
                },
                {
                  step: "STEP 02",
                  title: "고객 동의 및 연결",
                  icon: <ShieldCheck className="text-primary" size={32} />,
                  desc: "고객은 전송받은 링크 클릭 또는 접속 번호 입력을 통해 원격지원에 동의합니다.",
                  points: ["원클릭 연결 지원", "보안 규정 준수"]
                },
                {
                  step: "STEP 03",
                  title: "실시간 모바일 지원",
                  icon: <Smartphone className="text-primary" size={32} />,
                  desc: "상담사가 고객의 모바일 화면을 직접 공유받아 터치 가이드와 드로잉으로 지원을 수행합니다.",
                  types: ["화면 공유 가이드", "실시간 터치 포인트"]
                },
                {
                  step: "STEP 04",
                  title: "지원 종료 및 기록",
                  icon: <FileText className="text-primary" size={32} />,
                  desc: "지원이 완료되면 연결이 안전하게 해제되며 모든 지원 로그가 암호화되어 저장됩니다.",
                  points: ["지원 리포트 생성", "로그 자동 보관"]
                }
              ].map((item, i) => (
                <div key={i} className="flex flex-col h-full bg-white">
                  <div className="mb-6">
                    <div className="w-16 h-16 rounded-2xl bg-primary/5 flex items-center justify-center border border-primary/10 bg-white">
                      {item.icon}
                    </div>
                  </div>
                  
                  <div className="flex-1">
                    <span className="text-primary font-bold tracking-tighter mb-2 block text-[14px] sm:text-[16px] lg:text-[18px]">{item.step}</span>
                    <h3 className="text-xl font-bold mb-4 text-slate-900">{item.title}</h3>
                    <p className="text-slate-500 mb-6 text-[14px] sm:text-[16px] lg:text-[18px]">
                      {item.desc}
                    </p>
                    
                    <div className="space-y-2">
                      {(item.points || item.types).map((point, idx) => (
                        <div key={idx} className="flex items-center gap-2 font-bold bg-slate-50 px-3 py-2 rounded-lg border border-slate-100 text-[14px] sm:text-[16px] lg:text-[18px] text-[#333]">
                          <CheckCircle2 size={14} className="text-primary" />
                          {point}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      {/* Mobile Experience Section */}
      <section className="py-24 bg-[#f8fafc]">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="font-bold mb-8 text-[25px] md:text-4xl text-[#333]">모바일에서도 애니서포트를 경험하세요</h2>
            <div className="flex justify-center gap-4">
              <a href="https://play.google.com/store/apps/details?id=net.koino.anysupportMobile&pcampaignid=web_share" target="_blank" rel="noopener noreferrer" className="h-20 px-8 bg-white rounded-xl border border-slate-200 flex items-center gap-3 transition-transform hover:scale-105">
                <img src={googlePlayFullLogo} alt="Google Play" className="h-12" />
              </a>
              <a href="https://apps.apple.com/us/app/%EB%AA%A8%EB%B0%94%EC%9D%BC%EC%A7%80%EC%9B%90/id993614818?l=ko" target="_blank" rel="noopener noreferrer" className="h-20 px-8 bg-white rounded-xl border border-slate-200 flex items-center gap-3 transition-transform hover:scale-105">
                <img src={appStoreFullLogo} alt="App Store" className="h-12" />
              </a>
            </div>
          </div>
        </div>
      </section>
      {/* CTA Section */}
      <section className="py-20 bg-primary text-white">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-10">최고의 모바일 고객 경험을 제공하세요</h2>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Button size="lg" variant="secondary" onClick={openModal} className="h-16 px-12 text-xl font-bold bg-white text-primary hover:bg-slate-100 shadow-2xl">
              Mobile 원격지원 자세히 보기
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
