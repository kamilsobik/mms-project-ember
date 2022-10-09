import Component from '@glimmer/component';
import { inject as service } from '@ember/service';

export default class UsersListComponent extends Component {
  @service store;
  @service session;

  get filteredUserList() {
    return this.args.model.sortBy('userType');
  }
}
