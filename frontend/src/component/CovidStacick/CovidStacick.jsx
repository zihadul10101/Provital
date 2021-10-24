import React from 'react';
import { GiWorld } from 'react-icons/gi';
import { statickData } from '../../utiltes/LocalDatabase';

const CovidStacick = () => {
  
  return (
      <section class="text-gray-600 body-font">
        <div class="container px-5 py-24 mx-auto">
          <div class="flex flex-wrap -m-4 ">
          { statickData.map(data =>(
              <div class="p-4 group   md:w-1/4 sm:w-1/2 w-full">
              <div class="border-2  flex justify-center text-indigo-500 hover:bg-yellow-500 hover:text-white  py-6 rounded-lg">  
                <img src={data.icon} className="w-12 h-12" alt="" />
                <div className="ml-5">
                <p class="leading-relaxed">{data.name}</p>
                  <h2 class=" font-medium text-3xl ">{data.total}</h2>
                </div>
              </div>
            </div>
            ))} 
          </div>
        </div>
      </section>
  );
};

export default CovidStacick;