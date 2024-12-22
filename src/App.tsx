import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import BreedList from '../src/components/BreedList';
import { setData } from '../src/features/breedsSlice';

const App: React.FC = () => {
    const [isOnline, setIsOnline] = useState(navigator.onLine);
    const [showOnlineMessage, setShowOnlineMessage] = useState(false);
    const dispatch = useDispatch();


    const CallApi = async () => {
        try {
            if (navigator.onLine) {
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

                localStorage.setItem('breeds', JSON.stringify(transformedData))
            } else {
                const cachedData = localStorage.getItem('breeds');
                if (cachedData) {
                    const parsedData = JSON.parse(cachedData);
                    dispatch(setData(parsedData));
                } else {
                    console.log('No cached data available.');
                }
            }
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        CallApi();

        const handleOnline = () => {
            setIsOnline(true);
            setShowOnlineMessage(true);

            setTimeout(() => {
                setShowOnlineMessage(false);
            }, 5000);
        };

        const handleOffline = () => {
            setIsOnline(false);
        };

        window.addEventListener('online', handleOnline);
        window.addEventListener('offline', handleOffline);

        return () => {
            window.removeEventListener('online', handleOnline);
            window.removeEventListener('offline', handleOffline);
        };
    }, []);

    return (
        <div>
            {!isOnline && (
                <div className="alert alert-warning" role="alert">
                    You are currently offline. Please check your connection.
                </div>
            )}
            {showOnlineMessage && (
                <div className="alert alert-success" role="alert">
                    You are back online!
                </div>
            )}
            <BreedList />
        </div>
    );
};

export default App;
