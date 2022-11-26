import Component from '@glimmer/component';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';

export default class UserTableUserTableRow extends Component {
  @tracked isShowUserModal = false;

  @action
  onShowUserModal() {
    this.isShowUserModal = true;
  }

  @action
  onHideUserModal() {
    this.isShowUserModal = false;
  }
}
