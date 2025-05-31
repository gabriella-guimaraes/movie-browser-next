"use client";

//Styles
import theme from "@/app/theme";
import { ThemeProvider } from "@emotion/react";
import { IconButton, TextField } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

//Hooks
import { useEffect, useState } from "react";
import { useRouter, usePathname  } from "next/navigation";
import { useSearch } from "@/hooks/use-search";

export default function SearchInput() {
  const [localTerm, setLocalTerm] = useState<string>("");
  const { setSearchTerm, fetchSearchResults } = useSearch();

  const router = useRouter();
  const pathname = usePathname();

   // useEffect que “ouve” toda vez que localTerm muda
  useEffect(() => {
    const termTrimmed = localTerm.trim();

    if (termTrimmed === "") {
      return;
    }

    // Sempre que localTerm tiver pelo menos 1 caractere (após trim), dispara a busca:
    setSearchTerm(termTrimmed);
    fetchSearchResults(termTrimmed);

    if (pathname !== "/search") {
      router.push("/search");
    }

    // Observação: não colocamos “await” no fetch aqui, porque não precisamos aguardar o resultado para navegar.
    //            Se quiser aguardar, transforme em uma função async dentro do useEffect, mas geralmente
    //            não é estritamente necessário para um comportamento reativo de busca.

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [localTerm]); 
  // ⚠️ Aviso: deixamos apenas “localTerm” no array de dependências do useEffect para que toda vez
  //           que ele mude, o efeito seja disparado. Se você incluir “router” ou “setSearchTerm”/
  //           “fetchSearchResults” aqui, o ESLint do React-pesquisará dependências “ausentes/inválidas”.
  //           Como essas funções vêm de um contexto estável, esse padrão costuma passar sem problemas.
  //           Caso apareça alerta de dependência inválida, você pode justificar via “// eslint-disable-next-line ...”
  //        

  return (
    <section>
      <ThemeProvider theme={theme}>
          <TextField
            id="movie-search"
            label="Search"
            variant="outlined"
            size="small"
            color="secondary"
            onChange={(e) => setLocalTerm(e.target.value)}
          />

          <IconButton aria-label="search" onClick={() => {
              const termTrimmed = localTerm.trim();
              if (!termTrimmed) return;
              setSearchTerm(termTrimmed);
              fetchSearchResults(termTrimmed);
              if (pathname !== "/search") {
                router.push("/search");
              }
            }}>
            <SearchIcon />
          </IconButton>
      </ThemeProvider>
    </section>
  );
}
