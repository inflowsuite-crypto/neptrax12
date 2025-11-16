import { useState, useEffect } from 'react';

interface NavbarProps {
  activeSection: string;
  onNavigate: (section: string) => void;
}

export default function Navbar({ activeSection, onNavigate }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'services', label: 'Services' },
    { id: 'portfolio', label: 'Portfolio' },
    { id: 'contact', label: 'Contact' },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-[#0d1117]/90 backdrop-blur-lg shadow-lg' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <button
          onClick={() => onNavigate('home')}
          className="flex items-center gap-3 hover:opacity-90 transition-opacity ml-12"
        >
          <img src="/logo.png" alt="Neptrax" className="h-12 w-12" />
          <span
            className="text-2xl font-bold bg-gradient-to-r from-[#2e69e8] to-[#3b6fc4] bg-clip-text text-transparent"
          >
            Neptrax
          </span>
        </button>

        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => onNavigate(item.id)}
              className={`text-sm font-medium transition-colors ${
                activeSection === item.id
                  ? 'text-[#2563eb]'
                  : 'text-[#94a3b8] hover:text-[#f1f5f9]'
              }`}
            >
              {item.label}
            </button>
          ))}
          <button
            onClick={() => onNavigate('contact')}
            className="px-6 py-2.5 rounded-full bg-gradient-to-r from-[#2563eb] to-[#1e3a8a] text-[#f1f5f9] font-medium text-sm hover:scale-105 hover:shadow-[0_0_20px_rgba(37,99,235,0.5)] transition-all"
          >
            Book a Call
          </button>
        </div>
      </div>
    </nav>
  );
}
