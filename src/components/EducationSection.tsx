import { GraduationCap } from "lucide-react";

const education = [
  {
    institution: "Lovely Professional University",
    location: "Punjab, India",
    degree: "Bachelor of Technology - Computer Science and Engineering",
    period: "Aug 2023 – Present",
    score: "CGPA: 7.3",
  },
  {
    institution: "Mana Vidya School",
    location: "",
    degree: "Intermediate - PCM",
    period: "Apr 2020 – Mar 2022",
    score: "Percentage: 73%",
  },
  {
    institution: "Children Of The New Dawn",
    location: "",
    degree: "Matriculation",
    period: "March 2020",
    score: "Percentage: 78%",
  },
];

const EducationSection = () => {
  return (
    <section id="education" className="section-padding">
      <div className="max-w-4xl mx-auto">
        <h2 className="font-display text-3xl md:text-4xl font-bold text-center mb-4">
          <span className="text-gradient">Education</span>
        </h2>
        <p className="text-muted-foreground text-center mb-12">My academic journey</p>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-6 top-0 bottom-0 w-px bg-border hidden md:block" />

          <div className="space-y-8">
            {education.map((edu, i) => (
              <div key={i} className="flex gap-6 items-start">
                <div className="hidden md:flex w-12 h-12 rounded-full bg-primary/10 border-2 border-primary/30 items-center justify-center flex-shrink-0 relative z-10">
                  <GraduationCap className="w-5 h-5 text-primary" />
                </div>
                <div className="glass-card p-6 flex-1 hover-lift">
                  <span className="text-xs text-primary font-display tracking-wider">{edu.period}</span>
                  <h3 className="font-display text-lg font-semibold text-foreground mt-1">{edu.institution}</h3>
                  {edu.location && <p className="text-xs text-muted-foreground">{edu.location}</p>}
                  <p className="text-sm text-secondary-foreground mt-1">{edu.degree}</p>
                  <span className="inline-block mt-2 text-xs font-semibold text-primary bg-primary/10 px-3 py-1 rounded-full">
                    {edu.score}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
