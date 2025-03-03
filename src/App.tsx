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
import Capybara from "./pages/Capybara";
import Cat from "./pages/Cat";
import Chicken from "./pages/Chicken";
import Chameleon from "./pages/Chameleon";
import Chipmunk from "./pages/Chipmunk";
import Cheetah from "./pages/Cheetah";
import Cow from "./pages/Cow";
import Crab from "./pages/Crab";
import Cricket from "./pages/Cricket";
import Crocodile from "./pages/Crocodile";
import Deer from "./pages/Deer";
import Dog from "./pages/Dog";
import Dolphin from "./pages/Dolphin";
import Donkey from "./pages/Donkey";
import Duck from "./pages/Duck";
import Eagle from "./pages/Eagle";
import Elephant from "./pages/Elephant";
import Ferret from "./pages/Ferret";
import Fish from "./pages/Fish";
import Flamingo from "./pages/Flamingo";
import Fly from "./pages/Fly";
import Fox from "./pages/Fox";
import Frog from "./pages/Frog";
import Giraffe from "./pages/Giraffe";
import Goat from "./pages/Goat";
import Goose from "./pages/Goose";
import GuineaPig from "./pages/GuineaPig";
import Hamster from "./pages/Hamster";
import Hedgehog from "./pages/Hedgehog";
import HermitCrab from "./pages/HermitCrab";
import Hippo from "./pages/Hippo";
import Horse from "./pages/Horse";
import Hyena from "./pages/Hyena";
import Iguana from "./pages/Iguana";
import Jellyfish from "./pages/Jellyfish";

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
            <Route path="/capybara" element={<Capybara />} />
            <Route path="/cat" element={<Cat />} />
            <Route path="/chicken" element={<Chicken />} />
            <Route path="/chameleon" element={<Chameleon />} />
            <Route path="/chipmunk" element={<Chipmunk />} />
            <Route path="/cheetah" element={<Cheetah />} />
            <Route path="/cow" element={<Cow />} />
            <Route path="/crab" element={<Crab />} />
            <Route path="/cricket" element={<Cricket />} />
            <Route path="/crocodile" element={<Crocodile />} />
            <Route path="/deer" element={<Deer />} />
            <Route path="/dog" element={<Dog />} />
            <Route path="/dolphin" element={<Dolphin />} />
            <Route path="/donkey" element={<Donkey />} />
            <Route path="/duck" element={<Duck />} />
            <Route path="/eagle" element={<Eagle />} />
            <Route path="/elephant" element={<Elephant />} />
            <Route path="/ferret" element={<Ferret />} />
            <Route path="/fish" element={<Fish />} />
            <Route path="/flamingo" element={<Flamingo />} />
            <Route path="/fly" element={<Fly />} />
            <Route path="/fox" element={<Fox />} />
            <Route path="/frog" element={<Frog />} />
            <Route path="/giraffe" element={<Giraffe />} />
            <Route path="/goat" element={<Goat />} />
            <Route path="/goose" element={<Goose />} />
            <Route path="/guinea-pig" element={<GuineaPig />} />
            <Route path="/hamster" element={<Hamster />} />
            <Route path="/hedgehog" element={<Hedgehog />} />
            <Route path="/hermit-crab" element={<HermitCrab />} />
            <Route path="/hippo" element={<Hippo />} />
            <Route path="/horse" element={<Horse />} />
            <Route path="/hyena" element={<Hyena />} />
            <Route path="/iguana" element={<Iguana />} />
            <Route path="/jellyfish" element={<Jellyfish />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  </HelmetProvider>
);

export default App;
