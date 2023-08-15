import React from 'react';
import './Header.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartPlus, faCartShopping, faSearch, faUser} from '@fortawesome/free-solid-svg-icons'

const Header = () => {
    return (
    <nav className='header'>
      <h3>Women's Fashion Shop</h3>
      <div className='header-info'>
        <a href="/home">Home</a>
        <a href="/shop">Shop</a>
        <a href="/blog">Blog</a>
        <a href="/best sellers">Best Sellers</a>
        <a href="/sale products">Sale Products</a>
        <a href="/contact us">Contact Us</a>
      </div>
      <div className='header-icon'>
        <span><FontAwesomeIcon icon={faSearch} className="icon-lg" /></span>
        <span><FontAwesomeIcon icon={faUser} className="icon-lg" /></span>
        <span><FontAwesomeIcon icon={faCartShopping} className="icon-lg" /></span>
    
      </div>
    </nav>
    );
};

export default Header;