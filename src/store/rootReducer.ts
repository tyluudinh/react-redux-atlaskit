import { combineReducers } from '@reduxjs/toolkit';
import authReducer from 'features/auth/auth.slice'
import globalReducer from 'app/global.slice';
const rootReducer = combineReducers({
    auth: authReducer,
    global: globalReducer
});
export type RootState = ReturnType<typeof rootReducer>;
export default rootReducer;
