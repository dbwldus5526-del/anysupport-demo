import { Button } from "@/components/ui/button";
import { Download as DownloadIcon, Monitor, Apple, Smartphone, Globe } from "lucide-react";
import downloadHeroImg from "@assets/generated_images/modern_abstract_blue_gradient_background_for_download_page_hero_section.png";

export default function Download() {
  return (
    <div className="flex flex-col min-h-screen bg-slate-50/50">
      {/* Hero Header Section */}
      <section className="relative pt-32 pb-24 overflow-hidden bg-slate-900 text-white text-center">
        <div className="absolute inset-0 z-0">
          <img 
            src={downloadHeroImg} 
            alt="Download Background" 
            className="w-full h-full object-cover opacity-60"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-slate-900/40 via-slate-900/60 to-slate-900" />
        </div>
        
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <h1 className="text-3xl md:text-5xl font-black mb-6 tracking-tight">다운로드 및 실행</h1>
          <h2 className="text-[25px] md:text-4xl font-black mb-8">원하는 방식을 선택하세요</h2>
          <p className="text-[14px] md:text-xl text-slate-300 max-w-3xl mx-auto font-medium leading-relaxed">
            상담사와 고객 각각에게 최적화된 프로그램과 앱을 제공합니다.<br />
            Windows, macOS, iOS, Android, 그리고 설치 없는 웹버전까지 모두 지원합니다.
          </p>
        </div>
      </section>
      {/* Counselor Program Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-6xl mx-auto">
            <div className="mb-12">
              <h3 className="text-xl md:text-3xl font-black mb-3 text-slate-900">상담사용 원격지원 프로그램</h3>
              <p className="text-slate-500 font-bold text-sm md:text-base">고객을 지원하고 인증번호를 발급하는 상담사용 프로그램입니다.</p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {/* Windows Card */}
              <div className="flex flex-col p-8 rounded-xl bg-white border border-slate-200 shadow-sm transition-all hover:shadow-md">
                <div className="flex items-center gap-5 mb-8">
                  <div className="w-14 h-14 rounded-lg bg-[#004481] flex items-center justify-center text-white shrink-0">
                    <Monitor size={28} />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-slate-900">Windows 상담사용 프로그램</h4>
                    <p className="text-slate-400 text-xs font-medium">Windows 7 / 8 / 10 / 11 지원</p>
                  </div>
                </div>
                <Button size="lg" className="w-full h-12 rounded-lg bg-[#002868] hover:bg-[#001d4d] text-white font-bold text-sm gap-2">
                  <DownloadIcon size={16} /> 다운로드
                </Button>
              </div>

              {/* macOS Card */}
              <div className="flex flex-col p-8 rounded-xl bg-white border border-slate-200 shadow-sm transition-all hover:shadow-md">
                <div className="flex items-center gap-5 mb-8">
                  <div className="w-14 h-14 rounded-lg bg-[#004481] flex items-center justify-center text-white shrink-0">
                    <Apple size={28} />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-slate-900">macOS 상담사용 프로그램</h4>
                    <p className="text-slate-400 text-xs font-medium">macOS 10.12 이상 지원</p>
                  </div>
                </div>
                <Button size="lg" className="w-full h-12 rounded-lg bg-[#002868] hover:bg-[#001d4d] text-white font-bold text-sm gap-2">
                  <DownloadIcon size={16} /> 다운로드
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Customer Launcher Section */}
      <section className="py-24 bg-white border-t border-slate-100">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-6xl mx-auto">
            <div className="mb-12">
              <h3 className="md:text-3xl mb-3 text-[#333] font-bold text-[36px]">고객용 원격지원 런처</h3>
              <p className="md:text-base text-[18px] text-[#666] font-normal">상담사가 안내한 인증번호를 입력하여 원격지원을 받습니다.</p>
            </div>

            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
              {[
                { name: "Windows", desc: "고객용 런처", icon: <Monitor size={24} />, color: "#004481", btn: "다운로드" },
                { name: "macOS", desc: "고객용 런처", icon: <Apple size={24} />, color: "#004481", btn: "다운로드" },
                { name: "Android", desc: "고객용 앱", icon: <Smartphone size={24} />, color: "#004481", btn: "Google Play" },
                { name: "iOS", desc: "고객용 앱", icon: <Smartphone size={24} />, color: "#004481", btn: "App Store" },
              ].map((item, i) => (
                <div key={i} className="flex flex-col items-center p-8 rounded-xl bg-white border border-slate-200 shadow-sm text-center">
                  <div className={`w-14 h-14 rounded-xl flex items-center justify-center text-white mb-6`} style={{ backgroundColor: item.color }}>
                    {item.icon}
                  </div>
                  <h4 className="text-lg font-bold text-slate-900 mb-1">{item.name}</h4>
                  <p className="mb-8 text-[18px] font-normal text-[#666]">{item.desc}</p>
                  <Button variant="outline" className="w-full border-slate-900 text-slate-900 hover:bg-slate-900 hover:text-white font-bold h-10 rounded-lg text-xs">
                    {item.btn}
                  </Button>
                </div>
              ))}
            </div>

            {/* Web Version Banner */}
            <div className="relative rounded-[2rem] bg-gradient-to-r from-[#001d4d] to-[#004481] p-12 md:p-16 text-center text-white overflow-hidden shadow-2xl shadow-blue-900/20">
              <div className="relative z-10">
                <h3 className="text-xl md:text-3xl font-black mb-6">설치 없이 브라우저에서도 바로 원격지원을 받을 수 있습니다!</h3>
                <p className="text-white/80 font-medium mb-10 max-w-2xl mx-auto leading-relaxed text-sm md:text-base">
                  다운로드가 어려운 환경에서도 웹 브라우저만 있으면<br />
                  상담사가 안내한 인증번호를 입력하여 즉시 원격지원을 받으실 수 있습니다.
                </p>
                <Button size="lg" className="bg-white text-[#001d4d] hover:bg-slate-100 font-black px-8 h-14 rounded-xl gap-2 shadow-lg">
                  <Globe size={20} /> 웹에서 바로 원격지원 받기
                </Button>
              </div>
            </div>

            {/* Mobile Experience Section */}
            <div className="mt-24 text-center">
              <h4 className="text-xl font-bold text-slate-900 mb-8">모바일에서도 애니서포트를 경험하세요</h4>
              <div className="flex justify-center gap-4">
                <button className="h-14 px-6 bg-black rounded-xl border border-white/10 flex items-center gap-3 transition-transform hover:scale-105">
                  <div className="text-white text-left">
                    <p className="text-[10px] uppercase font-bold text-white/60">GET IT ON</p>
                    <p className="text-lg font-black leading-none">Google Play</p>
                  </div>
                </button>
                <button className="h-14 px-6 bg-black rounded-xl border border-white/10 flex items-center gap-3 transition-transform hover:scale-105">
                  <Apple className="text-white" size={28} />
                  <div className="text-white text-left">
                    <p className="text-[10px] uppercase font-bold text-white/60">Download on the</p>
                    <p className="text-lg font-black leading-none">App Store</p>
                  </div>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
