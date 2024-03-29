import { Link } from "react-router-dom";
import styles from "./Header.module.css";

const Header = () => {
    return (
        <header className={styles.header}>
            <Link to="/" className={styles.logoLink}>
                <h1>TheBlog</h1>
            </Link>
        </header>
    );
};

export default Header;
