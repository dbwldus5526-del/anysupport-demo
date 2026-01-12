import { useState } from "react";
import { FolderOpen, FileText, Phone, Mail, ChevronDown, ChevronUp } from "lucide-react";

const faqCategories = [
  {
    title: "자주하는 질문 Top5",
    count: 5,
    questions: [
      "애니서포트 상담원 1계정 가격은 얼마 입니까?",
      "애니서포트 서비스를 무료로 사용할 수 있나요?",
      "한 명의 상담원이 다수 고객을 동시에 상담을 할 수 있나요?",
      "해외에 있는 고객도 원격지원을 할 수 있습니까?",
      "고객이 가상 IP 환경 또는 유동 IP 환경인데 애니서포트 원격 지원이 가능한가요?",
    ],
  },
  {
    title: "애니서포트 기능에 대해서",
    count: 3,
    questions: [
      "상담원이 원격지원을 하는 도중에 다른 상담원과 동시에 지원할 수 있나요?",
      "드라이버 모드와 GDI 모드의 차이는 무엇인가요?",
      "원격지원중인 고객의 PC화면을 녹화할 수 있나요?",
    ],
  },
  {
    title: "서비스 도입에 대해서",
    count: 2,
    questions: [
      "애니서포트 서비스를 사용하기 위한 시스템 요구사항은 무엇입니까?",
      "상담원 도입 기업의 고객이 원격 지원을 받기위해 별도로 준비해야 할 것이 있나요?",
    ],
  },
  {
    title: "결제에 대해서",
    count: 2,
    questions: [
      "애니서포트 사용료 결제는 어떻게 하나요?",
      "카드 결제도 가능합니까?",
    ],
  },
  {
    title: "보안에 대해서",
    count: 2,
    questions: [
      "원격지원 도중에 해킹의 위험은 없나요?",
      "원격지원 애니서포트를 사용하는 도중에 바이러스에 감염이 될 수 있나요?",
    ],
  },
  {
    title: "원격접속에 대해서",
    count: 2,
    questions: [
      "Mac OS 10.15(Catalina)에서 원격제어가 안되거나 원격화면이 검정색으로 보입니다",
      "Mac OS 10.14(mojave)에서 원격제어가 안됩니다.",
    ],
  },
];

export default function FAQ() {
  const [openCategory, setOpenCategory] = useState<number | null>(0);

  const toggleCategory = (index: number) => {
    setOpenCategory(openCategory === index ? null : index);
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
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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
                  <div className="p-6 space-y-4">
                    {category.questions.map((question, qIndex) => (
                      <div
                        key={qIndex}
                        className="flex items-start gap-3 text-[#0066b3] hover:text-primary cursor-pointer"
                      >
                        <FileText size={18} className="shrink-0 mt-0.5" />
                        <span className="text-[16px]">{question}</span>
                      </div>
                    ))}
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
