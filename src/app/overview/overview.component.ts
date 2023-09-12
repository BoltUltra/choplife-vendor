import { Component, OnInit, ViewChild } from '@angular/core';

// import { Chart, ChartConfiguration, ChartEvent, ChartType } from 'chart.js';
import Chart from 'chart.js/auto';

// import { BaseChartDirective } from 'ng2-charts';


// import Annotation from 'chartjs-plugin-annotation';


@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.css']
})
export class OverviewComponent implements OnInit {
  
  // private newLabel? = 'New label';


  box= [
    { text: 'Pending Orders', number: '$3,450' },
    {
      text: 'Total Orders counts',
      number: '$3,450',

    },
    {
      text: 'Total earnings',
      number: '$56,060.00',

    },
  ];

  constructor(){
    // Chart.register(Annotation);
  }


  // public lineChartData: ChartConfiguration['data'] = {
  //   datasets: [
  //     {
  //       data: [65, 59, 80, 81, 56, 55, 40],
  //       label: 'Series A',
  //       backgroundColor: 'rgba(148,159,177,0.2)',
  //       borderColor: 'rgba(148,159,177,1)',
  //       pointBackgroundColor: 'rgba(148,159,177,1)',
  //       pointBorderColor: '#fff',
  //       pointHoverBackgroundColor: '#fff',
  //       pointHoverBorderColor: 'rgba(148,159,177,0.8)',
  //       fill: 'origin',
  //     },
  //     {
  //       data: [28, 48, 40, 19, 86, 27, 90],
  //       label: 'Series B',
  //       backgroundColor: 'rgba(77,83,96,0.2)',
  //       borderColor: 'rgba(77,83,96,1)',
  //       pointBackgroundColor: 'rgba(77,83,96,1)',
  //       pointBorderColor: '#fff',
  //       pointHoverBackgroundColor: '#fff',
  //       pointHoverBorderColor: 'rgba(77,83,96,1)',
  //       fill: 'origin',
  //     },
  //     {
  //       data: [180, 480, 770, 90, 1000, 270, 400],
  //       label: 'Series C',
  //       yAxisID: 'y1',
  //       backgroundColor: 'rgba(255,0,0,0.3)',
  //       borderColor: 'red',
  //       pointBackgroundColor: 'rgba(148,159,177,1)',
  //       pointBorderColor: '#fff',
  //       pointHoverBackgroundColor: '#fff',
  //       pointHoverBorderColor: 'rgba(148,159,177,0.8)',
  //       fill: 'origin',
  //     },
  //   ],
  //   labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
  // };

  // public lineChartOptions: ChartConfiguration['options'] = {
  //   elements: {
  //     line: {
  //       tension: 0.5,
  //     },
  //   },
  //   scales: {
  //     // We use this empty structure as a placeholder for dynamic theming.
  //     y: {
  //       position: 'left',
  //     },
  //     y1: {
  //       position: 'right',
  //       grid: {
  //         color: 'rgba(255,0,0,0.3)',
  //       },
  //       ticks: {
  //         color: 'red',
  //       },
  //     },
  //   },

  //   // plugins: {
  //   //   legend: { display: true },
  //   //   annotation: {
  //   //     annotations: [
  //   //       {
  //   //         type: 'line',
  //   //         scaleID: 'x',
  //   //         value: 'March',
  //   //         borderColor: 'orange',
  //   //         borderWidth: 2,
  //   //         label: {
  //   //           display: true,
  //   //           position: 'center',
  //   //           color: 'orange',
  //   //           content: 'LineAnno',
  //   //           font: {
  //   //             weight: 'bold',
  //   //           },
  //   //         },
  //   //       },
  //   //     ],
  //   //   },
  //   // },
  // };

  // public lineChartType: ChartType = 'line';

  // @ViewChild(BaseChartDirective) chart?: BaseChartDirective;

  // private static generateNumber(i: number): number {
  //   return Math.floor(Math.random() * (i < 2 ? 100 : 1000) + 1);
  // }



  // events
  // public chartClicked({
  //   event,
  //   active,
  // }: {
  //   event?: ChartEvent;
  //   active?: object[];
  // }): void {
  //   console.log(event, active);
  // }

  // public chartHovered({
  //   event,
  //   active,
  // }: {
  //   event?: ChartEvent;
  //   active?: object[];
  // }): void {
  //   console.log(event, active);
  // }

  // public hideOne(): void {
  //   const isHidden = this.chart?.isDatasetHidden(1);
  //   this.chart?.hideDataset(1, !isHidden);
  // }



  // public changeColor(): void {
  //   this.lineChartData.datasets[2].borderColor = 'green';
  //   this.lineChartData.datasets[2].backgroundColor = `rgba(0, 255, 0, 0.3)`;

  //   this.chart?.update();
  // }

  // public changeLabel(): void {
  //   const tmp = this.newLabel;
  //   this.newLabel = this.lineChartData.datasets[2].label;
  //   this.lineChartData.datasets[2].label = tmp;

  //   this.chart?.update();
  // }
  ngOnInit(): void {
    this.RenderChart();
    this.dougnutchart();
  }

  RenderChart(){
    const myChart = new Chart("piechart", {
      type: 'line',
      data: {
          labels: [0,1,2,3,4,5,6,7,8,9,10,11,12],
          datasets: [{
            
            label: 'sales data',
            data: [525,275,750,265,535,265,220, 245, 480, 751,620,480,520],
            fill: false,
            borderColor: 'rgb(99, 102, 241,1)',
            tension: 0.1,
              borderWidth: 2
          }]
      },
      options: {
          scales: {
              y: {
                  beginAtZero: true
              }
          }
      }
  });
  }
  dougnutchart(){
    const myChart = new Chart("doughnutchart", {
      type: 'doughnut',
      data: {
          labels: ['Completed', 'Failed'],
          datasets: [{
            data: [3050,400],
            backgroundColor: [
              'rgb(92,126,100,1)',
              'rgb(244,38,38,1)'
            ],
            // hoverOffset: 4
          }]
      },
  
  });
  }

}
