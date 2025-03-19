// const url = 'https://api.themoviedb.org/3/keyword/keyword_id/movies?include_adult=false&language=en-US&page=1';
// const options = {
//   method: 'GET',
//   headers: {
//     accept: 'application/json',
//     Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlODAwYmUwYzQ0MzNlMDdjNzA0MTY5MzE2NzJkZjRlOSIsIm5iZiI6MTc0MjA5NjU4NC4wOTIsInN1YiI6IjY3ZDY0OGM4MjVmMDFkNTQxNjdiYzlmMCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.15e-kj3ZpL1uz9YlswnvYsTcHXTu9qSVLFbtG30EdVQ'
//   }
// };

// fetch(url, options)
//   .then(res => res.json())
//   .then(json => console.log(json))
//   .catch(err => console.error(err));

export const TMDB_CONFIG = {
    Base_URL: 'https://api.themoviedb.org/3',
    API_KEY: process.env.EXPO_PUBLIC_TMDB_API_KEY,
    headers: {
        accept: 'application/json',
        Authorization: `Bearer ${process.env.EXPO_PUBLIC_TMDB_ACCESS_TOKEN}`
    }
};

// this function will fetch popular movies from the TMDB API
// and return the results
export const fetchMovies = async({query}: {query: string}) => {
    try {
        const endpoint = query ? 
            `${TMDB_CONFIG.Base_URL}/search/movie?query=${encodeURIComponent(query)}` :
            `${TMDB_CONFIG.Base_URL}/discover/movie`;
        
        const response = await fetch(endpoint, {
            method: 'GET',
            headers: TMDB_CONFIG.headers
        });

        if (!response.ok) {
            throw new Error(`Failed to fetch movies: ${response.status}`);
        }

        const data = await response.json();
        return data.results;
    } catch (error) {
        console.error('Error fetching movies:', error);
        throw error;
    }
};  