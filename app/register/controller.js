import Controller from '@ember/controller';
import { action } from '@ember/object';
import { inject as service } from '@ember/service';
import { storageFor } from 'ember-local-storage';

export default class RegisterController extends Controller {
  @service store;
  @service router;
  @storageFor('logged-as') loggedAs;

  @action
  onPropertyChange(key, event) {
    this.model[key] = event.target.value;
  }

  @action
  async onSubmit(event) {
    event.preventDefault();
    await this.model.save();
    this.router.transitionTo('login');
  }
}
