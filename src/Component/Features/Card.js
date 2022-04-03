import React from 'react';

const Card = (props) => {
  const desc = props.desc.split(';');
  return (
    <div
      className="overflow-clip w-[300px] h-[300px] sm:w-[410px] sm:h-[320px] mx-auto mb-8 p-6 bg-powder-blue text-black ounded-md cursor-pointer ease-in duration-200 hover:scale-[1.01] hover:rounded-2xl 
    hover:bg-prussian-blue hover:text-white"
    >
      <img className="w-12 h-12" src={props.image} alt="" />
      <h3 className="mt-2 text-lg font-medium">{props.title}</h3>
      <br />
      <ul className="list-disc ml-3">
        {desc.map((val, id) => {
          return <li className="text-base">{val}</li>;
        })}
      </ul>

      <a href="">
        <i className="text-base duration-500 opacity-0 mt-5 fas fa-arrow-right"></i>
      </a>
    </div>
  );
};

export default Card;
