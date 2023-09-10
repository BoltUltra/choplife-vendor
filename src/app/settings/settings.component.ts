import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})
export class SettingsComponent {
  selectedPage: string | null = null;

  selectPage(page: string): void {
    this.selectedPage = page;
  }

}
