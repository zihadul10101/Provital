import React from 'react';
import { FiMail,FiTwitter ,FiFacebook} from 'react-icons/fi';
 import {AiOutlinePhone,AiOutlineYoutube} from 'react-icons/ai';
 import {FaInstagram} from 'react-icons/fa';
const Topbar = () => {
    return (
        <section className="topbar">
            <header class="text-gray-600 bg-danger body-font border-4 border-light-blue-500 border-opacity-0">
                <div class="  mx-auto flex flex-wrap  flex-col md:flex-row items-center">
                    <div class="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
                     
                        <span class="ml-3  flex items-center text-xl"><FiMail className="mr-2" />info@yourwebsite.com</span>
                        <span class="ml-3 flex items-center text-xl"><AiOutlinePhone /> 01850649283</span>
                    </div>
                    <nav class="md:ml-auto flex flex-wrap items-center text-base justify-center">
                        <a class="mr-5 hover:text-gray-900"><FiFacebook /></a>
                        <a class="mr-5 hover:text-gray-900"><FaInstagram /></a>
                        <a class="mr-5 hover:text-gray-900"><FiTwitter /></a>
                        <a class="mr-5 hover:text-gray-900"><AiOutlineYoutube /></a>
                    </nav>
                    <button class="inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0">Button
                        <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-1" viewBox="0 0 24 24">
                            <path d="M5 12h14M12 5l7 7-7 7"></path>
                        </svg>
                    </button>
                </div>
            </header>
        </section>
    );
};

export default Topbar;