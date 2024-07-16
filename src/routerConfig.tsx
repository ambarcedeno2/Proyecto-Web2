import React from "react";
import { Home, Login, Perfil, Dashboard, Reportes, Configuracion, Reservas, GestionEquipo, GestionEquipos, Register} from "./pages";

export const routes = [
    {
        path: '/',
        element: <Home/>
    },
    {
        path: '/login',
        element: <Login/>
    },
    {
        path: '/perfil',
        element: <Perfil/>
    },
    {
        path: '/dashboard',
        element: <Dashboard/>

    },
    {
        path: '/reportes',
        element : <Reportes/>
    },
    {
        path: '/configuracion',
        element: <Configuracion/>
    },
    {
        path: '/reservas',
        element: <Reservas/>
    },
    {
        path: '/gestion-equipo',
        element: <GestionEquipo/>
    },
    {
        path: '/gestion-equipos',
        element: <GestionEquipos/>
    },
    {
        path: '/register',
        element: <Register/>
    }

]