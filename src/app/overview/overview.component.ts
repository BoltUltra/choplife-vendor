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


  // filterData(): void {
  //   const query = this.searchQuery.trim().toLowerCase();
  //   if (query) {
  //     this.data = this.data.filter((item) =>
  //       Object.values(item)
  //         .map((value) => String(value).toLowerCase())
  //         .some((value) => value.includes(query))
  //     );
  //   } else {
  //     this.data = this.data;
  //   }
  //   this.currentPage = 1;
  // }

}
