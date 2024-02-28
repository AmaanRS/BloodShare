import React from 'react'
import cc from "../../assets/cc.png"
import { Link } from 'react-router-dom';

const Contact = () => {
    const data = [
        {
            title: "BloodShare related queries, feedback and suggestions", body: [
                "Center For Development of Advanced Computing",
                "C-56/1, Anusandhan Bhawan , Sector-62, Noida, Uttar Pardesh-201307",
                "8527890830",
                "BloodShare[at]cdac[dot]in"
            ]
        },
        {
            title: "For Administrative queries", body: [
                "Blood Cell, National Health Mission",
                "Ministry of Health & Family Welfare,New Delhi - 110011"
            ]
        },
        { title: "For administrative queries", body: ["Blood Cell, National Health Mission", "Ministry of Health & Family Welfare,New Delhi - 110011"] }
    ];
    return (
        <div>
            <div className='px-64'><br />
                <h1 className='text-center text-3xl font-bold'>Contact Details</h1><br />
                <div className='flex justify-around'>
                    <div>
                        {
                            data.map((e) => {
                                return (
                                    <>
                                        <p className='text-xl font-bold underline'>{e.title}</p><br />
                                        <code>
                                            {e.body.map((k) => {
                                                return <p className='text-md'>{k}</p>
                                            })}
                                        </code><br />
                                    </>
                                )
                            })
                        }
                    </div>
                    <div>
                        <img src={cc} draggable={false} width="90%" alt="" />
                    </div>
                </div>
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

export default Contact