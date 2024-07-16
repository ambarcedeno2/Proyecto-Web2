import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../../assets/css/style.css';
import logo from '../../assets/img/logo.png';

const Home = () => {
  const redirectTo = (page: string) => {
    window.location.href = page;
  };

  return (
    <div>
      <header>
        <div className="container">
          <div className="logo-container">
          <img src={logo} alt="Logo" className="logo" />
          </div>
          <h1>Software de Laboratorio de Computadoras</h1>
          <nav>
          <button id="loginBtn"  onClick={() => redirectTo('/login')}>Iniciar Sesión
            </button>

            <button id="registerBtn" onClick={() => redirectTo('/register')}>Registrarse</button>
          </nav>
        </div>
      </header>

      <section className="hero">
        <div className="container">
          <h2>Gestiona tu laboratorio de computación de manera eficiente</h2>
          <p>Optimiza el uso de recursos, monitorea el rendimiento de las máquinas y facilita el trabajo de tus técnicos con nuestro software especializado.</p>
        </div>
      </section>

      <section className="features">
        <h2>Características</h2>
        <div className="container">
          <div className="feature">
            <h3>Monitorización en Tiempo Real</h3>
            <p>Controla y supervisa el estado de todos los equipos en el laboratorio desde una sola interfaz.</p>
          </div>
          <div className="feature">
            <h3>Gestión de Recursos</h3>
            <p>Optimiza el uso de hardware y software asegurando que siempre estén disponibles para quien los necesite.</p>
          </div>
          <div className="feature">
            <h3>Informes Detallados</h3>
            <p>Genera informes completos sobre el uso y rendimiento de los equipos para tomar decisiones informadas.</p>
          </div>
        </div>
      </section>

      <footer>
        <div className="container">
          <p>&copy; 2024 Software de Laboratorio de Computadoras. Todos los derechos reservados.</p>
        </div>
      </footer>
    </div>
  );
};

export default Home;