import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/not-found";
import { Home } from "@/pages/home";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      {/* For prototype, map all main nav links to Home since it's a landing page */}
      <Route path="/product" component={Home} />
      <Route path="/solutions" component={Home} />
      <Route path="/pricing" component={Home} />
      <Route path="/download" component={Home} />
      <Route path="/support" component={Home} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Router />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
