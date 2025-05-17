import { useEffect, useRef } from "react";



//This is a React hook called `useDebounce`. It takes a `callback` function and a `delay` time in milliseconds as arguments. The hook returns a new function, `debouncedCallback`, which delays the execution of the original `callback` function by the specified `delay` time. The `useEffect` hook is used to clean up the timeout when the component is unmounted.
export const useDebounce = (callback, delay) => {
    const timeoutIdRef = useRef(null);

// When the component is unmounted, the `debouncedCallback` function may still have a pending timeout. If the component is remounted, a new timeout will be created, but the old one will still exist, causing unexpected behavior. The `useEffect` hook with an empty dependency array (`[]`) runs only once, when the component is mounted, and it sets up a cleanup function that runs when the component is unmounted.
    useEffect(() => {
        return () => {
            if (timeoutIdRef.current) {
                clearTimeout(timeoutIdRef.current);
            }
        };
    }, []);

    //If `debouncedCallback` is called multiple times in rapid succession, it will only execute the `callback` function once, after the delay has passed, preventing multiple executions.
    const debouncedCallback = (...args) => {
        if (timeoutIdRef.current) {
            clearTimeout(timeoutIdRef.current);
        }

        timeoutIdRef.current = setTimeout(() => {
            callback(...args);
        }, delay);
    };
    return debouncedCallback;
};