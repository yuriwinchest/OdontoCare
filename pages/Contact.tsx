
import React from 'react';

const Contact: React.FC = () => {
  const handleCopyWhatsApp = () => {
    navigator.clipboard.writeText("(XX) XXXXX-XXXX");
    alert("Número de exemplo copiado: (XX) XXXXX-XXXX");
  };

  return (
    <div className="container mx-auto px-6 sm:px-10 lg:px-20 py-24">
      {/* Page Heading */}
      <div className="mx-auto max-w-4xl text-center mb-20">
        <h1 className="text-text-light text-4xl md:text-5xl font-medium tracking-tight mb-6">Concierge Odontológico</h1>
        <p className="text-muted-light text-lg font-light max-w-2xl mx-auto">
          Inicie sua jornada de transformação. Preencha o formulário abaixo e nossa equipe entrará em contato para agendar sua experiência exclusiva.
        </p>
      </div>

      <div className="mx-auto max-w-[1200px] grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
        {/* Form Section */}
        <div className="bg-surface border border-subtle-light rounded-3xl p-8 sm:p-10 relative overflow-hidden shadow-xl">
          <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-full blur-[50px] -mr-16 -mt-16 pointer-events-none"></div>
          
          <h2 className="text-text-light text-2xl font-semibold mb-8 relative z-10">Agendamento</h2>
          
          <form className="space-y-8 relative z-10" onSubmit={(e) => e.preventDefault()}>
            {/* TextField: Nome */}
            <div className="group">
              <label className="block text-primary text-xs uppercase tracking-wider font-bold mb-2">Nome Completo</label>
              <input 
                name="name"
                className="w-full bg-transparent border-b border-subtle-light text-text-light placeholder-muted-light/50 py-3 text-lg focus:outline-none focus:border-primary transition-colors" 
                placeholder="Digite seu nome" 
                type="text" 
                required
              />
            </div>
            
            {/* Group: E-mail, Telefone, WhatsApp */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              <div className="group">
                <label className="block text-primary text-xs uppercase tracking-wider font-bold mb-2">E-mail</label>
                <input 
                  name="email"
                  className="w-full bg-transparent border-b border-subtle-light text-text-light placeholder-muted-light/50 py-3 text-lg focus:outline-none focus:border-primary transition-colors" 
                  placeholder="exemplo@email.com" 
                  type="email" 
                  required
                />
              </div>
              <div className="group">
                <label className="block text-primary text-xs uppercase tracking-wider font-bold mb-2">Telefone</label>
                <input 
                  name="phone"
                  className="w-full bg-transparent border-b border-subtle-light text-text-light placeholder-muted-light/50 py-3 text-lg focus:outline-none focus:border-primary transition-colors" 
                  placeholder="(XX) XXXXX-XXXX" 
                  type="tel" 
                />
              </div>
              <div className="group sm:col-span-2">
                <label className="block text-primary text-xs uppercase tracking-wider font-bold mb-2">WhatsApp</label>
                <div className="relative">
                  <input 
                    name="whatsapp"
                    className="w-full bg-transparent border-b border-subtle-light text-text-light placeholder-muted-light/50 py-3 text-lg focus:outline-none focus:border-primary transition-colors pr-12" 
                    placeholder="(XX) XXXXX-XXXX" 
                    type="tel" 
                  />
                  <button
                    type="button"
                    onClick={handleCopyWhatsApp}
                    className="absolute right-0 top-1/2 -translate-y-1/2 text-muted-light hover:text-[#25D366] transition-colors p-2"
                    title="Copiar formato"
                  >
                    <svg role="img" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6" xmlns="http://www.w3.org/2000/svg">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                    </svg>
                  </button>
                </div>
              </div>
            </div>

            {/* Date Picker */}
            <div className="group">
              <label className="block text-primary text-xs uppercase tracking-wider font-bold mb-2">Data Preferencial</label>
              <input 
                name="date"
                className="w-full bg-transparent border-b border-subtle-light text-text-light placeholder-muted-light/50 py-3 text-lg focus:outline-none focus:border-primary transition-colors [color-scheme:light] dark:[color-scheme:dark]" 
                type="date" 
              />
            </div>

            {/* Text Area */}
            <div className="group">
              <label className="block text-primary text-xs uppercase tracking-wider font-bold mb-2">Mensagem (opcional)</label>
              <textarea 
                name="message"
                className="w-full bg-transparent border-b border-subtle-light text-text-light placeholder-muted-light/50 py-3 text-lg focus:outline-none focus:border-primary transition-colors min-h-[100px] resize-none" 
                placeholder="Como podemos ajudar?"
              ></textarea>
            </div>

            {/* Submit Button */}
            <button 
              className="w-full flex cursor-pointer items-center justify-center rounded-full h-14 bg-primary text-black text-base font-bold tracking-wide hover:shadow-[0_0_20px_rgba(0,242,234,0.3)] transition-all duration-300" 
              type="submit"
            >
              <span>Confirmar Solicitação</span>
            </button>
          </form>
        </div>

        {/* Info and Map Section */}
        <div className="space-y-12 py-4">
          {/* Contact Info Block */}
          <div>
            <h3 className="text-text-light text-2xl font-semibold mb-8">Informações</h3>
            <div className="space-y-8">
              <div className="flex items-start gap-6">
                <div className="w-12 h-12 flex items-center justify-center rounded-full border border-subtle-light text-primary shrink-0">
                  <span className="material-symbols-outlined text-2xl">phone</span>
                </div>
                <div>
                  <p className="text-xs text-muted-light uppercase tracking-widest mb-1">Telefone</p>
                  <a className="text-xl text-text-light hover:text-primary transition-colors" href="tel:+5511999998888">+55 (11) 99999-8888</a>
                </div>
              </div>
              
              <div className="flex items-start gap-6">
                <div className="w-12 h-12 flex items-center justify-center rounded-full border border-subtle-light text-primary shrink-0">
                  <span className="material-symbols-outlined text-2xl">mail</span>
                </div>
                <div>
                  <p className="text-xs text-muted-light uppercase tracking-widest mb-1">E-mail</p>
                  <a className="text-xl text-text-light hover:text-primary transition-colors" href="mailto:contato@clinica.com">contato@clinica.com</a>
                </div>
              </div>

              <div className="flex items-start gap-6">
                <div className="w-12 h-12 flex items-center justify-center rounded-full border border-subtle-light text-primary shrink-0">
                  <span className="material-symbols-outlined text-2xl">location_on</span>
                </div>
                <div>
                  <p className="text-xs text-muted-light uppercase tracking-widest mb-1">Localização</p>
                  <p className="text-xl text-text-light">Av. Paulista, 1234 - São Paulo, SP</p>
                </div>
              </div>

              <div className="flex items-start gap-6">
                 <div className="w-12 h-12 flex items-center justify-center rounded-full border border-subtle-light text-primary shrink-0">
                  <span className="material-symbols-outlined text-2xl">schedule</span>
                </div>
                <div>
                  <p className="text-xs text-muted-light uppercase tracking-widest mb-1">Horários</p>
                  <p className="text-xl text-text-light">Seg a Sex: 08:00 - 18:00</p>
                </div>
              </div>
            </div>
          </div>

          {/* Map */}
          <div>
            <div className="aspect-video w-full overflow-hidden rounded-3xl border border-subtle-light relative z-10">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3657.2114084619405!2d-46.65650822467005!3d-23.56410497879952!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce59c8da0aa315%3A0xd59f9431f2c9776a!2sAv.%20Paulista%2C%20S%C3%A3o%20Paulo%20-%20SP!5e0!3m2!1spt-BR!2sbr!4v1709920000000!5m2!1spt-BR!2sbr"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="grayscale hover:grayscale-0 transition-all duration-700"
                title="Google Maps Location"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
