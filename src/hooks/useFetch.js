import { useEffect, useState } from 'react';

const useFetch = (method, param) => {

    const [loading, setLoading] = useState(false)
    const [data, setData] = useState(null)
    const [error, setError] = useState(false)

    useEffect(() => {
        setLoading(true)
        method(param)
            .then(res => res.json())
            .then(res => {
                setData(res.data)
                setLoading(false)
            })
            .catch(error => {
                console.log("error: ", error);
                setError(true)
                setLoading(false)
            })
    }, [])

    return { loading, data, error }
}

export default useFetch