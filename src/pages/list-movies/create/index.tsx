import React from 'react';
import Layout from '@/layout';
import AddMovieForm from '@/components/manage-movies/create';

const CreateMovies = () => {
    return (
        <Layout>
            <div className="flex-shrink-0 p-5 mt-[72px]">
                <AddMovieForm />
            </div>
        </Layout>
    );
};
export default CreateMovies;
