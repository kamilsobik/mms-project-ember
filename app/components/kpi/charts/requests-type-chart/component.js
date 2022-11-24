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
          data: this.args.tableOfMonthsWithRequestsTpm,
        },
        {
          label: 'Fault',
          fill: false,
          borderColor: 'rgb(255, 180, 1)',
          lineTension: 0.2,
          pointRadius: 5,
          data: this.args.tableOfMonthsWithRequestsFault,
        },
        {
          label: 'Breakdown',
          fill: false,
          borderColor: 'rgb(255, 0, 0)',
          lineTension: 0.2,
          pointRadius: 5,
          data: this.args.tableOfMonthsWithRequestsBreakdown,
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
              max: 6,
            },
          },
        ],
      },
    };
    return options;
  }
}
