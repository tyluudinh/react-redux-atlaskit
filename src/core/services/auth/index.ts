import { AuthService } from './auth.service';
import {IAuthTokenModel} from "./types";

export const VSSCAuth = AuthService();
export const getAuthTokenModel: IAuthTokenModel = VSSCAuth.getStoredAuthenticate;
export * from './types';
