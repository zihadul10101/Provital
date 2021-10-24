import React from 'react';
import { Link } from 'react-router-dom';
import { NavItem } from '../../../../utiltes/LocalDatabase';

const Navbar = () => {
  
  return (
    <section>
      <header class="text-gray-600 body-font">
        <div class="ml-20 mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
          <a class="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
            <img style={{width:'200px'}} src="https://demo.auburnforest.com/wordpress/pivotal/wp-content/uploads/2020/02/logo_dark.png" alt="" />
          </a>
          <nav class="ml-auto md:py-1 md:pl-4 flex flex-wrap items-center text-base justify-center">
           {NavItem.map(a => 
             (
         
              <Link class="mr-10 hover:text-gray-900 text-2xl" to={a.path}>{a.name}</Link>
             )
           )
           }
          </nav>
        </div>
      </header>

    </section>
  );
};

export default Navbar;