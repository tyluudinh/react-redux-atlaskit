import {VSSCHttpClient} from "core/http";
import {
    createGenericSlice,
    GenericState,
    initialGenericState
} from "store/helper";
import {AsyncThunk, createAsyncThunk} from "@reduxjs/toolkit";
import {IProfile} from "shared/models/profile.model";
interface ProfileState extends GenericState<IProfile> {}
const initialProfileState: ProfileState = {
    ...initialGenericState({} as IProfile, {}),
};
export const ProfileDispatch = createAsyncThunk(
    'getProfile',
    async () => {
        const authResponse = await VSSCHttpClient.auth.getProfile();
        return authResponse.data;
    }
) as AsyncThunk<IProfile, {}, {}>;
export const profileSlice = createGenericSlice({
    name: 'profileSlice',
    initialState: initialProfileState,
    reducers: {},
    asyncThunk: ProfileDispatch
});

export default profileSlice.reducer;
