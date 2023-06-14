import React, { useState, useEffect } from 'react'
import ReactQuill from "react-quill";
// quill CSS
import 'react-quill/dist/quill.snow.css';

import Api from "../../../api";
import Cookies from "js-cookie";
import { useNavigate, useParams } from "react-router-dom";
import toast from "react-hot-toast";
import NavBar from '../../layouts/NavBar';


function Index() {

  const [valHome, setValHome] = useState('');

  const [validation, setValidation] = useState({});
  const token = Cookies.get("token");

  const navigate = useNavigate();

  // const { id } = useParams();

  const getHomeData = async () => {
    const response = await Api.get(`/api/admin/home/1`, {
        headers: {
            Authorization: `Bearer ${token}`
        }
    });

    const data = await response.data.data;
    // console.log(response)
    setValHome(data.val_home)
}

useEffect(() => {
  getHomeData();
}, []);

  const modules = {
    toolbar: [
      [{ 'header': [1, 2, false] }],
      ['bold', 'italic', 'underline','strike', 'blockquote'],
      [{'list': 'ordered'}, {'list': 'bullet'}, {'indent': '-1'}, {'indent': '+1'}],
      ['link', 'image'],
      ['clean']
    ],
  }
  
  const formats = [
    'header',
    'bold', 'italic', 'underline', 'strike', 'blockquote',
    'list', 'bullet', 'indent',
    'link', 'image'
  ]

  const updateHome = async (e) => {
    e.preventDefault();
        
        // define form data
        const formData = new FormData();
        formData.append('val_home',valHome);
        formData.append('_method','PATCH');

        await Api.post(`api/admin/home/1`, formData, {
            // header
            headers: {
                Authorization: `Bearer ${token}`
            }
        }).then(() => {
            // show Toast
            toast.success("Data Updated Successfully", {
                duration: 4000,
                position: "top-right",
                style: {
                    borderRadius: '10px',
                    background: '#333',
                    color:'#fff'
                }
            });

            navigate('/admin/home');

        }).catch((error) => {
            // Set State Validation
            setValidation(error.response.data);
        })
  }

  return (
    <React.Fragment>
        <NavBar>
          <p className='text-3xl font-extrabold pb-5 border-b-2 border-b-black'>Company Detail</p>
          <div className='flex flex-col m-3 p-3'>
            <p className='text-lg font-bold'>Name : {process.env.REACT_APP_COMPANYNAME}</p>
            <p className='text-lg font-bold mt-5'>Address : {process.env.REACT_APP_ADDRESS}</p>
            <p className='text-lg font-bold mt-5'>Phone : {process.env.REACT_APP_COMPANYPHONE}</p>
            <p className='text-lg font-bold mt-5'>Fax : {process.env.REACT_APP_COMPANYFAX}</p>
            <p className='text-lg font-bold mt-5'>Email : {process.env.REACT_APP_EMAIL}</p>
          </div>
        </NavBar>
    </React.Fragment>
  )
}

export default Index