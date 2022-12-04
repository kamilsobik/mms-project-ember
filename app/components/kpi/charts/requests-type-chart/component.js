import Component from '@glimmer/component';

export default class RequestTypeComponent extends Component {
  get chartData() {
    const commonOptions = {
      fill: false,
      lineTension: 0.2,
      pointRadius: 5,
    };

    return {
      labels: this.args.tableOfMonths,
      datasets: [
        {
          ...commonOptions,
          label: 'TPM',
          borderColor: 'rgb(0, 255, 0)',
          data: this.args.tableOfMonthsWithRequests('1.0 tpm'),
        },
        {
          ...commonOptions,
          label: 'Fault',
          borderColor: 'rgb(255, 180, 1)',
          data: this.args.tableOfMonthsWithRequests('2.0 fault'),
        },
        {
          ...commonOptions,
          label: 'Breakdown',
          borderColor: 'rgb(255, 0, 0)',
          data: this.args.tableOfMonthsWithRequests('3.0 breakdown'),
        },
      ],
    };
  }

  get chartOptions() {
    return {};
  }
}
