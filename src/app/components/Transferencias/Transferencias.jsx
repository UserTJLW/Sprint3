"use client";
import React, { useState } from 'react';
import { useDinero } from '../Cuentas/DineroContext';
import styles from './Transferencias.css';
import Message from '../Cuentas/Message';
import DynamicComponent from '../Render/DynamicComponent'; 
<script src="script.js" defer></script>

const Transferencias = () => {
    const [usuario, setUsuario] = useState('');
    const [monto, setMonto] = useState('');
    const { handleActualizarDinero } = useDinero();
    const handleSubmit = (e) => {
        e.preventDefault();
        const montoNumero = Number(monto);
        if (isNaN(montoNumero) || montoNumero <= 0) {
            alert('Por favor, ingresa un monto válido.');
            return;
        }
        handleActualizarDinero(montoNumero, usuario);

        setUsuario('');
        setMonto('');
        <DynamicComponent />
    };

    return (
        <div className={styles.TransferenciasContainer}> 
            <form onSubmit={handleSubmit}>
            <h1>Nueva transferencia: </h1>
            <div className={styles.inputGroup}> 
            <input
                type="text"
                value={usuario}
                onChange={(e) => setUsuario(e.target.value)}
                placeholder="Destinatario"
                required
            />
            </div>
            <input
                type="number"
                value={monto}
                onChange={(e) => setMonto(e.target.value)}
                placeholder="Monto"
                min="1"
                required
            />
            <button type="submit">Transferir</button>
        </form>

        </div>
    );
};

export default Transferencias;
