import {
    PayloadAction,
} from '@reduxjs/toolkit';
import {
    startLoading,
    loadingFailed,
    IBaseApiState
} from "shared/models/base-api-state.model";

export function BaseHelperReducer<State extends IBaseApiState>(name: string, state: State, { payload }: PayloadAction<any>){
    return {
        [`get${name}Start`]: startLoading(state),
        [`get${name}StartWithCache`]: startLoading(state),
        [`get${name}Failure`]: loadingFailed(state, payload),
    }
}
