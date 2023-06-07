import React, { useState } from 'react';
import { useRouter } from 'next/router';
import { postDataActorMovie } from '@/api/apiConfict';

interface Props {
    id: string;
    title: string;
    category: string;
    imgThumbnail: string;
}

const AddActorMoviesForm = () => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [story, setStory] = useState('');
    const [imgActorMovie, setImgActorMovie] = useState('');
    console.log({ imgActorMovie });

    const router = useRouter();
    const handleSubmit = (e: any) => {
        e.preventDefault();
        const data = { firstName, lastName, story, imgActorMovie };
        console.log({ data });

        postDataActorMovie(data);
        router.push('/list-actor-movies');
        alert('Create Actor Movie success');
    };

    return (
        <div className="grid lg:grid-cols-5 gap-4">
            <div className="order-2 lg:order-1 lg:col-span-3 col-span-5  lg:col-start-2">
                <div className="shadow rounded-md bg-white">
                    <form onSubmit={handleSubmit}>
                        <div className="grid lg:grid-cols-2 gap-4 px-5 py-4">
                            <h2 className="col-span-2 text-xl text-gray-600 font-semibold">Create Movies</h2>
                            <div className="col-span-2 grid lg:grid-cols-2 sm:grid-cols-1 gap-4">
                                <div>
                                    <label className="block  font-medium text-gray-700 mb-1">First Name</label>
                                    <div className="flex flex-col space-y-1">
                                        <input
                                            type="text"
                                            className="border w-full border-gray-300 rounded-md font-light focus:ring-0 focus:border-indigo-500 px-5 py-4"
                                            placeholder="exp: Movie..."
                                            onChange={(e) => setFirstName(e.target.value)}
                                        />
                                        <span className="text-xs text-gray-400 italic text-light">Your current email address.</span>
                                    </div>
                                </div>
                                <div>
                                    <label className="block  font-medium text-gray-700 mb-1">Last Name</label>
                                    <div className="flex flex-col space-y-1">
                                        <input
                                            type="text"
                                            className="border w-full border-gray-300 rounded-md font-light focus:ring-0 focus:border-indigo-500 px-5 py-4"
                                            placeholder="exp: Movie..."
                                            onChange={(e) => setLastName(e.target.value)}
                                        />
                                        <span className="text-xs text-gray-400 italic text-light">Your current email address.</span>
                                    </div>
                                </div>
                            </div>
                            <div className="shadow rounded-md bg-white px-5 py-4">
                                <h2 className="mb-2 col-span-2 text-xl self-start text-gray-600 font-semibold">Avatar</h2>
                                <div className="mb-2">
                                    <img src={imgActorMovie} className="w-[350px]" alt="avatar" />
                                </div>
                                <input
                                    type="text"
                                    className="border w-full border-gray-300 rounded-md font-light focus:ring-0 focus:border-indigo-500 px-5 py-4"
                                    onChange={(e) => setImgActorMovie(e.target.value)}
                                    placeholder="link image"
                                />
                            </div>
                            <div className="col-span-2">
                                <label className="block  font-medium text-gray-700 mb-1">Story</label>
                                <textarea
                                    // rows="3"
                                    className="border w-full border-gray-300 rounded-md font-light focus:ring-0 focus:border-indigo-500 px-5 py-4"
                                    placeholder="Write about yourself..."
                                    onChange={(e) => setStory(e.target.value)}
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
    );
};

export default AddActorMoviesForm;
