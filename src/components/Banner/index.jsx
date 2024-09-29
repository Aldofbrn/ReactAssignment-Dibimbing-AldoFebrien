import React from 'react';
import BannerImg from '../../assets/coffee-white.png';
import BgTexture from '../../assets/website/coffee-texture.jpg';
import { GrSecure } from 'react-icons/gr';
import { IoFastFood } from 'react-icons/io5';
import { GiFoodTruck } from 'react-icons/gi';

const bgImage = {
  backgroundImage: `url(${BgTexture})`,
  backgroundColor: '#270c03',
  backgroundPosition: 'center',
  backgroundRepeat: 'no-repeat',
  backgroundSize: 'cover',
  height: '100%',
  width: '100%',
};

const Banner = () => {
  return (
    <>
      <div style={bgImage}>
        <div className="container min-h-[500px] flex justify-center items-center py-12  sm:py-0">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {/* Image Section */}
            <div data-aos="zoom-in">
              <img
                src={BannerImg}
                alt=""
                className="max-w-[430px] w-full mx-auto drop-shadow-xl spin"
              />
            </div>
            {/* Text Content Section */}
            <div className="flex flex-col text-secondary justify-center gap-6 sm:pt-0">
              <h1
                data-aos="fade-up"
                className="text-3xl sm:text-4xl font-bold font-cursive"
              >
                Elevate your{' '}
                <span className="text-primary">Coffee Experience</span>
              </h1>
              <p
                data-aos="fade-up"
                className="text-sm text-gray-500 tracking-wide leading-5"
              >
                Discover the perfect blend of craftsmanship and flavor in every
                cup. From rich, aromatic brews to expertly crafted blends, we’re
                here to elevate your daily coffee ritual. Savor the experience,
                one sip at a time.
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div className="space-y-5">
                  <div data-aos="fade-up" className="flex items-center gap-3">
                    <GrSecure className="text-2xl h-12 w-12 shadow-sm p-3 rounded-full bg-red-100" />
                    <span>Premium Coffee</span>
                  </div>
                  <div
                    data-aos="fade-up"
                    data-aos-delay="300"
                    className="flex items-center gap-3"
                  >
                    <IoFastFood className="text-2xl h-12 w-12 shadow-sm p-3 rounded-full bg-orange-100" />
                    <span>Fast, fresh coffee!</span>
                  </div>
                  <div
                    data-aos="fade-up"
                    data-aos-delay="500"
                    className="flex items-center gap-3"
                  >
                    <GiFoodTruck className="text-2xl h-12 w-12 shadow-sm p-3 rounded-full bg-yellow-100" />
                    <span>Premium coffee on wheels!</span>
                  </div>
                </div>
                <div
                  data-aos="slide-left"
                  className="border-l-4 border-secondary/50 pl-6 space-y-3"
                >
                  <h1 className="text-2xl text-secondary font-bold">
                    Coffee Lover{' '}
                  </h1>
                  <p className="text-gray-500 text-sm">
                    Much like crafting code, brewing the perfect cup of coffee
                    takes patience, precision, and passion to create a rich and
                    satisfying flavor. Every step, from selecting the beans to
                    the final pour, is a journey in itself.
                    <br />
                    <br />
                    <span className="font-bold text-black">-KopiKu</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Banner;
