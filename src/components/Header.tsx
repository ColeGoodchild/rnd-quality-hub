import { useState } from "react";
import { Menu, X, Phone, Mail } from "lucide-react";
import { Button } from "./ui/button";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { href: "#about", label: "About" },
    { href: "#services", label: "Services" },
    { href: "#industries", label: "Industries" },
    { href: "#partners", label: "Partners" },
    { href: "#contact", label: "Contact" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-navy-dark/95 backdrop-blur-sm border-b border-gold/20">
      {/* Top bar */}
      <div className="hidden md:flex justify-end items-center gap-6 px-6 py-2 bg-navy-dark text-sm">
        <a href="tel:315-247-6856" className="flex items-center gap-2 text-gold/90 hover:text-gold transition-colors">
          <Phone className="w-3.5 h-3.5" />
          315-247-6856
        </a>
        <a href="mailto:rndquality@hotmail.com" className="flex items-center gap-2 text-gold/90 hover:text-gold transition-colors">
          <Mail className="w-3.5 h-3.5" />
          rndquality@hotmail.com
        </a>
      </div>

      {/* Main nav */}
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <a href="#" className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-lg bg-gold flex items-center justify-center">
              <span className="font-serif font-bold text-navy-dark text-xl">R&D</span>
            </div>
            <div className="hidden sm:block">
              <h1 className="font-serif font-bold text-primary-foreground text-lg leading-tight">
                RnD Quality Associates
              </h1>
              <p className="text-gold text-xs tracking-widest uppercase">Veteran Owned</p>
            </div>
          </a>

          {/* Desktop navigation */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-primary-foreground/90 hover:text-gold font-medium transition-colors duration-200"
              >
                {link.label}
              </a>
            ))}
            <Button 
              variant="hero" 
              size="sm"
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Get a Quote
            </Button>
          </div>

          {/* Mobile menu button */}
          <button
            className="lg:hidden text-primary-foreground p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile navigation */}
        {isMenuOpen && (
          <div className="lg:hidden mt-4 pb-4 border-t border-gold/20 pt-4">
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-primary-foreground/90 hover:text-gold font-medium transition-colors duration-200"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.label}
                </a>
              ))}
              <Button 
                variant="hero" 
                size="sm" 
                className="mt-2 w-full"
                onClick={() => {
                  setIsMenuOpen(false);
                  document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                Get a Quote
              </Button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
