import React, { createContext, useContext, useState, ReactNode } from "react";
import { Button } from "@/components/ui/button";
import { Phone, Mail, Clock, X } from "lucide-react";

interface ModalContextType {
  isOpen: boolean;
  openModal: () => void;
  closeModal: () => void;
  isContactOpen: boolean;
  openContactModal: () => void;
  closeContactModal: () => void;
}

const ModalContext = createContext<ModalContextType | undefined>(undefined);

export function ModalProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  const [isContactOpen, setIsContactOpen] = useState(false);

  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);
  const openContactModal = () => setIsContactOpen(true);
  const closeContactModal = () => setIsContactOpen(false);

  return (
    <ModalContext.Provider value={{ isOpen, openModal, closeModal, isContactOpen, openContactModal, closeContactModal }}>
      {children}
      {isContactOpen && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50" onClick={closeContactModal}>
          <div className="bg-white rounded-2xl p-8 max-w-md w-full mx-4 relative" onClick={(e) => e.stopPropagation()}>
            <button
              onClick={closeContactModal}
              className="absolute top-4 right-4 text-slate-400 hover:text-slate-600"
            >
              <X size={24} />
            </button>
            <h2 className="text-2xl font-bold text-[#333] mb-6">애니서포트 문의하기</h2>
            <div className="space-y-5">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                  <Phone size={20} className="text-primary" />
                </div>
                <div>
                  <p className="text-sm text-[#666]">대표전화</p>
                  <p className="text-lg font-semibold text-[#333]">02-839-7500</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                  <Mail size={20} className="text-primary" />
                </div>
                <div>
                  <p className="text-sm text-[#666]">문의 이메일</p>
                  <a href="mailto:anysupport@koino.co.kr" className="text-lg font-semibold text-primary hover:underline">
                    anysupport@koino.co.kr
                  </a>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                  <Clock size={20} className="text-primary" />
                </div>
                <div>
                  <p className="text-sm text-[#666]">상담 가능 시간</p>
                  <p className="text-lg font-semibold text-[#333]">월~금 09:00 ~ 18:00</p>
                </div>
              </div>
            </div>
            <div className="mt-8 pt-6 border-t border-slate-100">
              <p className="text-sm text-[#666] mb-4">팩스: 02-857-0054</p>
              <Button
                onClick={closeContactModal}
                className="w-full h-12 font-bold"
              >
                닫기
              </Button>
            </div>
          </div>
        </div>
      )}
    </ModalContext.Provider>
  );
}

export function useModal() {
  const context = useContext(ModalContext);
  if (context === undefined) {
    throw new Error("useModal must be used within a ModalProvider");
  }
  return context;
}
