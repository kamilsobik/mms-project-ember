import { module, test } from 'qunit';
import { setupTest } from 'mms-ember-project/tests/helpers';

module('Unit | Route | users', function (hooks) {
  setupTest(hooks);

  test.skip('it exists', function (assert) {
    let route = this.owner.lookup('route:users');
    assert.ok(route);
  });
});
