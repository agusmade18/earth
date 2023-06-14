import React, { useState } from 'react'
// import Base Api
import Api from '../api';
// impoer Toast
import toast from 'react-hot-toast';
// import { Toast } from 'react-hot-toast';

// import Cookies
import Cookies from 'js-cookie';
// import react router dom
import { useNavigate, Navigate } from 'react-router-dom';

function Login() {

    document.title = "Login - Earth Website";

    // state user
    const [email, setEmail] = useState('admin@gmail.com');
    const [password, setPassword] = useState('password');

    // state loading
    const [isLoading, setLoading] = useState(false);

    // state Validation
    const [validation, setValidation] = useState({});

    // navigate
    const navigate = useNavigate();

    // function login handler
    const loginHandler = async (e) => {
      e.preventDefault();
      
      // set state login to true
      setLoading(true);

      await Api.post("/api/admin/login", {
        email:    email,
        password: password,
      }).then((response) => {
        // set loading to false
        setLoading(false);

        // show Toast
        toast.success("Login Successfully", {
          duration: 4000,
          position: "top-right",
          style: {
            borderRadius: '10px',
            background: '#333',
            color:  '#fff',
          },
        });

        // set cookies
        Cookies.set('token', response.data.token);

        // redirect to dasboard page
        navigate("/admin/dashboard");
      }).catch((error) => {
        // set state loadingto false
        setLoading(false);

        // set error response validasi to state validation
        setValidation(error.response.data)
      });
    };

    if(Cookies.get('token')) {
      // redirect dashboard page
      return <Navigate to="/admin/dashboard" />;
    }

  return (
    <React.Fragment> 
      <section className="h-screen">
        <div className="container px-6 py-12 h-full">
          <div className="flex justify-center items-center flex-wrap h-full g-6 text-gray-800">
            <div className="md:w-8/12 lg:w-6/12 mb-12 md:mb-0">
              <img
                src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.svg"
                className="w-full"
                alt="Phone image"
              />
            </div>
            <div className="md:w-8/12 lg:w-5/12 lg:ml-20">
              {
                validation.message && (
                <div className='alert alert-danger'>
                    { validation.message }
                </div>
                )
              }
              <form onSubmit={loginHandler}>
                {/* Email input */}
                <div className="mb-6">
                  <div className="form-floating mb-3 xl:w-96">
                    <input type="email" className="form-control
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
                      focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" id="floatingInput" placeholder="name@example.com"
                      value={email} 
                      onChange={(e) => setEmail(e.target.value)} />
                      <label htmlFor="floatingInput" className="text-gray-700">Email address</label>
                  </div>
                  {
                    validation.email && (
                    <div className='alert alert-danger'>
                        { validation.message }
                    </div>
                    )
                  } 
                </div>

                {/* Password input */}
                <div className="mb-6">
                  <div className="form-floating mb-3 xl:w-96">
                    <input type="password" 
                    value={password} onChange={(e) => setPassword(e.target.value)}
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
                    focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" id="floatingPassword" placeholder="Password" />
                    <label htmlFor="floatingPassword" className="text-gray-700">Password</label>
                  </div>
                  {
                    validation.password && (
                        <div className='alert alert-danger'>
                        { validation.password[0] }
                        </div>
                    )
                  }
                </div>

                {/* Submit button */}
                <button
                  type="submit"
                  className="inline-block px-7 py-3 bg-blue-600 text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out w-full"
                  data-mdb-ripple="true"
                  data-mdb-ripple-color="light"
                >
                  Sign in
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </React.Fragment>
    )
  }

export default Login