import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';
import moment from 'moment';

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
      userType: 'admin',
    };

    const user2 = {
      id: 2,
      username: 'requestor',
      password: 'requestor123',
      email: 'requestor@gmail.com',
      userType: 'requestor',
    };

    const user3 = {
      id: 3,
      username: 'responder',
      password: 'responder123',
      email: 'responder@gmail.com',
      userType: 'responder',
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
      createdAt: moment('2022-09-21 14:05:16').toDate(),
      status: 'closed',
      solution: 'Replace sensor A32.4',
    };

    const request2 = {
      id: 2,
      type: '2.0 fault',
      owner: user2Model,
      machine: 'machine 2',
      title: 'slow working station 3',
      downtime: '60',
      createdAt: moment('08.10.2022 9:30').toDate(),
      status: 'closed',
      solution: 'Checking program PLC',
    };

    const request3 = {
      id: 3,
      type: '1.0 tpm',
      owner: user2Model,
      machine: 'machine 3',
      title: 'Problem with air cylinder',
      downtime: '120',
      createdAt: moment('08.09.2022 23:11').toDate(),
      status: 'closed',
      solution: 'Replace air cylinder',
    };

    const request4 = {
      id: 4,
      type: '3.0 breakdown',
      owner: user1Model,
      machine: 'machine 3',
      title: 'Problem with motor',
      downtime: '75',
      createdAt: moment('08.08.2022 04:50').toDate(),
      status: 'closed',
      solution: 'Find problem with PLC - change logic in PLC',
    };

    const request5 = {
      id: 5,
      type: '2.0 fault',
      owner: user1Model,
      machine: 'machine 2',
      title: 'robot need change loading position',
      downtime: '30',
      createdAt: moment('08.07.2022 16:59').toDate(),
      status: 'closed',
      solution: 'change position',
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
