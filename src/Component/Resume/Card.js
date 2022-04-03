import React from 'react';

const Card = (props) => {
  const desc = props.desc.split(';');

  return (
    <>
      <div
        className="w-6/12 p-10 mx-auto mt-6 rounded-md text-black shadow-md shadow-celadon-blue bg-white hover:bg-prussian-blue
                 hover:text-white hover:scale-[1.03] ease-in duration-200"
      >
        <div className="title_content flex justify-between">
          <div className="title">
            <h3 className="font-medium italic text-lg">{props.title}</h3>
            <span className="italic text-base">{props.year}</span>
          </div>
        </div>
        <hr />
        <ul className="ml-5 list-[square]">
          {desc.map((val, id) => {
            return <li>{val}</li>;
          })}
        </ul>
      </div>
    </>
  );
};

export default Card;
