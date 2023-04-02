import React from 'react'
import Logo from '../assets/images/logo.svg'
import Search from '../assets/images/search.svg'
import Store from '../assets/images/store.svg'

const Nav = () => {
  return (
    <nav className='nav-wrapper'>
      <div className='nav-content'>
        <ul className='list-styled'>
          <li>
            <img src={Logo} alt='Apple' />
          </li>
          <li>
            <a className='link-styled' href="#Store">Store</a>
          </li>
          <li>
            <a className='link-styled' href="#Mac">Mac </a>
          </li>
          <li>
            <a className='link-styled' href="#iPad">iPad</a>
          </li>
          <li>
            <a className='link-styled' href="#iPhone">iPhone</a>
          </li>
          <li>
            <a className='link-styled' href="#Watch">Watch</a>
          </li>
          <li>
            <a className='link-styled' href="#AirPods">AirPods</a>
          </li>
          <li>
            <a className='link-styled' href="#TV&Home">TV & Home</a>
          </li>
          <li>
            <a className='link-styled' href="#Entertainment">Entertainment</a>
          </li>
          <li>
            <a className='link-styled' href="#Accessories">Accessories</a>
          </li>
          <li>
            <a className='link-styled' href="#Support">Support</a>
          </li>
          <li>
            <img src={Search} alt='Search' />
          </li>
          <li>
            <img src={Store} alt='Store' />
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Nav
