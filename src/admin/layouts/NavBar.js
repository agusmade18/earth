import React, {useEffect, useState} from 'react'
import './App.css';
import { BsArrowLeftShort, 
          BsSearch, 
          BsChevronDown,
          BsFillImageFill,
          BsReverseLayoutTextSidebarReverse,
          BsPerson } from 'react-icons/bs'
import { AiFillEnvironment,
          AiOutlineBarChart,
          AiOutlineFileText,
          AiOutlineMail,
          AiOutlineSetting,
          AiOutlineLogout } from 'react-icons/ai'
import { RiDashboardFill } from 'react-icons/ri'
import { MdQuestionAnswer } from 'react-icons/md'
import { FaHouseDamage } from 'react-icons/fa'
//import BASE URL API
import Api from '../../api';
//import js cookie
import Cookies from "js-cookie";
//hook link
import { useNavigate, Link, useLocation } from 'react-router-dom';
//import toats
import toast from "react-hot-toast";

function NavBarAdmin({children}) {
  const [open, setOpen] = useState(true)
  const [subMenuOpen, setSubMenuOpen] = useState(false)
  const [active, setActive] = useState("");

  //assigning location variable
  const location = useLocation();

  //destructuring pathname from location
  const { pathname } = location;
  // const splitLocation = pathname.split("/");

  useEffect(() => {
    // console.log(pathname)
  }, [])

  const Menus = [
    { title: "Home", icon: <RiDashboardFill/>, link:'/admin/dashboard' },
    { title: "Carousel", icon: <BsFillImageFill/>, link:'/admin/carousel' },
    { title: "Construction", icon: <FaHouseDamage/>, link:'/admin/construction' },
    { title: "QA", icon: <MdQuestionAnswer/>, link:'/admin/qa' },
    
    // { title: "Projects", subMenu: true, icon: <BsReverseLayoutTextSidebarReverse/>, link:'',
    //   subMenuItems: [
    //     {title: "Sub Menu 1", link:''},
    //     {title: "Sub Menu 2", link:''},
    //     {title: "Sub Menu 3", link:''},
    //   ] 
    // },
    // { title: "Analytic", icon: <AiOutlineBarChart/>, link:'' },
    // { title: "Inbox", icon: <AiOutlineMail/>, link:'' },
    // { title: "Profile", spacing: true, icon: <BsPerson/>, link:'' },
    // { title: "Setting", icon: <AiOutlineSetting/>, link:'' },
  ]


  // history/navigate 
  const navigate = useNavigate();

  // token
  const token = Cookies.get("token");

  // function logout
  const logoutHandler = async (e) => {
      e.preventDefault();

      await Api.post('/api/admin/logout', null, {
          headers: {
              // header bearer + token
              Authorization: `Bearer ${token}`,
          }
      }).then(() => {
          // remove token
          Cookies.remove("token");

          // show toast
          toast.success("Logout Berhasil", {
              duration: 4000,
              position: "top-right",
              style: {
                  borderRadius: '10px',
                  background: '#333',
                  color: '#fff',
              },
          });

          // Redirect login page
          navigate('/admin/login');
      });
    }

  return (
    <React.Fragment>
      <div className='flex'>
        <div className='bg-dark-purple h-screen'>
        <div className={`p-5 pt-8 ${open ? 'w-72' : 'w-20'} duration-300 relative`}>
          <BsArrowLeftShort className={`bg-white text-dark-purple text-3xl rounded-full absolute -right-3 top-9 border border-dark-purple cursor-pointer ${!open && 'rotate-180'}`} onClick={() => setOpen(!open)} />
          <div className='inline-flex'>
            <AiFillEnvironment className={`bg-amber-300 text-4xl rounded cursor-pointer block float-left mr-2 duration-500 ${open && 'rotate-[360deg]'}`}/>
            <h1 className={`text-white origin-left font-medium text-2xl duration-300 ${!open && 'scale-0'}`}>Earth</h1>
          </div>

          {/* <div className={`flex items-center rounded-md bg-light-white mt-6 px-4 py-2 ${!open ? 'px-4' : 'px-2.5'}`}>
            <BsSearch className={`text-white text-lg block float-left cursor-pointer ${open && 'mr-2'}`}/>

            <input type={"search"} placeholder="Search" className={`text-base bg-transparent w-full text-white focus:outline-none ml-2 ${!open && 'hidden'}`} />
          </div> */}
        
        <ul className='pt-2'>
          {
            Menus.map((menu, index) => (
              <>
                <Link to={menu.link} key={index}>
                  <li className ={`${pathname === menu.link ? "bg-light-white" : ""} text-gray-300 text-sm flex items-center gap-x-4 cursor-pointer p-2 hover:bg-light-white rounded-md ${menu.spacing ? 'mt-9' : 'mt-2'}`}>
                    <span className='text-2xl block float-left'>{ menu.icon }</span>
                    <span className={`text-base font-medium flex-1 duration-200 ${!open && 'hidden'}`}>{ menu.title }</span>
                    {menu.subMenu && open && (
                      <BsChevronDown className={`duration-300 ${subMenuOpen && 'rotate-180'}`} onClick={() => setSubMenuOpen(!subMenuOpen)}/>
                    )}
                  </li>
                </Link>
                {
                  menu.subMenu && subMenuOpen && open && (
                    <ul>
                      {
                        menu.subMenuItems.map((subMenuItem, index) => (
                          <li key={index} className='text-gray-300 text-sm flex items-center gap-x-4 cursor-pointer p-2 px-5 hover:bg-light-white rounded-md'>{ subMenuItem.title }</li>
                        ))
                      }
                    </ul>
                  )
                }
              </>
            ))
          }
          <li className ={`text-gray-300 text-sm flex items-center gap-x-4 cursor-pointer p-2 hover:bg-light-white rounded-md mt-2`}>
            <button className='w-screen text-left' onClick={logoutHandler}>
              <span className='text-2xl block float-left'><AiOutlineLogout/></span>
              <span className={`text-base ml-4 font-medium flex-1 duration-200 ${!open && 'hidden'}`}>Logout</span>
            </button>
          </li>
          <li></li>
        </ul>
        </div>
      </div>
      <div className='p-7 w-screen h-screen overflow-y-auto'>
        {children}
      </div>
    </div>
    </React.Fragment>
  );
}

export default NavBarAdmin;