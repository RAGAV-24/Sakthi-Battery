// CustomerSupport.js
import React from 'react';
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import bg from "../assets/img2.jpg";
const Support = () => {
  return (
    <div>
      <Navbar />
    <div className="min-h-screen bg-gray-100 ">

      <div className="relative min-h-screen rounded-2xl overflow-hidden">       <div
              className="absolute inset-0 bg-cover bg-center z-0"
              style={{
                backgroundImage: `url(${bg})`,
                opacity: 0.3,
              }}
            ></div>
      <div className="max-w-5xl mx-auto bg-white shadow-lg rounded-2xl p-8">
        <h1 className="text-3xl font-bold text-blue-800 mb-6 text-center">Sakthi Batteries - Customer Support & Help</h1>

        <section className="mb-8">
          <h2 className="text-xl font-semibold text-gray-800 mb-2">📞 Contact Us</h2>
          <p><strong>Phone:</strong> +91-XXXXXXXXXX</p>
          <p><strong>Email:</strong> <a href="mailto:support@sakthibatteries.com" className="text-blue-600">support@sakthibatteries.com</a></p>
          <p><strong>Support Hours:</strong> Mon - Sat, 9:00 AM - 6:00 PM IST</p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold text-gray-800 mb-2">🔧 Common Support Topics</h2>
          <ul className="list-disc list-inside space-y-1 text-gray-700">
            <li><strong>Product Support:</strong> Installation, maintenance, troubleshooting</li>
            <li><strong>Order & Delivery:</strong> Tracking, shipping, returns</li>
            <li><strong>Warranty & Service:</strong> Registration, claims, service centers</li>
            <li><strong>Payments:</strong> Payment options, invoices, refunds</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold text-gray-800 mb-2">🧾 Warranty Registration</h2>
          <p className="text-gray-700">Register your battery to activate the warranty.</p>
          <a href="#" className="text-blue-600 underline">Register Your Battery</a>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold text-gray-800 mb-2">📍 Find a Service Center</h2>
          <p className="text-gray-700">Locate your nearest authorized service center.</p>
          <a href="#" className="text-blue-600 underline">Find a Center</a>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold text-gray-800 mb-2">💡 Frequently Asked Questions</h2>
          <div className="text-gray-700 space-y-2">
            <p><strong>Q:</strong> How long is the warranty period?</p>
            <p><strong>A:</strong> Most batteries come with a 36-month warranty. Refer to your invoice.</p>

            <p><strong>Q:</strong> What should I do if my battery won’t charge?</p>
            <p><strong>A:</strong> Try troubleshooting or contact customer support.</p>

            <p><strong>Q:</strong> Can I return a battery?</p>
            <p><strong>A:</strong> Yes, within 7 days if unused and in original packaging.</p>

            <a href="#" className="text-blue-600 underline">Read More FAQs</a>
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold text-gray-800 mb-2">📝 Submit a Request</h2>
          <p className="text-gray-700">Can’t find what you're looking for?</p>
          <a href="#" className="text-blue-600 underline">Submit a Support Request</a>
        </section>

        <section className="text-center">
          <h2 className="text-xl font-semibold text-gray-800 mb-2">🌐 Follow Us</h2>
          <div className="flex justify-center gap-4 text-blue-600">
            <a href="#">Facebook</a>
            <a href="#">Instagram</a>
            <a href="#">Google Maps</a>
          </div>
        </section>
      </div>
      </div>

      <Footer />
    </div>
    </div>
  );
};

export default Support;
