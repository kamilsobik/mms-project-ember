import Component from '@glimmer/component';

export default class RequestTypeMachineComponent extends Component {
  get chartData() {
    const data = {
      labels: [
        'Machine 1',
        'Machine 2',
        'Machine 3',
        'Machine 4',
        'Machine 5',
        'Machine 6',
      ],
      datasets: [
        {
          label: 'Breakdown',
          data: [3, 3, 2, 2, 3, 3],
          fill: true,
          backgroundColor: 'rgba(255, 99, 132, 0.2)',
          borderColor: 'rgb(255, 99, 132)',
          pointRadius: 5,
          pointHoverBorderColor: 'rgb(255, 99, 132)',
        },
        {
          label: 'Fault',
          data: [2, 4, 5, 3, 4, 5],
          fill: true,
          backgroundColor: 'rgba(255, 205, 86, 0.2)',
          borderColor: 'rgb(255, 205, 86)',
          pointRadius: 5,
          pointHoverBorderColor: 'rgb(255, 205, 86)',
        },
        {
          label: 'TPM',
          data: [4, 5, 3, 7, 6, 4],
          fill: true,
          backgroundColor: 'rgba(75, 192, 192, 0.2)',
          borderColor: 'rgb(75, 192, 192)',
          pointRadius: 5,
          pointHoverBorderColor: 'rgb(75, 192, 192)',
        },
      ],
    };
    return data;
  }

  get chartOptions() {
    const options = {
      scale: {
        angleLines: {
          display: false,
        },
        ticks: {
          suggestedMin: 0,
          suggestedMax: 8,
        },
      },
    };

    return options;
  }
}
