import React from 'react'
import { navLinks } from '../constants'

const NavBar = () => {
  return (
    <header>
        <nav>
            <ul> {navLinks.map(({label})=> (
                <li key={label}>
                    <a href={`#${label.toLowerCase()}`}>{label}</a>
                </li>
            ))}</ul>

            <div className='flex-center gap-3'>
                <button>
                    <img src="/search.svg" alt="search" />
                </button>
                <button>
                    <img src="/cart.svg" alt="Cart" />
                </button>
            </div>
        </nav>
        </header>

  )
}

export default NavBar