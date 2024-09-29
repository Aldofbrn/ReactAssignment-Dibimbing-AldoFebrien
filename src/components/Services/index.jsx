import React from 'react';

const Services = ({ Services }) => {
  return (
    <>
      <span id="services"></span>
      <div className="py-10">
        <div className="container">
          {/* Header Title */}
          <div className="text-center mb-20">
            <h1 className="text-4xl font-bold font-cursive text-secondary pb-8">
              Sip the Flavor, Savor the Moment
            </h1>
            <p className="text-sm text-gray-500">
              Where Every Cup Tells a Story. Each brew is a unique blend of
              aromas and tastes, inviting you to indulge in the experience.
              Whether it’s the rich depth of espresso, the smoothness of an
              Americano, or the frothy delight of a cappuccino, every sip
              transports you to a world of flavor. Embrace the journey with each
              cup and make every moment memorable.
              <br />
              <br />
              <span className="font-bold text-black">-KopiKu</span>
            </p>
          </div>
          {/* Service Card Section */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-14 md:gap-5 place-items-center">
            {Services.map((data, index) => {
              return (
                <div
                  data-aos="fade-up"
                  data-aos-delay={data.aosDelay}
                  key={index}
                  className="rounded-2xl bg-white hover:bg-primary hover:text-white shadow-xl duration-high max-w-[300px] group relative"
                >
                  {/* Image Section */}
                  <div className="h-[122px]">
                    <img
                      src={data.img}
                      alt=""
                      className="max-w-[200px] block mx-auto transform -translate-y-14 group-hover:scale-105 group-hover:rotate-6 duration-300"
                    />
                  </div>
                  {/* Text Content */}
                  <div className="p-4 text-center">
                    <h1 className="text-xl font-bold">{data.name}</h1>
                    <p className="text-gray-500 group-hover:text-white duration-300 text-sm line-clamp-2">
                      {data.description}
                    </p>
                  </div>
                </div>
              );
            })}
            <div></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Services;
