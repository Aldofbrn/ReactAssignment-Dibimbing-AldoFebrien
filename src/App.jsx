import { useEffect } from 'react';
import React from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Services from './components/Services';
import Banner from './components/Banner';
import AppStore from './components/AppStore';
import Testimonial from './components/Testimonial';
import Footer from './components/Footer';
import Img2 from './assets/coffee2.png';

const App = () => {
  const Menus = [
    {
      id: 1,
      name: 'Home',
      link: '/#',
    },
    {
      id: 2,
      name: 'Services',
      link: '/#services',
    },
    {
      id: 3,
      name: 'About',
      link: '/#about',
    },
  ];

  const ServicesData = [
    {
      id: 1,
      img: Img2,
      name: 'Espresso',
      description: 'A bold shot of pure energy, crafted to awaken your senses.',
      aosDelay: '100',
    },
    {
      id: 2,
      img: Img2,
      name: 'Americano',
      description:
        'Smooth and balanced, perfect for when you need a little extra kick in your day.',
      aosDelay: '300',
    },
    {
      id: 3,
      img: Img2,
      name: 'Cappuccino',
      description:
        'Velvety foam meets rich espresso for a creamy, comforting sip every time.',
      aosDelay: '500',
    },
  ];

  const TestimonialData = [
    {
      id: 1,
      name: 'Elliot Watson',
      text: "Kopiku never disappoints! The coffee is always fresh, rich, and perfectly brewed. It's become my daily go-to for a pick-me-up!",
      img: 'https://picsum.photos/101/101',
    },
    {
      id: 2,
      name: 'John Legend',
      text: 'I love the cozy vibe at Kopiku! Their cappuccino is my favorite—smooth, creamy, and full of flavor. Definitely the best in town!',
      img: 'https://picsum.photos/102/102',
    },
    {
      id: 3,
      name: 'Sombra Kurhua',
      text: "Kopiku's coffee is on another level. You can really taste the quality in every cup. Plus, their customer service is top-notch!",
      img: 'https://picsum.photos/104/104',
    },
    {
      id: 5,
      name: 'Jessica Grassfield',
      text: "Amazing coffee and even better atmosphere! Whether you're grabbing a quick coffee or sitting down to relax, Kopiku is the place to be.",
      img: 'https://picsum.photos/103/103',
    },
  ];

  const FooterLinks = [
    {
      title: 'Home',
      link: '/#',
    },
    {
      title: 'About',
      link: '/#about',
    },
    {
      title: 'Contact',
      link: '/#contact',
    },
    {
      title: 'Blog',
      link: '/#blog',
    },
  ];

  useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 700,
      easing: 'ease-in',
      delay: 100,
    });
  });
  return (
    <div className="overflow-x-hidden">
      <Navbar Menus={Menus} />
      <Home />
      <Services Services={ServicesData} />
      <Banner />
      <AppStore />
      <Testimonial Testimonials={TestimonialData} />
      <Footer Footers={FooterLinks} />
    </div>
  );
};

export default App;
