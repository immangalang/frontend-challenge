import React from 'react';
import mortalCombat from '../img/Mortal-Kombat-Logo.png';

const Masthead = () => {
  return (
    <div className="text-3xl bg-black w-full h-[76px] flex justify-center">
      <img
        src={mortalCombat}
        alt="Mortal Combat Logo"
        className="w-[160px] h-[90px] relative top-[30px]"
      />
    </div>
  );
};

export default Masthead;
