import React from 'react'
import bg from "../../assets/bg.webp";
import bg2 from "../../assets/bg2.jpg";
import donationFact from "../../assets/donationFact.webp"
import g1 from "../../assets/donation/g1.jpg"
import g2 from "../../assets/donation/g2.jpg"
import g3 from "../../assets/donation/g3.jpg"
import g4 from "../../assets/donation/g4.jpg"
import BloodDonateBanner from '../../assets/BloodDonateBanner.png'
import { Link } from 'react-router-dom';
const Home = () => {
  const temp = [
    { blood: "A+", donate: "A+ AB+", recieve: "A+ A- O+ O-" },
    { blood: "O+", donate: "O+ A+ B+ AB+", recieve: "O+ O-" },
    { blood: "B+", donate: "B+ AB+", recieve: "B+ B- O+ O-" },
    { blood: "AB+", donate: "AB+", recieve: "Everyone" },
    { blood: "A-", donate: "A+ A- AB+ AB-", recieve: "A- O-" },
    { blood: "O-", donate: "Everyone", recieve: "O-" },
    { blood: "B-", donate: "B+ B- AB+ AB-", recieve: "B- O-" },
    { blood: "AB-", donate: "AB+ AB-", recieve: "AB- A- B- O-" }
  ]
  const temp2 = [
    { title: "Registration", img: g1 },
    { title: "Seeing", img: g2 },
    { title: "Donation", img: g3 },
    { title: "Save Life", img: g4 },
  ]
  return (
    <div className="dark:text-white-900">
      <img src={BloodDonateBanner} alt="" />
      {/* <div className='grid grid-cols-2 place-items-center mt-6 px-52'>
                <div>
                    <img draggable={false} src={bg2} width="100%" alt="" />
                </div>
                <div>
                    <p className='text-center font-bold text-4xl text-gray-dark dark:text-white-900'>
                        Be the reason <br />for <br />someone's heartbeat
                    </p>
                </div>
            </div> */}
      <div className='flex px-20'>
        <div className='m-10'>
          <img src={donationFact} width="90%" alt="" />
          <p className='text-xl mt-4 text-center'>
            <code>After donating blood, the body works to replenish the blood loss. This stimulates the production of new blood cells and in turn, helps in maintaining good health.</code>
          </p>
        </div>
        {/* <div>
                    <table className='w-max' cellPadding={5}>
                        <tr>
                            <td colSpan={3} className="border bg-blood text-white-900 text-center font-bold">Compatible Blood Type Donors</td>
                        </tr>
                        <tr>
                            <th className='border w-max text-lg'>Blood Type</th>
                            <th className='border w-max text-lg'>Donate Blood To</th>
                            <th className='border w-max text-lg'>Receive Blood From</th>
                        </tr>
                        {temp.map((e) => {
                            return (
                                <tr>
                                    <td className='border w-max text-lg'>{e.blood}</td>
                                    <td className='border w-max text-lg'>{e.donate}</td>
                                    <td className='border w-max text-lg'>{e.recieve}</td>
                                </tr>
                            )
                        })}
                    </table>
                </div> */}
      </div>
      <div className='p-10'>

        <p className='text-4xl  font-bold text-blood text-center mt-5 mb-5'>
          Blood Donation Process
        </p>
      </div>
      <div className='grid grid-cols-4 place-items-center'>

        <div className='border-metal hover:bg-gray-light shadow-md m-2 rounded-lg overflow-hidden max-w-[90%] select-none grid grid-rows-2'>
          <div className='mb-4'><img src={g1} draggable={false} width="100%" alt="" /></div>
          <div className='m-2'>
            <h1 className='font-bold text-2xl text-center mb-4 text-midnight dark:text-white-900'>Donate Blood, Save Lives</h1>
            <p className=' px-3 text-justify'>
              Your donation today has the power to bring hope and save lives. By giving just a small amount of your time and blood, you can make a significant difference in someone's life. Join us in our mission to provide lifesaving blood to those in need.

            </p>
          </div>
        </div>
        <div className='border-metal hover:bg-gray-light shadow-md m-2 rounded-lg overflow-hidden max-w-[90%] select-none grid grid-rows-2'>
          <div className='mb-4'><img src={g2} draggable={false} width="100%" alt="" /></div>
          <div className='m-2'>
            <h1 className='font-bold text-2xl text-center mb-4 text-midnight dark:text-white-900'>Be a Hero, Donate Blood</h1>
            <p className='text-justify px-3'>Being a hero is easier than you think. By donating blood, you have the opportunity to be a hero in someone's life. Every drop of blood you give can make a real difference, providing critical support to patients in hospitals and emergency situations.
            </p>
          </div>
        </div>
        <div className='border-metal hover:bg-gray-light shadow-md m-2 rounded-lg overflow-hidden max-w-[90%] select-none grid grid-rows-2'>
          <div className='mb-4'><img src={g3} draggable={false} width="100%" alt="" /></div>
          <div className='m-2'>
            <h1 className='font-bold text-2xl text-center mb-4 text-midnight dark:text-white-900'>Community Blood Drive</h1>
            <p className='text-justify px-3'>Join us in our community blood drive and be a part of something meaningful. By participating in our blood drive, you're helping to ensure that hospitals and medical facilities have an adequate supply of blood for patients in need.
            </p>
          </div>
        </div>
        <div className='border-metal hover:bg-gray-light shadow-md m-2 rounded-lg overflow-hidden max-w-[90%] select-none grid grid-rows-2'>
          <div className='mb-4'><img src={g4} draggable={false} width="100%" alt="" /></div>
          <div className='m-2'>
            <h1 className='font-bold text-2xl text-center mb-4 text-midnight dark:text-white-900'>Blood Donation Myths</h1>
            <p className=' px-3 text-justify'>Let's dispel some common myths about blood donation. Contrary to popular belief, donating blood is safe, simple, and painless. It doesn't take much time, and the process is closely monitored by trained professionals to ensure your comfort and well-being</p>
          </div>
        </div>

      </div>
      <br />
      <section className="footer mt-20">
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

export default Home