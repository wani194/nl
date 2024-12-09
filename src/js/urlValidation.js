export const isValidUrl = (url) => {
    const regex = /^(https?:\/\/)?([\w\-\.]+)+(:\d+)?(\/([\w/_\-\.]*(\?\S+)?)?)?$/;
    return regex.test(url);
  };
  