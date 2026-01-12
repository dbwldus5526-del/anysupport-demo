import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { Menu, X, ChevronRight, ChevronDown } from "lucide-react";
import { useModal } from "@/context/ModalContext";
import logo from "@assets/애니서포트--new-log_1767681624073.png";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";
import { createPortal } from "react-dom";
import { useMutation } from "@tanstack/react-query";
import { apiRequest } from "@/lib/queryClient";
import { useToast } from "@/hooks/use-toast";
import { insertInquirySchema } from "@shared/schema";

const NAV_ITEMS = [
  {
    label: "제품",
    href: "/product",
    subItems: [
      { label: "PC 원격지원", href: "/product/pc" },
      { label: "Mobile 원격지원", href: "/product/mobile" },
      { label: "Video 원격지원", href: "/product/video" },
    ],
  },
  {
    label: "솔루션",
    href: "/solution",
    subItems: [
      { label: "원격지원이란", href: "/solution/intro" },
      { label: "산업별 맞춤 솔루션", href: "/solution/industry" },
      { label: "주요 도입 사례", href: "/solution/cases" },
      { label: "사용방법", href: "/solution/guide" },
    ],
  },
  {
    label: "보안&기술",
    href: "/security",
    subItems: [
      { label: "보안성과 안전성", href: "/solution/security" },
      { label: "다양한 기능", href: "/solution/features" },
      { label: "보안 특허기술", href: "/security/patents" },
    ],
  },
  {
    label: "가격",
    href: "/pricing",
    subItems: [
      { label: "도입 방식 비교", href: "/pricing/comparison" },
      { label: "요금제 안내(SaaS)", href: "/pricing" },
    ],
  },
  { label: "다운로드", href: "/download" },
  {
    label: "고객지원",
    href: "/support",
    subItems: [
      { label: "FAQ", href: "/support/faq" },
      { label: "공지사항", href: "/support/notice" },
      { label: "보도자료", href: "/support/press" },
      { label: "블로그", href: "/support/blog" },
    ],
  },
];

