import CategoryItem from '@/components/category';
import SearchCheckBox from '@/components/input-search-list';
import Loading from '@/components/loading';
import { useRouter } from 'next/router';
import React, { useCallback, useEffect, useState } from 'react';

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

const ChooseActor: React.FC<Props> = ({ path }) => {
    const router = useRouter();
    const [isLoading, setIsLoading] = useState(true);
    return (
        <div className="flex-shrink-0 mt-[72px]">
            <SearchCheckBox idMovie={path} />
        </div>
    );
};
export default ChooseActor;
