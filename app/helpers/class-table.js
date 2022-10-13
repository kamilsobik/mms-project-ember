import { helper } from '@ember/component/helper';
const tableClass = {
  '1.0 tpm': 'table-success',
  '2.0 fault': 'table-warning',
  '3.0 breakdown': 'table-danger',
};

export function classTable([typeRequest]) {
  return tableClass[typeRequest] || 'table-primary';
}
export default helper(classTable);
