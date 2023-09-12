import { Component, OnInit } from '@angular/core';
import { Chart } from 'chart.js';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {

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
  }
}







