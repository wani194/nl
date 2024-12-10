export const isValidUrl = (url) => {
    const regex = /^(https?:\/\/)?([\w\-]+\.[a-zA-Z]{2,})(\/[\w\/\-]*)?$/;
    return regex.test(url);
};
