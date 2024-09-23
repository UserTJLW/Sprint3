import React from 'react';
import { useDinero } from '../Cuentas/DineroContext'; 
import DynamicComponent from '../Render/DynamicComponent';

function Accounts() {
  const { dinero } = useDinero(); 
  <DynamicComponent />

  return (
    <div className="accounts">
        <div>
            <h1 className='saldo'>Saldo disponible:  {dinero}</h1> 
        </div>
    </div>
  );
}

export default Accounts;

