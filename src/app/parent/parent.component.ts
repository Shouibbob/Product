import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {

  list:any[]=[];

  constructor() { }

  ngOnInit(): void {
    
  }

  TakeValue(value:string){
    this.list.push({id:Date.now(),Name:value})
    // console.log(this.list);
  }

}
