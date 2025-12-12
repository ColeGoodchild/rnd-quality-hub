import { Shield, Mail, Phone } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-navy text-primary-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-lg bg-gold flex items-center justify-center">
                <span className="font-serif font-bold text-navy-dark">R&D</span>
              </div>
              <div>
                <h3 className="font-serif font-bold text-lg">RnD Quality Associates</h3>
              </div>
            </div>
            <div className="flex items-center gap-2 text-gold text-sm mb-4">
              <Shield className="w-4 h-4" />
              <span>Veteran Owned Business</span>
            </div>
            <p className="text-primary-foreground/70 text-sm">
              40+ years of excellence in quality management systems consulting, training, and auditing.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-serif font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {["About", "Services", "Industries", "Partners", "Contact"].map((link) => (
                <li key={link}>
                  <a
                    href={`#${link.toLowerCase()}`}
                    className="text-primary-foreground/70 hover:text-gold transition-colors text-sm"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-serif font-bold mb-4">Contact Us</h4>
            <div className="space-y-3">
              <a
                href="mailto:rndquality@hotmail.com"
                className="flex items-center gap-3 text-primary-foreground/70 hover:text-gold transition-colors text-sm"
              >
                <Mail className="w-4 h-4" />
                rndquality@hotmail.com
              </a>
              <a
                href="tel:315-247-6856"
                className="flex items-center gap-3 text-primary-foreground/70 hover:text-gold transition-colors text-sm"
              >
                <Phone className="w-4 h-4" />
                315-247-6856
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 pt-8 text-center">
          <p className="text-primary-foreground/60 text-sm">
            © {currentYear} RnD Quality Associates. All rights reserved. Customer Satisfaction Guaranteed.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
