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
    assert.dom('[data-test-main-link]').hasText('Main page');
    assert.dom('[data-test-requests-link]').hasText('Requests');
    assert.dom(this.element).doesNotIncludeText('Open new request');
    assert.dom('[data-test-close-request-link]').hasText('Close request');
    assert.dom(this.element).doesNotIncludeText('Users');
    assert.dom('[data-test-kpi-link]').hasText('KPI');
    assert.dom('[data-test-archive-link]').hasText('Archive');
    assert.dom('[data-test-logout-link]').hasText('Logout');
  });

  test('display correct routes for users requestor type', async function (assert) {
    const sessionService = this.owner.lookup('service:session');
    sessionService.set('currentUser', { userType: 'requestor' });

    await render(hbs`<Navbar/>`);
    assert.dom('[data-test-main-link]').hasText('Main page');
    assert.dom('[data-test-requests-link]').hasText('Requests');
    assert.dom('[data-test-open-request-link]').hasText('Open new request');
    assert.dom(this.element).doesNotIncludeText('Close request');
    assert.dom(this.element).doesNotIncludeText('Users');
    assert.dom('[data-test-kpi-link]').hasText('KPI');
    assert.dom('[data-test-archive-link]').hasText('Archive');
    assert.dom('[data-test-logout-link]').hasText('Logout');
  });

  test('display correct routes for users admin type', async function (assert) {
    const sessionService = this.owner.lookup('service:session');
    sessionService.set('currentUser', { userType: 'admin' });

    await render(hbs`<Navbar/>`);
    assert.dom('[data-test-main-link]').hasText('Main page');
    assert.dom('[data-test-requests-link]').hasText('Requests');
    assert.dom('[data-test-open-request-link]').hasText('Open new request');
    assert.dom('[data-test-close-request-link]').hasText('Close request');
    assert.dom('[data-test-users-link]').hasText('Users');
    assert.dom('[data-test-kpi-link]').hasText('KPI');
    assert.dom('[data-test-archive-link]').hasText('Archive');
    assert.dom('[data-test-logout-link]').hasText('Logout');
  });
});
