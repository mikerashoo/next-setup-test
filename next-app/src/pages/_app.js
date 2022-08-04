import { Provider } from 'react-redux';
import { createStore } from 'redux';
import 'tailwindcss/tailwind.css'
import { wrapper } from '../lib/store.js';

const MyApp = ({ Component, pageProps }) => {
    const { initialState, ...restPageProps } = pageProps;

    const store = createStore(initialState);

    return (
        <Provider store={store}>
            <Component {...restPageProps} />
        </Provider>
    )
}

export default wrapper.withRedux(MyApp);
