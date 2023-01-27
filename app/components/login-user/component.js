import Component from '@glimmer/component';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';
import { inject as service } from '@ember/service';
import Auth0Lock from 'auth0-lock';
import ENV from 'mms-ember-project/config/environment';

const clientId = ENV.AUTH0_CLIENT_ID;
const domain = ENV.AUTH0_DOMAIN;

export default class LoginComponent extends Component {
  @service store;
  @tracked loginValue;
  @tracked passwordValue;
  @service session;

  @action
  onLoginChange(value) {
    this.loginValue = value;
  }

  @action
  onPasswordChange(value) {
    this.passwordValue = value;
  }

  @action
  async onSubmit(event) {
    event.preventDefault();
    const { loginValue, passwordValue } = this;
    await this.session.loginUser(loginValue, passwordValue);
  }

  @action
  async on0AuthLoginOrRegister() {
    const option = { auth: { redirect: false } };
    const lock = new Auth0Lock(clientId, domain, option);
    lock.show({ allowedConnections: ['google-oauth2'] });
    lock.on('authenticated', (authResult) => {
      lock.getUserInfo(authResult.accessToken, async (error, profileResult) => {
        if (error) {
          return;
        }
        const profile = profileResult;
        await this.session.loginOrRegisterByAuth0(profile);
      });
    });
  }
}
