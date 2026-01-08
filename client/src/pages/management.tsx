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
  Key,
  HelpCircle
} from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

import sessionImg from "@assets/관리자페이지__원격지원_세션관리_1767774669198.png";
import monitoringImg from "@assets/관리자페이지__실시간_다중모니터링_1767774713959.png";
import historyImg from "@assets/관리자페이지__원격지원_기록관리_1767774508620.png";
import { Link } from "wouter";

const heroImage = "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=2426&ixlib=rb-4.0.3";

export default function Management() {
  const { openModal } = useModal();

  const managementFeatures = [
    {
      title: "01. 원격지원 세션관리",
      desc: "인증번호 생성 버튼을 누르면 인증번호가 생성되며, 최대 10개의 인증번호를 생성할 수 있습니다.\n\n6자리의 접속 인증 번호는 랜덤으로 생성되며, 하나의 인증 번호로 단 한 번의 접속을 할 수 있게 설정하여 임의의 재접속을 원천적으로 차단합니다.\n\n고객이 접속인증번호를 입력하면 고객의 PC에 자동으로 연결되며, 설정을 통하여 자동접속 여부를 결정할 수 있습니다.",
      image: sessionImg,
      badge: "Session Control"
    },
    {
      title: "02. 실시간 다중 모니터링",
      desc: "국내 유일 다중 모니터링 지원 기능으로 유지보수 및 패치 작업시 진행 상황을 실시간으로 모니터링 하여 신속하고 편리한 작업이 가능합니다.\n\n복수의 디스플레이 장치를 사용하는 고객의 환경에 대해서도 상담원이 모든 화면을 쉽게 자신의 PC처럼 볼 수 있습니다.",
      image: monitoringImg,
      badge: "Multi Monitoring"
    },
    {
      title: "03. 원격지원 기록관리",
      desc: "기록관리 기능으로 고객에 대한 기록을 남길 수 있으며 통계자료로 활용이 가능합니다.\n\n시작 / 종료 시간 및 원격지원 시간 등 상세내역을 저장하며, Excel 파일로 다운로드 할 수 있는 기능을 제공합니다.\n\n또한 지원 후의 고객만족도를 조사할 수 있는 설문조사 기능을 제공하여 효율적인 고객관리가 가능합니다.",
      image: historyImg,
      badge: "History & Report"
    }
  ];

  return (
    <div className="flex flex-col">
      {/* 1. Hero Section */}
      <section className="relative pt-32 pb-24 overflow-hidden bg-slate-900 text-white">
        <div className="absolute inset-0 z-0">
          <img 
            src={heroImage} 
            alt="Management Hero" 
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-slate-900/80 via-slate-900/60 to-slate-900" />
        </div>
        
        <div className="container mx-auto px-4 md:px-6 relative z-10 text-center">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-black mb-6 leading-tight">
              기업용 원격지원<br />
              <span className="text-primary">운영 · 통제 · 감사 · 정책</span>
            </h1>
            <p className="text-lg md:text-2xl font-bold mb-8 text-white/90 leading-relaxed">
              조직 전체의 원격 지원 현황을 한눈에 파악하고<br className="hidden md:block" />
              강력한 정책 설정으로 기업 보안의 기준을 세우세요.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" onClick={openModal} className="h-14 px-8 text-lg font-bold shadow-xl shadow-primary/20">
                관리자 기능 체험하기
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
                title: "운영 통제",
                desc: "실시간 세션 모니터링 및 강제 종료로 원격 지원의 모든 과정을 중앙에서 완벽하게 제어합니다.",
                icon: ShieldAlert,
                badge: "권한관리"
              },
              {
                title: "보안·감사",
                desc: "전 과정 동영상 녹화와 텍스트 로그 보관을 통해 투명한 감사 추적과 사고 예방이 가능합니다.",
                icon: Search,
                badge: "감사로그"
              },
              {
                title: "대규모 운영",
                desc: "조직도 연동과 그룹별 정책 설정을 통해 수천 명 규모의 센터도 효율적으로 운영할 수 있습니다.",
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
            <h2 className="text-3xl md:text-4xl font-bold mb-4">강력한 통합 관리 기능</h2>
            <p className="text-slate-500 text-lg">관리자의 생산성과 보안성을 동시에 높여주는 전용 도구</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { 
                title: "계정 및 권한 제어", 
                desc: "조직 직급과 역할에 따른 세밀한 메뉴 접근 및 기능 사용 권한 설정", 
                icon: UserPlus 
              },
              { 
                title: "접속/보안 정책", 
                desc: "파일 전송 금지, 클립보드 차단, IP 접속 제한 등 강력한 보안 정책 강제", 
                icon: Settings 
              },
              { 
                title: "전 과정 감사로그", 
                desc: "모든 지원 세션의 시작부터 종료까지 텍스트 로그 및 동영상 무결성 저장", 
                icon: FileText 
              },
              { 
                title: "세션 실시간 모니터링", 
                desc: "현재 진행 중인 상담 현황을 실시간 파악하고 긴급 상황 시 즉시 연결 종료", 
                icon: Activity 
              },
              { 
                title: "유연한 조직 관리", 
                desc: "부서 및 팀별 계정 그룹화로 대규모 조직의 효율적인 통합 관리 체계 구축", 
                icon: Users 
              },
              { 
                title: "운영 리포트/통계", 
                desc: "상담원별 성과, 고객 만족도, 시스템 이용 현황을 시각화된 보고서로 제공", 
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
            <h2 className="text-3xl md:text-4xl font-bold mb-4">주요 관리 기능 상세</h2>
            <p className="text-slate-500 text-lg">실제 운영 환경에 최적화된 관리 도구의 상세 설명입니다.</p>
          </div>

          <div className="grid grid-cols-1 gap-16 max-w-6xl mx-auto">
            {managementFeatures.map((item, i) => (
              <div key={i} className={`flex flex-col ${i % 2 === 1 ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-12 items-center`}>
                <div className="flex-1 space-y-6">
                  <div className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase tracking-widest">
                    {item.badge}
                  </div>
                  <h3 className="text-3xl font-bold text-slate-900">{item.title}</h3>
                  <div className="text-slate-600 leading-relaxed whitespace-pre-wrap">
                    {item.desc}
                  </div>
                </div>
                <div className="flex-1 w-full">
                  <div className="rounded-3xl overflow-hidden border border-slate-100 bg-slate-100 aspect-[16/10]">
                    <img 
                      src={item.image} 
                      alt={item.title} 
                      className="w-full h-full object-contain bg-white p-4"
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. 운영 시나리오 (타임라인) */}
      <section className="py-24 bg-slate-900 text-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-8">기업용 보안 및 컴플라이언스</h2>
              <div className="space-y-8">
                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center shrink-0 border border-primary/30">
                    <ShieldCheck className="text-primary" size={24} />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold mb-2">종단간 통신 암호화</h4>
                    <p className="text-slate-400 text-sm leading-relaxed">
                      SSL/TLS 기반의 보안 전송과 데이터 암호화를 통해 전 구간의 보안을 보장합니다.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center shrink-0 border border-primary/30">
                    <Lock className="text-primary" size={24} />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold mb-2">관리자 다중 인증 (2FA) 및 IP 제한</h4>
                    <p className="text-slate-400 text-sm leading-relaxed">
                      OTP 인증과 사내 IP 화이트리스트 설정을 통해 관리자 콘솔의 무단 접근을 완벽 차단합니다.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center shrink-0 border border-primary/30">
                    <History className="text-primary" size={24} />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold mb-2">로그 장기 보관 시스템</h4>
                    <p className="text-slate-400 text-sm leading-relaxed">
                      최대 1년 이상의 로그 및 데이터 보관 기능을 통해 법적 규제 준수를 지원합니다.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="p-8 rounded-3xl bg-white/5 border border-white/10">
                  <div className="text-primary font-black text-4xl mb-2">AES</div>
                  <div className="text-slate-400 text-sm font-bold uppercase tracking-widest">256-bit Encryption</div>
                </div>
                <div className="p-8 rounded-3xl bg-white/5 border border-white/10">
                  <div className="text-primary font-black text-4xl mb-2">ISO</div>
                  <div className="text-slate-400 text-sm font-bold uppercase tracking-widest">Standard Compliant</div>
                </div>
              </div>
              <div className="space-y-4 pt-12">
                <div className="p-8 rounded-3xl bg-white/5 border border-white/10">
                  <div className="text-primary font-black text-4xl mb-2">2FA</div>
                  <div className="text-slate-400 text-sm font-bold uppercase tracking-widest">Multi-factor Auth</div>
                </div>
                <div className="p-8 rounded-3xl bg-white/5 border border-white/10">
                  <div className="text-primary font-black text-4xl mb-2">SSL</div>
                  <div className="text-slate-400 text-sm font-bold uppercase tracking-widest">Secure Connection</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. FAQ (아코디언) */}
      <section className="py-24 bg-slate-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">자주 묻는 질문</h2>
              <p className="text-slate-500 text-lg">원격지원 관리에 대해 궁금한 점을 확인하세요.</p>
            </div>
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-1">
                <AccordionTrigger>동시에 관리할 수 있는 계정 수에 제한이 있나요?</AccordionTrigger>
                <AccordionContent>
                  계정 수에는 제한이 없으며, 수천 명 규모의 상담원을 그룹별로 나누어 효율적으로 관리할 수 있는 구조를 제공합니다.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2">
                <AccordionTrigger>파일 전송이나 화면 제어 권한을 특정 그룹에만 줄 수 있나요?</AccordionTrigger>
                <AccordionContent>
                  네, 관리자 페이지에서 부서나 프로젝트별로 그룹을 생성하고 파일 전송 금지, 읽기 전용 모드 등 세부 권한을 각각 다르게 설정할 수 있습니다.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3">
                <AccordionTrigger>보관된 감사 로그는 얼마나 유지되나요?</AccordionTrigger>
                <AccordionContent>
                  기본적으로 6개월간 보관되며, 기업의 정책에 따라 최대 1년 이상 장기 보관 옵션을 선택하실 수 있습니다.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </section>

      {/* 7. CTA Section */}
      <section className="py-24 bg-primary text-white text-center">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-3xl md:text-5xl font-bold mb-8">완벽한 통제로 완성되는 원격지원</h2>
          <p className="text-white/90 mb-12 text-xl max-w-2xl mx-auto">
            애니서포트 관리 콘솔을 통해 사내 보안 정책을 강화하고 효율적인 상담 환경을 구축하세요.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" onClick={openModal} className="h-16 px-12 text-xl font-bold shadow-2xl bg-white text-primary">
              지금 바로 상담 신청하기
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
