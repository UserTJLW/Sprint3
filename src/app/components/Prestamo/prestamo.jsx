"use client";
import React, { useState } from 'react';
import './Prestamo.css';
import DynamicComponent from '../Render/DynamicComponent';
<script src="script.js" defer></script>

const Prestamo = () => {
  const [loanAmount, setLoanAmount] = useState(0);
  const [installments, setInstallments] = useState(0);
  const [totalPayment, setTotalPayment] = useState(0);
  const [installmentAmount, setInstallmentAmount] = useState(0);
  const [totalInterest, setTotalInterest] = useState(0); // Nuevo estado para el interés total

  <DynamicComponent />

  const calculateLoan = () => {
    const interestRate = 0.05; // Tasa de interés
    const totalInterest = loanAmount * interestRate * installments; // Calcula el interés total
    const total = parseFloat(loanAmount) + totalInterest;
    const eachInstallment = total / installments; // Calcula el monto de cada cuota

    setTotalPayment(total);
    setInstallmentAmount(eachInstallment);
    setTotalInterest(totalInterest); // Actualiza el estado con el interés total
  };

  return (
    <div className="loan-calculator">
      <h1>Calculadora de Préstamos</h1>
      <label>
        Monto del préstamo:
        <input
          type="number"
          value={loanAmount}
          onChange={(e) => setLoanAmount(e.target.value)}
          placeholder=''
        />
      </label>
      <br />
      <label>
        Cantidad de Cuotas:
        <input
          type="number"
          value={installments}
          onChange={(e) => setInstallments(e.target.value)}
        />
      </label>
      <br />
      <button onClick={calculateLoan}>Calcular</button>
      <h2>Total a Pagar: $ {totalPayment.toFixed(2)}</h2>
      <h2>Cada cuota: $ {installmentAmount.toFixed(2)}</h2>
      <h2>Interés Total: $ {totalInterest.toFixed(2)}</h2> {/* Muestra el interés total */}
    </div>
  );
};

export default Prestamo;
