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
          data: [8, 6, 9, 7, 8, 10, 6, 11, 8, 7, 12, 7],
        },
        {
          label: 'Fault',
          fill: false,
          borderColor: 'rgb(255, 180, 1)',
          lineTension: 0.2,
          pointRadius: 5,
          data: [6, 5, 5, 3, 4, 2, 4, 0, 6, 6, 2, 4],
        },
        {
          label: 'Breakdown',
          fill: false,
          borderColor: 'rgb(255, 0, 0)',
          lineTension: 0.2,
          pointRadius: 5,
          data: [2, 1, 3, 1, 2, 3, 2, 1, 5, 3, 4, 3],
        },
      ],
      labels: [
        'January',
        'February',
        'March',
        'April',
        'May',
        'June',
        'July',
        'August',
        'September',
        'October',
        'November',
        'December',
      ],
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
              max: 14,
            },
          },
        ],
      },
    };
    return options;
  }
}
