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

  get variant() {
    const { variant } = this.args;
    const isCorrectVariant = [
      'primary',
      'secondary',
      'success',
      'danger',
      'warning',
      'info',
      'light',
      'dark',
      'link',
    ].includes(variant);
    return isCorrectVariant ? `btn-${variant}` : '';
  }

  get buttonClasses() {
    const classes = ['btn'];
    const { size, variant } = this;
    if (size) {
      classes.push(size);
    }
    if (variant) {
      classes.push(variant);
    }
    return classes.join(' ');
  }

  @action
  onClick() {
    this.args.onClick?.(...arguments);
  }
}
