import React from 'react';

const Tag = ({ tag }) => {
  console.log(tag);

  return (
    <span className="border rounded-full p-3 border-blue-400 text-blue-400 cursor-pointer inline-block m-1 ">
      {tag}
    </span>
  );
};

export default Tag;
