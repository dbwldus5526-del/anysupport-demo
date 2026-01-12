import { Button } from "@/components/ui/button";
import { Download as DownloadIcon, Monitor, Apple, Smartphone, Globe, MessageSquare, User, Play, Settings } from "lucide-react";
import downloadHeroImg from "@assets/generated_images/modern_abstract_blue_gradient_background_for_download_page_hero_section.png";
import googlePlayLogo from "@assets/image-removebg-preview_(20)_1768199099339.png";
import appStoreLogo from "@assets/image-removebg-preview_(21)_1768199186426.png";
import windowsLogo from "@assets/image-removebg-preview_(22)_1768199241860.png";
import googlePlayFullLogo from "@assets/image_1768199304085.png";
import appStoreFullLogo from "@assets/image-removebg-preview_(23)_1768199353224.png";

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
          <h2 className="text-[25px] md:text-4xl mb-8 font-medium">원하는 방식을 선택하세요</h2>
          <p className="text-[14px] md:text-xl max-w-3xl mx-auto leading-relaxed text-[#ffffff] font-normal">
            상담사와 고객 각각에게 최적화된 프로그램과 앱을 제공합니다.<br />
            Windows, macOS, iOS, Android, 그리고 설치 없는 웹버전까지 모두 지원합니다.
          </p>
        </div>
      </section>
      {/* Two Column Download Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8">
              
              {/* 지원하는 측 (상담사) */}
              <div className="rounded-2xl from-[#e8f4fc] to-[#d0e8f7] p-8 border border-[#b8daf0] bg-[#ffffff]">
                <div className="flex items-center gap-3 mb-2">
                  <h3 className="font-bold text-[32px] text-[#333]">지원하는 측 (상담사)</h3>
                  <MessageSquare className="text-[#0066b3]" size={24} />
                </div>
                <p className="text-[#666] text-[16px] mb-6">
                  전용 에이전트로 지원 시 필요한 설치 파일로,<br />
                  Windows에서 사용할 수 있습니다.
                </p>
                
                <div className="border-t border-[#b8daf0] pt-6"></div>

                <div className="space-y-3 bg-white/50 rounded-xl p-4">
                  <Button variant="ghost" className="w-full justify-start text-[#0066b3] hover:bg-[#0066b3]/10 text-[16px] gap-2">
                    <DownloadIcon size={18} />
                    애니서포트 Windows용 상담원 프로그램(V10.0)
                  </Button>
                  <Button variant="ghost" className="w-full justify-start text-[#0066b3] hover:bg-[#0066b3]/10 text-[16px] gap-2">
                    <DownloadIcon size={18} />
                    애니서포트 Mac용 상담원 프로그램(V10.0)
                  </Button>
                  <Button variant="ghost" className="w-full justify-start text-[#0066b3] hover:bg-[#0066b3]/10 text-[16px] gap-2">
                    <DownloadIcon size={18} />
                    애니서포트 윈도우즈용 상담원 프로그램(V6.0)
                  </Button>
                </div>
              </div>

              {/* 지원받는 측 (고객) */}
              <div className="rounded-2xl bg-[#f8fafc] p-8 border border-slate-200">
                <div className="flex items-center gap-3 mb-2">
                  <h3 className="font-bold text-[32px] text-[333]">지원받는 측 (고객)</h3>
                  <User className="text-[#0066b3]" size={24} />
                </div>
                <p className="text-[#666] text-[16px] mb-6">
                  지원 환경별로 고객이 설치해야 하는<br />
                  필요 파일을 확인할 수 있습니다.
                </p>

                <div className="border-t border-slate-200 pt-6"></div>

                <div className="bg-white rounded-xl p-4">
                {/* 웹브라우저 */}
                <div className="mb-6">
                  <h4 className="font-bold mb-1 text-[18px] text-[#2563eb]">웹브라우저</h4>
                  <p className="text-[#666] text-[16px] mb-3">모바일 · 영상 지원 앱</p>
                  <div className="grid grid-cols-2 gap-3">
                    <a href="https://988.co.kr/" target="_blank" rel="noopener noreferrer">
                      <Button variant="outline" className="w-full justify-between border-slate-200 text-[#333] hover:border-primary text-[16px]">
                        <div className="flex items-center gap-2">
                          <img src={googlePlayLogo} alt="Google Play" className="h-5" />
                          Google Play
                        </div>
                        <DownloadIcon size={16} className="text-[#0066b3]" />
                      </Button>
                    </a>
                    <a href="https://988.co.kr/" target="_blank" rel="noopener noreferrer">
                      <Button variant="outline" className="w-full justify-between border-slate-200 text-[#333] hover:border-primary text-[16px]">
                        <div className="flex items-center gap-2">
                          <img src={appStoreLogo} alt="App Store" className="h-5" />
                          App Store
                        </div>
                        <DownloadIcon size={16} className="text-[#0066b3]" />
                      </Button>
                    </a>
                  </div>
                </div>

                {/* 전용 에이전트 */}
                <div className="mb-6">
                  <h4 className="font-bold text-[#0066b3] mb-1 text-[18px]">전용 에이전트</h4>
                  <p className="text-[#666] text-[16px] mb-3">PC지원 고객 설치 플러그인</p>
                  <Button variant="outline" className="w-full justify-between border-slate-200 text-[#333] hover:border-primary text-[16px]">
                    <div className="flex items-center gap-2">
                      <img src={windowsLogo} alt="Windows" className="h-5" />
                      Windows
                    </div>
                    <DownloadIcon size={16} className="text-[#0066b3]" />
                  </Button>
                </div>

                {/* 모바일 지원 앱 & 영상 지원 앱 */}
                <div className="grid grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-bold text-[#333] mb-3 text-[16px]">모바일 지원 앱</h4>
                    <div className="space-y-2">
                      <Button variant="outline" className="w-full justify-between border-slate-200 text-[#333] hover:border-primary text-[14px]">
                        <div className="flex items-center gap-2">
                          <img src={googlePlayLogo} alt="Google Play" className="h-4" />
                          Google Play
                        </div>
                        <DownloadIcon size={14} className="text-[#0066b3]" />
                      </Button>
                      <Button variant="outline" className="w-full justify-between border-slate-200 text-[#333] hover:border-primary text-[14px]">
                        <div className="flex items-center gap-2">
                          <img src={appStoreLogo} alt="App Store" className="h-4" />
                          App Store
                        </div>
                        <DownloadIcon size={14} className="text-[#0066b3]" />
                      </Button>
                    </div>
                  </div>
                  <div>
                    <h4 className="font-bold text-[#333] mb-3 text-[16px]">영상 지원 앱</h4>
                    <div className="space-y-2">
                      <Button variant="outline" className="w-full justify-between border-slate-200 text-[#333] hover:border-primary text-[14px]">
                        <div className="flex items-center gap-2">
                          <img src={googlePlayLogo} alt="Google Play" className="h-4" />
                          Google Play
                        </div>
                        <DownloadIcon size={14} className="text-[#0066b3]" />
                      </Button>
                      <Button variant="outline" className="w-full justify-between border-slate-200 text-[#333] hover:border-primary text-[14px]">
                        <div className="flex items-center gap-2">
                          <img src={appStoreLogo} alt="App Store" className="h-4" />
                          App Store
                        </div>
                        <DownloadIcon size={14} className="text-[#0066b3]" />
                      </Button>
                    </div>
                  </div>
                </div>
                </div>
              </div>
            </div>

            {/* Web Version Banner */}
            <div className="mt-16 relative rounded-[2rem] bg-gradient-to-r from-[#001d4d] to-[#004481] p-12 md:p-16 text-center text-white overflow-hidden shadow-2xl shadow-blue-900/20 pt-[57px] pb-[57px]">
              <div className="relative z-10">
                <h3 className="md:text-3xl mb-6 text-[36px] font-bold">설치 없이 브라우저에서도 바로 원격지원을 받을 수 있습니다!</h3>
                <p className="text-white/80 mb-10 max-w-2xl mx-auto md:text-base font-normal text-[18px]">
                  다운로드가 어려운 환경에서도 웹 브라우저만 있으면<br />
                  상담사가 안내한 인증번호를 입력하여 즉시 원격지원을 받으실 수 있습니다.
                </p>
                <a href="https://988.co.kr/" target="_blank" rel="noopener noreferrer">
                  <Button size="lg" className="bg-white text-[#001d4d] hover:bg-slate-100 px-8 h-14 rounded-xl gap-2 shadow-lg text-[18px] font-semibold">
                    <Globe size={20} /> 웹에서 바로 원격지원 받기
                  </Button>
                </a>
              </div>
            </div>

            {/* Mobile Experience Section */}
            <div className="mt-24 text-center">
              <h4 className="font-bold mb-8 text-[36px] text-[#333]">모바일에서도 애니서포트를 경험하세요</h4>
              <div className="flex justify-center gap-4">
                <button className="h-14 px-6 bg-white rounded-xl border border-slate-200 flex items-center gap-3 transition-transform hover:scale-105 pl-[20px] pr-[20px]">
                  <img src={googlePlayFullLogo} alt="Google Play" className="h-8" />
                </button>
                <button className="h-14 px-6 bg-white rounded-xl border border-slate-200 flex items-center gap-3 transition-transform hover:scale-105 pl-[20px] pr-[20px]">
                  <img src={appStoreFullLogo} alt="App Store" className="h-8" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
