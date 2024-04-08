import React from 'react'
import { links } from '../data/navbarLinks'
import Link from 'next/link'

const Navbar = () => {
    return (
        <header>
            <div>
                <p>Logo</p>
            </div>
            <div>
                {links.map((item: any) => (
                    <Link key={item.id} href={item.path} >
                        {item.name}
                    </Link>
                ))}
            </div>
            <div>
                <button type="button">Login</button>
                <button type="button">Cart</button>
            </div>
        </header>
    )
}

export default Navbar