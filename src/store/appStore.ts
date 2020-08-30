import { configureStore } from '@reduxjs/toolkit';
import rootReducer from './rootReducer';
const appStore = configureStore({
    reducer: rootReducer
});
if (process.env.NODE_ENV === 'development' && (module as any).hot) {
    (module as any).hot.accept('./rootReducer', () => {
        const newRootReducer = require('./rootReducer').default;
        appStore.replaceReducer(newRootReducer)
    })
}
export type AppDispatch = typeof appStore.dispatch

export default appStore;
