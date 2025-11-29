"use client"

import styles from './style.module.css'
import { navItems } from './data.n'
import Link from 'next/link'
import ButtonLink from '@/components/ui/button'
import Container from '@/components/ui/container'
import { HiOutlineMenuAlt1 } from "react-icons/hi";
import { IoClose } from "react-icons/io5";
import { useEffect, useState } from 'react'
import Logo from '@/components/ui/logo'

const Header = () => {
    const [openDrawer, setDrawerOpen] = useState<boolean>(false)
    const [sticky, setSticky] = useState<boolean>(false)
    const handleDrawerOpen = () => {
        setDrawerOpen(prev => !prev)
    }
    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 250) {
                setSticky(true)
            } else {
                setSticky(false)
            }
        }
        window.addEventListener("scroll", handleScroll)
        return () => window.removeEventListener("scroll", handleScroll)
    }, [])

    return (
        <header className={`${styles.header} ${sticky ? styles.headerStickyBG : ""}`}>
            <Container>
                <div className="flex items-center justify-between">
                    <button
                        aria-label="hamburger"
                        className={styles.hamburger}
                        onClick={handleDrawerOpen}
                    >
                        <HiOutlineMenuAlt1 />
                    </button>
                    <Logo/>
                    <nav className={styles.desktopNav}>
                        <ul className="flex items-center gap-8">
                            {navItems.map((item, index) => (
                                <li key={`nav-items${index}`}>
                                    <Link href={item.path}>{item.name}</Link>
                                </li>
                            ))}
                        </ul>
                    </nav>
                    <div>
                        <ButtonLink goto="/" title="hire me" className='btnPrimary' />
                    </div>
                </div>
            </Container>

            {/* Mobile Drawer + Overlay */}
            {openDrawer && (
                <div className={styles.overlay} onClick={handleDrawerOpen}>
                    <div className={styles.drawer} onClick={(e) => e.stopPropagation()}>
                        <button className={styles.closeBtn} onClick={handleDrawerOpen}>
                            <IoClose />
                        </button>
                        <ul className="flex flex-col gap-6 mt-10">
                            {navItems.map((item, index) => (
                                <li key={`mob-nav-items${index}`}>
                                    <Link href={item.path} onClick={handleDrawerOpen}>
                                        {item.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            )}
        </header>
    )
}

export default Header;
