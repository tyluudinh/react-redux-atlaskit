import {VSSCHttpClient} from "core/http";
import {getAuthTokenModel, VSSCAuth} from "core/services/auth";
import {ObjectIsNull} from "shared/utils/object";
import {
    createGenericSlice,
    GenericState,
    initialGenericState
} from "store/helper";
import {createAsyncThunk} from "@reduxjs/toolkit";
interface AuthState extends GenericState<boolean> {}
const initialAuthState: AuthState = {
    ...initialGenericState(!ObjectIsNull(getAuthTokenModel))
};
export const AuthDispatch = createAsyncThunk(
    'authenticate',
    async (payload: {}, {dispatch}) => {
        const authResponse = await VSSCHttpClient.auth.login(payload);
        VSSCAuth.storeAuthenticate(authResponse.data);
        return authResponse.data;
    }
);
export const authSlice = createGenericSlice({
    name: 'auth',
    initialState: initialAuthState,
    reducers: {},
    asyncThunk: AuthDispatch
});

export default authSlice.reducer;
