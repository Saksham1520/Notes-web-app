import React from "react";
import book8 from "../assets/book8.png";
import { Link } from "react-router-dom";

function Home() {
  return (
    <>
      <div className=" font-[poppins]  max-w-screen-xl container mx-auto md:px-10 px-4  flex flex-col items-center mt-[40px] md:flex-row  md:mt-1 md:h-[550px]  ">
        {/* left div */}
        <div className="w-full md:w-1/2 space-y-8 ">
          <h1 className="text-3xl font-bold">My Notes App</h1>
          <p className="text-xl">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officia
            nulla reprehenderit voluptates non veniam, earum eligendi optio
            obcaecati nostrum delectus labore voluptatibus, aliquid, atque illum
            asperiores consectetur quam aperiam recusandae.
          </p>
          <div className="space-x-2">
            {" "}
            <button className="bg-blue-700 px-8 py-4 rounded-md text-white ">
              <Link to="/login">Login</Link>
            </button>
            <button className="bg-blue-700 px-8 py-4 rounded-md text-white ">
              <Link to="/signup">Signup</Link>
            </button>
          </div>
        </div>
        {/* Right div */}
        <div className="w-full md:w-1/2  mt-12 md:ml-[28px]">
          <img className="" src={book8} alt="" />
        </div>
      </div>
      {/* <div className="font-[poppins]  max-w-screen-xl container mx-auto md:px-10 px-4  mt-[1px] ">
        <h2 className="text-xl font-bold">Free Offered Courses</h2>
        <p className="text-[17px]">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis
          delectus deleniti, ipsum, ad eos dolor, error reprehenderit dolorem
          sunt impedit voluptatem ab doloremque quod unde eum cupiditate saepe
          laboriosam commodi.
        </p>
      </div> */}
    </>
  );
}

export default Home;
