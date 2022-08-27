import { helper } from '@ember/component/helper';

export function classTable([typeRequest]) {
  let newTableClass = 'table-primary';
  if (typeRequest === '1.0 tpm') {
    newTableClass = 'table-success';
  } else if (typeRequest === '2.0 fault') {
    newTableClass = 'table-warning';
  } else if (typeRequest === '3.0 breakdown') {
    newTableClass = 'table-danger';
  }
  return newTableClass;
}

export default helper(classTable);
