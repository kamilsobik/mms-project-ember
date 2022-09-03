import Component from '@glimmer/component';
import { action } from '@ember/object';
import { inject as service } from '@ember/service';

export default class IndexComponent extends Component {
  @service session;
  @service router;

  @action
  onLogout() {
    this.session.logoutUser();
  }

  @action
  onRequest() {
    this.router.transitionTo('home.requests');
  }

  @action
  onKpi() {
    this.router.transitionTo('home.kpi');
  }

  @action
  onArchive() {
    this.router.transitionTo('home.request-archive');
  }
}
