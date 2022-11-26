import { helper } from '@ember/component/helper';
const tableClass = {
  requestor: 'table-success',
  responder: 'table-warning',
  admin: 'table-danger',
};

export function classUserTable([userType]) {
  return tableClass[userType] || 'table-primary';
}

export default helper(classUserTable);
