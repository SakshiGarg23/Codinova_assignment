import { Component, OnInit } from '@angular/core';
import { productList } from 'src/app/data/product-data';
import { ShareDataService } from 'src/app/services/share-data/share-data.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {
  productData:any;
  selectedProductList:any = [];
  constructor(private shareData: ShareDataService) { }

  ngOnInit(): void {
    this.productData = productList;
  }
  selectProduct(item:any){
         let index = this.selectedProductList.findIndex((o:any) => o.name == item.name)
        if(index === -1){
          item['quantity'] = 1;
          item['amount'] = item['quantity'] * item['price']
          this.selectedProductList.push(item)
        }
        else{
          this.selectedProductList[index]['quantity'] = this.selectedProductList[index]['quantity'] + 1;
          this.selectedProductList[index]['amount'] = this.selectedProductList[index]['quantity'] * this.selectedProductList[index]['price']
        }
        this.sendData(this.selectedProductList)
      }
      sendData(data:any){
    this.shareData.sendMessage(data)
  }
}
