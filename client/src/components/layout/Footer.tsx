import { Link } from "wouter";
import logo from "@assets/generated_images/minimalist_tech_logo_for_anysupport.png";

export function Footer() {
  return (
    <footer className="bg-slate-50 border-t border-slate-200 pt-16 pb-8">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 mb-12">
          <div className="col-span-2 lg:col-span-2">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-lg overflow-hidden bg-primary/10 p-1">
                 <img src={logo} alt="AnySupport Logo" className="w-full h-full object-contain" />
              </div>
              <span className="font-heading font-bold text-xl text-foreground">
                AnySupport
              </span>
            </Link>
            <p className="text-muted-foreground text-sm max-w-sm leading-relaxed mb-6">
              The enterprise standard for secure remote support. 
              Helping teams connect, support, and solve problems from anywhere in the world.
            </p>
          </div>
          
          <div>
            <h4 className="font-heading font-bold mb-4">Product</h4>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li><Link href="/features" className="hover:text-primary transition-colors">Features</Link></li>
              <li><Link href="/security" className="hover:text-primary transition-colors">Security</Link></li>
              <li><Link href="/integrations" className="hover:text-primary transition-colors">Integrations</Link></li>
              <li><Link href="/download" className="hover:text-primary transition-colors">Download</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-heading font-bold mb-4">Resources</h4>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li><Link href="/blog" className="hover:text-primary transition-colors">Blog</Link></li>
              <li><Link href="/case-studies" className="hover:text-primary transition-colors">Case Studies</Link></li>
              <li><Link href="/help" className="hover:text-primary transition-colors">Help Center</Link></li>
              <li><Link href="/api" className="hover:text-primary transition-colors">API Docs</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-heading font-bold mb-4">Company</h4>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li><Link href="/about" className="hover:text-primary transition-colors">About Us</Link></li>
              <li><Link href="/careers" className="hover:text-primary transition-colors">Careers</Link></li>
              <li><Link href="/contact" className="hover:text-primary transition-colors">Contact</Link></li>
              <li><Link href="/privacy" className="hover:text-primary transition-colors">Privacy</Link></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-200 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-muted-foreground text-center md:text-left">
            © {new Date().getFullYear()} AnySupport Inc. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
             {/* Social icons placeholders */}
             <div className="w-5 h-5 bg-slate-200 rounded-full" />
             <div className="w-5 h-5 bg-slate-200 rounded-full" />
             <div className="w-5 h-5 bg-slate-200 rounded-full" />
          </div>
        </div>
      </div>
    </footer>
  );
}
