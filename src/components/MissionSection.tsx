import React from 'react';
import {
  Globe,
  User,
  Search,
  TrendingUp,
  Megaphone,
  Briefcase,
  Zap,
  Beaker,
  Archive,
  PackageCheck,
  Focus,
  MessagesSquare,
  ClipboardList,
} from 'lucide-react';

import ScrollReveal from './ScrollReveal';

export default function MissionSection() {
  const features = [
    {
      icon: Briefcase,
      title: 'Business Website',
      description:
        'Professional sites that showcase your services and convert visitors into customers.',
      image: '/portfolio/wildebrands.png',
    },
    {
      icon: User,
      title: 'Personal Portfolio',
      description: 'Stand out with a stunning portfolio that highlights your work and personal brand.',
      image: '/portfolio/rothys.png',
    },
    {
      icon: Search,
      title: 'On-Page SEO',
      description: 'Optimize every element to rank higher and attract the right audience organically.',
      image: '/portfolio/sweeten.png',
    },
    {
      icon: TrendingUp,
      title: 'SEO Audit & Strategy',
      description: 'Deep analysis and actionable insights to dominate search results in your niche.',
      image: '/portfolio/jeton.png',
    },
    {
      icon: Megaphone,
      title: 'Marketing Website',
      description: 'High-converting landing pages designed to capture leads and drive sales.',
      image: '/portfolio/sono.png',
    },
    {
      icon: Globe,
      title: 'Brand Endorsement',
      description: 'Build trust and credibility with a digital presence that speaks to your values.',
      image: '/portfolio/sweeten.png',
    },
  ];

  const benefits = [
    {
      title: 'Local Expertise',
      description:
        "We know Canada's major markets thoroughly, understanding their unique business requirements.",
    },
    {
      title: 'Proven Results',
      description:
        'Our clients have seen real success in website traffic, potential leads, and yearly revenue.',
    },
    {
      title: 'Customized Solutions',
      description: 'We create personalized strategies because we think outside the box.',
    },
    {
      title: 'Transparent Communication',
      description: "You'll get clear updates, and we'll collaborate every step of the way.",
    },
    {
      title: 'Affordable Excellence',
      description:
        'Our competitive pricing ensures you get outstanding value without compromising quality.',
    },
    {
      title: 'Comprehensive Services',
      description: 'We offer everything from web development to social media management.',
    },
  ];

  return (
    <section className="bg-[#28282B] py-24">
      <div className="max-w-7xl mx-auto px-6">
        {/* Hero Image + Text */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-24">
          <ScrollReveal direction="left" delay={0} depth={2}>
            <div className="order-2 lg:order-1">
              <div className="relative group">
                <div className="rounded-2xl overflow-hidden shadow-[0_0_60px_rgba(37,99,235,0.3)]">
                  <img
                    src="/portfolio/jeton.png"
                    alt="Jeton Project"
                    className="w-full h-[540px] object-cover transition-all duration-500 group-hover:brightness-110"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal direction="right" delay={150}>
            <div className="order-1 lg:order-2">
              <h2 className="text-4xl font-bold text-white mb-6 leading-tight">
                We design experiences that drive results — smarter interfaces, seamless journeys and outcomes that speak themselves.
              </h2>

              <div className="bg-[#1e293b]/50 rounded-2xl p-8 mb-8 border border-white/10">
                <p className="text-white text-lg italic mb-4">
                  "Working with Neptrax was a game-changer. The site looks sharp, runs smooth, and made our online presence feel truly professional."
                </p>
                <p className="text-[#94a3b8] text-sm">— Ethan Fraser, Founder at TechNest</p>
              </div>

              {/* REPLACED: Ultra-Premium Glass Gradient Version */}
              <div className="grid grid-cols-2 gap-6">
                <ScrollReveal direction="zoom" delay={300}>
                  <div className="
  relative rounded-2xl p-6 text-center overflow-hidden
  backdrop-blur-2xl bg-white/5
  border border-white/20
  transition-all duration-500
  hover:scale-[1.04] hover:shadow-[0_0_40px_rgba(80,70,255,0.5)]
">
                    {/* Glossy overlay */}
                    <div className="absolute inset-0 bg-gradient-to-br from-white/30 via-transparent to-white/10 opacity-40 pointer-events-none"></div>

                    {/* Subtle glow layer */}
                    <div className="absolute -inset-[1px] rounded-2xl bg-gradient-to-br from-[#2563eb]/25 to-[#8b5cf6]/25 blur-4xl opacity-60"></div>

                    <div className="relative z-10">
                      <div className="text-4xl font-extrabold bg-gradient-to-r from-[#3b82f6] via-[#6366f1] to-[#8b5cf6] bg-clip-text text-transparent mb-2">
                        92%
                      </div>
                      <div className="text-[#cbd5e1] text-sm tracking-wide">Client Retention</div>
                    </div>
                  </div>
                </ScrollReveal>

                <ScrollReveal direction="zoom" delay={400}>
                  <div className="
  relative rounded-2xl p-6 text-center overflow-hidden
  backdrop-blur-2xl bg-white/5
  border border-white/20
  transition-all duration-500
  hover:scale-[1.04] hover:shadow-[0_0_40px_rgba(80,70,255,0.5)]
">
                    {/* Glossy overlay */}
                    <div className="absolute inset-0 bg-gradient-to-br from-white/30 via-transparent to-white/10 opacity-40 pointer-events-none"></div>

                    {/* Subtle glow layer */}
                    <div className="absolute -inset-[1px] rounded-2xl bg-gradient-to-br from-[#2563eb]/25 to-[#8b5cf6]/25 blur-4xl opacity-60"></div>

                    <div className="relative z-10">
                      <div className="text-4xl font-extrabold bg-gradient-to-r from-[#3b82f6] via-[#6366f1] to-[#8b5cf6] bg-clip-text text-transparent mb-2">
                        30+
                      </div>
                      <div className="text-[#cbd5e1] text-sm tracking-wide">Projects Delivered with Excellence</div>
                    </div>
                  </div>
                </ScrollReveal>
              </div>
            </div>
          </ScrollReveal>
        </div>

        {/* Section Intro */}
        <ScrollReveal direction="up" delay={0}>
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold bg-gradient-to-r from-[#2563eb] to-[#3b82f6] bg-clip-text text-transparent mb-4">
              Website management that's actually enjoyable.
            </h2>
            <p className="text-white text-lg max-w-3xl mx-auto">
              Effortlessly manage content, collaborate with clarity, and navigate your website needs with workflows shaped for you and your team.
            </p>
          </div>
        </ScrollReveal>

        {/* Features List */}
        <div className="py-20">
          <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ScrollReveal direction="up" delay={0}>
              <div className="flex lg:flex-col gap-4">
                <Beaker className="text-[#2563eb]" size={28} />
                <div>
                  <h3 className="text-[#f1f5f9] font-semibold inline">Project Breakdown:</h3>
                  <p className="text-[#94a3b8] inline ml-2">
                    Split websites, SEO plans, or design deliverables into clear, actionable tasks for smooth execution.
                  </p>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal direction="up" delay={100}>
              <div className="flex lg:flex-col gap-4">
                <Archive className="text-[#2563eb]" size={28} />
                <div>
                  <h3 className="text-[#f1f5f9] font-semibold inline">Smart Task Archiving:</h3>
                  <p className="text-[#94a3b8] inline ml-2">
                    Once a web page is built, a keyword plan is implemented, or a design is finalized, it's auto-archived—keeping your dashboard clean.
                  </p>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal direction="up" delay={200}>
              <div className="flex lg:flex-col gap-4">
                <PackageCheck className="text-[#2563eb]" size={28} />
                <div>
                  <h3 className="text-[#f1f5f9] font-semibold inline">Client-Ready Deliverables:</h3>
                  <p className="text-[#94a3b8] inline ml-2">Every output is packaged professionally and ready for immediate handoff or launch.</p>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal direction="up" delay={300}>
              <div className="flex lg:flex-col gap-4">
                <Focus className="text-[#2563eb]" size={28} />
                <div>
                  <h3 className="text-[#f1f5f9] font-semibold inline">Focused Views:</h3>
                  <p className="text-[#94a3b8] inline ml-2">Customize your view to focus only on what matters.</p>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal direction="up" delay={400}>
              <div className="flex lg:flex-col gap-4">
                <MessagesSquare className="text-[#2563eb]" size={28} />
                <div>
                  <h3 className="text-[#f1f5f9] font-semibold inline">Collaborative Threads:</h3>
                  <p className="text-[#94a3b8] inline ml-2">Discuss changes directly inside each task—no more scattered feedback.</p>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal direction="up" delay={500}>
              <div className="flex lg:flex-col gap-4">
                <ClipboardList className="text-[#2563eb]" size={28} />
                <div>
                  <h3 className="text-[#f1f5f9] font-semibold inline">Issue Templates:</h3>
                  <p className="text-[#94a3b8] inline ml-2">Prebuilt formats help you deliver faster without skipping details.</p>
                </div>
              </div>
            </ScrollReveal>

          </div>
        </div>

        {/* Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-24">
          {features.map((feature, index) => (
            <ScrollReveal key={index} direction="up" delay={index * 100} depth={1}>
              <div className="bg-[#1e293b]/50 rounded-2xl p-6 hover:bg-[#1e3a8a]/30 transition-all border border-white/10 hover:border-[#2563eb]/50 hover:shadow-[0_0_30px_rgba(37,99,235,0.3)] h-full">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#2563eb] to-[#1e3a8a] flex items-center justify-center mb-4">
                  <feature.icon className="text-white" size={24} />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
                <p className="text-[#94a3b8] text-sm mb-4 leading-relaxed">{feature.description}</p>

                <div className="rounded-lg overflow-hidden border border-white/10">
                  <img src={feature.image} alt={feature.title} className="w-full h-32 object-cover" />
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* Why Choose Section */}
        <ScrollReveal direction="up" delay={0}>
          <div className="mb-16">
            <h2 className="text-4xl font-bold text-white text-center mb-4">Why Choose Neptrax?</h2>
            <p className="text-white/80 text-lg text-center mb-12">Why should you go with Neptrax for your web needs?</p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {benefits.map((benefit, index) => (
                <ScrollReveal key={index} direction="up" delay={index * 80} depth={1}>
                  <div className="bg-[#1e293b]/50 rounded-xl p-6 border border-white/10 hover:border-[#2563eb]/50 transition-all h-full">
                    <h4 className="text-lg font-bold text-white mb-2">{benefit.title}</h4>
                    <p className="text-[#94a3b8] text-sm leading-relaxed">{benefit.description}</p>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </ScrollReveal>

        {/* Outcome Highlight */}
        <ScrollReveal direction="zoom" delay={0}>
          <div className="text-center py-20 relative">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-64 h-64 bg-[#2563eb] rounded-full blur-[100px] opacity-30"></div>
            </div>

            <div className="relative z-10">
              <h2 className="text-5xl font-bold text-white mb-6">Magnified Outcomes.</h2>
              <h3 className="text-3xl font-bold text-white mb-8">Fast, Functional, Future-Ready.</h3>

              <div className="flex justify-center mb-8">
                <div className="relative">
                  <Zap size={120} className="text-[#2563eb] animate-pulse" strokeWidth={2} />
                  <div className="absolute inset-0 blur-xl bg-[#2563eb]/50"></div>
                </div>
              </div>

              <p className="text-white/90 text-lg max-w-2xl mx-auto">
                From building responsive layouts to setting up SEO foundations, we streamline your entire web presence.
              </p>
            </div>
          </div>
        </ScrollReveal>

        {/* About Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mt-24">
          <ScrollReveal direction="left" delay={0} depth={2}>
            <div className="rounded-2xl overflow-hidden shadow-[0_0_50px_rgba(37,99,235,0.3)]">
              <img src="/portfolio/rothys.png" alt="About Neptrax" className="w-full h-auto" />
            </div>
          </ScrollReveal>

          <ScrollReveal direction="right" delay={150}>
            <div>
              <h2 className="text-4xl font-bold text-white mb-6">About Neptrax</h2>
              <p className="text-white/90 text-lg leading-relaxed">
                Throughout the US, we build websites, boost rankings, and manage your socials so you don't have to.
                Our solutions are affordable, our support is solid, and yes — we actually answer emails. Whether
                you're just starting out or upgrading your digital game, Neptrax is the partner that gets things
                done (without the fluff).
              </p>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
