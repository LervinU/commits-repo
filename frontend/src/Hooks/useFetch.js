import { useState, useEffect } from 'react';
import axios from 'axios';

const useFetch = (URL) => {
    const [isLoading, setLoading] = useState(true);
    const [successResponse, setSuccessResponse] = useState(null);
    const [failureResponse, setFailureResponse] = useState(null);

    useEffect(() => {
        setLoading(true);
        axios(URL)
        .then(res => {
            setLoading(false);
            setSuccessResponse(res.data)
        })
        .catch(error => {
            setLoading(false);
            setFailureResponse(error)
        })
    }, [URL]);
    
    return { isLoading, successResponse, failureResponse };
    
}

export default useFetch;