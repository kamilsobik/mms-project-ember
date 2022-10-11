import Component from '@glimmer/component';
import { action } from '@ember/object';
import { storageFor } from 'ember-local-storage';
import { inject as service } from '@ember/service';

export default class NavbarComponent extends Component {
  @storageFor('logged-as') loggedAs;
  @service session;

  get loginUserUsername() {
    return this.loggedAs.get('username');
  }

  get isUserTypeIsRequestor() {
    return Boolean(
      this.session.currentUser.userType === 'requestor' ||
        this.session.currentUser.userType === 'admin'
    );
  }

  get isUserTypeIsResponder() {
    return Boolean(
      this.session.currentUser.userType === 'responder' ||
        this.session.currentUser.userType === 'admin'
    );
  }

  get isUserTypeIsAdmin() {
    return Boolean(this.session.currentUser.userType === 'admin');
  }

  @action onLogout() {
    this.session.logoutUser();
  }
}
