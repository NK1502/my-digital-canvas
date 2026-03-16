import { ExternalLink } from "lucide-react";
import certImg from "@/assets/certificate-placeholder.jpg";

const CertificatesSection = () => {
  return (
    <section id="certificates" className="section-padding">
      <div className="max-w-6xl mx-auto">
        <h2 className="font-display text-3xl md:text-4xl font-bold text-center mb-4">
          <span className="text-gradient">Certificates</span>
        </h2>
        <p className="text-muted-foreground text-center mb-12">Professional certifications & courses</p>

        <div className="glass-card overflow-hidden hover-lift max-w-3xl mx-auto">
          <div className="md:flex">
            <div className="md:w-1/2">
              <img alt="Certificate" className="w-full h-full object-cover" src="/lovable-uploads/8f32559a-2378-4fd0-83d3-e9d3b16b7114.png" />
            </div>
            <div className="md:w-1/2 p-6 flex flex-col justify-center">
              <h3 className="font-display text-xl font-bold text-foreground mb-3">Certificate of Achievement – Python Development</h3>
              <ul className="space-y-2 text-sm text-muted-foreground list-disc list-inside mb-4">
                <li>Completed professional training in Python Development.</li>
                <li>Gained hands-on experience with Python frameworks, libraries, and best practices.</li>
                <li>Demonstrated proficiency in building scalable Python applications.</li>
              </ul>
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm text-primary hover:underline">
                
                <ExternalLink className="w-4 h-4" /> View Certificate
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>);

};

export default CertificatesSection;