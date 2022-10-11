import Component from '@glimmer/component';
import { action } from '@ember/object';

export default class ModalEditUserComponent extends Component {
  @action
  onUserTypeChange(property, { target: { value } }) {
    this.args.user[property] = value;
  }

  @action
  onPasswordChange(event) {
    this.args.user.password = event.target.value;
  }

  @action
  onEmailChange(event) {
    this.args.user.email = event.target.value;
  }

  @action
  async onSaveChange() {
    await this.args.user.save();
    this.args.onClose();
  }

  @action
  async onDeleteUser() {
    await this.args.user.destroyRecord();
    this.args.onClose();
  }

  @action
  onCancel() {
    this.args.user.rollbackAttributes();
    this.args.onClose();
  }
}
