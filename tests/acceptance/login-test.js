import { module, test } from 'qunit';
import { visit, currentURL } from '@ember/test-helpers';
import { setupApplicationTest } from 'mms-ember-project/tests/helpers';

module('Acceptance | login', function (hooks) {
  setupApplicationTest(hooks);

  test('visiting /login', async function (assert) {
    await visit('/login');

    assert.strictEqual(currentURL(), '/login');
  });
});
