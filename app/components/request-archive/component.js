import Component from '@glimmer/component';

export default class RequestArchiveComponent extends Component {
  get AllRequests() {
    return this.args.model
      .filter(({ status }) => status === 'closed')
      .sortBy('createdAt')
      .reverse();
  }
}
