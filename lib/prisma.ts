generator client {
  provider = "prisma-client-js"
}

datasource db {
  provider = "postgresql" // تقدر تبدله إلى mysql إذا تحب
  url      = env("DATABASE_URL")
}

//////////////////////////////////////////////////////
// 🏢 BRANCHES
//////////////////////////////////////////////////////

model Branch {
  id        Int        @id @default(autoincrement())
  name      String
  location  String?

  employees Employee[]

  createdAt DateTime   @default(now())
}

//////////////////////////////////////////////////////
// 👨‍💼 EMPLOYEES
//////////////////////////////////////////////////////

model Employee {
  id          Int        @id @default(autoincrement())
  name        String
  email       String     @unique
  position    String
  salary      Float
  status      EmployeeStatus @default(ACTIVE)

  branchId    Int?
  branch      Branch?    @relation(fields: [branchId], references: [id])

  attendance  Attendance[]
  payrolls    Payroll[]

  createdAt   DateTime   @default(now())
  updatedAt   DateTime   @updatedAt
}

enum EmployeeStatus {
  ACTIVE
  INACTIVE
}

//////////////////////////////////////////////////////
// ⏱️ ATTENDANCE
//////////////////////////////////////////////////////

model Attendance {
  id          Int        @id @default(autoincrement())
  date        DateTime
  status      AttendanceStatus

  employeeId  Int
  employee    Employee   @relation(fields: [employeeId], references: [id])

  createdAt   DateTime   @default(now())
}

enum AttendanceStatus {
  PRESENT
  ABSENT
  LATE
}

//////////////////////////////////////////////////////
// 💰 PAYROLL
//////////////////////////////////////////////////////

model Payroll {
  id            Int      @id @default(autoincrement())

  month         String   // مثال: "2026-04"
  
  baseSalary    Float
  bonus         Float    @default(0)
  deductions    Float    @default(0)

  overtimeHours Float    @default(0)
  overtimeRate  Float    @default(0)

  taxRate       Float    @default(0)

  grossSalary   Float
  netSalary     Float

  employeeId    Int
  employee      Employee @relation(fields: [employeeId], references: [id])

  createdAt     DateTime @default(now())
}

//////////////////////////////////////////////////////
// 📊 REPORTS (اختياري لكن مهم)
//////////////////////////////////////////////////////

model Report {
  id          Int      @id @default(autoincrement())
  title       String
  content     String

  type        ReportType

  createdAt   DateTime @default(now())
}

enum ReportType {
  PAYROLL
  ATTENDANCE
  GENERAL
}