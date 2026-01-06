import { Button } from "@/components/ui/button";
import { useModal } from "@/context/ModalContext";
import { ArrowRight, PlayCircle, ShieldCheck, Zap, Globe } from "lucide-react";
import heroImage from "@assets/generated_images/saas_dashboard_abstract_hero_visualization.png";

export function Hero() {
  const { openModal } = useModal();

  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-32 overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10">
        <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] bg-blue-100 rounded-full blur-3xl opacity-50" />
        <div className="absolute bottom-[10%] left-[-10%] w-[600px] h-[600px] bg-slate-100 rounded-full blur-3xl opacity-60" />
      </div>

      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          
          {/* Left Content */}
          <div className="flex-1 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-100 text-blue-600 text-xs font-semibold mb-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
              </span>
              New: Enterprise Security Suite 2.0
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-foreground leading-[1.15] mb-6 tracking-tight animate-in fade-in slide-in-from-bottom-5 duration-700 delay-100">
              Support Any Device, <br />
              <span className="text-primary">From Anywhere.</span>
            </h1>

            <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto lg:mx-0 leading-relaxed animate-in fade-in slide-in-from-bottom-6 duration-700 delay-200">
              The fastest, most secure remote support software for enterprise IT teams. 
              Connect to any PC, Mac, or mobile device in seconds.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 animate-in fade-in slide-in-from-bottom-6 duration-700 delay-300">
              <Button 
                size="lg" 
                className="w-full sm:w-auto text-base font-semibold h-12 px-8 shadow-xl shadow-blue-500/20 hover:shadow-blue-500/30 transition-all hover:-translate-y-0.5"
                onClick={openModal}
              >
                Start Free Trial <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="w-full sm:w-auto text-base font-medium h-12 px-8 border-slate-200 hover:bg-slate-50 text-slate-700"
              >
                <PlayCircle className="mr-2 w-4 h-4" /> Watch Demo
              </Button>
            </div>

            <div className="mt-10 flex items-center justify-center lg:justify-start gap-6 text-sm text-slate-500 font-medium animate-in fade-in slide-in-from-bottom-6 duration-700 delay-400">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-primary" /> SOC2 Certified
              </div>
              <div className="flex items-center gap-2">
                <Zap className="w-4 h-4 text-primary" /> 99.99% Uptime
              </div>
              <div className="flex items-center gap-2">
                <Globe className="w-4 h-4 text-primary" /> Global CDN
              </div>
            </div>
          </div>

          {/* Right Image */}
          <div className="flex-1 w-full max-w-[600px] lg:max-w-none animate-in fade-in zoom-in-95 duration-1000 delay-300">
            <div className="relative group perspective-1000">
              {/* Decorative Glow */}
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl blur opacity-20 group-hover:opacity-30 transition duration-1000"></div>
              
              <div className="relative rounded-2xl overflow-hidden border border-slate-200/50 shadow-2xl bg-white/50 backdrop-blur-sm">
                <div className="absolute top-0 left-0 right-0 h-8 bg-slate-50/90 border-b border-slate-200 flex items-center px-4 gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-400" />
                  <div className="w-3 h-3 rounded-full bg-amber-400" />
                  <div className="w-3 h-3 rounded-full bg-emerald-400" />
                </div>
                <div className="pt-8">
                   <img 
                    src={heroImage} 
                    alt="AnySupport Dashboard Interface" 
                    className="w-full h-auto object-cover transform transition-transform duration-700 hover:scale-[1.02]"
                   />
                </div>
                
                {/* Floating Elements for Depth */}
                <div className="absolute bottom-8 -left-8 bg-white p-4 rounded-xl shadow-xl border border-slate-100 hidden md:block animate-bounce-slow">
                   <div className="flex items-center gap-3">
                     <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center text-green-600">
                       <ShieldCheck size={20} />
                     </div>
                     <div>
                       <div className="text-xs text-muted-foreground">Status</div>
                       <div className="text-sm font-bold text-foreground">Secure Connection</div>
                     </div>
                   </div>
                </div>

                <div className="absolute top-20 -right-6 bg-white p-4 rounded-xl shadow-xl border border-slate-100 hidden md:block animate-pulse-slow">
                   <div className="flex items-center gap-3">
                     <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center text-blue-600">
                       <Zap size={20} />
                     </div>
                     <div>
                       <div className="text-xs text-muted-foreground">Latency</div>
                       <div className="text-sm font-bold text-foreground">12ms (Ultra Low)</div>
                     </div>
                   </div>
                </div>

              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
