import Component from '@glimmer/component';
import { action } from '@ember/object';
import { inject as service } from '@ember/service';

export default class IndexComponent extends Component {
  @service session;
  @service router;

  @action
  onShowLogout() {
    this.session.logoutUser();
  }

  @action
  onShowRequest() {
    this.router.transitionTo('home.requests');
  }

  @action
  onShowKpi() {
    this.router.transitionTo('home.kpi');
  }

  @action
  onShowArchive() {
    this.router.transitionTo('home.request-archive');
  }
}
