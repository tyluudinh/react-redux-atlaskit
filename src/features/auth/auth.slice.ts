import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {
    initialBaseApiState,
    startLoading,
    loadingFailed,
    IBaseApiState
} from "shared/models/base-api-state.model";
import {AppThunk} from "store/appStore";
import {VSSCHttpClient} from "core/http";
import {VSSCAuth} from "core/services/auth";
type AuthState = IBaseApiState<{}> & {
    authenticated?: boolean;
};
const initialAuthState: AuthState = initialBaseApiState({}, {
    authenticated: !!VSSCAuth.getStoredAuthToken()
});
const authSlice = createSlice({
    name: 'auth',
    initialState: initialAuthState,
    reducers: {
        getAuthStart: startLoading,
        getAuthFailure: loadingFailed,
        getAuthSuccess(state: AuthState, { payload }: PayloadAction<{}>) {
            state.loading = false;
            state.error = null;
            state.data = payload;
            state.authenticated = true;
        },
    }
});
export const {
    getAuthStart,
    getAuthSuccess,
    getAuthFailure
} = authSlice.actions;
export default authSlice.reducer;
export const authDispatch = (payload: {}): AppThunk => async dispatch => {
    try {
        dispatch(getAuthStart());
        const authResponse = await VSSCHttpClient.auth.login(payload);
        dispatch(getAuthSuccess(authResponse));
        VSSCAuth.storeAuthToken(authResponse.token);
    } catch (err) {
        const { error } = err;
        dispatch(getAuthFailure(error))
    }
};
