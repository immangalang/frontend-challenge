import React, { useContext } from 'react';
import { AppContext } from '../context';

const Squad = () => {
  const appCtx = useContext(AppContext);
  const { champions }: any = appCtx;

  const arrayOfAbilities = champions.map((champion: any) => champion.abilities);
  const mobilityAverage = (
    arrayOfAbilities
      .map((ability: any) => ability[0].abilityScore)
      .reduce((a: number, b: number) => a + b, 0) / champions.length
  ).toFixed(2);
  const techniqueAverage = (
    arrayOfAbilities
      .map((ability: any) => ability[1].abilityScore)
      .reduce((a: number, b: number) => a + b, 0) / champions.length
  ).toFixed(2);
  const survivabilityAverage = (
    arrayOfAbilities
      .map((ability: any) => ability[2].abilityScore)
      .reduce((a: number, b: number) => a + b, 0) / champions.length
  ).toFixed(2);
  const powerAverage = (
    arrayOfAbilities
      .map((ability: any) => ability[3].abilityScore)
      .reduce((a: number, b: number) => a + b, 0) / champions.length
  ).toFixed(2);
  const energyAverage = (
    arrayOfAbilities
      .map((ability: any) => ability[4].abilityScore)
      .reduce((a: number, b: number) => a + b, 0) / champions.length
  ).toFixed(2);

  return (
    <div className="flex flex-col mx-auto items-center mt-20">
      <p className="text-center">Select your Squad to defend earthrealm</p>
      <div className="flex gap-3">
        {champions.map((champion: any) => (
          <img
            key={champion.name}
            src={champion.image}
            alt="champion"
            className="rounded-full w-[60px] h-[60px] mt-5 border border-blue-500 cursor-pointer"
            onClick={() => appCtx.removeChampion(champion)}
          />
        ))}
      </div>
      <table className="w-[500px] mt-10">
        <thead>
          <tr>
            <th className="text-center">Power</th>
            <th className="text-center">Mobility</th>
            <th className="text-center border-r-2 border-l-2 border-black">
              Techinique
            </th>
            <th className="text-center">Survivability</th>
            <th className="text-center">Energy</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="text-center">
              {champions.length !== 0 ? powerAverage : '-'}
            </td>
            <td className="text-center">
              {champions.length !== 0 ? mobilityAverage : '-'}
            </td>
            <td className="text-center border-r-2 border-l-2 border-black">
              {champions.length !== 0 ? techniqueAverage : '-'}
            </td>
            <td className="text-center">
              {champions.length !== 0 ? survivabilityAverage : '-'}
            </td>
            <td className="text-center">
              {champions.length !== 0 ? energyAverage : '-'}
            </td>
          </tr>
        </tbody>
      </table>
      <div>
        <p className="relative right-[120px] my-3">
          *Totals as average for squad
        </p>
      </div>
    </div>
  );
};

export default Squad;
