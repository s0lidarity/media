
import { useState, useCallback } from 'react';
import { useDispatch } from 'react-redux';
export function useThunk(thunk) {
    const [isLoading, setIsLoading] = useState(false);
    const [err, setErr] = useState(null);
    const dispatch = useDispatch();

    const runThunk = useCallback((arg) => {
        setIsLoading(true);
        dispatch(thunk(arg))
            .unwrap()
            .catch((e) => setErr(e))
            .finally(() => setIsLoading(false));
    }, [dispatch, thunk]);

    return [runThunk, isLoading, err];
};