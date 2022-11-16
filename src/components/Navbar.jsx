import React from 'react';
import Logo from '../assets/icons/logo.png';

const Navbar = () => {
  const links = ['Главная', 'Каталог', 'Исполнители', 'Контакты'];

  return (
    <div className="absolute w-full">
      <div className="container px-[20px] xl:px-0 m-auto">
        <div className="text-white flex flex-col sm:flex-row sm:items-center justify-start mt-[25px] gap-[18px]">
          <div className="logo flex gap-4 mr-[88px] items-center">
            <img className="w-4 sm:w-6" src={Logo} alt="logo-icon" />
            <p className="text-[11px] sm:text-[13px] uppercase">Music Box</p>
          </div>

          <nav className="menu">
            <ul className="flex flex-col sm:flex-row sm:gap-6">
              {links.map(item => (
                <li className="uppercase text-[11px]" key={item}>
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
            className="sm:max-w-[248px] w-full bg-[#3C3B3D] rounded-[50px] px-[10px] py-[5px] placeholder:uppercase placeholder:text-[#757575] text-white text-[13.3px] sm:ml-auto"
          />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
