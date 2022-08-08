
import 'tailwindcss/tailwind.css'
import { wrapper } from '../lib/store.js';

const App = ({ Component, pageProps }) => {
    return <Component {...pageProps} />;
};

export default wrapper.withRedux(App);