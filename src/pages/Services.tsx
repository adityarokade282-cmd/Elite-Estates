import { Link } from 'react-router-dom';
import {
  Home as HomeIcon,
  TrendingUp,
  KeyRound,
  Building2,
  PiggyBank,
  Calculator,
  ArrowRight,
  CheckCircle2,
} from 'lucide-react';
import { SectionHeading } from '@/components/SectionHeading';
import { services } from '@/data/content';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Home: HomeIcon,
  TrendingUp,
  KeyRound,
  Building2,
  PiggyBank,
  Calculator,
};

const process = [
  { step: '01', title: 'Consultation', description: 'We start with a detailed consultation to understand your needs, budget, and preferences.' },
  { step: '02', title: 'Property Search', description: 'Our team curates properties that match your criteria from our extensive network.' },
  { step: '03', title: 'Site Visits', description: 'We arrange and accompany you on property visits, providing expert insights.' },
  { step: '04', title: 'Legal Verification', description: 'Our legal team verifies all documents and ensures a clean title before you commit.' },
  { step: '05', title: 'Negotiation', description: 'We negotiate the best price and terms on your behalf, saving you money and stress.' },
  { step: '06', title: 'Closure', description: 'We handle all paperwork and formalities, ensuring a smooth and timely closure.' },
];

export function Services() {
  const ref = useScrollAnimation<HTMLDivElement>();

  return (
    <div ref={ref} className="pt-20">
      {/* Header */}
      <section className="bg-[#0a1f3c] py-16 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#c9a84a]/5 rounded-full blur-3xl" />
        <div className="section-padding relative z-10 text-center">
          <span className="fade-in-up text-xs font-semibold uppercase tracking-[0.25em] text-[#c9a84a] mb-3 block">
            What We Do
          </span>
          <h1 className="fade-in-up font-serif text-4xl md:text-5xl font-bold text-white mb-4">
            Our Services
          </h1>
          <p className="fade-in-up text-gray-300 max-w-2xl mx-auto">
            Comprehensive real estate solutions designed to meet every need, from buying your first
            home to building a property investment portfolio.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24 bg-white">
        <div className="section-padding">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, i) => {
              const Icon = iconMap[service.icon] || HomeIcon;
              return (
                <div
                  key={service.id}
                  className="fade-in-up group bg-gray-50 p-8 border border-gray-100 hover:border-[#c9a84a] hover:shadow-xl transition-all duration-500"
                  style={{ transitionDelay: `${i * 100}ms` }}
                >
                  <div className="w-14 h-14 bg-[#0a1f3c] flex items-center justify-center mb-5 group-hover:bg-[#c9a84a] transition-colors duration-300">
                    <Icon className="w-7 h-7 text-[#c9a84a] group-hover:text-[#0a1f3c] transition-colors" />
                  </div>
                  <h3 className="font-serif text-xl font-bold text-[#0a1f3c] mb-3 group-hover:text-[#c9a84a] transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-sm text-gray-600 leading-relaxed mb-5">{service.description}</p>
                  <Link
                    to="/contact"
                    className="text-sm font-semibold text-[#c9a84a] hover:underline inline-flex items-center gap-1"
                  >
                    Learn More
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-24 bg-[#0a1f3c] relative overflow-hidden">
        <div className="absolute top-0 left-0 w-96 h-96 bg-[#c9a84a]/5 rounded-full blur-3xl" />
        <div className="section-padding relative z-10">
          <div className="fade-in-up">
            <SectionHeading
              eyebrow="How We Work"
              title="Our 6-Step Process"
              subtitle="A structured approach that ensures a smooth and successful property transaction."
              light
            />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {process.map((item, i) => (
              <div
                key={item.step}
                className="fade-in-up bg-white/5 backdrop-blur-sm border border-white/10 p-8 hover:border-[#c9a84a]/50 transition-all duration-500"
                style={{ transitionDelay: `${i * 100}ms` }}
              >
                <div className="flex items-center gap-4 mb-4">
                  <span className="font-serif text-4xl font-bold text-[#c9a84a]">{item.step}</span>
                  <div className="h-px flex-1 bg-[#c9a84a]/30" />
                </div>
                <h3 className="font-serif text-xl font-bold text-white mb-3">{item.title}</h3>
                <p className="text-sm text-gray-400 leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-[#0a1f3c] to-[#14315b]">
        <div className="section-padding text-center">
          <div className="fade-in-up max-w-2xl mx-auto">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Get Started?
            </h2>
            <p className="text-gray-300 mb-8">
              Contact us today for a free consultation and let us help you with your real estate journey.
            </p>
            <Link to="/contact" className="btn-gold">
              Schedule a Consultation
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
