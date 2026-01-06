import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useModal } from "@/context/ModalContext";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { useToast } from "@/hooks/use-toast";

const formSchema = z.object({
  email: z.string().email("올바른 이메일 주소를 입력해주세요."),
  company: z.string().min(2, "회사명을 입력해주세요."),
  phone: z.string().min(10, "연락처를 입력해주세요."),
});

export function GetStartedModal() {
  const { isOpen, closeModal } = useModal();
  const { toast } = useToast();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      company: "",
      phone: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log("무료체험 신청 정보:", values);
    toast({
      title: "신청 완료",
      description: "무료체험 신청이 정상적으로 접수되었습니다. 곧 담당자가 연락드리겠습니다.",
    });
    closeModal();
    form.reset();
  }

  return (
    <Dialog open={isOpen} onOpenChange={closeModal}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold">무료체험 신청</DialogTitle>
          <DialogDescription className="pt-2">
            애니서포트의 강력한 원격지원 기능을 14일간 무료로 경험해보세요.
          </DialogDescription>
        </DialogHeader>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4 py-4">
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>이메일</FormLabel>
                  <FormControl>
                    <Input placeholder="name@company.com" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="company"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>회사명</FormLabel>
                  <FormControl>
                    <Input placeholder="주식회사 애니서포트" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="phone"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>연락처</FormLabel>
                  <FormControl>
                    <Input placeholder="010-0000-0000" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button type="submit" className="w-full font-bold text-lg h-12 mt-4">
              무료체험 시작하기
            </Button>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
}
