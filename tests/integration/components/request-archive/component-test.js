import { module, test } from 'qunit';
import { setupRenderingTest } from 'mms-ember-project/tests/helpers';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | request-archive', function (hooks) {
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
        status: 'open',
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
        status: 'close',
        solution: 'Checking program PLC',
      },
    ];

    this.set('model', model);
    await render(hbs`<RequestArchive @model={{this.model}}/>`);
    assert
      .dom('[data-test-table-type]')
      .hasText('Type', 'Column "Type" has correct description');
    assert
      .dom('[data-test-table-requestor]')
      .hasText('Requestor', 'Column "Requestor" has correct description');
    assert
      .dom('[data-test-table-machine]')
      .hasText('Machine', 'Column "Machine" has correct description');
    assert
      .dom('[data-test-table-title]')
      .hasText('Title', 'Column "Title" has correct description');
    assert
      .dom('[data-test-table-solution]')
      .hasText('Solution', 'Column "Solution" has correct description');
    assert
      .dom('[data-test-table-downtime]')
      .hasText(
        'Downtime [min]',
        'Column "Donwtime [min]" has correct description'
      );
    assert
      .dom('[data-test-table-created-date]')
      .hasText('Created date', 'Column "Create date" has correct description');
  });
});
