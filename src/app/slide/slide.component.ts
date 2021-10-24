import { Component, OnInit, Input} from '@angular/core';

@Component({
  selector: 'app-slide',
  templateUrl: './slide.component.html',
  styleUrls: ['./slide.component.css']
})
export class SlideComponent implements OnInit {
  @Input() ProdItem:any;
  constructor() { }

  ngOnInit(): void {
    console.log(this.ProdItem);
  }

}
