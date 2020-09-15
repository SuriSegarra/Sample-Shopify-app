import App from "next/app";
import Head from "next/head";
// app provider allows you to use polaris components throughout your application
import { AppProvider } from "@shopify/polaris";
import "@shopify/polaris/dist/styles.css";
// we need translations because shopigfy is global and they want their apps to be as friendly as possible
import translations from "@shopify/polaris/locales/en.json";

class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props;
    return (
      <React.Fragment>
        <Head>
          <title>Sample App</title>
          <meta charSet="utf-8" />
        </Head>
        <AppProvider i18n={translations}>
          <Component {...pageProps} />
        </AppProvider>
      </React.Fragment>
    );
  }
}

export default MyApp;
