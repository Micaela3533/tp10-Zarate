import React from 'react';
import './cards.scss';
import Navbar from './Navbar';

export default function About() {
  return (
    <>
      <Navbar />
      <link
        href="https://fonts.googleapis.com/icon?family=Material+Icons"
        rel="stylesheet"
      ></link>
      <div class="content">
        <div class="card">
          <div class="icon">
            <i class="material-icons md-36">face</i>
          </div>
          <p class="title">Objetivos PROFESIONALES</p>
          <p class="text">
            Uno de mis objetivos profesionales es poder trabajar en una gran
            empresa y poder irme del pais :){' '}
          </p>
        </div>
        <div class="card">
          <div class="icon">
            <i class="material-icons md-36">favorite</i>
          </div>
          <p class="title">intereses</p>
          <p class="text">
            Mis intereses son el arte, la programacion y los animales.
          </p>
        </div>
      </div>
    </>
  );
}
