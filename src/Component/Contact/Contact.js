import React, { useState } from 'react';
import contact1 from './contact1.png';
import { init, sendForm } from '@emailjs/browser';

const Contact = () => {
  const [data, setData] = useState({
    fullname: '',
    phone: '',
    email: '',
    subject: '',
    message: '',
  });

  const InputEvent = (event) => {
    const { name, value } = event.target;

    setData((preVal) => {
      return {
        ...preVal,
        [name]: value,
      };
    });
  };

  const formSubmit = (e) => {
    e.preventDefault();

    init('ujDaqtRcOAk3lnUlq');

    sendForm('service_jqlzq6t', 'template_98s4txo', e.target).then(
      function (response) {
        console.log('SUCCESS!', response.status, response.text);
        alert('Successfully sent out the email');
      },
      function (error) {
        console.log('FAILED...', error);
      }
    );

    e.target.reset();
  };
  return (
    <>
      <section className="Contact" id="contact">
        <div className="max-w-[95%] m-auto mt-20 mb-10">
          <div className="mt-12 mb-12 text-center block">
            <h4 className="text-flame tracking-wider font-normal text-base">
              CONTACT
            </h4>
            <h1 className="text-5xl">Contact With Me</h1>
          </div>

          <div className="flex justify-evently">
            <div className="w-5/12">
              <div className="w-6/12 h-[90%] p-10 mx-auto mt-6 rounded-md text-black shadow-md shadow-flame bg-white ">
                <div className="img">
                  <img src={contact1} alt="" />
                </div>
                <div className="details">
                  <h1>Jasper See</h1>
                  <p>Sr Software Engineer</p>
                  <br />
                  <p>Phone: +65 98686107</p>
                  <p>Email: jhsee11@gmail.com</p> <br />
                  <span>FIND WITH ME</span>
                  <div className="button f_flex">
                    <button className="btn_shadow">
                      <i className="fab fa-facebook-f"></i>
                    </button>
                    <button className="btn_shadow">
                      <i className="fab fa-instagram"></i>
                    </button>
                    <button className="btn_shadow">
                      <i className="fab fa-twitter"></i>
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <div className="w-6/12 h-[90%] p-10 mx-auto mt-6 mb-4 rounded-md text-black shadow-md shadow-flame bg-white">
              <form onSubmit={formSubmit}>
                <div className="flex justify-between">
                  <div className="text-base w-2/5 rounded-sm">
                    <span className="text-regal-blue">YOUR NAME</span>
                    <input
                      className="text-base w-full rounded-sm border-2 border-solid border-slate-200"
                      type="text"
                      name="fullname"
                      value={data.fullname}
                      onChange={InputEvent}
                    />
                  </div>
                  <div className="text-base w-2/5 rounded-sm ">
                    <span className="text-regal-blue">PHONE NUMBER </span>
                    <input
                      className="text-base w-full rounded-sm border-2 border-solid border-slate-200"
                      type="number"
                      name="phone"
                      value={data.phone}
                      onChange={InputEvent}
                    />
                  </div>
                </div>
                <div className="mt-3 w-full rounded-md">
                  <span className="text-regal-blue">EMAIL </span>
                  <input
                    className="w-full rounded-sm border-2 border-solid border-slate-200"
                    type="email"
                    name="email"
                    value={data.email}
                    onChange={InputEvent}
                  />
                </div>
                <div className="mt-3 w-full rounded-md">
                  <span className="text-regal-blue">SUBJECT </span>
                  <input
                    className='w-full rounded-sm border-2 border-solid border-slate-200"'
                    type="text"
                    name="subject"
                    value={data.subject}
                    onChange={InputEvent}
                  />
                </div>
                <div className="mt-3">
                  <span className="text-regal-blue">YOUR MESSAGE </span>
                  <textarea
                    className="w-full rounded-sm border-2 border-solid border-slate-200"
                    cols="30"
                    rows="10"
                    name="message"
                    value={data.message}
                    onChange={InputEvent}
                  ></textarea>
                </div>
                <button className="mt-2 mx-2 rounded-sm cursor-pointer">
                  SEND MESSAGE <i className="fa fa-long-arrow-right"></i>
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;