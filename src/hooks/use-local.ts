import { useEffect, useState } from "react";

export function useLocalStorage<T>(
    key: string,
    initialState: T
): [T, (value: T) => void] {
    const [state, setState] = useState<T>(() => {
        try {
            const item = localStorage.getItem(key);
            return item ? (JSON.parse(item) as T) : initialState;
        } catch (error) {
            console.warn("Error reading localStorage:", error);
            return initialState;
        }
    });

    useEffect(() => {
        try {
            localStorage.setItem(key, JSON.stringify(state));
        } catch (error) {
            console.warn("Error writing to localStorage:", error);
        }
    }, [key, state]);

    return [state, setState];
}
