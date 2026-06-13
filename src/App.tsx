import { Switch, Route, Router as WouterRouter } from "wouter";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/not-found";

// Layout
import { Navbar }       from "@/components/layout/Navbar";
import { Footer }       from "@/components/layout/Footer";
import { CustomCursor } from "@/components/ui/CustomCursor";
import { PageProgress } from "@/components/ui/PageProgress";

// Pages
import Home                from "@/pages/home";
import About               from "@/pages/about";
import ConsultancyIndex    from "@/pages/consultancy/index";
import ConsultancyService  from "@/pages/consultancy/[service]";
import ManufacturingIndex  from "@/pages/manufacturing/index";
import ManufacturingProduct from "@/pages/manufacturing/[product]";
import Contact             from "@/pages/contact";

const queryClient = new QueryClient();

function Router() {
  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground overflow-x-hidden">
      <CustomCursor />
      <PageProgress />
      <Navbar />
      <main className="flex-grow">
        <Switch>
          <Route path="/"                        component={Home} />
          <Route path="/about"                   component={About} />
          <Route path="/consultancy"             component={ConsultancyIndex} />
          <Route path="/consultancy/:service"    component={ConsultancyService} />
          <Route path="/manufacturing"           component={ManufacturingIndex} />
          <Route path="/manufacturing/:product"  component={ManufacturingProduct} />
          <Route path="/contact"                 component={Contact} />
          <Route                                 component={NotFound} />
        </Switch>
      </main>
      <Footer />
    </div>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <WouterRouter base={import.meta.env.BASE_URL?.replace(/\/$/, "") || ""}>
          <Router />
        </WouterRouter>
        <Toaster />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
