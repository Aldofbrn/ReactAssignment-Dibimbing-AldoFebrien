import React from 'react';
import { FaFacebook, FaInstagram, FaLinkedin } from 'react-icons/fa6';
import FooterBg from '../../assets/website/coffee-footer.jpg';

const bgImage = {
  backgroundImage: `url(${FooterBg})`,
  backgroundPosition: 'center',
  backgroundRepeat: 'no-repeat',
  backgroundSize: 'cover',
  minHeight: '400px',
  width: '100%',
};

const Footer = ({ Footers }) => {
  return (
    <div style={bgImage} className="text-white">
      <div className="bg-black/40 min-h-[400px]">
        <div className="container grid md:grid-cols-3 pb-20 pt-5">
          {/* Company Details */}
          <div className="py-8 px-4">
            <a href="#" className="font-semibold text-2xl sm:text-3xl ">
              KopiKu
            </a>
            <p className="pt-4 ">
              {''}
              Brewing Happiness, One Cup at a Time – Your Cozy Coffee Retreat
              Awaits.
            </p>
            <a
              href="https://www.tiktok.com/en/"
              target="_blank"
              className="inline-block bg-tertiary py-2 px-4 mt-5 text-sm font-semibold text-secondary rounded-full"
            >
              Visit our Tiktok Account
            </a>
          </div>
          {/* Footer Links */}
          <div className="col-span-2 grid grid-cols-2 sm:grid-cols-3 md:pl-10">
            {/* First Column Links */}
            <div className="py-8 px-4">
              <h1 className="text-xl font-semibold sm:text-left mb-3">
                Main Links
              </h1>
              <ul className="space-y-3">
                {Footers.map((footer, index) => (
                  <li key={index}>
                    <a
                      href={footer.link}
                      className="inline-block hover:scale-105 duration-200"
                    >
                      {footer.title}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            {/* Second Column Links */}
            <div className="py-8 px-4">
              <h1 className="text-xl font-semibold sm:text-left mb-3">
                Quick Links
              </h1>
              <ul className="space-y-3">
                {Footers.map((footer, index) => (
                  <li key={index}>
                    <a
                      href={footer.link}
                      className="inline-block hover:scale-105 duration-200"
                    >
                      {footer.title}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            {/* CoffeShop Address section */}
            <div className="py-8 px-4 col-span-2 sm:col-auto">
              <h1 className="text-xl font-semibold sm:text-left mb-3">
                Visit our CoffeeShop
              </h1>
              <div>
                <p className="mb-3">
                  123 Brew Street, Coffeeville, Beanland, 56789
                </p>
                <p>(555) 123-4567</p>

                {/* social links */}
                <div className="flex items-center gap-3 mt-6">
                  <a href="#">
                    <FaInstagram className="text-3xl hover:text-secondary hover:scale-105 duration-300" />
                  </a>
                  <a href="#">
                    <FaFacebook className="text-3xl hover:text-secondary hover:scale-105 duration-200" />
                  </a>
                  <a href="#">
                    <FaLinkedin className="text-3xl hover:text-secondary hover:scale-105 duration-200" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
