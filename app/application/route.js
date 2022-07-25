import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default class ApplicationRoute extends Route {
  @service store;

  beforeModel() {
    const request1 = this.store.createRecord('request', {
      id: 1,
      type: 'breakdown',
      requestor: 'user1',
      responder: 'user4',
      machine: 'machine 1',
      title: 'Problem with air cylinder',
      downtime: '30',
      createdDate: '10.05.2022',
      status: 'open',
    });
    const request2 = this.store.createRecord('request', {
      id: 2,
      type: 'fault',
      requestor: 'user2',
      responder: 'user4',
      machine: 'machine 2',
      title: 'slow working station 3',
      downtime: '60',
      createdDate: '27.05.2022',
      status: 'open',
    });
    const request3 = this.store.createRecord('request', {
      id: 3,
      type: 'tpm',
      requestor: 'user3',
      responder: 'user4',
      machine: 'machine 3',
      title: 'Problem with air cylinder',
      downtime: '250',
      createdDate: '28.05.2022',
      status: 'closed',
    });
    request1.save();
    request2.save();
    request3.save();
  }
}
