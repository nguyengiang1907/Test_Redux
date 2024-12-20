// File: App.tsx
import React, { useEffect } from 'react';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import BreedList from '../src/components/BreedList'; 
import { setData } from '../src/features/breedsSlice';

const App: React.FC = () => {

    const CallApi = async () => {
        try {
            const reponse = (await axios.get('https://dogapi.dog/api/v2/breeds')).data;
                const transformedData = reponse.data.map((breed: any) => ({
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
                dispatch(setData(transformedData));
        } catch (error) {
            console.log(error);
        }
    }

    const dispatch = useDispatch();  
    useEffect(() => {
      CallApi()
    }, [])

  return (
    <div>
      <BreedList />
    </div>
  );
};

export default App;
