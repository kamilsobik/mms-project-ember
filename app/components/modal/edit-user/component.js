import Component from '@glimmer/component';
import { action } from '@ember/object';

export default class ModalEditUserComponent extends Component {
  @action
  onUserTypeChange(property, { target: { value } }) {
    this.args.user[property] = value;
  }

  @action
  onPasswordChange({ target: { value } }) {
    this.args.user.password = value;
  }
  @action
  onEmailChange({ target: { value } }) {
    this.args.user.email = value;
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
