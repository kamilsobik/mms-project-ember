import Component from '@glimmer/component';

export default class RequestsListComponent extends Component {
  get filteredRequests() {
    return this.args.model
      .filter(({ status }) => status === 'open')
      .sortBy('type', 'createdAt')
      .reverse();
  }
}
