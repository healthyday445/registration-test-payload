export const safeSessionStorageGet = (key: string): string | null => {
    try {
        return sessionStorage.getItem(key);
    } catch (e) {
        return null;
    }
};
