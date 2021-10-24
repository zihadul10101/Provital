import world from '../assets/images/world.png';
import covid from '../assets/images/covid.png';
// doctors img
import Doctor1 from '../assets/images/doctor/d-1.jpg';
import Doctor2 from '../assets/images/doctor/d-2.jpg';
import Doctor3 from '../assets/images/doctor/d-3.jpg';
// blog
import Blog1 from '../assets/images/blog/b-1.jpg';
import Blog2 from '../assets/images/blog/b-2.jpg';
import Blog3 from '../assets/images/blog/b-3.jpg';

// about
import About from '../assets/images/about/aboutCovid.png';
// testimonial
import { FaUserTie, FaUserNurse } from 'react-icons/fa';
// dashboard_nav
import { MdPayment } from 'react-icons/md';

import { VscDashboard,VscPerson,VscPackage, VscOrganization,VscPreview, VscReport,VscRequestChanges,VscStarFull, VscGear } from 'react-icons/vsc';



export const dashboard_nav = [
 
    {
        id:1,
        path: "/dashboard",
        pathname: "dashboard",
        icon:<VscDashboard/>,
        size:"text-2xl",
        bg:"border-r-2",
        role:["admin","user","doctor"]
    },
    {
        id:2,
        path: "/dashboard/manage-company-info",
        pathname: "Manage",
        icon:<VscGear/>,
        size:"text-2xl",
        role:["doctor"]
    },
    {
        id:3,
        path: "/dashboard/customer-list",
        pathname: "Customer-list",
        icon:<VscPerson/>,
        size:"text-2xl",
        role:["doctor"]
    },
    {
        id:4,
        path: "/dashboard/customer-order-list",
        pathname: "Manage customer order",
        size:"text-2xl",
        icon:<VscPackage/>,
        role:["doctor"]
    },
    {
        id:5,
        path: "/dashboard/account-report",
        pathname: "Report",
        size:"text-2xl",
        icon:<VscReport/>,
        role:["doctor"]
    },
    {
        id:6,
        path: "/dashboard/manage-delivery-man",
        pathname: "Manage delivery man",
        size:"text-2xl",
        icon:<VscReport/>,
        role:["doctor"]
    },
    {
        id:7,
        path: "/dashboard/add-review",
        pathname: "Add a review",
        icon:<VscRequestChanges/>,
        size:"text-2xl",
        role:["doctor"]
    }, 
    {
        id:8,
        path: "/dashboard/orderlist",
        pathname: "See your orders",
        icon:<VscPackage/>,
        size:"text-2xl",
        role:["user"]
    },
    {

        id:9,
        path: "/dashboard/payment-info",
        pathname: "Payment",
        icon:<MdPayment/>,
        size:"text-2xl",
        role:["user"]
    },
    {

        id:10,
        path: "/dashboard/add-review",
        pathname: "Add a review",
        icon:<VscStarFull/>,
        size:"text-2xl",
        role:["user"]
    } ,
    {
        id:11,
        path: "/dashboard/manage-setting",
        pathname: "Manage Setting",
        icon:<VscGear/>,
        size:"text-2xl",
        role:["user"]
    },
    {

        id:12,
        path: "/dashboard/userlist",
        pathname: "User list",
        icon:<VscPerson/>,
        size:"text-2xl",
        role:["admin"]
    },
    {
        id:13,
        path: "/dashboard/doctorlist",
        pathname: "Doctor list",
        icon:<VscOrganization/>,
        size:"text-xl",
        role:["admin"]
    },
    {
        id:14,

        path: "/dashboard/account-report",
        pathname: "Report",
        icon:<VscReport/>,
        size:"text-xl",
        role:["admin"]
    },
    {
        id:15,
        path: "/dashboard/manage-review",
        pathname: "Manage review",
        icon:<VscPreview/>,
        size:"text-xl",
        role:["admin"]
    },
    {
        id:16,

        path: "/dashboard/manage-setting",

        pathname: "Manage Setting",
        icon:<VscGear/>,
        size:"text-xl",
        role:["admin"]
    },
    {
        id:16,
        path: "/dashboard/manage-category",
        pathname: "Manage category",
        icon:<VscGear/>,
        size:"text-xl",
        role:["admin"]
    },
    {
        id:17,
        path: "/dashboard/manage-review",
        pathname: "Manage review",
        icon:<VscGear/>,
        size:"text-xl",
        role:["admin"]
    },

  ]



export const TestimonialsData =[
    {
        id:1,
        name:'zihadul',
        photo:<FaUserTie/>,
        profession: 'Web Developer',
        desc:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, odio corporis. Consectetur inventore consequatur atque voluptatem ipsa nam, architecto saepe earum dolorem quae possimus tempore alias sed.'
        
    },
    {
        id:2,
        name:'zihadul',
        photo:<FaUserNurse/>,
        profession: 'Web Developer',
        desc:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, odio corporis. Consectetur inventore consequatur atque voluptatem ipsa nam, architecto saepe earum dolorem quae possimus tempore alias sed.'
        
    },
    {
        id:3,
        name:'zihadul',
        photo:<FaUserTie/>,
        profession: 'Web Developer',
        desc:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, odio corporis. Consectetur inventore consequatur atque voluptatem ipsa nam, architecto saepe earum dolorem quae possimus tempore alias sed.'
        
    }
    
]

