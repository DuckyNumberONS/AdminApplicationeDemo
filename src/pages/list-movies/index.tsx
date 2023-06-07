import React from 'react';
import Layout from '@/layout';
import ManageMovies from '@/components/manage-movies';

const ListMovies = () => {
    return (
        <Layout>
            <div className="flex-shrink-0 p-5 mt-[72px]">
                <ManageMovies />
            </div>
        </Layout>
    );
};
export default ListMovies;
