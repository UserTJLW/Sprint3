import React from 'react';
import { useDinero } from './DineroContext';
import styles from './DineroDisp.module.css';
import DynamicComponent from '../Render/DynamicComponent';

const Dinero = () => {
    const  {dinero}  = useDinero();

    return (
        <div className={styles.dineroDisp}>
            <h2>Dinero Disponible:</h2>
            <p>{dinero} $</p>
        </div>
    );
};
<DynamicComponent/>
export default Dinero;
