import { Link } from "wouter";
import logo from "@assets/애니서포트--new-log_1767681624073.png";

export function Footer() {
  return (
    <footer className="border-t border-slate-200 mt-[0px] mb-[0px] pt-[65px] pb-[65px] bg-[#edf1ff]">
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
          <div className="col-span-2 lg:col-span-3">
            <h4 className="mb-6 font-medium text-[#666]">회사 정보</h4>
            <div className="text-slate-500 text-sm leading-relaxed space-y-2">
              <p>(주)코이노</p>
              <p>대표: 오주병</p>
              <p>사업자번호: 314-81-33490</p>
              <p>운영시간: 평일 09시 ~ 18시</p>
              <p>전화: 02-839-7500</p>
              <p>Fax: 02-6008-4135</p>
              <p>E-mail: anysupport@koino.net</p>
              <p>주소: 서울특별시 강서구 마곡중앙12로 29, (주)코이노 빌딩</p>
            </div>
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
