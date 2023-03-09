import { module, test } from 'qunit';
import { setupTest } from 'mms-ember-project/tests/helpers';
import { classTable } from 'mms-ember-project/helpers/class-table';

module('Unit | Helpers | class-table', function (hooks) {
  setupTest(hooks);

  test('Adding correctly css class for tables', function (assert) {
    assert.strictEqual(
      classTable(['1.0 tpm']),
      'table-success',
      'Requst type TPM return class table-success'
    );
    assert.notEqual(
      classTable(['1.0 tpm']),
      'table-warning',
      'Requst type TPM not return class table-warning'
    );
    assert.notEqual(
      classTable(['1.0 tpm']),
      'table-danger',
      'Requst type TPM does not return class table-danger'
    );
    assert.strictEqual(
      classTable(['2.0 fault']),
      'table-warning',
      'Requst type FAULT return class table-warning'
    );
    assert.notEqual(
      classTable(['2.0 fault']),
      'table-success',
      'Requst type FAULT does not return class table-success'
    );
    assert.notEqual(
      classTable(['2.0 fault']),
      'table-danger',
      'Requst type FAULT does not return class table-danger'
    );
    assert.strictEqual(
      classTable(['3.0 breakdown']),
      'table-danger',
      'Requst type BREAKDOWN return class table-danger'
    );
    assert.notEqual(
      classTable(['3.0 breakdown']),
      'table-success',
      'Requst type BREAKDOWN does not return class table-success'
    );
    assert.notEqual(
      classTable(['3.0 breakdown']),
      'table-warning',
      'Requst type BREAKDOWN does not return class table-warning'
    );
  });
});
