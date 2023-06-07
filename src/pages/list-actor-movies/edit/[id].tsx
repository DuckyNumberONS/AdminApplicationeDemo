import EditBannerForm from '@/components/mange-actor-movies/edit';
import React from 'react';

const EditMovies = () => {
    const url = typeof window !== 'undefined' ? window.location.toString() : '';
    const baseUrl = 'http://localhost:3000/list-actor-movies/edit/';
    const path = url.substring(baseUrl.length);
    return (
        <div>
            <EditBannerForm path={path} />
        </div>
    );
};
export default EditMovies;
