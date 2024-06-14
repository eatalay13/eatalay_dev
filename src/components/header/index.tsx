import Link from "next/link";
import styles from "./styles.module.css";

function Header() {
    return (
        <header className={styles.header}>
            <h1 className={styles.logo}>Emrah Atalay</h1>
            <nav className={styles.nav}>
                <Link href="/">Anasayfa</Link>
                <Link href="/blog">Blog</Link>
                <Link href="/project">Projeler</Link>
                <Link href="/about">Hakkımda</Link>
                <Link href="/contact">İletişim</Link>
            </nav>
        </header>
    );
}

export default Header;