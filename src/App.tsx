import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Despre from "./pages/Despre";
import Programe from "./pages/Programe";
import Admitere from "./pages/Admitere";
import CadreDidactice from "./pages/CadreDidactice";
import Anunturi from "./pages/Anunturi";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/despre" element={<Despre />} />
          <Route path="/programe" element={<Programe />} />
          <Route path="/admitere" element={<Admitere />} />
          <Route path="/cadre-didactice" element={<CadreDidactice />} />
          <Route path="/anunturi" element={<Anunturi />} />
          <Route path="/contact" element={<Contact />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
