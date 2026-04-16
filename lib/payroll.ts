"use client";

import { useState } from "react";
import SalaryCard from "@/components/SalaryCard";
import { calculatePayroll } from "@/lib/payroll";

type Employee = {
  id: number;
  name: string;
  position: string;
  baseSalary: number;
};

const employees: Employee[] = [
  {
    id: 1,
    name: "Ali Ahmed",
    position: "Developer",
    baseSalary: 1200,
  },
  {
    id: 2,
    name: "Sara Benali",
    position: "HR Manager",
    baseSalary: 1500,
  },
  {
    id: 3,
    name: "Omar Khaled",
    position: "Accountant",
    baseSalary: 1100,
  },
];

export default function PayrollPage() {
  const [month] = useState("2026-04");

  return (
    <div>
      {/* Header */}
      <div className="mb-6">
        <h1 className="text-2xl font-bold">Payroll System</h1>
        <p className="text-gray-500">
          Month: <span className="font-medium">{month}</span>
        </p>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {employees.map((emp) => {
          // حساب الراتب لكل موظف
          const result = calculatePayroll({
            baseSalary: emp.baseSalary,
            bonus: 200,
            deductions: 50,
            overtimeHours: 10,
            overtimeRate: 15,
            taxRate: 10,
          });

          return (
            <div key={emp.id}>
              <SalaryCard
                name={emp.name}
                position={emp.position}
                baseSalary={result.grossSalary}
                bonus={200}
                deductions={50}
              />

              {/* Net Salary */}
              <div className="mt-2 text-center text-sm text-gray-600">
                Net Salary:{" "}
                <span className="font-bold text-black">
                  ${result.netSalary}
                </span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}