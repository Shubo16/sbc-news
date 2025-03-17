import { useState } from "react";
import { ToastContainer, toast, Bounce } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const NewsLetter = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
  });
  const [isEmailValid, setIsEmailValid] = useState();

  const successFullNotify = () => {
    toast.success("Check Your Inbox:3", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      transition:"slide",
      bodyStyle: {
        backgroundColor: "cherry",
      },
    });
  };

  const errorNotify = () => {
    toast.error("Watch what you're typing:/", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      // bodyStyle: {
      //   backgroundColor: "#00a86b",
      //   color:"#00000"
      // },
    });
  };

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.email === "" || !/\S+@\S+\.\S+/.test(formData.email)) {
      setIsEmailValid(false);
      errorNotify();
    } else {
      setIsEmailValid(true);
      successFullNotify();
    }
    console.log("Form Data Submitted:", formData);
    // Add API call or further processing logic here
  };

  return (
    <main className="h-60 my-5 py-10 w-screen flex-col justify-center items-center bg-white gap-10 border-t-4 border-black ">
      <div className="text-center text-lg font-bold font-poppins">
        <h2 className="capitalize">Be the first to see the latest news!</h2>
        <h3 className="italic font-tinos">Sign up for our newsletter!</h3>
      </div>
      <form
        onSubmit={handleSubmit}
        className="flex flex-wrap md:flex-nowrap gap-6 my-5 justify-center p-4 text-center items-center"
      >
        {/* Full Name Input */}
        <label className="flex flex-col md:flex-row items-center gap-2">
          Full Name:
          <input
            type="text"
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
            className="rounded-md p-2 border-b-4 border-b-cherry placeholder-black w-full md:w-64 focus:placeholder-white"
            placeholder="Enter your full name"
          />
        </label>

        {/* Email Input */}
        <label className="flex flex-col md:flex-row items-center gap-2">
          Email:
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="rounded-md p-2 border-b-4 border-b-cherry placeholder-black w-full md:w-64 focus:placeholder-white"
            placeholder="Enter your email"
          />
        </label>

        {/* Submit Button */}
        <button
          onSubmit={handleSubmit}
          type="submit"
          className="bg-cherry text-white rounded-md py-2 px-6 hover:bg-red-400 hover:delay-150 hover:ease-in"
        >
          Subscribe:)
        </button>
      </form>
      <ToastContainer
        limit={1}
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        transition:Bounce
      />
    </main>
  );
};
