import React from 'react';
import '../../assets/css/estilo.css';

const Reportes = () => {
  return (
    <body>
      <div className="sidebar">
        <div className="logo-container">
          <a href="/dashboard">
            <img src="img/logo.png" alt="Logo" className="logo" />
          </a>
          <h2>Admin</h2>
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
      </div>

      <div className="main-content">
        <div className="widget-menu">
          <div className="widget">
            <h3>Equipos totales</h3>
            <p>Total: 100</p>
            <div className="bar-chart">
              <div className="bar" style={{ width: '100%' }}></div>
            </div>
          </div>
          <div className="widget">
            <h3>Equipos en mantenimiento</h3>
            <p>Total: 20</p>
            <div className="bar-chart">
              <div className="bar" style={{ width: '20%' }}></div>
            </div>
          </div>
          <div className="widget">
            <h3>Índice de uso</h3>
            <p>% de crecimiento: 40%</p>
            <div className="bar-chart">
              <div className="bar" style={{ width: '40%' }}></div>
            </div>
          </div>
          <div className="widget">
            <h3>Indice varios</h3>
            <p>% de crecimiento: 30%</p>
            <div className="bar-chart">
              <div className="bar" style={{ width: '30%' }}></div>
            </div>
          </div>
        </div>
      </div>
    </body>
  );
};

export default Reportes;