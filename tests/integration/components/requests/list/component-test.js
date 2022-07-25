import { module, test } from 'qunit';
import { setupRenderingTest } from 'mms-ember-project/tests/helpers';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | requests/list', function (hooks) {
  setupRenderingTest(hooks);

  test.skip('it renders', async function (assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.set('myAction', function(val) { ... });

    await render(hbs`<Requests::List />`);

    assert.dom(this.element).hasText('');

    // Template block usage:
    await render(hbs`
      <Requests::List>
        template block text
      </Requests::List>
    `);

    assert.dom(this.element).hasText('template block text');
  });
});
