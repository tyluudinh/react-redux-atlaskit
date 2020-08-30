import {HttpClient} from "./Client";

export const VSSCHttpCLient = HttpClient({
    baseURL: process.env.BASE_URL || '',
    mockBaseURL: process.env.MOCK_BASE_URL || '',
});
