import React from 'react';
import './styles.css';

function Banner() {
  return (
    <div className="banner-container">
      <img className="bg" src="/images/bg01.svg" alt="Banner Beco"/>
      <h1>O MELHOR RESTAURANTE DO BRASIL</h1>
      <p>O que você está esperando?</p>
    </div>
  );
}

export default Banner;
