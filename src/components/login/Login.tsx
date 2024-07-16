import '../../assets/css/style.css';
import React from 'react';
import Swal from 'sweetalert2';

const Login = () => {
  const redirectTo = (page: string) => {
    window.location.href = page;
  };


  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  
    const form = event.target as HTMLFormElement;
    const formData = new FormData(form);
  
    const emailUsuario = formData.get('emailUsuario') as string;
    const password = formData.get('password') as string;
  
    // Buscar el usuario en localStorage
    let userFound = null;
    for (let i = 0; i < localStorage.length; i++) {
      const key = localStorage.key(i);
      if (key) {
        const user = JSON.parse(localStorage.getItem(key) as string);
        if (user.email === emailUsuario && user.password === password) {
          userFound = user;
          break;
        }
      }
    }
  
    if (userFound) {
      Swal.fire('Login exitoso');
      redirectTo('/dashboard');
    } else {
      Swal.fire('Usuario o contraseña incorrectos');
    }
  };

  return (
    <div className="container">
      <h2>Iniciar Sesión</h2>
      <form id="loginForm" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="emailUsuario">Correo Electrónico / Usuario:</label>
          <input type="text" id="emailUsuario" name="emailUsuario" required />
        </div>
        <div className="form-group">
          <label htmlFor="password">Contraseña:</label>
          <input type="password" id="password" name="password" required />
        </div>
        <button type="submit">Iniciar Sesión</button>
      </form>
      <div className="forgot-password">
        <a href="olvido-contrasena.html">¿Olvidó su contraseña?</a>
        <a href="/register">¿Eres nuevo? ¡Regístrate!</a>
      </div>
    </div>
  );
};

export default Login;
