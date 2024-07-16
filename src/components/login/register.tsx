import React from 'react';
//importar el css
import '../../assets/css/style.css';
import Swal from 'sweetalert2';

const Register: React.FC = () => {

  const redirectTo = (page: string) => {
    window.location.href = page;
  };


  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    
    const form = event.target as HTMLFormElement;
    const formData = new FormData(form);
    
    const user = {
      id_usuario: Date.now().toString(),
      nombre: formData.get('nombre') as string,
      apellido: formData.get('apellido') as string,
      email: formData.get('email') as string,
      password: formData.get('password') as string,
      confirmPassword: formData.get('confirmPassword') as string,
      cedula: formData.get('cedula') as string,
    };

    // Guardar en localStorage
    localStorage.setItem(user.id_usuario, JSON.stringify(user));

    Swal.fire('Formulario enviado');
    redirectTo('/login');
  };

  return (
    <div>
      <h1 className="titulo">Gestión de Laboratorios</h1>
      <div className="container">
        <h2>REGISTRO</h2>
        <form id="registerForm" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="nombre">Nombre:</label>
            <input type="text" id="nombre" name="nombre" required />
            <p id="nombreError" className="error-message"></p>
          </div>
          <div className="form-group">
            <label htmlFor="apellido">Apellido:</label>
            <input type="text" id="apellido" name="apellido" required />
            <p id="apellidoError" className="error-message"></p>
          </div>
          <div className="form-group">
            <label htmlFor="email">Correo Electrónico:</label>
            <input type="email" id="email" name="email" required />
            <p id="emailError" className="error-message"></p>
          </div>
          <div className="form-group">
            <label htmlFor="password">Contraseña:</label>
            <input type="password" id="password" name="password" required />
            <p id="passwordError" className="error-message"></p>
          </div>
          <div className="form-group">
            <label htmlFor="confirmPassword">Confirmar Contraseña:</label>
            <input type="password" id="confirmPassword" name="confirmPassword" required />
            <p id="confirmPasswordError" className="error-message"></p>
          </div>
          <div className="form-group">
            <label htmlFor="cedula">Cédula:</label>
            <input type="text" id="cedula" name="cedula" required />
            <p id="cedulaError" className="error-message"></p>
          </div>
          <button type="submit">Registrarse</button>
        </form>
        <p>¿Ya tienes una cuenta? <a href="/login">Inicia sesión aquí</a></p>
      </div>
    </div>
  );
};

export default Register;