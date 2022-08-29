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
      email: 'admin@gmail.com',
      isRequestor: true,
      isAdmin: true,
    };

    const user2 = {
      id: 2,
      username: 'requestor',
      password: 'requestor123',
      email: 'requestor@gmail.com',
      isRequestor: true,
      isAdmin: false,
    };

    const user3 = {
      id: 3,
      username: 'responder',
      password: 'responder123',
      email: 'responder@gmail.com',
      isRequestor: false,
      isAdmin: false,
    };

    const user1Model = this.store.createRecord('user', user1);
    const user2Model = this.store.createRecord('user', user2);
    const user3Model = this.store.createRecord('user', user3);

    await user1Model.save();
    await user2Model.save();
    await user3Model.save();

    const request1 = {
      id: 1,
      type: '3.0 breakdown',
      owner: user1Model,
      machine: 'machine 1',
      title: 'Problem with air cylinder',
      downtime: '30',
      createdAt: '08.06.2022 15:35',
      status: 'open',
    };
    const request2 = {
      id: 2,
      type: '2.0 fault',
      owner: user2Model,
      machine: 'machine 2',
      title: 'slow working station 3',
      downtime: '60',
      createdAt: '08.10.2022 9:30',
      status: 'open',
    };
    const request3 = {
      id: 3,
      type: '1.0 tpm',
      owner: user2Model,
      machine: 'machine 3',
      title: 'Problem with air cylinder',
      downtime: '120',
      createdAt: '08.09.2022 23:11',
      status: 'closed',
    };

    const request4 = {
      id: 4,
      type: '3.0 breakdown',
      owner: user1Model,
      machine: 'machine 3',
      title: 'Problem with motor',
      downtime: '75',
      createdAt: '08.08.2022 04:50',
      status: 'closed',
    };

    const request5 = {
      id: 5,
      type: '2.0 fault',
      owner: user1Model,
      machine: 'machine 2',
      title: 'robot need change loading position',
      downtime: '30',
      createdAt: '08.07.2022 16:59',
      status: 'closed',
    };

    const request1Model = this.store.createRecord('request', request1);
    const request2Model = this.store.createRecord('request', request2);
    const request3Model = this.store.createRecord('request', request3);
    const request4Model = this.store.createRecord('request', request4);
    const request5Model = this.store.createRecord('request', request5);

    await request1Model.save();
    await request2Model.save();
    await request3Model.save();
    await request4Model.save();
    await request5Model.save();
  }
}
