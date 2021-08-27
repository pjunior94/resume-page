import React from 'react';
import './App.css';
// import Photo from './components/Photo';

import me from './assets/me.png';

function App() {
  return (

    <div className="flex flex-col">
      <div className="flex flex-grow items-center justify-center">
        <div className="flex flex-col flex-grow-0 shadow-2xl rounded-lg bg-white w-auto h-auto m-28">
          <div className="flex flex-grow-0 justify-center">
            <div className="rounded-full bottom-16 h-28 w-28 sm:h-28 sm:w-28 md:h-36 md:w-36 lg:h-38 lg:w-38" style={{
              display: 'block',
              position: 'relative',
              borderWidth: 3,
              borderColor: '#fff'
            }}>
              <img
                className="rounded-full h-28 w-28 sm:h-28 sm:w-28 md:h-36 md:w-36 lg:h-38 lg:w-38"
                src={me}
                alt=""
              />
            </div>
          </div>
          <div className="flex flex-col sm:flex-col md:flex-col lg:flex-row">
            <div className="flex flex-row sm:flex-row md:flex-row lg:flex-col justify-center sm:justify-center md:justify-center lg:justify-start flex-grow pl-2 sm:pl-2 md:pl-2 lg:pl-2">
              <p className="font-sans text-xl sm:text-2xl md:text-2xl lg:text-3xl font-normal text-gray-800">Paulo Henrique Junior</p>
            </div>

            <div className="flex flex-row sm:flex-col md:flex-col lg:flex-col flex-grow pr-2 sm:pr-2 md:pr-2 lg:pr-2">
              <div className="flex flex-grow sm:flex-grow md:flex-grow-0 lg:flex-grow-0 flex-row sm:flex-row md:flex-col lg:flex-col">
                <div className="flex flex-grow sm:flex-grow md:flex-grow lg:flex-grow-0 justify-center sm:justify-center md:justify-center lg:justify-end">
                  <a className="font-sans text-sm sm:text-xl md:text-xl lg:text-2xl font-light text-gray-600" href="https://www.google.com/maps/search/Porto,%20Portugal?hl=en&source=opensearch" target="_blank" rel="noreferrer"> 🌍 Porto, Portugal</a>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-grow-0 justify-center sm:justify-center md:justify-center lg:justify-end pr-2 sm:pr-2 md:pr-2 lg:pr-2">
            <a className="font-sans text-sm sm:text-xl md:text-xl lg:text-2xl font-light text-gray-600" href="mailto:ps.junior94@gmail.com">📥 ps.junior94@gmail.com</a>
          </div>
          <div className="flex flex-grow-0 justify-center sm:justify-center md:justify-center lg:justify-end pr-2 sm:pr-2 md:pr-2 lg:pr-2">
            <a className="font-sans text-sm sm:text-xl md:text-xl lg:text-2xl font-light text-gray-600" href="https://wa.me/+351912583618" target="_blank" rel="noreferrer">📱 +351 912 583 618</a>
          </div>

          <div className="flex flex-col flex-grow p-4">
            <p className="font-sans text-sm sm:text-xl md:text-xl lg:text-xl font-light pb-3 text-gray-600 uppercase">
              Work Experiences 👨🏻‍💻
            </p>
            <div>
              <div className="flex flex-row mb-3">
                <p className="font-sans text-sm sm:text-xl md:text-xl lg:text-xl font-semibold text-black">
                  Senior .Net Developer, IT Sector&nbsp;
                </p>
                <p className="font-sans text-sm sm:text-xl md:text-xl lg:text-xl font-normal justify-end flex-grow sm:flex-grow md:flex-grow lg:flex-grow-0 text-black">
                  - Dec 2020 - present - Porto/Portugal - 9 months
                </p>
              </div>
              <p className="font-sans text-sm sm:text-xl md:text-xl lg:text-xl font-normal text-black pr-2">
                IT Sector is a company with more than 15 years specialized in digital transformation for financial institutions around Europe.
              </p>
              <div className="flex flex-row">
                <ul className="list-inside list-disc">
                  <li className="font-sans text-sm sm:text-xl md:text-xl lg:text-xl font-light text-black mb-3 mt-3">
                    Developing new features as described on analysis requirement on microservices backend solution using .Net C# (.Net Core, .Net Framework).
                  </li>
                  <li className="font-sans text-sm sm:text-xl md:text-xl lg:text-xl font-light text-black mb-3 mt-3">
                    Working close to customer’s team in Canada and mobile team to identify and fix bugs on backend solution as it was open from QA and QA customer’s team.
                  </li>
                  <li className="font-sans text-sm sm:text-xl md:text-xl lg:text-xl font-light text-black mb-3 mt-3">
                    Helping and leading new members on team to understand the architecture and start to develop new features based on user stories in backend project.
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="flex flex-col flex-grow p-4">
            <p className="font-sans text-sm sm:text-xl md:text-xl lg:text-xl font-light pb-3 text-gray-600 uppercase">
              Education 📚
            </p>
            <div>
              <div className="flex flex-row">
                <p className="font-sans text-sm sm:text-xl md:text-xl lg:text-xl font-semibold text-black">
                  2021, MBA in Project Management,&nbsp;
                </p>
                <p className="font-sans text-sm sm:text-xl md:text-xl lg:text-xl font-normal text-black justify-end sm:justify-end md:justify-end lg:justify-start">
                  Centro Universitário Estácio de Sá
                </p>
              </div>
              <div className="flex flex-row">
                <p className="font-sans text-sm sm:text-xl md:text-xl lg:text-xl font-semibold text-black">
                  2019, B.Sc. in Analysis and System Development,&nbsp;
                </p>
                <p className="font-sans text-sm sm:text-xl md:text-xl lg:text-xl font-normal text-black justify-end sm:justify-end md:justify-end lg:justify-start">
                  Centro Universitário Estácio de Sá
                </p>
              </div>
            </div>
          </div>

          <div className="flex flex-col flex-grow p-4">
            <p className="font-sans text-sm sm:text-xl md:text-xl lg:text-xl font-light pb-3 text-gray-600 uppercase">
              Languages 🇬🇧
            </p>
            <div>
              <div className="flex flex-row">
                <p className="font-sans text-sm sm:text-xl md:text-xl lg:text-xl font-semibold text-black">
                  English, &nbsp;
                </p>
                <p className="font-sans text-sm sm:text-xl md:text-xl lg:text-xl font-normal text-black">
                  Advanced
                </p>
              </div>
              <div className="flex flex-row">
                <p className="font-sans text-sm sm:text-xl md:text-xl lg:text-xl font-semibold text-black">
                  Portuguese, &nbsp;
                </p>
                <p className="font-sans text-sm sm:text-xl md:text-xl lg:text-xl font-normal text-black">
                  Native
                </p>
              </div>
            </div>
          </div>
          <div className="p-4">
            <div className="flex flex-col flex-grow">
              <p className="font-sans text-sm sm:text-xl md:text-xl lg:text-xl font-light pb-3 text-gray-600 uppercase">
                International Experience ✈️
              </p>
            </div>
            <div className="flex flex-col sm:flex-col md:flex-col lg:flex-row flex-grow justify-center">
              <div className="flex flex-col items-center justify-center">
                <div className="flex flex-row w-52 h-52 bg-gray-600 m-4 rounded-md">

                </div>
                <p>São Paulo, Brazil</p>
              </div>

              <div className="flex flex-col items-center justify-center">
                <div className="flex flex-row w-52 h-52 bg-gray-600 m-4 rounded-md">

                </div>
                <p>Marseile, France</p>
              </div>

              <div className="flex flex-col items-center justify-center">
                <div className="flex flex-row w-52 h-52 bg-gray-600 m-4 rounded-md">

                </div>
                <p>Porto, Portugal</p>
              </div>

              <div className="flex flex-col items-center justify-center">
                <div className="flex flex-row w-52 h-52 bg-gray-600 m-4 rounded-md">

                </div>
                <p>Edmonton, Canada</p>
              </div>

              <div className="flex flex-col items-center justify-center">
                <div className="flex flex-row w-52 h-52 bg-gray-600 m-4 rounded-md">

                </div>
                <p>Wroclaw, Poland</p>
              </div>
            </div>
          </div>
          
          {/* <div className="flex flex-row justify-center sm:justify-center md:justify-center lg:justify-start m-3">
            <button className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center">
              <svg className="fill-current w-4 h-4 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z" /></svg>
              <span>Download CV</span>
            </button>
          </div> */}
        </div>
        <div>
        </div>
      </div>
    </div>

  );
}

export default App;
