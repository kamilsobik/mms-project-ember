import Component from '@glimmer/component';
import { action } from '@ember/object';
import { inject as service } from '@ember/service';
import { storageFor } from 'ember-local-storage';

export default class RegisterUserComponent extends Component {
  @service store;
  @service router;
  @storageFor('logged-as') loggedAs;

  get user() {
    return this.args.model;
  }

  @action
  onPropertyChange(key, event) {
    this.user[key] = event.target.value;
  }

  @action
  async onSubmit(event) {
    event.preventDefault();

    await this.user.save();
    this.router.transitionTo('login');
  }
}
