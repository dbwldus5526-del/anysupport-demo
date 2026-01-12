import { Link } from "wouter";
import logo from "@assets/애니서포트--new-log_1767681624073.png";

export function Footer() {
  return (
    <footer className="bg-slate-50 border-t border-slate-200 mt-[0px] mb-[0px] pt-[65px] pb-[65px]">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-12 mt-[4px] mb-[4px]">
          <div className="col-span-2 lg:col-span-2">
            <Link href="/" className="flex items-center gap-2 mb-6 group">
              <img src={logo} alt="AnySupport" className="h-8 md:h-10 w-auto object-contain" />
            </Link>
            <p className="text-slate-500 text-sm leading-relaxed max-w-sm">
              AnySupport는 기업의 디지털 전환을 지원하는 최고의 원격 기술지원 솔루션입니다. 
              전 세계 어디서든 빠르고 안전한 연결을 제공합니다.
            </p>
          </div>
          <div>
            <h4 className="mb-6 font-medium text-[#666]">제품</h4>
            <ul className="space-y-4 text-slate-500 text-[14px]">
              <li><Link href="/solution/features">주요기능</Link></li>
              <li><Link href="/solution/management">원격지원 관리</Link></li>
              <li><Link href="/solution/security">보안센터</Link></li>
              <li><Link href="/download">다운로드</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="mb-6 text-[#666] font-medium">고객지원</h4>
            <ul className="space-y-4 text-sm text-slate-500">
              <li><Link href="/help">도움말</Link></li>
              <li><Link href="/notice">공지사항</Link></li>
              <li><Link href="/contact">문의하기</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="mb-6 font-medium text-[#666]">회사</h4>
            <ul className="space-y-4 text-sm text-slate-500">
              <li><Link href="/about">회사소개</Link></li>
              <li><Link href="/careers">인재채용</Link></li>
              <li><Link href="/privacy">개인정보처리방침</Link></li>
            </ul>
          </div>
        </div>
        <div className="pt-8 border-t border-slate-200 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-xs text-slate-400 font-medium">© {new Date().getFullYear()} AnySupport. All rights reserved.</p>
          <div className="flex gap-4">
             <div className="w-8 h-8 rounded-full bg-slate-200" />
             <div className="w-8 h-8 rounded-full bg-slate-200" />
          </div>
        </div>
      </div>
    </footer>
  );
}
