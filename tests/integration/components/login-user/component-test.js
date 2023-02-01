import { module, test } from 'qunit';
import { setupRenderingTest } from 'mms-ember-project/tests/helpers';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | login', function (hooks) {
  setupRenderingTest(hooks);

  test('check display correct login page elment', async function (assert) {
    await render(hbs`<LoginUser />`);

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
      .dom('[data-test-linkto-register]')
      .hasText(
        'Register new user',
        'Link "Register new user" has correct description'
      );
    assert
      .dom('[data-test-p-register]')
      .hasText(
        "Don't have an account? Register new user",
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
      .dom('[data-test-button-login]')
      .exists('Button "Login" has correct display');
    assert
      .dom('[data-test-button-google]')
      .exists('Button "Login google" has correct display');
  });
});
