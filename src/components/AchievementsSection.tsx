import { Trophy, Code, Cpu } from "lucide-react";

const achievements = [
  {
    icon: Code,
    title: "200+ DSA Problems Solved",
    description: "Solved 200+ DSA problems across LeetCode and GeeksforGeeks, strengthening problem-solving and algorithmic thinking skills.",
    date: "Oct 2025",
    tag: "LPU",
  },
  {
    icon: Cpu,
    title: "AI-based Student Loan Website",
    description: "Designed an AI-based Student Loan Assistance website using Python and Machine Learning algorithms for personalised financial insights.",
    date: "2025",
    tag: "Project",
  },
];

const AchievementsSection = () => {
  return (
    <section id="achievements" className="section-padding">
      <div className="max-w-6xl mx-auto">
        <h2 className="font-display text-3xl md:text-4xl font-bold text-center mb-4">
          <span className="text-gradient">Achievements</span>
        </h2>
        <p className="text-muted-foreground text-center mb-12">Milestones & accomplishments</p>

        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {achievements.map((item, i) => (
            <div key={i} className="glass-card p-6 hover-lift">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                  <item.icon className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <span className="text-xs text-primary font-display tracking-wider">{item.date}</span>
                  <span className="mx-2 text-border">•</span>
                  <span className="text-xs text-muted-foreground">{item.tag}</span>
                </div>
              </div>
              <h3 className="font-display text-lg font-semibold text-foreground mb-2">{item.title}</h3>
              <p className="text-sm text-muted-foreground">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AchievementsSection;
