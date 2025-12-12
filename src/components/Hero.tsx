import { ChevronDown, Shield, Award, Clock } from "lucide-react";
import { Button } from "./ui/button";
import heroImage from "@/assets/hero-ship.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      />
      
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-overlay" />
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 pt-32 pb-20">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gold/20 border border-gold/30 text-gold mb-8 animate-fade-in">
            <Shield className="w-4 h-4" />
            <span className="text-sm font-semibold tracking-wide uppercase">Veteran Owned & Operated</span>
          </div>
          
          <h1 
            className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground leading-tight mb-6 opacity-0 animate-fade-in-up"
            style={{ animationDelay: "0.2s" }}
          >
            Excellence in Quality
            <span className="block text-gold mt-2">Management Systems</span>
          </h1>
          
          <p 
            className="text-lg md:text-xl text-primary-foreground/80 max-w-2xl mx-auto mb-10 opacity-0 animate-fade-in-up"
            style={{ animationDelay: "0.4s" }}
          >
            40+ years of experience providing consulting, training, and internal auditing services. 
            ISO 9001, AS 9100, and more — delivering the very best value.
          </p>
          
          <div 
            className="flex flex-col sm:flex-row gap-4 justify-center mb-16 opacity-0 animate-fade-in-up"
            style={{ animationDelay: "0.6s" }}
          >
            <Button variant="hero" size="xl">
              Our Services
            </Button>
            <Button variant="heroOutline" size="xl">
              Contact Us
            </Button>
          </div>

          {/* Stats */}
          <div 
            className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto opacity-0 animate-fade-in-up"
            style={{ animationDelay: "0.8s" }}
          >
            <div className="flex items-center justify-center gap-4 p-4 rounded-lg bg-primary-foreground/5 backdrop-blur-sm border border-primary-foreground/10">
              <Clock className="w-8 h-8 text-gold" />
              <div className="text-left">
                <p className="text-2xl font-bold text-primary-foreground">40+</p>
                <p className="text-sm text-primary-foreground/70">Years Experience</p>
              </div>
            </div>
            <div className="flex items-center justify-center gap-4 p-4 rounded-lg bg-primary-foreground/5 backdrop-blur-sm border border-primary-foreground/10">
              <Award className="w-8 h-8 text-gold" />
              <div className="text-left">
                <p className="text-2xl font-bold text-primary-foreground">100%</p>
                <p className="text-sm text-primary-foreground/70">Satisfaction</p>
              </div>
            </div>
            <div className="flex items-center justify-center gap-4 p-4 rounded-lg bg-primary-foreground/5 backdrop-blur-sm border border-primary-foreground/10">
              <Shield className="w-8 h-8 text-gold" />
              <div className="text-left">
                <p className="text-2xl font-bold text-primary-foreground">Veteran</p>
                <p className="text-sm text-primary-foreground/70">Owned Business</p>
              </div>
            </div>
          </div>
        </div>
        
        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <ChevronDown className="w-8 h-8 text-gold/70" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
