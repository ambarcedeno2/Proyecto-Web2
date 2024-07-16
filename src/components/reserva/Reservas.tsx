import React, { useState } from 'react';
import Swal from 'sweetalert2';
import 'sweetalert2/dist/sweetalert2.min.css';
import '../../assets/css/estilo.css';

const Reserva = () => {
  const [laboratory, setLaboratory] = useState('');
  const [equipment, setEquipment] = useState('');
  const [date, setDate] = useState('');
  const [startTime, setStartTime] = useState('');
  const [endTime, setEndTime] = useState('');

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const now = new Date();
    const selectedDate = new Date(date + 'T' + startTime);
    const startTimeDate = new Date(date + 'T' + startTime);
    const endTimeDate = new Date(date + 'T' + endTime);

    if (!laboratory || !equipment || !date || !startTime || !endTime) {
      Swal.fire({
        icon: 'error',
        title: 'Error',
        text: 'Todos los campos son obligatorios.'
      });
      return;
    }

    if (selectedDate < now) {
      Swal.fire({
        icon: 'error',
        title: 'Error',
        text: 'La fecha y hora de inicio no pueden ser anteriores al momento actual.'
      });
      return;
    }

    if (startTimeDate >= endTimeDate) {
      Swal.fire({
        icon: 'error',
        title: 'Error',
        text: 'La hora de fin debe ser posterior a la hora de inicio.'
      });
      return;
    }

    const duration = (Number(endTimeDate) - Number(startTimeDate)) / (1000 * 60 * 60); // duración en horas

    if (duration > 2) {
      Swal.fire({
        icon: 'error',
        title: 'Error',
        text: 'La duración máxima de la reserva es de 2 horas.'
      });
      return;
    }

    // Confirmación de la reserva
    Swal.fire({
      title: 'Confirmar Reserva',
      text: `¿Estás seguro de que quieres reservar el equipo "${equipment}" en el "${laboratory}" para la fecha "${date}" desde "${startTime}" hasta "${endTime}"?`,
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Sí, reservar',
      cancelButtonText: 'Cancelar'
    }).then((result) => {
      if (result.isConfirmed) {
        // Guardar los datos en localStorage
        const reservation = {
          laboratory,
          equipment,
          date,
          startTime,
          endTime
        };
        localStorage.setItem('reservation', JSON.stringify(reservation));

        Swal.fire({
          icon: 'success',
          title: 'Éxito',
          text: 'La reserva se ha realizado correctamente.',
          timer: 2000,
          showConfirmButton: false
        }).then(() => {
          // Redirige a gestion_equipos.html
          window.location.href = "/gestion-equipos";
        });
        // Aquí puedes añadir el código para enviar la reserva al servidor
      }
    });
  };

  return (
    <body>
      <div className="sidebar">
        <div className="logo-container">
          <a href="dashboard.html">
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
        <div className="reservation-form-container">
          <h2>Reservar Laboratorio</h2>
          <form id="reservation-form" onSubmit={handleSubmit}>
            <div className="form-field">
              <label htmlFor="laboratory">Laboratorio:</label>
              <select id="laboratory" value={laboratory} onChange={(e) => setLaboratory(e.target.value)} required>
                <option value="">Seleccione un laboratorio</option>
                <option value="lab1">Laboratorio 1</option>
                <option value="lab2">Laboratorio 2</option>
                <option value="lab3">Laboratorio 3</option>
                <option value="lab4">Laboratorio 4</option>
              </select>
            </div>
            <div className="form-field">
              <label htmlFor="equipment">Equipos:</label>
              <input type="text" id="equipment" value={equipment} onChange={(e) => setEquipment(e.target.value)} required />
            </div>
            <div className="form-field">
              <label htmlFor="date">Fecha de Reserva:</label>
              <input type="date" id="date" value={date} onChange={(e) => setDate(e.target.value)} required />
            </div>
            <div className="form-field">
              <label htmlFor="start-time">Hora de Inicio:</label>
              <input type="time" id="start-time" value={startTime} onChange={(e) => setStartTime(e.target.value)} required />
            </div>
            <div className="form-field">
              <label htmlFor="end-time">Hora de Fin:</label>
              <input type="time" id="end-time" value={endTime} onChange={(e) => setEndTime(e.target.value)} required />
            </div>
            <button type="submit" className="submit-button">Reservar</button>
          </form>
        </div>
      </div>
    </body>
  );
};

export default Reserva;