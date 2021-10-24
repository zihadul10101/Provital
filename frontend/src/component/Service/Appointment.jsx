import React from 'react';

const Appointment = () => {
    return (
      
        <div class="bg-white shadow rounded-lg p-6">
            <div class="grid lg:grid-cols-2 gap-6">
              <div class="border focus-within:border-blue-500 focus-within:text-blue-500 transition-all duration-500 relative rounded p-1">
                <div class="-mt-4 absolute tracking-wider px-1 uppercase text-xs">
                  <p>
                    <label for="name" class="bg-white text-gray-600 px-1">First name *</label>
                  </p>
                </div>
                <p>
                  <input id="name" autocomplete="false" tabindex="0" type="text" class="py-1 px-1 text-gray-900 outline-none block h-full w-full"/>
                </p>
              </div>
              <div class="border focus-within:border-blue-500 focus-within:text-blue-500 transition-all duration-500 relative rounded p-1">
                <div class="-mt-4 absolute tracking-wider px-1 uppercase text-xs">
                  <p>
                    <label for="lastname" class="bg-white text-gray-600 px-1">Last name *</label>
                  </p>
                </div>
                <p>
                  <input id="lastname" autocomplete="false" tabindex="0" type="text" class="py-1 px-1 outline-none block h-full w-full"/>
                </p>
              </div>
              <div class="border focus-within:border-blue-500 focus-within:text-blue-500 transition-all duration-500 relative rounded p-1">
                <div class="-mt-4 absolute tracking-wider px-1 uppercase text-xs">
                  <p>
                    <label for="username" class="bg-white text-gray-600 px-1">Username *</label>
                  </p>
                </div>
                <p>
                  <input id="username" autocomplete="false" tabindex="0" type="text" class="py-1 px-1 outline-none block h-full w-full"/>
                </p>
              </div>
              <div class="border focus-within:border-blue-500 focus-within:text-blue-500 transition-all duration-500 relative rounded p-1">
                <div class="-mt-4 absolute tracking-wider px-1 uppercase text-xs">
                  <p>
                    <label for="password" class="bg-white text-gray-600 px-1">Password *</label>
                  </p>
                </div>
                <p>
                  <input id="password" autocomplete="false" tabindex="0" type="password" class="py-1 px-1 outline-none block h-full w-full"/>
                </p>
              </div>
            </div>
            <div class="border-t mt-6 pt-3">
              <button class="rounded text-gray-100 px-3 py-1 bg-blue-500 hover:shadow-inner hover:bg-blue-700 transition-all duration-300">
                Save
              </button>
            </div>
          </div>
    );
};

export default Appointment;