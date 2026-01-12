import { useState } from "react";
import { FolderOpen, FileText, ChevronDown, ChevronUp } from "lucide-react";

interface NoticeItem {
  title: string;
  date?: string;
}

interface NoticeCategory {
  title: string;
  count: number;
  items: NoticeItem[];
  showMore?: boolean;
}

const noticeCategories: NoticeCategory[] = [
  {
    title: "이용약관",
    count: 1,
    items: [
      { title: "애니서포트 서비스 이용약관" },
    ],
  },
  {
    title: "개인정보취급방침",
    count: 1,
    items: [
      { title: "애니서포트 개인정보취급방침" },
    ],
  },
  {
    title: "시스템점검",
    count: 2,
    items: [
      { title: "[시스템점검] 서버 증설 공지" },
      { title: "[시스템점검]서버 증설 공지(신규 방화벽 정보 포함)" },
    ],
  },
  {
    title: "이벤트",
    count: 4,
    items: [
      { title: "2022년12월 프로모션 특가 이벤트!!!" },
      { title: "코이노 마곡 신사옥 입주 감사 이벤트_20210901" },
      { title: "2024년 구정이벤트_선물을 쏩니다" },
      { title: "2024년 코이노 공식파트너 모집 설명회 개최" },
    ],
  },
  {
    title: "바우처 사업",
    count: 1,
    items: [
      { title: "코이노, 2024년 클라우드서비스 바우처 공급기업 선정" },
    ],
  },
  {
    title: "고객센터공지",
    count: 2,
    items: [
      { title: "[공지]애니서포트 고객센터 6월 업무일 안내(2024.06.07)" },
      { title: "[공지]애니서포트 고객센터 8월 업무일 안내(2024.08.16)" },
    ],
  },
];

export default function Notice() {
  const [openCategories, setOpenCategories] = useState<number[]>([0, 1, 2, 3, 4, 5]);

  const toggleCategory = (index: number) => {
    setOpenCategories(prev => 
      prev.includes(index) 
        ? prev.filter(i => i !== index)
        : [...prev, index]
    );
  };

  return (
    <div className="flex flex-col min-h-screen bg-slate-50/50">
      <section className="relative pt-32 pb-16 overflow-hidden bg-slate-900 text-white text-center">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-10 relative z-10">
          <h1 className="text-[40px] font-bold mb-4">공지사항</h1>
          <p className="text-[18px] text-white/80">
            애니서포트의 새로운 소식과 공지를 확인하세요
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {noticeCategories.map((category, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl border border-slate-200 overflow-hidden"
              >
                <button
                  onClick={() => toggleCategory(index)}
                  className="w-full p-5 flex items-center justify-between text-[18px] font-light bg-[#f2f2f2] text-[#0f172b]"
                >
                  <div className="flex items-center gap-3">
                    <FolderOpen size={22} className="text-[#666]" />
                    <span className="text-[18px] text-[#0066b3] font-medium">
                      {category.title} ({category.count})
                    </span>
                  </div>
                  {openCategories.includes(index) ? (
                    <ChevronUp size={22} className="text-[#666]" />
                  ) : (
                    <ChevronDown size={22} className="text-[#666]" />
                  )}
                </button>
                {openCategories.includes(index) && (
                  <div className="p-5 space-y-3">
                    {category.items.map((item, itemIndex) => (
                      <div
                        key={itemIndex}
                        className="flex items-start gap-3 text-[#0066b3] hover:text-primary cursor-pointer"
                      >
                        <FileText size={16} className="shrink-0 mt-0.5 text-[#666]" />
                        <span className="text-[15px]">{item.title}</span>
                      </div>
                    ))}
                    {category.showMore && (
                      <div className="text-[14px] text-[#0066b3] hover:text-primary cursor-pointer mt-2">
                        모두 보기 {category.count}
                      </div>
                    )}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
