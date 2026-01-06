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
  ArrowRight
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
      <section className="relative pt-32 pb-20 overflow-hidden bg-slate-900 text-white">
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
            <h1 className="text-4xl md:text-6xl font-black mb-6 leading-tight">
              보안성과 안전성
            </h1>
            <p className="text-xl md:text-2xl font-bold text-primary mb-6">
              기업 환경을 고려한 보안 설계
            </p>
            <p className="text-lg text-slate-300 mb-4 max-w-2xl mx-auto leading-relaxed">
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

      {/* Main Security Sections */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid gap-16">
            {securitySections.map((section, idx) => (
              <div key={section.id} className={`flex flex-col lg:flex-row gap-12 items-center ${idx % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
                <div className="flex-1 space-y-6">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary font-bold text-xs uppercase tracking-wider">
                    {section.title.split('.')[0]}
                  </div>
                  <h2 className="text-3xl md:text-4xl font-bold text-slate-900">
                    {section.subtitle}
                  </h2>
                  <p className="text-lg text-slate-600 leading-relaxed">
                    {section.desc}
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
                    {section.points.map((point, i) => (
                      <div key={i} className="flex items-center gap-3 p-4 rounded-xl bg-slate-50 border border-slate-100 group hover:border-primary/30 transition-colors">
                        <CheckCircle2 size={20} className="text-primary group-hover:scale-110 transition-transform" />
                        <span className="font-bold text-slate-700">{point}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="flex-1 flex justify-center">
                  <div className="w-64 h-64 md:w-80 md:h-80 rounded-3xl bg-slate-50 border border-slate-100 flex items-center justify-center relative group">
                    <div className="absolute inset-0 bg-primary/5 rounded-3xl scale-95 group-hover:scale-100 transition-transform" />
                    <section.icon size={120} className="text-primary relative z-10 opacity-80 group-hover:opacity-100 group-hover:scale-110 transition-all duration-500" />
                    <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-primary/10 rounded-full blur-3xl" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="py-24 bg-slate-900 text-white overflow-hidden relative">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary to-transparent" />
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">6. 고객 신뢰를 위한 설계 철학</h2>
            <p className="text-primary font-bold text-xl">편의성과 보안의 균형</p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="bg-white/5 border border-white/10 p-10 rounded-3xl backdrop-blur-md">
              <p className="text-2xl font-bold text-center mb-12">
                “쉽지만 위험하지 않은 원격지원”
              </p>
              <div className="grid md:grid-cols-3 gap-8">
                {[
                  { title: "고객 동의 중심", desc: "사용자의 명시적 허가 없이는 절대 접속할 수 없는 철저한 동의 구조" },
                  { title: "기업 운영 기준", desc: "까다로운 기업 보안 가이드를 준수하며 관리 기능을 강화한 설계" },
                  { title: "전 과정 통제", desc: "접속부터 종료, 사후 이력 관리까지 모든 과정을 관리자가 통제 가능" }
                ].map((item, i) => (
                  <div key={i} className="text-center">
                    <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-4 border border-primary/30">
                      <ShieldAlert className="text-primary" size={24} />
                    </div>
                    <h4 className="font-bold text-lg mb-2">{item.title}</h4>
                    <p className="text-sm text-slate-400 leading-relaxed">{item.desc}</p>
                  </div>
                ))}
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
