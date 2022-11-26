import Component from '@glimmer/component';
import { action } from '@ember/object';
import { service } from '@ember/service';
import { machines, requestTypes } from 'mms-ember-project/utils/form-data';

export default class ProvidersOpenRequestComponent extends Component {
  @service store;
  @service session;
  @service router;

  machines = machines;
  requestTypes = requestTypes;

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
  onSelectionChange(key, machine) {
    this.record[key] = machine;
  }

  @action
  onTypeSelectionChange(key, type) {
    this.record[key] = type;
  }

  @action
  onPropertyChange(key, value) {
    this.record[key] = value;
  }

  @action
  async onCreatNewRequest() {
    this.record.save();
    this.redirectionAfterNewRequest();
  }

  redirectionAfterNewRequest() {
    this.router.transitionTo('home.requests');
  }

  willDestroy() {
    super.willDestroy(...arguments);
    if (this.record.isNew) {
      this.record.destroyRecord();
    }
  }
}
