import { Target, Eye, Compass } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-4">
            About <span className="text-gold">RnD Quality Associates</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            With over four decades of experience, we bring unparalleled expertise to quality management systems development and improvement.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* Mission */}
          <div className="group p-8 rounded-xl bg-card shadow-soft hover:shadow-medium transition-all duration-300 border border-border hover:border-gold/30">
            <div className="w-14 h-14 rounded-lg bg-primary flex items-center justify-center mb-6 group-hover:bg-gold transition-colors duration-300">
              <Target className="w-7 h-7 text-primary-foreground group-hover:text-navy-dark transition-colors duration-300" />
            </div>
            <h3 className="font-serif text-xl font-bold text-foreground mb-4">Mission Statement</h3>
            <p className="text-muted-foreground leading-relaxed">
              Providing consulting, training, and internal auditing services for the very best value. We are committed to helping organizations achieve and maintain excellence in quality management.
            </p>
          </div>

          {/* Vision */}
          <div className="group p-8 rounded-xl bg-card shadow-soft hover:shadow-medium transition-all duration-300 border border-border hover:border-gold/30">
            <div className="w-14 h-14 rounded-lg bg-primary flex items-center justify-center mb-6 group-hover:bg-gold transition-colors duration-300">
              <Eye className="w-7 h-7 text-primary-foreground group-hover:text-navy-dark transition-colors duration-300" />
            </div>
            <h3 className="font-serif text-xl font-bold text-foreground mb-4">Vision Statement</h3>
            <p className="text-muted-foreground leading-relaxed">
              To be the trusted partner of choice for organizations seeking to elevate their quality standards, fostering a culture of continuous improvement and operational excellence across all industries.
            </p>
          </div>

          {/* Experience */}
          <div className="group p-8 rounded-xl bg-card shadow-soft hover:shadow-medium transition-all duration-300 border border-border hover:border-gold/30 md:col-span-2 lg:col-span-1">
            <div className="w-14 h-14 rounded-lg bg-primary flex items-center justify-center mb-6 group-hover:bg-gold transition-colors duration-300">
              <Compass className="w-7 h-7 text-primary-foreground group-hover:text-navy-dark transition-colors duration-300" />
            </div>
            <h3 className="font-serif text-xl font-bold text-foreground mb-4">Our Experience</h3>
            <p className="text-muted-foreground leading-relaxed">
              Experienced in developing quality management systems based on ISO 9001, AS 9100, TS 16949, QS 9000, and NQ-1E (nuclear). Expertise in Lean, Six-Sigma, 8D, 5 Why's, FMEA, and DOE methodologies.
            </p>
          </div>
        </div>

        {/* Detailed expertise */}
        <div className="mt-16 max-w-4xl mx-auto p-8 rounded-xl bg-gradient-navy text-primary-foreground">
          <h3 className="font-serif text-2xl font-bold mb-6 text-center">Our Core Competencies</h3>
          <div className="grid md:grid-cols-2 gap-6">
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <span className="w-2 h-2 rounded-full bg-gold mt-2 shrink-0" />
                <span className="text-primary-foreground/90">Quality strategic plans and metrics development</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-2 h-2 rounded-full bg-gold mt-2 shrink-0" />
                <span className="text-primary-foreground/90">Product and process controls implementation</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-2 h-2 rounded-full bg-gold mt-2 shrink-0" />
                <span className="text-primary-foreground/90">Corrective and preventive action systems</span>
              </li>
            </ul>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <span className="w-2 h-2 rounded-full bg-gold mt-2 shrink-0" />
                <span className="text-primary-foreground/90">Training plans and competency development</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-2 h-2 rounded-full bg-gold mt-2 shrink-0" />
                <span className="text-primary-foreground/90">Continual improvement using Lean & Six-Sigma</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-2 h-2 rounded-full bg-gold mt-2 shrink-0" />
                <span className="text-primary-foreground/90">Data gathering, analysis, and quality planning</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
