import Component from '@glimmer/component';

export default class RequestTypeMachineComponent extends Component {
  get chartData() {
    const data = {
      labels: this.args.machinesName,
      datasets: [
        {
          label: 'Breakdown',
          data: this.args.numberOfRequestByTypeBreakdown,
          fill: true,
          backgroundColor: 'rgba(255, 99, 132, 0.2)',
          borderColor: 'rgb(255, 99, 132)',
          pointRadius: 5,
          pointHoverBorderColor: 'rgb(255, 99, 132)',
        },
        {
          label: 'Fault',
          data: this.args.numberOfRequestByTypeFault,
          fill: true,
          backgroundColor: 'rgba(255, 205, 86, 0.2)',
          borderColor: 'rgb(255, 205, 86)',
          pointRadius: 5,
          pointHoverBorderColor: 'rgb(255, 205, 86)',
        },
        {
          label: 'TPM',
          data: this.args.numberOfRequestByTypeTPM,
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
