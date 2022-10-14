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

  get isRequestorUserType() {
    return Boolean(
      this.session.currentUser.userType === 'requestor' || this.isAdminUserType
    );
  }
  get isResponderUserType() {
    return Boolean(
      this.session.currentUser.userType === 'responder' || this.isAdminUserType
    );
  }

  get isAdminUserType() {
    return Boolean(this.session.currentUser.userType === 'admin');
  }

  @action onLogout() {
    this.session.logoutUser();
  }
}
