import { combineReducers } from '@reduxjs/toolkit'
const rootReducer = combineReducers({
    // todo add reducers at here
});
export type RootState = ReturnType<typeof rootReducer>;
export default rootReducer;
