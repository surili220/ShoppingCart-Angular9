import { Component, OnInit } from '@angular/core';
import { MessengerService } from 'src/app/services/messenger.service';
import { Product } from 'src/app/models/product';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  cartItems =[

    //{id:1, productId:3 , productName:'item1',qty:4, price:300},
    //{id:2, productId:6 , productName:'item1' ,qty:4, price:600},
    //{id:3, productId:4 ,productName:'item1', qty:3, price:400},
    //{id:4, productId:1 , productName:'item1' ,qty:1, price:300},
  ];

  cartTotal=0;
  cartQty=0;
  constructor(private msg : MessengerService) { }

  ngOnInit(): void {

    this.msg.getMessage().subscribe((product : Product)=>{

      this.addToCart(product)
       
    })
    
  }

  addToCart(product:Product)
  {
    let productExists =false
    for(let i in this.cartItems){
              if(this.cartItems[i].productId === product.id)
              {
                 this.cartItems[i].qty++
                 this.cartQty=this.cartItems[i].qty
                 productExists=true
                 break;
              }
    }
    if(!productExists)
    {
      this.cartItems.push({
        productId : product.id,
        productName : product.name,
        qty :1,
        price : product.price
       })
       this.cartQty +=1;
    }


    //this.cartItems.push({
    //           productId : product.id,
     //          productName : product.name,
       //        qty :1,
         //      price : product.price
           //   })
 
      this.cartTotal=0;
      this.cartItems.forEach(item =>{
                      this.cartTotal += (item.qty * item.price);
                            })
  }
}
