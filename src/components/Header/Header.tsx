'use client'
import { useState } from 'react'
import { Menu } from '../Menu'
import styles from './Header.module.scss'

export const Header = () => {
    const [showMenu, setShowMenu] = useState<boolean>(false)

    return (
        <>
            <header className={styles.Header}>
                <button onClick={() => {setShowMenu(true)}} className={styles.menuButton}>☰ open menu</button>
                <h1 className={styles.titleFull}>Fantasy Food Factory</h1>
                <h1 className={styles.titleCondensed}>FFFF</h1>
            </header>
            <Menu setShowMenu={setShowMenu} showMenu={showMenu}/>
        </>
    )
}