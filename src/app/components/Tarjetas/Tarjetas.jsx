import React from 'react';
import styles from './Tarjetas.module.css';
import DynamicComponent from '../Render/DynamicComponent'; 
<script src="script.js" defer></script>

const usuarioData = localStorage.getItem('usuario');
const nombreUsuario = usuarioData ? usuarioData.split(': ')[1] : 'Usuario';  


const Card = ({ tier, name, number }) => {
    <DynamicComponent />
    return (
        <div className={`${styles.card} ${styles[tier]}`}>
            <div className={styles.cardContent}>
                <h2 className={styles.cardTitle}>{name}</h2>
                <p className={styles.cardNumber}>{number}</p>
                <p className={styles.cardTier}>{tier.toUpperCase()}</p>
            </div>
        </div>
    );
};

const Tarjetas = () => {
    return (
        <div className={styles.App}>
            <Card tier="classic" name={nombreUsuario} number="1234 5678 9012 3456" />
            <Card tier="silver" name={nombreUsuario} number="1234 5678 6292 7140" />
            <Card tier="gold" name={nombreUsuario} number="5678 9012 3456 1234" />
            <Card tier="platinum" name={nombreUsuario} number="8765 4321 0987 6543" />
            <Card tier="black" name={nombreUsuario} number="1122 3344 5566 7788" />
        </div>
    );
};

export default Tarjetas;