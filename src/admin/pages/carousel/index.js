import React, { useState, useEffect } from 'react'
import NavBar from '../../layouts/NavBar'
//import BASE URL API
import Api from "../../../api";
//import js cookie
import Cookies from "js-cookie";
import { Link, useNavigate } from "react-router-dom";

// import toats
import toast from "react-hot-toast";

//import react-confirm-alert
import { confirmAlert } from 'react-confirm-alert';
//import CSS react-confirm-alert
import 'react-confirm-alert/src/react-confirm-alert.css'; // Import css
import {ImCross} from 'react-icons/im'
import {BsPlusLg} from 'react-icons/bs'
import ButtonAdd from '../../utilities/ButtonAdd';
import Modal from '../../utilities/Modal';


function Index() {
  document.title = "Carousel - Earth";
  const [carousel, setCarousel] = useState([]);
  const [showModal, setShowModal] = useState(false);

  const token = Cookies.get('token');

  const fetchData = async () => {

      await Api.get(`/api/admin/carousel`, {
          headers: {
              Authorization: `Bearer ${token}`
          }
      }).then(response => {
          setCarousel(response.data.data);
          // console.log(response.data.data)

      })
  }

  useEffect(() => {
      fetchData();
      // console.log(categories)
  }, [])

  // function hapus data
  const deleteCarousel = (id) => {
      // Show confirm alert
      confirmAlert({
          title:  'Are You Sure?',
          message: 'want to delete this data?',
          buttons: [{
              label:  'YES',
              onClick: async() => {
                  await Api.delete(`/api/admin/carousel/${id}`, {
                      headers: {
                          Authorization: `Bearer ${token}`,
                      }
                  }).then(() => {
                      // show Toast
                      toast.success("Carousel Deleted!", {
                          duration: 4000,
                          position: "top-right",
                          style: {
                              borderRadius: '10px',
                              background: '#333',
                              color: '#fff'
                          },
                      })

                      fetchData();
                  })
              },
          },
          {
              label: 'NO',
              onClick:() => {}
          }]   
      });
  }

    const [image, setImage] = useState("");
    const [validation, setValidation] = useState({});

    // history
    const navigate = useNavigate();

    // Function store Image
    const handleFileChange = (e) => {
        const imageData = e.target.files[0];

        // Check validation file
        if(!imageData.type.match('image.*')) {
            // set image to null
            setImage("");

            // show toast
            toast.error("Format File not Supported!", {
                duration:4000,
                position:"top-right",
                style: {
                    borderRadius:'10px',
                    background:'#333',
                    color:"#fff"
                }
            });

            return
        }
        // assign file to state image
        setImage(imageData);
    }

    const storeSlider = async (e) => {
        e.preventDefault();
        
        const formData = new FormData();
        formData.append('image',image);

        await Api.post(`/api/admin/carousel`, formData, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        }).then(() => {
            toast.success("Data Created Successfully!", {
                duration: 4000,
                position: "top-right",
                style: {
                    borderRadius: "10px",
                    background: "#333",
                    color: "#fff",
                }
            });
            setShowModal(false)
            fetchData();
        }).catch((error) => {
            setValidation(error.response.data);
        })
      }
  
      const handleClick = () => {
        setShowModal(true);
      }

  return (
    <React.Fragment>
      <NavBar>
        Carousel 
        <div>
        <ButtonAdd handleClick={handleClick}><BsPlusLg /></ButtonAdd>
        </div>

        {showModal ? (
        <>
          <Modal onSubmit={storeSlider}>
            {/*header*/}
            <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
              <h3 className="text-3xl font-semibold">
                Add Carousel
              </h3>
              <button
                className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                onClick={() => setShowModal(false)}
              >
                <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                  ×
                </span>
              </button>
            </div>
            {/*body*/}
            <div className="relative p-6 flex-auto">
            <div className="flex justify-center">
              <div className="mb-3 w-96">
                <label htmlFor="formFile" className="form-label inline-block mb-2 text-gray-700">Upload Image</label>
                <input onChange={handleFileChange}
                className="form-control
                block
                w-full
                px-3
                py-1.5
                text-base
                font-normal
                text-gray-700
                bg-white bg-clip-padding
                border border-solid border-gray-300
                rounded
                transition
                ease-in-out
                m-0
                focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" type="file" id="formFile" />
              </div>
            </div>
            </div>
            {/*footer*/}
            <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
              <button
                className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                type="button"
                onClick={() => setShowModal(false)}
              >
                Close
              </button>
              <button
                className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                type="submit"
              >
                Save Changes
              </button>
              
            </div>
          </Modal>
        </>
      ) : null}

        <div className="flex flex-col">
          <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div className="py-4 inline-block min-w-full sm:px-6 lg:px-8">
              <div className="overflow-hidden">
                <table className="min-w-full text-center">
                  <thead className="border-b bg-gray-800">
                    <tr>
                      <th scope="col" className="text-sm font-medium text-white px-6 py-4">
                        #
                      </th>
                      <th scope="col" className="text-sm font-medium text-white px-6 py-4">
                        Image
                      </th>
                      <th scope="col" className="text-sm font-medium text-white px-6 py-4">
                        Action
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {
                      carousel.map((data, i) => (
                        <tr className="bg-white border-b" key={i}>
                          <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{++i}</td>
                          <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                            <img src={data.image} className="w-64 h-auto" alt="..." />
                          </td>
                          <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                          <button type="button" onClick={() => {deleteCarousel(data.id)}}
                          className="inline-block
                            px-6 py-2.5
                             bg-red-600
                              text-white 
                              font-medium 
                              text-xs 
                              leading-tight 
                              uppercase 
                              rounded-full 
                              shadow-md 
                              hover:bg-red-700 
                              hover:shadow-lg 
                              focus:bg-red-700 
                              focus:shadow-lg 
                              focus:outline-none 
                              focus:ring-0 active:bg-red-800 active:shadow-lg transition duration-150 ease-in-out"><ImCross /></button>
                          </td>
                        </tr>
                      ))
                    }
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </NavBar>
    </React.Fragment>
  )
}

export default Index