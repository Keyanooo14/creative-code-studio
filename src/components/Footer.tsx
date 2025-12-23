const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="py-8 px-6 md:px-12 lg:px-24 border-t border-border/50">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
        <div className="text-sm text-muted-foreground">
          © {currentYear} Nazif Keyan. All rights reserved.
        </div>
        <div className="flex gap-6 text-sm">
          <a href="#about" className="text-muted-foreground hover:text-primary transition-colors link-underline">
            About
          </a>
          <a href="#skills" className="text-muted-foreground hover:text-primary transition-colors link-underline">
            Skills
          </a>
          <a href="#contact" className="text-muted-foreground hover:text-primary transition-colors link-underline">
            Contact
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
