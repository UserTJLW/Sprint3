"use client";

import { useEffect, useState } from 'react';
import "../Cuentas/cuentas.css"

const Historial = () => {
  const [historial, setHistorial] = useState([]);

  useEffect(() => {
    const historialGuardado = JSON.parse(localStorage.getItem('historialFacturas')) || [];
    setHistorial(historialGuardado);
  }, []);

  return (
    <div>
      <h1>Historial de Facturas</h1>
      {historial.length === 0 ? (
        <p>No hay facturas en el historial.</p>
      ) : (
        <ul>
          {historial.map((factura, index) => (
            <li key={index}>
              <p>Factura {factura.id}</p>
              <p>Cliente: {factura.cliente}</p>
              <p>Monto: ${factura.monto}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Historial;