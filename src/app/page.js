"use client"
import { useState, useEffect } from 'react';
import { Pagementos } from './components/pagemnto-card/pagementos/pagamento';
import './page.css';
import Image from 'next/image';
import imgPrinc from './components/pagemnto-card/imegs/Logo.jpg';

const Page = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(prevState => !prevState);
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) {
        setIsMenuOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleButtonClick = () => {
    const pagamento = document.querySelector('#pg');
    const opc = document.querySelector(".body");
    opc.classList.add("opc");
    pagamento.classList.remove("none");
  };

  return (
    <div className='body'>
      <header>
        <h1>Woovi</h1>
        <button className="mobile-menu-toggle" onClick={toggleMenu}>
          Menu
        </button>
        <nav className={`mobile-menu ${isMenuOpen ? 'nav-open' : ''}`}>
          <button className="close-menu" onClick={toggleMenu}>X</button>
          <ul>
            <li><a href="#hero" onClick={toggleMenu}>Produto</a></li>
            <li><a href="#benefits" onClick={toggleMenu}>Benefícios</a></li>
            <li><a href="#testimonials" onClick={toggleMenu}>Depoimentos</a></li>
            <li><a href="#contact" onClick={toggleMenu}>Contato</a></li>
          </ul>
        </nav>
      </header>

      {/* Seção principal (Hero Section) */}
      <section id="hero">
        <div className='hero-content'>
          <div className='img'>
            <img src='https://startups.com.br/wp-content/uploads/2024/03/img-woovi-01.png' />
          </div>
          <h2>Simples, seguro, Woovi: o jeito fácil de pagar.</h2>
          <p>Woovi oferece uma plataforma intuitiva e segura para
            simplificar seus pagamentos. Com tecnologia avançada e
            foco na experiência do usuário, Woovi garante transações rápidas,
            seguras e sem complicações, para que você possa focar no que
            realmente importa.</p>
          <button onClick={handleButtonClick}>Comprar Agora</button>
        </div>
      </section>

      <section id='pg' className='pagamento none'>
        <Pagementos />
      </section>
    </div>
  );
};

export default Page;
