export const getFile = async (path: string) => {
    try {
        const response = await fetch(path);
        const json = await response.json();
        return json;

    } catch (e) {
        console.error(e);
    }
}