import Component from '@glimmer/component';
import { action } from '@ember/object';

export default class ModalShowRequestComponent extends Component {
  @action
  onSolutionChange(event) {
    this.args.request.solution = event.target.value;
  }

  @action
  onDowntimeChange(event) {
    this.args.request.downtime = event.target.value;
  }

  @action
  onSaveChange() {
    this.args.request.status = 'closed';
    this.args.request.save();
    this.args.onClose();
  }

  @action
  onCancel() {
    this.args.request.rollbackAttributes();
    this.args.onClose();
  }
}
