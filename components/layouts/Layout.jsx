import React from 'react'

const Layout = ({children}) => {
  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', flexDirection: 'column', width: '100vw' }}>
        {children}
    </div>
  )
}

export default Layout