import Navbar from './Navbar';
import About from './About';
import Proyectos from './Proyectos';
import React from 'react';
import './contact.css';

import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

export default function Contacto() {
  function mensaje() {
    alert('El mensaje se ha enviado correctamente');
  }

  return (
    <>
      <Navbar />
      <div class="background">
        <div class="container">
          <div class="screen">
            <div class="screen-header">
              <div class="screen-header-left">
                <div class="screen-header-button close"></div>
                <div class="screen-header-button maximize"></div>
                <div class="screen-header-button minimize"></div>
              </div>
              <div class="screen-header-right">
                <div class="screen-header-ellipsis"></div>
                <div class="screen-header-ellipsis"></div>
                <div class="screen-header-ellipsis"></div>
              </div>
            </div>
            <div class="screen-body">
              <div class="screen-body-item left">
                <div class="app-title">
                  <span>CONTACT</span>
                  <span>ME</span>
                </div>
                <div class="app-contact">
                  CONTACT INFO : micaelazarat123@gmail.com
                </div>
              </div>
              <div class="screen-body-item">
                <div class="app-form">
                  <div class="app-form-group">
                    <input class="app-form-control" placeholder="NOMBRE" />
                  </div>
                  <div class="app-form-group">
                    <input class="app-form-control" placeholder="APELLIDO" />
                  </div>
                  <div class="app-form-group">
                    <input class="app-form-control" placeholder="EMAIL" />
                  </div>
                  <div class="app-form-group message">
                    <input class="app-form-control" placeholder="MESSAGE" />
                  </div>
                  <div class="app-form-group buttons">
                    <button
                      onClick={mensaje}
                      type="submit"
                      class="app-form-button"
                    >
                      SEND
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
