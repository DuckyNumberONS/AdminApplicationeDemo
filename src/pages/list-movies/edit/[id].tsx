import EditMovieForm from '@/components/manage-movies/edit';
import React from 'react';

const EditMovies = () => {
    const url = typeof window !== 'undefined' ? window.location.toString() : '';
    const baseUrl = 'http://localhost:3000/list-movies/edit/';
    const path = url.substring(baseUrl.length);
    return (
        <div>
            <EditMovieForm path={path} />
        </div>
    );
};
export default EditMovies;
