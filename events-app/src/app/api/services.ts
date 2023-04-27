import { API_KEY } from 'app/constants';
import { GetEventsType } from 'app/types';
import axios, { AxiosInstance, AxiosRequestConfig } from 'axios';

const axiosConfig: AxiosRequestConfig = {
    baseURL: 'https://app.ticketmaster.com/discovery/v2',
    timeout: 6000,
    headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
    },
};

const HttpService: AxiosInstance = axios.create(axiosConfig);

export const getEvents = async ({ keyword, page, size }: GetEventsType): Promise<any> => {

    const q = new URLSearchParams();

    if (keyword.length) q.append("keyword", keyword);
    q.append("size", size.toString());
    q.append("page", page.toString());
    q.append("apikey", API_KEY);

    return await HttpService.get("/events.json?" + q.toString())
}

export const getEventDetails = async (eventId: string | undefined) => {

    const q = new URLSearchParams();

    q.append("apikey", API_KEY);

    return await HttpService.get(`/events/${eventId}?${q.toString()}`);

}