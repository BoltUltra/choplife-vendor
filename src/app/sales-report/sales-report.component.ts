import { Component, OnInit } from '@angular/core';
import Chart from 'chart.js/auto';

@Component({
  selector: 'app-sales-report',
  templateUrl: './sales-report.component.html',
  styleUrls: ['./sales-report.component.css'],
})
export class SalesReportComponent implements OnInit {
  ngOnInit(): void {
    this.RenderChart();
    this.dougnutchart();
    this.BarChart();
  }

  RenderChart() {
    const myChart = new Chart('piechart', {
      type: 'line',
      data: {
        labels: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
        datasets: [
          {
            label: 'sales data',
            data: [
              525, 275, 750, 265, 535, 265, 220, 245, 480, 751, 620, 480, 520,
              1000,
            ],
            fill: false,
            borderColor: 'rgb(99, 102, 241,1)',
            tension: 0.1,
            borderWidth: 2,
          },
        ],
      },
      options: {
        scales: {
          y: {
            beginAtZero: true,
          },
        },
      },
    });
  }
  dougnutchart() {
    const myChart = new Chart('doughnutchart', {
      type: 'doughnut',
      data: {
        labels: ['Card', 'Transfer'],
        datasets: [
          {
            data: [1200000, 3800000],
            backgroundColor: ['#5c7e64', '#c1cf65'],
            // hoverOffset: 4
          },
        ],
      },
    });
  }
  BarChart() {
    const myChart = new Chart('barchart', {
      type: 'bar',
      data: {
        labels: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
        datasets: [
          {
            label: '',
            data: [525, 275, 265, 220, 480, 751, 620, 480, 520, 1000],
            // fill: false,
            backgroundColor: [
              '#C1CF65',
              '#C1CF65',
              '#C1CF65',
              '#C1CF65',
              '#C1CF65',
              '#C1CF65',
              '#C1CF65',
              '#C1CF65',
              '#5C7E64',
              '#C1CF65',
            ],
          },
        ],
      },
      options: {
        scales: {
          y: {
            beginAtZero: true,
          },
        },
      },
    });
  }
}
