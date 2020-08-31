import {PayloadAction} from "@reduxjs/toolkit";

export interface IBaseApiState<T = any> {
    loading: boolean,
    success: boolean;
    error: string | null;
    data: T
}
export function initialBaseApiState<T>(data: T): IBaseApiState<T> {
   return {
       loading: false,
       success: false,
       error: null,
       data,
   };
}
export function startLoading<T extends IBaseApiState>(state: T) {
    state.loading = true;
    state.error = null;
}
export function startLoadingWithCache<T extends IBaseApiState>(state: T) {
    state.loading = true;
    state.error = null;
}

export function loadingFailed<T extends IBaseApiState>(state: T, action: PayloadAction<string>) {
    state.loading = false;
    state.error = action.payload
}
