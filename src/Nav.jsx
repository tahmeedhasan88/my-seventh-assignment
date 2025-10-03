import React from 'react';

const Nav = () => {
    return (


        <div className=''>

        <div className="navbar bg-white shadow-sm text-black">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content  rounded-box z-1 mt-3 w-52 p-2 shadow bg-black text-white">
        <li><a>Home</a></li>
        <li><a>FAQ</a></li>
        <li><a>Changelog</a></li>
        <li><a>Blog</a></li>
        <li><a>Download</a></li>
        <li><a>Contact</a></li>
      </ul>
    </div>
    <img className='h-[30px] w-[90px] ml-[-10px] lg:ml-[10px] lg:h-[50px] lg:w-[100px]' src='/ticlogo.png'></img>
    <a className="btn btn-ghost text-[13px] font-extrabold ml-[-15px] lg:text-[20px text-black">CS-Ticket System</a>
  </div>
  <div className="navbar-center hidden lg:flex text-black bg-white">
    <ul className="menu menu-horizontal px-1 ">
      <li><a>Home</a></li>
      <li>
        <a>FAQ</a>
      </li>
      <li><a>Changelog</a></li>
      <li><a>Blog</a></li>
      <li><a>Download</a></li>
      <li><a>Contact</a></li>
    </ul>
  </div>
  <div className="navbar-end">
    <a className="btn bg-gradient-to-r from-[#632EE3] to-[#9F62F2] text-white text-[10px] px-[5px] lg:text-[14px] lg:px-[15px] rounded-[5px]">+ New Ticket</a>
  </div>
</div>
        </div>
    );
};

export default Nav;