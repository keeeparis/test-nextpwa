import Script from 'next/script';
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Script src='https://cdn.onesignal.com/sdks/OneSignalSDK.js'  />
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
