import Navbar from "@/components/Navbar";
import { Link } from "react-router-dom";

const Contact = () => (
  <div className="min-h-screen bg-background">
    <Navbar />
    <div className="mx-auto max-w-2xl px-4 py-16">
      <h1 className="mb-6 text-3xl font-bold text-foreground">Contact Us</h1>
      <p className="mb-4 text-muted-foreground leading-relaxed">
        Have feedback, questions, or suggestions? We'd love to hear from you. 
        Reach out to us and we'll get back to you as soon as possible.
      </p>
      <p className="mb-8 text-muted-foreground">
        Email: <a href="mailto:bigfanofmathsinfo@gmail.com" className="text-primary hover:underline">bigfanofmathsinfo@gmail.com</a>
      </p>
      <Link to="/" className="text-sm font-medium text-primary hover:underline">
        ← Back to home
      </Link>
    </div>
  </div>
);

export default Contact;
