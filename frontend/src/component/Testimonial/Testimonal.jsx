import React from 'react';
import { TestimonialsData } from '../../utiltes/LocalDatabase';

const Testimonal = () => {


    return (
        <section class="text-gray-600 body-font">
            <div class="container px-5 py-24 mx-auto">
                <div class="flex flex-wrap -m-4">
                 {
                   TestimonialsData.map(data =>(
                    <div class="lg:w-1/3 lg:mb-0 mb-6 p-4">
                    <div class="h-full text-center">
                        <img alt="testimonial" class="w-20 h-20 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100" src={data.photo} />
                        <p class="leading-relaxed">{data.desc}</p>
                        <span class="inline-block h-1 w-10 rounded bg-indigo-500 mt-6 mb-4"></span>
                        <h2 class="text-gray-900 font-medium title-font tracking-wider text-sm">{data.profession}</h2>
                        <p class="text-gray-500">{data.name}</p>
                    </div>
                </div>
                   ))  
                 }
                </div>
            </div>
        </section>

    );
};

export default Testimonal;