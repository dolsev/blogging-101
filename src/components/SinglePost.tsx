import React from "react";
import ErrorComponent from "./ErrorComponent";
import useFetchSinglePost from "../hooks/useFetchSinglePost";

const SinglePost: React.FC = () => {
    const { error, isLoading, post } = useFetchSinglePost();
    if (error) {
        return <ErrorComponent error={error} />;
    }

    return (
        <div>
            {isLoading && <div>Loading...</div>}
            {post && (
                <div>
                    <h2>{post.title}</h2>
                    <p>{post.body}</p>
                </div>
            )}
        </div>
    );
};

export default SinglePost;
