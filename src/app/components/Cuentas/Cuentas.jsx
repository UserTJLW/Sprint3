import React from 'react';
import './cuentas.css';
import { useDinero } from './DineroContext'; 
import DynamicComponent from '../Render/DynamicComponent';




<script src="script.js" defer></script>

const Cuenta = ({ title, amount, currency }) => {
  return (
    <div className="cuenta">
      <h2>{title}</h2>
      <p className="saldo">{amount} {currency}</p>
    </div>
  );
};

const Cuentas = () => {
  const { dinero } = useDinero(); 
  <DynamicComponent/>

  return (
    <div className="cuentas-container">
      <Cuenta title="Cuenta en Pesos" amount={dinero} currency="ARS" />
    </div>
  );
};


export default Cuentas;
