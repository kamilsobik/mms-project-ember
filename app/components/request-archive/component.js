import Component from '@glimmer/component';

export default class RequestArchiveComponent extends Component {
  get allRequests() {
    return this.args.model
      .filter(({ status }) => status === 'closed')
      .sortBy('createdAt')
      .reverse();
  }
}
