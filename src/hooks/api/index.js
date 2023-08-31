import {useState, useEffect} from "react";

export default function useFetch(url) {

    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] =useState(false);
    const [responseOk, setResponse] = useState(false);

    async function getData() {
        
        try {
            setLoading(true);
            setError(false);

            const response = await fetch(url);
            const json = await response.json();
            setData(json);
            if (response.ok) {
                setResponse(true)
            } else {
                setError(true);
            }

        } catch (error) {
            console.log(error);
            setError(true);
        } finally {
            setLoading(false);
        }
    } 
    
    useEffect(
        () => {
            getData();
        }, [url]);

        return {data, loading, error, responseOk};
}

export async function usePost(url, postData, postOptions) {
    await fetch(url, postOptions);
    console.log(postData)
}