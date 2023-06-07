import { getDataActorMovie, getDataListActorMovieId, postDataListActorMovie, putDataListActorMovie } from '@/api/apiConfict';
import { useRouter } from 'next/router';
import React, { useCallback, useEffect, useState } from 'react';

interface Props {
    idActorMovie: number;
    firstName: string;
    lastName: string;
    story: string;
    imgActorMovie: string;
}

interface PropsMovie {
    idMovie: number;
}

const SearchCheckBox: React.FC<PropsMovie> = ({ idMovie }) => {
    const router = useRouter();
    const pathName = router.pathname;
    const linkDetails = '/list-movies/details/[id]';

    const [searchValue, setSearchValue] = useState('');
    const [data, setData] = useState<Props[]>([]);
    const [actorDefault, setActorDefault] = useState<number[]>([]);

    useEffect(() => {
        if (pathName === linkDetails) {
            setIdActorMovie(actorDefault);
        }
    }, [actorDefault, pathName]);

    const [idActor, setIdActorMovie] = useState<number[]>(pathName === linkDetails ? actorDefault : []);

    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        if (pathName === linkDetails) {
            const fetchData = async () => {
                const result = await getDataListActorMovieId(idMovie);
                setActorDefault(result.map((items: Props) => items.idActorMovie));
            };
            fetchData();
        }
    }, [idMovie, pathName]);

    useEffect(() => {
        const data = async () => {
            const res = await getDataActorMovie();
            setData(res);
            setIsLoading(false);
        };
        data();
    }, []);

    const handleSearchChange = (event: any) => {
        setSearchValue(event.target.value);
    };

    // Hàm uncheck input
    const handleCheckboxChange = useCallback((idActor: number) => {
        setIdActorMovie((prevArr) => {
            const index = prevArr.indexOf(idActor);
            if (index > -1) {
                return prevArr.filter((item) => item !== idActor);
            } else {
                return [...prevArr, idActor];
            }
        });
    }, []);

    const handleSubmit = (e: any) => {
        e.preventDefault();
        if (idActor.length > 0 && idMovie) {
            const actorMovieData = idActor.map((idActorMovie) => ({
                idMovie,
                idActorMovie,
            }));
            // viết thêm trường hợp check xem có phải trang details không, nếu đang ở trang detail thì sẽ put vào api còn ngược lại đẩy lại vào post
            if (pathName === linkDetails) {
                putDataListActorMovie(idMovie, actorMovieData);
                alert('Edit Actor Movie Done !');
                router.push(`/list-movies/details/${idMovie}`);
            } else {
                postDataListActorMovie(actorMovieData);
                router.push(`/list-movies/choose-category/${idMovie}`);
            }
        } else {
            alert('Please fill in all the required fields');
        }
    };

    return (
        <form className="rounded-md border border-gray-300 p-5 shadow bg-white mx-auto my-4 lg:w-10/12" onSubmit={handleSubmit}>
            <label htmlFor="searchActor" className="block  font-medium text-gray-700 mb-1">
                Actor Movie
            </label>
            <input id="searchActor" type="search" placeholder="Search..." value={searchValue} onChange={handleSearchChange} className="w-full border p-3 mb-3 rounded-lg" />
            <ul className="h-[400px] overflow-y-scroll">
                {data.map((items) => (
                    <li key={items.idActorMovie} className="h-[100px] p-3 my-2 border grid lg:grid-cols-2">
                        <div className="flex items-center">
                            <input
                                type="checkbox"
                                id={`${items.firstName}`}
                                className="mr-2  focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                                onClick={() => handleCheckboxChange(items.idActorMovie)}
                                defaultChecked={actorDefault.includes(items.idActorMovie)}
                            />
                            <label className="text-xl text-black" htmlFor={`${items.firstName}`}>
                                {items.firstName + ' ' + items.lastName}
                            </label>
                        </div>
                        <div className=" justify-self-end">
                            <img src={items.imgActorMovie} alt={items.firstName + ' ' + items.lastName} className="w-[60px] h-[80px] mr-4" />
                        </div>
                    </li>
                ))}
            </ul>
            <div className="mt-10">
                <input type="submit" className="px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded-md w-full" value={pathName === linkDetails ? 'Edit' : 'Step 3'} />
            </div>
        </form>
    );
};

export default SearchCheckBox;
