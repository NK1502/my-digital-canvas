import { ExternalLink } from "lucide-react";
import projectImg from "@/assets/project-loan-app.jpg";

const ProjectsSection = () => {
  return (
    <section id="projects" className="section-padding">
      <div className="max-w-6xl mx-auto">
        <h2 className="font-display text-3xl md:text-4xl font-bold text-center mb-4">
          <span className="text-gradient">Projects</span>
        </h2>
        <p className="text-muted-foreground text-center mb-12">Real-world applications I've built</p>

        <div className="glass-card overflow-hidden hover-lift max-w-3xl mx-auto">
          <div className="md:flex">
            <div className="md:w-1/2">
              <img src={projectImg} alt="Student Loan Assistance" className="w-full h-full object-cover" />
            </div>
            <div className="md:w-1/2 p-6 flex flex-col justify-center">
              <div className="flex items-center gap-2 mb-1">
                <span className="text-xs text-primary font-display tracking-wider uppercase">Feb 2025 – Apr 2025</span>
              </div>
              <h3 className="font-display text-xl font-bold text-foreground mb-3">Student Loan Assistance</h3>
              <ul className="space-y-2 text-sm text-muted-foreground list-disc list-inside mb-4">
                <li>Built a Flask web app helping students analyse income, expenses, and loan details for personalised repayment strategies.</li>
                <li>Implemented rule-based decision logic and a clean, responsive UI for clear repayment recommendations.</li>
                <li>Deployed on a structured backend–frontend architecture integrating HTML/CSS templates with Python.</li>
              </ul>
              <a
                href="https://project-ai-assistance.onrender.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm text-primary hover:underline"
              >
                <ExternalLink className="w-4 h-4" /> View Live Project
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
