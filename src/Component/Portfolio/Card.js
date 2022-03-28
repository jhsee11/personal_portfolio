import React, { useState } from 'react';

const Card = (props) => {
  const [modal, setModal] = useState(false);

  const toggleModal = () => {
    setModal(!modal);
  };

  return (
    <div>
      <div
        className="w-[460px] h-[320px] my-3 p-6 bg-turquoise text-black rounded-md cursor-pointer ease-in duration-200 hover:-translate-y-3 hover:rounded-2xl 
    hover:bg-flame hover:text-white"
      >
        <div className="h-[100px] overflow-hidden duration-500 ">
          <img
            className="w-full rounded-lg duration-500 hover:scale-[1.1]"
            src={props.imagez}
            alt="img"
            onClick={toggleModal}
          />
        </div>
        <div className="mt-5 mb-6 uppercase flex justify-between">
          <span
            className="text-white text-base tracking-widest font-normal"
            onClick={toggleModal}
          >
            {props.category}
          </span>
          <label>
            <i className="far fa-heart"></i>
            {props.totalLike}
          </label>
        </div>
        <div className="title">
          <h2 onClick={toggleModal}>{props.title}</h2>
          <a
            href="#popup"
            className="relative justify-end flex"
            onClick={toggleModal}
          >
            <i className="fas fa-arrow-right"></i>
          </a>
        </div>
      </div>

      {/*------POPUP MODAL */}
      {modal && (
        <div className="w-screen h-screen bg-white fixed top-0 right-0 bottom-0 left-0 z-[60]">
          <div
            onClick={toggleModal}
            className="w-screen h-screen bg-white position fixed top-0 right-0 bottom-0 left-0 z-[60]"
          ></div>
          <div className="position absolute z-[100] top-[12%] left-[8%] leading-6 min-w-[60%] max-w-[85%] p-12 bg-turquoise shadow-md flex justify-between rounded-lg">
            <div className="modal-img p-0">
              <img src={props.image} alt="" />
            </div>
            <div className="pt-2 pr-8 pb-0 pl-5">
              <span className="text-lg"> Featured - Design</span>
              <h1 className="pt-2 pb-2 text-3xl">{props.title}</h1>
              <p className="text-base mb-4">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Unde
                magni sed officia. Quaerat illo reprehenderit harum, ipsam
                impedit ullam voluptates delectus eius voluptatem nam. Similique
                deleniti quaerat deserunt aliquid hic.
              </p>
              <div className="flex mt-10">
                <button
                  className="py-3 px-6 mr-6 text-flame rounded-md cursor-pointer duration-500 ease-in shadow-md bg-white hover:bg-tumbleweed hover:text-white
                hover:-translate-y-1"
                >
                  LIKE THIS <i className="ml-2 far fa-thumbs-up"></i>
                </button>
                <button
                  className="py-3 px-6 mr-6 text-flame rounded-md cursor-pointer duration-500 ease-in shadow-md bg-white hover:bg-tumbleweed hover:text-white
                hover:-translate-y-1"
                >
                  VIEW PROJECT <i className="fa fa-chevron-right"></i>
                </button>
              </div>
              <button
                className="absolute top-5 right-5 w-12 h-12 text-center rounded-full text-2xl btn_shadow"
                onClick={toggleModal}
              >
                <i className="m-0 fas fa-times"></i>
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Card;