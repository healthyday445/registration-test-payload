export const getIpAddress = async (): Promise<string | null> => {
    try {
        const response = await fetch('https://api.ipify.org?format=json');
        if (response.ok) {
            const data = await response.json();
            return data.ip || null;
        }
        return null;
    } catch (error) {
        console.error("Failed to fetch IP address:", error);
        return null;
    }
};
