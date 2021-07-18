import React from 'react'
import styles from './Layout.module.css'

interface LayoutProps {
  children: JSX.Element
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className={styles.content}>
      {children}
    </div>
  )
}

export default Layout