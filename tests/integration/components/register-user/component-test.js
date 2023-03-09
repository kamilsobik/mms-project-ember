import { module, test } from 'qunit';
import { setupRenderingTest } from 'mms-ember-project/tests/helpers';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | register-user', function (hooks) {
  setupRenderingTest(hooks);

  test('check display correct login page elment', async function (assert) {
    await render(hbs`<RegisterUser />`);

    assert
      .dom('[data-test-title]')
      .hasText(
        'Computerised Maintenance Management System',
        'Page has correct title'
      );
    assert
      .dom('[data-test-label-login]')
      .hasText('Login', 'Label "Login" has correct description');
    assert
      .dom('[data-test-label-password]')
      .hasText('Password', 'Label "Password" has correct description');
    assert
      .dom('[data-test-label-email]')
      .hasText('Email', 'Label "Email" has correct description');
    assert
      .dom('[data-test-linkto-login]')
      .hasText('Login page', 'Link "Login page" has correct description');
    assert
      .dom('[data-test-p-login]')
      .hasText(
        'Back to login page: Login page',
        'Link description "account" has correct description'
      );
    assert
      .dom('[data-test-photo]')
      .hasAttribute(
        'src',
        `https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp`,
        'Displays correct photo'
      );
    assert
      .dom('[data-test-input-login]')
      .exists('Input "Login" has correct display');
    assert
      .dom('[data-test-input-password]')
      .exists('Input "Password" has correct display');
    assert
      .dom('[data-test-input-email]')
      .exists('Input "email" has correct display');
    assert
      .dom('[data-test-button-register]')
      .exists('Button "Register" has correct display');
  });
});
