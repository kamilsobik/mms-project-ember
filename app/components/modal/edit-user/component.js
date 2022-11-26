import Component from '@glimmer/component';
import { action } from '@ember/object';
import { Changeset } from 'ember-changeset';
import { userTypes } from 'mms-ember-project/utils/form-data';

export default class ModalEditUserComponent extends Component {
  userTypes = userTypes;

  constructor(owner, args) {
    super(owner, args);
    this.changeset = Changeset(this.args.user);
  }

  @action
  onUserTypeChange(value) {
    this.changeset.userType = value;
  }

  @action
  onPasswordChange({ target: { value } }) {
    this.changeset.password = value;
  }

  @action
  onEmailChange({ target: { value } }) {
    this.changeset.email = value;
  }

  @action
  async onSaveChange() {
    await this.changeset.save();
    this.args.onClose();
  }

  @action
  async onDeleteUser() {
    await this.args.user.destroyRecord();
    this.args.onClose();
  }

  @action
  onCancel() {
    this.changeset.rollbackAttributes();
    this.args.onClose();
  }
}
