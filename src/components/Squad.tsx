import React from 'react';

const Squad = () => {
  return (
    <div className="flex flex-col mx-auto items-center mt-20">
      <p className="text-center">Select your Squad to defend earthrealm</p>
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
            <td className="text-center">-</td>
            <td className="text-center">-</td>
            <td className="text-center border-r-2 border-l-2 border-black">
              -
            </td>
            <td className="text-center">-</td>
            <td className="text-center">-</td>
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
