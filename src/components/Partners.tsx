import { ExternalLink, Handshake } from "lucide-react";

const partners = [
  {
    name: "Quality Systems Services",
    description: "Quality management consulting and system development. In Binghamton, serving the Southern Tier and Northern PA.",
    url: null,
  },
  {
    name: "Innovative Quality Services",
    description: "Quality Auditing & Management Systems. Located in Syracuse, serving Central New York.",
    url: "https://www.innovativequalityservices.com",
  },
  {
    name: "TDO & DLS Quality Management",
    description: "Comprehensive quality management solutions. In Philadelphia, serving the Mid-Atlantic and NYC area.",
    url: "https://tdo.org/",
    secondaryUrl: "https://dlsqual.com/about-dls/",
  },
  {
    name: "CI Consulting Services",
    description: "Continuous improvement consulting.",
    url: "https://ciconsultingservices.com/",
  },
  {
    name: "RL Quality Management Services",
    description: "Creating a QMS that fits your company's needs—no more, no less. In Binghamton, serving the Southern Tier and Northern PA.",
    url: "https://rl-qms.com/",
  },
];

const Partners = () => {
  return (
    <section id="partners" className="py-24 bg-muted">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center gap-3 mb-4">
            <Handshake className="w-8 h-8 text-gold" />
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground">
              Collaborative <span className="text-gold">Partners</span>
            </h2>
          </div>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            If you don't see what you're looking for, or the services are too far away, try one of our collaborating companies.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {partners.map((partner) => (
            <div
              key={partner.name}
              className="p-6 rounded-xl bg-card shadow-soft border border-border hover:border-gold/30 transition-all duration-300"
            >
              <h3 className="font-serif text-lg font-bold text-foreground mb-2">{partner.name}</h3>
              <p className="text-muted-foreground text-sm mb-4">{partner.description}</p>
              <div className="flex flex-wrap gap-3">
                {partner.url && (
                  <a
                    href={partner.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm font-medium text-gold hover:text-gold-light transition-colors"
                  >
                    Visit Website <ExternalLink className="w-4 h-4" />
                  </a>
                )}
                {partner.secondaryUrl && (
                  <a
                    href={partner.secondaryUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm font-medium text-gold hover:text-gold-light transition-colors"
                  >
                    DLS Quality <ExternalLink className="w-4 h-4" />
                  </a>
                )}
                {!partner.url && (
                  <span className="text-sm text-muted-foreground italic">Contact us for referral</span>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Partners;
