import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-daterangepicker/daterangepicker.css";
import "../styles/globals.css";
import "../styles/period-filter.css";
import "../styles/accordion.css";
import "../styles/dropdown.css";
import { FC } from "react";

function MyApp({ Component, pageProps }: { Component: FC; pageProps: any }) {
  return <Component {...pageProps} />;
}

export default MyApp;
