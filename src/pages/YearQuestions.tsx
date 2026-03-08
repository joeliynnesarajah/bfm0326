import { Link, useLocation } from "react-router-dom";
import Navbar from "@/components/Navbar";
import { ArrowLeft } from "lucide-react";

import { year7Questions } from "@/data/year7Questions";
import { year7Answers } from "@/data/year7Answers";
import { year8Questions } from "@/data/year8Questions";
import { year8Answers } from "@/data/year8Answers";

import { getScheduledPowerpoint } from "@/lib/getScheduledPowerpoint";

const YearQuestions = () => {
  const { pathname } = useLocation();

  const isAnswers = pathname.includes("answers");
  const isYear7 = pathname.includes("7");

  let schedule;
  let pageTitle = "";

  if (isYear7 && isAnswers) {
    schedule = year7Answers;
    pageTitle = "Year 7 — Today's Answers";
  } else if (isYear7 && !isAnswers) {
    schedule = year7Questions;
    pageTitle = "Year 7 — Today's Questions";
  } else if (!isYear7 && isAnswers) {
    schedule = year8Answers;
    pageTitle = "Year 8 — Today's Answers";
  } else {
    schedule = year8Questions;
    pageTitle = "Year 8 — Today's Questions";
  }

  const powerpointUrl = getScheduledPowerpoint(schedule);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <div className="mx-auto max-w-5xl px-4 py-16">
        <Link
          to="/"
          className="mb-8 inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to home
        </Link>

        <h1 className="mb-6 text-3xl font-bold text-foreground">
          {pageTitle}
        </h1>

        <div className="rounded-2xl border border-border bg-card p-4 shadow-sm">
          {powerpointUrl ? (
            <iframe
              src={powerpointUrl}
              title={pageTitle}
              className="w-full h-[70vh] rounded-xl border-0"
              allowFullScreen
            />
          ) : (
            <p className="text-muted-foreground">
              No PowerPoint available for today.
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default YearQuestions;