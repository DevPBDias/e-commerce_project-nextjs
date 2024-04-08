import React from 'react'
import { links } from '../data/navbarLinks'
import Link from 'next/link'

const Footer = () => {
    return (
        <footer>
            <div>
                <p>Logo</p>
                <p>Telefone</p>
                <p>email</p>
                <p>Endereço</p>
            </div>

            <div>
                <h1>Informação</h1>
                <div>
                    {links.map((item: any) => (
                        <Link key={item.id} href={item.path} >
                            {item.name}
                        </Link>
                    ))}
                </div>
            </div>
        </footer>
    )
}

export default Footer