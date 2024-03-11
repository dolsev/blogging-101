import React from "react";
import { PaginationControlsProps } from "../types/types";
import styles from "./PaginationControls.module.css";

const PaginationControls = ({ page, hasNextPage, onNextPage, onPrevPage }: PaginationControlsProps) => {
    return (
        <div className={styles.paginationContainer}>
            <button
                className={styles.paginationButton}
                onClick={onPrevPage}
                disabled={page === 1}
            >
                Previous Page
            </button>
            <span>Page: {page}</span>
            <button
                className={styles.paginationButton}
                onClick={onNextPage}
                disabled={!hasNextPage}
            >
                Next Page
            </button>
        </div>
    );
};

export default PaginationControls;
