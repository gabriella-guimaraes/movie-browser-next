"use client"

import { createContext, useState, useCallback, ReactNode } from "react";

//API
import { fetchMovies } from "@/functions/api";

//Models
import { Movie } from "@/types/movie.model";

// 1) Tipagem dos valores do contexto (você pode ajustar conforme o formato da sua API)
type SearchContextType = {
  searchTerm: string
  searchResults: Movie[]
  setSearchTerm: (term: string) => void
  fetchSearchResults: (term: string) => Promise<void>
};

// 2) Criação do contexto em si (valores iniciais “vazios”)
export const SearchContext = createContext<SearchContextType>({
  searchTerm: "",
  searchResults: [],
  setSearchTerm: () => {},
  fetchSearchResults: async () => {},
});

// 3) Provider que será usado para envolver a aplicação
export function SearchProvider({ children }: { children: ReactNode }) {
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [searchResults, setSearchResults] = useState<Movie[]>([]);

  const fetchSearchResults = useCallback(
    async (term: string) => {
      try {
        const data: Movie[] = await fetchMovies(term);
        setSearchResults(data);
      } catch (error) {
        console.error("Erro ao buscar resultados:", error);
        setSearchResults([]);
      }
    },
    []
  );

  return (
    <SearchContext.Provider
      value={{
        searchTerm,
        searchResults,
        setSearchTerm,
        fetchSearchResults,
      }}
    >
      {children}
    </SearchContext.Provider>
  );
}