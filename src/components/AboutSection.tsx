import profilePhoto from "@/assets/profile-photo.png";

const AboutSection = () => {
  return (
    <section id="about" className="section-padding pt-32">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12">
        <div className="relative">
          <div className="w-64 h-64 rounded-full overflow-hidden border-4 border-primary/30 shadow-lg" style={{ boxShadow: 'var(--shadow-glow)' }}>
            <img src={profilePhoto} alt="Profile" className="w-full h-full object-cover" />
          </div>
          <div className="absolute -bottom-2 -right-2 w-8 h-8 rounded-full bg-primary animate-pulse" />
        </div>
        <div className="flex-1 text-center md:text-left">
          <p className="text-primary font-display text-sm tracking-widest uppercase mb-2">Hello, I'm</p>
          <h1 className="font-display text-4xl md:text-5xl font-bold mb-4">
            <span className="text-gradient">Navneet Kumar</span>
          </h1>
          <p className="text-xl font-display mb-2"><span className="text-gradient font-semibold">An AI ML Engineer</span></p>
          <p className="text-muted-foreground text-lg leading-relaxed max-w-xl">
            I'm an enthusiast Ai ML engineer and developer with a strong interest in software development, machine learning, and problem-solving. I love building real-world applications that solve meaningful problems and continuously strive to improve my skills through hands-on projects and competitive programming.
          

          </p>
        </div>
      </div>
    </section>);

};

export default AboutSection;