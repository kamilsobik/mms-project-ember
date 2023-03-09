import { module, test } from 'qunit';
import { setupTest } from 'mms-ember-project/tests/helpers';
import { classUserTable } from 'mms-ember-project/helpers/class-user-table';

module('Unit | Helpers | class-user-table', function (hooks) {
  setupTest(hooks);

  test('Adding correctly css class for tables with user type', function (assert) {
    assert.strictEqual(
      classUserTable(['requestor']),
      'table-success',
      'User type Requestor return class table-success'
    );
    assert.notEqual(
      classUserTable(['requestor']),
      'table-warning',
      'User type Requestor not return class table-warning'
    );
    assert.notEqual(
      classUserTable(['requestor']),
      'table-danger',
      'User type Requestor does not return class table-danger'
    );
    assert.strictEqual(
      classUserTable(['responder']),
      'table-warning',
      'User type Responder return class table-warning'
    );
    assert.notEqual(
      classUserTable(['responder']),
      'table-success',
      'User type Responder does not return class table-success'
    );
    assert.notEqual(
      classUserTable(['responder']),
      'table-danger',
      'User type Responder does not return class table-danger'
    );
    assert.strictEqual(
      classUserTable(['admin']),
      'table-danger',
      'User type Admin return class table-danger'
    );
    assert.notEqual(
      classUserTable(['admin']),
      'table-success',
      'User type Admin does not return class table-success'
    );
    assert.notEqual(
      classUserTable(['admin']),
      'table-warning',
      'User type Admin does not return class table-warning'
    );
  });
});
