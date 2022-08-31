import { useEffect, useState } from 'react';

const useDestination = () => {
    const [destinations, setDestinations] = useState([]);

    useEffect( () => {
        fetch('destination.json')
        .then(res => res.json())
        .then(data => setDestinations(data));
    }, []);

    return [destinations, setDestinations];
}

export default useDestination;