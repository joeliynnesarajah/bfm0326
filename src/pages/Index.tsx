import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Clock, BookOpen, GraduationCap, Sparkles, Zap } from "lucide-react";
import Navbar from "@/components/Navbar";
import { useState, useEffect } from "react";

const madeByWords = ["teachers", "students", "knowledge seekers", "critical thinkers"];
const forWords = ["students", "knowledge seekers", "young mathematicians", "problem solvers"];

const RotatingWord = ({ words }: { words: string[] }) => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % words.length);
    }, 2500);
    return () => clearInterval(interval);
  }, [words.length]);

  return (
    <span className="inline-block relative">
      <AnimatePresence mode="wait">
        <motion.span
          key={words[index]}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.4 }}
          className="inline-block text-primary"
        >
          {words[index]}
        </motion.span>
      </AnimatePresence>
    </span>
  );
};

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.03]" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Ctext x='15' y='35' font-size='24' fill='%23000'%3E%2B%3C/text%3E%3Ctext x='40' y='20' font-size='16' fill='%23000'%3E%C3%B7%3C/text%3E%3Ctext x='5' y='55' font-size='18' fill='%23000'%3E%3D%3C/text%3E%3C/svg%3E")`,
        }} />

        <div className="relative mx-auto max-w-6xl px-4 pb-20 pt-16 md:pb-28 md:pt-24">
          <div className="flex flex-col items-center text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="mb-6 inline-flex items-center gap-2 rounded-full border border-border bg-secondary px-4 py-1.5 text-sm text-muted-foreground"
            >
              <Clock className="h-3.5 w-3.5" />
              New questions every day at 7am
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="mb-6 max-w-4xl text-4xl font-bold tracking-tight text-foreground sm:text-5xl md:text-6xl"
            >
              Daily maths starters made by{" "}
              <RotatingWord words={madeByWords} />
              {" "}for{" "}
              <RotatingWord words={forWords} />
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mb-12 max-w-xl text-lg text-muted-foreground"
            >
              Free daily maths starter questions for Year 7 and Year 8 students, 
              with answers provided the same day.
            </motion.p>

            {/* Year Group Cards */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="grid w-full max-w-3xl gap-5 sm:grid-cols-3"
            >
              <Link
                to="/year/7"
                className="group relative overflow-hidden rounded-2xl border border-border bg-card p-8 text-left shadow-sm transition-all duration-300 hover:shadow-lg hover:border-primary/30 hover:-translate-y-1"
              >
                <div className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary transition-transform duration-300 group-hover:scale-110">
                  <span className="text-lg font-bold">7</span>
                </div>
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-primary text-primary-foreground">
                  <BookOpen className="h-6 w-6" />
                </div>
                <h3 className="mb-1.5 text-xl font-bold text-foreground">Year 7</h3>
                <p className="mb-4 text-sm text-muted-foreground">
                  Daily starter questions tailored for Year 7 students
                </p>
                <div className="flex items-center gap-1.5 text-sm font-medium text-primary">
                  Get started <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </div>
              </Link>

              <Link
                to="/year/8"
                className="group relative overflow-hidden rounded-2xl border border-border bg-card p-8 text-left shadow-sm transition-all duration-300 hover:shadow-lg hover:border-primary/30 hover:-translate-y-1"
              >
                <div className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full bg-accent/20 text-accent transition-transform duration-300 group-hover:scale-110">
                  <span className="text-lg font-bold">8</span>
                </div>
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-accent text-accent-foreground">
                  <GraduationCap className="h-6 w-6" />
                </div>
                <h3 className="mb-1.5 text-xl font-bold text-foreground">Year 8</h3>
                <p className="mb-4 text-sm text-muted-foreground">
                  Daily starter questions tailored for Year 8 students
                </p>
                <div className="flex items-center gap-1.5 text-sm font-medium text-accent">
                  Get started <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </div>
              </Link>

              <Link
                to="/a-level-generator"
                className="group relative overflow-hidden rounded-2xl border border-border bg-card p-8 text-left shadow-sm transition-all duration-300 hover:shadow-lg hover:border-primary/30 hover:-translate-y-1"
              >
                <div className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary transition-transform duration-300 group-hover:scale-110">
                  <span className="text-lg font-bold">A</span>
                </div>
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-primary text-primary-foreground">
                  <Zap className="h-6 w-6" />
                </div>
                <h3 className="mb-1.5 text-xl font-bold text-foreground">A Level</h3>
                <p className="mb-4 text-sm text-muted-foreground">
                  A-Level maths question generator — coming soon
                </p>
                <div className="flex items-center gap-1.5 text-sm font-medium text-primary">
                  Learn more <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </div>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="border-t border-border bg-secondary/50 py-16 md:py-20">
        <div className="mx-auto max-w-6xl px-4">
          <div className="grid gap-8 sm:grid-cols-3">
            {[
              { icon: Clock, title: "Daily at 7am", desc: "Fresh questions posted every morning to start the day" },
              { icon: Sparkles, title: "100% Free", desc: "No sign-up required, no hidden costs — just maths" },
              { icon: BookOpen, title: "Answers Included", desc: "Solutions available the same day for self-checking" },
            ].map((feature, i) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.5 + i * 0.1 }}
                className="flex flex-col items-center text-center"
              >
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
                  <feature.icon className="h-6 w-6" />
                </div>
                <h3 className="mb-2 text-lg font-semibold text-foreground">{feature.title}</h3>
                <p className="text-sm text-muted-foreground">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border py-8">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-4 text-sm text-muted-foreground sm:flex-row">
          <span>© {new Date().getFullYear()} BigFanofMaths</span>
          <div className="flex gap-6">
            <Link to="/about" className="transition-colors hover:text-foreground">About</Link>
            <Link to="/contact" className="transition-colors hover:text-foreground">Contact</Link>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
