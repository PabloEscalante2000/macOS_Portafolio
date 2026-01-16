import { navIcons, navLinks } from '#constants/index'
import React from 'react'
import dayjs from 'dayjs'
import useWindowStore from '#store/window'

function Navbar() {

  const {openWindow} = useWindowStore()

  return (
    <nav>
      <div>
        <img src='/images/logo.svg' alt='logo'/>
        <p className='font-bold'>Pablo Portafolio</p>

        <ul>
          {navLinks.map(({id, name, type}) => (
            <li key={id} onClick={() => openWindow(type)}>
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