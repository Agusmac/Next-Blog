import React from 'react'
import Link from 'next/link'
import Logo from './logo'
import s from './navbar.module.css'

const Navbar = () => {
    return (
        <header className={s.header}>
            <Link href='/'><a><Logo /></a></Link>
            <nav>
                <ul>
                    <li><Link href='/posts'>Posts</Link></li>
                    <li><Link href='/contact'>Contact</Link></li>

                </ul>
            </nav>
        </header>
    )
}

export default Navbar