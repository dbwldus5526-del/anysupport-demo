import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { Menu, X, ChevronRight, ChevronDown } from "lucide-react";
import { useModal } from "@/context/ModalContext";
import logo from "@assets/애니서포트--new-log_1767678194580.png";
import { cn } from "@/lib/utils";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";

const NAV_ITEMS = [
  { 
    label: "제품", 
    href: "/product",
    subItems: [
      { label: "PC 원격지원", href: "/product/pc" },
      { label: "Mobile 원격지원", href: "/product/mobile" },
      { label: "Video 원격지원", href: "/product/video" },
    ]
  },
  { 
    label: "솔루션", 
    href: "/solution",
    subItems: [
      { label: "애니서포트 소개", href: "/solution/intro" },
      { label: "보안성과 안전성", href: "/solution/security" },
      { label: "다양한 기능", href: "/solution/features" },
      { label: "사용 방법", href: "/solution/guide" },
      { label: "사용 환경", href: "/solution/environment" },
    ]
  },
  { label: "가격", href: "/pricing" },
  { label: "다운로드", href: "/download" },
  { label: "고객지원", href: "/support" },
];

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openMobileMenus, setOpenMobileMenus] = useState<string[]>([]);
  const { openModal } = useModal();
  const [location] = useLocation();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (isMobileMenuOpen) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "unset";
  }, [isMobileMenuOpen]);

  const handleLogoClick = () => {
    if (window.location.pathname === "/") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const toggleMobileSubmenu = (label: string) => {
    setOpenMobileMenus(prev => 
      prev.includes(label) ? prev.filter(item => item !== label) : [...prev, label]
    );
  };

  return (
    <header className={cn(
      "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
      isScrolled ? "bg-white/95 backdrop-blur-md border-b shadow-sm py-3" : "bg-white/80 backdrop-blur-sm py-5"
    )}>
      <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
        <Link href="/" onClick={handleLogoClick} className="flex items-center gap-2 group shrink-0">
          <img src={logo} alt="AnySupport" className="h-8 md:h-10 w-auto object-contain" />
        </Link>

        <nav className="hidden md:block">
          <NavigationMenu>
            <NavigationMenuList className="gap-2">
              {NAV_ITEMS.map((item) => (
                <NavigationMenuItem key={item.href}>
                  {item.subItems ? (
                    <>
                      <NavigationMenuTrigger className={cn(
                        "bg-transparent font-semibold hover:bg-transparent data-[state=open]:bg-transparent",
                        location.startsWith(item.href) ? "text-primary" : "text-foreground/80"
                      )}>
                        {item.label}
                      </NavigationMenuTrigger>
                      <NavigationMenuContent>
                        <ul className="grid w-[200px] gap-1 p-2 bg-white">
                          {item.subItems.map((sub) => (
                            <li key={sub.href}>
                              <NavigationMenuLink asChild>
                                <Link
                                  href={sub.href}
                                  className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-slate-50 hover:text-primary text-sm font-medium"
                                >
                                  {sub.label}
                                </Link>
                              </NavigationMenuLink>
                            </li>
                          ))}
                        </ul>
                      </NavigationMenuContent>
                    </>
                  ) : (
                    <NavigationMenuLink asChild>
                      <Link href={item.href} className={cn(
                        navigationMenuTriggerStyle(),
                        "bg-transparent font-semibold hover:bg-transparent",
                        location === item.href ? "text-primary" : "text-foreground/80"
                      )}>
                        {item.label}
                      </Link>
                    </NavigationMenuLink>
                  )}
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
          </NavigationMenu>
        </nav>

        <div className="hidden md:flex items-center gap-3 shrink-0">
          <Button variant="ghost" className="font-semibold text-foreground/70">로그인</Button>
          <Button onClick={openModal} className="font-bold px-6 shadow-md">무료체험 신청</Button>
        </div>

        <button className="md:hidden p-2" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {isMobileMenuOpen && (
        <div className="fixed inset-0 top-[60px] z-50 bg-white flex flex-col p-6 md:hidden overflow-y-auto">
          <nav className="flex flex-col">
            {NAV_ITEMS.map((item) => (
              <div key={item.href} className="border-b border-slate-100">
                <div 
                  className="flex items-center justify-between py-4 cursor-pointer"
                  onClick={() => item.subItems ? toggleMobileSubmenu(item.label) : setIsMobileMenuOpen(false)}
                >
                  {item.subItems ? (
                    <span className="text-lg font-bold">{item.label}</span>
                  ) : (
                    <Link href={item.href} className="text-lg font-bold w-full">
                      {item.label}
                    </Link>
                  )}
                  {item.subItems ? (
                    <ChevronDown 
                      size={20} 
                      className={cn(
                        "text-slate-400 transition-transform",
                        openMobileMenus.includes(item.label) && "rotate-180"
                      )} 
                    />
                  ) : (
                    <ChevronRight size={20} className="text-slate-400" />
                  )}
                </div>
                
                {item.subItems && openMobileMenus.includes(item.label) && (
                  <div className="bg-slate-50 rounded-lg mb-4 overflow-hidden">
                    {item.subItems.map((sub) => (
                      <Link 
                        key={sub.href} 
                        href={sub.href} 
                        onClick={() => setIsMobileMenuOpen(false)}
                        className="block py-3 px-6 text-slate-600 font-medium border-b border-white last:border-0 hover:text-primary"
                      >
                        {sub.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </nav>
          <div className="mt-auto pt-10 pb-20 flex flex-col gap-4">
            <Button variant="outline" className="h-14 text-lg font-bold">로그인</Button>
            <Button onClick={() => { setIsMobileMenuOpen(false); openModal(); }} className="h-14 text-lg font-bold">무료체험 신청</Button>
          </div>
        </div>
      )}
    </header>
  );
}
