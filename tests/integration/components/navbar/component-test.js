import { module, test } from 'qunit';
import { setupRenderingTest } from 'mms-ember-project/tests/helpers';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | navbar', function (hooks) {
  setupRenderingTest(hooks);

  test('display correct routes for users responder type', async function (assert) {
    const sessionService = this.owner.lookup('service:session');
    sessionService.set('currentUser', { userType: 'responder' });

    await render(hbs`<Navbar/>`);
    assert
      .dom('[data-test-main-link]')
      .hasText('Main page', 'Link "Main page" has correct description');
    assert
      .dom('[data-test-requests-link]')
      .hasText('Requests', 'Link "Requests" has correct description');
    assert
      .dom(this.element)
      .doesNotIncludeText(
        'Open new request',
        'This user type do not see "Open new request" link'
      );
    assert
      .dom('[data-test-close-request-link]')
      .hasText('Close request', 'Link "Close request" has correct description');
    assert
      .dom(this.element)
      .doesNotIncludeText('Users', 'This user type do not see "Users" link');
    assert
      .dom('[data-test-kpi-link]')
      .hasText('KPI', 'Link "KPI" has correct description');
    assert
      .dom('[data-test-archive-link]')
      .hasText('Archive', 'Link "Archive" has correct description');
    assert
      .dom('[data-test-logout-link]')
      .hasText('Logout', 'Link "Logout" has correct description');
  });

  test('display correct routes for users requestor type', async function (assert) {
    const sessionService = this.owner.lookup('service:session');
    sessionService.set('currentUser', { userType: 'requestor' });

    await render(hbs`<Navbar/>`);
    assert
      .dom('[data-test-main-link]')
      .hasText('Main page', 'Link "Main page" has correct description');
    assert
      .dom('[data-test-requests-link]')
      .hasText('Requests', 'Link "Requests" has correct description');
    assert
      .dom('[data-test-open-request-link]')
      .hasText(
        'Open new request',
        'Link "Open request" has correct description'
      );
    assert
      .dom(this.element)
      .doesNotIncludeText(
        'Close request',
        'This user type do not see "Close request" link'
      );
    assert
      .dom(this.element)
      .doesNotIncludeText('Users', 'This user type do not see "Users" link');
    assert
      .dom('[data-test-kpi-link]')
      .hasText('KPI', 'Link "KPI" has correct description');
    assert
      .dom('[data-test-archive-link]')
      .hasText('Archive', 'Link "Archive" has correct description');
    assert
      .dom('[data-test-logout-link]')
      .hasText('Logout', 'Link "Logout" has correct description');
  });

  test('display correct routes for users admin type', async function (assert) {
    const sessionService = this.owner.lookup('service:session');
    sessionService.set('currentUser', { userType: 'admin' });

    await render(hbs`<Navbar/>`);
    assert
      .dom('[data-test-main-link]')
      .hasText('Main page', 'Link "Main page" has correct description');
    assert
      .dom('[data-test-requests-link]')
      .hasText('Requests', 'Link "Requests" has correct description');
    assert
      .dom('[data-test-open-request-link]')
      .hasText(
        'Open new request',
        'Link "Open new request" has correct description'
      );
    assert
      .dom('[data-test-close-request-link]')
      .hasText('Close request', 'Close "Requests" has correct description');
    assert
      .dom('[data-test-users-link]')
      .hasText('Users', 'Users" has correct description');
    assert
      .dom('[data-test-kpi-link]')
      .hasText('KPI', 'Link "KPI" has correct description');
    assert
      .dom('[data-test-archive-link]')
      .hasText('Archive', 'Link "Archive" has correct description');
    assert
      .dom('[data-test-logout-link]')
      .hasText('Logout', 'Link "Logout" has correct description');
  });
});
