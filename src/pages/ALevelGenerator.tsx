import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import { ArrowLeft, Sparkles } from "lucide-react";
import { motion } from "framer-motion";

const ALevelGenerator = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="mx-auto max-w-3xl px-4 py-16">
        <Link
          to="/"
          className="mb-8 inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors"
        >
          <ArrowLeft className="h-4 w-4" /> Back to home
        </Link>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col items-center rounded-2xl border border-border bg-card p-12 shadow-sm text-center"
        >
          <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-primary/10 text-primary">
            <Sparkles className="h-8 w-8" />
          </div>
          <h1 className="mb-3 text-3xl font-bold text-foreground">
            A-Level Maths Question Generator
          </h1>
          <p className="text-lg text-muted-foreground">Coming soon!</p>
          <p className="mt-2 max-w-md text-sm text-muted-foreground">
            We're building a powerful question generator for A-Level Maths students. Stay tuned for updates.
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default ALevelGenerator;
