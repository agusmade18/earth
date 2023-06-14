import React from 'react'

function Modal({children, onSubmit}) {
  return (
    <React.Fragment>
        <form onSubmit={onSubmit}>
            <div
              className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
            >
              <div className="relative w-full my-6 mx-auto max-w-3xl max-h-screen">
                {/*content*/}
                <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                  {children}
                </div>
              </div>
            </div>
            <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
          </form>
    </React.Fragment>
  )
}

export default Modal