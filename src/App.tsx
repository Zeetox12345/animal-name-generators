import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import Ant from "./pages/Ant";
import Alpaca from "./pages/Alpaca";
import Alligator from "./pages/Alligator";
import Ape from "./pages/Ape";
import Bat from "./pages/Bat";
import Bear from "./pages/Bear";
import Bee from "./pages/Bee";
import Beetle from "./pages/Beetle";
import Bird from "./pages/Bird";
import Butterfly from "./pages/Butterfly";

const queryClient = new QueryClient();

const App = () => (
  <HelmetProvider>
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/ant" element={<Ant />} />
            <Route path="/alpaca" element={<Alpaca />} />
            <Route path="/alligator" element={<Alligator />} />
            <Route path="/ape" element={<Ape />} />
            <Route path="/bat" element={<Bat />} />
            <Route path="/bear" element={<Bear />} />
            <Route path="/bee" element={<Bee />} />
            <Route path="/beetle" element={<Beetle />} />
            <Route path="/bird" element={<Bird />} />
            <Route path="/butterfly" element={<Butterfly />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  </HelmetProvider>
);

export default App;
