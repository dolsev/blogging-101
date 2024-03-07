// PaginationControls.tsx
import React from "react";

interface PaginationControlsProps {
    page: number;
    hasNextPage: boolean;
    onNextPage: () => void;
    onPrevPage: () => void;
}

const PaginationControls: React.FC<PaginationControlsProps> = ({
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

export default PaginationControls;
