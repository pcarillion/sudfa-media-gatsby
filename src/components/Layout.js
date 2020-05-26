import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import './layout.css'

// import '../sass/layout.scss'

const Layout = ({children}) => {
    return (
        <main>
            <Navbar></Navbar>
                {children}
            <Footer></Footer>
        </main>
    )
}

export default Layout