import Component from '@glimmer/component';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';

export default class RequestTableRequestTableRowComponent extends Component {
  @tracked isShowCreateModal = false;

  @action
  onShowModal() {
    this.isShowCreateModal = true;
  }

  @action
  onHideModal() {
    this.isShowCreateModal = false;
  }
}
