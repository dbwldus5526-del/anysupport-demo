import { useState } from "react";
import { Button } from "@/components/ui/button";
import { useModal } from "@/context/ModalContext";
import { 
  Monitor, 
  Globe, 
  Zap, 
  HelpCircle, 
  Clock, 
  LayoutDashboard,
  CheckCircle2,
  ArrowRight,
  ShieldCheck,
  Video,
  Mic,
  MessageSquare,
  FileUp,
  BarChart3,
  Settings2,
  Users,
  FileText,
  Smartphone,
  Share2,
  Printer,
  PenTool,
  Info,
  RefreshCw,
  ChevronDown,
  ChevronUp,
  History,
  Lock,
  Palette,
  Phone,
  Send,
  Star
} from "lucide-react";
import featuresHeroImg from "@assets/generated_images/modern_digital_dashboard_showing_various_remote_support_features_and_statistics.png";

export default function Features() {
  const { openModal } = useModal();
  const [expandedCategory, setExpandedCategory] = useState<number | null>(null);

  const featureGroups = [
    {
      title: "기본 기능",
      summary: "원격지원에 필요한 필수 기능을 가장 안정적으로 제공합니다.",
      icon: Monitor,
      items: [
        { title: "화면 공유", desc: "원격지에 있는 PC의 화면을 실시간으로 공유합니다.", icon: Share2 },
        { title: "원격 제어", desc: "키보드와 마우스 제어를 통해 원격지 PC의 모든 기능을 사용할 수 있도록 지원합니다.", icon: Monitor },
        { title: "파일 전송 (Drag & Drop)", desc: "Drag & Drop, Ctrl-C & V, 양방향 파일 전송을 구현한 상담원 PC와 원격 제어하여 전송 기능입니다.", icon: FileUp },
        { title: "실시간 채팅", desc: "고객과 상담원 간의 실시간 채팅을 지원합니다. 채팅 내용은 저장되어 관리 가능합니다.", icon: MessageSquare },
        { title: "그리기", desc: "고객의 PC 화면에 직접 그림을 그려 선택한 만큼 클릭하거나 구역을 지정하는 등 양방향 실시간 제공이 가능합니다.", icon: PenTool },
        { title: "멀티모니터 지원", desc: "복수의 디스플레이 장치를 사용하는 고객의 환경에 대해서도 상담원이 모든 화면을 살펴 지원이 가능합니다.", icon: Monitor },
        { title: "재부팅 후 자동 재접속", desc: "고객 PC를 재부팅한 후에 자동으로 재접속합니다.", icon: RefreshCw },
        { title: "안전모드 원격지원", desc: "안전모드에서 원격 지원이 가능하며, 재부팅 후 안전모드로 진입하는 기능을 제공합니다.", icon: ShieldCheck },
        { title: "방화벽 / 프록시 / 사설망 터널링", desc: "방화벽, 프록시, IP 공유기 이용한 사설 IP로 구성되어 있는 환경에 자동으로 호환이 되어 신속하게 지원이 가능합니다.", icon: Globe },
        { title: "마우스/키보드 잠금", desc: "운용자의 실수를 막아 고객의 마우스 키보드 ON/OFF를 설정할 수 있습니다.", icon: Lock },
        { title: "트루컬러지원", desc: "애니서포트는 2, 4, 16, 256, True Color를 지원합니다. 또한 화질지원 도수 해상도 변경도 가능합니다.", icon: Palette },
        { title: "고객 프로그램 미설치 (Non-ActiveX)", desc: "고객은 ActiveX 외 별도의 프로그램 설치 과정 없이 간편하게 원격지원 연결이 가능합니다. 또한 설치가 끝난 후에는 모든 관련 프로그램을 제거합니다.", icon: Settings2 },
        { title: "멀티브라우저 지원", desc: "IE 및 모든 웹 브라우저를 지원합니다. (IE, Chrome, Firefox, Opera, Safari 등)", icon: Globe }
      ]
    },
    {
      title: "부가 기능",
      summary: "상담 환경을 풍부하게 만드는 다양한 도구 세트입니다.",
      icon: Zap,
      items: [
        { title: "독점영역 화면 공유", desc: "화면 공유시 고객 PC의 독점 영역만을 드래그 하여 선택적으로 공유할 수 있습니다.", icon: Share2 },
        { title: "특정 어플리케이션 공유", desc: "화면 공유시 특정 실행 프로그램을 선택하여 공유할 수 있습니다.", icon: Monitor },
        { title: "원격지역 현재 및 저장", desc: "고객 PC 내용을 캡쳐해서 실시간으로 상담원 화면에 저장할 수 있습니다. 이는 그대로 지원 시 문제 해결을 위한 정보로 활용할 수 있습니다.", icon: FileUp },
        { title: "화면녹화 저장 및 플레이", desc: "원격지원의 모든 내용을 실시간 녹화할 수 있습니다. 화면녹화 뿐만 아니라, 음성대화, PC소리 등 연결 이후 모든 제어 내용 기록입니다.", icon: Video },
        { title: "원격프린팅", desc: "원격지원 중 공유한 문서에 대해 파일 전송 없이 고객의 PC 에서 출력이 가능합니다.", icon: Printer },
        { title: "소리전송", desc: "상담원은 문제에 있는 고객 PC 소리를 실시간으로 들을 수 있습니다.", icon: Mic },
        { title: "시스템 정보보기", desc: "원격지PC의 상세한 시스템 정보를 체크합니다. 이를 통해 문제 원인 파악 방향을 파악 분석할 수 있도록 지원합니다.", icon: Info },
        { title: "프로세스 정보보기", desc: "원격지 PC에서 실행중 프로세스를 관리할 수 있습니다. 문제가 되는 프로그램을 삭제하거나 강제종료 할 수도 있습니다.", icon: Settings2 },
        { title: "상담원 화면 전송 / 제어", desc: "상담원의 화면을 고객에게 전송하여 보여주거나 역으로 제어하게 할 수도 제어받게 할 수 있습니다.", icon: Phone },
        { title: "작업 관리자 실행 (Ctrl+Alt+Del)", desc: "전 법칙 클릭으로 작업 관리자를 실행하거나 시스템을 재부팅할 때 사용할 수 있습니다.", icon: Settings2 },
        { title: "URL전송", desc: "고객 PC에 자동으로 URL를 전송하여 자동으로 웹브라우저를 통해 실행합니다.", icon: Send },
        { title: "즐겨찾기 (로그, 프로그램, URL)", desc: "자주 사용되는 페이지나 로그, 프로그램 경로를 전송하여 자동으로 실행합니다.", icon: Star },
        { title: "환경설정", desc: "내도록 및 고객 PC 사양에 따라 전송 속도의 최대 품질 등을 설정할 수 있습니다.", icon: Settings2 },
        { title: "화면설정", desc: "고객의 PC 화면 자유도를 전송받아 50%, 75% 등의 비율로 관련에게 조정이 가능합니다.", icon: Share2 },
        { title: "해상도변경", desc: "고객의 상담의 PC 간에 화면 범위상 다른 경우, 자유도를 원활하게하여 상담원의 화면에 맞게 경합니다.", icon: Monitor },
        { title: "클립보드", desc: "클립보드는 동기 고객에게 전달하고자 하는 내용을 복사해서 전송할 수 있습니다.", icon: FileText }
      ]
    },
    {
      title: "협업·보안",
      summary: "기업 환경에 최적화된 철저한 보안과 협업 기능을 제공합니다.",
      icon: ShieldCheck,
      items: [
        { title: "상담원 초대", desc: "고객과 상담원의 원격지원 전담 도중 제 3의 상담원을 초대해 고객에게 제어할 수 있습니다.", icon: Users },
        { title: "세션 전달", desc: "독점 다른 상담원에게 현재 진행중인 상담세션을 전달할 수 있습니다.", icon: Send },
        { title: "블랙스크린", desc: "원격지 고객의 화면을 다른 사용자들이 보지 못하도록 차단으로 시켜 제게 제어할 시간 때 할 수 있습니다.", icon: Monitor },
        { title: "인증번호 입력", desc: "6자리의 숫자 외 인증을 땅으로 생성하여, 허니 언론 양쪽으로 단 번 만의 숫자를 수 입력 설정하여 입장의 제공을 검인식으로 자세합니다.", icon: Lock },
        { title: "고객PC화면이 \"원격지원 중\" 표시", desc: "고객 안심기능으로 버튼에게 원격지원이 종료돼 이라는기 표시합니다.", icon: Monitor },
        { title: "접속중 고객 동의", desc: "화면 제어나 위해 먼저 고객에게 원격제어 동의를 요청할 수 있습니다. 고객이 승인한 답변에서만 원격제어가 시작되며, 고객 PC 를 보호할 수 있습니다.", icon: CheckCircle2 }
      ]
    },
    {
      title: "관리·통계",
      summary: "상담 데이터를 체계적으로 관리하고 인사이트를 도출합니다.",
      icon: BarChart3,
      items: [
        { title: "관리자 페이지", desc: "상담원 계정을 생성 및 수정, 제거할 수 있는 관리자 페이지를 제공합니다.", icon: LayoutDashboard },
        { title: "상담원 통계", desc: "전체유형별, 기간별, 월별, 일별, 시간별, 상담원별 등 상담내역에 대해 상세한 통계 자료를 제공합니다.", icon: BarChart3 },
        { title: "고객 접속페이지 수정 / 설정", desc: "고객 접속 페이지를 고객이 스스로 변경할 수 있도록 하는 기능을 제공합니다.", icon: Settings2 },
        { title: "고객 만족도 조사", desc: "원격지원 후의 고객만족도를 조사할 수 있는 설문조사 기능을 제공합니다.", icon: CheckCircle2 },
        { title: "상담 일지", desc: "상담내역 및 정애내용을 상세하게 기록하여 저장 및 관리를 할 수 있는 기능을 제공합니다.", icon: FileText },
        { title: "원격지원 기록 관리", desc: "시작 / 종료 시간 및 원격지원 시간 등 상세내역을 저장하며, Excel 파일로 다운로드 할 수 있는 기능을 제공합니다.", icon: FileText }
      ]
    }
  ];

  const toggleCategory = (idx: number) => {
    setExpandedCategory(expandedCategory === idx ? null : idx);
  };

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden bg-slate-900 text-white">
        <div className="absolute inset-0 z-0">
          <img 
            src={featuresHeroImg} 
            alt="Features Hero" 
            className="w-full h-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-slate-900/50 to-slate-900" />
        </div>
        
        <div className="container mx-auto px-4 md:px-6 relative z-10 text-center">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-black mb-6 leading-tight">
              다양한 기능
            </h1>
            <p className="text-xl md:text-2xl mb-6 text-[#ffffff] font-medium">
              운영 효율을 극대화하는 스마트한 도구들
            </p>
            <p className="text-lg text-slate-300 mb-4 max-w-2xl mx-auto leading-relaxed">
              단순한 원격 제어를 넘어, 기업의 운영 목적에 맞춘<br />
              애니서포트만의 혁신적인 기능들을 확인해 보세요.
            </p>
          </div>
        </div>
      </section>
      {/* 1. Category Accordion Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6 text-center mb-16">
          <h2 className="text-[25px] md:text-4xl font-black text-slate-900 mb-4">카테고리별 상세 기능</h2>
          <p className="text-[#666] font-normal text-lg">각 카드를 클릭하여 애니서포트의 강력한 도구들을 자세히 살펴보세요.</p>
        </div>
        
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col gap-6 max-w-5xl mx-auto">
            {featureGroups.map((group, idx) => (
              <div key={idx} className="flex flex-col">
                <div 
                  onClick={() => toggleCategory(idx)}
                  className={`p-8 md:p-10 rounded-[2.5rem] bg-slate-50 border transition-all duration-500 flex flex-col md:flex-row md:items-center gap-8 cursor-pointer hover:shadow-xl ${expandedCategory === idx ? 'border-primary shadow-lg ring-1 ring-primary/20' : 'border-slate-100'}`}
                >
                  <div className="flex items-center gap-6 flex-1">
                    <div className={`w-16 h-16 rounded-2xl flex items-center justify-center shadow-lg transition-all duration-300 flex-shrink-0 ${expandedCategory === idx ? 'bg-primary text-white scale-110 shadow-primary/30' : 'bg-white text-primary shadow-slate-200'}`}>
                      <group.icon size={32} />
                    </div>
                    <div className="text-left">
                      <h2 className="md:text-2xl text-[18px] font-bold text-[#333]">{group.title}</h2>
                      <p className="md:text-sm mt-1 md:whitespace-nowrap font-normal text-[#666] text-[18px]">{group.summary}</p>
                    </div>
                  </div>
                  
                  <div className="md:pl-6 md:border-l border-slate-200 flex items-center gap-3 min-w-[140px] justify-end">
                    <span className="font-black text-primary text-sm whitespace-nowrap">
                      {expandedCategory === idx ? '상세 접기' : '자세히 보기'}
                    </span>
                    {expandedCategory === idx ? <ChevronUp className="text-primary" size={20} /> : <ChevronDown className="text-primary" size={20} />}
                  </div>
                </div>

                {/* Expanded Content (Accordion) */}
                <div className={`overflow-hidden transition-all duration-500 ease-in-out ${expandedCategory === idx ? 'max-h-[600px] opacity-100 mt-4' : 'max-h-0 opacity-0'}`}>
                  <div className="bg-slate-900 rounded-[2.5rem] p-8 md:p-12 text-white shadow-2xl mx-2 h-full flex flex-col max-h-[580px]">
                    <div className="flex items-center justify-between mb-10 border-b border-white/10 pb-6 flex-shrink-0">
                      <h3 className="text-2xl font-bold flex items-center gap-4">
                        <div className="w-10 h-10 rounded-xl bg-primary/20 flex items-center justify-center">
                          <group.icon className="text-primary" size={24} />
                        </div>
                        {group.title} 전체 기능
                      </h3>
                      <div className="hidden md:block h-[1px] flex-1 mx-8 bg-gradient-to-r from-white/10 to-transparent" />
                    </div>
                    <div className="grid md:grid-cols-2 gap-6 overflow-y-auto pr-4 custom-scrollbar">
                      {group.items.map((item, i) => (
                        <div key={i} className="flex gap-5 p-6 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-primary/30 transition-all group/item">
                          <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover/item:bg-primary transition-all duration-300">
                            {item.icon ? <item.icon size={24} className="text-primary group-hover/item:text-white" /> : <CheckCircle2 size={24} className="text-primary group-hover/item:text-white" />}
                          </div>
                          <div>
                            <h4 className="font-bold text-lg mb-1 group-hover/item:text-primary transition-colors">{item.title}</h4>
                            <p className="text-slate-400 text-sm leading-relaxed">{item.desc}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* 2. Core Features Summary - 4x2 Grid */}
      <section className="py-24 bg-slate-50 border-y border-slate-100">
        <div className="container mx-auto px-4 md:px-6 text-center mb-16">
          <h2 className="text-[25px] md:text-4xl font-bold mb-4 text-slate-900 font-black">핵심 기능 요약</h2>
          <p className="text-[#666] text-lg max-w-2xl mx-auto font-normal">
            전체 서비스의 8가지 주요 강점을 한눈에 확인하세요.
          </p>
        </div>

        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
            {[
              { title: "빠른 원격 연결", desc: "3초 이내 즉시 연결되는 초고속 원격 지원 기술", icon: Zap },
              { title: "강력한 보안", desc: "256bit AES 암호화 및 다중 보안 인증", icon: ShieldCheck },
              { title: "글로벌 지원", desc: "전세계 어디서나 안정적인 원격지원", icon: Globe },
              { title: "24/7 상담", desc: "연중무휴 동시 다중 고객 상담 가능", icon: Clock },
              { title: "다중 상담원", desc: "한 명의 상담원이 최대 10명 동시 상담", icon: Users },
              { title: "상담 기록", desc: "모든 상담 내역 자동 저장 및 분석", icon: FileText },
              { title: "화상 상담", desc: "HD 화질의 실시간 비디오 상담", icon: Video },
              { title: "모바일 지원", desc: "Android, iOS 모바일 기기 원격 제어", icon: Smartphone }
            ].map((item, i) => (
              <div key={i} className="p-10 rounded-3xl bg-white border border-slate-200 hover:shadow-2xl hover:border-primary/20 transition-all duration-300 group flex flex-col items-start shadow-sm">
                <div className="w-14 h-14 rounded-2xl bg-primary/5 text-primary flex items-center justify-center mb-8 group-hover:bg-primary group-hover:text-white transition-all duration-300">
                  <item.icon size={28} />
                </div>
                <h3 className="text-xl font-bold mb-4 text-slate-900 group-hover:text-primary transition-colors leading-tight">{item.title}</h3>
                <p className="text-[#666] text-lg leading-relaxed font-normal">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* 3. Advanced Features Section - 4x2 Grid */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <h2 className="text-[25px] md:text-4xl font-bold mb-4 text-slate-900 font-black">고급 기능</h2>
            <p className="text-[#666] text-lg max-w-2xl mx-auto font-normal">
              더욱 전문적인 원격지원을 위한 고급 기능들
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
            {[
              { title: "실시간 화면 공유", desc: "고객의 화면을 실시간으로 공유하고 제어할 수 있습니다.", icon: Share2 },
              { title: "파일 전송", desc: "상담 중 필요한 파일을 즉시 전송하고 수신할 수 있습니다.", icon: FileUp },
              { title: "원격 프린팅", desc: "고객 PC에서 직접 문서를 인쇄할 수 있습니다.", icon: Printer },
              { title: "채팅 및 음성", desc: "텍스트 채팅과 음성 통화로 원활한 소통이 가능합니다.", icon: MessageSquare },
              { title: "녹화 기능", desc: "상담 내용을 녹화하여 교육 및 품질 관리에 활용합니다.", icon: Video },
              { title: "화이트보드", desc: "화면에 그림을 그리며 직관적으로 설명할 수 있습니다.", icon: PenTool },
              { title: "시스템 정보", desc: "고객 PC의 상세한 시스템 정보를 확인할 수 있습니다.", icon: Info },
              { title: "원격 재부팅", desc: "고객 PC를 원격으로 재부팅하고 자동으로 재연결됩니다.", icon: RefreshCw }
            ].map((item, i) => (
              <div key={i} className="p-10 rounded-3xl bg-white border border-slate-200 hover:shadow-2xl hover:border-primary/20 transition-all duration-300 group flex flex-col items-start shadow-sm">
                <div className="w-14 h-14 rounded-2xl bg-primary/5 text-primary flex items-center justify-center mb-8 group-hover:bg-primary group-hover:text-white transition-all duration-300">
                  <item.icon size={28} />
                </div>
                <h3 className="text-xl font-bold mb-4 text-slate-900 group-hover:text-primary transition-colors leading-tight">{item.title}</h3>
                <p className="text-[#666] text-lg leading-relaxed font-normal">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* CTA Section */}
      <section className="py-24 bg-white text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-10 text-glow-sm">이 모든 기능을 무료로 체험해 보세요</h2>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Button size="lg" onClick={openModal} className="h-16 px-12 text-xl font-bold shadow-2xl shadow-primary/20 bg-primary hover:bg-primary/90">
              지금 바로 시작하기 <ArrowRight className="ml-2" />
            </Button>
            <Button size="lg" variant="outline" onClick={openModal} className="h-16 px-12 text-xl font-bold border-2 border-slate-200 hover:border-primary hover:text-primary transition-all">
              도입 상담 신청
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
