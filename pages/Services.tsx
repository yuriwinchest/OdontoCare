
import React from 'react';

interface ServicesProps {
  onNavigate: (page: any) => void;
}

const Services: React.FC<ServicesProps> = ({ onNavigate }) => {
  const services = [
    { 
      title: "Clareamento Dental", 
      desc: "Protocolos de clareamento a laser e caseiro supervisionado para um sorriso luminoso e natural, com total segurança para o esmalte.",
      img: "https://images.unsplash.com/photo-1598256989800-fe5f95da9787?q=80&w=1000&auto=format&fit=crop",
      icon: "auto_awesome"
    },
    { 
      title: "Lentes de Contato", 
      desc: "Lâminas ultrafinas de porcelana desenhadas digitalmente para harmonizar formato, cor e tamanho dos dentes com perfeição.",
      img: "https://images.unsplash.com/photo-1609840114035-3c981b782dfe?q=80&w=1000&auto=format&fit=crop",
      icon: "photo_filter"
    },
    { 
      title: "Implantes Dentários", 
      desc: "Reabilitação oral com implantes de titânio e zircônia de padrão suíço. Estética e função restauradas com precisão cirúrgica.",
      img: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?q=80&w=1000&auto=format&fit=crop",
      icon: "surgical"
    },
    { 
      title: "Ortodontia Digital", 
      desc: "Tratamentos com alinhadores invisíveis e aparelhos estéticos. Correção rápida e discreta planejada por software 3D.",
      img: "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?q=80&w=1000&auto=format&fit=crop",
      icon: "dentistry"
    },
    { 
      title: "Profilaxia Premium", 
      desc: "Spa odontológico com ultrassom e jato de bicarbonato. Prevenção avançada para manter a saúde da gengiva e o hálito puro.",
      img: "https://images.unsplash.com/photo-1571772996211-2f02c9727629?q=80&w=1000&auto=format&fit=crop",
      icon: "cleaning_services"
    },
    { 
      title: "Endodontia Microscópica", 
      desc: "Tratamento de canal realizado com microscópio operatório, garantindo máxima preservação da estrutura dental e conforto.",
      img: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?q=80&w=1000&auto=format&fit=crop",
      icon: "healing"
    }
  ];

  return (
    <div className="flex flex-1 justify-center py-20">
      <div className="layout-content-container flex flex-col w-full max-w-[1400px] px-6 sm:px-10 lg:px-20">
        
        {/* Hero Section */}
        <section className="w-full @container mb-24">
          <div className="flex flex-col-reverse gap-12 py-10 @[864px]:flex-row @[864px]:items-center">
            <div className="flex flex-col gap-8 @[864px]:justify-center @[864px]:w-1/2">
              <div className="flex flex-col gap-4 text-left">
                <span className="text-primary font-bold tracking-widest uppercase text-sm">Nossos Tratamentos</span>
                <h1 className="text-text-light text-5xl font-medium leading-tight tracking-tight">
                  Design do Sorriso &<br/> Saúde Integrada
                </h1>
                <h2 className="text-muted-light text-lg font-light leading-relaxed max-w-lg border-l-2 border-primary/30 pl-6">
                  Protocolos clínicos rigorosos e materiais de última geração para garantir durabilidade e estética.
                </h2>
              </div>
              <button 
                onClick={() => onNavigate('contact')}
                className="flex w-fit items-center justify-center rounded-full h-12 px-8 bg-primary text-black text-sm font-bold tracking-wide hover:shadow-[0_0_15px_rgba(0,242,234,0.4)] transition-all"
              >
                <span className="truncate">Agendar Consulta</span>
              </button>
            </div>
            <div className="w-full @[864px]:w-1/2 relative">
               <div className="absolute inset-0 bg-primary/20 blur-[100px] opacity-20 rounded-full"></div>
              <div 
                className="w-full bg-center bg-no-repeat aspect-video bg-cover rounded-2xl relative z-10 border border-subtle-light shadow-2xl" 
                style={{backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuCLoXymPjC1WaMp5z7Oc86BzZ59-Y44qzPqpC43LJXGwOrvnw_o5kXfI8q_6yodx2hY4j-VAVPJZCN6zt6nHGnO79frWv-0Z-4IkjgIJNZAGhJsfQAepOMxQKmb8MLOWAS2thUkcKY3VNfiDmCzcap8M9kqinM1Zs0IoZefLI9UKAAB6h-bHg37AwYP_1kWFYpMLett4rTEZSubDSUtIvbzSkm0kj3dXrcRytjjgV2R3QUscbnqU8nH4-Yzx-ULBdI-2E3RF5rh7A")'}}
              >
                 <div className="absolute inset-0 bg-black/20 hover:bg-transparent transition-colors duration-500 rounded-2xl"></div>
              </div>
            </div>
          </div>
        </section>

        {/* Section Header */}
        <section className="w-full pt-10 pb-12 border-t border-subtle-light">
          <div className="flex flex-col md:flex-row justify-between items-end gap-6">
            <div>
              <h2 className="text-text-light text-3xl font-semibold leading-tight">Menu de Serviços</h2>
              <p className="text-muted-light mt-2 max-w-xl">
                Cada detalhe é planejado para oferecer uma experiência transformadora. Conheça nossas especialidades.
              </p>
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="w-full">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 py-4">
            {services.map((item, idx) => (
              <div key={idx} className="group rounded-2xl bg-surface border border-subtle-light hover:border-primary/50 hover:bg-surface-highlight transition-all duration-500 cursor-pointer overflow-hidden flex flex-col shadow-lg">
                {/* Image Container */}
                <div className="h-64 w-full overflow-hidden relative">
                   <div
                      className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                      style={{backgroundImage: `url("${item.img}")`}}
                   ></div>
                   <div className="absolute inset-0 bg-gradient-to-t from-surface via-surface/40 to-transparent opacity-90"></div>
                   
                   {/* Floating Icon */}
                   <div className="absolute top-4 right-4 bg-surface/80 backdrop-blur-md p-3 rounded-xl border border-subtle-light shadow-lg z-10 group-hover:bg-primary group-hover:text-black transition-colors duration-300">
                      <span className="material-symbols-outlined text-2xl">{item.icon}</span>
                   </div>
                </div>

                {/* Content */}
                <div className="p-8 pt-6 relative flex-grow flex flex-col">
                  <h3 className="text-text-light text-2xl font-bold mb-3 group-hover:text-primary transition-colors">{item.title}</h3>
                  <p className="text-muted-light text-sm font-light leading-relaxed mb-6 flex-grow border-l border-primary/20 pl-4">
                    {item.desc}
                  </p>
                  <button 
                    onClick={() => onNavigate('contact')}
                    className="text-primary text-sm font-bold uppercase tracking-wider flex items-center gap-2 group-hover:gap-3 transition-all mt-auto"
                  >
                     Agendar Avaliação <span className="material-symbols-outlined text-lg">arrow_forward</span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section className="w-full @container py-24">
          <div className="relative overflow-hidden flex flex-col items-center gap-6 rounded-3xl bg-surface-highlight px-4 py-16 text-center @[480px]:gap-8 @[480px]:px-10 @[480px]:py-20 border border-subtle-light shadow-2xl">
            <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-primary/10 rounded-full blur-[100px]"></div>
            <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-96 h-96 bg-primary/5 rounded-full blur-[100px]"></div>
            
            <div className="relative z-10 flex flex-col gap-4">
              <h2 className="text-text-light text-3xl font-bold leading-tight @[480px]:text-4xl max-w-2xl mx-auto">
                Pronto para viver sua melhor versão?
              </h2>
              <p className="text-muted-light text-lg font-light leading-normal max-w-2xl mx-auto">
                Agende uma conversa com nossos especialistas. Sem compromisso, apenas clareza sobre o futuro do seu sorriso.
              </p>
            </div>
            <button 
              onClick={() => onNavigate('contact')}
              className="relative z-10 flex min-w-[84px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-14 px-10 bg-primary text-black text-base font-bold tracking-wide hover:scale-105 hover:shadow-[0_0_20px_rgba(0,242,234,0.4)] transition-all duration-300"
            >
              <span className="truncate">Agendar Avaliação</span>
            </button>
          </div>
        </section>

      </div>
    </div>
  );
};

export default Services;