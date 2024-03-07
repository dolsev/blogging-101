import * as React from "react";

interface PostListProps {
    posts: { id: number; title: string }[];
}

const PostList: React.FC<PostListProps> = ({ posts }) => {
    return (
        <div>
            {posts.length === 0 ? (
                <div>No more posts available.</div>
            ) : (
                <ul>
                    {posts.map((post) => {
                        return <li key={post.id}>{post.title}</li>;
                    })}
                </ul>
            )}
        </div>
    );
};

export default PostList;
