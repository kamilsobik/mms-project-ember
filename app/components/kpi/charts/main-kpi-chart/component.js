import Component from '@glimmer/component';

export default class KpiMainKpiChartComponent extends Component {
  get chartData() {
    const data = {
      datasets: [
        {
          data: [75, 51, 67, 87, 55, 34, 67, 65, 76, 35, 45, 57],
          backgroundColor: 'rgba(75, 192, 192, 0.3)',
          hoverBackgroundColor: 'rgba(75, 192, 192, 0.7)',
          borderColor: 'rgb(75, 192, 192)',
          borderWidth: 1,
          barPercentage: 0.9,
          label: 'MTBF',
        },
        {
          data: [12, 16, 11, 5, 7, 12, 11, 3, 8, 4, 8, 5],
          backgroundColor: 'rgba(255, 99, 132, 0.3)',
          hoverBackgroundColor: 'rgba(255, 99, 132, 0.7)',
          borderColor: 'rgb(255, 99, 132)',
          borderWidth: 1,
          barPercentage: 0.9,
          label: 'MTTR',
        },
        {
          data: [45, 78, 67, 73, 49, 61, 69, 71, 59, 52, 43, 38],
          backgroundColor: 'rgba(255, 205, 86, 0.3)',
          hoverBackgroundColor: 'rgba(255, 205, 86, 0.7)',
          borderColor: 'rgb(255, 205, 86)',
          borderWidth: 1,
          barPercentage: 0.9,
          label: 'Downtime',
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
        xAxes: [
          {
            gridLines: {
              offsetGridLines: false,
            },
          },
        ],
      },
    };

    return options;
  }
}
