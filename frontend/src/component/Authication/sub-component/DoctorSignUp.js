import React from 'react';
import { Link } from 'react-router-dom';
const DoctorSignUp = () => {
    return (
        <div className="w-1/2">

            <div class="flex flex-col max-w-lg px-4 py-8 bg-white rounded-lg shadow dark:bg-gray-800 sm:px-6 md:px-8 lg:px-10 mx-auto">                <div class="px-4 py-8 sm:px-10">

                <div class="self-center mb-2 text-xl font-light text-gray-800 sm:text-2xl dark:text-white">
                    Company Signup
                </div>
                <div class="relative flex justify-center text-sm leading-5">
                    <span class="justify-center text-sm text-center text-gray-500 flex-items-center dark:text-gray-400">
                        Already have an account ?
                        <Link to="login" class="text-sm text-blue-500 underline hover:text-blue-700">
                            Log in
                        </Link>
                    </span>
                </div>

                <div class="mt-6">
                    <div class="w-full space-y-6">
                        <div class="w-full">
                            <div class=" relative ">
                                <input type="text" id="search-form-price" class=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent" placeholder="Your Name" />
                            </div>
                        </div>
                        <div class="w-full">
                            <div class=" relative ">
                                <input type="text" id="search-form-location" class=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent" placeholder="Your Email" />
                            </div>
                        </div>
                        <div class="w-full">
                            <div class=" relative ">
                                <input type="text" id="search-form-name" class=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent" placeholder="Your Password" />
                            </div>
                        </div>
                        <div>
                            <span class="block w-full rounded-md shadow-sm">
                                <button type="button" class="py-2 px-4  bg-indigo-600 hover:bg-indigo-700 focus:ring-indigo-500 focus:ring-offset-indigo-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg ">
                                    Next Step
                                </button>
                            </span>
                        </div>
                    </div>
                </div>
            </div>
                <div class="px-4 py-6 border-t-2 border-gray-200 bg-gray-50 sm:px-10">
                    <p class="text-xs leading-5 text-gray-500">
                        This data are display for information and can change
                    </p>
                </div>
            </div>

        </div>
    );
};

export default DoctorSignUp;