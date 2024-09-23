"use client";
import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { DineroProvider } from './components/Cuentas/DineroContext';
import { AuthProvider } from './components/Login/AuthContext'; 
import Layout from './components/Layout/layout';
import Prestamo from './components/Prestamo/prestamo';
import Convert from './components/Conversor/convert';
import DineroDisp from './components/Cuentas/DineroDisp';
import HelpCenter from './components/Help/Helpcenter';
import Cuentas from './components/Cuentas/Cuentas';
import Login from './components/Login/Login';
import Signup from './components/Login/Signup';
import Tarjetas from './components/Tarjetas/Tarjetas';
import ProtectedRoute from './components/Login/ProtectedRoute'; 
import LandPage from './components/Inicio/Inicio';
import Head from 'next/head';
import Factura from './components/Facturas/Facturas'
import Historial from './components/Facturas/Historial'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: '/inicio',
        element: <ProtectedRoute element={<LandPage />}/>,
      },     
       {
        path: '/login',
        element: <Login />,
      },
      {
        path: '/',
        element: <Login />,
      },
      {
        path: '/signup',
        element: <Signup />,
      },
      {
        path: '/prestamos',
        element: <ProtectedRoute element={<Prestamo />} />,
      },
      {
        path: '/transferencias',
        element: <ProtectedRoute element={<DineroDisp />} />,
      },
      {
        path: '/cuentas',
        element: <ProtectedRoute element={<Cuentas />} />,
      },
      {
        path: '/tarjetas',
        element: <ProtectedRoute element={<Tarjetas />} />,
      },
      {
        path: '/convertidor',
        element: <ProtectedRoute element={<Convert />} />,
      },
      {
        path: '/helpcenter',
        element: <HelpCenter />,
      },
      {
        path: '/facturas',
        element: <Factura factura={undefined} />,
      },
    ],
  },
]);

const App = () => {
  return (
    <><Head>
      <meta name="description" content="timebank" />
      <meta name="description" content="banco" />
      <meta name="keywords" content="banco, homebanking, prestamos, dinero, convertidor, moneda, impuestos, rentas, tarjetas, comprar, creditos" />
    </Head><AuthProvider>
        <DineroProvider>
          <RouterProvider router={router} />
        </DineroProvider>
      </AuthProvider></>
  );
};

export default App;
