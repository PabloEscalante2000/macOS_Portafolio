import { navIcons, navLinks } from '#constants/index'
import React from 'react'
import dayjs from 'dayjs'

function Navbar() {
  return (
    <nav>
      <div>
        <img src='/images/logo.svg' alt='logo'/>
        <p className='font-bold'>Pablo Portafolio</p>

        <ul>
          {navLinks.map(({id, name}) => (
            <li key={id}>
              <p>{name}</p>
            </li>
          ))}
        </ul>
        <time>{dayjs().format('ddd MMM D h:mm A')}</time>
      </div>
      <div>
        {navIcons.map(({id, img}) => (
          <img key={id} src={img} alt={`icon-${id}`}/>
        ))}
      </div>
    </nav>
  )
}

export default Navbar