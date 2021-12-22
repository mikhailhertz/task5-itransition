import React from 'react';
import Logout from './Logout.jsx';

function Header() {
  return (
    <header className='header py-2 bg-dark'>
      <div className='container'>
        <div className='d-inline text-white fs-3'>task5-itransition</div>
        <div className='d-inline float-end'>
          <Logout/>
        </div>
      </div>
    </header>
  );
}

export default Header;
