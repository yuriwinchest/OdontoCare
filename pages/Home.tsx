
import React from 'react';

interface HomeProps {
  onNavigate: (page: any) => void;
}

const Home: React.FC<HomeProps> = ({ onNavigate }) => {
  return (
    <>
      {/* Hero Section */}
      <section className="relative w-full min-h-[95vh] flex items-center justify-center overflow-hidden pt-20">
        {/* Background Image with Overlay */}
        <div 
          className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat bg-fixed" 
          style={{backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuCLoXymPjC1WaMp5z7Oc86BzZ59-Y44qzPqpC43LJXGwOrvnw_o5kXfI8q_6yodx2hY4j-VAVPJZCN6zt6nHGnO79frWv-0Z-4IkjgIJNZAGhJsfQAepOMxQKmb8MLOWAS2thUkcKY3VNfiDmCzcap8M9kqinM1Zs0IoZefLI9UKAAB6h-bHg37AwYP_1kWFYpMLett4rTEZSubDSUtIvbzSkm0kj3dXrcRytjjgV2R3QUscbnqU8nH4-Yzx-ULBdI-2E3RF5rh7A")'}}
        ></div>
        
        {/* Sophisticated Gradients Layering */}
        {/* 1. Base tint for uniformity */}
        <div className="absolute inset-0 z-0 bg-black/20"></div>

        {/* 2. Strong left gradient for text legibility */}
        <div className="absolute inset-0 z-0 bg-gradient-to-r from-background-light via-background-light/90 to-transparent sm:via-background-light/60"></div>
        
        {/* 3. Bottom fade for seamless transition to next section */}
        <div className="absolute inset-0 z-0 bg-gradient-to-t from-background-light via-background-light/50 to-transparent"></div>

        {/* 4. Top fade for header contrast */}
        <div className="absolute inset-0 z-0 bg-gradient-to-b from-background-light/60 via-transparent to-transparent"></div>

        <div className="relative z-10 w-full max-w-[1400px] mx-auto px-6 sm:px-10 lg:px-20 flex flex-col items-start gap-8">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-primary/30 bg-background-light/30 backdrop-blur-md shadow-lg">
            <span className="flex h-2 w-2 rounded-full bg-primary animate-pulse"></span>
            <span className="text-xs font-bold text-primary tracking-wider uppercase">Odontologia de Alto Padrão</span>
          </div>
          
          <h1 className="text-text-light text-5xl md:text-7xl font-medium leading-[1.1] tracking-tight max-w-4xl drop-shadow-sm">
            Sua melhor versão <br/>
            começa pelo <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-emerald-400 drop-shadow-none">seu sorriso.</span>
          </h1>
          
          <p className="text-text-light/90 text-lg md:text-xl font-light leading-relaxed max-w-xl drop-shadow-sm">
            Experimente o futuro da odontologia. Tecnologia de ponta, ambiente exclusivo e atendimento personalizado para quem exige excelência.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 mt-4">
            <button 
              onClick={() => onNavigate('contact')}
              className="flex items-center justify-center rounded-full h-14 px-8 bg-primary text-black text-base font-bold tracking-wide hover:shadow-[0_0_20px_rgba(0,242,234,0.4)] transition-all duration-300 transform hover:scale-105"
            >
              Agendar Avaliação
            </button>
            <button 
              onClick={() => onNavigate('services')}
              className="flex items-center justify-center rounded-full h-14 px-8 border border-text-light/30 bg-background-light/10 backdrop-blur-md text-text-light text-base font-medium hover:bg-background-light/20 transition-all duration-300"
            >
              Nossos Tratamentos
            </button>
          </div>
        </div>
      </section>

      {/* Intro Section */}
      <section className="px-6 sm:px-10 lg:px-20 py-24 max-w-[1400px] mx-auto">
        <div className="flex flex-col md:flex-row items-center gap-16 md:gap-24">
          <div className="flex-shrink-0 relative">
            <div className="absolute -inset-4 bg-primary/20 rounded-full blur-3xl opacity-30"></div>
            <div className="bg-center bg-no-repeat aspect-square bg-cover rounded-2xl size-64 md:size-80 relative z-10 shadow-2xl grayscale hover:grayscale-0 transition-all duration-700" style={{backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuC8AiFBdK7zQpBlX2N40qQRduBwMnTBDtF3cgDS1xDT34rqnMd7rycirTo4jkIrWBMH469GoHFu_c5Jy5nrWhkuWN_UuvECK0cOZkA6FeSbXpBRf6gE_Nnp6PdeqS-KaUsVBRBQXyhJQg1bFnDYAI39XDhcIx7FMsX_t9jtzoyaE4wVYJ4mfdqqNq2b6jv-mVgUhtZObNybYIOOR2h1jy0qdwc7E5aLspFHbpLVj-26l_jmh2gf88VSyrOKtWuAZaaoIrfMU3MBVA")'}}></div>
          </div>
          <div className="flex flex-col gap-8 text-center md:text-left">
            <div>
              <h2 className="text-text-light text-3xl md:text-4xl font-semibold leading-tight mb-4">Excelência em cada <br/>detalhe clínico</h2>
              <div className="h-1 w-20 bg-primary rounded-full mx-auto md:mx-0"></div>
            </div>
            <p className="text-muted-light text-lg font-light leading-relaxed">
              Nossa filosofia combina a mais alta tecnologia com um toque humano insubstituível. Acreditamos que a saúde bucal é a arquitetura da confiança. Em um ambiente minimalista e acolhedor, transformamos não apenas sorrisos, mas a forma como você se apresenta ao mundo.
            </p>
            <div className="grid grid-cols-2 gap-8 mt-4">
              <div>
                <p className="text-3xl font-bold text-text-light mb-1">15+</p>
                <p className="text-sm text-muted-light uppercase tracking-widest">Anos de Experiência</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-text-light mb-1">5k+</p>
                <p className="text-sm text-muted-light uppercase tracking-widest">Sorrisos Criados</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="px-6 sm:px-10 lg:px-20 py-24 bg-surface/30 max-w-full">
        <div className="max-w-[1400px] mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <div>
              <h2 className="text-text-light text-3xl md:text-4xl font-semibold leading-tight">Procedimentos Exclusivos</h2>
              <p className="text-muted-light mt-4 max-w-md font-light">Tecnologia avançada para resultados estéticos naturais e duradouros.</p>
            </div>
            <button onClick={() => onNavigate('services')} className="text-primary font-bold hover:text-text-light transition-colors flex items-center gap-2">
              Ver todos os serviços <span className="material-symbols-outlined text-lg">arrow_forward</span>
            </button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Clareamento Premium */}
            <div 
              onClick={() => onNavigate('services')}
              className="group rounded-2xl bg-surface border border-subtle-light hover:border-primary/50 hover:bg-surface-highlight transition-colors duration-500 cursor-pointer overflow-hidden flex flex-col"
            >
              <div className="h-56 w-full overflow-hidden relative">
                <div 
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105 will-change-transform"
                  style={{backgroundImage: 'url("https://images.unsplash.com/photo-1598256989800-fe5f95da9787?q=80&w=1000&auto=format&fit=crop")'}}
                ></div>
                <div className="absolute inset-0 bg-gradient-to-t from-surface via-surface/20 to-transparent opacity-80 pointer-events-none"></div>
              </div>
              
              <div className="p-8 relative">
                <div className="absolute -top-10 right-6 bg-surface p-3 rounded-xl border border-subtle-light shadow-lg">
                   <div className="bg-primary/10 text-primary w-10 h-10 flex items-center justify-center rounded-lg">
                      <span className="material-symbols-outlined text-2xl">auto_awesome</span>
                   </div>
                </div>
                <h3 className="text-xl font-bold text-text-light mb-3 mt-2">Clareamento Premium</h3>
                <p className="text-muted-light text-sm leading-relaxed">Protocolos personalizados para um branco natural e luminoso, sem sensibilidade.</p>
              </div>
            </div>

            {/* Implantes Suíços */}
            <div 
               onClick={() => onNavigate('services')}
               className="group rounded-2xl bg-surface border border-subtle-light hover:border-primary/50 hover:bg-surface-highlight transition-colors duration-500 cursor-pointer overflow-hidden flex flex-col"
            >
              <div className="h-56 w-full overflow-hidden relative">
                <div 
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105 will-change-transform"
                  style={{backgroundImage: 'url("https://images.unsplash.com/photo-1629909613654-28e377c37b09?q=80&w=1000&auto=format&fit=crop")'}}
                ></div>
                <div className="absolute inset-0 bg-gradient-to-t from-surface via-surface/20 to-transparent opacity-80 pointer-events-none"></div>
              </div>
              
              <div className="p-8 relative">
                <div className="absolute -top-10 right-6 bg-surface p-3 rounded-xl border border-subtle-light shadow-lg">
                   <div className="bg-primary/10 text-primary w-10 h-10 flex items-center justify-center rounded-lg">
                      <span className="material-symbols-outlined text-2xl">dentistry</span>
                   </div>
                </div>
                <h3 className="text-xl font-bold text-text-light mb-3 mt-2">Implantes Suíços</h3>
                <p className="text-muted-light text-sm leading-relaxed">Reabilitação oral completa com materiais de padrão ouro mundial.</p>
              </div>
            </div>

            {/* Ortodontia Invisível */}
            <div 
              onClick={() => onNavigate('services')}
              className="group rounded-2xl bg-surface border border-subtle-light hover:border-primary/50 hover:bg-surface-highlight transition-colors duration-500 cursor-pointer overflow-hidden flex flex-col"
            >
              <div className="h-56 w-full overflow-hidden relative">
                <div 
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105 will-change-transform"
                  style={{backgroundImage: 'url("https://images.unsplash.com/photo-1606811841689-23dfddce3e95?q=80&w=1000&auto=format&fit=crop")'}}
                ></div>
                 <div className="absolute inset-0 bg-gradient-to-t from-surface via-surface/20 to-transparent opacity-80 pointer-events-none"></div>
              </div>

              <div className="p-8 relative">
                <div className="absolute -top-10 right-6 bg-surface p-3 rounded-xl border border-subtle-light shadow-lg">
                   <div className="bg-primary/10 text-primary w-10 h-10 flex items-center justify-center rounded-lg">
                      <span className="material-symbols-outlined text-2xl">orthopedics</span>
                   </div>
                </div>
                <h3 className="text-xl font-bold text-text-light mb-3 mt-2">Ortodontia Invisível</h3>
                <p className="text-muted-light text-sm leading-relaxed">Alinhadores transparentes que corrigem seu sorriso sem impactar sua rotina.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="px-6 sm:px-10 lg:px-20 py-24 max-w-[1400px] mx-auto">
        <h2 className="text-3xl font-semibold text-center text-text-light mb-16">Histórias Reais</h2>
        
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {[
            {
              name: "Mariana Costa",
              role: "Clareamento",
              img: "https://lh3.googleusercontent.com/aida-public/AB6AXuBjZIcP340Q-BKolhlKbEnA2qlBO974jk_A5JqDDr0B6DXpm610nrb_i8XQ2FmwGBRjd6eYLClt6hkmAeodIkebJZMPwS3cPUjk_Pdo9CZ6RNASMbmpkZAUDKwK9NXBWD1g_MTnc6UpLV_e1FqY4Ww4u6S8aL-zbn3mr5GocGSXtyOgzBm5llZUj80F27bPmKWhAlRPKYFZUlG0OE0i1CfaHdAxURhxOlavxz5ftNjpH8wMtAX6CZG5ez5n9UBUtnFg1zmmfrJfeg",
              text: "O ambiente é sofisticado e o atendimento impecável. O resultado superou minhas expectativas."
            },
            {
              name: "Ricardo Almeida",
              role: "Implantes",
              img: "https://lh3.googleusercontent.com/aida-public/AB6AXuArc9L0q-ithzYI0U3Zo_f3AQTnWzR3zcvA1Lwl3t5w5IR4RAB9SuTbyVK0a6rNsgFIRQJtsZHAhB22Ulf4_VAcU_k_vd8y3QmUCKCnNdUdHwpmVOZi2sjVJBRI2W2x8wEUxl-h1tNitYw6QzL6LI2bSBqVuXXCdhwXQNTcajAh8Gyg0pFKygVJxW0Bkr93sJNq5RmCXh7SB9Oiv5muUxrkj7RZk-ZUe4yUOwEAxs0Vilgh8Qo_dPXUgkoNVb6WUBCWVpr6fgoDgg",
              text: "Tecnologia de ponta. Fiz meu tratamento completo em tempo recorde e sem dor."
            },
            {
              name: "Juliana Pereira",
              role: "Ortodontia",
              img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDoTnGmbzWgePh7Ct6UuPSNNgmQE_ctilLRB1L6GnqIogSW9HYGHXGEHJpv1jLi9biSMXNnwRWVwI62HxHq3xv2DVULg7g60XcmNnkIYUyUZ3iIyWdXMVAsNg8ZwGapsnYYpCRoV07tVz8oMZK7xqxAI3wnLI5k1YrQXlPznwZWVnQwcc-Rh8LfotDRItfxTPD9WfY_n2GOmntx3EGcFYJxzOLFNybyIdBEP0LpT9rA2h3Kaa3ms-tYKqJqBBpxhuOWR5QgJWW89g",
              text: "A discrição do tratamento invisível foi perfeita para meu trabalho. Gratidão à equipe."
            }
          ].map((item, index) => (
            <div key={index} className="relative p-8 rounded-2xl bg-gradient-to-br from-surface to-transparent border border-subtle-light hover:-translate-y-2 transition-transform duration-300 shadow-lg">
              <div className="absolute top-6 right-6 text-primary/20">
                <span className="material-symbols-outlined text-6xl">format_quote</span>
              </div>
              <div className="flex items-center gap-4 mb-6">
                <div className="size-14 rounded-full bg-cover bg-center border-2 border-primary/20" style={{backgroundImage: `url("${item.img}")`}}></div>
                <div>
                  <h3 className="text-lg font-bold text-text-light">{item.name}</h3>
                  <p className="text-xs text-primary uppercase tracking-wider">{item.role}</p>
                </div>
              </div>
              <p className="text-muted-light font-light italic leading-relaxed relative z-10">"{item.text}"</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default Home;
