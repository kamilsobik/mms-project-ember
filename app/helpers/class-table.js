import { helper } from '@ember/component/helper';
const tableClasses = [
  { value: '1.0 tpm', class: 'table-success' },
  { value: '2.0 fault', class: 'table-warning' },
  { value: '3.0 breakdown', class: 'table-danger' },
];

export function classTable([typeRequest]) {
  return (
    tableClasses.find(({ value }) => value === typeRequest)?.class ||
    'table-primary'
  );
}

export default helper(classTable);
