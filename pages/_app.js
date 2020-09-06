import { SWRConfig } from 'swr'
import fetch from '../lib/fetchJson'
import '../static/css/article-editor.css';
// import '../static/css/article-editor.min.css';
// import '../static/css/arx-content.css';
// import '../static/css/arx-frame.css';
// import '../static/css/arx-frame.min.css';
// import '../static/css/arx-content.min.css';


function MyApp({ Component, pageProps }) {
  return (
    <SWRConfig
      value={{
        fetcher: fetch,
        onError: (err) => {
          console.error(err)
        },
      }}
    >
      <Component {...pageProps} />
    </SWRConfig>
  )
}

export default MyApp
