import React from 'react'
import Footer from './Footer'
import Nav from './Nav'
import useWindowSize from "../utils/useWindowSize";
export default function Layout({ children }) {
  const size = useWindowSize();
  return (
    <div className="flex flex-col  min-h-screen">
      <Nav size={size} />

      <main>
        {children}
      </main>
      
      <Footer />
    </div>
  )
}
