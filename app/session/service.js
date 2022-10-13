import Service from '@ember/service';
import { tracked } from '@glimmer/tracking';
import { inject as service } from '@ember/service';
import { storageFor } from 'ember-local-storage';

export default class SessionService extends Service {
  @service store;
  @storageFor('logged-as') loggedAs;
  @tracked currentUser;

  get isUserLoggedIn() {
    return Boolean(this.loggedAs.get('id'));
  }

  async loginUser(login, password) {
    const users = await this.store.query('user', {
      filter: { username: login, password: password },
    });
    const isUserExist = Boolean(users.length);
    if (isUserExist) {
      const user = users.firstObject;
      this.loggedAs.set('id', user.id);
      window.location.href = '/';
    }
  }

  logoutUser() {
    this.loggedAs.set('id', null);
    window.location.href = '/login';
  }

  async setCurrentUser() {
    const userId = this.loggedAs.get('id');
    const user = await this.store.findRecord('user', userId);
    this.currentUser = user;
  }

  async loginOrRegisterByAuth0({ nickname: username, email }) {
    const password = '';
    const users = await this.store.query('user', {
      filter: { email },
    });
    let user = users.firstObject;
    if (!user) {
      user = await this.store
        .createRecord('user', {
          username,
          password,
          email,
        })
        .save();
    }

    this.loggedAs.set('id', user.id);
    window.location.href = '/';
  }
}
