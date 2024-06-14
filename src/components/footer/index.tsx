import styles from "./styles.module.css";

function Footer() {
    return (
        <footer className={styles.footer}>
            <p>Emrah Atalay &copy; {new Date().getFullYear()} -
                Made with ❤️ in Turkey
            </p>

        </footer>
    );
}

export default Footer;