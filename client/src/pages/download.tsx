import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Download as DownloadIcon, Monitor, Apple, Smartphone, Globe, MessageSquare, User, Play, Settings, FileText, Video, BookOpen, ClipboardList, Wrench, ChevronDown, ChevronUp } from "lucide-react";
import downloadHeroImg from "@assets/generated_images/modern_abstract_blue_gradient_background_for_download_page_hero_section.png";
import googlePlayLogo from "@assets/image-removebg-preview_(20)_1768199099339.png";
import appStoreLogo from "@assets/image-removebg-preview_(21)_1768199186426.png";
import windowsLogo from "@assets/image-removebg-preview_(22)_1768199241860.png";
import googlePlayFullLogo from "@assets/image_1768199304085.png";
import appStoreFullLogo from "@assets/image-removebg-preview_(23)_1768199353224.png";

export default function Download() {
  const [diagnosticOpen, setDiagnosticOpen] = useState(false);
  const [applicationOpen, setApplicationOpen] = useState(false);
  
  return (
    <div className="flex flex-col min-h-screen bg-slate-50/50">
      {/* Hero Header Section */}
      <section className="relative pt-40 pb-24 overflow-hidden bg-slate-900 text-white text-center">
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
              <div className="rounded-2xl overflow-hidden shadow-lg shadow-blue-100/50">
                {/* 헤더 영역 */}
                <div className="bg-gradient-to-r from-[#4A9FD4] to-[#7EC8E3] p-6 relative">
                  <h3 className="font-bold text-[24px] text-white">지원하는 측 (상담사)</h3>
                  <p className="text-white/80 text-[14px] mt-1">
                    전용 에이전트로 지원 시 필요한 설치 파일로,<br />
                    Windows와 Mac에서 사용할 수 있습니다.
                  </p>
                  <MessageSquare className="absolute right-6 top-1/2 -translate-y-1/2 text-white/40" size={40} />
                </div>
                
                {/* 콘텐츠 영역 */}
                <div className="bg-white p-6">
                  {/* 상담원 프로그램 */}
                  <div className="mb-4">
                    <h4 className="font-bold text-[#333] mb-3 uppercase tracking-wide text-[16px]">상담원 프로그램</h4>
                    <div className="divide-y divide-slate-100">
                      <a href="/attached_assets/AnySupport_Setup_10_(5)_1768199980822.exe" download="AnySupport_Setup_10.exe" className="flex items-center justify-between py-3 hover:bg-slate-50 px-2 -mx-2 rounded transition-colors group">
                        <span className="text-[15px] text-[#333]">애니서포트 Windows용 상담원 프로그램(V10.0)</span>
                        <DownloadIcon size={18} className="text-slate-400 group-hover:text-[#4A9FD4]" />
                      </a>
                      <a href="/attached_assets/AnySupport_installer_Mac_(1)_1768200133753.zip" download="AnySupport_Mac_Setup.zip" className="flex items-center justify-between py-3 hover:bg-slate-50 px-2 -mx-2 rounded transition-colors group">
                        <span className="text-[15px] text-[#333]">애니서포트 Mac용 상담원 프로그램(V10.0)</span>
                        <DownloadIcon size={18} className="text-slate-400 group-hover:text-[#4A9FD4]" />
                      </a>
                      <a href="/attached_assets/AnySupport_Setup_1768200189167.exe" download="AnySupport_Setup_V6.exe" className="flex items-center justify-between py-3 hover:bg-slate-50 px-2 -mx-2 rounded transition-colors group">
                        <span className="text-[15px] text-[#333]">애니서포트 윈도우즈용 상담원 프로그램(V6.0)</span>
                        <DownloadIcon size={18} className="text-slate-400 group-hover:text-[#4A9FD4]" />
                      </a>
                    </div>
                  </div>

                  {/* 매뉴얼 */}
                  <div className="mb-4">
                    <h4 className="font-bold text-[#333] mb-3 text-[16px] uppercase tracking-wide">매뉴얼</h4>
                    <div className="divide-y divide-slate-100">
                      <a href="/attached_assets/anysupport_agent_manual_v10_(1)_1768200734361.pdf" target="_blank" rel="noopener noreferrer" className="flex items-center justify-between py-3 hover:bg-slate-50 px-2 -mx-2 rounded transition-colors group">
                        <span className="text-[15px] text-[#333]">애니서포트 상담원 매뉴얼(Ver10.0)</span>
                        <BookOpen size={18} className="text-slate-400 group-hover:text-[#4A9FD4]" />
                      </a>
                      <a href="/attached_assets/anysupport_admin_manual_v10_(1)_1768200769433.pdf" target="_blank" rel="noopener noreferrer" className="flex items-center justify-between py-3 hover:bg-slate-50 px-2 -mx-2 rounded transition-colors group">
                        <span className="text-[15px] text-[#333]">애니서포트 관리자 매뉴얼</span>
                        <BookOpen size={18} className="text-slate-400 group-hover:text-[#4A9FD4]" />
                      </a>
                      <a href="/attached_assets/agent_manual_Ver6.0_1768200845912.pdf" target="_blank" rel="noopener noreferrer" className="flex items-center justify-between py-3 hover:bg-slate-50 px-2 -mx-2 rounded transition-colors group">
                        <span className="text-[15px] text-[#333]">애니서포트 상담원 매뉴얼(Ver6.0)</span>
                        <BookOpen size={18} className="text-slate-400 group-hover:text-[#4A9FD4]" />
                      </a>
                    </div>
                  </div>

                  {/* 기타 */}
                  <div>
                    <h4 className="font-bold text-[#333] mb-3 text-[16px] uppercase tracking-wide">기타</h4>
                    <div className="divide-y divide-slate-100">
                      <div>
                        <button 
                          className="flex items-center justify-between py-3 hover:bg-slate-50 px-2 -mx-2 rounded transition-colors w-full text-left"
                          onClick={() => setApplicationOpen(!applicationOpen)}
                        >
                          <span className="text-[15px] text-[#333]">애니서포트 사용신청서</span>
                          {applicationOpen ? <ChevronUp size={18} className="text-slate-400" /> : <ChevronDown size={18} className="text-slate-400" />}
                        </button>
                        {applicationOpen && (
                          <div className="ml-4 mb-3 space-y-2">
                            <a href="/attached_assets/애니서포트_서비스_신청서(공통)_1768200560351.hwp" download="애니서포트_서비스_신청서.hwp" className="flex items-center justify-between py-2 hover:bg-slate-50 px-2 rounded transition-colors group">
                              <span className="text-[14px] text-[#666]">애니서포트 사용신청서 (HWP)</span>
                              <DownloadIcon size={16} className="text-slate-400 group-hover:text-[#4A9FD4]" />
                            </a>
                            <a href="/attached_assets/애니서포트_서비스_신청서(공통)_1768200560350.doc" download="애니서포트_서비스_신청서.doc" className="flex items-center justify-between py-2 hover:bg-slate-50 px-2 rounded transition-colors group">
                              <span className="text-[14px] text-[#666]">애니서포트 사용신청서 (DOC)</span>
                              <DownloadIcon size={16} className="text-slate-400 group-hover:text-[#4A9FD4]" />
                            </a>
                          </div>
                        )}
                      </div>
                      <div>
                        <button 
                          className="flex items-center justify-between py-3 hover:bg-slate-50 px-2 -mx-2 rounded transition-colors w-full text-left"
                          onClick={() => setDiagnosticOpen(!diagnosticOpen)}
                        >
                          <span className="text-[15px] text-[#333]">애니서포트 시스템 진단 툴 (Windows 용)</span>
                          {diagnosticOpen ? <ChevronUp size={18} className="text-slate-400" /> : <ChevronDown size={18} className="text-slate-400" />}
                        </button>
                        {diagnosticOpen && (
                          <div className="ml-4 mb-3 p-4 bg-slate-50 rounded-lg">
                            <p className="text-[#666] text-[14px] mb-4">
                              애니서포트 사용환경을 진단하고 로그 수집을 통해 분석하여 문제를 파악할 수 있습니다.<br />
                              접속불가 등 문제 발생 시 상담원의 가이드에 따라 아래 링크에서 다운로드 받은 후 실행하여 주시기 바랍니다.
                            </p>
                            <div className="space-y-2">
                              <a href="/attached_assets/AnySupport_Checker_1768200447102.exe" download="AnySupport_Checker.exe" className="flex items-center justify-between py-2 hover:bg-white px-2 rounded transition-colors group">
                                <span className="text-[14px] text-[#666]">애니서포트 시스템 진단 툴 (EXE 버전)</span>
                                <DownloadIcon size={16} className="text-slate-400 group-hover:text-[#4A9FD4]" />
                              </a>
                              <a href="/attached_assets/AnySupport_Checker_1768200447102.zip" download="AnySupport_Checker.zip" className="flex items-center justify-between py-2 hover:bg-white px-2 rounded transition-colors group">
                                <span className="text-[14px] text-[#666]">애니서포트 시스템 진단 툴 (ZIP 버전)</span>
                                <DownloadIcon size={16} className="text-slate-400 group-hover:text-[#4A9FD4]" />
                              </a>
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* 지원받는 측 (고객) */}
              <div className="rounded-2xl overflow-hidden shadow-lg shadow-slate-100/50">
                {/* 헤더 영역 */}
                <div className="bg-gradient-to-r from-[#f8fafc] to-[#e2e8f0] p-6 relative border-b border-slate-200">
                  <h3 className="font-bold text-[24px] text-[#333]">지원받는 측 (고객)</h3>
                  <p className="text-[#666] text-[14px] mt-1">
                    지원 환경별로 고객이 설치해야 하는<br />
                    필요 파일을 확인할 수 있습니다.
                  </p>
                  <User className="absolute right-6 top-1/2 -translate-y-1/2 text-slate-300" size={40} />
                </div>

                {/* 콘텐츠 영역 */}
                <div className="bg-white p-6">
                  {/* 고객 설치파일 */}
                  <div className="mb-4">
                    <h4 className="font-bold text-[#333] mb-3 text-[16px] uppercase tracking-wide">고객 설치파일</h4>
                    <div className="divide-y divide-slate-100">
                      <a href="/attached_assets/ManualLauncher_(1)_1768200897859.exe" download="AnySupport_Windows_V10.0.exe" className="flex items-center justify-between py-3 hover:bg-slate-50 px-2 -mx-2 rounded transition-colors group">
                        <span className="text-[15px] text-[#333]">애니서포트 Windows용 고객 설치파일(V10.0)</span>
                        <DownloadIcon size={18} className="text-slate-400 group-hover:text-[#4A9FD4]" />
                      </a>
                      <a href="/attached_assets/AnySupportHost_Mac_1768200922810.zip" download="AnySupport_Mac_V10.0.zip" className="flex items-center justify-between py-3 hover:bg-slate-50 px-2 -mx-2 rounded transition-colors group">
                        <span className="text-[15px] text-[#333]">애니서포트 Mac용 고객 설치파일(V10.0)</span>
                        <DownloadIcon size={18} className="text-slate-400 group-hover:text-[#4A9FD4]" />
                      </a>
                      <a href="/attached_assets/ManualLauncher_(1)_1768201005633.exe" download="AnySupport_Windows_V6.0.exe" className="flex items-center justify-between py-3 hover:bg-slate-50 px-2 -mx-2 rounded transition-colors group">
                        <span className="text-[15px] text-[#333]">애니서포트 윈도우즈용 고객 설치파일(V6.0)</span>
                        <DownloadIcon size={18} className="text-slate-400 group-hover:text-[#4A9FD4]" />
                      </a>
                    </div>
                  </div>

                  {/* 모바일 설치파일 */}
                  <div className="mb-4">
                    <h4 className="font-bold text-[#333] mb-3 text-[16px] uppercase tracking-wide">모바일 설치파일</h4>
                    <div className="divide-y divide-slate-100">
                      <a href="/attached_assets/AnySupport_(4)_1768201031671.apk" download="AnySupport_Mobile_Android.apk" className="flex items-center justify-between py-3 hover:bg-slate-50 px-2 -mx-2 rounded transition-colors group">
                        <span className="text-[15px] text-[#333]">애니서포트 모바일 설치파일(Android)</span>
                        <DownloadIcon size={18} className="text-slate-400 group-hover:text-[#4A9FD4]" />
                      </a>
                      <a href="https://apps.apple.com/us/app/%EB%AA%A8%EB%B0%94%EC%9D%BC%EC%A7%80%EC%9B%90/id993614818?l=ko" target="_blank" rel="noopener noreferrer" className="flex items-center justify-between py-3 hover:bg-slate-50 px-2 -mx-2 rounded transition-colors group">
                        <span className="text-[15px] text-[#333]">애니서포트 모바일 설치파일(iOS)</span>
                        <DownloadIcon size={18} className="text-slate-400 group-hover:text-[#4A9FD4]" />
                      </a>
                      <a href="/attached_assets/anysupport_mobile_edition_manual_v10_1768201099221.pdf" target="_blank" rel="noopener noreferrer" className="flex items-center justify-between py-3 hover:bg-slate-50 px-2 -mx-2 rounded transition-colors group">
                        <span className="text-[15px] text-[#333]">애니서포트 모바일 매뉴얼</span>
                        <BookOpen size={18} className="text-slate-400 group-hover:text-[#4A9FD4]" />
                      </a>
                    </div>
                  </div>

                  {/* 비디오 설치파일 */}
                  <div className="mb-4">
                    <h4 className="font-bold text-[#333] mb-3 text-[16px] uppercase tracking-wide">비디오 설치파일</h4>
                    <div className="divide-y divide-slate-100">
                      <a href="/attached_assets/AnySupportVideo_(1)_1768201137522.apk" download="AnySupport_Video_Android.apk" className="flex items-center justify-between py-3 hover:bg-slate-50 px-2 -mx-2 rounded transition-colors group">
                        <span className="text-[15px] text-[#333]">애니서포트 비디오 설치파일(Android)</span>
                        <DownloadIcon size={18} className="text-slate-400 group-hover:text-[#4A9FD4]" />
                      </a>
                      <span className="flex items-center justify-between py-3 px-2 -mx-2">
                        <span className="text-[15px] text-[#999]">애니서포트 비디오 설치파일(iOS)</span>
                        <DownloadIcon size={18} className="text-slate-300" />
                      </span>
                      <a href="/attached_assets/anysupport_video_edition_manual_v10_1768201236064.pdf" target="_blank" rel="noopener noreferrer" className="flex items-center justify-between py-3 hover:bg-slate-50 px-2 -mx-2 rounded transition-colors group">
                        <span className="text-[15px] text-[#333]">애니서포트 비디오 매뉴얼</span>
                        <BookOpen size={18} className="text-slate-400 group-hover:text-[#4A9FD4]" />
                      </a>
                    </div>
                  </div>

                  {/* 고객 매뉴얼 */}
                  <div>
                    <h4 className="font-bold text-[#333] mb-3 text-[16px] uppercase tracking-wide">매뉴얼</h4>
                    <div className="divide-y divide-slate-100">
                      <a href="/attached_assets/anysupport_customer_manual_v10_1768201272472.pdf" target="_blank" rel="noopener noreferrer" className="flex items-center justify-between py-3 hover:bg-slate-50 px-2 -mx-2 rounded transition-colors group">
                        <span className="text-[15px] text-[#333]">애니서포트 고객 매뉴얼</span>
                        <BookOpen size={18} className="text-slate-400 group-hover:text-[#4A9FD4]" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Web Version Banner */}
            <div className="mt-16 relative rounded-[2rem] bg-gradient-to-r from-[#001d4d] to-[#004481] p-12 md:p-16 text-center text-white overflow-hidden shadow-2xl shadow-blue-900/20 pt-[57px] pb-[57px]">
              <div className="relative z-10">
                <h3 className="md:text-3xl mb-6 text-[36px] font-bold">설치 없이 고객이 브라우저에서 바로 지원을 받을 수 있습니다!</h3>
                <p className="text-white/80 mb-10 max-w-2xl mx-auto md:text-base font-normal text-[14px] sm:text-[16px] lg:text-[18px]">
                  다운로드가 어려운 환경에서도 웹 브라우저만 있으면<br />
                  상담사가 안내한 인증번호를 입력하여 즉시 원격지원을 받으실 수 있습니다.
                </p>
                <a href="https://988.co.kr/" target="_blank" rel="noopener noreferrer">
                  <Button size="lg" className="bg-white text-[#001d4d] hover:bg-slate-100 px-8 h-14 rounded-xl gap-2 shadow-lg text-[14px] sm:text-[16px] lg:text-[18px] font-semibold">
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
