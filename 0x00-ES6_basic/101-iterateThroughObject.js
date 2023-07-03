export default function iterateThroughObject(reportWithIterator) {
  let employees = '';

  for (const employee of reportWithIterator) {
    if (reportWithIterator.indexOf(employee) === reportWithIterator.length - 1) {
      employees = employees + employee;
    } else {
      employees = employees + employee + ' | ';
    }
  }

  return employees;
}
