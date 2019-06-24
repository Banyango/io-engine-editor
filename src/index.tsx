import React from 'react';
import {render} from 'react-dom';
import { Provider } from 'react-redux'
import configureStore from './store'

import App from './components/App';

// css
import 'bootstrap/dist/css/bootstrap.min.css'
import './css/style.css'

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