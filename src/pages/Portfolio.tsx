import { ExternalLink } from 'lucide-react';
import { useEffect, useState } from 'react';

interface Project {
  name: string;
  description: string;
  url: string;
  image: string;
}

export default function Portfolio() {
  const [projects, setProjects] = useState<Project[]>([]);

  const projectsData: Project[] = [
    { name: 'Wilde Brands', description: 'E-commerce fashion brand site', url: 'https://www.wildebrands.com/', image: 'public/portfolio/wildebrands.png' },
    { name: 'Jeton', description: 'Fintech payment platform', url: 'https://www.jeton.com/', image: 'public/portfolio/jeton.png' },
    { name: '99% Invisible', description: 'Digital design and media publication', url: 'https://99percentinvisible.org/', image: 'public/portfolio/99.png' },
    { name: 'Rothy\'s', description: 'Sustainable fashion e-commerce brand', url: 'https://rothys.com/', image: 'public/portfolio/rothys.png' },
    { name: 'Inflow Saas', description: 'Powerful cloud-based CRM for businesses', url: 'https://inflowcore.netlify.app/', image: 'public/portfolio/inflow.png' },
    { name: 'Sono Restaurant', description: 'Restaurant website and menu', url: 'https://sonorestaurant.com.au/', image: 'public/portfolio/sono.png' },
    { name: 'USA Home Remodeling', description: 'Home remodeling services site', url: 'https://usahomeremodeling.com/', image: 'public/portfolio/usa.png' },
    { name: 'Big Night', description: 'Restaurant and events venue site', url: 'https://www.bignight.com/', image: 'public/portfolio/bignight.png' },
    { name: 'Seraat', description: 'Business services website', url: 'https://www.seraat.com/', image: 'public/portfolio/seraat.png' },
    { name: "Let's Encrypt", description: 'Internet security and encryption services', url: 'https://letsencrypt.org/', image: 'public/portfolio/letsencrypt.png' },
    { name: 'Vintage Modern Films', description: 'Creative production company', url: 'https://www.vintagemodernfilms.com/', image: 'public/portfolio/vintagemodernfilms.png' },
    { name: 'Sweeten', description: 'Home renovation platform', url: 'https://sweeten.com/', image: 'public/portfolio/sweeten.png' },
    { name: 'Nalgene', description: 'Product brand and e-commerce store', url: 'https://nalgene.com/', image: 'public/portfolio/nalgene.png' },
    { name: 'Pho Cafe', description: 'Restaurant website', url: 'https://www.phocafe.co.uk/', image: 'public/portfolio/pho.png' },
    { name: 'Rasht Delectable', description: 'Food brand e-commerce store', url: 'https://rashtdelectables.com/', image: 'public/portfolio/rasht.png' },
    { name: 'Spirit Dog Training', description: 'Dog training services and coaching', url: 'https://spiritdogtraining.com/', image: 'public/portfolio/spiritdog.png' },
    { name: 'SGUA', description: 'Architecture and design firm portfolio', url: 'https://sgua.com.au/', image: 'public/portfolio/sgua.png' },
    { name: 'Breyer Construction', description: 'Construction company portfolio', url: 'https://www.breyerconstruction.com/', image: 'public/portfolio/breyer.png' },
    { name: 'Container', description: 'Logistics and shipping services', url: 'https://www.container.com/', image: 'public/portfolio/martincontainer.png' },
    { name: 'HBNO', description: 'Real estate and community website', url: 'https://hbno.com/', image: 'public/portfolio/hbno.png' },
  ];

    useEffect(() => {
    const shuffled = [...projectsData];
    setProjects(shuffled);
  }, []);

  const handleImageError = (e: React.SyntheticEvent<HTMLImageElement>) => {
    e.currentTarget.style.display = 'none';
  };

  return (
    <div className="min-h-screen bg-[#0d1117] pt-24 pb-20">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h1
            className="text-5xl font-bold text-[#f1f5f9] mb-4"
          >
            Our Work Speaks for Itself.
          </h1>
          <p className="text-[#94a3b8] text-lg max-w-2xl mx-auto">
            Explore our portfolio of successful projects across various industries
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group bg-[#1e293b] rounded-2xl overflow-hidden hover:shadow-[0_0_40px_rgba(37,99,235,0.4)] transition-all duration-300 cursor-pointer"
            >
              <div className="relative h-64 bg-gradient-to-br from-[#0f172a] to-[#2563eb] overflow-hidden">
                <img
                  src={project.image}
                  alt={project.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  onError={handleImageError}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0d1117] via-transparent to-transparent opacity-40"></div>
              </div>

              <div className="p-6">
                <h3 className="text-2xl font-bold text-[#f1f5f9] mb-2">{project.name}</h3>
                <p className="text-[#94a3b8] text-sm mb-6">{project.description}</p>
                <a
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-[#2563eb] to-[#1e3a8a] text-[#f1f5f9] font-medium text-sm hover:scale-105 hover:shadow-[0_0_20px_rgba(37,99,235,0.5)] transition-all"
                >
                  Visit Website
                  <ExternalLink size={16} className="group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
