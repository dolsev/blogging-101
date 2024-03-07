import * as React from "react";

interface PaginationProps {
    page: number;
    hasNextPage: boolean;
    onNextPage: () => void;
    onPrevPage: () => void;
}

const Pagination: React.FC<PaginationProps> = ({
                                                   page,
                                                   hasNextPage,
                                                   onNextPage,
                                                   onPrevPage,
                                               }) => {
    return (
        <div>
            <button onClick={onPrevPage} disabled={page === 1}>
                Previous Page
            </button>
            <span>Page: {page}</span>
            <button onClick={onNextPage} disabled={!hasNextPage}>
                Next Page
            </button>
        </div>
    );
};

export default Pagination;
