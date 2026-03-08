import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import About from "./pages/About";
import Contact from "./pages/Contact";
import YearQuestions from "./pages/YearQuestions";
import YearLanding from "./pages/YearLanding";
import ALevelGenerator from "./pages/ALevelGenerator";
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
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/year/:year" element={<YearLanding />} />
          <Route path="/year7-today" element={<YearQuestions />} />
          <Route path="/year8-today" element={<YearQuestions />} />
          <Route path="/year7-answers" element={<YearQuestions />} />
          <Route path="/year8-answers" element={<YearQuestions />} />
          <Route path="/a-level-generator" element={<ALevelGenerator />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
