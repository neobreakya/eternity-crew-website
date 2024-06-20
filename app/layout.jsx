
import "./globals.css";

import React from 'react'
import Navbar from "@/navbar";
import Link from "next/link";

const layout = ({children}) => {
  return (
    <html lang="en">
      <body>
        <Navbar />
      <div>{children}</div> 
      </body>
    
    </html>
  )
}

export default layout