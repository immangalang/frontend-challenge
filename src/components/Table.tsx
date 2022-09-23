import React, { useContext } from 'react';
import { AppContext } from '../context';
import jsonData from '../data/characters.json';
import type { Character } from '../types';
import Champion from './Champion';

const Table = () => {
  const data: Character[] = jsonData as Character[];
  const { search, tags, champions } = useContext(AppContext);

  const filter = (
    list: Array<Character>,
    filters: Array<string>,
    keyword: string
  ) => {
    const filteredByTags = list.filter((champion) => {
      let championTags = champion?.tags?.map((tag) => tag.tag_name);
      // let champNames = champion?.tags?.map((tag) => tag.tag_name);
      if (champions.includes(champion)) championTags?.push('my team');
      championTags?.push(champion.name.toLowerCase());
      return filters.every((filter) => {
        return championTags?.includes(filter.toLowerCase());
      });
    });
    const filteredBySearch = filteredByTags.filter((champion) =>
      champion.name.toLowerCase().includes(search.toLowerCase())
    );
    console.log(filteredBySearch);
    return filteredBySearch;
  };

  const filteredData = filter(data, tags, search);

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
        {filteredData.map((champion) => (
          <Champion key={champion.name} champion={champion} />
        ))}
      </tbody>
    </table>
  );
};

export default Table;
