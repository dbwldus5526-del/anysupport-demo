import { Button } from "@/components/ui/button";
import { Download as DownloadIcon, Monitor, Apple } from "lucide-react";
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
          <h1 className="text-4xl md:text-5xl font-black mb-6 tracking-tight">다운로드 및 실행</h1>
          <h2 className="text-2xl md:text-4xl font-black mb-8">원하는 방식을 선택하세요</h2>
          <p className="text-lg md:text-xl text-slate-300 max-w-3xl mx-auto font-medium leading-relaxed">
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
              <h3 className="text-2xl md:text-3xl font-black mb-3 text-slate-900">상담사용 원격지원 프로그램</h3>
              <p className="text-slate-500 font-bold">고객을 지원하고 인증번호를 발급하는 상담사용 프로그램입니다.</p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {/* Windows Card */}
              <div className="flex flex-col p-10 rounded-[2rem] bg-white border border-slate-100 shadow-xl shadow-slate-200/50 transition-all hover:-translate-y-1 hover:shadow-2xl">
                <div className="flex items-start gap-6 mb-10">
                  <div className="w-16 h-16 rounded-2xl bg-[#0078D4] flex items-center justify-center text-white shrink-0 shadow-lg shadow-[#0078D4]/20">
                    <Monitor size={36} />
                  </div>
                  <div className="pt-1">
                    <h4 className="text-xl font-black text-slate-900 mb-2">Windows 상담사용 프로그램</h4>
                    <p className="text-slate-400 text-sm font-bold tracking-tight">Windows 7 / 8 / 10 / 11 지원</p>
                  </div>
                </div>
                <Button size="lg" className="w-full h-14 rounded-2xl bg-slate-900 hover:bg-slate-800 text-white font-black text-lg gap-2">
                  <DownloadIcon size={20} /> 다운로드
                </Button>
              </div>

              {/* macOS Card */}
              <div className="flex flex-col p-10 rounded-[2rem] bg-white border border-slate-100 shadow-xl shadow-slate-200/50 transition-all hover:-translate-y-1 hover:shadow-2xl">
                <div className="flex items-start gap-6 mb-10">
                  <div className="w-16 h-16 rounded-2xl bg-slate-900 flex items-center justify-center text-white shrink-0 shadow-lg shadow-slate-900/20">
                    <Apple size={36} />
                  </div>
                  <div className="pt-1">
                    <h4 className="text-xl font-black text-slate-900 mb-2">macOS 상담사용 프로그램</h4>
                    <p className="text-slate-400 text-sm font-bold tracking-tight">macOS 10.12 이상 지원</p>
                  </div>
                </div>
                <Button size="lg" className="w-full h-14 rounded-2xl bg-slate-900 hover:bg-slate-800 text-white font-black text-lg gap-2">
                  <DownloadIcon size={20} /> 다운로드
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
