import donationFact from "../../assets/donationFact.webp";
import g1 from "../../assets/donation/g1.jpg";
import g2 from "../../assets/donation/g2.jpg";
import g3 from "../../assets/donation/g3.jpg";
import g4 from "../../assets/donation/g4.jpg";
const Home = () => {
  const temp = [
    { blood: "A+", donate: "A+ AB+", recieve: "A+ A- O+ O-" },
    { blood: "O+", donate: "O+ A+ B+ AB+", recieve: "O+ O-" },
    { blood: "B+", donate: "B+ AB+", recieve: "B+ B- O+ O-" },
    { blood: "AB+", donate: "AB+", recieve: "Everyone" },
    { blood: "A-", donate: "A+ A- AB+ AB-", recieve: "A- O-" },
    { blood: "O-", donate: "Everyone", recieve: "O-" },
    { blood: "B-", donate: "B+ B- AB+ AB-", recieve: "B- O-" },
    { blood: "AB-", donate: "AB+ AB-", recieve: "AB- A- B- O-" },
  ];
  const temp2 = [
    { title: "Registration", img: g1 },
    { title: "Seeing", img: g2 },
    { title: "Donation", img: g3 },
    { title: "Save Life", img: g4 },
  ];
  return (
    <div className="dark:text-white-900">
      <img
        src={"https://www.bloodlinks.in/uploads/app/Banner-1-Donate-Blood.png"}
        alt=""
      />

      {/* <div className="grid grid-cols-2 place-items-center mt-6 px-52">
        <div>
          <img draggable={false} src={bg2} width="100%" alt="" />
        </div>
        <div>
          <p className="text-center font-bold text-4xl text-gray-dark dark:text-white-900">
            Be the reason <br />
            for <br />
            someone's heartbeat
          </p>
        </div>
      </div> */}
      <h1 className="font-bold text-center text-blood my-4 text-lg underline">
        Learn About Donation
      </h1>
      <div className="flex px-20">
        <div>
          <img src={donationFact} width="90%" alt="" />
          <p className="text-center">
            <code>
              After donating blood, the body works to replenish the blood loss.
              This stimulates the production of new blood cells and in turn,
              helps in maintaining good health.
            </code>
          </p>
        </div>
        <div>
          <table className="w-max" cellPadding={5}>
            <tr>
              <td
                colSpan={3}
                className="border bg-blood text-white-900 text-center font-bold"
              >
                Compatible Blood Type Donors
              </td>
            </tr>
            <tr>
              <th className="border w-max text-lg">Blood Type</th>
              <th className="border w-max text-lg">Donate Blood To</th>
              <th className="border w-max text-lg">Receive Blood From</th>
            </tr>
            {temp.map((e) => {
              return (
                <tr>
                  <td className="border w-max text-lg">{e.blood}</td>
                  <td className="border w-max text-lg">{e.donate}</td>
                  <td className="border w-max text-lg">{e.recieve}</td>
                </tr>
              );
            })}
          </table>
        </div>
      </div>
      <p className="text-xl underline font-bold text-blood text-center mt-5 mb-5">
        Blood Donation Process
      </p>
      <div className="grid grid-cols-4 place-items-center">
        {temp2.map((e, i) => (
          // <div className="border-metal shadow-md rounded-lg overflow-hidden max-w-[90%] select-none grid grid-cols-2">
          //   <div>
          //     <img src={e.img} draggable={false} width="100%" alt="" />
          //   </div>
          //   <div className="m-4">
          //     <h1 className="font-bold text-lg text-midnight dark:text-white-900">
          //       {i + 1} - {e.title}
          //     </h1>
          //     <p className="text-justify">
          //       Lorem ipsum dolor, sit amet consectetur qwey adipisicing elit.
          //       Doloribus, as aliquam corporis dolorem consectetur qui libero,
          //       veritatis, nihil alias repellat quam architecto nobis laudantium
          //       ipsum nemo nesciunt quisquam est odit ad?
          //     </p>
          //   </div>
          // </div>
          <div className="border-metal inline-block shadow-md rounded-lg overflow-hidden w-64 select-none">
            <img src={e.img} draggable={false} className="w-full" alt="" />
            <div className="m-4">
              <h1 className="font-bold text-lg text-midnight dark:text-white-900">
                {i + 1} - {e.title}
              </h1>
              <p className="text-justify">
                Lorem ipsum dolor, sit amet consectetur qwey adipisicing elit.
                Doloribus, as aliquam corporis dolorem consectetur qui libero,
                veritatis, nihil alias repellat quam architecto nobis laudantium
                ipsum nemo nesciunt quisquam est odit ad?
              </p>
            </div>
          </div>
        ))}
      </div>
      <br />
      <div className="w-full bg-blood text-white-900 h-max text-sm text-center font-bold"></div>
      {/* <section className="footer">
        <footer className="relative bg-gray-300 pt-8 pb-6">
          <div
            className="bottom-auto top-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden -mt-20"
            style={{ height: "80px" }}
          >
            <svg
              className="absolute bottom-0 overflow-hidden"
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
                        <a className="text-gray-700 hover:text-gray-900 font-semibold block pb-2 text-sm">
                          About Us
                        </a>
                      </li>
                      <li>
                        <a className="text-gray-700 hover:text-gray-900 font-semibold block pb-2 text-sm">
                          Blog
                        </a>
                      </li>
                      <li>
                        <a className="text-gray-700 hover:text-gray-900 font-semibold block pb-2 text-sm">
                          Github
                        </a>
                      </li>
                      <li>
                        <a className="text-gray-700 hover:text-gray-900 font-semibold block pb-2 text-sm">
                          Free Products
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div className="w-full lg:w-4/12 px-4">
                    <span className="block uppercase text-gray-600 text-sm font-semibold mb-2">
                      Other Resources
                    </span>
                    <ul className="list-unstyled">
                      <li>
                        <a className="text-gray-700 hover:text-gray-900 font-semibold block pb-2 text-sm">
                          MIT License
                        </a>
                      </li>
                      <li>
                        <a className="text-gray-700 hover:text-gray-900 font-semibold block pb-2 text-sm">
                          Terms & Conditions
                        </a>
                      </li>
                      <li>
                        <a className="text-gray-700 hover:text-gray-900 font-semibold block pb-2 text-sm">
                          Privacy Policy
                        </a>
                      </li>
                      <li>
                        <a className="text-gray-700 hover:text-gray-900 font-semibold block pb-2 text-sm">
                          Contact Us
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
      </section> */}
    </div>
  );
};

export default Home;
