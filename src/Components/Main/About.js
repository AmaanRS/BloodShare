import React from 'react'
import { Link } from 'react-router-dom'

const About = () => {
  return (
    <div>

      <div className=' img px-44'>
        <p className='text-4xl font-bold text-center underline mt-4'>About BloodShare</p>
        <br /><p className='text-xl'>BloodShare works as a platform for users to register as blood to either request/donate blood and blood banks to manage their stocks by managing the pending donations and request along with scheduling blood camps and managing them. The system will authenticate the user/bank using their username(mobile) and password to further perform other actions.</p>
        <br /><p className='text-xl'>It includes managing and tracking blood donations, connecting donors with recipients, and providing real-time information on blood shortages and needs. The platform will include both a user-facing interface and an blood bank’s interface for managing the data.</p>
        {/* <p className='text-right text-5xl'>
        <br />
        <a target="_blank" href="https://github.com/ujjwalSk/" className='hover:drop-shadow-md hover:text-purple'><i class="fa-brands fa-github"></i></a>&nbsp;&nbsp;&nbsp;
        <a target="_blank" href="https://www.linkedin.com/in/ujjwalsk/" className='hover:drop-shadow-md hover:text-metal'><i class="fa-brands fa-linkedin"></i> </a>&nbsp;&nbsp;
      </p> */}
      </div>
      <section className="footer mt-40">
        <footer className="relative bg-gray-300 pt-8 pb-6">
          <div
            className="bottom-auto top-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden -mt-20"
            style={{ height: "80px" }}
          >
            <svg
              className="absolute bottom-0  overflow-hidden"
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="none"
              version="1.1"
              viewBox="0 0 2560 100"
              x="0"
              y="0"
            >
              <polygon
                className="text-gray-300 fill-current"
                points="2560 0 2560 100 0 100"
              ></polygon>
            </svg>
          </div>
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap">
              <div className="w-full lg:w-6/12 px-4">
                <h4 className="text-3xl font-semibold">Let's keep in touch!</h4>
                <h5 className="text-lg mt-0 mb-2 text-gray-700">
                  Find us on any of these platforms, we respond 1-2 business
                  days.
                </h5>
                <div className="mt-6">
                  <button
                    className="bg-white text-blue-400 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2 p-3"
                    type="button"
                  >
                    <i className="flex fab fa-twitter"></i>
                  </button>
                  <button
                    className="bg-white text-blue-600 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2 p-3"
                    type="button"
                  >
                    <i className="flex fab fa-facebook-square"></i>
                  </button>
                  <button
                    className="bg-white text-pink-400 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2 p-3"
                    type="button"
                  >
                    <i className="flex fab fa-dribbble"></i>
                  </button>
                  <button
                    className="bg-white text-gray-900 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2 p-3"
                    type="button"
                  >
                    <i className="flex fab fa-github"></i>
                  </button>
                </div>
              </div>
              <div className="w-full lg:w-6/12 px-4">
                <div className="flex flex-wrap items-top mb-6">
                  <div className="w-full lg:w-4/12 px-4 ml-auto">
                    <span className="block uppercase text-gray-600 text-sm font-semibold mb-2">
                      Useful Links
                    </span>
                    <ul className="list-unstyled">
                      <li>
                        <Link to={'/about'} className="text-gray-700 hover:text-gray-900 font-semibold block pb-2 text-sm">
                          About Us
                        </Link>
                      </li>
                      <li>
                        <Link to={'/contactUs'} className="text-gray-700 hover:text-gray-900 font-semibold block pb-2 text-sm">
                          Contact Us
                        </Link>
                      </li>
                      <li>
                        <Link to={'/bloodDirect'} className="text-gray-700 hover:text-gray-900 font-semibold block pb-2 text-sm">
                          Directory
                        </Link>
                      </li>
                      <li>
                        <Link to={'/'} className="text-gray-700 hover:text-gray-900 font-semibold block pb-2 text-sm">
                          Home
                        </Link>
                      </li>
                    </ul>
                  </div>
                  <div className="w-full lg:w-4/12 px-4">
                    <span className="block uppercase text-gray-600 text-sm font-semibold mb-2">
                      Other Resources
                    </span>
                    <ul className="list-unstyled">
                      <li>
                        <Link to={'/register/patient'} className="text-gray-700 hover:text-gray-900 font-semibold block pb-2 text-sm">
                          User
                        </Link>
                      </li>
                      <li>
                        <Link to={'/'} className="text-gray-700 hover:text-gray-900 font-semibold block pb-2 text-sm">
                          Donor
                        </Link>
                      </li>
                      <li>
                        <Link to={'/login/bank'} className="text-gray-700 hover:text-gray-900 font-semibold block pb-2 text-sm">
                          Blood Bank
                        </Link>
                      </li>
                      <li>
                        <a className="text-gray-700 hover:text-gray-900 font-semibold block pb-2 text-sm">
                          Docs
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <hr className="my-6 border-gray-400" />
          </div>
        </footer>
      </section>
    </div>

  )
}

export default About