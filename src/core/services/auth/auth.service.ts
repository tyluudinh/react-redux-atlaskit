import {IAuthTokenModel, IAuthService} from "./types";

export function AuthService(): IAuthService  {
    return {
        storeAuthenticate: (model: IAuthTokenModel) => {
            localStorage.setItem('accessToken', model.accessToken);
            localStorage.setItem('userId', model.userId.toString());
        },
        removeStoredAuthenticate: () => {
            localStorage.removeItem('accessToken');
            localStorage.removeItem('userId');
        },
        getStoredAuthenticate: {
            accessToken: localStorage.getItem('accessToken'),
            userId: localStorage.getItem('userId'),
        } as IAuthTokenModel
    }
}
