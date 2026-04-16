"use client";

import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md px-6 py-4">
      <div className="flex justify-between items-center">
        
        {/* Logo */}
        <h1 className="text-xl font-bold text-black">
          Payroll System
        </h1>

        {/* Desktop Links */}
        <div className="hidden md:flex gap-6 text-gray-700">
          <a href="/dashboard" className="hover:text-black">
            Dashboard
          </a>
          <a href="/employees" className="hover:text-black">
            Employees
          </a>
          <a href="/payroll" className="hover:text-black">
            Payroll
          </a>
          <a href="/attendance" className="hover:text-black">
            Attendance
          </a>
          <a href="/reports" className="hover:text-black">
            Reports
          </a>
        </div>

        {/* Mobile Button */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-2xl"
        >
          ☰
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden mt-4 flex flex-col gap-3 text-gray-700">
          <a href="/dashboard" className="hover:text-black">
            Dashboard
          </a>
          <a href="/employees" className="hover:text-black">
            Employees
          </a>
          <a href="/payroll" className="hover:text-black">
            Payroll
          </a>
          <a href="/attendance" className="hover:text-black">
            Attendance
          </a>
          <a href="/reports" className="hover:text-black">
            Reports
          </a>
        </div>
      )}
    </nav>
  );
}