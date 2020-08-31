export interface IAuthService {
    storeAuthenticate: (model: IAuthTokenModel) => void;
    removeStoredAuthenticate: () => void;
    getStoredAuthenticate: IAuthTokenModel
}
export interface IAuthTokenModel {
    accessToken: string,
    userId: number | string;
}
