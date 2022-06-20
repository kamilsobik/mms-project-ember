import Route from '@ember/routing/route';

export default class RequestsRoute extends Route {
  model() {
    const requests = [
      {
        id: 1,
        type: 'breakdown',
        requestor: 'user1',
        responder: 'user4',
        machine: 'machine 1',
        title: 'Problem with air cylinder',
        downtime: '30',
        createdDate: '10.05.2022',
        status: 'open',
      },
      {
        id: 1,
        type: 'fault',
        requestor: 'user2',
        responder: 'user4',
        machine: 'machine 2',
        title: 'slow working station 3',
        downtime: '60',
        createdDate: '27.05.2022',
        status: 'open',
      },
      {
        id: 1,
        type: 'tpm',
        requestor: 'user3',
        responder: 'user4',
        machine: 'machine 3',
        title: 'Problem with air cylinder',
        downtime: '250',
        createdDate: '28.05.2022',
        status: 'closed',
      },
    ];
    return requests;
  }
}
