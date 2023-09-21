import {useState, useEffect} from "react";
//fetch
export default function useFetch(url, options) {

    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] =useState(false);
    const [responseOk, setResponse] = useState(false);

    async function getData() {
        
        try {
            setLoading(true);
            setError(false);

            const response = await fetch(url, options);
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
//Post/Put
export function useSendData(url, options, body) {

    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] =useState(false);
    const [responseOk, setResponse] = useState(false);

    setLoading(true);
    setError(false);
    
    async function sendData(url, options, body) {
        try {
            const dataToSend = {
                options,
                body: JSON.stringify(body),
            }
            console.log(dataToSend)
            const response = await fetch(url, dataToSend);
            const json = await response.json();
            console.log(json)
            setData(json);
            if (response.ok) {
                setResponse(true)
                setData(json)
            } else {
                setError(true);
            }
        } catch(error) {
            setError(true);
            console.log(error)
        }
    }
    useEffect( () => {
        sendData();
    }, [url]);
    return {data, loading, error, responseOk};
}

export function useDeleteData(url, options) {}