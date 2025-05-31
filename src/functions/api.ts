export const API_URL = "https://api.themoviedb.org/3";

const token = process.env.NEXT_PUBLIC_API_KEY;

if (!token) {
  throw new Error('📛 A variável de ambiente API_KEY não está definida.');
}

const options: RequestInit = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: `Bearer ${token}`
  }
}

export async function fetchPopularMovies(pages = 5) {
    try {
      const response = await fetch(`${API_URL}/discover/movie?include_adult=false&include_video=false&language=en-US&page=${pages}&sort_by=popularity.desc`, options);
      const data = await response.json();

      return data.results;

    } catch (error) {
      console.log("Error ao obter filmes populares:", error);
      throw error;
    }
}

export async function fetchMovies(searchText: string) {
  try {
    const response = await fetch(`${API_URL}/search/movie?language=en-US&query=${searchText}&page=1&include_adult=false`, options);
    const data = await response.json();

    return data.results;

  } catch (error) {
    console.log("Error ao obter filmes:", error);
    throw error;
  }
}