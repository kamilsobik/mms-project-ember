import Component from '@glimmer/component';
import { service } from '@ember/service';
import { format, getDaysInMonth } from 'date-fns';
import { action } from '@ember/object';

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

  @action
  tableOfMonthsWithRequests(requestType) {
    return this.tableOfMonths.map((month, index) => {
      return this.allClosedRequests
        .filter(({ createdAt }) => {
          let requestMonth = createdAt.getMonth();
          return requestMonth === index;
        })
        .filter(({ type }) => {
          return type === requestType;
        }).length;
    });
  }

  @action numberOfRequestByType(requestType) {
    return this.machinesName.map((machine) => {
      return this.allClosedRequests
        .filter((request) => {
          return request.type === requestType;
        })
        .filter((request) => {
          return request.machine === machine;
        }).length;
    });
  }

  get numberOfBreakdowns() {
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

  get numberTimeOfBreakdowns() {
    return this.tableOfMonths
      .map((month, index) => {
        return this.allClosedRequests
          .filter(({ createdAt }) => {
            let requestMonth = createdAt.getMonth();
            return requestMonth === index;
          })
          .filter(({ type }) => {
            return type === '3.0 breakdown';
          });
      })
      .map((month) => month.reduce((acc, { downtime }) => acc + downtime, 0));
  }

  get availibleHoursInMonths() {
    return this.tableOfMonths.map((month, index) => {
      let daysInMonth = getDaysInMonth(new Date(2022, index));
      let availibleHoursInMonths = daysInMonth * 24;
      return availibleHoursInMonths;
    });
  }

  get mtbf() {
    return this.tableOfMonths.map((month, index) => {
      console.log(index);
      return (
        this.availibleHoursInMonths[index] / this.numberOfBreakdowns[index]
      );
    });
  }

  get mttr() {
    return this.tableOfMonths.map((month, index) => {
      console.log(index);
      return (
        this.numberTimeOfBreakdowns[index] / this.numberOfBreakdowns[index]
      );
    });
  }
}
