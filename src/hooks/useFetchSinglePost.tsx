import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { DetailedPost } from "../types/types";
import { BASE_URL } from "../../config";

const useFetchSinglePost = () => {
    const { id } = useParams();
    const [error, setError] = useState<any>(null);
    const [isLoading, setIsLoading] = useState(false);
    const [post, setPost] = useState<DetailedPost | null>(null);

    useEffect(() => {
        const fetchPost = async () => {
            setIsLoading(true);

            try {
                console.log('trying')
                const response = await fetch(`${BASE_URL}/posts/${id}`);
                const postData = await response.json();
                setPost(postData);
                setError(null);
            } catch (e: any) {
                setError(e);
            } finally {
                setIsLoading(false);
            }
        };

        fetchPost();
    }, [id]);

    return { error, isLoading, post };
};

export default useFetchSinglePost;
