import React from 'react'
import FooterComponent from './footer/FooterComponent'
import HeaderComponent from './header/HeaderComponent'

function Layout({children}) {
  return (
    <div>
        <HeaderComponent/>
         <div>
             {children}
         </div>
         <FooterComponent/>
    </div>
  )
}

export default Layout