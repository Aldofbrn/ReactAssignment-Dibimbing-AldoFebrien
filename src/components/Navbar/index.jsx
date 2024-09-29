import React from 'react';
import { FaCoffee } from 'react-icons/fa';

const Navbar = ({ Menus }) => {
  return (
    <div className="bg-gradient-to-r from-secondary to-secondary/90 text-white">
      <div className="container py-2">
        <div className="flex justify-between items-center gap-4">
          {/* logo section */}
          <div data-aos="fade-down" data-aos-once="true">
            <a
              href="#"
              className="text-2xl sm:text-3xl font-semibold flex justify-center items-center tracking-wide"
            >
              KopiKu
            </a>
          </div>

          {/* Links section */}
          <div
            data-aos="fade-down"
            data-aos-once="true"
            data-aos-delay="300"
            className="flex justify-between items-center gap-4"
          >
            <ul className="hidden sm:flex items-center gap-4">
              {Menus.map((menu, index) => (
                <li key={index}>
                  <a
                    href={menu.link}
                    className="inline-block text-lg py-4 px-4 text-white/70 hover:text-white duration-200"
                  >
                    {menu.name}
                  </a>
                </li>
              ))}
            </ul>
            <button className="bg-primary/70 px-4 py-2 rounded-full hover:scale-105 duration-300 flex items-center gap-3">
              Order
              <FaCoffee className="text-xl cursor-pointer" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
