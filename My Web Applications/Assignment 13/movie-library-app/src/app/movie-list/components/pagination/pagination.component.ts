import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.css'],
})
export class PaginationComponent implements OnInit {
  @Input() currentPage: number;
  @Input() lastPage: number;
  pages: Array<number> = [];
  paginationLength: number = 7;
  centerSpot: number = 1;
  centrifier: number = Math.floor(this.paginationLength / 2);

  constructor() {}

  ngOnInit(): void {
    this.buildPages();
    this.slicePagination();
  }

  buildPages(): void {
    for (let index = 0; index <= this.lastPage; index++) {
      this.pages[index] = index + 1;
    }
  }

  slicePagination(): void {
    if (this.currentPage <= this.centrifier) {
      this.sliceFirstPages();
    } else if (this.currentPage < this.lastPage - this.centrifier) {
      this.sliceMiddlePages();
    } else if (this.currentPage >= this.lastPage - this.centrifier) {
      this.sliceLastPages();
    }
  }

  sliceFirstPages(): void {
    this.pages = this.pages.slice(0, this.paginationLength);
  }

  sliceMiddlePages(): void {
    this.pages = this.pages.slice(
      this.currentPage - (this.centrifier + this.centerSpot),
      this.currentPage + this.centrifier
    );
  }

  sliceLastPages(): void {
    this.pages = this.pages.slice(
      this.lastPage - this.paginationLength,
      this.lastPage
    );
  }
}
