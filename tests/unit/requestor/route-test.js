import { module, test } from 'qunit';
import { setupTest } from 'mms-ember-project/tests/helpers';

module('Unit | Route | requestor', function (hooks) {
  setupTest(hooks);

  test('it exists', function (assert) {
    let route = this.owner.lookup('route:requestor');
    assert.ok(route);
  });
});
