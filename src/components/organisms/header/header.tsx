"use client"

import Link from 'next/link';
import Image from 'next/image';

//Styles
import styles from './header.module.css';
import { IconButton, TextField, ThemeProvider } from '@mui/material';

//External
import SearchIcon from '@mui/icons-material/Search';
import theme from '@/app/theme';

export default function Header() {
    return(
        <header className={styles.header}>
            <nav className={styles.nav}>
                <Link className={styles.logo} href={"/"}>
                    <Image 
                        src={"/assets/LOGO.svg"}
                        alt="Movie Browser logo"
                        width={28}
                        height={28}
                        priority
                    />
                </Link>

                <div className={styles.MenuItens}>
                    <Link href={"/about"}>
                        About
                    </Link>

                    <Link href={"/"}>
                        Coming soon
                    </Link>
                    
                    {/* Input de pesquisa */}
                    <div>
                        <ThemeProvider theme={theme}>
                            <form action="submit">
                                <TextField id="movie-search" label="Search" variant="outlined" size="small" color='secondary' />

                                <IconButton aria-label="search">
                                    <SearchIcon />
                                </IconButton>
                            </form>
                        </ThemeProvider>
                    </div>
                </div>

            </nav>
        </header>
    )
}