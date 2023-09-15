import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/lib/data.service';

@Component({
  selector: 'app-payment-table',
  templateUrl: './payment-table.component.html',
  styleUrls: ['./payment-table.component.css']
})
export class PaymentTableComponent implements OnInit {
  data: any[] = [];
  currentPage = 1;
  itemsPerPage = 10;
  sortColumn: string | null = null;
  sortOrder: 'asc' | 'desc' = 'asc'; // Initial sort order
  searchQuery: string = '';
  // Modal
  showModal = false; // Variable to control modal visibility
  modalData: any = {}; // Data to display in the modal
  showPaymentModal = false;
  showConfirmationModal = false;
  showSuccessModal = false;

  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    this.dataService.getData().subscribe((result) => {
      this.data = result;
      this.filterData();
    });
  }

  get totalPages(): number {
    return Math.ceil(this.data.length / this.itemsPerPage);
  }

  get displayedData(): any[] {
    // Sort the data based on the selected column and sort order
    const sortedData = this.sortData(this.data);
    const startIndex = (this.currentPage - 1) * this.itemsPerPage;
    const endIndex = startIndex + this.itemsPerPage;
    return sortedData.slice(startIndex, endIndex);
  }

  sort(column: string): void {
    if (this.sortColumn === column) {
      // Toggle sort order if the same column is clicked again
      this.sortOrder = this.sortOrder === 'asc' ? 'desc' : 'asc';
    } else {
      // Default to ascending order when a new column is selected
      this.sortColumn = column;
      this.sortOrder = 'asc';
    }
  }

  sortData(data: any[]): any[] {
    if (!this.sortColumn) {
      return data;
    }

    return data.slice().sort((a, b) => {
      const aValue = a[this.sortColumn!];
      const bValue = b[this.sortColumn!];

      if (aValue < bValue) {
        return this.sortOrder === 'asc' ? -1 : 1;
      } else if (aValue > bValue) {
        return this.sortOrder === 'asc' ? 1 : -1;
      } else {
        return 0;
      }
    });
  }

  prevPage(): void {
    if (this.currentPage > 1) {
      this.currentPage--;
    }
  }

  nextPage(): void {
    if (this.currentPage < this.totalPages) {
      this.currentPage++;
    }
  }

  filterData(): void {
    const query = this.searchQuery.trim().toLowerCase();
    if (query) {
      this.data = this.data.filter((item) =>
        Object.values(item)
          .map((value) => String(value).toLowerCase())
          .some((value) => value.includes(query))
      );
    } else {
      this.data = this.data;
    }
    this.currentPage = 1;
  }

  // Modal
  // Method to open the modal with the selected item's data
  openModal(item: any) {
    this.modalData = item;
    this.showModal = true;
  }

  // Method to close the modal
  closeModal() {
    this.showModal = false;
  }

  confirmModal() {
    this.showConfirmationModal = true;
    this.showPaymentModal = false;
  }

  closeConfirmationModal() {
    this.showConfirmationModal = false;
  }

  paymentModal() {
    this.showPaymentModal = true;
    this.showModal = false;
    this.showConfirmationModal = false;
  }

  closePaymentModal(){
    this.showPaymentModal = false;
  }

  openSuccessModal() {
    this.showSuccessModal = true;
  }

}
