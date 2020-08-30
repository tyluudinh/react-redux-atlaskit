import axios, {AxiosRequestConfig, AxiosResponse} from 'axios';
import {IHttpService, IHttpServiceOptions} from "./type";

export function HttpService(option: IHttpServiceOptions): IHttpService {
    const HTTP = axios.create({
        headers: {
            'Content-Type': 'application/json'
        },
    });
    function getUrl(url: string, mock?: boolean): string {
        return mock ? option.mockBaseURL + url : option.baseURL + url
    }
    // @ts-ignore
    async function request<T = any>(config: AxiosRequestConfig): Promise<T> {
        // Todo get auth token from store

        const authorization = null;
        const configRequest: AxiosRequestConfig = {
            ...config,
            headers: {
                ...config.headers,
                authorization
            }
        };
        let response: AxiosResponse;
        try {
            response = await HTTP.request<T>(configRequest);
        } catch (error) {
            response = error.response;
        }
        switch (response.status) {
            case 200:
            case 201:
            case 204:
                return response.data;
            case 400:
            case 401:
            case 403:
            case 404:
            case 500:
                // Todo Logger here
                return Promise.reject(response.data);

        }
    }
    async function get<T = any>(url: string, config: AxiosRequestConfig): Promise<T> {
        return request({
            ...config,
            url,
            method: 'get'
        })
    }
    async function del<T = any>(url: string, config: AxiosRequestConfig): Promise<T> {
        return request({
            ...config,
            url,
            method: 'delete'
        })
    }
    async function post<T = any>(url: string, data: any, config: AxiosRequestConfig): Promise<T> {
        return request({
            ...config,
            url,
            method: 'post',
            data
        })
    }
    async function put<T = any>(url: string, data: any, config: AxiosRequestConfig): Promise<T> {
        return request({
            ...config,
            url,
            method: 'put',
            data
        })
    }
    async function patch<T = any>(url: string, data: any, config: AxiosRequestConfig): Promise<T> {
        return request({
            ...config,
            url,
            method: 'put',
            data
        })
    }
    return {
        getUrl,
        get,
        del,
        post,
        put,
        patch,
    }
}
