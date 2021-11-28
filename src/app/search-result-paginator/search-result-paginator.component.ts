import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-search-result-paginator',
  templateUrl: './search-result-paginator.component.html',
  styleUrls: ['./search-result-paginator.component.css']
})
export class SearchResultPaginatorComponent{

  constructor() { }

  @Input() urlArray!:string[];
  @Input() totalRecords!: number;

  first: number = 0;

  onPageChange(event:any) {
      this.first = event.first;
  }

  refresh() {
      this.first = 0;
  }

}
