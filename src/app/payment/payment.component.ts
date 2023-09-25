import { Component, OnInit, AfterViewInit } from '@angular/core';
// import { Chart } from 'chart.js';
import Chart from 'chart.js/auto';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit, AfterViewInit {

  constructor() {}

  ngOnInit(): void {
    // Data for the bar chart
    const data = {
      labels: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12'],
      datasets: [
        {
          label: 'Bar Chart',
          backgroundColor: ['#5C7E64', '#C1CF65', '#C1CF65', '#C1CF65', '#C1CF65', '#C1CF65', '#C1CF65', '#C1CF65', '#C1CF65', '#C1CF65', '#C1CF65', '#C1CF65', '#C1CF65'],
          data: [0, 250, 500, 750, 1000, 800, 600, 400, 300, 200, 100, 50, 25] // Heights of the bars
        }
      ]
    };

     // Configuration options for the chart
     const options = {
      scales: {
        y: {
          beginAtZero: true,
          ticks: {
            stepSize: 250,
            min: 0,
            max: 1000
          }
        }
      }
    };

    // Create the bar chart
    const ctx = document.getElementById('barChart') as HTMLCanvasElement;
    const barChart = new Chart(ctx, {
      type: 'bar',
      data: data,
      options: options
    });

    const chartContext = document.getElementById('circleChart') as HTMLCanvasElement;
    const myChart = new Chart(chartContext, {
      type: 'doughnut',
      data: {
        labels: ['Card', 'Transfer', 'Cash'],
        datasets: [
          {
            data: [3200000, 2500000, 1800000],
            backgroundColor: ['#5C7E64', '#C1CF65', '#F2FFCD']
          }
        ]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        cutout: 80,
      }
    });
  }

  ngAfterViewInit(): void {
    this.renderChart('balanceChart', [5, 4, 1, 5, 1, 2]);
    this.renderChart('revenueChart', [3, 2, 4, 6, 5, 7]);
    this.renderChart('netEarningChart', [2, 3, 2, 4, 3, 5]);
  }

  renderChart(chartId: string, dataPoints: number[]) {
    const ctx = document.getElementById(chartId) as HTMLCanvasElement;
    new Chart(ctx, {
      type: 'line',
      data: {
        labels: ['Label 1', 'Label 2', 'Label 3', 'Label 4', 'Label 5', 'Label 6'],
        datasets: [
          {
            label: '',
            data: dataPoints,
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
            display: false,
          },
          x: {
            display: false,
          }
        },
      },
    });
  }

}








