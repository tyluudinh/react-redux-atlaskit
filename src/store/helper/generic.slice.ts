import {
    AsyncThunk,
    createSlice,
    SliceCaseReducers,
    ValidateSliceCaseReducers
} from "@reduxjs/toolkit";
export interface GenericState<T>{
    data?: T
    loading: boolean,
    error: string,
}
export function initialGenericState<T>(data: T): GenericState<T> {
    return {
        loading: false,
        error: '',
        data,
    };
}
export const createGenericSlice = <
    T,
    Reducers extends SliceCaseReducers<GenericState<T>>
    >({
          name = '',
          initialState,
          reducers,
          asyncThunk
      }: {
    name: string
    initialState: GenericState<T>
    reducers: ValidateSliceCaseReducers<GenericState<T>, Reducers>,
    asyncThunk: AsyncThunk<T, {}, {}>
}) => {
    //Returned, ThunkArg = void, ThunkApiConfig extends AsyncThunkConfig = {}
    return createSlice({
        name,
        initialState,
        reducers,
        extraReducers: builder =>
            builder
                .addCase(asyncThunk.pending, (state, action) => {
                    state.loading = true;
                    state.error = '';
                })
                .addCase(asyncThunk.fulfilled, (state, action) => {
                    state.loading = false;
                    state.data = action.payload as any;
                })
                .addCase(asyncThunk.rejected, (state, {error}) => {
                    state.loading = false;
                    state.error = error.message as string;
                })
    })
};
