import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

interface NavbarProps {
  activeSection: string;
  onNavigate: (section: string) => void;
}

export default function Navbar({ activeSection, onNavigate }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [mobileMenuOpen]);

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'services', label: 'Services' },
    { id: 'portfolio', label: 'Portfolio' },
    { id: 'contact', label: 'Contact' },
  ];

  const handleNavigate = (section: string) => {
    onNavigate(section);
    setMobileMenuOpen(false);
  };

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled ? 'bg-[#0d1117]/90 backdrop-blur-lg shadow-lg' : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3 sm:py-4 flex items-center justify-between">
          <button
            onClick={() => handleNavigate('home')}
            className="flex items-center gap-2 sm:gap-3 hover:opacity-90 transition-opacity md:ml-12"
          >
            <img src="/logo.png" alt="Neptrax" className="h-10 w-10 sm:h-12 sm:w-12" />
            <span
              className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-[#2e69e8] to-[#3b6fc4] bg-clip-text text-transparent"
            >
              Neptrax
            </span>
          </button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-4 lg:gap-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavigate(item.id)}
                className={`text-sm lg:text-base font-medium transition-all duration-300 hover-slide-border ${
                  activeSection === item.id
                    ? 'text-[#2563eb]'
                    : 'text-[#94a3b8] hover:text-[#f1f5f9]'
                }`}
              >
                {item.label}
              </button>
            ))}
            <button
              onClick={() => handleNavigate('contact')}
              className="px-4 lg:px-6 py-2.5 rounded-full bg-gradient-to-r from-[#2563eb] to-[#1e3a8a] text-[#f1f5f9] font-medium text-sm lg:text-base hover:scale-105 hover:shadow-[0_0_20px_rgba(37,99,235,0.5)] transition-all duration-300"
            >
              Book a Call
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-lg bg-[#1e293b]/50 hover:bg-[#1e293b] transition-all"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? (
              <X size={24} className="text-[#f1f5f9]" />
            ) : (
              <Menu size={24} className="text-[#f1f5f9]" />
            )}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div
          className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40 md:hidden"
          onClick={() => setMobileMenuOpen(false)}
        />
      )}

      {/* Mobile Menu Panel */}
      <div
        className={`fixed top-0 right-0 h-full w-[280px] sm:w-[320px] bg-[#0d1117] shadow-2xl z-50 transform transition-transform duration-300 ease-out md:hidden ${
          mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex flex-col h-full">
          {/* Mobile Menu Header */}
          <div className="flex items-center justify-between px-6 py-6 border-b border-white/10">
            <span className="text-xl font-bold bg-gradient-to-r from-[#2e69e8] to-[#3b6fc4] bg-clip-text text-transparent">
              Menu
            </span>
            <button
              onClick={() => setMobileMenuOpen(false)}
              className="p-2 rounded-lg hover:bg-[#1e293b] transition-colors"
              aria-label="Close menu"
            >
              <X size={24} className="text-[#f1f5f9]" />
            </button>
          </div>

          {/* Mobile Menu Items */}
          <div className="flex-1 px-6 py-8 space-y-2">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavigate(item.id)}
                className={`w-full text-left px-4 py-4 rounded-xl font-medium transition-all duration-300 ${
                  activeSection === item.id
                    ? 'bg-gradient-to-r from-[#2563eb]/20 to-[#1e3a8a]/20 text-[#2563eb] border border-[#2563eb]/30'
                    : 'text-[#94a3b8] hover:bg-[#1e293b] hover:text-[#f1f5f9]'
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>

          {/* Mobile Menu CTA */}
          <div className="px-6 py-6 border-t border-white/10">
            <button
              onClick={() => handleNavigate('contact')}
              className="w-full px-6 py-4 rounded-full bg-gradient-to-r from-[#2563eb] to-[#1e3a8a] text-[#f1f5f9] font-medium text-base hover:scale-105 hover:shadow-[0_0_20px_rgba(37,99,235,0.5)] transition-all duration-300"
            >
              Book a Call
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
