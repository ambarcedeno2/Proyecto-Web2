import React, { useState, useEffect } from 'react';
import Swal from 'sweetalert2';
import '../../assets/css/estilo.css';
import logo from '../../assets/img/logo.png';


const Configuracion = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [about, setAbout] = useState('');

  useEffect(() => {
    // Cargar valores del localStorage cuando el componente se monta
    const storedEmail = localStorage.getItem('email');
    const storedPassword = localStorage.getItem('password');
    const storedAbout = localStorage.getItem('about');
    if (storedEmail) setEmail(storedEmail);
    if (storedPassword) setPassword(storedPassword);
    if (storedAbout) setAbout(storedAbout);
  }, []);

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newEmail = e.target.value;
    setEmail(newEmail);
    localStorage.setItem('email', newEmail);
  };

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newPassword = e.target.value;
    setPassword(newPassword);
    localStorage.setItem('password', newPassword);
  };

  const handleAboutChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const newAbout = e.target.value;
    setAbout(newAbout);
    localStorage.setItem('about', newAbout);
  };

  const handleSave = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();

    const emailRegex = /^[a-zA-Z0-9._%+-]+@live\.uleam\.edu\.ec$/;
    const passwordRegex = /^(?=.*[a-zA-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{10,}$/;

    if (!emailRegex.test(email)) {
      Swal.fire({
        icon: 'error',
        title: 'Error',
        text: 'El correo debe ser @live.uleam.edu.ec'
      });
      return;
    }

    if (!passwordRegex.test(password)) {
      Swal.fire({
        icon: 'error',
        title: 'Error',
        text: 'La contraseña debe tener al menos 10 caracteres, incluyendo letras, números y caracteres especiales.'
      });
      return;
    }

    if (!about.trim()) {
      Swal.fire({
        icon: 'error',
        title: 'Error',
        text: 'El campo "Sobre Mí" no puede estar vacío.'
      });
      return;
    }

    // If all validations pass
    Swal.fire({
      icon: 'success',
      title: 'Éxito',
      text: 'Los cambios se han guardado correctamente.'
    });
  };

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
        <div className="profile-section">
          <h2>Configuración de Perfil</h2>
          <div className="profile-form">
            <div className="profile-image">
              <img src="img/perfil.png" alt="Profile Picture" />
              <input type="file" id="profile-picture" accept="image/*" />
              <label htmlFor="profile-picture"><i className="fas fa-camera"></i> Cambiar Foto</label>
            </div>
            <div className="profile-info">
              <div className="profile-field">
                <label htmlFor="email">Correo Electrónico:</label>
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={handleEmailChange}
                  placeholder="correo@example.com"
                />
              </div>
              <div className="profile-field">
                <label htmlFor="password">Contraseña:</label>
                <input
                  type="password"
                  id="password"
                  value={password}
                  onChange={handlePasswordChange}
                />
              </div>
              <div className="profile-field">
                <label htmlFor="about">Sobre Mí:</label>
                <textarea
                  id="about"
                  rows={4}
                  value={about}
                  onChange={handleAboutChange}
                  placeholder="Escribe algo sobre ti..."
                ></textarea>
              </div>
            </div>
          </div>
          <button className="save-button" onClick={handleSave}>Guardar Cambios</button>
        </div>
      </div>
    </body>
  );
};

export default Configuracion;