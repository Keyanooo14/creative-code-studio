const skillCategories = [
  {
    title: "Frontend",
    skills: ["React", "TypeScript", "HTML/CSS", "JavaScript"],
  },
  {
    title: "Styling",
    skills: ["TailwindCSS", "Emotion", "Styled-Components"],
  },
  {
    title: "Animation",
    skills: ["Framer Motion", "GSAP", "Lenis", "ScrollTrigger"],
  },
  {
    title: "3D & Visuals",
    skills: ["React Three Fiber", "Lottie", "Rive", "tsParticles"],
  },
];

const Skills = () => {
  return (
    <section className="py-32 px-6 md:px-12 lg:px-24" id="skills">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl md:text-5xl font-display font-bold mb-4">
          What I <span className="text-gradient">Work With</span>
        </h2>
        <p className="text-muted-foreground mb-16 max-w-xl">
          Specialized in creating smooth, performant user interfaces with modern web technologies.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skillCategories.map((category, index) => (
            <div 
              key={category.title}
              className="p-6 rounded-xl bg-card card-hover"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <h3 className="text-xl font-display font-semibold mb-4 text-primary">
                {category.title}
              </h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span 
                    key={skill}
                    className="px-4 py-2 text-sm bg-secondary rounded-lg text-foreground/80 hover:text-primary transition-colors duration-300"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
