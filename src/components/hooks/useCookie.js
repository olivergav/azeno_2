import { useEffect, useState } from 'react';

const useCookie = (cookieName) => {
    const [cookie, setCookie] = useState(undefined);

    useEffect(() => {
        const val = document.cookie
            .split('; ')
            .filter((item) => item.startsWith(`${cookieName}=`))[0];

        if (val !== undefined) {
            setCookie(val.split('=')[1]);
        }
    }, [cookieName]);

    useEffect(() => {
        if (cookie !== undefined) {
            document.cookie = `${cookieName}=${cookie}`;
        }
    }, [cookie]);

    return [cookie, setCookie];
};

export default useCookie;
