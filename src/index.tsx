import React from 'react';
import ReactDOM from 'react-dom';
import './app/index.css';
import { Provider } from 'react-redux'
import * as serviceWorker from './serviceWorker';
import appStore from "./store/appStore";

const render = () => {
    const App = require('./app/AppRouter').default;
    ReactDOM.render(
        <Provider store={appStore}>
            <App/>
        </Provider>,
        document.getElementById('root')
    );
};
render();
if (process.env.NODE_ENV === 'development' && (module as any).hot) {
    (module as any).hot.accept('./app/AppRouter', render)
}
serviceWorker.unregister();
