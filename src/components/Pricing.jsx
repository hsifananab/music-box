import React from 'react';
import { subscriptions } from '../data/data';

const Pricing = () => {
  return (
    <div className="my-[100px]">
      <div className="container px-[20px] xl:px-0 m-auto">
        <div className="flex flex-col items-center">
          <h2 className="uppercase sm:text-[38px] text-[18px] leading-[150%] font-bold mb-12">
            Формы подписки
          </h2>
          <div className="flex md:flex-row flex-col gap-[50px]">
            {subscriptions.map(item => (
              <PricingItem key={item.title} item={item} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pricing;

const PricingItem = ({ item }) => {
  return (
    <div className="w-full overflow-hidden">
      <div
        className="md:max-h-[615px] max-h-[595px] rounded-2xl bg-cover flex flex-col items-center p-6 pr-[28px]"
        style={{ backgroundImage: `url(${item.image})` }}
      >
        <h3 className="sm:text-2xl text-base leading-[45px] uppercase">
          {item.title}
        </h3>
        <div className="flex items-baseline gap-4 mt-[180px]">
          <span className="text-[64px] leading-[150%]">{item.price}</span>
          <sup className="text-[32px] leading-[150%]">РУБ.</sup>
        </div>
        <button className="w-full border border-white rounded-[5px] leading-[150%] py-[21px] mt-6">
          ОФОРМИТЬ
        </button>
        <p className="mt-16 text-center text-[12.8px] leading-[150%]">
          {item.desc}
        </p>
      </div>
    </div>
  );
};
