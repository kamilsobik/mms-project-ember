import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default class OpenRequestRoute extends Route {
  @service store;
}
