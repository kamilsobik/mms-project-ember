import { module, test } from 'qunit';
import { setupRenderingTest } from 'mms-ember-project/tests/helpers';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | index', function (hooks) {
  setupRenderingTest(hooks);

  test('check display correct button', async function (assert) {
    await render(hbs`<Index />`);

    assert
      .dom('[data-test-title]')
      .hasText('Computerised Maintenance Management System');
    assert.dom('[data-test-open-request-button]').hasText('Open request');
    assert.dom('[data-test-open-kpi-button]').hasText('KPI');
    assert.dom('[data-test-archive-button]').hasText('Archive');
    assert.dom('[data-test-logout-button]').hasText('Logout');
  });
});
