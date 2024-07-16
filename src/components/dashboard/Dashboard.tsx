import React from 'react';
import '../../assets/css/estilo.css';
//import de la carpeta public
import logo from '../../assets/img/logo.png';
import images from'../../assets/img/images.png'; 
import report from '../../assets/img/report.png';
import perfil from '../../assets/img/perfil.png';
import reserva from '../../assets/img/reserva.png';

const Dashboard = () => {
  const redirectTo = (page: string) => {
    window.location.href = page;
  };

  return (
    <body>
      <div className="sidebar">
        <div className="logo-container">
          <a href="dashboard.html">
            <img src={logo} alt="Logo" className="logo" />

          </a>
          <h2>Admin</h2>
        </div>
        <nav>
          <ul>
            <li><a href="/gestion-equipos" id="gestionEquipos"><i className="fas fa-tasks"></i> Gestión de Equipos</a></li>
            <li><a href="/reportes" id="reportesEstadistica"><i className="fas fa-chart-bar"></i> Reportes y Estadística</a></li>
            <li><a href="/configuracion" id="configuracionPerfil"><i className="fas fa-user-cog"></i> Configuración de Perfil</a></li>
            <li><a href="/reservas" id="reservaEquipos"><i className="fas fa-calendar-alt"></i> Reserva de Laboratorios</a></li>
            <li><a href="/" id="salir"><i className="fas fa-sign-out-alt"></i> Salir</a></li>
          </ul>
        </nav>
      </div>
      <div className="main-content">
        <header>
          <h1>Resumen</h1>
        </header>
        <div className="cards">
          <div className="card" onClick={() => redirectTo('/gestion-equipos')}>
            <h3>Gestión de Equipos</h3>
            <img src={images} alt="report" className="imagenes" />
            <p>Administrar el inventario y su estado de disponibilidad de equipos.</p>
          </div>
          <div className="card" onClick={() => redirectTo('/reportes')}>
            <h3>Reportes y Estadística</h3>
            <img src={report} alt="report" className="imagenes" />
            <p>Informe sobre el uso de los laboratorios y el estado de equipos.</p>
          </div>
          <div className="card" onClick={() => redirectTo('/configuracion')}>
            <h3>Configuración de Perfil</h3>
            <img src={perfil} alt="perfil" className="imagenes" />
            <p>Descripción o información adicional sobre la productividad.</p>
          </div>
          <div className="card" onClick={() => redirectTo('/reservas')}>
            <h3>Reserva de Equipos</h3>
            <img src={reserva} alt="reserva" className="imagenes" />
            <p>Reserva el uso de los laboratorios en horarios especificos.</p>
          </div>
        </div>
      </div>
    </body>
  );
};

export default Dashboard;