import React from 'react';
import {render} from 'react-dom';
import { Provider } from 'react-redux'
import configureStore from './store/index'

import App from './components/app';

const store = configureStore();

(window as any).store = store;

const Root = () => (
    <Provider store={store}>
        <App />
    </Provider>
);

render(<Root/>, document.getElementById('root'));

// @ts-ignore
if (module.hot) {
    // @ts-ignore
    module.hot.accept();
}