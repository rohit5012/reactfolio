import React from "react";

const Contact = () => {
  return (
    <div>
      <div
        name="contact"
        className="h-screen p-24 bg-gradient-to-b from-gray-800 to-black w-full"
      >
        <div>
          <p className="flex justify-center text-xl md:text-4xl font-medium text-white">
            Contact
          </p>
          <p className="py-3 text-lg md:text-xl lg:text-2xl flex justify-center text-white">
            Submit the form below to get in touch with me
          </p>
          <hr className="border-1 my-4"></hr>
        </div>

        <div className="flex justify-center items-center pt-8">
          <form
            action="https://getform.io/f/pboxyvna"
            method="POST"
            className="flex flex-col w-full md:w-1/2 "
          >
            <input
              type="text"
              name="name"
              placeholder="Enter your name"
              className="p-2 border-2 rounded-md focus:outline-none"
            />
            <input
              type="text"
              name="email"
              placeholder="Enter your email"
              className="p-2 border-2 rounded-md focus:outline-none my-4"
            />
            <textarea
              name="message"
              placeholder="Enter your message"
              rows="10"
              className="p-2 border-2 rounded-md focus:outline-none"
            />
            <button className="text-white mx-auto bg-gradient-to-b from-cyan-300 to-blue-500 px-6 py-3 my-8 text-md lg:text-lg">
              Connect
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
