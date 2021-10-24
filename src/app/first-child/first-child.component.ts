import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-first-child',
  templateUrl: './first-child.component.html',
  styleUrls: ['./first-child.component.css'],
})
export class FirstChildComponent implements OnInit {
  @Output() SendValue = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}

  addTask(item: string) {
    console.log(item);
    this.SendValue.emit(item);
  }
}
