import React, { useState } from "react";

const TeacherRegister = () => {
  const [src, setSrc] = useState("/images/Blank.png");
  const [imgClass, setImgClass] = useState("mt-3");
  const [register, setRegister] = useState({name:"",email:"", phone:"", gender:"", password:"",cpassword:""})
  const [files, setFiles] = useState("")

let name, value;

  const handleChange = (event) => {
    name = event.target.name;
    value = event.target.value;
    setRegister({...register, [name]:value });
  }

  const setImgFiles = (event) => {
    if (event.target.files && event.target.files[0]) {
      setSrc(URL.createObjectURL(event.target.files[0]));
      setImgClass("w-full h-full");
    }
    setFiles(event.target.files[0]);
  }

  const handleFormData = (event) =>{
      event.preventDefault();
  }

  return (
    <>
      <div className="flex justify-center items-center transition-all duration-1000 ">
        <div className="rounded-md p-10  shadow-lg dark:bg-green-900 mt-4 bg-green-100">
          <form method="post" className="flex flex-col" onSubmit={handleFormData}>
            <div className="flex">
              <div className="mt-[23px]">
                <div className="relative">
                  <div className="relative mb-6 ">
                    <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                      <i className="fa-solid fa-user  text-green-400"></i>
                    </div>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      className="text-green-800 text-sm focus:border-b-4 transition-all duration-300 border-b-2 border-green-300 bg-green-100 block w-full pl-10 p-2.5  dark:placeholder:text-green-300 dark:bg-green-900 dark:text-green-200 outline-none"
                      placeholder="Your Name"
                      autoComplete="off"
                      value={register.name}
                      onChange={handleChange}
                    />
                  </div>
                </div>
                <div className="relative">
                  <div className="relative mb-6 ">
                    <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                      <i className="fa-solid fa-envelope  text-green-400"></i>
                    </div>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      className="text-green-800 text-sm focus:border-b-4 transition-all duration-300 border-b-2 border-green-300 bg-green-100 block w-full pl-10 p-2.5  dark:placeholder:text-green-300 dark:bg-green-900 dark:text-green-200 outline-none"
                      placeholder="Your Email"
                      autoComplete="off"
                      value={register.email}
                      onChange={handleChange}
                    />
                  </div>
                </div>
                <div className="relative">
                  <div className="relative mb-6 ">
                    <div className="text-xl absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                      <i className="fa-solid fa-phone  text-green-400"></i>
                    </div>
                    <input
                      type="number"
                      id="phone"
                      name="phone"
                      className="text-green-800 text-sm focus:border-b-4 transition-all duration-300 border-b-2 border-green-300 bg-green-100 block w-full pl-10 p-2.5  dark:placeholder:text-green-300 dark:bg-green-900 dark:text-green-200 outline-none"
                      placeholder="Your Number"
                      autoComplete="off"
                      value={register.phone}
                      onChange={handleChange}
                    />
                  </div>
                </div>
                <div className="relative mt-6 flex flex-col">
                  <label
                    htmlFor="gender"
                    className="text-gray-600 dark:text-green-100"
                  >
                    Your Gender
                  </label>
                  <div className="flex">
                    <div className="flex items-center mr-4 mt-2">
                      <input
                        id="male"
                        type="radio"
                        value="male"
                        name="gender"
                        onChange={handleChange}
                        className="w-4 h-4 dark:accent-green-300 text-blue-600 accent-green-700 bg-gray-100 border-gray-300   dark:ring-offset-gray-800  dark:bg-gray-700 dark:border-gray-600"
                        required
                      />
                      <label
                        htmlFor="male"
                        className="ml-2 mt-1 text-sm font-medium text-gray-600 select-none  dark:text-green-100"
                      >
                        Male
                      </label>
                    </div>
                    <div className="flex items-center mr-4 mt-2">
                      <input
                        id="female"
                        type="radio"
                        value="female"
                        name="gender"
                        onChange={handleChange}
                        className=" dark:accent-green-300 w-4 h-4 accent-green-700 text-blue-600 bg-gray-100 border-gray-300   dark:ring-offset-gray-800  dark:bg-gray-700 dark:border-gray-600"
                        required
                      />
                      <label
                        htmlFor="female"
                        className="ml-2 mt-1 text-sm font-medium text-gray-600 select-none dark:text-green-100"
                      >
                        Female
                      </label>
                    </div>
                    <div className="flex items-center mr-4 mt-2">
                      <input
                        id="other"
                        type="radio"
                        value="other"
                        name="gender"
                        onChange={handleChange}
                        className="w-4 h-4 rounded-full dark:accent-green-300 accent-green-700 text-blue-600 bg-gray-100 border-gray-300   dark:ring-offset-gray-800  dark:bg-gray-700 dark:border-gray-600"
                        required
                      />
                      <label
                        htmlFor="other"
                        className="ml-2 mt-1 text-sm font-medium text-gray-600 select-none dark:text-green-100"
                      >
                        Other
                      </label>
                    </div>
                  </div>
                </div>
                <div className="relative mt-4">
                  <div className="relative mb-6">
                    <div className="text-xl absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                      <i className="fa-solid fa-lock text-green-400"></i>
                    </div>
                    <input
                      type="password"
                      id="password"
                      name="password"
                      className="text-green-800 text-sm focus:border-b-4 transition-all duration-300 border-b-2 border-green-300 bg-green-100 block w-full pl-10 p-2.5  dark:placeholder:text-green-300 dark:bg-green-900 dark:text-green-200 outline-none"
                      placeholder="Create Your Password"
                      value={register.password}
                      onChange={handleChange}
                      autoComplete="off"
                    />
                  </div>
                </div>
                <div className="relative">
                  <div className="relative mb-6 ">
                    <div className="text-xl absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                      <i className="fa-solid fa-key text-green-400"></i>
                    </div>
                    <input
                      type="password"
                      id="cpassword"
                      name="cpassword"
                      className="text-green-800 text-sm focus:border-b-4 transition-all duration-300 border-b-2 border-green-300 bg-green-100 block w-full pl-10 p-2.5   dark:placeholder:text-green-300 dark:bg-green-900 dark:text-green-200 outline-none"
                      placeholder="Confirm Your Password"
                      autoComplete="off"
                      value={register.cpassword}
                      onChange={handleChange}
                    />
                  </div>
                </div>
              </div>
              <div className="rounded-2xl flex items-center   justify-center flex-col ml-12 shadow-md bg-white dark:bg-slate-600 p-5 w-[250px] h-[350px] mt-[40px]">
                <div className="border-4 overflow-hidden w-[10rem] h-[10rem] rounded-full  shadow-3xl border-green-300">
                  <img src={src} alt="..." className={imgClass} />
                </div>
                <label
                  htmlFor="img"
                  className="mt-5 border-2 cursor-pointer dark:border-white dark:hover:text-black dark:hover:bg-white border-black p-2 hover:bg-black transition-all rounded-lg hover:text-white"
                >
                  SET PROFILE
                </label>
                <input
                  type="file"
                  id="img"
                  onChange={setImgFiles}
                  className="hidden"
                  accept="image/*"
                  name="file"
                />
              </div>
            </div>
            <div className="mt-12 flex justify-evenly items-center">
              <button
                type="submit"
                className="font-bold font-Garamond text-lg text-black border-2 border-green-700 uppercase rounded cursor-pointer hover:bg-green-300 hover:text-green-500 transition-all duration-300 dark:text-white bg-transparent p-2 px-5"
              >
                REGISTER
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default TeacherRegister;
