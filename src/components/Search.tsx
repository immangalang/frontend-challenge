import React from 'react';
import { BsSearch } from 'react-icons/bs';

const Search = () => {
  return (
    <div className="mx-auto w-[500px] flex p-3 mt-10">
      <BsSearch className="relative top-[12px] left-[30px]" />
      <input
        type="search"
        placeholder="Search Characters..."
        className="border border-black py-2 pl-10 w-[500px] placeholder-black"
      />
    </div>
  );
};

export default Search;
