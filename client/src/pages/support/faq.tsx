import { useState } from "react";
import { FolderOpen, FileText, Phone, Mail, ChevronDown, ChevronUp } from "lucide-react";

interface QuestionAnswer {
  question: string;
  answer: string;
}

interface FAQCategory {
  title: string;
  count: number;
  questions: QuestionAnswer[];
}

const faqCategories: FAQCategory[] = [
  {
    title: "자주하는 질문 Top5",
    count: 5,
    questions: [
      {
        question: "애니서포트 상담원 1계정 가격은 얼마 입니까?",
        answer: `애니서포트 서비스제품(SaaS)은 1년 선납 기준으로

[PC에디션]
Basic: 100만원(VAT별도)
Pro: 120만원(VAT별도)
Premium: 140만원(VAT별도)

Mobile에디션: 300만원(VAT별도)
Video에디션: 400만원(VAT별도)

입니다.
1년약정, 또는 무약정, 월단위 구매도 가능합니다.
자세한 사항은 홈페이지 "가격" 메뉴에서 확인해 주세요.
감사합니다.`,
      },
      {
        question: "애니서포트 서비스를 무료로 사용할 수 있나요?",
        answer: `네, 가능합니다.
애니서포트 홈페이지를 방문하셔서 "무료체험 신청"을 하시면 유료버전과 동일한 기능으로 15일간 사용할 수 있습니다.
https://anysupport.net

감사합니다.`,
      },
      {
        question: "한 명의 상담원이 다수 고객을 동시에 상담을 할 수 있나요?",
        answer: `한 명의 상담원이 최대 10명의 고객까지 동시에 상담이 가능 합니다.

감사합니다.`,
      },
      {
        question: "해외에 있는 고객도 원격지원을 할 수 있습니까?",
        answer: `네,
물리적으로 상관 없이 인터넷이 되는 세계 어느 곳 이든지 원격지원을 할 수 있습니다.

감사합니다.`,
      },
      {
        question: "고객이 가상 IP 환경 또는 유동 IP 환경인데 애니서포트 원격 지원이 가능한가요?",
        answer: `네, 가능합니다.
애니서포트는 고객과 상담원을 중계 서버를 통해 연결할 수 있는 기술을 적용하기 때문에
네트워크 환경에 구애 받지 않고 인터넷이 되는 환경이라면 언제, 어디서든지 원격 지원이 가능 합니다.

감사합니다.`,
      },
    ],
  },
  {
    title: "애니서포트 기능에 대해서",
    count: 3,
    questions: [
      {
        question: "상담원이 원격지원을 하는 도중에 다른 상담원과 동시에 지원할 수 있나요?",
        answer: `네, 가능합니다.
애니서포트는 다중 상담원 협업 기능을 제공합니다. 원격지원 중 다른 상담원을 초대하여 함께 고객을 지원할 수 있습니다.

감사합니다.`,
      },
      {
        question: "드라이버 모드와 GDI 모드의 차이는 무엇인가요?",
        answer: `드라이버 모드는 미러 드라이버를 사용하여 빠른 화면 전송이 가능하며, GDI 모드는 드라이버 설치 없이 화면을 캡처하여 전송합니다.
드라이버 모드가 성능이 더 좋지만, 일부 환경에서는 GDI 모드가 더 안정적일 수 있습니다.

감사합니다.`,
      },
      {
        question: "원격지원중인 고객의 PC화면을 녹화할 수 있나요?",
        answer: `네, 가능합니다.
애니서포트는 원격지원 세션 녹화 기능을 제공합니다. 상담 내역을 녹화하여 추후 교육이나 분쟁 해결에 활용할 수 있습니다.

감사합니다.`,
      },
    ],
  },
  {
    title: "서비스 도입에 대해서",
    count: 2,
    questions: [
      {
        question: "애니서포트 서비스를 사용하기 위한 시스템 요구사항은 무엇입니까?",
        answer: `[상담원 PC]
- Windows 7 이상, macOS 10.14 이상
- 인터넷 연결 필수

[고객 PC]
- Windows XP 이상, macOS 10.12 이상
- 인터넷 연결 필수

자세한 시스템 요구사항은 다운로드 페이지를 참고해 주세요.

감사합니다.`,
      },
      {
        question: "상담원 도입 기업의 고객이 원격 지원을 받기위해 별도로 준비해야 할 것이 있나요?",
        answer: `아니요, 별도의 준비가 필요 없습니다.
고객은 상담원이 안내하는 접속번호나 URL로 접속하면 자동으로 원격지원 프로그램이 실행됩니다. 별도의 회원가입이나 프로그램 설치가 필요하지 않습니다.

감사합니다.`,
      },
    ],
  },
  {
    title: "결제에 대해서",
    count: 2,
    questions: [
      {
        question: "애니서포트 사용료 결제는 어떻게 하나요?",
        answer: `애니서포트 사용료는 다음과 같은 방법으로 결제할 수 있습니다:
- 신용카드 결제
- 계좌이체
- 세금계산서 발행 후 결제

자세한 사항은 영업팀(02-839-7500)으로 문의해 주세요.

감사합니다.`,
      },
      {
        question: "카드 결제도 가능합니까?",
        answer: `네, 가능합니다.
신용카드 및 체크카드로 결제가 가능합니다. 홈페이지에서 온라인 결제를 진행하시거나, 영업팀에 문의하시면 카드 결제를 도와드립니다.

감사합니다.`,
      },
    ],
  },
  {
    title: "보안에 대해서",
    count: 2,
    questions: [
      {
        question: "원격지원 도중에 해킹의 위험은 없나요?",
        answer: `애니서포트는 강력한 보안 기능을 제공합니다:
- AES-256 암호화
- SSL/TLS 전송 보안
- 세션별 일회성 접속번호 사용
- 연결 종료 후 자동 프로그램 삭제

26년간 검증된 보안 기술로 안전하게 원격지원을 제공합니다.

감사합니다.`,
      },
      {
        question: "원격지원 애니서포트를 사용하는 도중에 바이러스에 감염이 될 수 있나요?",
        answer: `아니요, 애니서포트 사용으로 인한 바이러스 감염 위험은 없습니다.
애니서포트는 자체 개발된 안전한 프로그램으로, 한국인터넷진흥원(KISA) 보안 인증을 받았습니다. 악성코드나 바이러스가 포함되어 있지 않습니다.

감사합니다.`,
      },
    ],
  },
  {
    title: "원격접속에 대해서",
    count: 2,
    questions: [
      {
        question: "Mac OS 10.15(Catalina)에서 원격제어가 안되거나 원격화면이 검정색으로 보입니다",
        answer: `Mac OS 10.15(Catalina) 이상에서는 보안 정책으로 인해 추가 권한 설정이 필요합니다.

[설정 방법]
1. 시스템 환경설정 > 보안 및 개인 정보 보호 > 개인 정보 보호
2. 화면 기록 항목에서 애니서포트 체크
3. 손쉬운 사용 항목에서 애니서포트 체크
4. 애니서포트 재시작

감사합니다.`,
      },
      {
        question: "Mac OS 10.14(mojave)에서 원격제어가 안됩니다.",
        answer: `Mac OS 10.14(Mojave)에서는 보안 정책으로 인해 손쉬운 사용 권한 설정이 필요합니다.

[설정 방법]
1. 시스템 환경설정 > 보안 및 개인 정보 보호 > 개인 정보 보호
2. 손쉬운 사용 항목에서 애니서포트 체크
3. 애니서포트 재시작

감사합니다.`,
      },
    ],
  },
];

