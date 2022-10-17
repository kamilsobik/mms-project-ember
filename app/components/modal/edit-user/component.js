import Component from '@glimmer/component';
import { action } from '@ember/object';
import { userTypes } from 'mms-ember-project/utils/form-data';

export default class ModalEditUserComponent extends Component {
  userTypes = userTypes;

  @action
  onUserTypeChange(value) {
    this.args.user.userType = value;
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
