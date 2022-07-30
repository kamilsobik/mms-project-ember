import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default class ApplicationRoute extends Route {
  @service store;

  async beforeModel() {
    const isFilledDatabase = localStorage.length;
    if (isFilledDatabase) {
      return;
    }

    const user1 = {
      id: 1,
      username: 'admin',
      password: 'admin123',
      email: 'admin@admin.com',
      isRequestor: true,
    };
    const user2 = {
      id: 2,
      username: 'user',
      password: 'user123',
      email: 'user@user.com',
      isRequestor: false,
    };

    const user1Model = this.store.createRecord('user', user1);
    const user2Model = this.store.createRecord('user', user2);

    await user1Model.save();
    await user2Model.save();

    const request1 = {
      id: 1,
      type: 'breakdown',
      owner: user1Model,
      machine: 'machine 1',
      title: 'Problem with air cylinder',
      downtime: '30',
      createdDate: '10.05.2022',
      status: 'open',
    };
    const request2 = {
      id: 2,
      type: 'fault',
      owner: user2Model,
      machine: 'machine 2',
      title: 'slow working station 3',
      downtime: '60',
      createdDate: '27.05.2022',
      status: 'open',
    };
    const request3 = {
      id: 3,
      type: 'tpm',
      owner: user1Model,
      machine: 'machine 3',
      title: 'Problem with air cylinder',
      downtime: '250',
      createdDate: '28.05.2022',
      status: 'closed',
    };

    const request1Model = this.store.createRecord('request', request1);
    const request2Model = this.store.createRecord('request', request2);
    const request3Model = this.store.createRecord('request', request3);

    await request1Model.save();
    await request2Model.save();
    await request3Model.save();
  }
}
