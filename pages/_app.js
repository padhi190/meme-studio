import '../styles/globals.css'
import { UserContextProvider } from '../lib/usercontext'

function MyApp({ Component, pageProps }) {
  return (
    <UserContextProvider>
      <Component {...pageProps} />
    </UserContextProvider>
  )
}

export default MyApp
