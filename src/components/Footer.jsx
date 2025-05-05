import React from 'react';
import { FaPhoneAlt } from 'react-icons/fa';
import { MdOutlineAttachEmail } from 'react-icons/md';

const Footer = () => {
  return (
    <footer className="bg-black text-white py-12 px-6 md:px-16">
      <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-6 gap-8 text-sm">
        <div>
          <h3 className="text-lg font-semibold mb-4">PRODUCTS</h3>
          <ul className="space-y-2">
            <li className="hover:text-yellow-200">Two Wheeler Batteries</li>
            <li className="hover:text-yellow-200">Car Batteries</li>
            <li className="hover:text-yellow-200">Tractor Batteries</li>
            <li className="hover:text-yellow-200">Rickshaw Batteries</li>
            <li className="hover:text-yellow-200">Inverter Batteries</li>
            <li className="hover:text-yellow-200">Genset Batteries</li>
            <li className="hover:text-yellow-200">Industrial Batteries</li>
            <li className="hover:text-yellow-200">Inverter System</li>
          </ul>
        </div>
        <div>
          <h3 className="text-lg font-semibold mb-4">BATTERY GUIDE</h3>
          <ul className="space-y-2">
            <li className="hover:text-yellow-200">Battery Maintenance</li>
            <li className="hover:text-yellow-200">Lead Acid Batteries</li>
            <li className="hover:text-yellow-200">VRLA Batteries</li>
          </ul>
        </div>
        <div>
          <h3 className="text-lg font-semibold mb-4">HELP & SUPPORT</h3>
          <ul className="space-y-2">
            <li className="hover:text-yellow-200">Customer Support</li>
            <li className="hover:text-yellow-200">Register Complaint</li>
            <li className="hover:text-yellow-200">Product Enquiry</li>
            <li className="hover:text-yellow-200">Partner Enquiry</li>
            <li className="hover:text-yellow-200">Dealer Locator</li>
            <li className="hover:text-yellow-200">Open a Franchise</li>
            <li className="hover:text-yellow-200">Battery Finder</li>
          </ul>
        </div>
        <div>
          <h3 className="text-lg font-semibold mb-4">USEFUL LINKS</h3>
          <ul className="space-y-2">
            <li className="hover:text-yellow-200">Warranty Registration</li>
            <li className="hover:text-yellow-200">Privacy Policy</li>
            <li className="hover:text-yellow-200">Shipping & Returns Policy</li>
            <li className="hover:text-yellow-200">CSR Policy</li>
            <li className="hover:text-yellow-200">Whistleblower Policy</li>
          </ul>
        </div>
        <div>
          <h3 className="text-lg font-semibold mb-4">LEARN</h3>
          <ul className="space-y-2">
            <li className="hover:text-yellow-200">About Us</li>
            <li className="hover:text-yellow-200">Know Your Battery</li>
            <li className="hover:text-yellow-200">Our Blogs</li>
            <li className="hover:text-yellow-200">News & Media</li>
            <li className="hover:text-yellow-200">Careers</li>
            <li className="hover:text-yellow-200">FAQs</li>
          </ul>
        </div>
        <div>
  <h3 className="text-lg font-semibold mb-4">CONTACT</h3>
  <div className="flex items-center gap-2">
    <FaPhoneAlt className="text-white" />
    <span className="hover:text-yellow-200">98429 98444</span>
  </div>
  <div className="flex items-center  pt-3">
    <MdOutlineAttachEmail className="text-white" />
    <span className="hover:text-yellow-200">sakthibatteryworks@gmail.com</span>
  </div>
</div>

      </div>
    </footer>
  );
};

export default Footer;
