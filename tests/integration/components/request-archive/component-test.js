import { module, test } from 'qunit';
import { setupRenderingTest } from 'mms-ember-project/tests/helpers';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | request-archive', function (hooks) {
  setupRenderingTest(hooks);

  test.skip('it renders', async function (assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.set('myAction', function(val) { ... });

    await render(hbs`<RequestArchive />`);

    assert.dom(this.element).hasText('');

    // Template block usage:
    await render(hbs`
      <RequestArchive>
        template block text
      </RequestArchive>
    `);

    assert.dom(this.element).hasText('template block text');
  });
});
