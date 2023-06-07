export const menu = [
    { index: 1, name: 'Movies', path: '/movie' },
    { index: 2, name: 'TV Series', path: '/tv-series' },
    { index: 3, name: 'Login', path: '/login' },
];

// Movie
export const getDataMovies = async () => {
    try {
        const response = await fetch('http://localhost:3000/api/getmovies');
        const data = await response.json();
        return data;
    } catch (error) {
        console.error(error);
    }
};

export const getDataMoviesId = async (id: number) => {
    try {
        const response = await fetch(`http://localhost:3000/api/getmovies/${id}`);
        const data = await response.json();
        return data;
    } catch (error) {
        console.error(error);
    }
};

export const postDataMovies = async (data) => {
    const url = 'http://localhost:3000/api/postmovies';
    const response = await fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    });
    const result = await response.json();
    console.log(result);
};

export const putDataMovies = async (id: string, data) => {
    const url = 'https://6422313386992901b2c385d3.mockapi.io/id';
    const response = await fetch(`${url}/${id}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    });
    const result = await response.json();
    console.log(result);
};

export const deleteDataMovies = async (id: number) => {
    const url = `https://6422313386992901b2c385d3.mockapi.io/id/${id}`;

    const response = await fetch(url, {
        method: 'DELETE',
    });

    const result = await response.json();
    console.log(result);
};

// ListActorMovie

export const getDataListActorMovieId = async (id: number) => {
    try {
        const response = await fetch(`http://localhost:3000/api/getListActorMovie/${id}`);
        const data = await response.json();
        return data;
    } catch (error) {
        console.error(error);
    }
};

export const postDataListActorMovie = async (data) => {
    const url = 'http://localhost:3000/api/postListActorMovie';
    const response = await fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    });

    const result = await response.json();
    console.log(result);
};

export const putDataListActorMovie = async (id: number, data) => {
    const url = 'http://localhost:3000/api/putListActorMovie';
    console.log({ data });

    const response = await fetch(`${url}/${id}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    });
    const result = await response.json();
    console.log(result);
};

// Category

export const getDataCategorys = async () => {
    try {
        const response = await fetch('http://localhost:3000/api/getCategory');
        const data = await response.json();
        return data;
    } catch (error) {
        console.error(error);
    }
};

// ListCategory

export const getDataListCategorys = async () => {
    try {
        const response = await fetch('http://localhost:3000/api/getCategoryList');
        const data = await response.json();
        return data;
    } catch (error) {
        console.error(error);
    }
};

export const getDataListCategorysId = async (id: number) => {
    try {
        const response = await fetch(`http://localhost:3000/api/getCategoryList/${id}`);
        const data = await response.json();
        return data;
    } catch (error) {
        console.error(error);
    }
};

export const postDataListCategory = async (data) => {
    const url = 'http://localhost:3000/api/postListCategory';
    const response = await fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    });

    const result = await response.json();
    console.log(result);
};

// MovieGenre

export const getDataMovieGenre = async () => {
    try {
        const response = await fetch('http://localhost:3000/api/getMovieGenre');
        const data = await response.json();
        return data;
    } catch (error) {
        console.error(error);
    }
};

// ActorMovie

export const getDataActorMovie = async () => {
    try {
        const response = await fetch('http://localhost:3000/api/getActorMovie');
        const data = await response.json();
        return data;
    } catch (error) {
        console.error(error);
    }
};

export const postDataActorMovie = async (data) => {
    const url = 'http://localhost:3000/api/postActorMovie';
    const response = await fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    });
    const result = await response.json();
    console.log(result);
};

export const getActorMovieById = async (id: string) => {
    try {
        const response = await fetch(`http://localhost:3000/api/getActorMovie/${id}`);
        const data = await response.json();
        return data;
    } catch (error) {
        console.error(error);
    }
};

export const getDataBannerToTitle = async (title: string) => {
    try {
        const response = await fetch(`https://6422313386992901b2c385d3.mockapi.io/BestMovies?title=${encodeURIComponent(title)}`);
        const data = await response.json();
        return data;
    } catch (error) {
        console.error(error);
    }
};

export const putDataBanner = async (id: string, data) => {
    const url = 'https://6422313386992901b2c385d3.mockapi.io/BestMovies';
    const response = await fetch(`${url}/${id}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    });
    const result = await response.json();
    console.log(result);
};

export const deleteDataBannar = async (id: string) => {
    const url = `https://6422313386992901b2c385d3.mockapi.io/BestMovies/${id}`;

    const response = await fetch(url, {
        method: 'DELETE',
    });

    const result = await response.json();
    console.log(result);
};
