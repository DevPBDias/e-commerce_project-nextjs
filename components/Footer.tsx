import React from 'react'
import { links } from '../data/navbarLinks'
import Link from 'next/link'
import '../css/footer.css'

const Footer = () => {
    return (
        <footer>
            <div className='footer_midia'>
                <p className='logo_footer'>Logo</p>
                <p>Telefone</p>
                <p>email</p>
                <p>Endereço</p>
            </div>
            <div className='footer_info'>
                <h1>Informação</h1>
                <div className='footer_links_box'>
                    {links.map((item: any) => (
                        <Link className='links_bottom' key={item.id} href={item.path} >
                            {item.name}
                        </Link>
                    ))}
                </div>
            </div>
        </footer>
    )
}

export default Footer