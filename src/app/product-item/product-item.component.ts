import { Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent implements OnInit {
  @Input() ProductItem:any;
  @Output() sendProductItem = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
    console.log(this.ProductItem);
  }

  AddProduct(){
    // alert("product added to card");
    let cont ="product added to card";
    this.sendProductItem.emit(this.ProductItem);
  }

}
