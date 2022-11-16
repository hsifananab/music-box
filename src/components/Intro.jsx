import React from 'react';

const Intro = () => {
  return (
    <div className="w-ful h-screen bg-cover m-auto bg-intro-pattern">
      <div className="container m-auto ">
        <div className="flex h-screen flex-col items-center justify-center text-white">
          <h1 className="text-6xl font-bold uppercase leading-[150%]">
            Онлайн музыка где угодно
          </h1>
          <p className="text-[38px] font-bold uppercase leading-[150%] mb-8">
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
    <form className="grid grid-col-2 gap-6 w-full max-w-[570px]">
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
