import Component from '@glimmer/component';

export default class KpiMainKpiChartComponent extends Component {
  get chartData() {
    const commonOptions = {
      borderWidth: 1,
      barPercentage: 0.9,
    };

    return {
      labels: this.args.tableOfMonths,
      datasets: [
        {
          ...commonOptions,
          data: this.args.mtbf,
          backgroundColor: 'rgba(75, 192, 192, 0.3)',
          hoverBackgroundColor: 'rgba(75, 192, 192, 0.7)',
          borderColor: 'rgb(75, 192, 192)',
          label: 'MTBF [h]',
        },
        {
          ...commonOptions,
          data: this.args.mttr,
          backgroundColor: 'rgba(255, 99, 132, 0.3)',
          hoverBackgroundColor: 'rgba(255, 99, 132, 0.7)',
          borderColor: 'rgb(255, 99, 132)',
          label: 'MTTR [h]',
        },
        {
          ...commonOptions,
          data: this.args.numberTimeOfBreakdowns,
          backgroundColor: 'rgba(255, 205, 86, 0.3)',
          hoverBackgroundColor: 'rgba(255, 205, 86, 0.7)',
          borderColor: 'rgb(255, 205, 86)',
          label: 'Downtime [h]',
        },
      ],
    };
  }

  get chartOptions() {
    return {};
  }
}
