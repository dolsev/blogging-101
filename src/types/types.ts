export interface PaginationControlsProps {
    page: number;
    hasNextPage: boolean;
    onNextPage: () => void;
    onPrevPage: () => void;
}

export interface Post {
    id: number;
    title: string;
}
export interface DetailedPost {
    id: number;
    title: string;
    body: string;
}