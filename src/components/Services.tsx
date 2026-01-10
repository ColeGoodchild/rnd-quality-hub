import { BookOpen, ClipboardCheck, TrendingUp, Users, FileCheck, Settings } from "lucide-react";
import { Button } from "./ui/button";

const services = [
  {
    icon: ClipboardCheck,
    title: "Internal Auditing",
    description: "Comprehensive internal audit services for ISO 9001, AS 9100, and IATF 16949 standards to ensure compliance and identify improvement opportunities.",
  },
  {
    icon: BookOpen,
    title: "Training Programs",
    description: "Internal auditor training programs customized to your industry needs, covering ISO 9001, AS 9100, and specialized quality standards.",
  },
  {
    icon: Settings,
    title: "QMS Development",
    description: "Complete quality and business management system development and improvement services, from initial design to full implementation.",
  },
  {
    icon: TrendingUp,
    title: "Continual Improvement",
    description: "Project development and management using proven methodologies including Lean, Six-Sigma, 8D, 5 Why's, FMEA, and DOE.",
  },
  {
    icon: Users,
    title: "Consulting Services",
    description: "Expert consulting to guide your organization through quality certifications, system improvements, and best practices implementation.",
  },
  {
    icon: FileCheck,
    title: "Quality Planning",
    description: "Strategic quality planning including metrics development, process controls, and documentation systems tailored to your operations.",
  },
];

const Services = () => {
  return (
    <section id="services" className="py-24 bg-muted">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-4">
            Our <span className="text-gold">Services</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Comprehensive quality management solutions designed to help your organization achieve excellence and maintain competitive advantage.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="group p-8 rounded-xl bg-card shadow-soft hover:shadow-medium transition-all duration-300 border border-border hover:border-gold/30 hover:-translate-y-1"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-14 h-14 rounded-lg bg-primary flex items-center justify-center mb-6 group-hover:bg-gold transition-colors duration-300">
                <service.icon className="w-7 h-7 text-primary-foreground group-hover:text-navy-dark transition-colors duration-300" />
              </div>
              <h3 className="font-serif text-xl font-bold text-foreground mb-3">{service.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{service.description}</p>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button variant="gold" size="lg">
            <a href="#contact">Request a Consultation</a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Services;
