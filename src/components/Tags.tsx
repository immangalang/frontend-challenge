import React from 'react';
import { tags } from '../data/tags';
import Tag from './Tag';

const Tags = () => {
  return (
    <div className="w-[90vw] mx-auto">
      {tags.map((tag) => (
        <Tag tag={tag} key={tag} />
      ))}
      <span className="m-3 underline text-gray-400 cursor-pointer">
        Clear all
      </span>
    </div>
  );
};

export default Tags;
