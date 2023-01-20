import { module, test } from 'qunit';
import { setupRenderingTest } from 'mms-ember-project/tests/helpers';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | requests/list', function (hooks) {
  setupRenderingTest(hooks);

  test('check display correct button', async function (assert) {
    const model = [
      {
        id: 0,
        type: '1.0 tpm',
        owner: 'user',
        machine: 'machine 3',
        title: 'Problem with air cylinder',
        downtime: '120',
        createdAt: new Date(2022, 11, 11, 11, 11),
        status: 'closed',
        solution: 'Replace air cylinder',
      },
      {
        id: 1,
        type: '2.0 fault',
        owner: 'admin',
        machine: 'machine 2',
        title: 'slow working station 3',
        downtime: '60',
        createdAt: new Date(2022, 10, 13, 11, 37),
        status: 'open',
        solution: 'Checking program PLC',
      },
    ];

    this.set('model', model);
    await render(hbs`<Requests::List @model={{this.model}} />`);
    assert.dom('[data-test-table-status]').hasText('Status');
    assert.dom('[data-test-table-type]').hasText('Type');
    assert.dom('[data-test-table-requestor]').hasText('Requestor');
    assert.dom('[data-test-table-machine]').hasText('Machine');
    assert.dom('[data-test-table-title]').hasText('Title');
    assert.dom('[data-test-table-create-date]').hasText('Created date');

    assert.dom("[data-test-tr='0'] [data-test-td-status]").hasText('open');
    assert
      .dom("[data-test-tr='0'] [data-test-td-status]")
      .doesNotIncludeText('close');
  });
});
