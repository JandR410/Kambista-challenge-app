import axios from 'axios';

const kambistaAPI = axios.create({
  baseURL: 'https://api.kambista.com/v1/exchange',
});

export const getExchangeRate = async (amount: number) => {
  try {
    const response = await kambistaAPI.get(`/calculates?originCurrency=PEN&destinationCurrency=USD&amount=${amount}&active=S`);
    return response.data;
  } catch (error) {
    console.error("Error fetching exchange rate", error);
    throw error;
  }
};
