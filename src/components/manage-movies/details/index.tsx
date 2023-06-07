import { getDataListActorMovieId, getDataListCategorysId, getDataMoviesId } from '@/api/apiConfict';
import CategoryItem from '@/components/category';
import Loading from '@/components/loading';
import Image from 'next/image';
import { useRouter } from 'next/router';
import React, { useCallback, useEffect, useReducer, useRef, useState } from 'react';
import EditIcon from './edit/edit-icon';
import ChooosCategoryMovies from './edit/choose-category';
import ChooosActorMovies from './edit/choose-actor-movie';

interface Props {
    path: number;
}

interface PropDatas {
    idMovie: number;
    idCategory: number;
    title: string;
    description: string;
    bestMovies: number;
    imgThumbnail: string;
    imgBackground: string;
    movie: string;
    trailer: string;
    imgActorMovie: string;
}
interface PropsActor {
    idActorMovie: number;
    firstName: string;
    lastName: string;
    imgActorMovie: string;
}

interface PropsCategory {
    categoryTitle: string;
    colorCategory: string;
    genreTitle: string;
    colorGenre: string;
    idCategory: number;
    idMovieGenre: number;
}

const DeatailsMovies: React.FC<Props> = ({ path }) => {
    const router = useRouter();
    const [data, setData] = useState<PropDatas>({
        idMovie: 0,
        idCategory: 1,
        title: '',
        description: '',
        bestMovies: 0,
        imgThumbnail: '',
        imgBackground: '',
        movie: '',
        trailer: '',
        imgActorMovie: '',
    });

    const [actor, setActor] = useState<PropsActor[]>([]);
    const [category, setCategory] = useState<PropsCategory[]>([]);
    const [isLoading, setIsLoading] = useState(true);

    const [changeTitle, setChangeTitle] = useState(false);
    const [title, setTitle] = useState(data.title);
    const [changeDescription, setChangeDescription] = useState(false);
    const [description, setDescription] = useState(data.description);
    const [changeCategory, setChangeCategory] = useState(false);
    const [changeActor, setChangeActor] = useState(false);
    useEffect(() => {
        setDescription(data.description);
        setTitle(data.title);
    }, [data]);

    useEffect(() => {
        const fetchData = async () => {
            const result = await getDataMoviesId(path);
            setData(result);
            setIsLoading(false);
        };
        fetchData();
    }, [path]);

    useEffect(() => {
        const fetchData = async () => {
            const result = await getDataListActorMovieId(path);
            setActor(result);
            setIsLoading(false);
        };
        fetchData();
    }, [path]);

    useEffect(() => {
        const fetchData = async () => {
            const result = await getDataListCategorysId(path);
            setCategory(result);
            setIsLoading(false);
        };
        fetchData();
    }, [path]);

    const handleActor = (id: number) => {
        router.push(`/list-actor-movies/details/${id}`);
    };

    const categoryTitle = category[0];

    const handleChangeImgThumbnail = useCallback(() => {
        alert('Img Thumbnail');
    }, []);

    const handleChangeTitle = useCallback(() => {
        setChangeTitle(true);
    }, []);

    const handleChangeCategory = useCallback(() => {
        setChangeCategory(true);
    }, []);

    const handleChangeDescription = useCallback(() => {
        setChangeDescription(true);
    }, []);

    const handleSubmitDescription = useCallback((e: any) => {
        e.preventDefault();
        setChangeDescription(false);
    }, []);

    const handleChangeActor = useCallback(() => {
        setChangeActor(true);
    }, []);

    const handleButtonClick = useCallback(() => {
        setChangeTitle(false);
        setChangeDescription(false);
        setChangeCategory(false);
        setChangeActor(false);
    }, []);

    return (
        <div className="flex-shrink-0 mt-[72px]">
            {isLoading ? (
                <Loading className="w-[70px] h-[70px]" />
            ) : (
                <div className="bg-[#0f0f0f]">
                    <div className="h-[650px] mx-auto rounded-[10px] mb-5">
                        <div className="relative w-full h-full">
                            <div
                                className="p-4 w-full h-full flex bg-cover bg-no-repeat bg-center"
                                style={{ backgroundImage: `linear-gradient( rgba(0, 0, 0, 0.6),  rgba(0, 0, 0, 0.6 )), url(${data.imgBackground})` }}
                            >
                                <div className="w-2/6 mr-[20px] relative">
                                    <img src={`${data.imgThumbnail}`} alt="Thumbnail" className="h-full w-full" />
                                    <div className="opacity-0 group-hover:opacity-100 hover:bg-black hover:opacity-75 absolute top-0 w-full h-full flex items-center justify-center transition duration-500">
                                        <EditIcon handleChange={handleChangeImgThumbnail} />
                                    </div>
                                </div>
                                <div className="w-4/6 h-full text-white">
                                    <div className="h-1/6">
                                        <div className="mb-2 flex">
                                            {changeTitle ? (
                                                <input
                                                    type="text"
                                                    className="text-white bg-transparent text-2xl font-medium w-[600px] mr-3"
                                                    defaultValue={data.title}
                                                    onChange={(e) => setTitle(e.target.value)}
                                                    onBlur={handleButtonClick}
                                                />
                                            ) : (
                                                <h2 className="text-2xl font-medium mr-2">{data.title}</h2>
                                            )}
                                            <EditIcon handleChange={handleChangeTitle} className="my-1" />
                                        </div>
                                        <div className="mb-2 flex">
                                            {/* BestMovie  */}
                                            <div className="mr-2">
                                                {data.bestMovies === 1 && <span className="px-2 py-1 text-sm font-medium rounded-full capitalize bg-red-600 text-white">Best Movie</span>}
                                            </div>
                                            {/* Movie or Tv-Show  */}
                                            <div className="mr-2">
                                                <span className="px-2 py-1 text-sm font-medium rounded-full capitalize text-white" style={{ backgroundColor: categoryTitle?.colorCategory }}>
                                                    {categoryTitle?.categoryTitle}
                                                </span>
                                            </div>
                                            {/* MovieGenre */}
                                            <div className=" flex">
                                                {category.map((items) => (
                                                    <CategoryItem key={items.idMovieGenre} item={items} />
                                                ))}
                                            </div>
                                            <EditIcon handleChange={handleChangeCategory} className="my-1" />
                                            {/* Thêm hiệu ứng Popup  */}
                                            {changeCategory && (
                                                <div className="fixed top-0 left-0 z-20 w-full h-full bg-shadow3">
                                                    <ChooosCategoryMovies id={data.idMovie} onClick={handleButtonClick} />
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                    <div className="mb-2 h-3/6 ">
                                        {/* Thêm hiệu ứng Popup  */}
                                        {changeDescription ? (
                                            <form className="h-full" onSubmit={handleSubmitDescription}>
                                                <textarea
                                                    // rows="4"
                                                    className="text-white bg-transparent text-base font-medium w-full h-[80%] mr-3 text-justify"
                                                    defaultValue={data.description}
                                                    onChange={(e) => setDescription(e.target.value)}
                                                    onBlur={handleButtonClick}
                                                />
                                                <button type="submit" className="w-full h-[10%] bg-white my-3">
                                                    <EditIcon className="mx-auto" fill="black" />
                                                </button>
                                            </form>
                                        ) : (
                                            <>
                                                <EditIcon handleChange={handleChangeDescription} className="float-left mr-2" />
                                                <p className="text-base text-justify">{data.description}</p>
                                            </>
                                        )}
                                    </div>
                                    <div className="flex">
                                        <h3 className="font-medium">Các diễn viên tham gia</h3>
                                        <EditIcon handleChange={handleChangeActor} className="ml-2" />
                                        {changeActor && (
                                            <div className={`fixed top-0 left-0 z-20 w-full h-full bg-shadow3`}>
                                                <ChooosActorMovies id={data.idMovie} onClick={handleButtonClick} />
                                            </div>
                                        )}
                                    </div>
                                    <div className="2/6 flex">
                                        {actor.map((items) => (
                                            <div key={items.imgActorMovie} className="cursor-pointer" onClick={() => handleActor(items.idActorMovie)}>
                                                <div className="text-center border-gray-200 rounded-lg shadow p-1 m-3 relative">
                                                    <img src={`${items.imgActorMovie}`} alt="Thumbnail" className="mb-2 h-[100px] w-[80px]  mx-auto" />
                                                    <p>{items.firstName + ' ' + items.lastName}</p>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* <div className="grid lg:grid-cols-2 gap-4 p-4">
                        <iframe className="w-full h-[400px] rounded-3xl" src={`https://www.youtube.com/embed/${data.movie}`}></iframe>
                        <iframe className="w-full h-[400px] rounded-3xl" src={`https://www.youtube.com/embed/${data.trailer}`}></iframe>
                    </div> */}
                </div>
            )}
        </div>
    );
};
export default DeatailsMovies;
