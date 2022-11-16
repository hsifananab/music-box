import React from 'react';
import Iphone from '../assets/icons/iphone.png';

const MobileApp = () => {
  return (
    <div className="my-[100px]">
      <div className="container m-auto">
        <div className="flex flex-col items-center">
          <h2 className="uppercase text-[38px] leading-[150%] font-bold mb-12">
            Мобильное приложение
          </h2>
          <div className="w-full flex gap-[144px]">
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
            <div className="">
              <img src={Iphone} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobileApp;
