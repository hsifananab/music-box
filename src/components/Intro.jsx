import React from 'react';

const Intro = () => {
  return (
    <div className="w-ful h-screen bg-cover m-auto bg-intro-pattern pt-[78px] sm:pt-0">
      <div className="container px-[20px] xl:px-0 m-auto ">
        <div className="flex h-screen flex-col items-center justify-center text-white text-center">
          <h1 className="sm:text-6xl text-[30px]  font-bold uppercase leading-[150%]">
            Онлайн музыка где угодно
          </h1>
          <p className="sm:text-[38px] text-[18px] font-bold uppercase leading-[150%] sm:mb-8 mb-4">
            Без ограничений
          </p>
          <p className="leading-[150%] mb-4">
            Получите доступ всего за несколько шагов. Заполните форму ниже и
            откройте мир музыки
          </p>

          <IntroForm />
        </div>
      </div>
    </div>
  );
};

export default Intro;

const IntroForm = () => {
  return (
    <form className="sm:grid flex flex-col grid-col-2 gap-6 w-full max-w-[570px]">
      <input
        className="border-2 bg-transparent border-[#CACACA] rounded-[3px] font-bold py-4 text-white placeholder:text-white text-sm pl-[22px]"
        type="text"
        placeholder="Имя"
      />
      <input
        className="border-2 bg-transparent border-[#CACACA] rounded-[3px] font-bold py-4 text-white placeholder:text-white text-sm pl-[22px]"
        type="text"
        placeholder="Email"
      />
      <div className="col-span-2">
        <button className="bg-[#34C176] w-full uppercase rounded-[5px] py-[21px] text-[13.3px]">
          Получить доступ
        </button>
      </div>
    </form>
  );
};
