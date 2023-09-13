import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  private data: any[] = [
    {
      id: '#AD45',
      name: 'Random menu Name',
      numbers: '0',
      date: '23 Aug, 2023',
    },
    {
      id: '#AD45',
      name: 'Random menu Name',
      numbers: '4',
      date: '23 Aug, 2023',
    },
    {
      id: '#AD45',
      name: 'Random menu Name',
      numbers: '9',
      date: '23 Aug, 2023',
    },
    {
      id: '#AD45',
      name: 'Random menu Name',
      numbers: '2',
      date: '23 Aug, 2023',
    },
    {
      id: '#AD45',
      name: 'Random menu Name',
      numbers: '13',
      date: '23 Aug, 2023',
    },
    {
      id: '#AD45',
      name: 'Random menu Name',
      numbers: '0',
      date: '23 Aug, 2023',
    },
    {
      id: '#AD45',
      name: 'Random menu Name',
      numbers: '4',
      date: '23 Aug, 2023',
    },
    {
      id: '#AD45',
      name: 'Random menu Name',
      numbers: '9',
      date: '23 Aug, 2023',
    },
    {
      id: '#AD45',
      name: 'Random menu Name',
      numbers: '2',
      date: '23 Aug, 2023',
    },
    {
      id: '#AD45',
      name: 'Random menu Name',
      numbers: '13',
      date: '23 Aug, 2023',
    },
    {
      id: '#AD45',
      name: 'Random menu Name',
      numbers: '0',
      date: '23 Aug, 2023',
    },
    {
      id: '#AD45',
      name: 'Random menu Name',
      numbers: '4',
      date: '23 Aug, 2023',
    },
    {
      id: '#AD45',
      name: 'Random menu Name',
      numbers: '9',
      date: '23 Aug, 2023',
    },
    {
      id: '#AD45',
      name: 'Random menu Name',
      numbers: '2',
      date: '23 Aug, 2023',
    },
    {
      id: '#AD45',
      name: 'Random menu Name',
      numbers: '13',
      date: '23 Aug, 2023',
    },
    {
      id: '#AD45',
      name: 'Random menu Name',
      numbers: '0',
      date: '23 Aug, 2023',
    },
    {
      id: '#AD45',
      name: 'Random menu Name',
      numbers: '4',
      date: '23 Aug, 2023',
    },
    {
      id: '#AD45',
      name: 'Random menu Name',
      numbers: '9',
      date: '23 Aug, 2023',
    },
    {
      id: '#AD45',
      name: 'Random menu Name',
      numbers: '2',
      date: '23 Aug, 2023',
    },
    {
      id: '#AD45',
      name: 'Random menu Name',
      numbers: '13',
      date: '23 Aug, 2023',
    },
    {
      id: '#AD45',
      name: 'Random menu Name',
      numbers: '0',
      date: '23 Aug, 2023',
    },
    {
      id: '#AD45',
      name: 'Random menu Name',
      numbers: '4',
      date: '23 Aug, 2023',
    },
    {
      id: '#AD45',
      name: 'Random menu Name',
      numbers: '9',
      date: '23 Aug, 2023',
    },
    {
      id: '#AD45',
      name: 'Random menu Name',
      numbers: '2',
      date: '23 Aug, 2023',
    },
    {
      id: '#AD45',
      name: 'Random menu Name',
      numbers: '13',
      date: '23 Aug, 2023',
    },

  ];

  constructor() {}

  getData(): Observable<any[]> {
    return of(this.data);
  }
}
