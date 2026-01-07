import { Button } from "@/components/ui/button";
import { useModal } from "@/context/ModalContext";
import { 
  ShieldCheck, 
  Users, 
  BarChart3, 
  Search, 
  Lock, 
  Settings, 
  Activity, 
  FileText, 
  Network, 
  UserPlus, 
  History, 
  CheckCircle2, 
  ChevronRight,
  ShieldAlert,
  Key
} from "lucide-react";
import managementHeroImg from "@assets/generated_images/modern_enterprise_dashboard_management_system.png";

export default function Management() {
  const { openModal } = useModal();

  return (
    <div className="flex flex-col">
      {/* 1. Hero Section */}
      <section className="relative pt-32 pb-24 overflow-hidden bg-slate-900 text-white">
        <div className="absolute inset-0 z-0">
          <img 
            src={managementHeroImg} 
            alt="Management Hero" 
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-slate-900/80 via-slate-900/60 to-slate-900" />
        </div>
        
        <div className="container mx-auto px-4 md:px-6 relative z-10 text-center">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-black mb-6 leading-tight">
              기업을 위한 통합<br />
              <span className="text-primary">원격지원 운영 및 통제</span>
            </h1>
            <p className="text-lg md:text-2xl font-bold mb-8 text-white/90 leading-relaxed">
              조직 전체의 원격 지원 현황을 실시간으로 통제하고<br className="hidden md:block" />
              철저한 감사 이력 관리를 통해 보안 컴플라이언스를 완성하세요.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" onClick={openModal} className="h-14 px-8 text-lg font-bold shadow-xl shadow-primary/20">
                관리자 데모 신청하기
              </Button>
              <Button size="lg" variant="outline" className="h-14 px-8 text-lg font-bold border-white/20 hover:bg-white/10 text-white">
                관리자 가이드 보기
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* 2. 핵심 가치 3가지 */}
      <section className="py-24 bg-white relative">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              {
                title: "운영 통제 (Control)",
                desc: "상담원별 권한 세분화 및 실시간 세션 강제 종료 기능을 통해 지원 전 과정을 중앙에서 제어합니다.",
                icon: ShieldAlert,
                badge: "권한관리"
              },
              {
                title: "보안·감사 (Audit)",
                desc: "전 과정 녹화 및 텍스트 로그 보관으로 사후 분쟁을 예방하고 규제 기관의 감사 요구를 충족합니다.",
                icon: Search,
                badge: "감사로그"
              },
              {
                title: "대규모 운영 (Enterprise)",
                desc: "유연한 조직 관리와 안정적인 서버 아키텍처로 대규모 고객센터 환경에서도 중단 없는 운영이 가능합니다.",
                icon: Network,
                badge: "24/365"
              }
            ].map((value, idx) => (
              <div key={idx} className="flex flex-col items-center text-center group">
                <div className="w-20 h-20 rounded-3xl bg-slate-50 text-primary flex items-center justify-center mb-6 group-hover:bg-primary/10 transition-colors">
                  <value.icon size={40} strokeWidth={1.5} />
                </div>
                <div className="mb-4">
                  <span className="px-3 py-1 rounded-full bg-slate-100 text-slate-500 text-xs font-bold uppercase tracking-wider">
                    {value.badge}
                  </span>
                </div>
                <h3 className="text-2xl font-bold mb-4">{value.title}</h3>
                <p className="text-slate-500 leading-relaxed">
                  {value.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. 관리 기능 상세 (그리드 6개) */}
      <section className="py-24 bg-slate-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">강력한 관리자 전용 기능</h2>
            <p className="text-slate-500 text-lg">성공적인 운영을 위해 필요한 모든 도구를 제공합니다.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { 
                title: "계정 및 권한 관리", 
                desc: "상담원별, 팀별 권한 설정 및 역할 기반 접근 제어(RBAC) 지원", 
                icon: UserPlus 
              },
              { 
                title: "운영 정책 설정", 
                desc: "파일 전송, 클립보드 공유, 접속 대기 시간 등 상세 정책 일괄 적용", 
                icon: Settings 
              },
              { 
                title: "상세 감사로그", 
                desc: "접속 이력, 작업 내용, 채팅 메시지 등 전 과정을 텍스트로 기록 및 보관", 
                icon: FileText 
              },
              { 
                title: "실시간 세션 모니터링", 
                desc: "현재 진행 중인 모든 원격지원 세션을 실시간으로 확인하고 필요시 강제 종료", 
                icon: Activity 
              },
              { 
                title: "조직 및 그룹 관리", 
                desc: "사내 조직도와 연동하거나 유연한 그룹 생성을 통한 대규모 인력 효율적 관리", 
                icon: Users 
              },
              { 
                title: "통계 리포트", 
                desc: "상담원별 지원 건수, 시간, 고객 만족도 등 성과 분석을 위한 대시보드 제공", 
                icon: BarChart3 
              }
            ].map((item, i) => (
              <div key={i} className="bg-white p-8 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
                <div className="w-12 h-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center mb-6">
                  <item.icon size={24} />
                </div>
                <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. 운영 시나리오 (타임라인) */}
      <section className="py-24 bg-white overflow-hidden">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">효율적인 원격지원 관리 프로세스</h2>
            <p className="text-slate-500 text-lg">체계적인 운영을 위한 4단계 관리 라이프사이클</p>
          </div>

          <div className="relative max-w-5xl mx-auto">
            {/* Horizontal Line for Desktop */}
            <div className="absolute top-1/2 left-0 w-full h-0.5 bg-slate-100 -translate-y-1/2 hidden lg:block" />
            
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 relative z-10">
              {[
                { step: "01", title: "정책 설정", desc: "사내 보안 가이드에 맞춰 접속 및 기능 권한을 설정합니다." },
                { step: "02", title: "배포/적용", desc: "설정된 정책이 모든 상담원에게 즉시 일괄 적용됩니다." },
                { step: "03", title: "실시간 모니터링", desc: "진행 중인 지원 현황을 대시보드에서 실시간 확인합니다." },
                { step: "04", title: "감사/리포트", desc: "저장된 이력과 통계를 바탕으로 운영 성과를 분석합니다." }
              ].map((item, i) => (
                <div key={i} className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm relative">
                  <div className="w-12 h-12 rounded-full bg-primary text-white flex items-center justify-center font-black text-xl mb-6 shadow-lg shadow-primary/30">
                    {item.step}
                  </div>
                  <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                  <p className="text-slate-500 text-sm leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 5. 보안/컴플라이언스 (2열) */}
      <section className="py-24 bg-slate-900 text-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-8">글로벌 보안 수준의<br />컴플라이언스 준수</h2>
              <div className="space-y-8">
                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center shrink-0 border border-primary/30">
                    <ShieldCheck className="text-primary" size={24} />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold mb-2">종단간 암호화 및 접근 통제</h4>
                    <p className="text-slate-400 text-sm leading-relaxed">
                      SSL/TLS 암호화 통신을 기본 적용하며, 미인가 사용자의 접근을 원천 차단하기 위한 IP 제한 기능을 제공합니다.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center shrink-0 border border-primary/30">
                    <Lock className="text-primary" size={24} />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold mb-2">관리자 다중 인증 (2FA)</h4>
                    <p className="text-slate-400 text-sm leading-relaxed">
                      관리 콘솔 로그인 시 모바일 OTP 등 추가 인증을 통해 관리자 계정 유출로 인한 사고를 예방합니다.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center shrink-0 border border-primary/30">
                    <History className="text-primary" size={24} />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold mb-2">장기 로그 보관 정책</h4>
                    <p className="text-slate-400 text-sm leading-relaxed">
                      법적/운영적 요구사항에 맞춰 최대 1년 이상의 세션 로그 및 녹화 데이터 보관 정책을 설정할 수 있습니다.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="p-8 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-sm">
                  <div className="text-primary font-black text-4xl mb-2">256</div>
                  <div className="text-slate-400 text-sm font-bold uppercase tracking-widest">AES Encryption</div>
                </div>
                <div className="p-8 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-sm">
                  <div className="text-primary font-black text-4xl mb-2">99.9</div>
                  <div className="text-slate-400 text-sm font-bold uppercase tracking-widest">System Uptime</div>
                </div>
              </div>
              <div className="space-y-4 pt-12">
                <div className="p-8 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-sm">
                  <div className="text-primary font-black text-4xl mb-2">SSL</div>
                  <div className="text-slate-400 text-sm font-bold uppercase tracking-widest">TLS Security</div>
                </div>
                <div className="p-8 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-sm">
                  <div className="text-primary font-black text-4xl mb-2">E2E</div>
                  <div className="text-slate-400 text-sm font-bold uppercase tracking-widest">Protection</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. CTA Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-5xl font-bold mb-8">대규모 조직을 위한<br />가장 완벽한 관리 도구</h2>
            <p className="text-slate-500 mb-12 text-xl leading-relaxed">
              지금 바로 관리자 데모를 통해 애니서포트의 강력한<br className="hidden md:block" />
              운영 및 통제 기능을 직접 경험해 보세요.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" onClick={openModal} className="h-16 px-12 text-xl font-bold shadow-2xl shadow-primary/20">
                무료 체험 시작하기
              </Button>
              <Button size="lg" variant="outline" className="h-16 px-12 text-xl font-bold border-2 border-slate-200 hover:border-primary hover:text-primary">
                솔루션 상담 신청
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
