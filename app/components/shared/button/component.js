import Component from '@glimmer/component';
import { action } from '@ember/object';

export default class SharedButtonComponenet extends Component {
  get type() {
    return this.args.type || 'button';
  }

  get size() {
    const { size } = this.args;
    const isCorrectSize = ['sm', 'md', 'lg'].includes(size);
    return isCorrectSize ? `btn-${size}` : '';
  }

  @action
  onClick() {
    this.args.onClick?.(...arguments);
  }
}
