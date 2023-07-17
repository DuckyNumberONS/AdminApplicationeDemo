import { getActorMovieByLastName, getDataListActorMovieId, postDataListActorMovie } from '@/api/apiConfict';
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
    const [dataSearch, setDataSearch] = useState<Props[]>([]);
    const [actorDefault, setActorDefault] = useState<number[]>([]);

    useEffect(() => {
        if (pathName === linkDetails) {
            setIdActorMovieChange(actorDefault);
        }
    }, [actorDefault, pathName]);

    const idActor = pathName === linkDetails ? actorDefault : [];
    const [idActorChange, setIdActorMovieChange] = useState<number[]>(actorDefault);

    const addIdActorChange = idActorChange.filter((items) => !idActor.includes(items));
    const deleteIdActorChange = idActor.filter((items) => !idActorChange.includes(items));

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
        const fetchData = async () => {
            const result = await getActorMovieByLastName(searchValue);
            setIsLoading(false);
            setDataSearch(result);
        };
        fetchData();
    }, [searchValue]);

    const handleSearchChange = (event: any) => {
        setSearchValue(event.target.value);
    };

    // Hàm uncheck input
    const handleCheckboxChange = useCallback((idActor: number) => {
        setIdActorMovieChange((prevArr) => {
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
        //thứ nhất điều kiện phải là Giá trị idActor > 0
        //idActor = idActorChange thì sẽ có các trường hợp sau
        //TH1: không thay đổi và giữ nguyên bản như cũ
        //TH2: trường hợp update một giá trị trong mảng (Tìm được vị trí của mảng, lấy được giá trị của mảng truyền vào api PUT(IdActorMovieList,data change))
        //idActor < idActorChange thì sẽ gọi đến APi POST(gồm idMovie,[idActor])
        //idActor > idActorChange thì sẽ gọi đến API Delete(gồm idActor)
        if (idActor.length > 0 && idMovie) {
            const actorMovieData = idActor.map((idActorMovie) => ({
                idMovie,
                idActorMovie,
            }));
            // viết thêm trường hợp check xem có phải trang details không, nếu đang ở trang detail thì sẽ put vào api còn ngược lại đẩy lại vào post
            if (pathName == linkDetails) {
                if (idActor == idActorChange) {
                    location.reload();
                }

                if (addIdActorChange.length > 0) {
                    console.log('API thêm mới:', addIdActorChange);
                    // Gọi API thêm mới
                }

                if (deleteIdActorChange.length > 0) {
                    console.log('API Xóa:', deleteIdActorChange);
                    // Gọi API Xóa
                }
            } else {
                postDataListActorMovie(actorMovieData);
                router.push(`/list-movies/choose-category/${idMovie}`);
            }
        } else {
            alert('No actor were chosen');
        }
    };

    return (
        <form className="rounded-md border border-gray-300 p-5 shadow bg-white mx-auto my-4 lg:w-10/12" onSubmit={handleSubmit}>
            <label htmlFor="searchActor" className="block  font-medium text-gray-700 mb-1">
                Actor Movie
            </label>
            <input id="searchActor" type="search" placeholder="Search..." value={searchValue} onChange={handleSearchChange} className="w-full border p-3 mb-3 rounded-lg text-black" />
            <ul className="h-[400px] overflow-y-scroll">
                {dataSearch.length > 0 ? (
                    dataSearch.map((items) => (
                        <li key={items.idActorMovie} className="h-[100px] p-3 my-2 border grid lg:grid-cols-2">
                            <div className="flex items-center">
                                <input
                                    type="checkbox"
                                    id={`${items.idActorMovie}`}
                                    className="mr-2  focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                                    onClick={() => handleCheckboxChange(items.idActorMovie)}
                                    defaultChecked={actorDefault.includes(items.idActorMovie)}
                                />
                                <label className="text-xl text-black" htmlFor={`${items.idActorMovie}`}>
                                    {items.firstName + ' ' + items.lastName}
                                </label>
                            </div>
                            <div className=" justify-self-end">
                                <img src={items.imgActorMovie} alt={items.firstName + ' ' + items.lastName} className="w-[60px] h-[80px] mr-4" />
                            </div>
                        </li>
                    ))
                ) : (
                    <div>
                        <p className="text-black text-center text-md my-20">Actor not found ...</p>
                    </div>
                )}
            </ul>
            <div className="mt-10">
                <input type="submit" className="px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded-md w-full" value={pathName === linkDetails ? 'Edit' : 'Step 3'} />
            </div>
        </form>
    );
};

export default SearchCheckBox;
