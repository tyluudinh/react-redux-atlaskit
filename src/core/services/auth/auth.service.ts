import {IAuthService} from "./types";

export function AuthService(): IAuthService {
    return {
        getStoredAuthToken: () => localStorage.getItem('authToken'),
        storeAuthToken: (token: string) => localStorage.setItem('authToken', token),
        removeStoredAuthToken: () => localStorage.removeItem('authToken')
    }
}
