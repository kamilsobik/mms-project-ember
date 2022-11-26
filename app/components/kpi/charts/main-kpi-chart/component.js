import Component from '@glimmer/component';

export default class KpiMainKpiChartComponent extends Component {
  get chartData() {
    const data = {
      datasets: [
        {
          data: this.args.mtbf,
          backgroundColor: 'rgba(75, 192, 192, 0.3)',
          hoverBackgroundColor: 'rgba(75, 192, 192, 0.7)',
          borderColor: 'rgb(75, 192, 192)',
          borderWidth: 1,
          barPercentage: 0.9,
          label: 'MTBF [h]',
        },
        {
          data: this.args.mttr,
          backgroundColor: 'rgba(255, 99, 132, 0.3)',
          hoverBackgroundColor: 'rgba(255, 99, 132, 0.7)',
          borderColor: 'rgb(255, 99, 132)',
          borderWidth: 1,
          barPercentage: 0.9,
          label: 'MTTR [h]',
        },
        {
          data: this.args.numberTimeOfBreakdowns,
          backgroundColor: 'rgba(255, 205, 86, 0.3)',
          hoverBackgroundColor: 'rgba(255, 205, 86, 0.7)',
          borderColor: 'rgb(255, 205, 86)',
          borderWidth: 1,
          barPercentage: 0.9,
          label: 'Downtime [h]',
        },
      ],
      labels: this.args.tableOfMonths,
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
