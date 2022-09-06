import Component from '@glimmer/component';

export default class CloseRequestComponent extends Component {
  get closedfilteredRequests() {
    return this.args.model
      .filter(({ status }) => status === 'open')
      .sortBy('type', 'createdAt')
      .reverse();
  }
}
