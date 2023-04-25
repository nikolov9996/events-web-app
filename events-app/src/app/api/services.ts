import { API_KEY } from 'app/constants';
import axios, { AxiosInstance, AxiosRequestConfig } from 'axios';

const axiosConfig: AxiosRequestConfig = {
    baseURL: 'https://app.ticketmaster.com/discovery/v2',
    timeout: 5000,
    headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
    },
};

const keyQuery = `apikey=${API_KEY}`;

const HttpService: AxiosInstance = axios.create(axiosConfig);



export const getEvents = async (): Promise<any> => {

    const q = new URLSearchParams();

    q.append("size", "20");
    q.append("page", "4");

    return HttpService.get("/events.json?" + q.toString() + "&" + keyQuery)
}