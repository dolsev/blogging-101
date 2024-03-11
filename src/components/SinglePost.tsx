import React from "react";
import { Link } from "react-router-dom";
import ErrorComponent from "./ErrorComponent";
import useFetchSinglePost from "../hooks/useFetchSinglePost";
import styles from "./SinglePost.module.css";

const SinglePost = () => {
    const { error, isLoading, post } = useFetchSinglePost();

    if (error) {
        return <ErrorComponent error={error} />;
    }

    return (
        <div className={styles.singlePostContainer}>
            {isLoading && <div>Loading...</div>}
            {post && (
                <div>
                    <h2 className={styles.singlePostTitle}>{post.title}</h2>
                    <p className={styles.singlePostBody}>{post.body}</p>
                    <div className={styles.goBackButton}>
                        <Link to="/" className={styles.goBackLink}>Go back</Link>
                    </div>
                </div>
            )}
        </div>
    );
}

export default SinglePost;
