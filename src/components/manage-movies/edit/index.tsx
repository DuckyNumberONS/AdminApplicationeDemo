import { getDataMoviesId, putDataMovies } from '@/api/apiConfict';
import Layout from '@/layout';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';

interface Props {
    path: string;
}

interface PropDatas {
    id: string;
    imgThumbnail: string;
    title: string;
    catory: string;
}

const EditMovieForm: React.FC<Props> = ({ path }) => {
    const [data, setData] = useState<PropDatas>({});
    const [title, setTitle] = useState('');
    const [catory, setCategory] = useState('');
    const [imgThumbnail, setImgThumbnail] = useState('');
    const router = useRouter();
    const handleSubmit = (e: any) => {
        e.preventDefault();
        const data = { title, catory, imgThumbnail };
        putDataMovies(path, data);
        router.push('/list-movies');
        alert('Edit success');
    };

    useEffect(() => {
        const fetchData = async () => {
            const result = await getDataMoviesId(path);
            setData(result);
            // setIsLoading(false);
        };
        fetchData();
    }, [path]);

    useEffect(() => {
        setCategory(data.catory);
        setImgThumbnail(data.imgThumbnail);
        setTitle(data.title);
    }, [data]);

    return (
        <div>
            <Layout>
                <div className="flex-shrink-0 p-5 mt-[72px]">
                    <div className="grid lg:grid-cols-5 gap-4">
                        <div className="order-2 lg:order-1 lg:col-span-3">
                            <div className="shadow rounded-md bg-white">
                                <form onSubmit={handleSubmit}>
                                    <div className="grid lg:grid-cols-2 gap-4 px-5 py-4">
                                        <h2 className="col-span-2 text-xl text-gray-600 font-semibold">Create Movies</h2>
                                        <div className="col-span-2">
                                            <label className="block  font-medium text-gray-700 mb-1">Title Movies</label>
                                            <div className="flex flex-col space-y-1">
                                                <input
                                                    type="text"
                                                    className="border w-full border-gray-300 rounded-md font-light focus:ring-0 focus:border-indigo-500 px-5 py-4"
                                                    placeholder="exp: Movie..."
                                                    defaultValue={data.title}
                                                    onChange={(e) => setTitle(e.target.value)}
                                                />
                                                <span className="text-xs text-gray-400 italic text-light">Your current email address.</span>
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
                                                defaultValue={data.imgThumbnail}
                                                placeholder="link image"
                                            />
                                        </div>
                                        <div className="col-span-2">
                                            <label className="block  font-medium text-gray-700 mb-1">Category</label>
                                            <select
                                                className="py-2 pl-3 pr-10 border w-full border-gray-300 rounded-md font-light focus:ring-0 focus:border-indigo-500 "
                                                onChange={(e) => setCategory(e.target.value)}
                                            >
                                                <option value="tv-show">Tv-Show</option>
                                                <option value="movies">Movies</option>
                                            </select>
                                        </div>
                                        <div className="col-span-2">
                                            <label className="block  font-medium text-gray-700 mb-1">Content</label>
                                            <textarea
                                                // rows="3"
                                                className="border w-full border-gray-300 rounded-md font-light focus:ring-0 focus:border-indigo-500 px-5 py-4"
                                                placeholder="Write about yourself..."
                                            ></textarea>
                                        </div>
                                    </div>
                                    <div className="flex flex-row-reverse bg-gray-50 rounded-b-md px-5 py-4">
                                        <input type="submit" className="px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded-md" value="Save" />
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </Layout>
        </div>
    );
};
export default EditMovieForm;
