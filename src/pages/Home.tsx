import {
  Sparkles,
  Rocket,
  ShoppingCart,
  Briefcase,
  Users,
  Code,
  Palette,
  Search,
  Target,
  Layers,
  Wrench,
  TrendingUp,
  ArrowUpRight
} from 'lucide-react';
import { motion, useScroll, useTransform, useInView, ScrollReveal } from '../components/FramerMotion';
import { useRef, useEffect, useState } from 'react';
import Silk from '../components/Silk';
import MissionSection from '../components/MissionSection';

interface HomeProps {
  onNavigate: (section: string) => void;
}

// Mobile detection hook
const useMobile = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkDevice = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkDevice();
    window.addEventListener('resize', checkDevice);
    
    return () => {
      window.removeEventListener('resize', checkDevice);
    };
  }, []);

  return isMobile;
};

export default function Home({ onNavigate }: HomeProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll();
  const isMobile = useMobile();
  
  // Parallax effects for background elements
  const backgroundY = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const blob1Y = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const blob2Y = useTransform(scrollYProgress, [0, 1], [0, 150]);

  const clients = [
    { icon: Briefcase, title: 'Local Service Businesses', description: 'Plumbers, electricians, consultants' },
    { icon: Rocket, title: 'SaaS Startups', description: 'Cloud-based software companies' },
    { icon: Sparkles, title: 'AI Startups', description: 'Machine learning innovations' },
    { icon: ShoppingCart, title: 'E-Commerce Brands', description: 'Online retail businesses' },
    { icon: Users, title: 'Agencies & Freelancers', description: 'Creative professionals' },
  ];

  const services = [
    { icon: Palette, title: 'Web Design', description: 'Beautiful, modern interfaces' },
    { icon: Code, title: 'Web Development', description: 'Fast, responsive websites' },
    { icon: Search, title: 'SEO Optimization', description: 'Higher search rankings' },
    { icon: Target, title: 'GEO Targeting', description: 'Local market reach' },
    { icon: Layers, title: 'UI/UX Design', description: 'User-centered experiences' },
    { icon: Wrench, title: 'Website Maintenance', description: 'Ongoing support & updates' },
  ];

  const stats = [
    { number: '100+', label: 'Sites Built' },
    { number: '50+', label: 'Verified Reviews' },
    { number: '5+', label: 'Years Experience' },
    { number: '100%', label: 'Client Satisfaction Rate' },
  ];

  return (
    <div className="min-h-screen overflow-hidden" ref={containerRef}>
      {/* Enhanced Hero Section with Scroll Effects */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        <div className="absolute inset-0 opacity-100">
          <Silk
            speed={isMobile ? 4 : 8}
            scale={isMobile ? 0.8 : 1}
            color="#13717d"
            noiseIntensity={0.5}
            rotation={0}
          />
        </div>
        
        <div className="absolute inset-0 bg-gradient-to-br from-[#0f172a] via-[#0d1117] to-[#1e3a8a] opacity-70"></div>
        
        {/* Animated Blobs */}
        <div className="absolute top-20 right-20 w-64 h-64 md:w-96 md:h-96 bg-[#2563eb] rounded-full blur-[120px] opacity-20 animate-pulseSlow"></div>
        <div className="absolute bottom-20 left-20 w-64 h-64 md:w-96 md:h-96 bg-[#1e3a8a] rounded-full blur-[120px] opacity-20 animate-pulseSlow2"></div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pt-16 lg:pt-32">
          <div className="max-w-3xl mx-auto lg:mx-0 text-center lg:text-left">
            <ScrollReveal direction="up" delay={100} duration={0.8}>
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-6xl font text-[#f1f5f9] mb-4 sm:mb-6 leading-tight">
                Launch your brand online <br className="hidden sm:block" />
                <span className="bg-gradient-to-r from-[#2e4fdc] to-[#4da6ff] bg-clip-text text-transparent">
                  with a website built to
                </span>
                <br className="hidden sm:block" />
                convert & scale.
              </h1>
            </ScrollReveal>

            <ScrollReveal direction="up" delay={200} duration={0.8}>
              <p className="text-base sm:text-lg md:text-xl text-[#abbcd4] mb-6 sm:mb-10 max-w-2xl mx-auto lg:mx-0 leading-relaxed px-4 sm:px-0">
                Guiding startups and small businesses from idea to digital success with websites built for performance and growth.
              </p>
            </ScrollReveal>

            <ScrollReveal direction="up" delay={300} duration={0.8}>
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mb-12 sm:mb-16 justify-center lg:justify-start px-4 sm:px-0">
                <motion.button
                  onClick={() => onNavigate('contact')}
                  className="px-8 sm:px-12 md:px-16 py-3 sm:py-4 rounded-full bg-gradient-to-r from-[#2563eb] to-[#1e3a8a] text-[#f1f5f9] font-medium hover:scale-105 hover:shadow-[0_0_30px_rgba(37,99,235,0.6)] transition-all duration-300 text-sm sm:text-base"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Book a Call
                </motion.button>
                
                <motion.button
                  onClick={() => onNavigate('portfolio')}
                  className="group relative px-6 sm:px-8 md:px-10 py-3 sm:py-4 rounded-full bg-transparent border-2 border-purple-400/50 text-[#f1f5f9] font-medium overflow-hidden transition-all duration-500 hover:scale-105 hover:border-purple-400 hover:shadow-2xl hover:shadow-purple-500/25 backdrop-blur-sm flex items-center justify-center gap-2 text-sm sm:text-base"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span className="relative z-10 flex items-center gap-2">
                    <span>View Our Work</span>
                    <ArrowUpRight size={16} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300" />
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-pink-600/20 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-400 to-pink-500 opacity-0 group-hover:opacity-10 transition-opacity duration-500"></div>
                </motion.button>
              </div>
            </ScrollReveal>

            <ScrollReveal direction="fade" delay={400} duration={0.8}>
              <div className="px-4 sm:px-0">
                <h3 className="text-xs sm:text-sm text-[#abbcd4] font-bold mb-3 sm:mb-3 text-center lg:text-left ml-2">
                  Trusted by Industry Leaders
                </h3>
                <div className="flex items-center justify-center lg:justify-start gap-6 sm:gap-8 md:gap-12 flex-wrap">
                  <motion.img
                    src="/brand logo/google.png"
                    alt="Google"
                    className="h-6 sm:h-8 filter brightness-0 saturate-0 hover:scale-110 transition-transform duration-300"
                    style={{ filter: 'brightness(0) saturate(100%) invert(1) sepia(1) saturate(0.5) hue-rotate(200deg) brightness(0.9)' }}
                    whileHover={{ scale: 1.1 }}
                  />
                  <motion.img
                    src="/brand logo/stripe.png"
                    alt="Stripe"
                    className="h-8 sm:h-10 md:h-14 filter brightness-0 saturate-0 hover:scale-110 transition-transform duration-300"
                    style={{ filter: 'brightness(0) saturate(100%) invert(1) sepia(1) saturate(0.5) hue-rotate(200deg) brightness(0.9)' }}
                    whileHover={{ scale: 1.1 }}
                  />
                  <motion.img
                    src="/brand logo/vercel.png"
                    alt="Vercel"
                    className="h-8 sm:h-10 md:h-14 filter brightness-0 saturate-0 hover:scale-110 transition-transform duration-300"
                    style={{ filter: 'brightness(0) saturate(100%) invert(1) sepia(1) saturate(0.5) hue-rotate(200deg) brightness(0.9)' }}
                    whileHover={{ scale: 1.1 }}
                  />
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      <MissionSection />

      {/* Enhanced Clients Section with Centered Layout */}
      <section className="py-16 sm:py-20 bg-[#111827]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal direction="up" delay={0} duration={0.8}>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#f1f5f9] text-center mb-4">
              Who We Work With
            </h2>
          </ScrollReveal>

          <ScrollReveal direction="fade" delay={100} duration={0.8}>
            <p className="text-[#94a3b8] text-center mb-8 sm:mb-12 text-sm sm:text-base px-4">
              We partner with businesses of all sizes across industries
            </p>
          </ScrollReveal>

          {/* First Row - 3 Cards */}
          <div className="flex justify-center mb-6 sm:mb-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 w-full max-w-5xl">
              {clients.slice(0, 3).map((client, index) => (
                <ScrollReveal key={index} direction="up" delay={index * 100} duration={0.6}>
                  <motion.div
                    className="rounded-2xl p-4 sm:p-6 transition-all duration-300 shadow-[0_4px_20px_rgba(0,0,0,0.2)] hover:shadow-[0_0_30px_rgba(37,99,235,0.3)] h-full border border-[#334155] hover:border-[#2563eb]"
                    whileHover={{
                      scale: 1.03,
                      y: -5
                    }}
                  >
                    <client.icon className="text-[#2563eb] mb-3 sm:mb-4" size={isMobile ? 24 : 32} />
                    <h3 className="text-lg sm:text-xl font-bold text-[#f1f5f9] mb-2">{client.title}</h3>
                    <p className="text-[#94a3b8] text-xs sm:text-sm">{client.description}</p>
                  </motion.div>
                </ScrollReveal>
              ))}
            </div>
          </div>

          {/* Second Row - 2 Cards Centered */}
          <div className="flex justify-center">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 max-w-3xl">
              {clients.slice(3).map((client, index) => (
                <ScrollReveal key={index + 3} direction="up" delay={(index + 3) * 100} duration={0.6}>
                  <motion.div
                    className="rounded-2xl p-4 sm:p-6 transition-all duration-300 shadow-[0_4px_20px_rgba(0,0,0,0.2)] hover:shadow-[0_0_30px_rgba(37,99,235,0.3)] h-full border border-[#334155] hover:border-[#2563eb]"
                    whileHover={{
                      scale: 1.03,
                      y: -5
                    }}
                  >
                    <client.icon className="text-[#2563eb] mb-3 sm:mb-4" size={isMobile ? 24 : 32} />
                    <h3 className="text-lg sm:text-xl font-bold text-[#f1f5f9] mb-2">{client.title}</h3>
                    <p className="text-[#94a3b8] text-xs sm:text-sm">{client.description}</p>
                  </motion.div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Stats Section */}
      <section className="py-16 sm:py-20 bg-[#0d1117]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal direction="up" delay={0} duration={0.8}>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#f1f5f9] text-center mb-8 sm:mb-12">
              Our Credentials
            </h2>
          </ScrollReveal>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8">
            {stats.map((stat, index) => (
              <ScrollReveal key={index} direction="up" delay={index * 100} duration={0.6}>
                <motion.div 
                  className="text-center p-4 sm:p-6 rounded-2xl transition-all duration-300"
                  whileHover={{ scale: 1.05 }}
                >
                  <div className="text-3xl sm:text-4xl md:text-5xl font-bold bg-gradient-to-r from-[#2563eb] to-[#3b82f6] bg-clip-text text-transparent mb-2">
                    {stat.number}
                  </div>
                  <div className="text-[#94a3b8] text-sm sm:text-base">{stat.label}</div>
                </motion.div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced CTA Section */}
      <section className="py-16 sm:py-20 bg-gradient-to-br from-[#0f172a] to-[#1e3a8a]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <ScrollReveal direction="up" delay={0} duration={0.8}>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#f1f5f9] mb-4 sm:mb-6">
              Ready to Start Your Project?
            </h2>
          </ScrollReveal>

          <ScrollReveal direction="fade" delay={150} duration={0.8}>
            <p className="text-[#94a3b8] text-base sm:text-lg mb-6 sm:mb-8 px-4">
              Let's discuss how we can help your business grow online
            </p>
          </ScrollReveal>

          <ScrollReveal direction="up" delay={250} duration={0.8}>
            <motion.button
              onClick={() => onNavigate('contact')}
              className="px-8 sm:px-10 py-3 sm:py-4 rounded-full bg-gradient-to-r from-[#2563eb] to-[#1e3a8a] text-[#f1f5f9] font-medium text-base sm:text-lg hover:shadow-[0_0_40px_rgba(37,99,235,0.7)] transition-all duration-300 border border-[#3b82f6] hover:border-[#60a5fa]"
              whileHover={{ 
                scale: 1.05,
              }}
              whileTap={{ scale: 0.95 }}
            >
              Book a Call
            </motion.button>
          </ScrollReveal>
        </div>
      </section>

      {/* Add custom animations to global CSS */}
      <style>{`
        @keyframes pulseSlow {
          0%, 100% { opacity: 0.2; transform: scale(1); }
          50% { opacity: 0.3; transform: scale(1.1); }
        }
        @keyframes pulseSlow2 {
          0%, 100% { opacity: 0.3; transform: scale(1.1); }
          50% { opacity: 0.2; transform: scale(1); }
        }
        .animate-pulseSlow {
          animation: pulseSlow 8s ease-in-out infinite;
        }
        .animate-pulseSlow2 {
          animation: pulseSlow2 10s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
}