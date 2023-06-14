import React, { useState, useEffect, useRef } from 'react'
import NavBar from '../../layouts/NavBar'
//import BASE URL API
import Api from "../../../api";
//import js cookie
import Cookies from "js-cookie";
import { Link, useNavigate, useParams } from "react-router-dom";

// import toats
import toast from "react-hot-toast";

//import react-confirm-alert
import { confirmAlert } from 'react-confirm-alert';
//import CSS react-confirm-alert
import 'react-confirm-alert/src/react-confirm-alert.css'; // Import css
import ButtonAdd from '../../utilities/ButtonAdd'
import {BsPlusLg, BsPencil} from 'react-icons/bs'
import {ImCross} from 'react-icons/im'
import Modal from '../../utilities/Modal';
import Pagination from '../../utilities/Pagination';

function Index() {

  const [showModal, setShowModal] = useState(false);
  const [showModalEdit, setShowModalEdit] = useState(false);
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");
  const [validation, setValidation] = useState({});
  const [queAns, setQueAns] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [perPage, setPerPage] = useState(0);
  const [total, setTotal] = useState(0);
  const [search, setSearch] = useState("");
  const [idData, setIdData] = useState(0);
  // Get id
  // const { id } = useParams();

  const token = Cookies.get('token');

  const handleClick = () => {
    setQuestion("")
    setAnswer("")
    setShowModal(true);
  }

  const searchHandler = (e) => {
    e.preventDefault();
    fetchData(1,search);
  }


  const fetchData = async (pageNumber, searchData) => {
    const page = pageNumber ? pageNumber : currentPage;
    //define variable "searchQuery"
    const searchQuery = searchData ? searchData : search;
    await Api.get(`/api/admin/qa?q=${searchQuery}&page=${page}`, {
      headers: {
          Authorization: `Bearer ${token}`
      }
    }).then(response => {
        setQueAns(response.data.data.data);
        setCurrentPage(response.data.data.current_page);
        //set perPage
        setPerPage(response.data.data.per_page);
        //total
        setTotal(response.data.data.total);
    })
  }

  useEffect(() => {
    fetchData(1, search);
  }, [])

  const storeQA = async (e) => {
    e.preventDefault();
        
    const formData = new FormData();
    formData.append('question',question);
    formData.append('answer',answer);

    await Api.post(`/api/admin/qa`, formData, {
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

  const updateQa = async (e) => {
    e.preventDefault();
        
    const formData = new FormData();
    formData.append('question',question);
    formData.append('answer',answer);
    formData.append("_method", "PATCH");

    await Api.post(`/api/admin/qa/${idData}`, formData, {
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
        setShowModalEdit(false)
        fetchData();
    }).catch((error) => {
        setValidation(error.response.data);
    })
  }

  const getQaById = async (id) => {
    setShowModalEdit(true)
    await Api.get(`/api/admin/qa/${id}`, {
        headers: {
            Authorization: `Bearer ${token}`
        }
    }).then((response) => {
        setQuestion(response.data.data.question)
        setAnswer(response.data.data.answer)
        setIdData(id);
    })
}

  const　deleteQa = (id) => {
      confirmAlert({
          title:  'Are You Sure?',
          message: 'want to delete this data?',
          buttons: [{
              label:  'YES',
              onClick: async() => {
                  await Api.delete(`/api/admin/qa/${id}`, {
                      headers: {
                          Authorization: `Bearer ${token}`,
                      }
                  }).then(() => {
                      // show Toast
                      toast.success("Data Deleted Successfully!", {
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

  return (
    <React.Fragment>
      <NavBar>
        QA
        <div>
        <ButtonAdd handleClick={handleClick}><BsPlusLg /></ButtonAdd>
        </div>

        {showModal ? (
        <>
          <Modal onSubmit={storeQA}>
            {/*header*/}
            <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
              <h3 className="text-3xl font-semibold">
                Add QA
              </h3>
            </div>
            {/*body*/}
            <div className="relative p-6 flex-auto">
              <div className="flex justify-center">
                <div className="block p-6 rounded-lg shadow-lg bg-white w-full">
                    <div className="form-group mb-6">
                      <label htmlFor="exampleInputEmail2" className="form-label inline-block mb-2 text-gray-700">Question</label>
                      <input type="text" 
                        value={question} onChange={(e) => setQuestion(e.target.value)}
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
                        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                        aria-describedby="emailHelp" placeholder="Question" />
                    </div>
                    {   validation.question && (
                        <div className="alert alert-danger">
                        {validation.question[0]}
                        </div> )
                    }
                    <div className="form-group mb-6">
                      <label htmlFor="exampleInputEmail2" className="form-label inline-block mb-2 text-gray-700">Answer</label>
                      <textarea
                      rows={4}
                        value={answer} onChange={(e) => setAnswer(e.target.value)}
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
                          focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                          aria-describedby="emailHelp" placeholder="Answer"></textarea>
                      
                    </div>
                    {   validation.answer && (
                        <div className="alert alert-danger">
                        {validation.answer[0]}
                        </div> )
                    }
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



      {/* MODAL EDIT */}
      {showModalEdit ? (
        <>
          <Modal onSubmit={updateQa}>
            {/*header*/}
            <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
              <h3 className="text-3xl font-semibold">
                Update QA
              </h3>
            </div>
            {/*body*/}
            <div className="relative p-6 flex-auto">
              <div className="flex justify-center">
                <div className="block p-6 rounded-lg shadow-lg bg-white w-full">
                    <div className="form-group mb-6">
                      <label htmlFor="exampleInputEmail2" className="form-label inline-block mb-2 text-gray-700">Question</label>
                      <input type="text" 
                        value={question} onChange={(e) => setQuestion(e.target.value)}
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
                        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                        aria-describedby="emailHelp" placeholder="Question" />
                    </div>
                    {   validation.question && (
                        <div className="alert alert-danger">
                        {validation.question[0]}
                        </div> )
                    }
                    <div className="form-group mb-6">
                      <label htmlFor="exampleInputEmail2" className="form-label inline-block mb-2 text-gray-700">Answer</label>
                      <textarea
                        rows={4}
                        value={answer} onChange={(e) => setAnswer(e.target.value)}
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
                          focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                          aria-describedby="emailHelp" placeholder="Answer">

                      </textarea>
                      
                    </div>
                    {   validation.answer && (
                        <div className="alert alert-danger">
                        {validation.answer[0]}
                        </div> )
                    }
                </div>
              </div>
            </div>
            {/*footer*/}
            <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
              <button
                className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                type="button"
                onClick={() => setShowModalEdit(false)}
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
        <form onSubmit={searchHandler} className='form-group'>
          <div className="flex justify-center w-full mt-3">
            <div className="w-full mb-3 xl:w-96">
              <div className="input-group relative flex flex-wrap items-stretch w-full mb-4">
                <input type="search" value={search} 
                onChange={ (e) => { setSearch(e.target.value) }}
                className="form-control relative flex-auto min-w-0 block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" placeholder="Search" aria-label="Search" aria-describedby="button-addon2" />
                <button className="btn px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700  focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out flex items-center" type="submit" id="button-addon2">
                  <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="search" className="w-4" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                    <path fill="currentColor" d="M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z"></path>
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </form>

        <div className="">
        <table className="table-fixed text-left">
            <thead className="border-b bg-gray-800">
              <tr>
                <th scope="col" className="text-sm font-medium text-white px-6 py-4">
                  #
                </th>
                <th scope="col" className="text-sm font-medium text-white px-6 py-4">
                  Question
                </th>
                <th scope="col" className="text-sm font-medium text-white px-6 py-4">
                  Answer
                </th>
                <th scope="col" className="text-sm font-medium text-white px-6 py-4">
                  Action
                </th>
              </tr>
            </thead>
            <tbody>
              {
                queAns.map((data, i) => (
                  <tr className="bg-white border-b" key={data.id}>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                      {++i + (currentPage-1) * perPage}
                    </td>
                    <td className="text-sm text-gray-900 font-light px-6 py-4">
                      {data.question}
                    </td>
                    <td className="text-sm text-gray-900 font-light px-6 py-4">
                      {data.answer}
                    </td>
                    <td className="text-sm text-gray-900 font-light px-6 py-4">
                      <div className="flex items-center justify-center">
                        <div className="inline-flex shadow-md hover:shadow-lg focus:shadow-lg" role="group">
                          <button type="button" 
                            onClick={() => {getQaById(data.id)}}
                            className="rounded-l 
                            inline-block 
                            px-6 py-2.5 
                            bg-yellow-600 
                            text-white 
                            font-medium 
                            text-xs 
                            leading-tight 
                            uppercase 
                            hover:bg-yellow-700
                            focus:bg-yellow-700 
                            focus:outline-none 
                            focus:ring-0 
                            active:bg-yellow-800 
                            transition duration-150 
                            ease-in-out"><BsPencil /></button>
                          <button type="button" 
                            onClick={() => {deleteQa(data.id)}}
                            className="rounded-r 
                            inline-block 
                            px-6 py-2.5 
                            bg-red-600 
                            text-white 
                            font-medium 
                            text-xs 
                            leading-tight 
                            uppercase 
                            hover:bg-red-700 
                            focus:bg-red-700 
                            focus:outline-none 
                            focus:ring-0 
                            active:bg-red-800 
                            transition duration-150 
                            ease-in-out"><ImCross /></button>
                        </div>
                      </div>
                    </td>
                  </tr>
                ))
              }
            </tbody>
          </table>
          <Pagination
            currentPage={currentPage}
            perPage={perPage}
            total={total}
            onChange={(pageNumber) => fetchData(pageNumber)}
            position="end"
          />
        </div>

      </NavBar>
    </React.Fragment>
  )
}

export default Index