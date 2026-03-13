import React, { useEffect, useState } from 'react'

const useFetchPhotos = () => {

    const [photos, setphotos] = useState([])
    const [loading, setloading] = useState(true)
    const [error, seterror] = useState(null)


    useEffect(() => {
        const fetchPhotos = async () => {
            try {
                const res = await fetch("https://picsum.photos/v2/list?limit=30");
                const data = await res.json();
                setphotos(data);
            } catch (err) {
                seterror("Failed to fetch photos")
            } finally {
                setloading(false);
            }
        };
        
        fetchPhotos();
    }, []);

    return { photos, loading, error };
}

export default useFetchPhotos