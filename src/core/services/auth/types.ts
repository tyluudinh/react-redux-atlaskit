export interface IAuthService {
    getStoredAuthToken(): string | null
    storeAuthToken: (token: string) => void;
    removeStoredAuthToken: () => void;
}
