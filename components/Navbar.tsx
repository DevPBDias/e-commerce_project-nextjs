import React from 'react'
import { links } from '../data/navbarLinks'
import Link from 'next/link'
import '../css/navbar.css'

const Navbar = () => {
    return (
        <header>
            <section>
                <div className='logo_container'>
                    <p>Logo</p>
                </div>
                <div className='links_container'>
                    {links.map((item: any) => (
                        <Link key={item.id} href={item.path} >
                            {item.name}
                        </Link>
                    ))}
                </div>
                <div className='btn_container'>
                    <button type="button">Login</button>
                    <button type="button">Cart</button>
                </div>
            </section>
        </header>
    )
}

export default Navbar