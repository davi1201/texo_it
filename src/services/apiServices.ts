import axios from 'axios';

const headers = {
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
};

export const axiosInstance = axios.create({
    baseURL: 'https://tools.texoit.com/backend-java/api/',
    headers: headers,
});

export const apiServices = (() => {
    return {
        get: async (url: string, params: string) => {            
            return await axiosInstance.get(url, { params });
        },
    }
})();

