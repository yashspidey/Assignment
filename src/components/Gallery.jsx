import React, { useCallback, useEffect, useMemo, useReducer, useState } from 'react'
import SearchBar from './SearchBar.jsx'
import useFetchPhotos from '../hooks/useFetchPhotos.js'
import favouritesReducer from '../reducers/favouritesReducer.js'
import PhotoCard from './PhotoCard.jsx'

const Gallery = () => {

    const { photos, loading, error } = useFetchPhotos()

    const [search, setsearch] = useState("")

    const [favourites, dispatch] = useReducer(
        favouritesReducer,
        JSON.parse(localStorage.getItem("favourites")) || []
    )

    useEffect(() => {
        localStorage.setItem("favourites", JSON.stringify(favourites));
    }, [favourites])


    const handleSearch = useCallback((e) => {
        setsearch(e.target.value);
    }, [])

    const filteredPhotos = useMemo(() => {
        return photos.filter((photo) =>
            photo.author.toLowerCase().includes(search.toLowerCase())
        );
    }, [photos, search])

    if (loading) {
        return (
            <div className="flex justify-center mt-10">
                <div className="h-10 w-10 border-4 border-blue-500 rounded-full animate-spin border-t-transparent">
                </div>
            </div>
        )
    }

    if (error) {
        return (
            <p className="text-center text-red-500">{error}</p>
        )
    }

    return (
        <div>
            <SearchBar search={search} handleSearch={handleSearch} />
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4'>
                {filteredPhotos.map((photo) => (
                    <PhotoCard
                        key={photo.id}
                        photo={photo}
                        dispatch={dispatch}
                        favourites={favourites}
                    />
                ))}
            </div>
        </div>
    )
}

export default Gallery