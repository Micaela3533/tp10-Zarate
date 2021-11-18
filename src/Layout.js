import Navbar from './Navbar';
import About from './About';
import Proyectos from './Proyectos';
import React from 'react';
import './principio.scss';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

export default function App() {
  return (
    <>
      <Navbar />
      <p class="pi">
        TP 10 - Micaela Zarate
        <span class="bien"> Bienvenidos</span>
      </p>
    </>
  );
}
