import DeatailsMovies from '@/components/manage-movies/details';
import Layout from '@/layout';

const DetailsMovies = () => {
    const url = typeof window !== 'undefined' ? window.location.toString() : '';
    const baseUrl = 'http://localhost:3000/list-movies/details/';
    const path = url.substring(baseUrl.length);
    return (
        <Layout>
            <DeatailsMovies path={path} />
        </Layout>
    );
};
export default DetailsMovies;
