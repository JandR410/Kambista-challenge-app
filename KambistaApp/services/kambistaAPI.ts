import axios from 'axios';

const kambistaAPI = axios.create({
  baseURL: 'https://api.kambista.com/v1/exchange',
});

interface SimulationResponse {
  compra: number;
  venta: number;
  cantidadRecibida: string;
  result: boolean; 
}

export const simulateKambistaAPI = async (
  cantidad: number = 0 ,
  monedaOrigen: string,
  monedaDestino: string,
  tipoOperacion: string
): Promise<SimulationResponse> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const precioCompraBase = 3.321;
      const precioVentaBase = 3.400;
      const variacion = (Math.random() - 0.5) * 0.1;
      const precioCompraSimulado = precioCompraBase + variacion;
      const precioVentaSimulado = precioVentaBase + variacion;

      let cantidadRecibidaSimulada = 0;
      let result = true; 

      if (tipoOperacion === 'compra') {
        if (monedaOrigen === 'Dolares' && monedaDestino === 'Soles') {
          cantidadRecibidaSimulada = cantidad * precioCompraSimulado;
        } else if (monedaOrigen === 'Soles' && monedaDestino === 'Dolares') {
          cantidadRecibidaSimulada = cantidad / precioCompraSimulado;
        } else {
          result = false; 
        }
      } else if (tipoOperacion === 'venta') {
        if (monedaOrigen === 'Dolares' && monedaDestino === 'Soles') {
          cantidadRecibidaSimulada = cantidad * precioVentaSimulado;
        } else if (monedaOrigen === 'Soles' && monedaDestino === 'Dolares') {
          cantidadRecibidaSimulada = cantidad / precioVentaSimulado;
        } else {
          result = false; 
        }
      } else {
        result = false;
      }

      const data: SimulationResponse = { 
        compra: precioCompraSimulado,
        venta: precioVentaSimulado,
        cantidadRecibida: cantidadRecibidaSimulada.toFixed(2),
        result: result,
      };
      resolve(data);
    }, 1000); 
  });
};