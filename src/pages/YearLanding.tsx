import { Link, useParams } from "react-router-dom";
import Navbar from "@/components/Navbar";
import { ArrowLeft, FileQuestion, FileCheck } from "lucide-react";
import { motion } from "framer-motion";

const YearLanding = () => {
  const { year } = useParams();

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="mx-auto max-w-3xl px-4 py-16">
        <Link to="/" className="mb-8 inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors">
          <ArrowLeft className="h-4 w-4" /> Back to home
        </Link>
        <h1 className="mb-2 text-3xl font-bold text-foreground font-['Space_Grotesk']">
          Year {year}
        </h1>
        <p className="mb-8 text-muted-foreground">Choose what you'd like to view today.</p>

        <div className="grid gap-5 sm:grid-cols-2">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }}>
            <Link
              to={`/year${year}-today`}
              className="group flex flex-col items-center gap-3 rounded-2xl border border-border bg-card p-8 shadow-sm transition-all duration-300 hover:shadow-lg hover:border-primary/30 hover:-translate-y-1"
            >
              <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-primary text-primary-foreground">
                <FileQuestion className="h-7 w-7" />
              </div>
              <h2 className="text-xl font-bold text-foreground">Questions</h2>
              <p className="text-sm text-muted-foreground text-center">Today's daily starter questions</p>
            </Link>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4, delay: 0.1 }}>
            <Link
              to={`/year${year}-answers`}
              className="group flex flex-col items-center gap-3 rounded-2xl border border-border bg-card p-8 shadow-sm transition-all duration-300 hover:shadow-lg hover:border-accent/30 hover:-translate-y-1"
            >
              <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-accent text-accent-foreground">
                <FileCheck className="h-7 w-7" />
              </div>
              <h2 className="text-xl font-bold text-foreground">Answers</h2>
              <p className="text-sm text-muted-foreground text-center">Today's solutions for self-checking</p>
            </Link>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default YearLanding;
