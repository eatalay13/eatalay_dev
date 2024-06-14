import styles from "./styles.module.css";

function Footer() {
    return (
        <footer className={styles.footer}>
            <p>Emrah Atalay &copy; {new Date().getFullYear()} -
                Her hakkı saklıdır.
            </p>

        </footer>
    );
}

export default Footer;