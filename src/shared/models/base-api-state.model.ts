import {PayloadAction} from "@reduxjs/toolkit";

export interface IBaseApiState<T = any> {
    loading: boolean,
    success: boolean;
    error: string | null;
    data: T
}
export function initialBaseApiState<T>(data: T, initValues = {}): IBaseApiState<T> {
   return {
       loading: false,
       success: false,
       error: null,
       data,
       ...initValues
   }
}
export function startLoading(state: IBaseApiState) {
    state.loading = true;
    state.error = null;
}

export function loadingFailed(state: IBaseApiState, action: PayloadAction<string>) {
    state.loading = false;
    state.error = action.payload
}
