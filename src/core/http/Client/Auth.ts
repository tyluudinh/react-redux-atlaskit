import {IHttpServiceClientOptions} from "../Base/type";

export interface IAuthHttpClient {
    login(data: any): Promise<any>,
    signUp(data: any): Promise<any>
}
export function AuthHttpClient(option: IHttpServiceClientOptions): IAuthHttpClient {
    function login(data: any): Promise<any> {
        const url = option.httpService.getUrl('/login', option.mock);
        return option.httpService.post(url, data);
    }
    function signUp(data: any): Promise<any> {
        const url = option.httpService.getUrl('/signUp', option.mock);
        return option.httpService.post(url, data);
    }
    return {
        login,
        signUp
    }
}
