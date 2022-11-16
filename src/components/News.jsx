import React from 'react';
import { news } from '../data/data';

const News = () => {
  return (
    <div className="my-[100px]">
      <div className="container px-[20px] xl:px-0 m-auto">
        <div className="flex flex-col items-center">
          <h2 className="uppercase sm:text-[38px] text-[18px] leading-[150%] font-bold mb-12">
            Последние новости
          </h2>
          <div className="flex flex-col gap-[65px]">
            {news.map((item, index) =>
              index % 2 === 0 ? (
                <NewsItem item={item} key={item.title} />
              ) : (
                <NewsItem item={item} reverse={true} key={item.title} />
              )
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default News;

const NewsItem = ({ item, reverse }) => {
  const newsItemClass = 'flex gap-[50px] flex-col lg:flex-row';
  const reverseClass = 'lg:flex-row-reverse';

  return (
    <div
      className={reverse ? newsItemClass + ' ' + reverseClass : newsItemClass}
    >
      <img src={item.image} className="flex-1" alt="" />
      <div className="flex-1">
        <h3 className="text-[30px] leading-[150%] capitalize mb-[30px]">
          {item.title}
        </h3>
        <p className="text-[#CACACA] leading-[150%] mb-6">{item.desc}</p>
        <div className="flex gap-4 mb-12">
          <img src={item.author.userpic} alt="" />
          <p className="text-[#F89202]">{item.author.name}</p>
          <p className="text-[#CACACA]">
            {new Date(item.author.date).toLocaleDateString()}
          </p>
        </div>
        <button className="border border-[#CACACA] rounded-[5px] px-[30px] py-[17px]">
          К АЛЬБОМУ
        </button>
      </div>
    </div>
  );
};
