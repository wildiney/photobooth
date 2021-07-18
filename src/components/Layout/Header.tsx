import React from 'react'
import styles from './Header.module.css'

interface Props {
  title: string;
}

const Header: React.FC = ({ title }: Props) => {
  return (
    <header className={styles.header}>
      <h1>{title}</h1>
    </header>
  )
}

export default Header