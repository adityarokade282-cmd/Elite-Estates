import { Link } from 'react-router-dom';
import {
  Target,
  Eye,
  CheckCircle2,
  ArrowRight,
  ShieldCheck,
  Award,
  Users,
  Home as HomeIcon,
  MapPin,
  HandshakeIcon,
  TrendingUp,
} from 'lucide-react';
import { SectionHeading } from '@/components/SectionHeading';
import { agents, companyStats } from '@/data/content';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

const statIconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Home: HomeIcon,
  Users,
  Award,
  MapPin,
};

const whyChooseUs = [
  {
    icon: ShieldCheck,
    title: 'Verified Listings',
    description: 'Every property in our portfolio is thoroughly verified for legal compliance and authenticity.',
  },
  {
    icon: Award,
    title: '18+ Years Experience',
    description: 'Nearly two decades of expertise in the Indian real estate market across major cities.',
  },
  {
    icon: HandshakeIcon,
    title: 'Transparent Dealings',
    description: 'No hidden charges or surprises. We maintain complete transparency throughout the process.',
  },
  {
    icon: TrendingUp,
    title: 'Investment Focus',
    description: 'Data-driven advice to help you make properties that appreciate in value over time.',
  },
];

export function About() {
  const ref = useScrollAnimation<HTMLDivElement>();

  return (
    <div ref={ref} className="pt-20">
      {/* Header */}
      <section className="bg-[#0a1f3c] py-16 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#c9a84a]/5 rounded-full blur-3xl" />
        <div className="section-padding relative z-10 text-center">
          <span className="fade-in-up text-xs font-semibold uppercase tracking-[0.25em] text-[#c9a84a] mb-3 block">
            Get to Know Us
          </span>
          <h1 className="fade-in-up font-serif text-4xl md:text-5xl font-bold text-white">
            About Elite Estates
          </h1>
        </div>
      </section>

      {/* Intro */}
      <section className="py-24 bg-white">
        <div className="section-padding">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="fade-in-up relative">
              <img
                src="https://images.pexels.com/photos/7031407/pexels-photo-7031407.jpeg?auto=compress&cs=tinysrgb&w=1200"
                alt="Luxury villa"
                loading="lazy"
                className="w-full h-[500px] object-cover shadow-2xl"
              />
              <div className="absolute -bottom-8 -right-8 bg-[#c9a84a] p-8 shadow-xl hidden md:block">
                <p className="font-serif text-4xl font-bold text-[#0a1f3c]">850+</p>
                <p className="text-sm text-[#0a1f3c] font-medium">Properties Delivered</p>
              </div>
            </div>
            <div className="fade-in-up">
              <span className="text-xs font-semibold uppercase tracking-[0.25em] text-[#c9a84a] mb-3 block">
                Who We Are
              </span>
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-[#0a1f3c] leading-tight mb-6">
                Your Trusted Partner in Real Estate
              </h2>
              <p className="text-gray-600 leading-relaxed mb-5">
                Founded in 2007, Elite Estates has grown to become one of India most respected real
                estate agencies. What started as a small family business in Mumbai has expanded to
                serve clients across 12 cities, with a portfolio spanning residential, commercial,
                and investment properties.
              </p>
              <p className="text-gray-600 leading-relaxed mb-5">
                Our philosophy is simple: we treat every client property journey as if it were our
                own. From the first consultation to the final handshake, we provide personalized
                service, expert guidance, and unwavering transparency.
              </p>
              <p className="text-gray-500 text-sm italic">
                (This is demo content for showcase purposes. Elite Estates is a fictional company.)
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-24 bg-[#0a1f3c] relative overflow-hidden">
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#c9a84a]/5 rounded-full blur-3xl" />
        <div className="section-padding relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="fade-in-up bg-white/5 backdrop-blur-sm border border-white/10 p-10">
              <div className="w-14 h-14 bg-[#c9a84a] flex items-center justify-center mb-6">
                <Target className="w-7 h-7 text-[#0a1f3c]" />
              </div>
              <h3 className="font-serif text-2xl font-bold text-white mb-4">Our Mission</h3>
              <p className="text-gray-300 leading-relaxed">
                To make property buying, selling, and renting seamless, transparent, and rewarding
                for every client. We strive to eliminate the stress and uncertainty traditionally
                associated with real estate transactions by providing clear information, honest
                advice, and dedicated support at every step.
              </p>
            </div>
            <div className="fade-in-up bg-white/5 backdrop-blur-sm border border-white/10 p-10">
              <div className="w-14 h-14 bg-[#c9a84a] flex items-center justify-center mb-6">
                <Eye className="w-7 h-7 text-[#0a1f3c]" />
              </div>
              <h3 className="font-serif text-2xl font-bold text-white mb-4">Our Vision</h3>
              <p className="text-gray-300 leading-relaxed">
                To be India most trusted and innovative real estate brand, setting industry
                benchmarks for service quality, technological adoption, and ethical practices. We
                envision a future where every Indian can find their perfect property with confidence
                and ease.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 bg-gray-50">
        <div className="section-padding">
          <div className="fade-in-up">
            <SectionHeading
              eyebrow="Our Advantages"
              title="Why Choose Elite Estates"
              subtitle="We combine deep market knowledge with personalized service to deliver exceptional results."
            />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {whyChooseUs.map((item, i) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.title}
                  className="fade-in-up group bg-white p-8 shadow-md hover:shadow-xl transition-all duration-500 text-center"
                  style={{ transitionDelay: `${i * 100}ms` }}
                >
                  <div className="w-16 h-16 bg-[#0a1f3c] flex items-center justify-center mx-auto mb-5 group-hover:bg-[#c9a84a] transition-colors duration-300">
                    <Icon className="w-8 h-8 text-[#c9a84a] group-hover:text-[#0a1f3c] transition-colors" />
                  </div>
                  <h3 className="font-serif text-lg font-bold text-[#0a1f3c] mb-3">{item.title}</h3>
                  <p className="text-sm text-gray-600 leading-relaxed">{item.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-20 bg-[#0a1f3c]">
        <div className="section-padding">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {companyStats.map((stat, i) => {
              const Icon = statIconMap[stat.icon] || HomeIcon;
              return (
                <div
                  key={stat.label}
                  className="fade-in-up text-center"
                  style={{ transitionDelay: `${i * 100}ms` }}
                >
                  <div className="w-16 h-16 bg-[#c9a84a]/20 flex items-center justify-center mx-auto mb-4 border border-[#c9a84a]/30">
                    <Icon className="w-7 h-7 text-[#c9a84a]" />
                  </div>
                  <p className="font-serif text-3xl md:text-4xl font-bold text-white mb-1">
                    {stat.value}
                  </p>
                  <p className="text-sm text-gray-400 uppercase tracking-wide">{stat.label}</p>
                  <p className="text-[10px] text-gray-500 mt-1">(Demo statistics)</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Agents */}
      <section className="py-24 bg-white">
        <div className="section-padding">
          <div className="fade-in-up">
            <SectionHeading
              eyebrow="Meet the Team"
              title="Our Expert Agents"
              subtitle="Dedicated professionals with deep local market knowledge and a commitment to your success."
            />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {agents.map((agent, i) => (
              <div
                key={agent.id}
                className="fade-in-up group bg-gray-50 p-6 hover:shadow-xl transition-all duration-500"
                style={{ transitionDelay: `${i * 100}ms` }}
              >
                <div className="relative h-64 overflow-hidden mb-5">
                  <img
                    src={agent.image}
                    alt={agent.name}
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                </div>
                <h3 className="font-serif text-lg font-bold text-[#0a1f3c] mb-1">{agent.name}</h3>
                <p className="text-sm text-[#c9a84a] mb-3">{agent.title}</p>
                <div className="flex justify-between text-xs text-gray-500 pt-3 border-t border-gray-200">
                  <span>{agent.properties} Properties</span>
                  <span>{agent.experience} Years Exp.</span>
                </div>
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
              Let Us Help You Find Your Dream Property
            </h2>
            <p className="text-gray-300 mb-8">
              Our team of experienced agents is ready to assist you with your real estate needs.
            </p>
            <Link to="/contact" className="btn-gold">
              Get in Touch
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
