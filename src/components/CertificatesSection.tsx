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

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* Certificate 1 - Python Development */}
          <div className="glass-card overflow-hidden hover-lift">
            <div>
              <img alt="Python Development Certificate" className="w-full h-48 object-cover" src="/lovable-uploads/8f32559a-2378-4fd0-83d3-e9d3b16b7114.png" />
            </div>
            <div className="p-6">
              <h3 className="font-display text-xl font-bold text-foreground mb-3">Certificate of Achievement – Python Development</h3>
              <ul className="space-y-2 text-sm text-muted-foreground list-disc list-inside mb-4">
                <li>Completed professional training in Python Development.</li>
                <li>Gained hands-on experience with Python frameworks, libraries, and best practices.</li>
                <li>Demonstrated proficiency in building scalable Python applications.</li>
              </ul>
              <a href="#" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-sm text-primary hover:underline">
                <ExternalLink className="w-4 h-4" /> View Certificate
              </a>
            </div>
          </div>

          {/* Certificate 2 - ChatGPT-4 Prompt Engineering */}
          <div className="glass-card overflow-hidden hover-lift">
            <div>
              <img alt="Infosys ChatGPT-4 Prompt Engineering Certificate" className="w-full h-48 object-cover object-top" src="/lovable-uploads/certificate-infosys.jpg" />
            </div>
            <div className="p-6">
              <h3 className="font-display text-xl font-bold text-foreground mb-3">Course Completion – ChatGPT-4 Prompt Engineering</h3>
              <ul className="space-y-2 text-sm text-muted-foreground list-disc list-inside mb-4">
                <li>Successfully completed Infosys course on ChatGPT-4 Prompt Engineering, Generative AI & LLM.</li>
                <li>Gained expertise in crafting effective prompts for large language models.</li>
                <li>Developed practical skills in leveraging Generative AI for real-world applications.</li>
              </ul>
              <a href="https://verify.onwingspan.com" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-sm text-primary hover:underline">
                <ExternalLink className="w-4 h-4" /> Verify Certificate
              </a>
            </div>
          </div>

          {/* Certificate 3 - Packet Switching Networks */}
          <div className="glass-card overflow-hidden hover-lift">
            <div>
              <img alt="Packet Switching Networks and Algorithms Certificate" className="w-full h-48 object-cover object-top" src="/lovable-uploads/certificate-packet-switching.jpg" />
            </div>
            <div className="p-6">
              <h3 className="font-display text-xl font-bold text-foreground mb-3">Packet Switching Networks and Algorithms</h3>
              <ul className="space-y-2 text-sm text-muted-foreground list-disc list-inside mb-4">
                <li>Completed online course by University of Colorado System via Coursera.</li>
                <li>Learned core concepts of packet switching, routing algorithms, and network protocols.</li>
                <li>Gained understanding of network architecture and data transmission techniques.</li>
              </ul>
              <a href="https://www.coursera.org/verify/8L00YXDL" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-sm text-primary hover:underline">
                <ExternalLink className="w-4 h-4" /> Verify Certificate
              </a>
            </div>
          </div>
          {/* Certificate 4 - Hardware and Operating Systems */}
          <div className="glass-card overflow-hidden hover-lift">
            <div>
              <img alt="Introduction to Hardware and Operating Systems Certificate" className="w-full h-48 object-cover object-top" src="/lovable-uploads/certificate-hardware-os.jpg" />
            </div>
            <div className="p-6">
              <h3 className="font-display text-xl font-bold text-foreground mb-3">Introduction to Hardware and Operating Systems</h3>
              <ul className="space-y-2 text-sm text-muted-foreground list-disc list-inside mb-4">
                <li>Completed online course authorized by IBM and offered through Coursera.</li>
                <li>Gained foundational knowledge of computer hardware components and operating system concepts.</li>
                <li>Developed understanding of system architecture, memory management, and OS functionalities.</li>
              </ul>
              <a href="https://coursera.org/verify/WSMWVP2H1EBV" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-sm text-primary hover:underline">
                <ExternalLink className="w-4 h-4" /> View Certificate
              </a>
            </div>
          </div>
          {/* Certificate 5 - One India One World */}
          <div className="glass-card overflow-hidden hover-lift">
            <div>
              <img alt="One India One World Certificate" className="w-full h-48 object-cover object-top" src="/lovable-uploads/certificate-one-india.jpg" />
            </div>
            <div className="p-6">
              <h3 className="font-display text-xl font-bold text-foreground mb-3">Certificate of Recognition – ONE INDIA ONE WORLD 2025</h3>
              <ul className="space-y-2 text-sm text-muted-foreground list-disc list-inside mb-4">
                <li>Recognized for contribution as Music Participant in the ONE INDIA - ONE WORLD 2025 event.</li>
                <li>Event organized by Department of Cultural Affairs, Lovely Professional University.</li>
                <li>Demonstrated artistic talent and cultural engagement at a university-level event.</li>
              </ul>
              <a href="#" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-sm text-primary hover:underline">
                <ExternalLink className="w-4 h-4" /> View Certificate
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>);

};

export default CertificatesSection;