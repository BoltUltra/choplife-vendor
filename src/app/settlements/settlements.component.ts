import { Component, OnInit } from '@angular/core';
import Chart from 'chart.js/auto';

@Component({
  selector: 'app-settlements',
  templateUrl: './settlements.component.html',
  styleUrls: ['./settlements.component.css'],
})
export class SettlementsComponent implements OnInit {
  ngOnInit(): void {
    this.BarChart();
    this.RenderChart();
  }

  BarChart() {
    const myChart = new Chart('revenuechart', {
      type: 'bar',
      data: {
        labels: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
        datasets: [
          {
            label: '',
            data: [
              760, 150, 265, 100, 200, 251, 800, 700, 800, 250, 750, 200, 200,
            ],
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
              '#C1CF65',
              '#C1CF65',
              '#5C7E64',
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

  RenderChart() {
    const myChart = new Chart('linechart', {
      type: 'line',
      data: {
        labels: [0, 1, 2, 3, 4, 5],
        datasets: [
          {
            label: '',
            data: [5, 4, 1, 5, 1, 2],
            fill: {
              target: 'origin',
              above: '#C1E9CC',
              below: '#D6F0DD',
            },
            borderColor: '#32B657',
            pointBorderWidth: 0,
            showLine: true,
            borderWidth: 1,
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
