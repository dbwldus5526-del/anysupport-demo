import { Button } from "@/components/ui/button";
import { useModal } from "@/context/ModalContext";
import { 
  Settings, 
  Users, 
  Shield, 
  BarChart3, 
  Monitor, 
  Key,
  Database,
  Search,
  CheckCircle2,
  Lock,
  Clock,
  LayoutDashboard
} from "lucide-react";
import managementHeroImg from "@assets/generated_images/modern_enterprise_dashboard_management_system.png";

export default function Management() {
  const { openModal } = useModal();

  const features = [
    {
      title: "중앙 집중형 관리",
      desc: "모든 원격지원 세션과 상담원 계정을 한곳에서 효율적으로 관리할 수 있습니다.",
      icon: LayoutDashboard
    },
    {
      title: "사용자 그룹 및 권한",
      desc: "조직 구조에 맞춰 상담원 그룹을 생성하고 세부적인 접근 권한을 설정합니다.",
      icon: Users
    },
    {
      title: "보안 정책 설정",
      desc: "로그인 보안, IP 제한, 다중 인증(2FA) 등 기업용 보안 정책을 강제 적용합니다.",
      icon: Shield
    },
    {
      title: "통계 및 리포트",
      desc: "지원 시간, 만족도, 연결 통계 등 다양한 데이터를 시각화하여 보고서로 제공합니다.",
      icon: BarChart3
    }
  ];

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden bg-slate-900 text-white">
        <div className="absolute inset-0 z-0">
          <img 
            src={managementHeroImg} 
            alt="Management Hero" 
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-slate-900/50 to-slate-900" />
        </div>
        
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-3xl md:text-6xl font-black mb-6 leading-tight">
              원격지원 관리<br />
              <span className="text-primary">Admin Console</span>
            </h1>
            <p className="text-lg md:text-2xl font-bold mb-6 text-white/90">
              조직 전체의 원격 지원 현황을<br />
              실시간으로 모니터링하고 제어하세요.
            </p>
            <p className="text-slate-400 text-lg mb-8 leading-relaxed">
              관리자 전용 대시보드를 통해 상담원 관리, 보안 정책 설정,<br />
              상세 이력 조회 및 통계 리포트까지 체계적인 운영 환경을 제공합니다.
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, idx) => (
              <div key={idx} className="p-8 rounded-3xl border border-slate-100 bg-white shadow-sm hover:shadow-md transition-shadow">
                <div className="w-12 h-12 rounded-2xl bg-primary/10 text-primary flex items-center justify-center mb-6">
                  <feature.icon size={24} />
                </div>
                <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed">
                  {feature.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Main Features Detail */}
      <section className="py-24 bg-slate-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center mb-24">
            <div>
              <span className="text-primary font-black tracking-widest uppercase mb-4 block">ACCOUNT MANAGEMENT</span>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">유연한 계정 및 조직 관리</h2>
              <p className="text-slate-600 mb-8 leading-relaxed">
                상담원의 역할(Role)에 따라 메뉴 접근 및 기능 사용 범위를 세분화하여 설정할 수 있습니다. 
                부서나 프로젝트 단위로 그룹을 생성하여 관리 효율성을 극대화합니다.
              </p>
              <ul className="space-y-4">
                {[
                  "상담원 별 기능 제한(파일 전송, 제어 등)",
                  "조직도 기반 그룹핑 및 관리자 위임",
                  "실시간 상담원 접속 상태 모니터링"
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 font-medium text-slate-700">
                    <CheckCircle2 size={18} className="text-primary" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-white p-4 rounded-3xl shadow-2xl border border-slate-100">
              <div className="aspect-video bg-slate-900 rounded-2xl flex items-center justify-center overflow-hidden">
                 <div className="grid grid-cols-3 gap-4 w-full p-8">
                    {[1,2,3,4,5,6].map(i => (
                      <div key={i} className="h-12 bg-white/10 rounded-lg animate-pulse" />
                    ))}
                 </div>
              </div>
            </div>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-center flex-row-reverse">
            <div className="lg:order-2">
              <span className="text-primary font-black tracking-widest uppercase mb-4 block">SECURITY & AUDIT</span>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">철저한 보안 및 감사 기능</h2>
              <p className="text-slate-600 mb-8 leading-relaxed">
                언제, 누가, 누구에게 원격지원을 했는지 모든 이력을 기록합니다. 
                녹화 파일 저장 및 로그 조회를 통해 사후 문제 발생 시 명확한 근거 자료로 활용 가능합니다.
              </p>
              <ul className="space-y-4">
                {[
                  "원격지원 세션 실시간 강제 종료",
                  "전 과정 동영상 녹화 및 이력 저장",
                  "상세 작업 로그(이벤트 로그) 기록"
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 font-medium text-slate-700">
                    <CheckCircle2 size={18} className="text-primary" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="lg:order-1 bg-white p-4 rounded-3xl shadow-2xl border border-slate-100">
              <div className="aspect-video bg-slate-900 rounded-2xl p-8">
                 <div className="space-y-3">
                    <div className="h-2 w-3/4 bg-white/20 rounded" />
                    <div className="h-2 w-1/2 bg-white/10 rounded" />
                    <div className="h-2 w-5/6 bg-white/20 rounded" />
                    <div className="h-2 w-2/3 bg-white/10 rounded" />
                 </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-8">안전하고 체계적인 원격지원 관리의 시작</h2>
            <p className="text-slate-500 mb-12 text-lg">
              애니서포트의 강력한 관리자 기능을 통해 운영 비용은 줄이고 보안성은 높이세요.
            </p>
            <Button size="lg" onClick={openModal} className="h-16 px-12 text-xl font-bold shadow-xl shadow-primary/20">
              무료 체험으로 관리 기능 확인하기
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
