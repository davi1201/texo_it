import { useCallback, useState } from 'react';
import { apiServices } from '../services/apiServices';


export function useFetchCallback() {    

    const [isFetching, setIsFetching] = useState(false);
    const executeFetch = useCallback(
        async ({ url, params, onSuccess, onError }: any) => {
            setIsFetching(true);
            return apiServices
                .get(url, params)
                .then((res) => onSuccess(res.data))
                .catch((err) => {
                    console.log(err);
                    
                    if (onError) onError(err);
                })
                .finally(() => {
                    setTimeout(() => {
                        setIsFetching(false)                        
                    }, 1 * 1000);
                });
        },
        // eslint-disable-next-line react-hooks/exhaustive-deps
        []
    );
    return { isFetching, executeFetch };
}
