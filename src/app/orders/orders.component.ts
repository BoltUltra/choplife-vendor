import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css'],
})
export class OrdersComponent implements OnInit {
  activeform: string = 'verification';

  selectform: string = '';

  showform1 = false;

  showform2 = false;

  box = [
    {
      text: 'Pending Orders',
      number: '450',
      new: 'New Orders',
      count: '150',
      new2: 'Processing',
      count2: '300',
      updates: 'Updated:15mins ago',
    },
    {
      text: 'Completed Orders',
      number: '550',
      new: 'Ready',
      count: '150',
      new2: 'Delivered',
      count2: '400',
      updates: 'Updated:30mins ago',
    },
    {
      text: 'Total Orders',
      number: '1000',
      new: 'Successful',
      count: '950',
      new2: 'Failed',
      count2: '50',
      updates: 'Updated:15mins ago',
    },

  ];
  constructor() {}
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
}
