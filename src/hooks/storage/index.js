export default function useSave(key, value) {

    localStorage.setItem(key, JSON.stringify(value));
};

export function useLoad(key) {

    try {

        const value = localStorage.getItem(key);
        return JSON.parse(value);

    } catch {

        return null;
    };
};

export function useRemove(key) {

    localStorage.removeItem(key);
};