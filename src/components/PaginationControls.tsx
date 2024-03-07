import {PaginationControlsProps} from "../types/types";

const usePaginationControls = ({ page, hasNextPage, onNextPage, onPrevPage }: PaginationControlsProps) => {
    const nextPage = () => {
        onNextPage();
    };

    const prevPage = () => {
        onPrevPage();
    };

    return (
        <div>
            <button onClick={prevPage} disabled={page === 1}>
                Previous Page
            </button>
            <span>Page: {page}</span>
            <button onClick={nextPage} disabled={!hasNextPage}>
                Next Page
            </button>
        </div>
    );
};

export default usePaginationControls;
