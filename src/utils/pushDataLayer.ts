export const pushDataLayer = (data: Record<string, unknown>) => {
    const win = window as Window & { dataLayer?: Record<string, unknown>[] };
    win.dataLayer = win.dataLayer || [];
    win.dataLayer.push(data);
};
