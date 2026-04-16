"use client";

type SalaryCardProps = {
  name: string;
  position: string;
  baseSalary: number;
  bonus?: number;
  deductions?: number;
};

export default function SalaryCard({
  name,
  position,
  baseSalary,
  bonus = 0,
  deductions = 0,
}: SalaryCardProps) {
  // حساب الراتب النهائي
  const totalSalary = baseSalary + bonus - deductions;

  return (
    <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition">
      {/* Header */}
      <div className="mb-4">
        <h2 className="text-lg font-bold">{name}</h2>
        <p className="text-gray-500 text-sm">{position}</p>
      </div>

      {/* Salary Details */}
      <div className="space-y-2 text-sm">
        <div className="flex justify-between">
          <span className="text-gray-600">Base Salary</span>
          <span>${baseSalary}</span>
        </div>

        <div className="flex justify-between">
          <span className="text-gray-600">Bonus</span>
          <span className="text-green-600">+${bonus}</span>
        </div>

        <div className="flex justify-between">
          <span className="text-gray-600">Deductions</span>
          <span className="text-red-600">-${deductions}</span>
        </div>

        <hr className="my-2" />

        {/* Total */}
        <div className="flex justify-between font-bold text-lg">
          <span>Total Salary</span>
          <span className="text-black">${totalSalary}</span>
        </div>
      </div>
    </div>
  );
}