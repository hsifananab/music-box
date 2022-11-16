import React from 'react';
import Logo from '../assets/icons/logo.png';

const Navbar = () => {
  const links = ['Главная', 'Каталог', 'Исполнители', 'Контакты'];

  return (
    <div className="absolute w-full">
      <div className="container m-auto">
        <div className=" text-white flex items-center justify-start mt-[25px]">
          <div className="logo flex gap-4 mr-[88px]">
            <img src={Logo} alt="logo-icon" />
            <p>Music Box</p>
          </div>

          <nav className="menu">
            <ul className="flex gap-6">
              {links.map(item => (
                <li className="uppercase" key={item}>
                  {item}
                </li>
              ))}
            </ul>
          </nav>

          <input
            type="text"
            name="seacrh"
            id="search"
            placeholder="поиск..."
            className="w-[248px] bg-[#3C3B3D] rounded-[50px] px-[10px] py-[5px] placeholder:uppercase placeholder:text-[#757575] text-white ml-auto"
          />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
