import App from "next/app";
import Head from "next/head";
// app provider allows you to use polaris components throughout your application
import { AppProvider } from "@shopify/polaris";
import { Provider } from "@shopify/app-bridge-react";
import "@shopify/polaris/dist/styles.css";
// we need translations because shopigfy is global and they want their apps to be as friendly as possible
import translations from "@shopify/polaris/locales/en.json";
// the reason I am using cookie is because in the server file that's how we are going to pass our shopOrigin
import Cookies from "js-cookie";

class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props;
    const config = {
      apiKey: API_KEY,
      shopOrigin: Cookies.get("shopOrigin"),
      forceRedirect: true,
    };
    return (
      <React.Fragment>
        <Head>
          <title>Sample App</title>
          <meta charSet="utf-8" />
        </Head>
        <Provider config={config}>
          <AppProvider i18n={translations}>
            <Component {...pageProps} />
          </AppProvider>
        </Provider>
      </React.Fragment>
    );
  }
}

export default MyApp;
