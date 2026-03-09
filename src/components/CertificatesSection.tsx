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
              <img src={certImg} alt="Certificate" className="w-full h-full object-cover" />
            </div>
            <div className="md:w-1/2 p-6 flex flex-col justify-center">
              <h3 className="font-display text-xl font-bold text-foreground mb-3">Certificate of Achievement</h3>
              <ul className="space-y-2 text-sm text-muted-foreground list-disc list-inside mb-4">
                <li>Completed a professional certification in Computer Science fundamentals.</li>
                <li>Demonstrated proficiency in key technical areas and problem-solving.</li>
                <li>Verified credential with industry-recognized standards.</li>
              </ul>
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm text-primary hover:underline"
              >
                <ExternalLink className="w-4 h-4" /> View Certificate
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CertificatesSection;
