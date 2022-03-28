import React from 'react';
import Card from './Card';
import ResumeApi from './ResumeApi';

const Tabs = ({ color }) => {
  const [openTab, setOpenTab] = React.useState(1);
  return (
    <>
      <div className="flex flex-wrap">
        <div className="w-full">
          <ul
            className="flex mb-0 list-none flex-wrap pt-3 pb-4 flex-row"
            role="tablist"
          >
            <li className="-mb-px mr-2 last:mr-0 flex-auto text-center">
              <a
                className={
                  'text-xs font-bold uppercase px-5 py-3 shadow-lg rounded block leading-normal ' +
                  (openTab === 1
                    ? 'text-white bg-' + color
                    : 'text-black' + ' bg-turquoise')
                }
                onClick={(e) => {
                  e.preventDefault();
                  setOpenTab(1);
                }}
                data-toggle="tab"
                href="#link1"
                role="tablist"
              >
                <i className="fas fa-space-shuttle text-base mr-1"></i>{' '}
                Education
              </a>
            </li>
            <li className="-mb-px mr-2 last:mr-0 flex-auto text-center">
              <a
                className={
                  'text-xs font-bold uppercase px-5 py-3 shadow-lg rounded block leading-normal ' +
                  (openTab === 2
                    ? 'text-white bg-' + color
                    : 'text-black' + ' bg-turquoise')
                }
                onClick={(e) => {
                  e.preventDefault();
                  setOpenTab(2);
                }}
                data-toggle="tab"
                href="#link2"
                role="tablist"
              >
                <i className="fas fa-cog text-base mr-1"></i> Job Experience
              </a>
            </li>
            <li className="-mb-px mr-2 last:mr-0 flex-auto text-center">
              <a
                className={
                  'text-xs font-bold uppercase px-5 py-3 shadow-lg rounded block leading-normal ' +
                  (openTab === 3
                    ? 'text-white bg-' + color
                    : 'text-black' + ' bg-turquoise')
                }
                onClick={(e) => {
                  e.preventDefault();
                  setOpenTab(3);
                }}
                data-toggle="tab"
                href="#link3"
                role="tablist"
              >
                <i className="fas fa-briefcase text-base mr-1"></i> Programming
                Skills
              </a>
            </li>
            <li className="-mb-px mr-2 last:mr-0 flex-auto text-center">
              <a
                className={
                  'text-xs font-bold uppercase px-5 py-3 shadow-lg rounded block leading-normal ' +
                  (openTab === 4
                    ? 'text-white bg-' + color
                    : 'text-black' + ' bg-turquoise')
                }
                onClick={(e) => {
                  e.preventDefault();
                  setOpenTab(4);
                }}
                data-toggle="tab"
                href="#link4"
                role="tablist"
              >
                <i className="fas fa-briefcase text-base mr-1"></i> Interests
              </a>
            </li>
            <li className="-mb-px mr-2 last:mr-0 flex-auto text-center">
              <a
                className={
                  'text-xs font-bold uppercase px-5 py-3 shadow-lg rounded block leading-normal ' +
                  (openTab === 5
                    ? 'text-white bg-flame'
                    : 'text-black' + ' bg-turquoise')
                }
                onClick={(e) => {
                  e.preventDefault();
                  setOpenTab(5);
                }}
                data-toggle="tab"
                href="#link5"
                role="tablist"
              >
                <i className="fas fa-briefcase text-base mr-1"></i> Languages
              </a>
            </li>
          </ul>

          <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded">
            <div className="px-4 py-5 flex-auto">
              <div className="tab-content tab-space">
                <div className={openTab === 1 ? 'block' : 'hidden'} id="link1">
                  <div className="mb-6">
                    {ResumeApi.map((val, id) => {
                      if (val.category == 'education') {
                        return (
                          <Card
                            key={id}
                            title={val.title}
                            year={val.year}
                            rate={val.rate}
                            desc={val.desc}
                          />
                        );
                      }
                    })}
                  </div>
                </div>
                <div className={openTab === 2 ? 'block' : 'hidden'} id="link2">
                  <div className="mb-6">
                    {ResumeApi.map((val, id) => {
                      if (val.category == 'experience') {
                        return (
                          <Card
                            key={id}
                            title={val.title}
                            year={val.year}
                            rate={val.rate}
                            desc={val.desc}
                          />
                        );
                      }
                    })}
                  </div>
                </div>
                <div className={openTab === 3 ? 'block' : 'hidden'} id="link3">
                  <div className="shadow-md shadow-flame mt-6 mb-6 p-3 w-2/6 mx-auto bg-white rounded-lg shadow-lg">
                    <ul className="divide-y-2">
                      <li className="my-3  flex justify-between rounded-md p-3 hover:bg-tumbleweed hover:scale-[1.02] ease-in duration-200">
                        C# <span>Level 9</span>
                      </li>
                      <li className="my-3 flex justify-between rounded-md p-3 hover:bg-tumbleweed hover:scale-[1.02] ease-in duration-200">
                        Python <span>Level 9</span>
                      </li>
                      <li className="my-3 flex justify-between rounded-md p-3 hover:bg-tumbleweed hover:scale-[1.02] ease-in duration-200">
                        JavaScript <span>Level 9</span>
                      </li>
                      <li className="my-3 flex justify-between rounded-md p-3 hover:bg-tumbleweed hover:scale-[1.02] ease-in duration-200">
                        SQL <span>Level 9</span>
                      </li>
                      <li className="my-3 flex justify-between rounded-md p-3 hover:bg-tumbleweed hover:scale-[1.02] ease-in duration-200">
                        Docker <span>Level 9</span>
                      </li>
                      <li className="my-3 flex justify-between rounded-md p-3 hover:bg-tumbleweed hover:scale-[1.02] ease-in duration-200">
                        Kubernetes <span>Level 9</span>
                      </li>
                      <li className="my-3 flex justify-between rounded-md p-3 hover:bg-tumbleweed hover:scale-[1.02] ease-in duration-200">
                        Openshift <span>Level 9</span>
                      </li>
                      <li className="my-3 flex justify-between rounded-md p-3 hover:bg-tumbleweed hover:scale-[1.02] ease-in duration-200">
                        IoT Platform <span>Level 9</span>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className={openTab === 4 ? 'block' : 'hidden'} id="link4">
                  <div className="shadow-md shadow-flame mt-6 mb-6  p-3 w-2/6 mx-auto bg-white rounded-lg shadow-lg">
                    <ul className="divide-y-2">
                      <li className="my-3 flex justify-between rounded-md p-3 hover:bg-tumbleweed hover:scale-[1.02] ease-in duration-200">
                        Travel <span>Level 9</span>
                      </li>
                      <li className="my-3  flex justify-between rounded-md p-3 hover:bg-tumbleweed hover:scale-[1.02] ease-in duration-200">
                        Singing <span>Level 9</span>
                      </li>
                      <li className="my-3 flex justify-between rounded-md p-3 hover:bg-tumbleweed hover:scale-[1.02] ease-in duration-200">
                        Guitar <span>Level 9</span>
                      </li>
                      <li className="my-3 flex justify-between rounded-md p-3 hover:bg-tumbleweed hover:scale-[1.02] ease-in duration-200">
                        Jogging <span>Level 9</span>
                      </li>
                      <li className="my-3 flex justify-between rounded-md p-3 hover:bg-tumbleweed hover:scale-[1.02] ease-in duration-200">
                        Basketball <span>Level 9</span>
                      </li>
                      <li className="my-3 flex justify-between rounded-md p-3 hover:bg-tumbleweed hover:scale-[1.02] ease-in duration-200">
                        Badminton <span>Level 9</span>
                      </li>
                      <li className="my-3 flex justify-between rounded-md p-3 hover:bg-tumbleweed hover:scale-[1.02] ease-in duration-200">
                        Table Tennis <span>Level 9</span>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className={openTab === 5 ? 'block' : 'hidden'} id="link4">
                  <div className="shadow-md shadow-flame mt-6 mb-6 p-3 w-2/6 mx-auto bg-white rounded-lg shadow-lg">
                    <ul className="divide-y-2">
                      <li className="my-3 flex justify-between rounded-md p-3 hover:bg-tumbleweed hover:scale-[1.02] ease-in duration-200">
                        Chinise <span>Level 9</span>
                      </li>
                      <li className="my-3  flex justify-between rounded-md p-3 hover:bg-tumbleweed hover:scale-[1.02] ease-in duration-200">
                        English <span>Level 9</span>
                      </li>
                      <li className="my-3  flex justify-between rounded-md p-3 hover:bg-tumbleweed hover:scale-[1.02] ease-in duration-200">
                        Malay <span>Level 9</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Tabs;
