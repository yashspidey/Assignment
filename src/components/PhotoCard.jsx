const Photocard = ({ photo, dispatch, favourites }) => {
    const isFav = favourites.some((p) => p.id === photo.id);


    return (
        <div className="bg-white shadow p-2 rounded">
            <img
                src={photo.download_url}
                alt={photo.author}
                className="w-full h-48 rounded object-cover"
            />

            <div className="flex justify-between items-center mt-2">
                <p className="text-sm font-medium">{photo.author}</p>
                <button
                    onClick={() =>
                        dispatch({ type: "TOGGLE_FAV", payload: photo })
                    }
                >{isFav ? "❤️" : "🤍"}</button>
            </div>
        </div>
    )
}

export default Photocard