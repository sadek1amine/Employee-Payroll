export default function Employees() {
  const employees = [
    { id: 1, name: "Ali", position: "Developer" },
    { id: 2, name: "Sara", position: "HR" },
  ];

  return (
    <div>
      <h1 className="text-xl font-bold">Employees</h1>

      <div className="mt-6 bg-white p-4 rounded shadow">
        {employees.map((emp) => (
          <div key={emp.id} className="border-b py-2">
            <p>{emp.name}</p>
            <p className="text-sm text-gray-500">{emp.position}</p>
          </div>
        ))}
      </div>
    </div>
  );
}