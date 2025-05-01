import Link from 'next/link';
import styles from './Menu.module.scss'
import { clsx } from 'clsx';

interface MenuProps {
    showMenu: Boolean;
    setShowMenu: (newValue: boolean) => void;
}

export const Menu = ({ showMenu, setShowMenu }: MenuProps) => {
    const navItems = [
        {
            target: '/',
            text: 'Home'
        },
        {
            target: '/recipes',
            text: 'Recipes'
        },
        {
            target: '/',
            text: '3'
        },
        {
            target: '/recipes',
            text: '4'
        },
        {
            target: '/',
            text: '5'
        },
        {
            target: '/recipes',
            text: '6'
        },
        {
            target: '/',
            text: '7'
        },
        {
            target: '/recipes',
            text: '8'
        },
    ]

    const hideMenu = () => {
        setShowMenu(false)
    }

    return (
        <div className={clsx(styles.Menu, showMenu && styles.showMenu)}>
            <div className={styles.header}>
                <h1 className={styles.title}>Fantasy Food Factory</h1>
                <div>
                    <img onClick={hideMenu} src="/icons/times-light.svg" className={styles.mobileCloseButton} />
                    <h2 onClick={hideMenu} className={styles.desktopCloseButton}>Close menu</h2>
                </div>
            </div>
            <menu className={styles.menuItems}>
                {navItems.map(({ target, text }) => (
                    <Link key={text} onClick={hideMenu} href={target} className={styles.navItem}>
                        <li>{text}</li>
                    </Link>
                ))}
            </menu>
        </div>
    )
}