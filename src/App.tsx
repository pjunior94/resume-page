import React from 'react';
import './App.css';
// import Photo from './components/Photo';

import me from './assets/me.png';

function App() {
  return (

    <div className="flex flex-col h-screen">
      <div className="flex flex-grow items-center justify-center">
        <div className="flex flex-col flex-grow-0 shadow-2xl rounded-lg bg-white w-3/5 h-3/5">
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
              <p className="font-sans text-1xl sm:text-2xl md:text-2xl lg:text-3xl font-normal text-gray-800">Paulo Henrique Junior</p>
            </div>

            <div className="flex flex-row sm:flex-col md:flex-col lg:flex-col flex-grow pr-2 sm:pr-2 md:pr-2 lg:pr-2">
              <div className="flex flex-grow sm:flex-grow md:flex-grow-0 lg:flex-grow-0 flex-row sm:flex-row md:flex-col lg:flex-col">
                <div className="flex flex-grow sm:flex-grow md:flex-grow lg:flex-grow-0 justify-center sm:justify-center md:justify-center lg:justify-end">
                  <a className="font-sans text-sm sm:text-1xl md:text-1xl lg:text-2xl font-light text-gray-600" href="https://www.google.com/maps/search/Porto,%20Portugal?hl=en&source=opensearch" target="_blank" rel="noreferrer"> 🌍 Porto, Portugal</a>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-grow-0 justify-center sm:justify-center md:justify-center lg:justify-end pr-2 sm:pr-2 md:pr-2 lg:pr-2">
            <a className="font-sans text-sm sm:text-1xl md:text-1xl lg:text-2xl font-light text-gray-600" href="mailto:ps.junior94@gmail.com">📥 ps.junior94@gmail.com</a>
          </div>
          <div className="flex flex-grow-0 justify-center sm:justify-center md:justify-center lg:justify-end pr-2 sm:pr-2 md:pr-2 lg:pr-2">
            <a className="font-sans text-sm sm:text-1xl md:text-1xl lg:text-2xl font-light text-gray-600" href="https://wa.me/+351912583618" target="_blank" rel="noreferrer">📱 +351 912 583 618</a>
          </div>
        </div>
      </div>
    </div>

  );
}

export default App;
