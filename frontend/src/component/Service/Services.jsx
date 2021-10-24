import React from 'react';
import { Link } from 'react-router-dom';

const Services = () => {
  return (
    <section class="text-gray-600 body-font">
    <div class="container px-5 py-24 mx-auto">
     
      <div class="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4">
      
        <div class="p-4 md:w-1/3 sm:mb-0 mb-6">
          <div class="rounded-lg h-64 overflow-hidden">
            <img alt="content" class="object-cover object-center h-full w-full" src="https://dummyimage.com/1205x505"/>
          </div>
          <h2 class="text-xl font-medium title-font text-gray-900 mt-5">The 400 Blows</h2>
          <p class="text-base leading-relaxed mt-2">Swag shoivdigoitch literally meditation subway tile tumblr cold-pressed. Gastropub street art beard dreamcatcher neutra, ethical XOXO lumbersexual.</p>
          <Link to="/appointment" class=" inline-flex items-center mt-3 py-2 px-4  bg-indigo-600 hover:bg-indigo-700 focus:ring-indigo-500 focus:ring-offset-indigo-200 text-white  transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg">Appoinment
          </Link>
        </div>
      </div>
    </div>
  </section>
  );
};

export default Services;