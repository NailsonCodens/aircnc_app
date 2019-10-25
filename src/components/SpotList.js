import React, { useEffect } from 'react';
import { Text } from 'react-native';

import api from '../services/api';

export default function SpotList({ tech }) {
    useEffect(() => {
        async function loadSpots() {
            const response = api.get('spots', {
                params: {tech}
            })
            console.log(response.data)
        }

        loadSpots();
    }, []);

    return <Text>asdasd</Text> 
}
