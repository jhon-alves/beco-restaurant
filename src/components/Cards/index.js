import React from 'react';

import './styles.css';
import CardsItem from '../CardsItem';


function Cards() {
  return (
    <div className="cards">
      <h1>Mais Pedidos</h1>
      <div className="cards-container">
        <div className="cards-wrapper">
          <ul className="cards-items">
            <CardsItem
              src="images/menu01.jpg"
              path="/cardapio"
              text="Barriga de Salmão Flambado"
            />
            <CardsItem
              src="images/menu02.jpg"
              path="/cardapio"
              text="Salmão Fuagrá"
            />
          </ul>
          <ul className="cards-items">
            <CardsItem
              src="images/menu03.jpg"
              path="/cardapio"
              text="Salmão com maracujá"
            />
            <CardsItem
              src="images/menu04.jpg"
              path="/cardapio"
              text="Camarão com Salada"
            />
            <CardsItem
              src="images/menu05.jpg"
              path="/cardapio"
              text="Risoto de Frutos do Mar"
            />
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Cards;
