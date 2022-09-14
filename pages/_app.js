import '../styles/globals.scss'
import {Provider} from "react-redux";
import store from "../store"
import MainLayout from "../components/mainLayout";

function MyApp({Component, pageProps}) {
    return (
        <Provider store={store}>
            <MainLayout>
                <Component {...pageProps} />
            </MainLayout>
        </Provider>
    )

}

export default MyApp
