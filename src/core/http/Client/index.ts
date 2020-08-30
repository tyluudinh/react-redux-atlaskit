import {IHttpClient} from "./type";
import {IHttpServiceOptions} from "../Base/type";
import {AuthHttpClient} from "./Auth";
import {HttpService} from "../Base";

export function HttpClient(option: IHttpServiceOptions): IHttpClient {
    const httpService = HttpService(option);
    return {
        auth: AuthHttpClient({httpService}),
    }
}
