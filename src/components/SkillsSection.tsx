import { Code, Brain, Users, MessageSquare, Lightbulb, Clock } from "lucide-react";

const techSkills = [
  { name: "Python", level: 85 },
  { name: "Flask", level: 75 },
  { name: "C++", level: 80 },
  { name: "Django", level: 75 },
  { name: "Data Structures & Algorithms", level: 80 },
  { name: "Machine Learning", level: 65 },
  { name: "Git & GitHub", level: 80 },
  { name: "SQL", level: 70 },
];

const softSkills = [
  { name: "Problem Solving", icon: Brain },
  { name: "Team Collaboration", icon: Users },
  { name: "Communication", icon: MessageSquare },
  { name: "Critical Thinking", icon: Lightbulb },
  { name: "Time Management", icon: Clock },
  { name: "Adaptability", icon: Code },
];

const SkillsSection = () => {
  return (
    <section id="skills" className="section-padding">
      <div className="max-w-6xl mx-auto">
        <h2 className="font-display text-3xl md:text-4xl font-bold text-center mb-4">
          <span className="text-gradient">Skills</span>
        </h2>
        <p className="text-muted-foreground text-center mb-12">Technical expertise & interpersonal abilities</p>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Tech Skills */}
          <div>
            <h3 className="font-display text-xl font-semibold text-foreground mb-6 flex items-center gap-2">
              <Code className="w-5 h-5 text-primary" /> Technical Skills
            </h3>
            <div className="space-y-4">
              {techSkills.map((skill) => (
                <div key={skill.name}>
                  <div className="flex justify-between mb-1">
                    <span className="text-sm text-secondary-foreground">{skill.name}</span>
                    <span className="text-sm text-muted-foreground">{skill.level}%</span>
                  </div>
                  <div className="h-2 rounded-full bg-secondary">
                    <div
                      className="h-full rounded-full transition-all duration-700"
                      style={{
                        width: `${skill.level}%`,
                        background: 'var(--gradient-primary)',
                      }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Soft Skills */}
          <div>
            <h3 className="font-display text-xl font-semibold text-foreground mb-6 flex items-center gap-2">
              <Brain className="w-5 h-5 text-primary" /> Soft Skills
            </h3>
            <div className="grid grid-cols-2 gap-4">
              {softSkills.map((skill) => (
                <div key={skill.name} className="glass-card p-4 flex items-center gap-3 hover-lift">
                  <skill.icon className="w-5 h-5 text-primary flex-shrink-0" />
                  <span className="text-sm text-secondary-foreground">{skill.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
