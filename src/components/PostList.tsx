import  { useState } from "react";
import { useNavigate } from "react-router-dom";
import useFetchPosts from "../hooks/useFetchPosts";
import PaginationControls from "./PaginationControls";
import ErrorComponent from "./ErrorComponent";
import styles from "./PostList.module.css";

const PostList = () => {
    const navigate = useNavigate();
    const [page, setPage] = useState(1);
    const { error, isLoading, posts, hasNextPage } = useFetchPosts(page);

    const handlePostClick = (postId:number) => {
        navigate(`/post/${postId}`);
    };

    if (error) {
        return <ErrorComponent error={error} />;
    }

    return (
        <div className={styles.postListContainer}>
            <PaginationControls
                page={page}
                hasNextPage={hasNextPage}
                onNextPage={() => setPage(page + 1)}
                onPrevPage={() => setPage(page - 1)}
            />
            {isLoading ? <div>Loading...</div> :
                posts.length > 0 ? (
                    <ul>
                        {posts.map((post) => (
                            <li key={post.id} className={styles.postItem} onClick={() => handlePostClick(post.id)}>
                                {post.title}
                            </li>
                        ))}
                    </ul>
                ) : (
                    <div>No posts available</div>
                )
            }
        </div>
    );
};

export default PostList;
