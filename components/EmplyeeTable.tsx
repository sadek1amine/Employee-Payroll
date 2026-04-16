"use client";

import { useState } from "react";

type Employee = {
  id: number;
  name: string;
  email: string;
  position: string;
  salary: number;
  status: "active" | "inactive";
};

const initialEmployees: Employee[] = [
  {
    id: 1,
    name: "Ali Ahmed",
    email: "ali@company.com",
    position: "Developer",
    salary: 1200,
    status: "active",
  },
  {
    id: 2,
    name: "Sara Benali",
    email: "sara@company.com",
    position: "HR Manager",
    salary: 1500,
    status: "active",
  },
  {
    id: 3,
    name: "Omar Khaled",
    email: "omar@company.com",
    position: "Accountant",
    salary: 1100,
    status: "inactive",
  },
];

export default function EmployeeTable() {
  const [employees, setEmployees] = useState<Employee[]>(initialEmployees);

  // حذف موظف
  const handleDelete = (id: number) => {
    const updated = employees.filter((emp) => emp.id !== id);
    setEmployees(updated);
  };

  return (
    <div className="bg-white p-6 rounded-xl shadow-md">
      {/* Header */}
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-bold">Employees List</h2>

        <button className="bg-black text-white px-4 py-2 rounded-lg hover:bg-gray-800">
          + Add Employee
        </button>
      </div>

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="w-full border-collapse">
          <thead>
            <tr className="bg-gray-100 text-left">
              <th className="p-3">Name</th>
              <th className="p-3">Email</th>
              <th className="p-3">Position</th>
              <th className="p-3">Salary</th>
              <th className="p-3">Status</th>
              <th className="p-3">Actions</th>
            </tr>
          </thead>

          <tbody>
            {employees.map((emp) => (
              <tr
                key={emp.id}
                className="border-b hover:bg-gray-50 transition"
              >
                <td className="p-3 font-medium">{emp.name}</td>
                <td className="p-3 text-gray-600">{emp.email}</td>
                <td className="p-3">{emp.position}</td>
                <td className="p-3">${emp.salary}</td>

                {/* Status */}
                <td className="p-3">
                  {emp.status === "active" ? (
                    <span className="bg-green-100 text-green-700 px-2 py-1 rounded-full text-sm">
                      Active
                    </span>
                  ) : (
                    <span className="bg-red-100 text-red-700 px-2 py-1 rounded-full text-sm">
                      Inactive
                    </span>
                  )}
                </td>

                {/* Actions */}
                <td className="p-3 flex gap-2">
                  <button className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600">
                    Edit
                  </button>

                  <button
                    onClick={() => handleDelete(emp.id)}
                    className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {/* Empty state */}
        {employees.length === 0 && (
          <p className="text-center text-gray-500 mt-4">
            No employees found
          </p>
        )}
      </div>
    </div>
  );
}