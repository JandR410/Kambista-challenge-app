import axios from 'axios';

const kambistaAPI = axios.create({
  baseURL: 'https://api.kambista.com/v1/exchange',
});

interface SimulationResponse {
  compra: number;
  venta: number;
  cantidadRecibida: string;
  result: boolean;
  message?: string; 
}

export const simulateKambistaAPI = async (
  cantidad: number = 0,
  monedaOrigen: string = 'PEN',
  monedaDestino: string = 'USD'
): Promise<SimulationResponse> => {
  try {
    await new Promise(resolve => setTimeout(resolve, 1000));

    const response = await kambistaAPI.get<SimulationResponse>('/calculates', {
      params: {
        originCurrency: monedaOrigen,
        destinationCurrency: monedaDestino,
        amount: cantidad,
        active: 'S',
      },
    });

    const data: SimulationResponse = {
      compra: 0,
      venta: 0,
      cantidadRecibida: '',
      result: true,
    };

    return data;
  } catch (error: any) {
    console.error("Error al llamar a la API de Kambista:", error);

    let errorMessage = "Error desconocido al contactar la API.";
    if (error.response) {
      errorMessage = `Error de la API: ${error.response.status} - ${error.response.data.message || 'Sin mensaje específico'}`;
      console.error("Detalles del error:", error.response.data);
    } else if (error.request) {
      errorMessage = "No se recibió respuesta del servidor.";
    } else {
      errorMessage = error.message;
    }

    const errorData: SimulationResponse = {
      compra: 0,
      venta: 0,
      cantidadRecibida: "0",
      result: false,
      message: errorMessage, 
    };

    return errorData;
  }
};