import { AppContextProvider } from "../context/AppContext";
import "../styles/globals.css";

function MyApp({ Component, pageProps }: any) {
  return (
    <AppContextProvider>
      <Component {...pageProps} />
    </AppContextProvider>
  );
}

export default MyApp;
