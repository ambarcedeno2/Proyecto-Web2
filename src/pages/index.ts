import React from 'react';
import Home from '../components/home/Home';


export { Home }

export const Login = React.lazy(() => import('../components/login/Login'));
export const Perfil = React.lazy(() => import('../components/users/perfil'));
export const Dashboard = React.lazy(() => import('../components/dashboard/Dashboard'));
export const Configuracion = React.lazy(() => import('../components/configuracion/Configuracion'));
export const Reservas = React.lazy(() => import('../components/reserva/Reservas'));
export const GestionEquipo = React.lazy(() => import('../components/equipo/GestionEquipo'));
export const GestionEquipos = React.lazy(() => import('../components/equipo/GestionEquipos'));
export const Reportes = React.lazy(() => import('../components/reportes/Reportes'));
export const Register = React.lazy(() => import('../components/login/register'));


