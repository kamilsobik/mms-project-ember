import Controller from '@ember/controller';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';
import { inject as service } from '@ember/service';
import Auth0Lock from 'auth0-lock';

const clientId = 'pVMVBa4Xdu2xiOZFI6EMfSEq9PNNdVYD';
const domain = 'dev-9n0-z7z7.us.auth0.com';
export default class LoginController extends Controller {
  @service store;
  @tracked loginValue;
  @tracked passwordValue;
  @service session;

  @action
  onLoginChange(event) {
    this.loginValue = event.target.value;
  }

  @action
  onPasswordChange(event) {
    this.passwordValue = event.target.value;
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
