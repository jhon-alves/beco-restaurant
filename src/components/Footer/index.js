import React from 'react';
import { Link } from 'react-router-dom';

import './styles.css';

function Footer() {
  return (
    <div className="footer-container">
      <section className="footer-subscribe">
        <p className="footer-subscribe-head">
          Receba notícias sobre o BECO!
        </p>
        <p className="footer-subscribe-text">
          Você pode cancelar a sua inscrição a qualquer momento.
        </p>
        <div className="input-area">
          <form>
            <input 
              type="text" 
              name="email"
              placeholder="Seu e-mail"
              className="inp-newsletter"
            />
            <button className="btn-outline">Cadastrar</button>
          </form>
        </div>
      </section>

      <div className="footer-links">
        <div className="footer-link-wrapper">
          <div className="footer-link-items">
            <h2>O BECO</h2>
            <Link to="/">História</Link>
            <Link to="/">Cardápio</Link>
            <Link to="/">Delivery</Link>
            <Link to="/">Franquia</Link>
          </div>

          <div className="footer-link-items">
            <h2>Dicas</h2>
            <Link to="/">Consultoria</Link>
            <Link to="/">Eventos</Link>
            <Link to="/">Reservas</Link>
            <Link to="/">Mídia</Link>
          </div>

          <div className="footer-link-items">
            <h2>Unidades</h2>
            <Link to="/">Brasília</Link>
            <Link to="/">Curitiba</Link>
            <Link to="/">Itaim</Link>
            <Link to="/">Pinheiros</Link>
          </div>
        </div>
      </div>

      <section className="social-media">
        <div className="social-media-wrapper">
          <div className="footer-logo">
            <Link to="/" className="social-logo">
              BECO
            </Link>
          </div>

          <div className="social-icons">
            <Link
              to="/"
              className="social-icon-link facebook"
              target="_blank"
              aria-label="Facebook"
            >
              <i className="fab fa-facebook-f"></i>
            </Link>

            <Link
              to="/"
              className="social-icon-link instagram"
              target="_blank"
              aria-label="Instagram"
            >
              <i className="fab fa-instagram"></i>
            </Link>

            <Link
              to="/"
              className="social-icon-link twitter"
              target="_blank"
              aria-label="Twitter"
            >
              <i className="fab fa-twitter"></i>
            </Link>

            <Link
              to="/"
              className="social-icon-link youtube"
              target="_blank"
              aria-label="Youtube"
            >
              <i className="fab fa-youtube"></i>
            </Link>
          </div>
        </div>
      </section>
      <div className="copyright">
        <p>BECO 2020 - Todos os direitos reservados</p>
      </div>
    </div>
  );
}

export default Footer;
