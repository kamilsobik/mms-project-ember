import Controller from '@ember/controller';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';
import { inject as service } from '@ember/service';
import { storageFor } from 'ember-local-storage';

export default class LoginController extends Controller {
  @service store;
  @tracked loginValue;
  @tracked passwordValue;
  @storageFor('logged-as') loggedAs;

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
    const users = await this.store.query('user', {
      filter: { username: this.loginValue, password: this.passwordValue },
    });

    const isUserExist = Boolean(users.length);
    if (isUserExist) {
      const user = users.firstObject;
      this.loggedAs.set('id', user.id);
      window.location.href = '/';
    }
  }
}
