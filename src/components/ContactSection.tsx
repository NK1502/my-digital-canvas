import { Download, Github, Linkedin, Mail } from "lucide-react";

const ContactSection = () => {
  return (
    <section id="contact" className="section-padding">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
          <span className="text-gradient">Get In Touch</span>
        </h2>
        <p className="text-muted-foreground mb-10">Feel free to reach out for collaborations or just a friendly hello!</p>

        <div className="flex flex-wrap justify-center gap-4">
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="glass-card px-6 py-3 inline-flex items-center gap-2 text-sm text-foreground hover-lift"
          >
            <Linkedin className="w-4 h-4 text-primary" /> LinkedIn
          </a>
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="glass-card px-6 py-3 inline-flex items-center gap-2 text-sm text-foreground hover-lift"
          >
            <Github className="w-4 h-4 text-primary" /> GitHub
          </a>
          <a
            href="mailto:your@email.com"
            className="glass-card px-6 py-3 inline-flex items-center gap-2 text-sm text-foreground hover-lift"
          >
            <Mail className="w-4 h-4 text-primary" /> Email
          </a>
          <a
            href="/navneet_resume.pdf"
            download
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-semibold text-primary-foreground hover-lift"
            style={{ background: 'var(--gradient-primary)' }}
          >
            <Download className="w-4 h-4" /> Download Resume
          </a>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
