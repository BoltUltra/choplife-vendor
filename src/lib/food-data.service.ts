import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  private data: any[] = [
    {
      id: '#AD45',
      photo: '../assets/images/food-img.png',
      name: 'Food / Item',
      price: 'N560.00',
      delivery_time: '45min',
      rating: '4.4',
      menu: 'Random Menu',
      discount: '5%',
      date: '23 Aug, 2023',
    },
    {
      id: '#T23R',
      photo: '../assets/images/food-img.png',
      name: 'Food / Item',
      price: 'N745.00',
      delivery_time: '52min',
      rating: '4.8',
      menu: 'Random Menu',
      discount: '8%',
      date: '15 Sep, 2023',
    },
    {
      id: '#LK98',
      photo: '../assets/images/food-img.png',
      name: 'Food / Item',
      price: 'N610.00',
      delivery_time: '37min',
      rating: '4.2',
      menu: 'Random Menu',
      discount: '6%',
      date: '10 Aug, 2023',
    },
    {
      id: '#W21R',
      photo: '../assets/images/food-img.png',
      name: 'Food / Item',
      price: 'N490.00',
      delivery_time: '59min',
      rating: '4.6',
      menu: 'Random Menu',
      discount: '7%',
      date: '28 Sep, 2023',
    },
    {
      id: '#P76F',
      photo: '../assets/images/food-img.png',
      name: 'Food / Item',
      price: 'N580.00',
      delivery_time: '42min',
      rating: '4.3',
      menu: 'Random Menu',
      discount: '5%',
      date: '17 Aug, 2023',
    },
    {
      id: '#Z12K',
      photo: '../assets/images/food-img.png',
      name: 'Food / Item',
      price: 'N625.00',
      delivery_time: '51min',
      rating: '4.7',
      menu: 'Random Menu',
      discount: '9%',
      date: '5 Sep, 2023',
    },
    {
      id: '#D38Q',
      photo: '../assets/images/food-img.png',
      name: 'Food / Item',
      price: 'N530.00',
      delivery_time: '44min',
      rating: '4.5',
      menu: 'Random Menu',
      discount: '6%',
      date: '12 Aug, 2023',
    },
    {
      id: '#R87B',
      photo: '../assets/images/food-img.png',
      name: 'Food / Item',
      price: 'N670.00',
      delivery_time: '55min',
      rating: '4.9',
      menu: 'Random Menu',
      discount: '7%',
      date: '20 Sep, 2023',
    },
    {
      id: '#X52P',
      photo: '../assets/images/food-img.png',
      name: 'Food / Item',
      price: 'N550.00',
      delivery_time: '39min',
      rating: '4.4',
      menu: 'Random Menu',
      discount: '5%',
      date: '9 Aug, 2023',
    },
    {
      id: '#Q65D',
      photo: '../assets/images/food-img.png',
      name: 'Food / Item',
      price: 'N590.00',
      delivery_time: '48min',
      rating: '4.3',
      menu: 'Random Menu',
      discount: '6%',
      date: '25 Sep, 2023',
    },
    {
      id: '#F72A',
      photo: '../assets/images/food-img.png',
      name: 'Food / Item',
      price: 'N520.00',
      delivery_time: '41min',
      rating: '4.6',
      menu: 'Random Menu',
      discount: '8%',
      date: '14 Aug, 2023',
    },
    {
      id: '#L99E',
      photo: '../assets/images/food-img.png',
      name: 'Food / Item',
      price: 'N640.00',
      delivery_time: '53min',
      rating: '4.5',
      menu: 'Random Menu',
      discount: '7%',
      date: '30 Sep, 2023',
    },
    {
      id: '#G81H',
      photo: '../assets/images/food-img.png',
      name: 'Food / Item',
      price: 'N570.00',
      delivery_time: '47min',
      rating: '4.7',
      menu: 'Random Menu',
      discount: '6%',
      date: '11 Aug, 2023',
    },
    {
      id: '#K41Z',
      photo: '../assets/images/food-img.png',
      name: 'Food / Item',
      price: 'N615.00',
      delivery_time: '40min',
      rating: '4.8',
      menu: 'Random Menu',
      discount: '5%',
      date: '22 Sep, 2023',
    },
    {
      id: '#Y22X',
      photo: '../assets/images/food-img.png',
      name: 'Food / Item',
      price: 'N530.00',
      delivery_time: '56min',
      rating: '4.9',
      menu: 'Random Menu',
      discount: '7%',
      date: '6 Aug, 2023',
    },
    {
      id: '#S37R',
      photo: '../assets/images/food-img.png',
      name: 'Food / Item',
      price: 'N580.00',
      delivery_time: '45min',
      rating: '4.4',
      menu: 'Random Menu',
      discount: '6%',
      date: '18 Sep, 2023',
    },
    {
      id: '#H65F',
      photo: '../assets/images/food-img.png',
      name: 'Food / Item',
      price: 'N500.00',
      delivery_time: '38min',
      rating: '4.3',
      menu: 'Random Menu',
      discount: '5%',
      date: '7 Aug, 2023',
    },
    {
      id: '#M98W',
      photo: '../assets/images/food-img.png',
      name: 'Food / Item',
      price: 'N700.00',
      delivery_time: '52min',
      rating: '4.8',
      menu: 'Random Menu',
      discount: '8%',
      date: '23 Sep, 2023',
    },
    {
      id: '#V42Y',
      photo: '../assets/images/food-img.png',
      name: 'Food / Item',
      price: 'N525.00',
      delivery_time: '46min',
      rating: '4.7',
      menu: 'Random Menu',
      discount: '7%',
      date: '13 Aug, 2023',
    },
    {
      id: '#N78U',
      photo: '../assets/images/food-img.png',
      name: 'Food / Item',
      price: 'N655.00',
      delivery_time: '57min',
      rating: '4.5',
      menu: 'Random Menu',
      discount: '6%',
      date: '1 Sep, 2023',
    },
    {
      id: '#R55Q',
      photo: '../assets/images/food-img.png',
      name: 'Food / Item',
      price: 'N560.00',
      delivery_time: '43min',
      rating: '4.4',
      menu: 'Random Menu',
      discount: '5%',
      date: '19 Aug, 2023',
    },
    {
      id: '#J88E',
      photo: '../assets/images/food-img.png',
      name: 'Food / Item',
      price: 'N745.00',
      delivery_time: '59min',
      rating: '4.8',
      menu: 'Random Menu',
      discount: '8%',
      date: '4 Sep, 2023',
    },
    {
      id: '#A12G',
      photo: '../assets/images/food-img.png',
      name: 'Food / Item',
      price: 'N610.00',
      delivery_time: '37min',
      rating: '4.2',
      menu: 'Random Menu',
      discount: '6%',
      date: '8 Aug, 2023',
    },
    {
      id: '#K45T',
      photo: '../assets/images/food-img.png',
      name: 'Food / Item',
      price: 'N490.00',
      delivery_time: '54min',
      rating: '4.6',
      menu: 'Random Menu',
      discount: '7%',
      date: '24 Sep, 2023',
    },
    {
      id: '#X67D',
      photo: '../assets/images/food-img.png',
      name: 'Food / Item',
      price: 'N580.00',
      delivery_time: '42min',
      rating: '4.3',
      menu: 'Random Menu',
      discount: '5%',
      date: '16 Aug, 2023',
    },
    {
      id: '#Z23B',
      photo: '../assets/images/food-img.png',
      name: 'Food / Item',
      price: 'N625.00',
      delivery_time: '47min',
      rating: '4.7',
      menu: 'Random Menu',
      discount: '9%',
      date: '3 Sep, 2023',
    },
    {
      id: '#C98H',
      photo: '../assets/images/food-img.png',
      name: 'Food / Item',
      price: 'N530.00',
      delivery_time: '50min',
      rating: '4.5',
      menu: 'Random Menu',
      discount: '6%',
      date: '21 Aug, 2023',
    },
    {
      id: '#Q33N',
      photo: '../assets/images/food-img.png',
      name: 'Food / Item',
      price: 'N670.00',
      delivery_time: '36min',
      rating: '4.9',
      menu: 'Random Menu',
      discount: '7%',
      date: '10 Sep, 2023',
    },
    {
      id: '#P53M',
      photo: '../assets/images/food-img.png',
      name: 'Food / Item',
      price: 'N550.00',
      delivery_time: '58min',
      rating: '4.4',
      menu: 'Random Menu',
      discount: '5%',
      date: '27 Aug, 2023',
    },
    {
      id: '#D89J',
      photo: '../assets/images/food-img.png',
      name: 'Food / Item',
      price: 'N590.00',
      delivery_time: '49min',
      rating: '4.3',
      menu: 'Random Menu',
      discount: '6%',
      date: '19 Sep, 2023',
    },
    {
      id: '#B24R',
      photo: '../assets/images/food-img.png',
      name: 'Food / Item',
      price: 'N520.00',
      delivery_time: '35min',
      rating: '4.6',
      menu: 'Random Menu',
      discount: '8%',
      date: '5 Aug, 2023',
    },
    {
      id: '#F75Q',
      photo: '../assets/images/food-img.png',
      name: 'Food / Item',
      price: 'N640.00',
      delivery_time: '51min',
      rating: '4.5',
      menu: 'Random Menu',
      discount: '7%',
      date: '26 Sep, 2023',
    },
    {
      id: '#R37V',
      photo: '../assets/images/food-img.png',
      name: 'Food / Item',
      price: 'N570.00',
      delivery_time: '48min',
      rating: '4.7',
      menu: 'Random Menu',
      discount: '6%',
      date: '13 Aug, 2023',
    },
    {
      id: '#T45Z',
      photo: '../assets/images/food-img.png',
      name: 'Food / Item',
      price: 'N615.00',
      delivery_time: '37min',
      rating: '4.8',
      menu: 'Random Menu',
      discount: '5%',
      date: '29 Sep, 2023',
    },
    {
      id: '#W98U',
      photo: '../assets/images/food-img.png',
      name: 'Food / Item',
      price: 'N530.00',
      delivery_time: '54min',
      rating: '4.9',
      menu: 'Random Menu',
      discount: '7%',
      date: '8 Aug, 2023',
    },
    {
      id: '#E37T',
      photo: '../assets/images/food-img.png',
      name: 'Food / Item',
      price: 'N580.00',
      delivery_time: '44min',
      rating: '4.4',
      menu: 'Random Menu',
      discount: '6%',
      date: '21 Sep, 2023',
    },
    {
      id: '#Y47O',
      photo: '../assets/images/food-img.png',
      name: 'Food / Item',
      price: 'N500.00',
      delivery_time: '39min',
      rating: '4.3',
      menu: 'Random Menu',
      discount: '5%',
      date: '4 Aug, 2023',
    },
  ];

  constructor() {}

  getData(): Observable<any[]> {
    return of(this.data);
  }
}
