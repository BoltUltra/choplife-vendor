import { Component, OnInit } from '@angular/core';
import { SidebarService } from 'src/lib/sidebar.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css'],
})
export class SidebarComponent implements OnInit {
  navigationItems = [
    { text: 'Overview', route: '/', icon: '../../assets/images/overview.svg' },
    {
      text: 'Orders',
      route: '/orders',
      icon: '../../assets/images/orders.svg',
    },
    { text: 'Menu', route: '/menu', icon: '../../assets/images/menu.svg' },
    { text: 'Food', route: '/food', icon: '../../assets/images/food.svg' },
    {
      text: 'Payment',
      route: '/payment',
      icon: '../../assets/images/payment.svg',
    },
    {
      text: 'Sales Report',
      route: '/sales-report',
      icon: '../../assets/images/sales-report.svg',
    },
    {
      text: 'Settlements',
      route: '/settlements',
      icon: '../../assets/images/settlements.svg',
    },
    {
      text: 'Settings',
      route: '/settings',
      icon: '../../assets/images/settings.svg',
    },
    { text: 'Logout', route: '/', icon: '../../assets/images/logout.svg' },
  ];
  constructor(private sidebarService: SidebarService, private router: Router) {}

  isRouteActive(routePath: string): boolean {
    return this.router.isActive(routePath, true);
  }

  ngOnInit() {
    // Subscribe to changes in the sidebar state
    this.sidebarService.isOpen$.subscribe((isOpen) => {
      // Handle the visibility of the sidebar based on the `isOpen` value
      if (isOpen) {
        // Sidebar is open
        // Add your logic to display the sidebar
      } else {
        // Sidebar is closed
        // Add your logic to hide the sidebar
      }
    });
  }

  closeSidebar() {
    // Call the toggleSidebar method to close the sidebar when clicking on the "close" icon
    this.sidebarService.toggleSidebar();
  }
}
