import React from 'react';
import Layout from '@/layout';
import AddActorMoviesForm from '@/components/mange-actor-movies/create';

const CreateMovies = () => {
    return (
        <Layout>
            <div className="flex-shrink-0 p-5 mt-[72px]">
                <AddActorMoviesForm />
            </div>
        </Layout>
    );
};
export default CreateMovies;
