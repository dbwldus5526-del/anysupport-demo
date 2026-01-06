import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { Features } from "@/components/sections/Features";
import { ModalProvider } from "@/context/ModalContext";
import { GetStartedModal } from "@/components/modals/GetStartedModal";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

// Inline components for other sections to speed up
const Solutions = () => (
  <section className="py-24 bg-white" id="solutions">
    <div className="container mx-auto px-4 md:px-6 flex flex-col lg:flex-row items-center gap-16">
       <div className="flex-1 space-y-8">
          <h2 className="text-3xl md:text-4xl font-heading font-bold">Solved in Seconds, Not Hours</h2>
          <p className="text-lg text-muted-foreground">
            AnySupport empowers your helpdesk to resolve tickets faster with instant connection and powerful diagnostic tools.
          </p>
          <ul className="space-y-4">
            {['Zero-install connection for end users', 'Automatic session recording', 'Real-time file transfer', 'System diagnostics report'].map((item) => (
              <li key={item} className="flex items-center gap-3 text-foreground font-medium">
                <div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center text-green-600 flex-shrink-0">
                  <Check size={14} />
                </div>
                {item}
              </li>
            ))}
          </ul>
       </div>
       <div className="flex-1 h-[400px] w-full bg-slate-100 rounded-2xl flex items-center justify-center border border-slate-200 relative overflow-hidden">
          <div className="absolute inset-0 bg-grid-slate-200 [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.6))] bg-[center_top_-1px]" />
          <div className="relative z-10 text-slate-400 font-mono text-sm">
             {/* Simple UI Mockup Placeholder */}
             &lt;Interactive Solution Demo /&gt;
          </div>
       </div>
    </div>
  </section>
);

const Pricing = () => (
  <section className="py-24 bg-slate-900 text-white" id="pricing">
    <div className="container mx-auto px-4 md:px-6 text-center">
      <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6">Simple, Transparent Pricing</h2>
      <p className="text-slate-400 text-lg mb-16 max-w-2xl mx-auto">
        No hidden fees. No long-term contracts. Start with a free trial and upgrade as you grow.
      </p>
      
      <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {[
          { name: "Starter", price: "$0", desc: "For individuals", features: ["1 User", "10 Remote Devices", "Basic Support"] },
          { name: "Pro", price: "$49", desc: "For growing teams", features: ["5 Users", "Unlimited Devices", "Session Recording", "File Transfer"], popular: true },
          { name: "Enterprise", price: "Custom", desc: "For large organizations", features: ["Unlimited Users", "SSO/SAML", "Audit Logs", "Dedicated Manager"] }
        ].map((plan, i) => (
          <div key={i} className={`relative p-8 rounded-2xl border ${plan.popular ? 'bg-primary border-primary' : 'bg-slate-800 border-slate-700'} flex flex-col text-left`}>
            {plan.popular && <div className="absolute top-0 right-0 bg-white text-primary text-xs font-bold px-3 py-1 rounded-bl-xl rounded-tr-xl">MOST POPULAR</div>}
            <h3 className="text-xl font-bold mb-2">{plan.name}</h3>
            <div className="text-4xl font-bold mb-2">{plan.price}<span className="text-sm font-normal opacity-70">/mo</span></div>
            <p className="text-sm opacity-70 mb-8">{plan.desc}</p>
            <ul className="space-y-4 mb-8 flex-1">
              {plan.features.map(f => (
                <li key={f} className="flex items-center gap-2 text-sm">
                  <Check size={16} className={plan.popular ? 'text-white' : 'text-primary'} /> {f}
                </li>
              ))}
            </ul>
            <Button className={`w-full ${plan.popular ? 'bg-white text-primary hover:bg-slate-100' : 'bg-primary text-white hover:bg-blue-600'}`}>
              Choose {plan.name}
            </Button>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export function Home() {
  return (
    <ModalProvider>
      <div className="min-h-screen bg-background font-sans">
        <Header />
        <main>
          <Hero />
          <Features />
          <Solutions />
          <Pricing />
        </main>
        <Footer />
        <GetStartedModal />
      </div>
    </ModalProvider>
  );
}
