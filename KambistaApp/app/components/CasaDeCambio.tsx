import React, { useState, useEffect, ChangeEvent } from 'react';

interface CasaDeCambioProps {
  
}

const CasaDeCambio: React.FC<CasaDeCambioProps> = () => {
  const [cantidadDolares, setCantidadDolares] = useState<string>('');
  const [cantidadSoles, setCantidadSoles] = useState<number>(0);
  const [tipoCambio, setTipoCambio] = useState<number>(3.466); // Valor inicial del tipo de cambio
  const [ahorroEstimado, setAhorroEstimado] = useState<number>(5.15); // Valor inicial del ahorro estimado

  const calcularCambio = () => {
    const cantidadDolaresNum = parseFloat(cantidadDolares);

    if (!isNaN(cantidadDolaresNum)) {
      setCantidadSoles(cantidadDolaresNum * tipoCambio);
    } else {
      setCantidadSoles(0);
    }
  };

  useEffect(() => {
    calcularCambio();
  }, [cantidadDolares, tipoCambio]);

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value.replace(/[^0-9.]/g, ''); // Permite solo números y punto
    setCantidadDolares(value);
  };

  return (
    <div className="casa-de-cambio">
      <h2>Kambista</h2>

      <div className="compra-venta">
        <button className="compra">Compra: 3.321</button>
        <button className="venta">Venta: 3.321</button>
      </div>

      <div className="input-container">
        <label htmlFor="cantidad">¿Cuánto envías?</label>
        <input
          type="text"
          id="cantidad"
          value={cantidadDolares}
          onChange={handleInputChange}
          placeholder="Ingrese la cantidad"
        />
        <span>Dólares</span>
      </div>

      <div className="resultado">
        <label>Entonces recibes</label>
        <p>{cantidadSoles.toFixed(2)} Soles</p>
      </div>

      <div className="info-adicional">
        <p>Ahorro estimado: S/ {ahorroEstimado}</p>
        <p>Tipo de cambio: {tipoCambio}</p>
      </div>

      <button className="iniciar-operacion">INICIAR OPERACIÓN</button>
    </div>
  );
};

export default CasaDeCambio;