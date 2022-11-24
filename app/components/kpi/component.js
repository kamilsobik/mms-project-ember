import Component from '@glimmer/component';
import { service } from '@ember/service';
import { format, getDaysInMonth } from 'date-fns';

export default class KpiComponent extends Component {
  @service store;
  @service session;

  get tableOfMonths() {
    const arrayOfMonths = Array.from({ length: 12 }, (_, index) =>
      format(new Date(2022, index), 'MMMM')
    );
    return arrayOfMonths;
  }

  get allClosedRequests() {
    return this.args.model.filter(({ status }) => status === 'closed');
  }

  get requestTypes() {
    return [
      ...new Set(
        this.args.model.map((request) => {
          return request.type;
        })
      ),
    ];
  }

  get machinesName() {
    return [
      ...new Set(
        this.args.model.map((request) => {
          return request.machine;
        })
      ),
    ];
  }

  get tableOfMonthsWithRequestsTpm() {
    return this.tableOfMonths.map((month, index) => {
      return this.allClosedRequests
        .filter((request) => {
          let requestMonth = request.createdAt.getMonth();
          return requestMonth === index;
        })
        .filter((request) => {
          return request.type === '1.0 tpm';
        }).length;
    });
  }

  get tableOfMonthsWithRequestsFault() {
    return this.tableOfMonths.map((month, index) => {
      return this.allClosedRequests
        .filter((request) => {
          let requestMonth = request.createdAt.getMonth();
          return requestMonth === index;
        })
        .filter((request) => {
          return request.type === '2.0 fault';
        }).length;
    });
  }

  get tableOfMonthsWithRequestsBreakdown() {
    return this.tableOfMonths.map((month, index) => {
      return this.allClosedRequests
        .filter((request) => {
          let requestMonth = request.createdAt.getMonth();
          return requestMonth === index;
        })
        .filter((request) => {
          return request.type === '3.0 breakdown';
        }).length;
    });
  }

  get numberOfRequestByTypeTPM() {
    return this.machinesName.map((machine) => {
      return this.allClosedRequests
        .filter((request) => {
          return request.type === '1.0 tpm';
        })
        .filter((request) => {
          return request.machine === machine;
        }).length;
    });
  }

  get numberOfRequestByTypeFault() {
    return this.machinesName.map((machine) => {
      return this.allClosedRequests
        .filter((request) => {
          return request.type === '2.0 fault';
        })
        .filter((request) => {
          return request.machine === machine;
        }).length;
    });
  }

  get numberOfRequestByTypeBreakdown() {
    return this.machinesName.map((machine) => {
      return this.allClosedRequests
        .filter((request) => {
          return request.type === '3.0 breakdown';
        })
        .filter((request) => {
          return request.machine === machine;
        }).length;
    });
  }

  get availibleHoursInMonths() {
    return this.tableOfMonths.map((month, index) => {
      let daysInMonth = getDaysInMonth(new Date(2022, index));
      let availibleHoursInMonths = daysInMonth * 24;
      return availibleHoursInMonths;
    });
  }

  // get numberOfRequestsByType() {
  //   return [
  //     ...this.requestTypes.map((type) => {
  //       return this.args.model.filter((request) => {
  //         return request.type === type;
  //       }).length;
  //     }),
  //   ];
  // }
}
