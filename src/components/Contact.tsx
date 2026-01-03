import { useState } from "react";
import { Mail, Phone, Clock } from "lucide-react";
import { Button } from "./ui/button";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      const response = await fetch("https://usebasin.com/f/aefe40d5a47a", {
        method: "POST",
        body: formData,
      });

      if (response.ok) {
        toast({
          title: "Thank you for your message!",
          description: "We'll get back to you within 48 hours.",
        });
        form.reset();
      } else {
        toast({
          title: "Something went wrong",
          description: "Please try again or contact us directly.",
          variant: "destructive",
        });
      }
    } catch (error) {
      toast({
        title: "Something went wrong",
        description: "Please try again or contact us directly.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };
  return (
    <section id="contact" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-4">
            Get in <span className="text-gold">Touch</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Ready to improve your quality management systems? Contact us today to discuss how we can help your organization achieve excellence.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* Contact info */}
          <div className="space-y-8">
            <div>
              <h3 className="font-serif text-2xl font-bold text-foreground mb-6">
                Contact Information
              </h3>
              <p className="text-muted-foreground mb-8">
                We're here to answer your questions and help you get started on your quality journey.
              </p>
            </div>

            <div className="space-y-6">
              <a
                href="mailto:rndquality@hotmail.com"
                className="flex items-start gap-4 p-4 rounded-lg bg-muted hover:bg-muted/80 transition-colors group"
              >
                <div className="w-12 h-12 rounded-lg bg-primary flex items-center justify-center shrink-0 group-hover:bg-gold transition-colors">
                  <Mail className="w-5 h-5 text-primary-foreground group-hover:text-navy-dark transition-colors" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground">Email Us</h4>
                  <p className="text-gold">rndquality@hotmail.com</p>
                </div>
              </a>

              <a
                href="tel:315-247-6856"
                className="flex items-start gap-4 p-4 rounded-lg bg-muted hover:bg-muted/80 transition-colors group"
              >
                <div className="w-12 h-12 rounded-lg bg-primary flex items-center justify-center shrink-0 group-hover:bg-gold transition-colors">
                  <Phone className="w-5 h-5 text-primary-foreground group-hover:text-navy-dark transition-colors" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground">Call Us</h4>
                  <p className="text-gold">315-247-6856</p>
                </div>
              </a>

              <div className="flex items-start gap-4 p-4 rounded-lg bg-muted">
                <div className="w-12 h-12 rounded-lg bg-primary flex items-center justify-center shrink-0">
                  <Clock className="w-5 h-5 text-primary-foreground" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground">Availability</h4>
                  <p className="text-muted-foreground">Mon - Fri: 8:00 AM - 5:00 PM EST</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact form */}
          <div className="p-8 rounded-xl bg-card shadow-medium border border-border">
            <h3 className="font-serif text-xl font-bold text-foreground mb-6">
              Send Us a Message
            </h3>
            <form 
              onSubmit={handleSubmit}
              className="space-y-5"
            >
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="w-full px-4 py-3 rounded-lg border border-input bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-gold/50 focus:border-gold transition-colors"
                    placeholder="John Smith"
                  />
                </div>
                <div>
                  <label htmlFor="company" className="block text-sm font-medium text-foreground mb-2">
                    Company
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    className="w-full px-4 py-3 rounded-lg border border-input bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-gold/50 focus:border-gold transition-colors"
                    placeholder="Your Company"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full px-4 py-3 rounded-lg border border-input bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-gold/50 focus:border-gold transition-colors"
                  placeholder="john@company.com"
                />
              </div>
              <div>
                <label htmlFor="service" className="block text-sm font-medium text-foreground mb-2">
                  Service Interested In
                </label>
                <select
                  id="service"
                  name="service"
                  className="w-full px-4 py-3 rounded-lg border border-input bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-gold/50 focus:border-gold transition-colors"
                >
                  <option value="">Select a service</option>
                  <option value="auditing">Internal Auditing</option>
                  <option value="training">Training Programs</option>
                  <option value="qms">QMS Development</option>
                  <option value="improvement">Continual Improvement</option>
                  <option value="consulting">Consulting Services</option>
                  <option value="other">Other</option>
                </select>
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  className="w-full px-4 py-3 rounded-lg border border-input bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-gold/50 focus:border-gold transition-colors resize-none"
                  placeholder="Tell us about your quality management needs..."
                />
              </div>
              <Button type="submit" variant="gold" size="lg" className="w-full" disabled={isSubmitting}>
                {isSubmitting ? "Sending..." : "Send Message"}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
