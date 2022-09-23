import React, { useContext } from 'react';
import { AppContext } from '../context';

const Tag = ({ tag }: never) => {
  const appCtx = useContext(AppContext);
  const { tags } = appCtx;
  const isClicked = tags.indexOf(tag) > -1;

  const handleClick = () => {
    if (!isClicked) {
      appCtx.addTag(tag);
    } else {
      appCtx.removeTag(tag);
    }
  };

  return (
    <span
      onClick={handleClick}
      className={`border rounded-full p-3 border-blue-400 cursor-pointer inline-block m-1 ${
        isClicked ? 'bg-blue-400 text-white' : 'text-blue-400'
      }`}
    >
      {tag}
    </span>
  );
};

export default Tag;
