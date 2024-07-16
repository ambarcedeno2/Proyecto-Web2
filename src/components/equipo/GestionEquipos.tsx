import React, { useEffect, useState } from 'react';
import Swal from 'sweetalert2';
import '../../assets/css/estilo.css';
import pc from '../../assets/img/pc.png';
import logo from '../../assets/img/logo.png';

interface Equipo {
  descripcion: string;
  disponible: boolean;
}

const GestionEquipos: React.FC = () => {
  const [equipos, setEquipos] = useState<Equipo[]>([]);

  useEffect(() => {
    // Cargar equipos desde el localStorage cuando el componente se monta
    const storedEquipos = localStorage.getItem('equipos');
    if (storedEquipos) {
      setEquipos(JSON.parse(storedEquipos));
    }

    // Espera a que el DOM esté completamente cargado
    const pcImages = document.querySelectorAll('.pc-image');

    // Itera sobre cada imagen y agrega un evento de clic
    pcImages.forEach((image) => {
      image.addEventListener('click', () => {
        // Redirige a gestion_equipo.html
        window.location.href = 'gestion_equipo.html';
      });
    });
  }, []);

  const handleAddEquipo = () => {
    Swal.fire({
      title: 'Agregar Equipo',
      html: `
        <input type="text" id="descripcion" class="swal2-input" placeholder="Descripción">
        <select id="disponible" class="swal2-input">
          <option value="true">Disponible</option>
          <option value="false">En Mantenimiento</option>
        </select>
      `,
      showCancelButton: true,
      confirmButtonText: 'Agregar',
      preConfirm: () => {
        const descripcion = (document.getElementById('descripcion') as HTMLInputElement).value;
        const disponible = (document.getElementById('disponible') as HTMLSelectElement).value === 'true';
        return { descripcion, disponible };
      }
    }).then((result) => {
      if (result.isConfirmed) {
        const newEquipo: Equipo = result.value;
        const updatedEquipos = [...equipos, newEquipo];
        setEquipos(updatedEquipos);
        localStorage.setItem('equipos', JSON.stringify(updatedEquipos));
        Swal.fire('¡Agregado!', 'El equipo ha sido agregado.', 'success');
      }
    });
  };

  return (
    <body>
      <div className="sidebar">
        <div className="logo-container">
          <a href="dashboard.html">
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
        <header>
          <h1>Gestión de Equipos en los laboratorios</h1>
          <button onClick={handleAddEquipo}>Agregar Equipo</button>
        </header>
        <section className="equipment-grid">
          {equipos.map((equipo, i) => (
            <a href="/gestion-equipo" className="card" key={i}>
              <img src={pc} alt={`PC ${i + 1}`} className="pc-image" />
              <div className="card-content">
                <h3>Equipo {i + 1}</h3>
                <p>{equipo.descripcion}</p>
                <span className="status">{equipo.disponible ? 'Disponible' : 'En Mantenimiento'}</span>
              </div>
            </a>
          ))}
        </section>
      </div>
    </body>
  );
};

export default GestionEquipos;