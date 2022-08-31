import { useEffect, useState } from "react"

const useTravelNews = () => {
    const [travelNews, setTravelNews] = useState([]);

    useEffect( () => {
        fetch('travel-news.json')
        .then(res => res.json())
        .then(data => setTravelNews(data));
    }, []);

    return [travelNews, setTravelNews];
}

export default useTravelNews;