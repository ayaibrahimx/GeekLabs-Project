import { HiMiniBellAlert } from 'react-icons/hi2';
import { FaGraduationCap } from 'react-icons/fa6';
import { IoSettings } from 'react-icons/io5';
import { FaRegFolderOpen } from 'react-icons/fa6';
import { AiOutlineStock } from 'react-icons/ai';

function MenuList({ ishover }) {
  return (
    <>
      <ul className="mx-auto font-semibold duration-700">
        {!ishover ? (
          <>
            <li className="pt-3 ">
              <HiMiniBellAlert className="h-5 w-5  text-white" />
            </li>
            <li className="pt-5">
              <FaGraduationCap className="h-5 w-5  text-white" />
            </li>
            <li className="pt-5">
              <IoSettings className="h-5 w-5  text-gray-500" />
            </li>
            <li className="pt-5">
              {' '}
              <FaRegFolderOpen className="h-5 w-5  text-gray-500" />
            </li>
            <li className="pt-5">
              <AiOutlineStock className="h-5 w-5  text-gray-500" />
            </li>
            <li className="pt-5"></li>

            <div className=" flex flex-col ">
              <HiMiniBellAlert className=" absolute bottom-[5.2rem] left-4 my-auto ml-1 h-8 max-h-[648px]  w-8 text-lblue md:hidden " />
              <span className="absolute bottom-28  left-11  h-4 w-4 max-w-[648px] rounded-full bg-green-700 p-1 text-xs md:hidden">
                <span className="absolute bottom-0 left-1  md:hidden">6</span>
              </span>
              <img
                src="man.png"
                alt="User"
                className="absolute bottom-4  left-3  mx-auto h-10 w-10 content-end justify-end"
              />
            </div>
          </>
        ) : (
          <div className="    transition-transform duration-700">
            <li className=" group mx-2 flex cursor-pointer pt-5">
              <HiMiniBellAlert className="my-auto h-4 w-4 text-white group-hover:text-lblue" />
              <p className=" pl-3 text-lg text-white group-hover:text-lblue">
                {' '}
                Alerts
              </p>
            </li>{' '}
            <li className="group mx-2 flex cursor-pointer pt-5">
              <FaGraduationCap className=" my-auto h-4 w-4 text-white duration-700 group-hover:text-lblue" />
              <p className="pl-3 text-lg text-white duration-500 group-hover:text-lblue">
                {' '}
                Training
              </p>
            </li>
            <li className="group relative mx-2 flex cursor-pointer pt-5">
              <IoSettings className="my-auto h-4 w-4 text-gray-500 duration-300 group-hover:text-transparent" />

              <p className="pl-3 text-lg  text-gray-500 transition-all duration-300 group-hover:text-transparent">
                Automation
              </p>
              <p className="text-md absolute w-full rounded-sm bg-lblue bg-opacity-45 p-3  text-center text-white opacity-0 shadow-soon  shadow-sidebg duration-300 group-hover:opacity-100">
                Coming soon
              </p>
            </li>{' '}
            <li className="group relative mx-2 flex cursor-pointer pt-5">
              <FaRegFolderOpen className="my-auto h-4 w-4 text-gray-500 group-hover:text-transparent" />
              <p className="pl-3 text-lg  text-gray-500 transition-all duration-300 group-hover:text-transparent">
                Portfolio
              </p>
              <p className="text-md absolute w-full rounded-sm bg-lblue bg-opacity-45 p-3  text-center text-white opacity-0 shadow-soon  shadow-sidebg duration-300 group-hover:opacity-100">
                Coming soon
              </p>
            </li>
            <li className="group relative mx-2 flex cursor-pointer pt-5">
              <AiOutlineStock className="my-auto h-4 w-4 text-gray-500 group-hover:text-transparent" />
              <p className="pl-3 text-lg  text-gray-500 transition-all duration-300 group-hover:text-transparent">
                {' '}
                Trading
              </p>
              <p className="text-md absolute w-full rounded-sm bg-lblue bg-opacity-45 p-3  text-center text-white opacity-0 shadow-soon  shadow-sidebg duration-300 group-hover:opacity-100">
                Coming soon
              </p>
            </li>
            <div className=" flex">
              <HiMiniBellAlert className=" absolute bottom-[5.2rem] left-4 my-auto ml-1 h-8 max-h-[648px]  w-8 text-lblue md:hidden " />
              <span className="absolute bottom-28  left-11  h-4 w-4 max-w-[648px] rounded-full bg-green-700 p-1 text-xs md:hidden">
                <span className="absolute bottom-0 left-1  md:hidden">6</span>
              </span>
              <img
                src="man.png"
                alt="User"
                className="absolute bottom-4  left-3  mx-auto h-10 w-10 content-end justify-end"
              />

              <span className="w-30  absolute bottom-6 left-16 h-10 content-end justify-end text-white">
                Aya
              </span>
            </div>
          </div>
        )}
      </ul>
    </>
  );
}

export default MenuList;
