import DeatailsBanner from '@/components/mange-actor-movies/details';
import React from 'react';

const DetailsBanner = () => {
    const url = typeof window !== 'undefined' ? window.location.toString() : '';
    const baseUrl = 'http://localhost:3000/list-actor-movies/details/';
    const path = url.substring(baseUrl.length);
    return (
        <div>
            <DeatailsBanner path={path} />
        </div>
    );
};
export default DetailsBanner;
