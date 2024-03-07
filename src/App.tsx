import React, { useState } from "react";
import PaginationControls from "./components/PaginationControls";
import PostList from "./components/PostList";
import useFetchPosts from "./hooks/useFetchPosts";
import ErrorComponent from "./components/ErrorComponent";

const App: React.FC = () => {
    const [page, setPage] = useState(1);

    const { error, isLoading, posts, hasNextPage } = useFetchPosts(page);

    const nextPage = () => {
        setPage(page + 1);
    };

    const prevPage = () => {
        setPage(page - 1);
    };

    return (
        <div>
            <h1>Posting Is Cool</h1>
            <PaginationControls
                page={page}
                hasNextPage={hasNextPage}
                onNextPage={nextPage}
                onPrevPage={prevPage}
            />
            {error && <ErrorComponent error={error} />}
            {isLoading && <div>Loading...</div>}
            {!isLoading && !error && <PostList posts={posts} />}
        </div>
    );
};

export default App;
