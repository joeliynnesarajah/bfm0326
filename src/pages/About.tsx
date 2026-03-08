import Navbar from "@/components/Navbar";
import { Link } from "react-router-dom";

const About = () => (
  <div className="min-h-screen bg-background">
    <Navbar />
    <div className="mx-auto max-w-2xl px-4 py-16">
      <h1 className="mb-6 text-3xl font-bold text-foreground">About BigFanofMaths</h1>
      <p className="mb-4 text-muted-foreground leading-relaxed">
        BigFanofMaths is a free website offering daily maths starter questions for Year 7 and Year 8 students. 
        New questions are posted every day at 7am, with answers provided the same day.
      </p>
      <p className="mb-4 text-muted-foreground leading-relaxed">
        Our goal is to make maths practice accessible and consistent — giving students a reliable daily warm-up to sharpen their skills.
      </p>
      <Link to="/" className="text-sm font-medium text-primary hover:underline">
        ← Back to home
      </Link>
    </div>
  </div>
);

export default About;
