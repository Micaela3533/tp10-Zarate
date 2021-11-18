import React from 'react';
import Navbar from './Navbar';
import './cards.scss';

export default function Proyectos() {
  return (
    <>
      <script
        type="module"
        src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.esm.js"
      ></script>
      <script
        nomodule
        src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.js"
      ></script>
      <link
        href="https://fonts.googleapis.com/icon?family=Material+Icons"
        rel="stylesheet"
      ></link>
      <Navbar />
      <div class="content">
        <div class="card">
          <div class="icon">
            <i class="material-icons md-36">code</i>
          </div>
          <p class="title">Buscador de series y peliculas</p>
          <a
            href="https://github.com/Micaela3533/Buscador-de-series-y-peliculas"
            class="text"
          >
            Descargar
          </a>
        </div>
        <div class="card">
          <div class="icon">
            <i class="material-icons md-36">code</i>
          </div>
          <p class="title">Formulario en php</p>
          <a
            href="https://github.com/Micaela3533/Formulario-en-php"
            class="text"
          >
            Descargar
          </a>
        </div>
        <div class="card">
          <div class="icon">
            <i class="material-icons md-36">code</i>
          </div>
          <p class="title">mi primer componente en react</p>
          <a
            href="https://github.com/Micaela3533/Mi-primer-componente-de-react"
            class="text"
          >
            Descargar
          </a>
        </div>
      </div>
    </>
  );
}
