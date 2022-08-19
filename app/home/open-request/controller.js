import Controller from '@ember/controller';
import { action } from '@ember/object';
import { inject as service } from '@ember/service';
import { tracked } from '@glimmer/tracking';

export default class OpenRequestController extends Controller {
  @service store;
  @service router;
  @service session;

  @tracked loggedAs;
  @tracked currentUser;
  @tracked title;
  @tracked machine;
  @tracked type;
  @tracked record;

  get hasEmptyField() {
    return !(this.title && this.machine && this.type);
  }

  @action
  onTypeChange(event) {
    this.type = event.target.value;
  }

  @action
  onMachineChange(event) {
    this.machine = event.target.value;
  }

  @action
  onTitleChange(event) {
    this.title = event.target.value;
  }

  @action
  async onCreatNewRequest() {
    this.record = {
      title: this.title,
      type: this.type,
      machine: this.machine,
      owner: this.session.currentUser,
    };
    const createNewRequest = await this.store.createRecord(
      'request',
      this.record
    );
    await createNewRequest.save();
    this.redirectionAfterNewRequest();
  }

  redirectionAfterNewRequest() {
    this.router.transitionTo('home.requests');
    return;
  }
}
