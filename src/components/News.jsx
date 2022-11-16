import React from 'react';
import { news } from '../data/data';

const News = () => {
  return (
    <div className="mt-[100px]">
      <div className="container m-auto">
        <div className="flex flex-col items-center">
          <h2 className="uppercase text-[38px] leading-[150%] font-bold mb-12">
            Последние новости
          </h2>
          <div className="flex flex-col gap-[65px]">
            {news.map((item, index) =>
              index % 2 === 0 ? (
                <NewsItem item={item} />
              ) : (
                <NewsItem item={item} reverse={true} />
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
  return (
    <div
      className="flex gap-[50px] "
      style={{ flexDirection: reverse ? 'row-reverse' : 'row' }}
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
