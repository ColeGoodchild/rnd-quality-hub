import { 
  Cpu, Factory, Plane, Car, Stethoscope, 
  Radio, Lightbulb, AtomIcon, Cog, Monitor 
} from "lucide-react";

const industries = [
  { icon: Cpu, name: "Electronics Assembly" },
  { icon: Factory, name: "Metal Fabrication" },
  { icon: Cog, name: "Plastic Injection Molding" },
  { icon: Monitor, name: "Mainframe Computers" },
  { icon: Radio, name: "Point-of-Sale Equipment" },
  { icon: Plane, name: "Flight Simulators" },
  { icon: Car, name: "Automotive & Heavy Equipment" },
  { icon: Stethoscope, name: "Medical Devices" },
  { icon: Lightbulb, name: "Traffic Controls & Lighting" },
  { icon: AtomIcon, name: "Nuclear Systems" },
];

const additionalIndustries = [
  "Copiers & Office Equipment",
  "Electronic Timers & Controls",
  "Aerospace Electronics",
  "Audio Equipment",
  "Oil & Grease Blending",
  "Gasket & Flooring Materials",
  "Obstruction Lighting",
  "Aircraft Electronic Devices",
  "Switching & Relays",
];

const Industries = () => {
  return (
    <section id="industries" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-4">
            Key <span className="text-gold">Industries</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Our expertise spans across diverse industries, bringing specialized knowledge to each sector's unique quality requirements.
          </p>
        </div>

        {/* Main industries grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 max-w-6xl mx-auto mb-12">
          {industries.map((industry, index) => (
            <div
              key={industry.name}
              className="group flex flex-col items-center text-center p-6 rounded-xl bg-card shadow-soft hover:shadow-medium transition-all duration-300 border border-border hover:border-gold/30"
            >
              <div className="w-12 h-12 rounded-full bg-muted flex items-center justify-center mb-4 group-hover:bg-gold/20 transition-colors duration-300">
                <industry.icon className="w-6 h-6 text-primary group-hover:text-gold transition-colors duration-300" />
              </div>
              <h3 className="text-sm font-semibold text-foreground">{industry.name}</h3>
            </div>
          ))}
        </div>

        {/* Additional industries */}
        <div className="max-w-4xl mx-auto">
          <h3 className="font-serif text-xl font-bold text-foreground text-center mb-6">
            Additional Sectors We Serve
          </h3>
          <div className="flex flex-wrap justify-center gap-3">
            {additionalIndustries.map((industry) => (
              <span
                key={industry}
                className="px-4 py-2 rounded-full bg-muted text-muted-foreground text-sm font-medium hover:bg-gold/20 hover:text-foreground transition-colors duration-200"
              >
                {industry}
              </span>
            ))}
          </div>
        </div>

        {/* Satisfaction guarantee */}
        <div className="mt-16 max-w-3xl mx-auto text-center p-8 rounded-xl bg-gradient-navy">
          <h3 className="font-serif text-2xl font-bold text-primary-foreground mb-4">
            Customer Satisfaction Guaranteed
          </h3>
          <p className="text-primary-foreground/80">
            We stand behind our work with a commitment to your complete satisfaction. 
            Our goal is to deliver measurable improvements in your quality systems.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Industries;
