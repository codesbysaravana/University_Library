import React from 'react'
import { ReactNode } from 'react'

import Header from '../../components/Header.tsx'

const layout = ({ children } : { children: ReactNode}) => {
  return (
    //the root layout for the university library app
    //this is the main container for the app
    <main className="root-container">
      {/* main class name root containder to solidify that this is the main root containder */}
        <div className='mx-auto max-w-7xl'>
            <Header />

            <div className='mt-20 pb-20'>
                {children}
            </div>

        </div>
    </main>
  )
}

//{ children } ----> are everything thats passed to the layout component...thats this is the entire content of the app next app!!!!!!!!

export default layout