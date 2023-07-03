export default function createReportObject(employeesList) {
  const employeeDetails = {
    allEmployees: employeesList,
    getNumberOfDepartments(employeesList) {
      return Object.keys(employeesList).length;
    },
  };

  return employeeDetails;
}
