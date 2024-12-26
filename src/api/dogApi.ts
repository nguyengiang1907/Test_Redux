import axios from 'axios';
import { handleError } from './handleError'; 

export const fetchBreeds = async (navigate: any) => {
  try {
    const response = await axios.get('https://dogapi.dog/api/v2/breeds');  
    console.log('Response Status:', response.status);

    if (response.status === 200) {
      return response.data.data.map((breed: any) => ({
        id: breed.id,
        name: breed.attributes.name,
        female_weight_min: breed.attributes.female_weight.min,
        female_weight_max: breed.attributes.female_weight.max,
        male_weight_min: breed.attributes.male_weight.min,
        male_weight_max: breed.attributes.male_weight.max,
        life_min: breed.attributes.life.min,
        life_max: breed.attributes.life.max,
        type: breed.type,
      }));
    } else {
      console.log('Unexpected response:', response);
    }
  } catch (error: any) {
    if (error.response) {
      const statusCode = error.response.status;
      console.log('Error Response:', statusCode);
      handleError(statusCode, navigate);  
    } else {
      console.log('Error message:', error.message);
    }
    return [];
  }
};
