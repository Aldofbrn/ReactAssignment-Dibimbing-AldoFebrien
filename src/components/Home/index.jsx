import React from 'react';
import HomeImg from '../../assets/coffee2.png';

const Home = () => {
  return (
    <div className="min-h-[550px] sm:min-h-[600px] bg-tertiary flex justify-center items-center text-white">
      <div className="container pb-8 sm:pb-0">
        <div className="grid grid-cols-1 sm:grid-cols-2">
          {/* Text Section */}
          <div className="flex flex-col justify-center order-2 sm:order-1 gap-6">
            <h1
              data-aos="fade-up"
              data-aos-once="true"
              className="text-5xl sm:text-6xl lg:text-7xl font-bold "
            >
              Indulge in the City’s Finest{' '}
              <span
                data-aos="zoom-out"
                data-aos-delay="300"
                className="text-primary"
              >
                Coffee
              </span>{' '}
              Experience😉
            </h1>
            <div data-aos="fade-up" data-aos-delay="400">
              <button className="transition ease-in-out shadow-md font-semibold bg-primary rounded-full px-4 py-2 text-white hover:scale-105 hover:bg-secondary duration-300 ">
                Start Brewing
              </button>
            </div>
          </div>
          {/* Image Section */}
          <div
            data-aos="zoom-in"
            data-aos-duration="300"
            className="min-h-[450px] flex justify-center items-center order-1 sm:order-2 relative"
          >
            <img
              data-aos-once="true"
              src={HomeImg}
              alt=""
              className="w-[300px] sm:w-[450px] sm:scale-110 m-auto spin"
            />
            <div
              data-aos="fade-left"
              className="bg-primary absolute top-10 left-10 p-3 rounded-xl"
            >
              <h1>Hey Coffe Lover 😄</h1>
            </div>
            <div
              data-aos="fade-right"
              data-aos-offset="0"
              className="bg-primary absolute bottom-10 right-10 p-3 rounded-xl"
            >
              <h1>Best Coffee! ☕</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
