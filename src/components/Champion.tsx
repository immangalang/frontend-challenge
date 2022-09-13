import React from 'react';
import { Character } from '../types';
import { toTitleCase } from '../utils/toUpperCase';

const Champion = ({ champion }) => {
  const { id, name, quote, image, thumbnail, universe, abilities, tags } =
    champion;
  const survivability = abilities.find(
    (ability: { abilityName: String; abilityScore: Number }) =>
      ability.abilityName === 'Survivability'
  ).abilityScore;
  const power = abilities.find(
    (ability: { abilityName: String; abilityScore: Number }) =>
      ability.abilityName === 'Power'
  ).abilityScore;
  const mobility = abilities.find(
    (ability: { abilityName: String; abilityScore: Number }) =>
      ability.abilityName === 'Mobility'
  ).abilityScore;
  const technique = abilities.find(
    (ability: { abilityName: String; abilityScore: Number }) =>
      ability.abilityName === 'Technique'
  ).abilityScore;
  const energy = abilities.find(
    (ability: { abilityName: String; abilityScore: Number }) =>
      ability.abilityName === 'Energy'
  ).abilityScore;

  return (
    <tr key={champion.name} className="bg-white border h-[80px]">
      <th className="text-left pl-5">
        <div className="flex items-center gap-3">
          <input
            type="checkbox"
            className="w-[24px] h-[24px] accent-blue-700"
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