export default function FAQ() {
  const [openCategory, setOpenCategory] = useState<number | null>(0);
  const [openQuestion, setOpenQuestion] = useState<string | null>(null);

  const toggleCategory = (index: number) => {
    setOpenCategory(openCategory === index ? null : index);
    setOpenQuestion(null);
  };

  const toggleQuestion = (questionKey: string) => {
    setOpenQuestion(openQuestion === questionKey ? null : questionKey);
  };

  return (
    <div className="flex flex-col min-h-screen bg-slate-50/50">
      <section className="relative pt-32 pb-16 overflow-hidden bg-slate-900 text-white text-center">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-10 relative z-10">
          <h1 className="text-[40px] font-bold mb-4">자주 묻는 질문</h1>
          <p className="text-[18px] text-white/80">
            애니서포트에 대해 궁금한 점을 확인하세요
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-10">
          <div className="flex flex-col gap-6 max-w-4xl mx-auto">
            {faqCategories.map((category, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl border border-slate-200 overflow-hidden"
              >
                <button
                  onClick={() => toggleCategory(index)}
                  className="w-full text-white p-6 flex items-center justify-between bg-[#275ab0] text-[18px] font-light"
                >
                  <div className="flex items-center gap-3">
                    <FolderOpen size={24} className="text-white/80" />
                    <span className="text-[20px] font-bold">
                      {category.title} ({category.count})
                    </span>
                  </div>
                  {openCategory === index ? (
                    <ChevronUp size={24} />
                  ) : (
                    <ChevronDown size={24} />
                  )}
                </button>
                {openCategory === index && (
                  <div className="p-6 space-y-2">
                    {category.questions.map((qa, qIndex) => {
                      const questionKey = `${index}-${qIndex}`;
                      const isOpen = openQuestion === questionKey;
                      return (
                        <div key={qIndex} className="border-b border-slate-100 last:border-b-0">
                          <button
                            onClick={() => toggleQuestion(questionKey)}
                            className="w-full flex items-start gap-3 text-[#0066b3] hover:text-primary py-3 text-left"
                          >
                            <FileText size={18} className="shrink-0 mt-0.5" />
                            <span className="text-[16px] flex-1">{qa.question}</span>
                            {isOpen ? (
                              <ChevronUp size={18} className="shrink-0 mt-0.5" />
                            ) : (
                              <ChevronDown size={18} className="shrink-0 mt-0.5" />
                            )}
                          </button>
                          {isOpen && (
                            <div className="ml-7 pb-4 text-[15px] text-[#333] whitespace-pre-line bg-slate-50 p-4 rounded-lg">
                              {qa.answer}
                            </div>
                          )}
                        </div>
                      );
                    })}
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="mt-12 bg-gradient-to-r from-[#001d4d] to-[#004481] rounded-2xl p-10 text-white text-center">
            <h3 className="text-[28px] font-bold mb-4">
              더 자세한 문의가 필요하신가요?
            </h3>
            <p className="text-[18px] text-white/80 mb-8">
              아래 연락처로 문의해 주시면 친절하게 안내해 드리겠습니다.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <div className="flex items-center gap-3 bg-white/10 px-6 py-4 rounded-xl">
                <Phone size={24} />
                <div className="text-left">
                  <div className="text-[14px] text-white/70">전화 문의</div>
                  <div className="text-[20px] font-bold">02-839-7500</div>
                </div>
              </div>
              <div className="flex items-center gap-3 bg-white/10 px-6 py-4 rounded-xl">
                <Mail size={24} />
                <div className="text-left">
                  <div className="text-[14px] text-white/70">이메일 문의</div>
                  <div className="text-[20px] font-bold">Anysupport@Koino.net</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
