import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ShareDataService } from 'src/app/services/share-data/share-data.service';

@Component({
  selector: 'app-price-screen',
  templateUrl: './price-screen.component.html',
  styleUrls: ['./price-screen.component.scss']
})
export class PriceScreenComponent implements OnInit {
  productData:any=[];
  totalItem:any = 0;
  subTotal:any=0;
  vat:number = 0;
  discount:number = 0;
  total:number = 0;
  modal: any;
  btn: any;
  saleNo:number = 0;
  currentDate:any;
  vatValue:number = 0;
  discountValue: number = 0;
  constructor(private shareData:ShareDataService) { this.getData();}

  ngOnInit(): void {
  }
   getData(){ 
     this.shareData.getMessage().subscribe(data =>{
       this.productData = data.text;
       this.calculateItemsandSubTotal();
       if(this.vatValue !=0){
          this.calculateVat()
       }
       if(this.discountValue!=0){
          this.calculateDiscount()
       }
       this.calculateTotalAmount()
     })
   }
   calculateTotalAmount(){
     this.total = this.subTotal + this.vat + this.discount
   }
   calculateItemsandSubTotal(){
     this.totalItem = 0;
     this.subTotal = 0;
       this.productData.forEach((data:any) =>{
         this.totalItem = this.totalItem + data.quantity;
         this.subTotal = this.subTotal + data.amount
     })
     if(this.vatValue !=0){
      this.calculateVat()
   }
   if(this.discountValue!=0){
      this.calculateDiscount()
   }
   this.calculateTotalAmount()
   }
   decreaseQuantity(index:any){
    if (this.productData[index].quantity > 1){
      this.productData[index].quantity = this.productData[index].quantity - 1;
      this.updateAmount(index)
    }
    else if(this.productData[index].quantity == 1){
      this.productData.splice(index, 1)
    }
    this.calculateItemsandSubTotal()
    this.calculateTotalAmount()
   }
   increaseQuantity(index:any){
    this.productData[index].quantity = this.productData[index].quantity + 1;
    this.updateAmount(index)
    this.calculateItemsandSubTotal()
    this.calculateTotalAmount()
   }
   updateAmount(index:any){
    this.productData[index]['amount'] = this.productData[index]['quantity'] * this.productData[index]['price'];

   }
   removeItem(index:any){
    this.productData.splice(index, 1)
   }
   cancelSale(){
     this.productData = [];
     this.subTotal = 0;
     this.totalItem = 0;
     this.vat = 0;
     this.discount = 0;
     this.total = 0;
     this.vatValue = 0
     this.discountValue = 0
   }
   calculateVat(){
    this.vat = ((this.subTotal * this.vatValue) / 100);
    this.calculateTotalAmount()
   }
   calculateDiscount(){
    this.discount = ((this.subTotal * this.discountValue) / 100);
    this.calculateTotalAmount()
   }
   openModal(pop: any) {
    this.modal = document.getElementById(pop);
    this.modal.style.display = "block";
    this.saleNo = Math.floor(Math.random() * (99999 - 10000)) + 10000;
    this.currentDate = new Date();
}
closemodal() {
  this.btn = document.getElementsByClassName("close")[0];
  this.modal.style.display = "none";
  this.cancelSale();
}
}
