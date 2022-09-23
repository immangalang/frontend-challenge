import React, { useContext } from 'react';
import toast from 'react-hot-toast';
import { AppContext } from '../context';
import { Character } from '../types';
import { toTitleCase } from '../utils/toUpperCase';

const Champion = ({ champion }: any) => {
  const { abilities, tags } = champion;
  const findAbility = (name: string) =>
    abilities.find(
      (ability: { abilityName: String; abilityScore: Number }) =>
        ability.abilityName === name
    ).abilityScore;
  const survivability = findAbility('Survivability');
  const power = findAbility('Power');
  const mobility = findAbility('Survivability');
  const technique = findAbility('Technique');
  const energy = findAbility('Energy');

  const appCtx = useContext(AppContext);

  const checked = appCtx.champions.some(
    (character) => JSON.stringify(character) === JSON.stringify(champion)
  );

  const handleClick = () => {
    if (appCtx.champions.length > 5 && !checked) {
      toast.error('You can only add up to 6 members to your Squad');
      return;
    }
    if (!checked) {
      appCtx.addChampion(champion);
    } else {
      appCtx.removeChampion(champion);
    }
  };

  return (
    <tr
      key={champion.name}
      className={`border h-[80px] ${checked ? 'bg-blue-100' : 'bg-white '}`}
    >
      <th className="text-left pl-5">
        <div className="flex items-center gap-3">
          <input
            type="checkbox"
            className="w-[24px] h-[24px] accent-blue-700"
            onChange={handleClick}
            checked={checked}
          />
          <img
            className="rounded-full w-[40px] h-[40px] border border-sky-700"
            src={champion.image}
            alt="champion"
          />
          <span className="w-[300px] text-xl">{champion.name}</span>
        </div>
      </th>
      <th>
        <div className="flex">
          {tags && tags[0] && (
            <span className="border rounded-full p-2 border-blue-400 text-blue-400 cursor-pointer inline-block m-1 ">
              {toTitleCase(tags[0]?.tag_name)}
            </span>
          )}
          {tags && tags[1] && (
            <span className="border rounded-full p-2 border-blue-400 text-blue-400 cursor-pointer inline-block m-1 ">
              {toTitleCase(tags[1]?.tag_name)}
            </span>
          )}
          {tags && tags[2] && (
            <span className="border rounded-full p-2 border-blue-400 text-blue-400 cursor-pointer inline-block m-1 ">
              {toTitleCase(tags[2]?.tag_name)}
            </span>
          )}
        </div>
      </th>
      <th
        className={`text-center px-16 text-2xl ${
          power === 10 && 'text-red-500'
        }`}
      >
        {power}
      </th>
      <th
        className={`text-center px-16 text-2xl ${
          mobility === 10 && 'text-red-500'
        }`}
      >
        {mobility}
      </th>
      <th
        className={`text-center px-16 text-2xl ${
          technique === 10 && 'text-red-500'
        }`}
      >
        {technique}
      </th>
      <th
        className={`text-center px-16 text-2xl ${
          survivability === 10 && 'text-red-500'
        }`}
      >
        {survivability}
      </th>
      <th
        className={`text-center px-16 text-2xl ${
          mobility === 10 && 'text-red-500'
        }`}
      >
        {energy}
      </th>
    </tr>
  );
};

export default Champion;
