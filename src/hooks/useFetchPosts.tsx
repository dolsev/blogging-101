import { useState, useEffect } from "react";
import { BASE_URL } from "../../config";
import { Post } from "../types/types";

const useFetchPosts = (page: number) => {
    const [error, setError] = useState<any>(null);
    const [isLoading, setIsLoading] = useState(false);
    const [posts, setPosts] = useState<Post[]>([]);
    const [hasNextPage, setHasNextPage] = useState(true);

    useEffect(() => {
        const fetchPosts = async () => {
            setIsLoading(true);

            try {
                const response = await fetch(`${BASE_URL}/posts?_page=${page}`);
                const fetchedPosts: Post[] = await response.json();
                setPosts(fetchedPosts);
                setHasNextPage(fetchedPosts.length > 0);
                setError(null);
            } catch (e: any) {
                setError(e);
            } finally {
                setIsLoading(false);
            }
        };

        fetchPosts();
    }, [page]);

    return { error, isLoading, posts, hasNextPage };
};

export default useFetchPosts;
