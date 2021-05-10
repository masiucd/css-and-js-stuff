import {AppProps} from 'next/dist/next-server/lib/router/router'
import {FC} from 'react'

const App: FC<AppProps> = ({Component, pageProps}) => {
  return <Component {...pageProps} />
}

export default App
