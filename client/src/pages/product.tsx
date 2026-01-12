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
  Copy,
  Timer,
  Layers,
  FileUp,
  MessageCircle,
  Settings,
  Award,
  RefreshCw,
  EyeOff,
} from "lucide-react";
import pcHeroImg from "@assets/generated_images/pc_remote_support_hero_background_with_desk_setup.png";
import remoteControlImg from "@assets/generated_images/remote_control_mouse_and_keyboard_icon.png";
import fileTransferImg from "@assets/generated_images/fast_file_transfer_progress_icon.png";
import multiSessionImg from "@assets/generated_images/multiple_monitor_session_management_icon.png";

export default function Product() {
  const { openModal } = useModal();

  const specialFeatures = [
    {
      title: "편리한 원격제어",
      desc: "마우스와 키보드를 제어하여 고객의 pc를 직접 제어할 수 있습니다. 복잡한 문제도 상담사가 직접 해결할 수 있어 고객 만족도가 높습니다.",
      image: remoteControlImg,
    },
    {
      title: "빠른 파일 전송",
      desc: "드래그 앤 드롭 기능으로 고객의 컴퓨터에 간편하게 파일을 전송할 수 있습니다. 패치파일 , 매뉴얼 , 설치 프로그램 등을 즉시 공유할 수 있습니다.",
      image: fileTransferImg,
    },
    {
      title: "멀티세션 관리",
      desc: "여러 고객을 동시에 지원하면서 세션 간 빠르게 전환이 가능합니다. 효율적인 상담 운영을 통해 생산성을 높이세요",
      image: multiSessionImg,
    },
  ];

  const features = [
    {
      title: "사내/외부 PC 원격 접속",
      desc: "장소에 구애받지 않고 사내 망 내부나 외부망에 있는 모든 PC에 즉각 연결합니다.",
      icon: Monitor,
    },
    {
      title: "관리자 권한 및 세션 제어",
      desc: "보안이 중요한 기업 환경에 맞춰 관리자 권한 승인 및 세션별 접근 통제가 가능합니다.",
      icon: Lock,
    },
    {
      title: "강력한 협업 도구",
      desc: " 용량 제한이 없는 양방향 파일 전송과 드래그 앤 드롭 기능을 지원하며, 한 명의 상담원이 최대 10개의 화면을 동시에 관리할 수 있는 멀티 세션 기능을 제공합니다",
      icon: Zap,
    },
    {
      title: "상담 이력 및 로그 기록",
      desc: "모든 접속 기록과 상담 이력이 클라우드에 자동으로 저장되어 투명한 운영이 가능합니다.",
      icon: FileText,
    },
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
              <span className="text-[10px] md:text-xs font-bold tracking-wider uppercase">
                Enterprise IT Support
              </span>
            </div>
            <h1 className="text-3xl md:text-6xl font-black mb-6 leading-tight">
              복잡한 설치 과정 없이
              <br />
              <span className="text-primary text-glow">10초 이내 연결</span>
            </h1>
            <p className="text-[14px] md:text-xl text-slate-300 mb-10 max-w-2xl leading-relaxed font-normal">
              사내 PC부터 외부 현장까지, 전문가의 손길이 필요한 모든 곳을
              <br className="hidden md:block" />
              애니서포트 PC 원격지원으로 즉각 해결하세요.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button
                size="lg"
                onClick={openModal}
                className="h-14 px-10 text-lg font-bold shadow-xl shadow-primary/20"
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
              <h2 className="text-[25px] md:text-4xl font-bold mb-6 leading-tight text-[#333]">
                복잡한 IT 장애,
                <br />
                <span className="text-primary">단 한 번의 연결</span>로
                해결됩니다.
              </h2>
              <p className="text-lg text-[#666] mb-8 leading-relaxed font-normal">
                기업 환경에서는 사소한 PC 장애도 생산성 저하로 이어집니다.
                애니서포트는 현장 방문 없이도 상담원이 고객의 PC 화면을 직접
                제어하며 문제를 진단하고 해결할 수 있는 최적의 환경을
                제공합니다.
              </p>
              <ul className="space-y-4">
                {[
                  "사내 PC / 외부 PC 원격 접속 지원",
                  "관리자 권한 제어 및 세션 통제",
                  "다중 모니터 · 파일 전송 · 원격 제어",
                  "상담 이력 및 접속 로그 자동 저장",
                ].map((item, i) => (
                  <li
                    key={i}
                    className="flex items-center gap-3 text-slate-700 font-medium"
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
                  <h3 className="text-lg font-bold mb-2 text-slate-900">
                    {feature.title}
                  </h3>
                  <p className="text-[#666] text-[16px] font-normal">
                    {feature.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      {/* Desktop Edition Core Features */}
      <section className="py-24 bg-slate-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary border border-primary/20 mb-6">
              <Zap size={16} />
              <span className="text-xs font-bold tracking-wider uppercase">Desktop Edition</span>
            </div>
            <h2 className="text-[25px] md:text-4xl font-bold mb-4 text-[#333]">
              고성능 원격지원의 새로운 기준
            </h2>
            <p className="text-[#666] text-lg max-w-3xl mx-auto font-normal">
              웹 기반 솔루션으로 복잡한 설치 없이 <span className="text-primary font-bold">10초 이내 연결</span>.<br className="hidden md:block" />
              최첨단 보안과 무제한 파일 전송으로 가장 빠르게 목적지에 도달합니다.
            </p>
          </div>

          {/* Hero Feature - 10초 연결 */}
          <div className="mb-12">
            <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-primary via-primary to-primary/80 p-8 md:p-12 text-white">
              <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
              <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/5 rounded-full blur-2xl translate-y-1/2 -translate-x-1/2" />
              
              <div className="relative z-10 grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/20 text-white text-xs font-bold mb-4">
                    <Timer size={14} />
                    초고속 연결
                  </div>
                  <h3 className="text-3xl md:text-4xl mb-4 font-extrabold">
                    6자리 인증번호로<br />
                    <span className="text-white/90">10초 이내 즉시 연결</span>
                  </h3>
                  <p className="text-white/80 text-lg leading-relaxed mb-6">
                    고객이 복잡한 프로그램 설치 없이 6자리 접속번호만 입력하면 즉시 원격지원이 시작됩니다.
                    마치 <span className="font-bold text-white">최첨단 보안 시스템을 갖춘 초고속 하이패스</span>처럼,
                    가장 빠르게 문제 해결에 도달합니다.
                  </p>
                  <div className="flex flex-wrap gap-3">
                    <div className="flex items-center gap-2 bg-white/20 px-4 py-2 rounded-full text-sm font-medium">
                      <CheckCircle2 size={16} />
                      설치 불필요
                    </div>
                    <div className="flex items-center gap-2 bg-white/20 px-4 py-2 rounded-full text-sm font-medium">
                      <CheckCircle2 size={16} />
                      웹 기반 연결
                    </div>
                  </div>
                </div>
                <div className="flex justify-center">
                  <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
                    <div className="text-center mb-4">
                      <span className="text-white/60 text-sm">접속 코드 입력</span>
                    </div>
                    <div className="flex gap-2 justify-center mb-6">
                      {['1', '2', '3', '4', '5', '6'].map((num, i) => (
                        <div key={i} className="w-12 h-14 bg-white/20 rounded-lg flex items-center justify-center text-2xl font-bold border border-white/30">
                          {num}
                        </div>
                      ))}
                    </div>
                    <div className="text-center text-white/60 text-sm">
                      연결 중... <span className="text-white font-bold">10초</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Main Features Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {[
              {
                icon: Layers,
                title: "최대 10개 동시 세션",
                desc: "하나의 창에서 최대 10개의 세션을 동시에 관리. 상담원 업무 효율을 극대화합니다.",
                highlight: "10개 세션"
              },
              {
                icon: FileUp,
                title: "무제한 파일 전송",
                desc: "타사와 달리 용량 제한 없는 양방향 파일 전송. 드래그 앤 드롭으로 간편하게 공유합니다.",
                highlight: "용량 무제한"
              },
              {
                icon: MessageCircle,
                title: "통합 커뮤니케이션",
                desc: "텍스트 채팅, 음성 통화, 화이트보드(그리기) 등 다양한 소통 도구가 내장되어 있습니다.",
                highlight: "음성/채팅"
              },
              {
                icon: RefreshCw,
                title: "재부팅 자동 재접속",
                desc: "PC 재부팅 시 별도 인증 절차 없이 자동으로 연결이 복구됩니다.",
                highlight: "자동 복구"
              }
            ].map((feature, i) => (
              <div key={i} className="group bg-white rounded-2xl p-6 border border-slate-200 hover:border-primary/30 hover:shadow-lg transition-all">
                <div className="w-14 h-14 rounded-xl bg-primary/10 text-primary flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <feature.icon size={28} />
                </div>
                <div className="inline-block px-2 py-1 bg-primary/5 text-primary font-bold rounded mb-2 text-[14px]">
                  {feature.highlight}
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">{feature.title}</h3>
                <p className="text-[18px] text-[#666]">{feature.desc}</p>
              </div>
            ))}
          </div>

          {/* Security & Management Section */}
          <div className="grid md:grid-cols-2 gap-6">
            {/* 보안 인증 카드 */}
            <div className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-2xl p-8 text-white">
              <div className="flex items-start gap-4 mb-6">
                <div className="w-14 h-14 rounded-xl bg-white/10 flex items-center justify-center shrink-0">
                  <Award size={28} className="text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-1">글로벌 보안 인증</h3>
                  <p className="text-[#ffffff] text-[16px]">공공기관 및 대기업 요구사항 충족</p>
                </div>
              </div>
              <div className="space-y-3">
                <div className="flex items-center gap-3 bg-white/5 rounded-xl p-4 border border-white/10">
                  <ShieldCheck size={20} className="text-primary shrink-0" />
                  <div>
                    <div className="font-bold text-[18px]">ISO/IEC 27001 국제 인증</div>
                    <div className="text-slate-400 text-[16px]">정보보안 관리체계 국제 표준</div>
                  </div>
                </div>
                <div className="flex items-center gap-3 bg-white/5 rounded-xl p-4 border border-white/10">
                  <Award size={20} className="text-primary shrink-0" />
                  <div>
                    <div className="font-bold text-[18px]">GS인증 1등급</div>
                    <div className="text-slate-400 text-[16px]">국가정보보안 기본 지침 준수</div>
                  </div>
                </div>
                <div className="flex items-center gap-3 bg-white/5 rounded-xl p-4 border border-white/10">
                  <EyeOff size={20} className="text-primary shrink-0" />
                  <div>
                    <div className="font-bold text-[18px]">12건 보안 특허 보유</div>
                    <div className="text-slate-400 text-[16px]">화면 부분 차단 기술 등 독보적 보안</div>
                  </div>
                </div>
              </div>
            </div>

            {/* 관리자 기능 카드 */}
            <div className="bg-white rounded-2xl p-8 border border-slate-200">
              <div className="flex items-start gap-4 mb-6">
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                  <Settings size={28} className="text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-1 text-[#333]">강력한 관리자 기능</h3>
                  <p className="text-[16px] text-[#666]">대규모 조직 운영에 최적화</p>
                </div>
              </div>
              <div className="space-y-3">
                <div className="flex items-center gap-3 bg-slate-50 rounded-xl p-4 border border-slate-100">
                  <Users size={20} className="text-primary shrink-0" />
                  <div>
                    <div className="font-bold text-[18px] text-[#333]">상담원별 권한 설정</div>
                    <div className="text-[16px] text-[#666]">세분화된 접근 권한 관리</div>
                  </div>
                </div>
                <div className="flex items-center gap-3 bg-slate-50 rounded-xl p-4 border border-slate-100">
                  <FileText size={20} className="text-primary shrink-0" />
                  <div>
                    <div className="font-bold text-[18px] text-[#333]">지원 내역 통계</div>
                    <div className="text-[#666] text-[16px]">상세 리포트 및 엑셀 저장</div>
                  </div>
                </div>
                <div className="flex items-center gap-3 bg-slate-50 rounded-xl p-4 border border-slate-100">
                  <Monitor size={20} className="text-primary shrink-0" />
                  <div>
                    <div className="font-bold text-[#333] text-[18px]">체계적 DB 관리</div>
                    <div className="text-[16px] text-[#666]">모든 상담 이력 자동 저장</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Connection Process Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <h2 className="text-[25px] md:text-4xl font-bold mb-4 text-slate-900">
              원격지원 연결 프로세스
            </h2>
            <p className="text-[#666] text-lg max-w-2xl mx-auto font-normal">
              간편하고 안전한 4단계 연결 과정을 통해 즉각적인 지원을 시작하세요.
            </p>
          </div>

          <div className="relative">
            {/* Connection Line (Desktop) */}
            <div className="hidden lg:block absolute top-1/2 left-0 w-full h-0.5 bg-slate-100 -translate-y-1/2 z-0" />

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
              {[
                {
                  step: "STEP 01",
                  title: "원격지원 요청",
                  icon: <ArrowRight className="text-primary" size={32} />,
                  desc: "상담원이 고객에게 원격지원 요청을 전달합니다. 이메일, 문자, 안내 페이지 등 다양한 방식으로 연결이 가능합니다.",
                  points: ["고객 주도 접속 (보안)", "사전 인증 기반 연결"],
                },
                {
                  step: "STEP 02",
                  title: "고객 인증 및 동의",
                  icon: <ShieldCheck className="text-primary" size={32} />,
                  desc: "고객은 접속 코드 입력 또는 버튼 클릭으로 원격지원에 동의하고 연결을 시작합니다.",
                  points: ["무단 접속 방지", "기업 보안 정책 준수"],
                },
                {
                  step: "STEP 03",
                  title: "실시간 원격지원 진행",
                  icon: <Monitor className="text-primary" size={32} />,
                  desc: "화면 공유, 원격 제어, 음성/영상 연결을 통해 실시간으로 문제를 해결합니다.",
                  types: [
                    "PC 원격 제어",
                    "모바일 화면 가이드",
                    "영상 기반 상담",
                  ],
                },
                {
                  step: "STEP 04",
                  title: "지원 종료 및 이력 관리",
                  icon: <FileText className="text-primary" size={32} />,
                  desc: "원격지원 종료 후 접속 이력과 상담 기록이 자동으로 저장됩니다.",
                  points: ["상담 이력 관리", "운영 및 품질 분석 가능"],
                },
              ].map((item, i) => (
                <div key={i} className="flex flex-col h-full bg-white">
                  <div className="mb-6 relative">
                    <div className="w-16 h-16 rounded-2xl bg-primary/5 flex items-center justify-center border border-primary/10 relative z-10 bg-white">
                      {item.icon}
                    </div>
                    <div className="absolute -top-3 -left-3 font-black text-4xl opacity-50 z-0 text-[#999]">
                      {i + 1}
                    </div>
                  </div>

                  <div className="flex-1">
                    <span className="text-primary font-bold text-sm tracking-tighter mb-2 block">
                      {item.step}
                    </span>
                    <h3 className="font-bold mb-4 text-[18px] text-[#333]">
                      {item.title}
                    </h3>
                    <p className="mb-6 text-[#666] text-[18px]">
                      {item.desc}
                    </p>

                    <div className="space-y-2">
                      {(item.points || item.types).map((point, idx) => (
                        <div
                          key={idx}
                          className="flex items-center gap-2 font-bold bg-slate-50 px-3 py-2 rounded-lg border border-slate-100 text-[18px] text-[#333]"
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
            복잡한 IT 기술 지원, 지금 바로 시작하세요
          </h2>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Button
              size="lg"
              variant="secondary"
              onClick={openModal}
              className="h-16 px-12 text-xl font-bold bg-white text-primary hover:bg-slate-100 shadow-2xl"
            >
              PC 원격지원 자세히 보기
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
