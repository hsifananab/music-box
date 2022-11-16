import React from 'react';
import Iphone from '../assets/icons/iphone.png';

const MobileApp = () => {
  return (
    <div className="my-[100px]">
      <div className="container px-[20px] xl:px-0 m-auto">
        <div className="flex flex-col items-center">
          <h2 className="uppercase sm:text-[38px] text-[18px] leading-[150%] font-bold mb-12">
            Мобильное приложение
          </h2>
          <div className="w-full flex flex-col-reverse md:flex-row md:gap-[144px]  gap-4">
            <div className="pt-4 max-w-[600px]">
              <p className="text-[#CACACA] mb-4">
                Воспользуйтесь нашим мобильным приложением. Оно позволит слушать
                музыку с любого устройства на базе операционных систем Androind
                и iOS
                <br />
                <br />С тарифом «Премиум» приложение позволяет скачивать все
                композиции из нашей коллекции. Вы можете слушать музыку даже без
                интернета.
              </p>
              <button className="rounded-[32px] bg-[#95390C] px-[40px] py-[17px]">
                Скачать
              </button>
            </div>
            <div className="flex items-center justify-center">
              <img src={Iphone} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobileApp;
