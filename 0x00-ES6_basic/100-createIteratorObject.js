export default function createIteratorObject(report) {
  const departments = Object.keys(report.allEmployees);
  const employees = [];

  for (const dept of departments) {
    // for (const employee of report.allEmployees[dept]) {}
    employees.push(...report.allEmployees[dept]);
  }

  return employees;
}
