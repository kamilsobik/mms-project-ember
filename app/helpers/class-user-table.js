import { helper } from '@ember/component/helper';

export function classUserTable([userType]) {
  let newTableClass = 'table-primary';
  if (userType === 'requestor') {
    newTableClass = 'table-success';
  } else if (userType === 'reqponder') {
    newTableClass = 'table-warning';
  } else if (userType === 'admin') {
    newTableClass = 'table-danger';
  }
  return newTableClass;
}

export default helper(classUserTable);
