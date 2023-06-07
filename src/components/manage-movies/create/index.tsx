import React, { useCallback, useState } from 'react';
import { useRouter } from 'next/router';
import { postDataMovies } from '@/api/apiConfict';
import SearchCheckBox from '@/components/input-search-list';

interface Props {
    idMovie: number;
    idCategory: number;
    title: string;
    description: string;
    bestMovies: boolean;
    imgThumbnail: string;
    imgBackground: string;
    movie: string;
    trailer: string;
}
interface PropsActor {
    idActormovies: number;
    idMovies: number;
}

const AddMovieForm = () => {
    // Movie
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [bestMovies, setBestMovies] = useState(false);
    const [imgThumbnail, setImgThumbnail] = useState('');
    const [imgBackground, setImgBackground] = useState('');
    const [movie, setMovie] = useState('');
    const [trailer, setTrailer] = useState('');

    const router = useRouter();

    const handleSubmit = (e: any) => {
        e.preventDefault();
        if (title && description && imgThumbnail && imgBackground && movie && trailer) {
            const idMovie = Math.floor(Math.random() * 1000000);
            const data = { idMovie, title, description, bestMovies, imgThumbnail, imgBackground, movie, trailer };
            console.log(data);
            postDataMovies(data);
            router.push(`choose-actor-movie/${idMovie}`);
        } else {
            alert('Please fill in all the required fields');
        }
    };

    return (
        <form className="grid lg:grid-cols-5 gap-4" onSubmit={handleSubmit}>
            <div className="col-span-5 lg:col-span-3 lg:col-start-2">
                <div className="shadow rounded-md bg-white">
                    <div className="grid lg:grid-cols-2 gap-4 px-5 py-4">
                        <h2 className="col-span-2 text-xl text-gray-600 font-semibold">Create Movies (Step 1)</h2>
                        <div className="col-span-2">
                            <label className="block  font-medium text-gray-700 mb-1">Title Movies</label>
                            <div className="flex flex-col space-y-1">
                                <input
                                    type="text"
                                    className="border w-full border-gray-300 rounded-md font-light focus:ring-0 focus:border-indigo-500 px-5 py-4"
                                    placeholder="exp: Movie..."
                                    onChange={(e) => setTitle(e.target.value)}
                                />
                                <span className="text-xs text-gray-400 italic text-light">Your current email address.</span>
                            </div>
                        </div>
                        <div className="col-span-2">
                            <label className="block  font-medium text-gray-700 mb-1">Description Movies</label>
                            <textarea
                                // rows="3"
                                className="border w-full border-gray-300 rounded-md font-light focus:ring-0 focus:border-indigo-500 px-5 py-4"
                                placeholder="Write about yourself..."
                                onChange={(e) => setDescription(e.target.value)}
                            ></textarea>
                        </div>
                        <div className="col-span-2">
                            <div className="grid grid-cols-2 mb-2">
                                <label htmlFor="true">Best movies</label>
                                <input
                                    id="true"
                                    type="checkbox"
                                    className="border w-full border-gray-300 rounded-md font-light focus:ring-0 focus:border-indigo-500 px-5 py-4"
                                    onChange={(e) => setBestMovies(e.target.checked)}
                                />
                            </div>
                        </div>
                        <div className="shadow rounded-md bg-white px-5 py-4">
                            <h2 className="mb-2 col-span-2 text-xl self-start text-gray-600 font-semibold">Image Thumbnail</h2>
                            <div className="mb-2">
                                <img src={imgThumbnail} className="w-[350px]" alt="imgThumbnail" />
                            </div>
                            <input
                                type="text"
                                className="border w-full border-gray-300 rounded-md font-light focus:ring-0 focus:border-indigo-500 px-5 py-4"
                                onChange={(e) => setImgThumbnail(e.target.value)}
                                placeholder="link image"
                            />
                        </div>
                        <div className="col-span-2">
                            <h2 className="mb-2 col-span-2 text-xl self-start text-gray-600 font-semibold">Image Background</h2>
                            <div className="mb-2">
                                <img src={imgBackground} className="w-[350px]" alt="imgBackground" />
                            </div>
                            <input
                                type="text"
                                className="border w-full border-gray-300 rounded-md font-light focus:ring-0 focus:border-indigo-500 px-5 py-4"
                                onChange={(e) => setImgBackground(e.target.value)}
                                placeholder="link image"
                            />
                        </div>
                        <div className="col-span-2">
                            <label className="block  font-medium text-gray-700 mb-1">Link Movies</label>
                            <div className="flex flex-col space-y-1">
                                <input
                                    type="text"
                                    className="border w-full border-gray-300 rounded-md font-light focus:ring-0 focus:border-indigo-500 px-5 py-4"
                                    placeholder="exp: Movie..."
                                    onChange={(e) => setMovie(e.target.value)}
                                />
                                <span className="text-xs text-gray-400 italic text-light">Your current email address.</span>
                            </div>
                        </div>
                        <div className="col-span-2">
                            <label className="block  font-medium text-gray-700 mb-1">Link Trailer</label>
                            <div className="flex flex-col space-y-1">
                                <input
                                    type="text"
                                    className="border w-full border-gray-300 rounded-md font-light focus:ring-0 focus:border-indigo-500 px-5 py-4"
                                    placeholder="exp: Trailer..."
                                    onChange={(e) => setTrailer(e.target.value)}
                                />
                                <span className="text-xs text-gray-400 italic text-light">Your current email address.</span>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-row-reverse bg-gray-50 rounded-b-md px-5 py-4">
                        <input type="submit" className="px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded-md w-full" value="Step 2" />
                    </div>
                </div>
            </div>
        </form>
    );
};

export default AddMovieForm;
