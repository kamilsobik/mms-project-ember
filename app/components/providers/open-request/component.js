import Component from '@glimmer/component';
import { action } from '@ember/object';
import { service } from '@ember/service';

export default class HomeOpenRequestComponent extends Component {
  @service store;
  @service session;
  @service router;

  constructor() {
    super(...arguments);
    this.record = this.store.createRecord('request');
    this.record.owner = this.session.currentUser;
  }

  get hasEmptyField() {
    const { title, machine, type } = this.record;
    return !(title && machine && type);
  }

  @action
  onPropertyChange(key, event) {
    this.record[key] = event.target.value;
  }

  @action
  async onCreatNewRequest() {
    this.record.save();
    this.redirectionAfterNewRequest();
  }

  redirectionAfterNewRequest() {
    this.router.transitionTo('home.requests');
    return;
  }

  willDestroy() {
    super.willDestroy(...arguments);
    if (this.record.hasDirtyAttributes) {
      this.record.destroyRecord();
    }
  }
}
