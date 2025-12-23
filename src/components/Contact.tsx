import { Github, Mail, ArrowUpRight } from "lucide-react";

const Contact = () => {
  return (
    <section className="py-32 px-6 md:px-12 lg:px-24 relative" id="contact">
      <div className="max-w-5xl mx-auto text-center">
        <span className="text-primary text-sm tracking-widest uppercase mb-4 block">
          Get in Touch
        </span>
        <h2 className="text-4xl md:text-6xl lg:text-7xl font-display font-bold mb-8">
          Let's Build <span className="text-gradient">Something</span>
          <br />
          <span className="text-gradient">Amazing</span> Together
        </h2>
        <p className="text-muted-foreground max-w-xl mx-auto mb-12">
          Have a project in mind or just want to chat? I'm always excited to 
          discuss new opportunities and creative ideas.
        </p>
        
        <div className="flex flex-wrap justify-center gap-6">
          <a 
            href="mailto:contact@nazifkeyan.dev"
            className="group flex items-center gap-3 px-8 py-4 bg-primary text-primary-foreground rounded-xl transition-all duration-300 hover:scale-105 glow text-lg font-medium"
          >
            <Mail size={22} />
            <span>Send an Email</span>
            <ArrowUpRight size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
          </a>
          <a 
            href="https://github.com/Keyanooo14"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-3 px-8 py-4 bg-secondary hover:bg-secondary/80 rounded-xl transition-all duration-300 hover:scale-105 card-hover text-lg font-medium"
          >
            <Github size={22} />
            <span>View GitHub</span>
            <ArrowUpRight size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
