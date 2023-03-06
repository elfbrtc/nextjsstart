import React from 'react'

const Layout = ({children}) => {
  return (
    <htm lang='en'>
      <header>header</header>
        <body>{children}</body>
        <footer>footer</footer>
    </htm>
  )
}

export default Layout