import React from 'react';
import Navbar from "../components/Navbar";
import about1 from "../assets/about1.jpg";
import about2 from "../assets/about2.png";
import bg from "../assets/img2.jpg";
import Footer from "../components/Footer"
// import MapComponent from '../components/MapComponent';
const About = () => {
  return (
    <div>
       <Navbar />
    <div className="relative min-h-screen rounded-2xl overflow-hidden">

      <div
        className="absolute inset-0 bg-cover bg-center z-0"
        style={{
          backgroundImage: `url(${bg})`,
          opacity: 0.3,
        }}
      ></div>
      <div className="relative z-10 p-5 flex flex-col items-center justify-center min-h-screen">
        <div className="flex flex-col sm:flex-row items-center gap-10 bg-white/80 p-6 rounded-xl shadow-xl">
          <div className="text-center">
            <img src={about1} alt="Kasi Lingam" className="w-64 rounded-lg" />
            <h1 className="text-xl font-semibold mt-2">Kasi Lingam</h1>
          </div>
          <div className="text-center">
            <img src={about2} alt="Sakthivel K" className="w-40 h-40 rounded-full mx-auto" />
            <h1 className="text-xl font-semibold mt-2">Sakthivel K (B.Tech)</h1>
          </div>

        </div>
        <div className="bg-white w-4/5 rounded-lg shadow-lg p-6 mt-10">
          <p>Sakthi Batteries is a reliable provider of high-quality energy storage solutions, offering a wide range of batteries for inverters, vehicles, and solar power systems. Known for its exceptional service and genuine products, Sakthi Batteries is an authorized dealer of top brands like Exide, Amaron, and Luminous. With a strong focus on customer satisfaction, the company provides fast doorstep delivery, professional installation, free battery checkups, and eco-friendly battery recycling options. Backed by skilled technicians and 24/7 support, Sakthi Batteries aims to power homes, businesses, and vehicles with efficiency, reliability, and trust.</p>
        </div>
        {/* <div>
        <MapComponent/>

        </div> */}


      </div>

    </div>
    <Footer />
  </div>
  );
};

export default About;
