import {AxiosRequestConfig} from "axios";
import {IAuthService} from "core/services/auth";

export interface IHttpService {
    getUrl(url: string, mock?: boolean): string;
    get<T = any>(url: string, options?: AxiosRequestConfig): Promise<T>;
    post<T = any>(url: string, data: any, options?: AxiosRequestConfig): Promise<T>;
    put<T = any>(url: string, data: any, options?: AxiosRequestConfig): Promise<T>;
    patch<T = any>(url: string, data: any, options?: AxiosRequestConfig): Promise<T>;
    del<T = any>(url: string, options?: AxiosRequestConfig): Promise<T>;
}

export interface IHttpServiceClientOptions {
    httpService: IHttpService;
    mock?: boolean;
}

export interface IHttpServiceOptions {
    baseURL: string;
    mockBaseURL: string;
    authService: IAuthService;
}
