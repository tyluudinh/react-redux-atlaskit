import {Layout} from "layouts/enum/layout.enum";
import {createSlice} from "@reduxjs/toolkit";

interface GlobalState {
    layout: Layout;
    isSplash: boolean;
    drawer: boolean;
    sideBarIsCollapse: boolean,
}
const initialGlobalState: GlobalState = {
    layout: Layout.Main,
    isSplash: true,
    drawer: false,
    sideBarIsCollapse: false
};
const globalSlice = createSlice({
    name: 'global',
    initialState: initialGlobalState,
    reducers: {
        setLayout: (state, action) => state.layout = action.payload,
        setIsSplash: (state, action) => state.isSplash = action.payload,
        setDrawer: (state, action) => state.drawer = action.payload,
        setSideBarIsCollapse: (state, action) => state.sideBarIsCollapse = action.payload,
    },
});
export const {
    setLayout,
    setIsSplash,
    setDrawer,
    setSideBarIsCollapse
} = globalSlice.actions;
export default globalSlice.reducer;
