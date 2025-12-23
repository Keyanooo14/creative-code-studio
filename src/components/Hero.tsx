import { Github, Mail, MapPin } from "lucide-react";

const Hero = () => {
  return (
    <section className="min-h-screen flex flex-col justify-center px-6 md:px-12 lg:px-24 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/4 -left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse-glow" />
      <div className="absolute bottom-1/4 -right-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-pulse-glow" />
      
      <div className="max-w-5xl relative z-10">
        <div className="flex items-center gap-2 text-muted-foreground mb-6 animate-fade-up">
          <MapPin size={16} className="text-primary" />
          <span className="text-sm tracking-widest uppercase">Bangladesh</span>
        </div>
        
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-display font-bold tracking-tight mb-6 animate-fade-up-delay-1">
          Nazif <span className="text-gradient">Keyan</span>
        </h1>
        
        <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mb-8 animate-fade-up-delay-2 font-light">
          Creative Frontend Developer crafting 
          <span className="text-foreground"> immersive digital experiences </span> 
          with smooth animations & modern interfaces.
        </p>
        
        <div className="flex flex-wrap gap-4 animate-fade-up-delay-3">
          <a 
            href="https://github.com/Keyanooo14" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-6 py-3 bg-secondary hover:bg-secondary/80 rounded-lg transition-all duration-300 hover:scale-105 card-hover"
          >
            <Github size={20} />
            <span>GitHub</span>
          </a>
          <a 
            href="mailto:contact@nazifkeyan.dev" 
            className="flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg transition-all duration-300 hover:scale-105 glow"
          >
            <Mail size={20} />
            <span>Get in Touch</span>
          </a>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-fade-up-delay-4">
        <span className="text-xs text-muted-foreground tracking-widest uppercase">Scroll</span>
        <div className="w-[1px] h-12 bg-gradient-to-b from-primary/50 to-transparent" />
      </div>
    </section>
  );
};

export default Hero;
