import React, { useContext } from 'react';
import { AppContext } from '../context';
import { tags } from '../data/tags';
import Tag from './Tag';

const Tags = () => {
  const { resetTags } = useContext(AppContext);

  return (
    <div className="w-[90vw] mx-auto">
      {tags.map((tag) => (
        <Tag tag={tag} key={tag} />
      ))}
      <span
        onClick={resetTags}
        className="m-3 underline text-gray-400 cursor-pointer"
      >
        Clear all
      </span>
    </div>
  );
};

export default Tags;
