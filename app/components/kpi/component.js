import Component from '@glimmer/component';
import { service } from '@ember/service';
import { format, getDaysInMonth } from 'date-fns';
import { action } from '@ember/object';

export default class KpiComponent extends Component {
  @service store;
  @service session;

  get tableOfMonths() {
    return Array.from({ length: 12 }, (_, index) =>
      format(new Date(2022, index), 'MMMM')
    );
  }

  get allClosedRequests() {
    return this.args.model.filter(({ status }) => status === 'closed');
  }

  get requestTypes() {
    return [...new Set(this.args.model.map(({ type }) => type))];
  }

  get machinesName() {
    return [...new Set(this.args.model.map(({ machine }) => machine))];
  }

  @action
  tableOfMonthsWithRequests(requestType) {
    return this.tableOfMonths.map(
      (month, index) =>
        this.allClosedRequests
          .filter(({ createdAt }) => createdAt.getMonth() === index)
          .filter(({ type }) => type === requestType).length
    );
  }

  @action numberOfRequestByType(requestType) {
    return this.machinesName.map(
      (machineName) =>
        this.allClosedRequests
          .filter(({ type }) => type === requestType)
          .filter(({ machine }) => machine === machineName).length
    );
  }

  get allBreakdowns() {
    return this.tableOfMonths.map((month, index) =>
      this.allClosedRequests.filter(
        ({ createdAt }) => createdAt.getMonth() === index
      )
    );
  }

  get numberOfBreakdowns() {
    return this.tableOfMonths.map(
      (month, index) =>
        this.allClosedRequests
          .filter(({ createdAt }) => createdAt.getMonth() === index)
          .filter(({ type }) => type === '3.0 breakdown').length
    );
  }

  get numberTimeOfBreakdowns() {
    return this.tableOfMonths
      .map((month, index) =>
        this.allClosedRequests
          .filter(({ createdAt }) => createdAt.getMonth() === index)
          .filter(({ type }) => type === '3.0 breakdown')
      )
      .map((month) => month.reduce((acc, { downtime }) => acc + downtime, 0));
  }

  get availibleHoursInMonths() {
    return this.tableOfMonths.map(
      (month, index) => getDaysInMonth(new Date(2022, index)) * 24
    );
  }

  get mtbf() {
    return this.tableOfMonths.map(
      (month, index) =>
        this.availibleHoursInMonths[index] / this.numberOfBreakdowns[index]
    );
  }

  get mttr() {
    return this.tableOfMonths.map(
      (month, index) =>
        this.numberTimeOfBreakdowns[index] / this.numberOfBreakdowns[index]
    );
  }
}
