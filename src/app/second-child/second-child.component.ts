import { Component, Input, OnChanges, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-second-child',
  templateUrl: './second-child.component.html',
  styleUrls: ['./second-child.component.css'],
})
export class SecondChildComponent implements OnInit, OnChanges {
  @Input() list!: any[];

  listD!: any[];

  constructor() {}

  ngOnInit(): void {}

  removeTask(item: any) {
    console.log(item);

    this.list.splice(item, 1);
    // this.ListItem.map((item:any, index:any) => {
    //     if(id === item.id){
    //       this.ListItem.splice(index,1);
    //     }
    //   });
    // this.ListItem.filter((item:any) => {

    //   item.id !== id;

    // })

    // console.log(this.ListItem);
  }
  ngOnChanges() {
    this.listD = this.list;
    console.log(this.listD);
  }
}
