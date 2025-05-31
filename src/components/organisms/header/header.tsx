import Link from 'next/link';
import Image from 'next/image';

//Styles
import styles from './header.module.css';

//Components
import SearchInput from './../../molecules/search-input/search-input';

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
                    <SearchInput />
                </div>

            </nav>
        </header>
    )
}