function MobileMenuSheet({
  isOpen,
  onClose,
  navItems,
  openMenus,
  toggleSubmenu,
  openModal,
}: any) {
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, [onClose]);

  if (typeof document === "undefined") return null;

  return createPortal(
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Background Overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/50 z-[9998] md:hidden"
          />

          {/* Half-Sheet Menu */}
          <motion.div
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            exit={{ y: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed bottom-0 left-0 right-0 bg-white rounded-t-[24px] z-[9999] md:hidden h-[55dvh] max-h-[60dvh] flex flex-col shadow-[0_-8px_30px_rgb(0,0,0,0.12)] overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Sheet Header - Sticky */}
            <div className="sticky top-0 bg-white flex items-center justify-between px-6 py-4 border-b border-slate-100 shrink-0 z-10">
              <span className="text-lg font-bold">Menu</span>
              <button
                onClick={onClose}
                className="p-2 hover:bg-slate-100 rounded-full transition-colors"
                aria-label="Close menu"
              >
                <X size={24} className="text-slate-500" />
              </button>
            </div>

            {/* Sheet Content (Scrollable) */}
            <div className="flex-1 overflow-y-auto px-6 py-2">
              <nav className="flex flex-col">
                {navItems.map((item: any) => (
                  <div
                    key={item.href}
                    className="border-b border-slate-50 last:border-0"
                  >
                    <div
                      className="flex items-center justify-between py-4 cursor-pointer"
                      onClick={() =>
                        item.subItems ? toggleSubmenu(item.label) : onClose()
                      }
                    >
                      {item.subItems ? (
                        <span className="text-base font-bold text-slate-800">
                          {item.label}
                        </span>
                      ) : (
                        <Link
                          href={item.href}
                          className="text-base font-bold text-slate-800 w-full"
                          onClick={onClose}
                        >
                          {item.label}
                        </Link>
                      )}
                      {item.subItems ? (
                        <ChevronDown
                          size={18}
                          className={cn(
                            "text-slate-400 transition-transform duration-300",
                            openMenus.includes(item.label) && "rotate-180",
                          )}
                        />
                      ) : (
                        <ChevronRight size={18} className="text-slate-400" />
                      )}
                    </div>

                    {item.subItems && (
                      <div
                        className={cn(
                          "bg-slate-50/50 rounded-xl overflow-hidden transition-all duration-300 ease-in-out",
                          openMenus.includes(item.label)
                            ? "max-h-[500px] mb-4 opacity-100 py-2"
                            : "max-h-0 opacity-0",
                        )}
                      >
                        {item.subItems.map((sub: any) => (
                          <Link
                            key={sub.href}
                            href={sub.href}
                            onClick={onClose}
                            className="block py-3 px-6 text-slate-600 text-sm font-semibold hover:text-primary transition-colors"
                          >
                            {sub.label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </nav>
            </div>

            {/* Sheet Footer (Buttons) */}
            <div className="p-6 bg-slate-50/30 border-t border-slate-100 shrink-0 flex flex-col gap-3">
              <div className="grid grid-cols-2 gap-3">
                <Button
                  variant="outline"
                  className="h-12 font-bold border-slate-200"
                >
                  로그인
                </Button>
                <Button
                  onClick={() => {
                    onClose();
                    openModal();
                  }}
                  className="h-12 font-bold shadow-md"
                >
                  무료체험 신청
                </Button>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>,
    document.body,
  );
}

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openMobileMenus, setOpenMobileMenus] = useState<string[]>([]);
  const { isOpen, closeModal, openModal } = useModal();
  const [location] = useLocation();
  const { toast } = useToast();

  const mutation = useMutation({
    mutationFn: async (data: any) => {
      const res = await apiRequest("POST", "/api/inquiries", data);
      return res.json();
    },
    onSuccess: () => {
      toast({
        title: "신청 완료",
        description: "문의가 정상적으로 접수되었습니다. 곧 연락드리겠습니다.",
      });
      closeModal();
    },
    onError: (error: Error) => {
      toast({
        title: "오류 발생",
        description: error.message || "문의 전송 중 오류가 발생했습니다.",
        variant: "destructive",
      });
    },
  });

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const data = {
      name: formData.get("name") as string,
      email: formData.get("email") as string,
      company: formData.get("company") as string,
      phone: formData.get("phone") as string,
      content: formData.get("content") as string,
      type: "trial",
    };

    const result = insertInquirySchema.safeParse(data);
    if (!result.success) {
      toast({
        title: "입력 오류",
        description: "모든 필수 항목을 올바르게 입력해주세요.",
        variant: "destructive",
      });
      return;
    }

    mutation.mutate(data);
  };

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isMobileMenuOpen]);

  const handleLogoClick = () => {
    if (window.location.pathname === "/") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      window.scrollTo({ top: 0, behavior: "auto" });
    }
  };

  const toggleMobileSubmenu = (label: string) => {
    setOpenMobileMenus((prev) =>
      prev.includes(label)
        ? prev.filter((item) => item !== label)
        : [...prev, label],
    );
  };

  return (
    <>
      <div className="fixed top-0 left-0 right-0 z-50 bg-[#333] text-white hidden md:block">
        <div className="container mx-auto px-4 md:px-6 flex items-center gap-4 h-9">
          <a
            href="/download"
            className="text-[13px] hover:text-primary transition-colors"
          >
            애니서포트 다운로드
          </a>
          <span className="text-white/30">|</span>
          <a
            href="https://988.co.kr/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[13px] hover:text-primary transition-colors"
          >
            고객접속페이지
          </a>
          <span className="text-white/30">|</span>
          <a
            href="https://anysupport.net/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[13px] hover:text-primary transition-colors"
          >
            관리자페이지
          </a>
        </div>
      </div>
      <header className="fixed top-0 md:top-9 left-0 right-0 z-50 transition-all duration-300 backdrop-blur-sm py-5 bg-[#ffffff] shadow-[0_2px_8px_rgba(0,0,0,0.06)]">
      <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
        <Link
          href="/"
          onClick={handleLogoClick}
          className="flex items-center gap-2 group shrink-0"
        >
          <img
            src={logo}
            alt="AnySupport"
            className="h-8 md:h-10 w-auto object-contain"
          />
        </Link>

        <nav className="hidden md:block">
          <ul className="flex items-center gap-1">
            {NAV_ITEMS.map((item) => (
              <li key={item.href} className="relative group">
                {item.subItems ? (
                  <>
                    <button className="inline-flex h-9 w-max items-center justify-center rounded-md px-4 py-2 transition-colors hover:text-primary bg-transparent text-foreground/80 text-[18px] font-medium">
                      {item.label}
                      <ChevronDown className="ml-1 h-3 w-3 transition-transform duration-200 group-hover:rotate-180" />
                    </button>
                    <div className="absolute left-0 top-full pt-2 z-50 hidden group-hover:block">
                      <ul className="w-[200px] rounded-md border bg-white shadow-lg p-2">
                        {item.subItems.map((sub) => (
                          <li key={sub.href}>
                            <Link
                              href={sub.href}
                              className="block select-none rounded-md p-3 no-underline outline-none transition-colors hover:bg-slate-50 hover:text-primary text-slate-700 text-[18px] font-normal"
                            >
                              {sub.label}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </>
                ) : (
                  <Link
                    href={item.href}
                    className="inline-flex h-9 w-max items-center justify-center rounded-md px-4 py-2 transition-colors hover:text-primary bg-transparent text-[#333] text-[18px] font-medium"
                  >
                    {item.label}
                  </Link>
                )}
              </li>
            ))}
          </ul>
        </nav>

        <div className="hidden md:flex items-center gap-3 shrink-0">
          <Button
            variant="ghost"
            className="font-semibold text-foreground/70 text-[18px]"
          >
            로그인
          </Button>
          <Button onClick={openModal} className="font-bold px-6 shadow-md text-[18px]">
            무료체험 신청
          </Button>
        </div>

        <button
          className="md:hidden p-2 relative z-[61]"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-expanded={isMobileMenuOpen}
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      <MobileMenuSheet
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
        navItems={NAV_ITEMS}
        openMenus={openMobileMenus}
        toggleSubmenu={toggleMobileSubmenu}
        openModal={openModal}
      />
    </header>
    </>
  );
}
