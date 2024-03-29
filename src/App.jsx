import About from './components/About'
import Contact from './components/Contact'

import Header from './components/Header'
import Footer from './components/Footer'

import '../styles/about.css'
import '../styles/fonts.css'
import '../styles/global.css'
import { Link } from 'react-router-dom'

function App() {
   return (
      <div id="font-Noto">
         {/*<Header />
         <Footer />*/}

         <Link href="/about"> blogpost</Link>
      </div>
   )
}

export default App
