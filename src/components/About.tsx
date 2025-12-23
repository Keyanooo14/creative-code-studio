const About = () => {
  return (
    <section className="py-32 px-6 md:px-12 lg:px-24 relative" id="about">
      {/* Decorative line */}
      <div className="absolute left-6 md:left-12 lg:left-24 top-0 w-[1px] h-24 bg-gradient-to-b from-transparent to-primary/30" />
      
      <div className="max-w-5xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div>
            <span className="text-primary text-sm tracking-widest uppercase mb-4 block">
              About Me
            </span>
            <h2 className="text-3xl md:text-5xl font-display font-bold mb-6">
              Crafting Digital <span className="text-gradient">Experiences</span>
            </h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                I'm a frontend developer from Bangladesh with a passion for creating 
                visually stunning and performant web applications. My focus lies in 
                building smooth, animated interfaces that leave lasting impressions.
              </p>
              <p>
                Beyond web development, I explore cybersecurity concepts and enjoy 
                gaming on my trusty Intel HD 4600. I believe in continuous learning 
                and pushing the boundaries of what's possible on the web.
              </p>
            </div>
          </div>
          
          <div className="relative">
            <div className="aspect-square rounded-2xl bg-gradient-to-br from-primary/20 to-transparent p-[1px]">
              <div className="w-full h-full rounded-2xl bg-card flex items-center justify-center">
                <div className="text-center p-8">
                  <div className="text-6xl font-display font-bold text-gradient mb-2">NK</div>
                  <div className="text-sm text-muted-foreground tracking-widest uppercase">
                    Creative Developer
                  </div>
                </div>
              </div>
            </div>
            {/* Floating elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 border border-primary/20 rounded-xl animate-float" />
            <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-primary/10 rounded-lg animate-float" style={{ animationDelay: '1s' }} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
