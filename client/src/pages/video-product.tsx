import { Button } from "@/components/ui/button";
import { useModal } from "@/context/ModalContext";
import {
  Video,
  ShieldCheck,
  Zap,
  Clock,
  FileText,
  ArrowRight,
  CheckCircle2,
  Users,
  Lock,
  Mic,
  Monitor,
  HeartHandshake,
  Eye,
  Wrench,
  AlertTriangle,
  Smartphone,
  UserPlus,
} from "lucide-react";
import { motion } from "framer-motion";
import videoHeroImg from "@assets/generated_images/video_remote_support_hero_background_with_video_call_interface_and_support_agent.png";
import webrtcImg from "@assets/generated_images/webrtc_based_real-time_video_connection_icon.png";
import voiceSyncImg from "@assets/generated_images/voice_and_screen_sharing_synchronization_icon.png";
import seniorFriendlyImg from "@assets/generated_images/user_friendly_remote_support_for_seniors_icon.png";

export default function VideoProduct() {
  const { openModal } = useModal();

  const specialFeatures = [
    {
      title: "WebRTC 기반 영상 연결",
      desc: "최신 WebRTC 기술을 사용하여 보안이 강화된 실시간 영상 연결을 제공합니다. 고품질 영상을 지연 없이 경험할 수 있습니다.",
      image: webrtcImg,
    },
    {
      title: "실시간 음성 + 화면 공유",
      desc: "영상과 함께 실시간 음성 대화와 화면 공유를 동시에 진행하여 복잡한 상황도 빠르게 설명하고 이해할 수 있습니다.",
      image: voiceSyncImg,
    },
    {
      title: "비IT 사용자 최적화",
      desc: "복잡한 조작 없이 클릭 한 번으로 연결되어, 고령자나 기기 조작에 서툰 사용자도 쉽고 편안하게 지원을 받을 수 있습니다.",
      image: seniorFriendlyImg,
    },
  ];

  const features = [
    {
      title: "무설치 브라우저 연결",
      desc: "별도의 프로그램을 설치할 필요 없이 웹 브라우저에서 즉시 실시간 영상 지원이 시작됩니다.",
      icon: Zap,
    },
    {
      title: "멀티 디바이스 지원",
      desc: "PC, 스마트폰, 태블릿 등 카메라가 있는 모든 기기에서 제한 없이 영상 상담이 가능합니다.",
      icon: Video,
    },
    {
      title: "고령자 특화 가이드",
      desc: "직관적인 화면 구성과 음성 안내로 누구나 어려움 없이 문제 해결 과정을 따라올 수 있습니다.",
      icon: HeartHandshake,
    },
    {
      title: "보안 암호화 전송",
      desc: "모든 영상 및 음성 데이터는 종단간 암호화 기술로 보호되어 기업 수준의 강력한 보안을 유지합니다.",
      icon: ShieldCheck,
    },
  ];

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative pt-40 pb-20 overflow-hidden bg-slate-900 text-white">
        <div className="absolute inset-0 z-0">
          <img
            src={videoHeroImg}
            alt="Video Remote Support"
            className="w-full h-full object-cover opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-900/80 to-transparent" />
        </div>

        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/20 text-primary border border-primary/30 mb-6">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              <span className="text-[10px] md:text-xs font-bold tracking-wider uppercase">
                Video Remote Support
              </span>
            </div>
            <h1 className="text-3xl md:text-6xl font-black mb-6 leading-tight">
              실시간으로 상황을보며
              <br /> 직접 해결하는
              <br />
              <span className="text-primary text-glow">
                실시간 영상 원격지원
              </span>
            </h1>
            <p className="text-[14px] md:text-xl text-slate-300 mb-10 max-w-2xl font-medium leading-relaxed">
              복잡한 설명이 필요 없는 직관적인 영상 상담으로 현장에 있는것처럼
              <br className="hidden md:block" />
              고객의 문제를 더욱 따뜻하고 신속하게 해결하세요.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button
                size="lg"
                onClick={openModal}
                className="h-12 px-6 sm:h-14 sm:px-10 text-base sm:text-lg font-bold shadow-xl shadow-primary/20"
              >
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
                음성과 화면을 동시에 연결하는
                <br />
                <span className="text-primary">가장 획기적인 기술 지원</span>
              </h2>
              <p className="md:text-lg mb-8 text-[#333] text-[16px]">텍스트와 화면 제어만으로는 부족한 경우가 있습니다. 애니서포트 Video 원격지원은 상담원과 고객이 실시간으로 현장의 진행상태를 마주하며 소통함으로써 기술 지원을 넘어선 고객 감동을 실현합니다.</p>
              <ul className="space-y-4">
                {[
                  "WebRTC 기반 실시간 영상 연결",
                  "별도 프로그램 설치 없이 즉시 연결",
                  "실시간 음성 + 화면 공유 동시 진행",
                  "고령자 및 비IT 사용자에게 최적화",
                ].map((item, i) => (
                  <li
                    key={i}
                    className="flex items-center gap-3 text-[14px] sm:text-[16px] lg:text-[18px] text-[#333] font-normal"
                  >
                    <CheckCircle2 className="text-primary shrink-0" size={24} />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {features.map((feature, i) => (
                <div
                  key={i}
                  className="p-8 rounded-2xl bg-slate-50 border border-slate-100 hover:border-primary/30 transition-all group"
                >
                  <div className="w-12 h-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <feature.icon size={24} />
                  </div>
                  <h3 className="text-lg font-bold mb-2 text-[#333]">
                    {feature.title}
                  </h3>
                  <p className="text-[#666] text-[14px] sm:text-[16px] lg:text-[18px] font-normal">
                    {feature.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      {/* 현장을 보면서 해결하는 원격지원 섹션 */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-[1280px] w-full mx-auto px-4 sm:px-6 lg:px-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-[28px] md:text-4xl font-bold text-slate-900 mb-4 leading-tight">
                현장을 <span className="text-primary">'보면서'</span> 해결하는 원격지원
              </h2>
              <p className="text-lg text-[#666] font-normal mb-10 leading-relaxed">
                스마트폰 카메라 영상 공유로, <strong className="text-[#333]">현장 방문 없이도</strong> 문제를 진단하고 조치 방법을 즉시 안내합니다.
              </p>
              
              {/* 3개 핵심 가치 카드 */}
              <div className="space-y-6">
                {[
                  {
                    icon: Eye,
                    title: "보이는 원격상담",
                    desc: "말로 설명하지 않아도, 화면 위에 캡처·그리기·화살표 표시로 옆에서 같이 보는 것처럼 안내"
                  },
                  {
                    icon: Wrench,
                    title: "다양한 현장 원격기술 지원",
                    desc: "사무실에서 현장 진행상태를 실시간 확인, 필요 시 전문가를 초대해 협업 지원"
                  },
                  {
                    icon: AlertTriangle,
                    title: "긴급상황 실시간 확인",
                    desc: "골든타임을 놓치지 않도록 현장 상황을 즉시 확인하고 필요한 조치를 바로 전달"
                  }
                ].map((item, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.1 }}
                    viewport={{ once: true }}
                    className="flex gap-5 p-6 bg-white rounded-2xl border border-slate-200 hover:border-primary/30 hover:shadow-lg transition-all"
                  >
                    <div className="w-14 h-14 rounded-xl bg-primary/10 text-primary flex items-center justify-center shrink-0">
                      <item.icon size={28} />
                    </div>
                    <div>
                      <h3 className="mb-2 text-[20px] font-bold text-[#0f4ed9]">{item.title}</h3>
                      <p className="text-[#666] text-[14px] sm:text-[16px] lg:text-[18px] font-normal leading-relaxed">{item.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
            
            {/* 비주얼 이미지 */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="aspect-[4/3] bg-gradient-to-br from-primary/10 to-blue-100 rounded-3xl overflow-hidden border border-slate-200 flex items-center justify-center">
                <div className="text-center p-8">
                  <div className="w-24 h-24 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-6">
                    <Video size={48} className="text-primary" />
                  </div>
                  <p className="text-[#666] text-lg">영상 원격지원 예시 이미지</p>
                  <p className="text-slate-400 text-sm mt-2">/images/video-hero.png</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      {/* 어떻게 동작하나요? 3-step 플로우 */}
      <section className="py-24 bg-white">
        <div className="max-w-[1280px] w-full mx-auto px-4 sm:px-6 lg:px-10">
          <div className="text-center mb-16">
            <h2 className="text-[28px] md:text-4xl font-bold text-slate-900 mb-4">
              어떻게 동작하나요?
            </h2>
            <p className="text-lg text-[#666] font-normal max-w-2xl mx-auto">
              3단계로 간편하게 현장 영상 원격지원을 시작할 수 있습니다.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 relative">
            {/* 연결선 (데스크탑만) */}
            <div className="hidden md:block absolute top-16 left-1/6 right-1/6 h-0.5 bg-slate-200 z-0" />
            
            {[
              {
                step: "1",
                icon: Smartphone,
                title: "영상 공유 시작",
                desc: "현장 담당자가 스마트폰으로 영상 공유 시작"
              },
              {
                step: "2",
                icon: Eye,
                title: "실시간 진단/안내",
                desc: "상담원이 실시간으로 보며 진단/안내 (표시 도구 활용)"
              },
              {
                step: "3",
                icon: UserPlus,
                title: "협업으로 해결",
                desc: "필요 시 전문가 초대/협업으로 문제 해결까지"
              }
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.15 }}
                viewport={{ once: true }}
                className="relative z-10 text-center"
              >
                <div className="w-16 h-16 rounded-full bg-primary text-white flex items-center justify-center mx-auto mb-6 text-2xl font-black shadow-lg shadow-primary/30">
                  {item.step}
                </div>
                <div className="w-14 h-14 rounded-xl bg-slate-100 flex items-center justify-center mx-auto mb-4">
                  <item.icon size={28} className="text-slate-600" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{item.title}</h3>
                <p className="text-[#666] text-[14px] sm:text-[16px] lg:text-[18px] font-normal leading-relaxed max-w-xs mx-auto">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      {/* ROI 강조 스트립 */}
      <section className="py-16 bg-gradient-to-r from-primary to-blue-600 text-white">
        <div className="max-w-[1280px] w-full mx-auto px-4 sm:px-6 lg:px-10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="text-center md:text-left">
              <h3 className="md:text-3xl mb-2 font-bold text-[34px]">
                현장 방문을 줄여 <span className="text-yellow-300">출장비용 80% 이상</span> 절감
              </h3>
              <p className="text-white/80 text-lg font-normal">
                긴급 대응 속도 향상 + 문제 재발 감소
              </p>
              <p className="text-white/60 text-sm mt-3">
                * 실제 운영 사례 기준 (상담 시 상세 제공)
              </p>
            </div>
            <Button
              size="lg"
              onClick={openModal}
              className="bg-white text-primary hover:bg-slate-100 font-bold px-8 h-14 text-lg shadow-xl shrink-0"
            >
              도입 효과 상담받기 <ArrowRight className="ml-2" />
            </Button>
          </div>
        </div>
      </section>
      {/* Video Special Features Section */}
      <section className="py-24 bg-slate-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <h2 className="text-[25px] md:text-4xl font-bold mb-4 text-slate-900">
              [Video Edition만의 특별한 기능]
            </h2>
            <p className="text-[14px] md:text-lg max-w-2xl mx-auto text-[#666]">
              영상 기반 원격지원을 더욱 풍성하게 만드는 전문 기능들
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {specialFeatures.map((feature, i) => (
              <div
                key={i}
                className="group relative aspect-square rounded-3xl overflow-hidden border border-slate-200 shadow-sm hover:shadow-2xl transition-all cursor-pointer bg-white"
              >
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
                    <span className="font-bold text-slate-900">
                      {feature.title}
                    </span>
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
            <h2 className="text-[25px] md:text-4xl font-bold mb-4 text-slate-900">
              영상 원격지원 연결 프로세스
            </h2>
            <p className="text-slate-500 text-[14px] md:text-lg max-w-2xl mx-auto">
              설치 없이 즉시 연결되는 4단계 영상 지원 과정을 확인하세요.
            </p>
          </div>

          <div className="relative">
            <div className="hidden lg:block absolute top-1/2 left-0 w-full h-0.5 bg-slate-100 -translate-y-1/2 z-0" />

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
              {[
                {
                  step: "STEP 01",
                  title: "영상 지원 요청",
                  icon: <ArrowRight className="text-primary" size={32} />,
                  desc: "상담원이 고객에게 영상 상담 연결 링크를 전달합니다. 별도 앱 설치 권유 없이 메시지로 간편하게 보냅니다.",
                  points: ["링크 기반 접속", "앱 무설치 방식"],
                },
                {
                  step: "STEP 02",
                  title: "카메라/음성 동의",
                  icon: <ShieldCheck className="text-primary" size={32} />,
                  desc: "고객이 링크를 클릭하면 브라우저에서 카메라 및 마이크 사용 권한을 한 번만 수락합니다.",
                  points: ["표준 권한 획득", "안전한 보안 세션"],
                },
                {
                  step: "STEP 03",
                  title: "실시간 영상 상담",
                  icon: <Video className="text-primary" size={32} />,
                  desc: "상담원과 얼굴을 보며 실시간 음성으로 대화하고, 필요한 경우 화면을 공유하여 문제를 해결합니다.",
                  types: ["양방향 영상/음성", "실시간 화면 가이드"],
                },
                {
                  step: "STEP 04",
                  title: "상담 종료 및 자동 저장",
                  icon: <FileText className="text-primary" size={32} />,
                  desc: "상담이 종료되면 연결이 해제되며, 상담 시간 및 기본 이력이 관리 시스템에 기록됩니다.",
                  points: ["상담 이력 관리", "보안 로그 보관"],
                },
              ].map((item, i) => (
                <div key={i} className="flex flex-col h-full bg-white">
                  <div className="mb-6">
                    <div className="w-16 h-16 rounded-2xl bg-primary/5 flex items-center justify-center border border-primary/10 bg-white">
                      {item.icon}
                    </div>
                  </div>

                  <div className="flex-1">
                    <span className="text-primary tracking-tighter mb-2 block text-[14px] sm:text-[16px] lg:text-[18px] font-extrabold">
                      {item.step}
                    </span>
                    <h3 className="text-xl font-bold mb-4 text-slate-900">
                      {item.title}
                    </h3>
                    <p className="mb-6 text-[#666] text-[14px] sm:text-[16px] lg:text-[18px] min-h-[84px]">
                      {item.desc}
                    </p>

                    <div className="space-y-2">
                      {(item.points || item.types).map((point, idx) => (
                        <div
                          key={idx}
                          className="flex items-center gap-2 font-bold bg-slate-50 px-3 py-2 rounded-lg border border-slate-100 text-[#333] text-[14px] sm:text-[16px] lg:text-[18px]"
                        >
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
      {/* CTA Section */}
      <section className="py-20 bg-primary text-white">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-10">
            더욱 따뜻하고 직관적인 고객 지원을 경험하세요
          </h2>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Button
              size="lg"
              variant="secondary"
              onClick={openModal}
              className="h-16 px-12 text-xl font-bold bg-white text-primary hover:bg-slate-100 shadow-2xl"
            >
              Video 원격지원 자세히 보기
            </Button>
            <Button
              size="lg"
              onClick={openModal}
              className="h-16 px-12 text-xl font-bold bg-primary-foreground text-primary hover:bg-slate-100 border-2 border-white/20"
            >
              무료 체험 시작하기
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
