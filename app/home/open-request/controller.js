import Controller from '@ember/controller';
import { action } from '@ember/object';
import { inject as service } from '@ember/service';
import { tracked } from '@glimmer/tracking';

export default class OpenRequestController extends Controller {
  @service store;
  @service router;
  @tracked loggedAs;
  @service session;
  @tracked currentUser;

  get hasEmptyField() {
    return !(this.title && this.machine && this.type);
  }

  @action
  onTypeChange(event) {
    this.model.type = event.target.value;
  }

  @action
  onMachineChange(event) {
    this.model.machine = event.target.value;
  }

  @action
  onTitleChange(event) {
    this.model.title = event.target.value;
  }

  @action
  async onCreatNewRequest() {
    this.model.owner = this.session.currentUser;
    await this.model.save();
    this.redirectionAfterNewRequest();
  }

  redirectionAfterNewRequest() {
    this.router.transitionTo('home.requests');
    return;
  }
}
