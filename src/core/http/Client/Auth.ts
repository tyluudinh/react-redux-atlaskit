import {IHttpServiceClientOptions} from "../Base/type";
import {getAuthTokenModel} from "../../services/auth";

export interface IAuthHttpClient {
    login(data: any): Promise<any>,
    signUp(data: any): Promise<any>,
    getProfile(data: any): Promise<any>,
}
export function AuthHttpClient(option: IHttpServiceClientOptions): IAuthHttpClient {
    function login(data: any): Promise<any> {
        const url = option.httpService.getUrl('/users/login', option.mock);
        const params = {
            userName: data.email,
            password: data.password,
            regionCode: 'VN',
            languageCode: 'vi',
            roleTypes: 'PHARMACY_ADMIN,PHARMACY_STAFF'
        };
        return option.httpService.post(url, data, {params});
    }
    function signUp(data: any): Promise<any> {
        const url = option.httpService.getUrl('/signUp', option.mock);
        return option.httpService.post(url, data);
    }
    function getProfile() {
        const userID = getAuthTokenModel.userId;
        const url = option.httpService.getUrl(`/partners/${userID}/profile`, option.mock);
        return option.httpService.get(url);
    }
    return {
        login,
        signUp,
        getProfile
    }
}
