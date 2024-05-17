import { useState } from 'react';
import MenuList from './MenuList';

function Side() {
  const [ishover, sethover] = useState(false);

  return (
    <>
      <div
        className={`fixed top-0 z-50 ml-2 flex h-full grid-rows-[1/-1] flex-col overflow-hidden border-none bg-sidebg 
                    ${ishover ? 'translate-x-0 transition-transform duration-700' : ''}`}
        onMouseOver={() => {
          sethover(true);
        }}
        onMouseOut={() => sethover(false)}
      >
        <img
          src="Logo.png"
          alt="Logo"
          className={`mx-auto my-6 ${!ishover ? 'w-16' : 'w-32 duration-300'}`}
        />
        <MenuList ishover={ishover} />
      </div>
    </>
  );
}

export default Side;
