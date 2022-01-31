import React, { useState } from 'react'
import { HiMenuAlt4 } from 'react-icons/hi';
import { AiOutlineClose } from 'react-icons/ai';

import logo from '../../images/logo.png'

const ListItems = ({ title, styleProps}) => {
    return (
        <li className={`mx-4 cursor-pointer ${styleProps}`}>
            {title}
        </li>
    )
}

const Navbar = () => {
    const [toggleMenu, setToggleMenu ] = useState(false)
    return (
        <nav class="w-full flex md:justify-center justify-between items-center p-4">
          <div className="md:flex-[0.5] flex-initial justify-center items-center" >
              <img src={logo} alt="logo" className="w-32 cursor-pointer" />
          </div>
          <ul className="text-white md:flex hidden list-none flex-row justify-between items-center flex-initial">
              {["Market", "Transactions", "Wallet", "Exchange", "Toturials"].map((item, index) => (
                  <ListItems key={item + index} title={item} />
              ))}
                <li className="bg-[#2952e3] py-2 px-7 cursor-pointer mx-4 rounded-full hover:bg-[#2546bd]">
                    Login
                </li>
          </ul>
          <div className="flex relative">
                {toggleMenu ? <AiOutlineClose fontSize={28} className="text-white md:hidden cursor-pointer" onClick={() => setToggleMenu(false)} /> : <HiMenuAlt4 fontSize={28} className="text-white md:hidden cursor-pointer" onClick={() => setToggleMenu(true)} /> }
                {toggleMenu && (
                    <ul className="z-10 fixed top-0 -right-2 p-3 w-[70vw] h-screen shadow-2*1 md:hidden list-none flex flex-col justify-start items-end text-white rounded-md blue-glassmorphism animate-slide-in">
                        <li className="text-xl w-full my-2">
                            <AiOutlineClose onClick={() => setToggleMenu(false) }  />
                        </li>
                        {["Market", "Transactions", "Wallet", "Exchange", "Toturials"].map((item, index) => (
                            <ListItems key={item + index} title={item} styleProps="text-lg my-2" />
                        ))}
                    </ul>
                )}
          </div>
        </nav>
    )
}

export default Navbar
