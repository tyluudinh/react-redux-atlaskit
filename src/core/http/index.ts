import {HttpClient} from "./Client";
import {VSSCAuth} from "core/services/auth";

export const VSSCHttpClient = HttpClient({
    baseURL: 'http://dev.jiohealth.com:8081/JioPartnerPharmacy/rest',
    mockBaseURL: process.env.MOCK_BASE_URL || '',
    authService: VSSCAuth
});
