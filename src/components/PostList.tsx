import React, { useState } from "react";
import PaginationControls from "./PaginationControls";
import ErrorComponent from "./ErrorComponent";
import { useNavigate } from "react-router-dom";
import useFetchPosts from "../hooks/useFetchPosts";
import { Post } from "../types/types";

const PostList: React.FC = () => {
    const navigate = useNavigate();
    const [page, setPage] = useState(1);
    const { error, isLoading, posts, hasNextPage } = useFetchPosts(page);

    const nextPage = () => {
        setPage(page + 1);
    };

    const prevPage = () => {
        setPage(page - 1);
    };

    const handlePostClick = (postId: number) => {
        navigate(`/post/${postId}`);
    };

    if (error) {
        return <ErrorComponent error={error} />;
    }

    return (
        <div>
            <PaginationControls
                page={page}
                hasNextPage={hasNextPage}
                onNextPage={nextPage}
                onPrevPage={prevPage}
            />
            {isLoading && <div>Loading...</div>}
            {!isLoading && posts.length > 0 ? (
                <ul>
                    {posts.map((post: Post) => (
                        <li key={post.id} onClick={() => handlePostClick(post.id)}>
                            {post.title}
                        </li>
                    ))}
                </ul>
            ) : (
                <div>No posts available</div>
            )}
        </div>
    );
};

export default PostList;
