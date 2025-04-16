import React from 'react';
import bg from '../assets/img.jpg';
import img1 from '../assets/img2.jpg';
import img2 from '../assets/img3.jpg';
import img3 from '../assets/img1.jpg';
import img4 from '../assets/img2.jpg';

const Comp1 = () => {
  return (
    <div className="relative w-full min-h-screen flex items-center justify-center px-4 py-12">
  {/* Background image with reduced opacity */}
  <div
    className="absolute inset-0 bg-cover bg-center"
    style={{
      backgroundImage: `url(${bg})`,
      opacity: 0.2,
      zIndex: 0,
    }}
  ></div>
      <div className="bg-white bg-opacity-50  p-6 md:p-10 rounded-lg shadow-lg max-w-5xl w-full space-y-10 font-bold">
        <h2 className="text-3xl font-bold text-center text-black">Our Services</h2>

        <div className="flex flex-col md:flex-row items-center md:space-x-6 space-y-4 md:space-y-0">
          <img src={img1} alt="Battery Service" className="w-full md:w-1/3 rounded-lg shadow" />
          <div className="text-black">
            <h3 className="text-xl font-bold mb-2">Get your vehicle powered up with ease!</h3>
            <p>
              We offer free battery fitting with every battery purchase—no hidden charges, no extra fees.
              Just quality service and a smooth ride, all on us! Our experts ensure quick and professional
              installation, saving you time and hassle. Whether it's your car, bike, or commercial vehicle—we've got you covered.
              Drive in today and leave fully charged!
            </p>
          </div>
        </div>

        {/* Second Block */}
        <div className="flex flex-col md:flex-row items-center md:space-x-6 space-y-4 md:space-y-0">
          <div className="text-black p-4 rounded-md shadow bg-white bg-opacity-70">
            <h3 className="text-xl font-bold mb-2">We believe great service makes all the difference.</h3>
            <p>
              Our friendly team is always ready to help with a smile and expert support.
              From the moment you arrive, you're treated like family because your experience matters to us.
            </p>
          </div>
          <img src={img2} alt="Customer Support" className="w-full md:w-1/3 rounded-lg shadow" />
        </div>

        {/* Third Block */}
        <div className="flex flex-col md:flex-row items-center md:space-x-6 space-y-4 md:space-y-0">
          <img src={img3} alt="Health Check" className="w-full md:w-1/3 rounded-lg shadow" />
          <div className="text-black">
            <h3 className="text-xl font-bold mb-2">Multi-point Vehicle Health Check</h3>
            <p>
              Ensure your vehicle's performance and safety with our comprehensive multi-point health check.
              From tire pressure to engine diagnostics, we cover it all—giving you peace of mind before every drive.
            </p>
          </div>
        </div>

        {/* Fourth Block */}
        <div className="flex flex-col md:flex-row items-center md:space-x-6 space-y-4 md:space-y-0">
          <div className="text-black p-4 rounded-md shadow bg-white bg-opacity-70">
            <h3 className="text-xl font-bold mb-2">24/7 Emergency Support</h3>
            <p>
              Stuck in the middle of nowhere? Don’t worry! Our 24/7 emergency support team is just a call away—
              ready to assist you anytime, anywhere. Your safety and convenience are our priority.
            </p>
          </div>
          <img src={img4} alt="Emergency Support" className="w-full md:w-1/3 rounded-lg shadow" />
        </div>
      </div>
    </div>
  );
};

export default Comp1;
