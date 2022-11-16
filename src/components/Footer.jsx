import React from 'react';
import { footerlinks } from '../data/data';

const Footer = () => {
  const footerMenu = [
    'Магазин',
    'Обслуживание',
    'Блог',
    'Поддержка',
    'Контакты',
  ];

  return (
    <footer className="bg-footer-pattern">
      <div className="container px-[20px] xl:px-0 pt-[61px] pb-[48px] m-auto ">
        <div className="flex flex-col md:flex-row gap-16 pb-[74px]">
          {footerlinks.map(item => (
            <div className="w-[246px]" key={item.title}>
              <h5 className="uppercase text-[18px] font-bold leading-[150%] mb-4">
                {item.title}
              </h5>
              <div
                className="flex"
                style={{
                  flexDirection:
                    item.title === 'Подписывайтесь' ? 'row' : 'column',
                  gap: item.title === 'Подписывайтесь' ? '24px' : 'null',
                }}
              >
                {item.links.map(itemLink => (
                  <a
                    key={itemLink.label + Math.random()}
                    className="text-[#E0E0E0]"
                    href={itemLink.link}
                  >
                    {itemLink.label}
                  </a>
                ))}
              </div>
            </div>
          ))}
        </div>
        <hr className="w-full bg-white" />

        <ul className="flex flex-col sm:flex-row gap-[15px] mt-[40px]">
          {footerMenu.map(item => (
            <li key={item}>
              <a href="#">{item}</a>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
