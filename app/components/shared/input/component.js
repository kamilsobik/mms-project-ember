import Component from '@glimmer/component';
import { action } from '@ember/object';

export default class SharedInputComponenet extends Component {
  get type() {
    return this.args.type || 'input';
  }

  get chceckInputType() {
    return this.args.type || 'text';
  }

  get size() {
    const { size } = this.args;
    const isCorrectSize = ['sm', 'md', 'lg'].includes(size);
    return isCorrectSize ? `form-control-${size}` : '';
  }

  get inputClasses() {
    const classes = ['form-control'];
    const { size } = this;
    if (size) {
      classes.push(size);
    }
    return classes.join(' ');
  }

  @action
  onClick() {
    this.args.onClick?.(...arguments);
  }
}
