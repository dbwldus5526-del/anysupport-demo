import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/not-found";
import { Home } from "@/pages/home";
import Product from "@/pages/product";
import MobileProduct from "@/pages/mobile-product";
import VideoProduct from "@/pages/video-product";
import Solution from "@/pages/solution";
import Security from "@/pages/security";
import Features from "@/pages/features";
import Pricing from "@/pages/pricing";
import Download from "@/pages/download";
import Support from "@/pages/support";
import { ModalProvider } from "@/context/ModalContext";
import { GetStartedModal } from "@/components/modals/GetStartedModal";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

function Router() {
  return (
    <div className="min-h-screen bg-background font-sans">
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
          <Route path="/solution/guide" component={Solution} />
          <Route path="/solution/environment" component={Solution} />
          <Route path="/pricing" component={Pricing} />
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
