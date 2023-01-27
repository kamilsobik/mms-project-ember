import { module, test } from 'qunit';
import { setupRenderingTest } from 'mms-ember-project/tests/helpers';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | users/list', function (hooks) {
  setupRenderingTest(hooks);

  test('check display correct users list', async function (assert) {
    const model = [
      {
        id: 2,
        username: 'requestor',
        password: 'requestor123',
        email: 'requestor@gmail.com',
        userType: 'requestor',
      },
      {
        id: 3,
        username: 'responder',
        password: 'responder123',
        email: 'responder@gmail.com',
        userType: 'responder',
      },
      {
        id: 1,
        username: 'admin',
        password: 'admin123',
        email: 'admin@gmail.com',
        userType: 'admin',
      },
    ];

    this.set('model', model);
    await render(hbs`<Users::List @model={{this.model}}/>`);
    assert.dom('[data-test-table-username]').hasText('Username');
    assert.dom('[data-test-table-emial]').hasText('Email');
    assert.dom('[data-test-table-password]').hasText('Password');
    assert.dom('[data-test-table-user-type]').hasText('User Type');
    assert.dom('[data-test-table-edit-user]').hasText('Edit user');
    assert.dom("[data-test-tr='0'] [data-test-td-usertype]").hasText('admin');
    assert
      .dom("[data-test-tr='1'] [data-test-td-usertype]")
      .hasText('requestor');
    assert
      .dom("[data-test-tr='2'] [data-test-td-usertype]")
      .hasText('responder');
  });
});
