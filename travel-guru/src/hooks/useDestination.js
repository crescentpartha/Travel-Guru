import { useEffect, useState } from 'react';

const useDestination = () => {
    const [destination, setDestination] = useState([]);

    useEffect( () => {
        fetch('destination.json')
        .then(res => res.json())
        .then(data => setDestination(data));
    }, []);

    return [destination, setDestination];
}

export default useDestination;