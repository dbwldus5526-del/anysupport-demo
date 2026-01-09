import { Switch, Route, useLocation } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { useEffect } from "react";
import NotFound from "@/pages/not-found";
import { Home } from "@/pages/home";
import Product from "@/pages/product";
import MobileProduct from "@/pages/mobile-product";
import VideoProduct from "@/pages/video-product";
import Solution from "@/pages/solution";
import Guide from "@/pages/guide";
import Security from "@/pages/security";
import Features from "@/pages/features";
import Management from "@/pages/management";
import Pricing from "@/pages/pricing";
import PricingComparison from "@/pages/pricing-comparison";
import Download from "@/pages/download";
import Support from "@/pages/support";
import { ModalProvider } from "@/context/ModalContext";
import { GetStartedModal } from "@/components/modals/GetStartedModal";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

function ScrollToTop() {
  const [location] = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
  }, [location]);

  return null;
}

function Router() {
  return (
    <div className="min-h-screen bg-background font-sans">
      <ScrollToTop />
      <Header />
      <main>
        <Switch>
          <Route path="/" component={Home} />
          <Route path="/product" component={Product} />
          <Route path="/product/pc" component={Product} />
          <Route path="/product/mobile" component={MobileProduct} />
          <Route path="/product/video" component={VideoProduct} />
          <Route path="/solution" component={Solution} />
          <Route path="/solution/intro" component={Solution} />
          <Route path="/solution/security" component={Security} />
          <Route path="/solution/features" component={Features} />
          <Route path="/solution/management" component={Management} />
          <Route path="/solution/guide" component={Guide} />
          <Route path="/solution/environment" component={Solution} />
          <Route path="/pricing" component={Pricing} />
          <Route path="/pricing/comparison" component={PricingComparison} />
          <Route path="/download" component={Download} />
          <Route path="/support" component={Support} />
          <Route component={NotFound} />
        </Switch>
      </main>
      <Footer />
      <GetStartedModal />
    </div>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <ModalProvider>
          <Toaster />
          <Router />
        </ModalProvider>
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