export const CovidFaqData = [
    {
        id:1,
        levelName:'What is COVID-19?',
        description:'Every courier company will have an account through which the company will integrate what services they provide like from where to where they deliver courier, how much they charge etc.'
    },
    {
        id:2,
        levelName:'How Corona Virus Spread?',
        description:'Every courier company will have an account through which the company will integrate what services they provide like from where to where they deliver courier, how much they charge etc.'
    },
    {
        id:3,
        levelName:'How To Prevent Corona Virus?',
        description:'Every courier company will have an account through which the company will integrate what services they provide like from where to where they deliver courier, how much they charge etc.'
    },
    {
        id:4,
        levelName:'What are the Symptoms?',
        description:'Every courier company will have an account through which the company will integrate what services they provide like from where to where they deliver courier, how much they charge etc.'
    },
    {
        id:5,
        levelName:'How to protect yourself?',
        description:'Every courier company will have an account through which the company will integrate what services they provide like from where to where they deliver courier, how much they charge etc.'
    },
    {
        id:6,
        levelName:'How prepare for the Corona Virus?',
        description:'Every courier company will have an account through which the company will integrate what services they provide like from where to where they deliver courier, how much they charge etc.'
    },
    {
        id:7,
        levelName:'How can I avoid public transfortation?',
        description:'Every courier company will have an account through which the company will integrate what services they provide like from where to where they deliver courier, how much they charge etc.'
    },
    {
        id:8,
        levelName:'How can I avoid public transfortation?',
        description:'Every courier company will have an account through which the company will integrate what services they provide like from where to where they deliver courier, how much they charge etc.'
    },

]
export const AboutData = [
    {
        id:1,
        img:About,
        heading:'From close contact with an iffected person',
        dec:'Swag shoivdigoitch literally meditation subway tile tumblr cold-pressed. Gastropub street art beard dreamcatcher neutra, ethical XOXO lumbersexual.'
    },
    {
        id:2,
        img:About,
        heading:'From close contact with an iffected person',
        dec:'Swag shoivdigoitch literally meditation subway tile tumblr cold-pressed. Gastropub street art beard dreamcatcher neutra, ethical XOXO lumbersexual.'
    },
    {
        id:3,
        img:About,
        heading:'From close contact with an iffected person',
        dec:'Swag shoivdigoitch literally meditation subway tile tumblr cold-pressed. Gastropub street art beard dreamcatcher neutra, ethical XOXO lumbersexual.'
    },
 

]

export const BlogData = [
    {
        id:1,
        img:Blog1,
        heading:'Integer portitor mass sit amt fringl',
        dec:'Swag shoivdigoitch literally meditation subway tile tumblr cold-pressed. Gastropub street art beard dreamcatcher neutra, ethical XOXO lumbersexual.'
    },
    {
        id:2,
        img:Blog2,
        heading:'Integer portitor mass sit amt fringl',
        dec:'Swag shoivdigoitch literally meditation subway tile tumblr cold-pressed. Gastropub street art beard dreamcatcher neutra, ethical XOXO lumbersexual.'
    },
    {
        id:3,
        img:Blog3,
        heading:'Integer portitor mass sit amt fringl',
        dec:'Swag shoivdigoitch literally meditation subway tile tumblr cold-pressed. Gastropub street art beard dreamcatcher neutra, ethical XOXO lumbersexual.'
    },
]
export const DoctorsData = [
    {
        id: 1,
        img:Doctor1,
        name:'Dr. Rozana Rossy',
        tittle:'MANAGER'

    },
    {
        id: 2,
        img:Doctor2,
        name:'Dr. John',
        tittle:'MANAGER'

    },
    {
        id: 3,
        img:Doctor3,
        name:'Dr. Rozana Rossy',
        tittle:'MANAGER'

    },
    {
        id: 4,
        img:Doctor1,
        name:'Dr. Hannen',
        tittle:'MANAGER'

    },

]
export const NavItem = [
    {
        id: 1,
        name: 'Home',
        path: '/'
    },
    {
        id: 2,
        name: 'About',
        path: '/about'
    },
    {
        id: 3,
        name: 'Contact',
        path: '/contact'
    },
    {
        id: 4,
        name: 'Service',
        subitem:[
            {
                id: 1,
                name: 'Home Delivery',
                path: '/'
            },
            {
                id: 2,
                name: 'Accept custom order',
                path: '/'
            },
            {
                id: 3,
                name: 'Get more',
                path: '/'
            }
        ],
        path: '/service'
    },
  
    {
        id: 5,
        name: 'Login',
        path: '/login'
    },
]
export const statickData =[
    {
        id:1,
        name:'Total Country',
        icon:world,
        total:210
    },
    {
        id:2,
        name:'Confirmed Cases',
        icon:covid,
        total:315300
    },
    {
        id:3,
        name:'Total Deaths',
        icon:covid,
        total:25530
    },
    {
        id:4,
        name:'Total Recovered',
        icon:covid,
        total:30530
    }
]