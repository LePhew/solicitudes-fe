import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent implements OnInit {

  @Output() searchCriteria = new EventEmitter();

  constructor() { }

  ngOnInit() {

  }

  emitToParent(value: any){
    this.searchCriteria.emit(value.target.value);
  }



  

}
