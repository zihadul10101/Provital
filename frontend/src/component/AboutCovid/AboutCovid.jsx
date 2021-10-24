import React from 'react';
import { AboutData } from '../../utiltes/LocalDatabase';
import abg from '../../assets/images/about/bg-1.jpg';
const AboutCovid = () => {
  return (
    <section style={{ "backgroundImage": `url(${abg})` }} className="text-gray-600 pt-5 body-font">
      <div className="text-5xl text-center">
        <h1><span>About Corona Virus</span>
          Desease
        </h1>
      </div>
      <div className="container flex   mx-auto ">

        <div className="border-red-500  ">
          {
            AboutData.map(about => (
              <div className="p-4  lg:w-3/4 md:w-1/2">
                <div className=" flex-col md:flex-row border-4 w-50 rounded-lg border-gray-400 border-opacity-50 p-8 ">
                  <h2 className="text-gray-900 text-lg title-font font-medium mb-3">{about.heading}</h2>
                  <p className="leading-relaxed text-base">{about.dec}</p>
                  <a className="mt-3 text-indigo-500 inline-flex items-center">Learn More
                    <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                      <path d="M5 12h14M12 5l7 7-7 7"></path>
                    </svg>
                  </a>
                </div>
              </div>
            ))
          }
        </div>
        <div className="w-2/4 my-auto ">
          <img className="rounded-lg md:mt-0" src="https://demo.auburnforest.com/wordpress/pivotal/wp-content/uploads/2020/05/co.png" alt="step" />
        </div>
      </div>
    </section>


  );
};

export default AboutCovid;