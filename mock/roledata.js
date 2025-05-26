import React from 'react';
import { Pencil, Trash2, Plus } from 'lucide-react';

const data = [
  { id: 1, role: 'Employee' },
  { id: 2, role: 'Admin' },
];

export default function AccessTable() {
  return (
    <div>
      <input
        type="text"
        placeholder="Cari Hak Akses"
        className="border rounded w-full p-2 mb-4"
      />

      <table className="w-full border-collapse">
        <thead>
          <tr className="text-left border-b">
            <th className="p-2">No</th>
            <th className="p-2">Hak Akses</th>
            <th className="p-2">Action</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item) => (
            <tr key={item.id} className="border-b">
              <td className="p-2">{item.id}</td>
              <td className="p-2">{item.role}</td>
              <td className="p-2 flex gap-2">
                <Pencil size={16} className="cursor-pointer text-gray-600 hover:text-black" />
                <Trash2 size={16} className="cursor-pointer text-red-500 hover:text-red-700" />
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      
    </div>
  );
}
