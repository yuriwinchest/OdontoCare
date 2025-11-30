import React from 'react';

interface AboutProps {
  onNavigate: (page: any) => void;
}

const About: React.FC<AboutProps> = ({ onNavigate }) => {
  return (
    <div className="flex flex-1 justify-center py-20">
      <div className="layout-content-container flex flex-col max-w-[1400px] flex-1 px-6 sm:px-10 lg:px-20">
        
        {/* Hero Section */}
        <div className="w-full mb-24">
            <div 
              className="relative flex min-h-[500px] flex-col gap-6 bg-cover bg-center bg-no-repeat rounded-2xl items-center justify-center p-8 text-center border border-subtle-light" 
              style={{backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuD_4P31C1Guri3v80XIgu8-1U0c-tEFZaeZgYSVGuHv6Wohle21kfk9JmZNVLT6jFSHASXP_g4-i-PqMlp9dWTRO6WCwKK_9v2bkhcThv6h_9-mL8O1SggzmusGCm9aXHs-B0uIuHbvM7aMhjoYIy_b1FYiqQzpJNbOmlcre1_gZOAF_YQ52tlxtHRsKGqqk1S6tKpLp_fEs7nAa1MqgO0CehgS7hG_XyJWPihpgjsvcoitmAGnOAtzfjdLEamoZx6ycVOEnz-58Q")'}}
            >
              <div className="absolute inset-0 bg-black/60 rounded-2xl"></div>
              <div className="relative z-10 flex flex-col gap-4 max-w-3xl mx-auto">
                <span className="text-primary font-bold tracking-[0.2em] uppercase text-sm">Nossa Essência</span>
                <h1 className="text-white text-5xl md:text-6xl font-medium leading-tight">Humanizando a Tecnologia</h1>
                <h2 className="text-gray-200/90 text-lg font-light leading-relaxed">
                  Não somos apenas uma clínica. Somos um centro de reabilitação da autoestima, dedicados a fornecer cuidados excepcionais com uma abordagem artística.
                </h2>
              </div>
            </div>
        </div>

        {/* Founder Profile */}
        <div className="flex flex-col md:flex-row items-center gap-16 mb-24 bg-surface rounded-3xl p-8 md:p-12 border border-subtle-light">
          <div className="relative">
             <div className="absolute inset-0 border border-primary/30 rounded-full scale-110"></div>
             <div 
                className="bg-center bg-no-repeat aspect-square bg-cover rounded-full h-48 w-48 flex-shrink-0 relative z-10 grayscale hover:grayscale-0 transition-all duration-500" 
                style={{backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuCm3fl5oKmPhvENX7TMkZcNp4N1Y7NcFG9bdrE-VV6WpSiXHqk19ysSIOdVIDEiZVLYHKVzagkCr2Lg02_f0--0YFyvHFGWjscchUnELv8L6ichFDuRvY52DF8dWsCQbcUdDaD3b4oo4gw3yTqsJfDAJ9kvH79xnELoNFibEkKoZEo6OckZRDDx_VVDDWAdMTUEyuEg90TG7pU3QbCbJGFrF6lYMjP_zSWn-HYNXKP__kihrcXMUxIX0j_dMlFDxh8bYti67zaBsQ")'}}
              ></div>
          </div>
          
          <div className="flex flex-col justify-center text-center md:text-left flex-1">
            <p className="text-primary font-bold tracking-wider uppercase mb-2 text-sm">Diretor Clínico</p>
            <p className="text-text-light text-3xl font-serif mb-2">Dr. João Silva</p>
            <p className="text-muted-light text-lg mb-6 max-w-2xl font-light leading-relaxed">
              "Minha filosofia é combinar a precisão da ciência com a sensibilidade da arte. Cada sorriso é uma assinatura única, e nosso trabalho é revelá-la da forma mais autêntica possível."
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <button className="px-6 py-3 rounded-full border border-subtle-dark text-text-light text-sm hover:bg-text-light hover:text-background-light transition-all">
                Ver Credenciais
              </button>
              <button 
                onClick={() => onNavigate('contact')}
                className="px-6 py-3 rounded-full bg-primary text-black text-sm font-bold hover:brightness-110 transition-all"
              >
                Entrar em Contato
              </button>
            </div>
          </div>
        </div>

        {/* Team Grid */}
        <div className="mb-10">
          <div className="text-center mb-16">
             <h2 className="text-text-light text-3xl font-semibold mb-4">Corpo Clínico</h2>
             <div className="h-1 w-16 bg-primary mx-auto"></div>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { name: "Ana Pereira", role: "Higienista Dental", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuCizzBwkZ32V8NZUhtuEqTcOYMfYf8QENHGNuP2ozIthWGXbyagpmTZZe8U2A39UXpEkyNpBQGTuyOc-ZHz6vP-UUfCM78qVjGtWt28wmDnh2zHZMDDMRx1JH3qOUfo7hPBDfP6ZHvUPz9IUId6l4OQOX-9Se8pBqA6QRxVOw5Re2g9Ylrl17X9yR7pByM5KH_ydjEevu6C9DOZekWNvfEbijqlmh9WAu_jO0ab1L8VbF4shsWB_jlZVFFvx5H1L4MmZVsJF9biBw" },
              { name: "Carlos Souza", role: "Assistente Odontológico", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuC5GlROabYgOD3H7fXijLat0BXa9SdbSfH6Avy20T5wg6uU730ew5nd8AMyWFfFx-QM9QjbFZPsksU08w5Q_eJHeFpGpxvoqYqv2TkORk9eIV7GzH8vRNY2faAYNqwsrrU4TBAlUPkJpMzqe7MJFAgyOOz6X15zpUByq3OUWT5kWHyqG2ceG0JF864AovU5D-BQfhQxEbyAPFjvKoDIfew2K66_w2r--uMh4E5cGXGVWVIiXoABi9OMXFSu6ldbEzvZs5fmSRAZeg" },
              { name: "Mariana Costa", role: "Coord. Pacientes", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuAae0Rnk5nO7LtOcND84oPCp4YS8m_UVfW0SPy8n8bG_VdWAYV04qNawEpKDzb3uY_2F7dpQdVDyBHfo2qG1SZHPVAgKZNfVOwhOLFCPppOEfpQCxBpdRFJ6HwID6LiJDG59vGBNXYY0C3uL4_wmrwDtoWttJNoC5lxjbr6V_JU0cXnzjNRLYiPKAbWvvBRug5G_ryqyFfd1Bb5L_WCxni5qbAmyiHOh3vKqYbOXJixVSkCEVs8wTZ5bkHLqVaGFSowT89a95JpOw" },
              { name: "Ricardo Lima", role: "Ortodontista", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuAA0124EmvTP8UrLN717QmioBh97OsyA5K5rp3qVKZzDRzq2_uQmKDo6TB-JzNAeL7EFfKBVeq6nasx7Izjk_QzPfXD43uHRgjgLEumNwGVKJQtvWpK_kbJmqELnx5_U2cD8Js1K1TzrHiiRfUY9_B3JGhf1ejOihO2fnfIbzjWtzS6edpWwz7oK_iR02KlzUFZzyVsEqh5nYtXgVPJR8fjvl_ze8TeJRPyNePJtDgAbXmtBpmbgarh0uY4LNm7GA_IBVUhnrTXVg" }
            ].map((member, idx) => (
              <div key={idx} className="group relative overflow-hidden rounded-2xl bg-surface border border-subtle-light hover:border-primary/50 transition-all duration-300">
                <div className="aspect-[4/5] overflow-hidden">
                   <div 
                    className="w-full h-full bg-center bg-cover transition-transform duration-700 group-hover:scale-110 grayscale group-hover:grayscale-0"
                    style={{backgroundImage: `url("${member.img}")`}}
                   ></div>
                </div>
                <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black via-black/80 to-transparent p-6 pt-20">
                  <p className="text-white text-lg font-bold">{member.name}</p>
                  <p className="text-primary text-xs uppercase tracking-wider">{member.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
};

export default About;