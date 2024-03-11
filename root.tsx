import { Outlet } from "react-router-dom";
import Header from "./src/components/Header";
import styles from "./Root.module.css";

const Root = () => {
    return (
        <div className={styles.rootContainer}>
            <Header/>
            <Outlet/>
        </div>
    );
};

export default Root;
