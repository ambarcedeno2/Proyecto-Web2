import React, { useEffect } from 'react';
import Swal from 'sweetalert2';
import 'sweetalert2/dist/sweetalert2.min.css';
import '../../assets/css/estilo.css';
import pc from '../../assets/img/pc.png';
import logo from '../../assets/img/logo.png';


const GestionEquipo: React.FC = () => {
  useEffect(() => {
    const darBajaButton = document.getElementById('darBaja');
    const mantenimientoButton = document.getElementById('mantenimiento');

    if (darBajaButton) {
      darBajaButton.addEventListener('click', () => {
        Swal.fire({
          title: '¿Estás seguro?',
          text: "Esta acción es irremediable, ¿deseas dar de baja este equipo?",
          icon: 'warning',
          showCancelButton: true,
          confirmButtonColor: '#3085d6',
          cancelButtonColor: '#d33',
          confirmButtonText: 'Sí, dar de baja',
          cancelButtonText: 'Cancelar'
        }).then((result) => {
          if (result.isConfirmed) {
            Swal.fire({
              title: 'Equipo dado de baja!',
              text: 'El equipo fue dado de baja',
              icon: 'success',
              timer: 5000,
              timerProgressBar: true,
              allowOutsideClick: false,
              showConfirmButton: false
            }).then(() => {
              window.location.href = "gestion-equipos.html";
            });
          }
        });
      });
    }

    if (mantenimientoButton) {
      mantenimientoButton.addEventListener('click', () => {
        Swal.fire({
          title: 'Programar Mantenimiento',
          html: '<input type="date" id="fechaMantenimiento" class="swal2-input">',
          showCancelButton: true,
          confirmButtonText: 'Aceptar',
          cancelButtonText: 'Cancelar',
          preConfirm: () => {
            const fechaMantenimiento = (Swal.getPopup()?.querySelector('#fechaMantenimiento') as HTMLInputElement)?.value;
            if (!fechaMantenimiento) {
              Swal.showValidationMessage(`Por favor ingresa una fecha`);
            }
            return { fechaMantenimiento: fechaMantenimiento };
          }
        }).then((result) => {
          if (result.isConfirmed) {
            Swal.fire({
              title: 'Mantenimiento Programado!',
              text: `Se programó correctamente el mantenimiento para el ${result.value.fechaMantenimiento}`,
              icon: 'success'
            });
          }
        });
      });
    }
  }, []);

  return (
    <body>
      <div className="sidebar">
        <div className="logo-container">
          <a href="/dashboard">
            <img src={logo} alt="Logo" className="logo" />
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
        <div className="pc-details">
          <img src={pc} alt="PC 1" className="pc-image" />
          <h2>Equipo { }</h2>
          <p>Descripción detallada del equipo 1.</p>
          <p>Estado: Disponible</p>
          <p>Especificación técnica: [Especificación técnica clave]</p>
          <p>Último mantenimiento: [Fecha del último mantenimiento]</p>
          <p>Fecha de adquisición: [Fecha de adquisición]</p>
          <div className="button-container">
            <button id="darBaja">Dar de Baja</button>
            <button id="mantenimiento">Enviar a Mantenimiento</button>
          </div>
        </div>
      </div>
    </body>
  );
};

export default GestionEquipo;