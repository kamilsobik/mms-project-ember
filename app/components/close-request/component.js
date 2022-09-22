import Component from '@glimmer/component';
import { inject as service } from '@ember/service';

export default class CloseRequestComponent extends Component {
  @service store;
  @service session;

  get closedfilteredRequests() {
    return this.args.model
      .filter(({ status }) => status === 'open')
      .sortBy('type', 'createdAt')
      .reverse();
  }
}
