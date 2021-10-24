import React from 'react';
import BannerBg from '../../assets/images/Symptoms/bg1.jpg';
const Banner = () => {
  return (
    <div>
      <section  style={{ "backgroundImage":`url(${BannerBg})`}} className="text-gray-600 body-font">
        <div className="container mx-auto flex pl-20 py-24 md:flex-row flex-col items-center">
          <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            <h1 className=" text-4xl lg:text-8xl mb-4 font-medium text-gray-900"><span >COVID-19 LIVE</span><br /> <span>UPDATE</span></h1>
            <br />
            <p className="mb-8 leading-relaxed"><span classNameName="text-2xl"> Man braid swag typewriter affogato,</span> <br /> hella selvage wolf narwhal dreamcatcher hella selvage wolf narwhal dreamcatcher.</p>
            <div className="flex  w-full md:justify-start justify-center items-end">
              <button type="button" className=" inline-flex  text-white bg-indigo-500 border-0 py-2 px-6  focus:outline-none hover:bg-indigo-600 rounded text-lg">
              Appointment
              </button>
            </div>
          </div>
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6  transform hover:-translate-y-1 hover:scale-110 ">
            <img className="object-cover  object-center rounded" alt="hero" src="https://demo.auburnforest.com/wordpress/pivotal/wp-content/uploads/revslider/home4/slide.png" />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Banner;