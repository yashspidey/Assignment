import React from 'react'

const SearchBar = ({search, handleSearch}) => {
    return (
        <div className='flex justify-center mb-6'>
            <input
                type="text"
                placeholder='Search by author...'
                value={search}
                onChange={handleSearch}
                className='border p-2 rounded w-full max-w-md' />
        </div>
    )
}

export default SearchBar