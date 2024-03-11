import React from "react";
import styles from "./ErrorComponent.module.css";

interface ErrorComponentProps {
    error: any;
}

const ErrorComponent = ({ error }: ErrorComponentProps) => {
    return <div className={styles.errorContainer}>Something went wrong! Error: {error}</div>;
};

export default ErrorComponent;
