export default function Dashboard() {
  return (
    <div>
      <h1 className="text-xl font-bold">Dashboard</h1>

      <div className="grid grid-cols-3 gap-4 mt-6">
        <div className="bg-white p-4 rounded shadow">
          👨‍💼 Employees: 120
        </div>

        <div className="bg-white p-4 rounded shadow">
          💰 Total Payroll: $50,000
        </div>

        <div className="bg-white p-4 rounded shadow">
          ⏱️ Attendance Rate: 92%
        </div>
      </div>
    </div>
  );
}