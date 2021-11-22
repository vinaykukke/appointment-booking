import type { AppProps } from "next/app";
import DateAdapter from "@mui/lab/AdapterMoment";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import "../styles/globals.scss";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <LocalizationProvider dateAdapter={DateAdapter}>
      <Component {...pageProps} />
    </LocalizationProvider>
  );
}

export default MyApp;
