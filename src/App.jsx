import React from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'

import About from './components/About'
import Contact from './components/Contact'

import Header from './components/Header'
import Footer from './components/Footer'

import '../styles/about.css'
import '../styles/fonts.css'
import '../styles/global.css'

function App() {
   return (
      <div id="font-Noto">
         {/*<Header />
         <Footer />*/}
         <Router>
            <Routes>
               <Route path="*" element={<Navigation />} />{' '}
               {/* Render Navigation on all routes */}
               <Route path="/contact" element={<Contact />} />
            </Routes>
         </Router>
      </div>
   )
}

function Navigation() {
   return (
      <div>
         <Link to="/contact">Click me</Link> {/* Render link conditionally */}
      </div>
   )
}

export default App
