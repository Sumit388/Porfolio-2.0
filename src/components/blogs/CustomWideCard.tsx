import React from "react";

function CustomWideCard() {
  return (
    <div className="max-w-sm w-full lg:max-w-[30vw] lg:flex glassEffect text-[#a7a7a7] overflow-hidden">
      <div
        className="h-48 lg:h-auto lg:w-40 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden"
        style={{backgroundImage: "url('https://images.unsplash.com/photo-1545239351-ef35f43d514b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1548&q=80')"}}
        title="Woman holding a mug"
      ></div>
      <div className=" bg-[#8484842a] rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
        <div className="mb-8">
          <p className="text-sm text-gray-500 flex items-center">
            <svg
              className="fill-current text-gray-500 w-3 h-3 mr-2"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
            >
              <path d="M4 8V6a6 6 0 1 1 12 0v2h1a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2v-8c0-1.1.9-2 2-2h1zm5 6.73V17h2v-2.27a2 2 0 1 0-2 0zM7 6v2h6V6a3 3 0 0 0-6 0z" />
            </svg>
            Members only
          </p>
          <div className=" font-bold text-xl mb-2 text-[#f7ac0a8d]">
            Can coffee make you a better developer?
          </div>
          <p className=" text-base">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Voluptatibus quia, nulla! Maiores et perferendis eaque,
            exercitationem praesentium nihil.
          </p>
        </div>
        <div className="flex items-center">
          <img
            className="w-10 h-10 rounded-full mr-4"
            src="https://img.freepik.com/premium-psd/3d-render-cartoon-avatar-isolated_570939-44.jpg?w=1380"
            alt="Avatar of Jonathan Reinink"
          />
          <div className="text-sm">
            <p className="leading-none">Jonathan Reinink</p>
            <p className="text-gray-400">Aug 18</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CustomWideCard;
