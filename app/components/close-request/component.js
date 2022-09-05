import Component from '@glimmer/component';

export default class CloseRequestComponent extends Component {
  get closedfilteredRequests() {
    return this.args.model
      .filter(({ status }) => status === 'closed')
      .sortBy('type', 'createdAt')
      .reverse();
  }
}
