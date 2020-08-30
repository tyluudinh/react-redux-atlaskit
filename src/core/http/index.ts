import {HttpClient} from "./Client";
import {VSSCAuth} from "core/services/auth";

export const VSSCHttpClient = HttpClient({
    baseURL: 'https://reqres.in',
    mockBaseURL: process.env.MOCK_BASE_URL || '',
    authService: VSSCAuth
});
