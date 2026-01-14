import { Button } from "@/components/ui/button";
import { useModal } from "@/context/ModalContext";
import {
  ShieldCheck,
  Lock,
  Server,
  Cloud,
  Monitor,
  Smartphone,
  User,
  CheckCircle2,
  Shield,
  Key,
  Trash2,
  Globe,
  ArrowRight,
} from "lucide-react";
import samsungKnoxLogo from "@assets/image_1768207806783.png";
import koinoLogo from "@assets/코이노로고_1768207913009.png";
import seapLogo from "@assets/image-removebg-preview_(25)_1768208039940.png";
import { motion, useInView } from "framer-motion";
import { useEffect, useState, useRef } from "react";

function CountUpNumber({ end, suffix = "", duration = 2000 }: { end: number; suffix?: string; duration?: number }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (!isInView) return;
    
    let startTime: number;
    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / duration, 1);
      const easeOut = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(easeOut * end));
      
      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };
    requestAnimationFrame(animate);
  }, [isInView, end, duration]);

  return (
    <span ref={ref} className="md:text-6xl font-bold text-[48px] text-[#333]">
      {count}{suffix}
    </span>
  );
}

export default function SecurityPatents() {
  const { openModal, openContactModal } = useModal();

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative pt-40 pb-20 overflow-hidden bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white">
        <div className="absolute inset-0 z-0 opacity-20">
          <div className="absolute top-20 left-20 w-64 h-64 bg-blue-500 rounded-full blur-3xl" />
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-purple-500 rounded-full blur-3xl" />
        </div>

        <div className="container mx-auto px-4 md:px-6 relative z-10 text-center mt-[38px] mb-[38px]">
          <div className="max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 rounded-full mb-6 text-sm font-medium">
              <ShieldCheck size={18} />
              <span>특허 기술 기반 보안</span>
            </div>
            <h1 className="text-3xl md:text-5xl font-black mb-6 leading-tight">애니서포트의 강력한 보안 특허기술</h1>
            <p className="text-lg md:text-xl text-slate-300 mb-8 max-w-2xl mx-auto leading-relaxed">
              애니서포트의 독자적인 보안 특허기술로<br />
              안전하고 신뢰할 수 있는 원격지원을 제공합니다.
            </p>
          </div>
        </div>
      </section>
      {/* Stats Section with Count Up Animation */}
      <section className="py-16 bg-slate-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <span className="text-4xl md:text-5xl text-[#464659] font-bold">AES-256 bit</span>
              <div className="text-lg font-bold text-[#333] mt-3">암호화 표준</div>
              <p className="text-[#666] text-sm mt-1">국제 암호화 알고리즘</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <span className="text-4xl md:text-5xl font-bold text-[#333]">SEAP</span>
              <div className="text-lg font-bold text-[#333] mt-3">삼성 파트너</div>
              <p className="text-[#666] text-sm mt-1">삼성전자 공식 파트너십</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <CountUpNumber end={96} suffix=".5%" />
              <div className="text-lg font-bold text-[#333] mt-3">고객만족도</div>
              <p className="text-[#666] text-sm mt-1">도입고객 1년이상 유지비율</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <span className="text-4xl md:text-5xl text-[#464659] font-bold">24/365</span>
              <div className="text-lg font-bold text-[#333] mt-3">운영 체계</div>
              <p className="text-[#666] text-sm mt-1">24시간 365일<br />전문 인력 운영</p>
            </motion.div>
          </div>
        </div>
      </section>
      {/* Section 1: 공통 보안 프로세스 */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-4xl font-bold mb-4 text-[#333]">
              공통 보안 프로세스
            </h2>
            <p className="text-[#666] text-lg max-w-2xl mx-auto">
              End-to-End 암호화와 안전한 데이터 센터로 보호되는 원격지원
            </p>
          </div>

          <div className="max-w-5xl mx-auto">
            {/* 원격 연결 프로세스 다이어그램 */}
            <div className="bg-slate-50 rounded-2xl p-8 border border-slate-200 mb-8">
              <div className="grid md:grid-cols-2 gap-8 items-start">
                {/* 왼쪽: 원격접속 */}
                <div className="space-y-6">
                  <div className="flex items-center justify-center gap-4 mb-4">
                    <div className="text-center px-4 py-2 bg-blue-100 text-blue-700 font-bold rounded-lg">
                      원격접속
                    </div>
                    <div className="text-center px-4 py-2 bg-blue-100 text-blue-700 font-bold rounded-lg">
                      원격연결
                    </div>
                  </div>

                  {/* 원격서버 */}
                  <div className="relative bg-yellow-50 border-2 border-yellow-300 rounded-xl p-6 text-center">
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 bg-yellow-400 text-yellow-900 text-sm font-bold rounded">
                      원격서버
                    </div>
                    <div className="flex justify-center mb-4 mt-2">
                      <Server size={48} className="text-yellow-600" />
                    </div>
                    <div className="flex justify-between items-center mt-4">
                      <div className="flex flex-col items-center">
                        <div className="w-16 h-16 bg-white rounded-lg border-2 border-blue-200 flex items-center justify-center mb-2">
                          <Monitor size={28} className="text-blue-600" />
                        </div>
                        <span className="text-sm font-bold text-[#333]">고객페이지 접속</span>
                      </div>
                      <div className="flex-1 mx-4 space-y-2">
                        <div className="flex items-center gap-2 text-[#666] text-[16px]">
                          <CheckCircle2 size={14} className="text-green-500" />
                          데이터 암호화 전송
                        </div>
                        <div className="text-center font-bold text-blue-600 py-1 rounded text-[16px] bg-[#dbeafe] flex items-center justify-center gap-2">
                          <span>←</span> 원격지원 <span>→</span>
                        </div>
                        <div className="flex items-center gap-2 text-[#666] text-[16px]">
                          <CheckCircle2 size={14} className="text-green-500" />
                          로그인 데이터 암호화
                        </div>
                      </div>
                      <div className="flex flex-col items-center">
                        <div className="w-16 h-16 bg-white rounded-lg border-2 border-blue-200 flex items-center justify-center mb-2">
                          <User size={28} className="text-blue-600" />
                        </div>
                        <span className="text-sm font-bold text-[#333]">상담원 로그인</span>
                      </div>
                    </div>
                  </div>

                  {/* 보안 포인트 */}
                  <div className="flex flex-wrap gap-2 text-sm">
                    <div className="flex items-center gap-1 px-3 py-1.5 bg-white border border-slate-200 rounded-full">
                      <CheckCircle2 size={14} className="text-green-500" />
                      웹-서버 통신 간 데이터 암호화
                    </div>
                    <div className="flex items-center gap-1 px-3 py-1.5 bg-white border border-slate-200 rounded-full">
                      <CheckCircle2 size={14} className="text-green-500" />
                      접속IP를 통한 접근 통제
                    </div>
                  </div>

                  {/* 암호화 표준 */}
                  <div className="bg-red-50 border border-red-200 rounded-xl p-4">
                    <p className="text-red-700 font-bold mb-1 text-[16px]">
                      국제 암호화 표준 AES 256bit 알고리즘
                    </p>
                    <p className="text-red-600 text-sm">
                      SSL(Secure Socket Layer) 적용
                    </p>
                    <p className="text-[#666] text-sm mt-2">
                      이 모든 데이터의 End-to-End 보호
                    </p>
                  </div>
                </div>

                {/* 오른쪽: 코이노 IDC */}
                <div className="bg-white rounded-xl border border-slate-200 p-6">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-12 h-12 bg-slate-100 rounded-lg flex items-center justify-center">
                      <Server size={24} className="text-slate-600" />
                    </div>
                    <div>
                      <div className="font-bold text-lg text-[#333]">코이노 IDC</div>
                      <div className="text-[#666] text-[16px]">전문 데이터센터 운영</div>
                    </div>
                  </div>
                  <div className="space-y-3">
                    <div className="flex items-start gap-3">
                      <CheckCircle2 size={18} className="text-green-500 mt-0.5" />
                      <span className="text-[#666]">24시간 365일 체계로 전문 인력 운영/관리</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle2 size={18} className="text-green-500 mt-0.5" />
                      <span className="text-[#666]">데이터 센터 내 방화벽 구축</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle2 size={18} className="text-green-500 mt-0.5" />
                      <span className="text-[#666]">서버 다중화를 통해 장애 완벽 대비</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Section 2: 삼성Knox 보안 */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-4xl font-bold mb-4 text-[#333]">
              삼성Knox를 통한 단말기 보안성 확보
            </h2>
            <p className="text-[#666] text-lg max-w-2xl mx-auto">
              삼성전자 SEAP 파트너로서 Knox 기반 보안 강화
            </p>
          </div>

          <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8">
              {/* 삼성 Galaxy시리즈 특화 */}
              <div className="bg-white rounded-2xl p-8 border border-slate-200">
                <div className="text-center mb-6">
                  <span className="inline-block px-4 py-1.5 bg-blue-100 text-blue-700 font-bold rounded-full mb-4 text-[14px] sm:text-[16px] lg:text-[18px]">
                    삼성 Galaxy시리즈 특화
                  </span>
                  <div className="flex justify-center items-center mb-4">
                    <img src={samsungKnoxLogo} alt="Samsung Knox" className="h-16 w-auto object-contain" />
                  </div>
                  <p className="text-[#666] text-[16px]">
                    Knox SDK를 사용한 플랫폼 기반으로<br />
                    삼성 디바이스에 최적화된 보안성과<br />
                    Knox의 유용한 기능을 함께 제공
                  </p>
                </div>

                <div className="bg-slate-50 rounded-xl p-4 mt-6">
                  <div className="text-center font-bold text-[#333] mb-3">KNOX Standard SDK</div>
                  <div className="grid grid-cols-3 gap-2">
                    {[
                      "Remote Control",
                      "Location Mgmt",
                      "Voice/Data Mgmt",
                      "Enhanced Security",
                      "HW/SW Mgmt",
                      "App Mgmt",
                      "Kiosk Mode",
                    ].map((feature, i) => (
                      <div
                        key={i}
                        className="text-center py-2 px-1 bg-blue-100 text-blue-700 text-xs font-medium rounded"
                      >
                        {feature}
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* 삼성전자 SEAP 파트너 */}
              <div className="bg-white rounded-2xl p-8 border border-slate-200">
                <div className="text-center mb-6">
                  <span className="inline-block px-4 py-1.5 font-bold rounded-full mb-4 bg-[#dbeafe] text-[#1447e6] text-[14px] sm:text-[16px] lg:text-[18px]">
                    삼성전자 SEAP 파트너
                  </span>
                  <div className="flex justify-center items-center gap-6 mb-6">
                    <div className="w-32 h-28 bg-slate-100 rounded-xl flex items-center justify-center p-3">
                      <img src={koinoLogo} alt="KOINO" className="h-20 w-auto object-contain" />
                    </div>
                    <div className="w-32 h-28 bg-slate-100 rounded-xl flex items-center justify-center p-3">
                      <img src={seapLogo} alt="Samsung Enterprise Alliance Program" className="h-20 w-auto object-contain" />
                    </div>
                  </div>
                  <p className="text-[#666] text-[16px]">
                    삼성전자가 운영하는 글로벌 모바일<br />
                    솔루션 파트너십 프로그램 파트너
                  </p>
                </div>

                <div className="space-y-3 mt-6">
                  <div className="flex items-center gap-3 p-3 bg-slate-50 rounded-lg">
                    <CheckCircle2 size={18} className="text-green-500" />
                    <span className="text-[#666] text-[14px] sm:text-[16px] lg:text-[18px]">글로벌 수준의 모바일 보안 적용</span>
                  </div>
                  <div className="flex items-center gap-3 p-3 bg-slate-50 rounded-lg">
                    <CheckCircle2 size={18} className="text-green-500" />
                    <span className="text-[#666] text-[14px] sm:text-[16px] lg:text-[18px]">삼성 디바이스 전용 최적화</span>
                  </div>
                  <div className="flex items-center gap-3 p-3 bg-slate-50 rounded-lg">
                    <CheckCircle2 size={18} className="text-green-500" />
                    <span className="text-[#666] text-[14px] sm:text-[16px] lg:text-[18px]">엔터프라이즈 보안 인증</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Section 3: 첫째 - 화면 캡처 전송 방식 */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-100 text-blue-700 font-bold rounded-full mb-6">
                  <span className="w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm">1</span>
                  첫째
                </div>
                <h3 className="text-2xl md:text-3xl font-bold mb-6 text-[#333]">
                  화면 캡처 전송 방식으로<br />해킹으로부터 안전
                </h3>
                <p className="text-[#666] text-lg leading-relaxed mb-6">
                  애니서포트는 별도의 제어데이터 전송 없이 화면을 캡처하여 실시간으로 압축 전송하는 방식을 적용하기 때문에 해킹에서 안전합니다.
                </p>
                <p className="text-[#666] text-lg leading-relaxed mb-6">
                  또한, <strong className="text-[#333]">256bit 암호화 알고리즘 적용 및 SSL통신</strong>을 적용한 End-to-End 보안 방식을 사용하여 자료의 안전한 전송 및 사용자의 개인정보를 보호합니다.
                </p>
                <p className="text-[#666] text-lg leading-relaxed">
                  고객이 사용하는 <strong className="text-[#333]">인증번호는 일회용</strong>이고 원격지원이 종료된 후 설치된 원격지원 모듈은 <strong className="text-[#333]">자동 삭제</strong>됩니다.
                </p>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 }}
                  className="bg-slate-50 rounded-xl p-6 text-center border border-slate-100"
                >
                  <div className="w-14 h-14 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Monitor size={28} className="text-blue-600" />
                  </div>
                  <div className="font-bold text-[#333] mb-1">화면 캡처</div>
                  <p className="text-[#666] text-[16px]">실시간 압축 전송</p>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  className="bg-slate-50 rounded-xl p-6 text-center border border-slate-100"
                >
                  <div className="w-14 h-14 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Lock size={28} className="text-green-600" />
                  </div>
                  <div className="font-bold text-[#333] mb-1">256bit 암호화</div>
                  <p className="text-[#666] text-[16px]">SSL 통신 적용</p>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  className="bg-slate-50 rounded-xl p-6 text-center border border-slate-100"
                >
                  <div className="w-14 h-14 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Key size={28} className="text-purple-600" />
                  </div>
                  <div className="font-bold text-[#333] mb-1">일회용 인증</div>
                  <p className="text-[#666] text-[16px]">세션별 고유 코드</p>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                  className="bg-slate-50 rounded-xl p-6 text-center border border-slate-100"
                >
                  <div className="w-14 h-14 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Trash2 size={28} className="text-red-600" />
                  </div>
                  <div className="font-bold text-[#333] mb-1">자동 삭제</div>
                  <p className="text-[#666] text-[16px]">종료 후 모듈 제거</p>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Section 4: 둘째 - AWS 클라우드 */}
      <section className="py-20 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="order-2 md:order-1">
                <div className="grid grid-cols-2 gap-4">
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.1 }}
                    className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center border border-white/20"
                  >
                    <div className="w-14 h-14 bg-orange-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Cloud size={28} className="text-orange-400" />
                    </div>
                    <div className="font-bold mb-1">AWS 클라우드</div>
                    <p className="text-slate-300 text-[16px]">글로벌 인프라</p>
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.2 }}
                    className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center border border-white/20"
                  >
                    <div className="w-14 h-14 bg-red-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Shield size={28} className="text-red-400" />
                    </div>
                    <div className="font-bold mb-1">통합 방화벽</div>
                    <p className="text-slate-300 text-[16px]">다중 보안 계층</p>
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.3 }}
                    className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center border border-white/20"
                  >
                    <div className="w-14 h-14 bg-blue-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Globe size={28} className="text-blue-400" />
                    </div>
                    <div className="font-bold mb-1">웹 방화벽</div>
                    <p className="text-slate-300 text-[16px]">WAF 적용</p>
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.4 }}
                    className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center border border-white/20"
                  >
                    <div className="w-14 h-14 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                      <ShieldCheck size={28} className="text-green-400" />
                    </div>
                    <div className="font-bold mb-1">백신 보호</div>
                    <p className="text-slate-300 text-[16px]">실시간 모니터링</p>
                  </motion.div>
                </div>
              </div>
              <div className="order-1 md:order-2">
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 rounded-full mb-6">
                  <span className="w-6 h-6 bg-white text-blue-900 rounded-full flex items-center justify-center text-sm font-bold">2</span>
                  둘째
                </div>
                <h3 className="text-2xl md:text-3xl font-bold mb-6">
                  글로벌 클라우드 인프라로<br />해킹 위험 차단
                </h3>
                <p className="text-slate-300 text-lg leading-relaxed mb-6">
                  애니서포트 서버는 공신력이 있는 글로벌 클라우드 업체인 <strong className="text-white">아마존(AWS)</strong>을 사용하고 있습니다.
                </p>
                <p className="text-slate-300 text-lg leading-relaxed">
                  <strong className="text-white">통합방화벽, 웹방화벽 및 백신</strong>으로 보호되기 때문에 해킹의 위험을 걱정하지 않으셔도 됩니다.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* CTA Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-6 text-[#333]">
              보안이 검증된 원격지원 솔루션
            </h2>
            <p className="text-[#666] text-lg mb-8">
              애니서포트의 특허기술과 글로벌 인프라로<br />
              안전한 원격지원을 경험해보세요.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-primary hover:bg-primary/90 text-white font-bold px-8 py-6 text-lg"
                onClick={openModal}
              >
                무료 체험 신청
                <ArrowRight className="ml-2" size={20} />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-primary text-primary hover:bg-primary/5 font-bold px-8 py-6 text-lg"
                onClick={openContactModal}
              >
                도입 문의하기
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
