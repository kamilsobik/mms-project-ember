import Component from '@glimmer/component';

export default class RequestTypeComponent extends Component {
  get chartData() {
    const data = {
      datasets: [
        {
          label: 'TPM',
          fill: false,
          borderColor: 'rgb(0, 255, 0)',
          lineTension: 0.2,
          pointRadius: 5,
          data: this.args.tableOfMonthsWithRequests('1.0 tpm'),
        },
        {
          label: 'Fault',
          fill: false,
          borderColor: 'rgb(255, 180, 1)',
          lineTension: 0.2,
          pointRadius: 5,
          data: this.args.tableOfMonthsWithRequests('2.0 fault'),
        },
        {
          label: 'Breakdown',
          fill: false,
          borderColor: 'rgb(255, 0, 0)',
          lineTension: 0.2,
          pointRadius: 5,
          data: this.args.tableOfMonthsWithRequests('3.0 breakdown'),
        },
      ],
      labels: this.args.tableOfMonths,
    };
    return data;
  }

  get chartOptions() {
    const options = {
      scales: {
        yAxes: [
          {
            ticks: {
              min: 0,
              max: 7,
            },
          },
        ],
      },
    };
    return options;
  }
}
