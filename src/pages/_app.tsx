import "../styles/globals.css"
import type { AppProps } from "next/app"
import { Provider } from "react-redux"
import { store } from "../redux-toolkit-store/store"
// import Toast from "../common/Toast"

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <div className="font-inter relative">
        {/* <Toast /> */}
        <Component {...pageProps} />
      </div>
    </Provider>
  )
}
