import Component from '@glimmer/component';

export default class RequestTypeMachineComponent extends Component {
  get chartData() {
    const commonOptions = {
      fill: true,
      barPercentage: 0.9,
      pointRadius: 5,
    };

    return {
      labels: this.args.machinesName,
      datasets: [
        {
          ...commonOptions,
          label: 'Breakdown',
          data: this.args.numberOfRequestByType('3.0 breakdown'),
          backgroundColor: 'rgba(255, 99, 132, 0.2)',
          borderColor: 'rgb(255, 99, 132)',
          pointHoverBorderColor: 'rgb(255, 99, 132)',
        },
        {
          ...commonOptions,
          label: 'Fault',
          data: this.args.numberOfRequestByType('2.0 fault'),
          backgroundColor: 'rgba(255, 205, 86, 0.2)',
          borderColor: 'rgb(255, 205, 86)',
          pointHoverBorderColor: 'rgb(255, 205, 86)',
        },
        {
          ...commonOptions,
          label: 'TPM',
          data: this.args.numberOfRequestByType('1.0 tpm'),
          backgroundColor: 'rgba(75, 192, 192, 0.2)',
          borderColor: 'rgb(75, 192, 192)',
          pointHoverBorderColor: 'rgb(75, 192, 192)',
        },
      ],
    };
  }

  get chartOptions() {
    return {
      scale: {
        angleLines: {
          display: false,
        },
      },
    };
  }
}
