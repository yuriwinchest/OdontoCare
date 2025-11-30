import React, { useState, useEffect } from 'react';

interface HeaderProps {
  currentPage: string;
  onNavigate: (page: any) => void;
}

const Header: React.FC<HeaderProps> = ({ currentPage, onNavigate }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [theme, setTheme] = useState<'dark' | 'light'>('dark');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);

    // Initialize theme state based on html class
    if (document.documentElement.classList.contains('dark')) {
      setTheme('dark');
    } else {
      setTheme('light');
    }

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleTheme = () => {
    const html = document.documentElement;
    if (html.classList.contains('dark')) {
      html.classList.remove('dark');
      setTheme('light');
    } else {
      html.classList.add('dark');
      setTheme('dark');
    }
  };

  const navLinks = [
    { id: 'home', label: 'Início' },
    { id: 'services', label: 'Serviços' },
    { id: 'about', label: 'Sobre Nós' },
    { id: 'contact', label: 'Contato' },
  ];

  const handleMobileNav = (id: string) => {
    onNavigate(id);
    setMobileMenuOpen(false);
  };

  return (
    <header 
      className={`fixed top-0 z-50 w-full transition-all duration-300 ${
        scrolled || mobileMenuOpen 
          ? 'bg-background-light/90 backdrop-blur-md border-b border-subtle-light' 
          : 'bg-transparent border-transparent'
      }`}
    >
      <div className="flex items-center justify-between whitespace-nowrap px-6 sm:px-10 lg:px-20 py-4 max-w-[1400px] mx-auto relative">
        
        {/* Logo */}
        <div 
          className="flex items-center gap-3 text-text-light cursor-pointer group"
          onClick={() => onNavigate('home')}
        >
          <div className="size-8 text-primary transition-transform group-hover:scale-110 duration-300">
            <svg fill="currentColor" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
              <path d="M42.1739 20.1739L27.8261 5.82609C29.1366 7.13663 28.3989 10.1876 26.2002 13.7654C24.8538 15.9564 22.9595 18.3449 20.6522 20.6522C18.3449 22.9595 15.9564 24.8538 13.7654 26.2002C10.1876 28.3989 7.13663 29.1366 5.82609 27.8261L20.1739 42.1739C21.4845 43.4845 24.5355 42.7467 28.1133 40.548C30.3042 39.2016 32.6927 37.3073 35 35C37.3073 32.6927 39.2016 30.3042 40.548 28.1133C42.7467 24.5355 43.4845 21.4845 42.1739 20.1739Z" fill="currentColor"></path>
              <path clipRule="evenodd" d="M7.24189 26.4066C7.31369 26.4411 7.64204 26.5637 8.52504 26.3738C9.59462 26.1438 11.0343 25.5311 12.7183 24.4963C14.7583 23.2426 17.0256 21.4503 19.238 19.238C21.4503 17.0256 23.2426 14.7583 24.4963 12.7183C25.5311 11.0343 26.1438 9.59463 26.3738 8.52504C26.5637 7.64204 26.4411 7.31369 26.4066 7.24189C26.345 7.21246 26.143 7.14535 25.6664 7.1918C24.9745 7.25925 23.9954 7.5498 22.7699 8.14278C20.3369 9.32007 17.3369 11.4915 14.4142 14.4142C11.4915 17.3369 9.32007 20.3369 8.14278 22.7699C7.5498 23.9954 7.25925 24.9745 7.1918 25.6664C7.14534 26.143 7.21246 26.345 7.24189 26.4066ZM29.9001 10.7285C29.4519 12.0322 28.7617 13.4172 27.9042 14.8126C26.465 17.1544 24.4686 19.6641 22.0664 22.0664C19.6641 24.4686 17.1544 26.465 14.8126 27.9042C13.4172 28.7617 12.0322 29.4519 10.7285 29.9001L21.5754 40.747C21.6001 40.7606 21.8995 40.931 22.8729 40.7217C23.9424 40.4916 25.3821 39.879 27.0661 38.8441C29.1062 37.5904 31.3734 35.7982 33.5858 33.5858C35.7982 31.3734 37.5904 29.1062 38.8441 27.0661C39.879 25.3821 40.4916 23.9425 40.7216 22.8729C40.931 21.8995 40.7606 21.6001 40.747 21.5754L29.9001 10.7285ZM29.2403 4.41187L43.5881 18.7597C44.9757 20.1473 44.9743 22.1235 44.6322 23.7139C44.2714 25.3919 43.4158 27.2666 42.252 29.1604C40.8128 31.5022 38.8165 34.012 36.4142 36.4142C34.012 38.8165 31.5022 40.8128 29.1604 42.252C27.2666 43.4158 25.3919 44.2714 23.7139 44.6322C22.1235 44.9743 20.1473 44.9757 18.7597 43.5881L4.41187 29.2403C3.29027 28.1187 3.08209 26.5973 3.21067 25.2783C3.34099 23.9415 3.8369 22.4852 4.54214 21.0277C5.96129 18.0948 8.43335 14.7382 11.5858 11.5858C14.7382 8.43335 18.0948 5.9613 21.0277 4.54214C22.4852 3.8369 23.9415 3.34099 25.2783 3.21067C26.5973 3.08209 28.1187 3.29028 29.2403 4.41187Z" fill="currentColor" fillRule="evenodd"></path>
            </svg>
          </div>
          <h2 className="text-text-light text-lg font-bold leading-tight tracking-wide">OdontoCare</h2>
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex flex-1 justify-end gap-8 items-center">
          <div className="flex items-center gap-9">
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={`#${link.id === 'home' ? '' : link.id}`}
                onClick={(e) => {
                  e.preventDefault();
                  onNavigate(link.id);
                }}
                className={`text-sm font-semibold tracking-wide transition-all duration-300 ${
                  currentPage === link.id
                    ? 'text-primary drop-shadow-[0_0_8px_rgba(0,242,234,0.5)]'
                    : 'text-text-light/80 hover:text-text-light'
                }`}
              >
                {link.label}
              </a>
            ))}
          </div>

          <button 
            onClick={toggleTheme}
            className="p-2 rounded-full hover:bg-subtle-light text-text-light transition-colors"
            title="Alternar Tema"
          >
            <span className="material-symbols-outlined">
              {theme === 'dark' ? 'light_mode' : 'dark_mode'}
            </span>
          </button>

          <button 
            onClick={() => onNavigate('contact')}
            className="group relative flex min-w-[140px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-10 px-6 bg-text-light text-background-light text-sm font-bold tracking-wide hover:bg-primary hover:text-black transition-all duration-300"
          >
            <span className="relative z-10">Agendar</span>
          </button>
        </div>

        {/* Mobile Menu Button */}
        <div className="flex items-center gap-4 md:hidden">
          <button 
            onClick={toggleTheme}
            className="p-2 rounded-full hover:bg-subtle-light text-text-light transition-colors"
          >
            <span className="material-symbols-outlined">
              {theme === 'dark' ? 'light_mode' : 'dark_mode'}
            </span>
          </button>
          
          <button 
            className="text-text-light hover:text-primary transition-colors relative z-50"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <span className="material-symbols-outlined text-3xl">
              {mobileMenuOpen ? 'close' : 'menu'}
            </span>
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown with Animation */}
      <div 
        className={`
          md:hidden 
          absolute top-full left-0 w-full 
          border-t border-subtle-light 
          bg-background-light/95 backdrop-blur-xl 
          p-6 flex flex-col gap-6 h-screen 
          transition-all duration-300 ease-in-out
          ${mobileMenuOpen 
            ? 'opacity-100 translate-y-0 visible pointer-events-auto' 
            : 'opacity-0 -translate-y-4 invisible pointer-events-none'
          }
        `}
      >
          {navLinks.map((link) => (
            <a
              key={link.id}
              href={`#${link.id === 'home' ? '' : link.id}`}
              onClick={(e) => {
                e.preventDefault();
                handleMobileNav(link.id);
              }}
              className={`text-2xl font-light transition-colors block w-full py-2 ${
                currentPage === link.id
                  ? 'text-primary'
                  : 'text-text-light'
              }`}
            >
              {link.label}
            </a>
          ))}
          <button 
          onClick={() => handleMobileNav('contact')}
          className="w-full mt-4 flex cursor-pointer items-center justify-center rounded-full h-14 bg-primary text-black text-lg font-bold hover:brightness-110 transition-all"
        >
          Agendar Consulta
        </button>
      </div>
    </header>
  );
};

export default Header;