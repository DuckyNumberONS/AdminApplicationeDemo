import ChooseActor from '@/components/manage-movies/create/choose-actor-movie';
import React from 'react';
import Image from 'next/image';

interface PropsActor {
    idActorMovie: number;
    firstName: string;
    lastName: string;
    imgActorMovie: string;
}

interface Props {
    onClick: () => void;
    id: number;
}

const ChooosActorMovies: React.FC<Props> = ({ onClick, id }) => {
    return (
        <div className="bg-white w-3/4 mx-auto my-10 p-3 rounded-md ">
            <div className="w-full">
                <button onClick={onClick} className="text-black-acadia float-right">
                    <Image className="w-auto h-auto" src={'/image/close.png'} width={20} height={20} alt="close" />
                </button>
            </div>
            <ChooseActor path={id} />
        </div>
    );
};
export default ChooosActorMovies;
