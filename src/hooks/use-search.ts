"use client";

import { SearchContext } from "@/context/search-context";
import { useContext } from "react";


/**
 * Hook que encapsula o useContext para o SearchContext.
 * Basta importar `useSearch` em qualquer componente cliente
 * para ler/escrever os valores do contexto de busca.
 */
export function useSearch() {
  return useContext(SearchContext);
}