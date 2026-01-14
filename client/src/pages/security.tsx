import { Button } from "@/components/ui/button";
import { useModal } from "@/context/ModalContext";
import { 
  ShieldCheck, 
  Lock, 
  Key, 
  FileText, 
  Building2, 
  CheckCircle2, 
  UserCheck, 
  Database, 
  History, 
  Search,
  Eye,
  Settings,
  ShieldAlert,
  ArrowRight,
  Smartphone
} from "lucide-react";
import securityHeroImg from "@assets/generated_images/secure_enterprise_data_center_with_digital_lock_overlays.png";

export default function Security() {
  const { openModal } = useModal();

  const securitySections = [
    {
      id: "access",
      title: "1. 접속 보안 (Access Security)",
      subtitle: "허가된 연결만, 통제된 접근",
      desc: "애니서포트의 모든 원격 연결은 고객의 명확한 동의와 인증 절차를 거쳐서만 이루어집니다.",
      points: [
        "접속 코드 기반 연결",
        "고객 동의 후 원격 시작",
        "무단 접속 차단 구조",
        "세션 단위 연결 제어"
      ],
      icon: UserCheck
    },
    {
      id: "data",
      title: "2. 데이터 보안 (Data Security)",
      subtitle: "모든 통신 구간 암호화",
      desc: "원격지원 중 전송되는 모든 데이터는 암호화된 통신으로 보호됩니다.",
      points: [
        "SSL/TLS 기반 암호화 통신",
        "화면·파일·채팅 데이터 보호",
        "외부 네트워크에서도 안전한 연결"
      ],
      icon: Lock
    },
    {
      id: "permission",
      title: "3. 권한 및 계정 관리 (User & Permission Control)",
      subtitle: "역할에 따른 권한 분리",
      desc: "상담원과 관리자의 권한을 분리하여 불필요한 접근을 원천적으로 제한합니다.",
      points: [
        "상담원별 권한 설정",
        "관리자 계정 분리 운영",
        "내부 정책에 맞춘 접근 제어"
      ],
      icon: Key
    },
    {
      id: "audit",
      title: "4. 이력 및 로그 관리 (Audit & Logging)",
      subtitle: "모든 원격지원 기록은 남습니다",
      desc: "원격지원 세션은 자동으로 기록되며 운영 및 감사 목적에 활용할 수 있습니다.",
      points: [
        "접속 시간 기록",
        "상담 이력 저장",
        "세션 로그 관리",
        "문제 발생 시 추적 가능"
      ],
      icon: History
    },
    {
      id: "enterprise",
      title: "5. 기업 환경 대응 (Enterprise Ready)",
      subtitle: "기업 보안 정책에 맞춘 도입 방식",
      desc: "애니서포트는 기업의 보안 정책과 IT 환경에 맞춰 유연하게 도입할 수 있습니다.",
      points: [
        "클라우드(SaaS) 기반 운영",
        "온프레미스(사내 구축) 옵션",
        "내부 시스템 연동 가능"
      ],
      icon: Building2
    }
  ];

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative pt-40 pb-20 overflow-hidden bg-slate-900 text-white">
        <div className="absolute inset-0 z-0">
          <img 
            src={securityHeroImg} 
            alt="Security Hero" 
            className="w-full h-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-slate-900/50 to-slate-900" />
        </div>
        
        <div className="container mx-auto px-4 md:px-6 relative z-10 text-center">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-3xl md:text-6xl font-black mb-6 leading-tight">
              보안성과 안전성
            </h1>
            <p className="text-lg md:text-2xl font-bold mb-6 text-[#ffffff]">
              기업 환경을 고려한 보안 설계
            </p>
            <p className="text-[14px] md:text-lg text-slate-300 mb-4 max-w-2xl mx-auto leading-relaxed">
              애니서포트는 원격지원 과정 전반에 걸쳐<br />
              기업이 요구하는 보안 기준을 기본으로 적용합니다.
            </p>
            <div className="inline-block p-4 rounded-xl bg-white/5 border border-white/10 backdrop-blur-sm">
              <p className="text-slate-400 font-medium italic">
                "원격지원은 편리해야 하지만, 그보다 먼저 안전해야 합니다."
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* 사용자와 고객 모두 안전합니다 섹션 */}
      <section className="py-24 bg-[#f8fafc]">
        <div className="max-w-[1280px] w-full mx-auto px-4 sm:px-6 lg:px-10">
          <div className="text-center mb-16">
            <h2 className="font-bold mb-4 text-[24px] sm:text-[32px] lg:text-[40px] text-[#333]">
              사용자와 고객 모두 안전합니다
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: Lock,
                title: "데이터 암호화 및 네트워크 보안",
                desc: "국제 암호화 표준 AES-256 bit 알고리즘과 SSL(Secure Socket Layer) 적용을 통한 End-to-end 보호 방식으로 모든 원격 데이터를 안전하게 관리합니다.",
              },
              {
                icon: Database,
                title: "안정적인 서버(IDC) 운영",
                desc: "데이터 센터 내 방화벽 구축, 서버 다중화를 통해 장애 및 해킹에 완벽 대비하였으며 24시간 365일 전문 인력이 안정적인 서비스 운영에 힘쓰고 있습니다.",
              },
              {
                icon: ShieldCheck,
                title: "사용자/고객 다양한 보안 옵션",
                desc: "원격 연결 시 일회성 접속번호 방식으로 임의 재접속을 원천 차단하며 제어권 및 원격 모듈 자동 삭제 등 다양한 보안 옵션을 제공합니다.",
              },
              {
                icon: Smartphone,
                title: "삼성 Knox 보안 파트너",
                desc: "애니서포트는 원격제어 분야 내에서 유일하게 삼성전자의 글로벌 모바일 솔루션 파트너십 프로그램(SEAP) 실버 파트너이며 증가하는 모바일 보안이슈에 완벽히 대응할 수 있습니다.",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="p-8 rounded-2xl bg-white border border-slate-200 hover:border-primary/30 hover:shadow-lg transition-all duration-300"
              >
                <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-5">
                  <item.icon className="text-primary" size={28} />
                </div>
                <h3 className="text-lg lg:text-xl font-bold mb-3 text-[#333]">
                  {item.title}
                </h3>
                <p className="text-[#666] text-[14px] sm:text-[16px] leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* 6대 보안 핵심 섹션 (Grid Layout) */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <h2 className="text-[25px] md:text-4xl font-bold text-slate-900 mb-4">애니서포트 6대 보안 핵심</h2>
            <p className="text-[#666] text-lg font-normal">기업 환경에 최적화된 철저한 보안 체계</p>
          </div>
          
          <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-3 gap-px bg-slate-200 border border-slate-200 rounded-3xl overflow-hidden shadow-sm">
            {[
              {
                title: "접속 보안",
                desc: "허가된 연결만 통제된 접근을 통해 무단 접속을 완벽하게 차단합니다.",
                icon: UserCheck
              },
              {
                title: "데이터 보안",
                desc: "모든 통신 구간을 SSL/TLS로 암호화하여 데이터 유출을 방지합니다.",
                icon: Lock
              },
              {
                title: "권한 관리",
                desc: "상담원과 관리자의 역할을 명확히 분리하여 접근 권한을 제한합니다.",
                icon: Key
              },
              {
                title: "로그 관리",
                desc: "모든 원격지원 세션 이력을 기록하여 투명한 감사 추적을 지원합니다.",
                icon: History
              },
              {
                title: "기업 대응",
                desc: "SaaS 및 온프레미스 등 기업별 보안 정책에 맞춤형 도입이 가능합니다.",
                icon: Building2
              },
              {
                title: "설계 철학",
                desc: "사용자 편의성과 기업 보안의 균형을 맞춘 안심 설계 원칙을 준수합니다.",
                icon: ShieldAlert
              }
            ].map((section, idx) => (
              <div key={idx} className="bg-white p-4 sm:p-6 md:p-10 flex flex-col items-center text-center group hover:bg-slate-50 transition-colors">
                <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-xl sm:rounded-2xl bg-primary/10 text-primary flex items-center justify-center mb-3 sm:mb-4 md:mb-6 group-hover:scale-110 transition-transform">
                  <section.icon className="w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8" />
                </div>
                <h3 className="text-sm sm:text-lg md:text-xl font-bold text-slate-900 mb-2 sm:mb-3">{section.title}</h3>
                <p className="text-[#666] leading-relaxed text-xs sm:text-sm md:text-lg font-normal max-w-xs">
                  {section.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* Main Security Sections (Detailed View - keeping some for context or removing if redundant) */}
      {/* I will remove the original repeating sections to keep it clean as requested by the grid layout */}
      {/* Philosophy Section */}
      <section className="py-24 bg-slate-900 text-white overflow-hidden relative">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary to-transparent" />
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">고객 신뢰를 최우선으로 설계된 원격지원</h2>
            <div className="max-w-3xl mx-auto space-y-4">
              <p className="text-xl md:text-2xl font-medium leading-relaxed">
                편리함을 위해 보안을 희생하지 않고<br className="hidden md:block" />
                보안을 위해 사용성을 포기하지 않습니다.
              </p>
              <p className="opacity-80 text-[#fafafa] font-normal text-[20px]">
                “쉽지만 위험하지 않은 원격지원”
              </p>
            </div>
          </div>
          
          <div className="max-w-5xl mx-auto">
            <div className="bg-white/5 border border-white/10 p-8 md:p-12 rounded-[2rem] backdrop-blur-md pt-[14px] pb-[14px] pl-[48px] pr-[48px]">
              <div className="text-center mt-[12px] mb-[12px]">
                <span className="inline-block px-4 py-1 rounded-full bg-primary/20 font-black tracking-widest uppercase mb-4 text-[#ffffff] text-[14px] sm:text-[16px] lg:text-[18px]">
                  3 STEP TRUST DESIGN
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:flex lg:flex-col gap-8">
                {[
                  { 
                    step: "01", 
                    title: "사전 통제", 
                    subtitle: "고객 동의 없이는 시작되지 않음",
                    cardTitle: "고객 동의 중심",
                    desc: "사용자의 명시적 허가 없이는 절대 접속할 수 없는 철저한 동의 구조",
                    icon: ShieldCheck
                  },
                  { 
                    step: "02", 
                    title: "진행 통제", 
                    subtitle: "기업 정책 기준으로 연결 관리",
                    cardTitle: "기업 운영 기준",
                    desc: "까다로운 기업 보안 가이드와 내부 정책을 준수하며 실시간으로 연결을 관리하는 설계",
                    icon: ShieldAlert
                  },
                  { 
                    step: "03", 
                    title: "사후 추적", 
                    subtitle: "모든 과정이 기록되고 감사 가능",
                    cardTitle: "전 과정 통제",
                    desc: "접속부터 종료, 사후 이력 관리까지 모든 과정이 기록되어 문제 발생 시 추적이 가능",
                    icon: History
                  }
                ].map((item, i) => (
                  <div key={i} className="relative flex flex-col md:flex-row items-start gap-8 p-8 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-all group">
                    {/* Step Indicator */}
                    <div className="flex-shrink-0 flex flex-col items-center">
                      <span className="text-4xl font-black text-primary/40 group-hover:text-primary transition-colors mb-2">
                        {item.step}
                      </span>
                      <div className="w-px h-12 bg-gradient-to-b from-primary/40 to-transparent hidden md:block" />
                    </div>

                    {/* Content Section */}
                    <div className="flex-grow">
                      <div className="flex flex-col sm:flex-row sm:items-center gap-3 mb-2">
                        <h4 className="text-xl font-bold text-white">{item.title}</h4>
                        <span className="inline-block px-2 py-0.5 rounded bg-primary/20 whitespace-nowrap text-[16px] font-medium text-[#bfd4ff]">
                          {item.subtitle}
                        </span>
                      </div>
                      
                      <div className="mt-4 flex flex-col gap-4">
                        <div className="flex items-center gap-4">
                          <div className="w-10 h-10 rounded-xl bg-primary/20 flex items-center justify-center border border-primary/30 shrink-0">
                            <item.icon className="text-primary" size={20} />
                          </div>
                          <span className="font-bold text-lg text-white/90">{item.cardTitle}</span>
                        </div>
                        <p className="text-[#fafafa] font-normal text-[14px] sm:text-[16px] lg:text-[18px]">
                          {item.desc}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-12 text-center">
                <p className="text-sm font-medium text-[#97a2b8]">
                  애니서포트는 원격지원 전 과정을 투명하게 통제하여 기업의 소중한 정보를 보호합니다.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* CTA Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h2 className="text-3xl font-bold text-slate-900 mb-10">보안에 대한 타협 없는 완벽한 원격지원</h2>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Button size="lg" variant="outline" onClick={openModal} className="h-16 px-10 text-lg font-bold border-2 border-slate-200 hover:border-primary hover:text-primary">
              보안 기능 자세히 보기
            </Button>
            <Button size="lg" onClick={openModal} className="h-16 px-10 text-lg font-bold shadow-xl shadow-primary/20">
              기업 보안 환경에 맞는 도입 상담 <ArrowRight className="ml-2" />
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
