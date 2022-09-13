import React from 'react';
import jsonData from '../data/characters.json';
import type { Character } from '../types';
import Champion from './Champion';

const Table = () => {
  const data: Character[] = jsonData as Character[];

  console.log(data);

  return (
    <table className="w-[700px] mt-10 mx-auto">
      <thead>
        <tr>
          <th className="text-left text-2xl">Character</th>
          <th className="text-left text-2xl">Tags</th>
          <th className="text-center text-2xl">Power</th>
          <th className="text-center text-2xl">Mobility</th>
          <th className="text-center text-2xl">Technique</th>
          <th className="text-center text-2xl">Survivability</th>
          <th className="text-center text-2xl">Energy</th>
        </tr>
      </thead>
      <tbody className="border rounded-full">
        {data.map((champion) => (
          <Champion key={champion.name} champion={champion} />
        ))}
      </tbody>
    </table>
  );
};

export default Table;
