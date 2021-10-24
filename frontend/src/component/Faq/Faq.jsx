import React from 'react';
import { CovidFaqData } from '../../utiltes/LocalDatabase';
import FaqCovidDetails from './FaqCovidDetails';

const Faq = () => {
   
    return (
      <section>
      <div className="w-4/5 md:w-4/5 mx-auto p-8">
         <div class="">
            <h2 className="font-bold font-heading font-poppins md:font-poppins text-2xl md:text-4xl text-black">Freequently Asked & Questions</h2>
           
         </div>
         <div className="my-5">
            {
               CovidFaqData.map(item => <FaqCovidDetails key={item.id} items={item} />)
            }
         </div>
      </div>
   </section>
    );
};

export default Faq;