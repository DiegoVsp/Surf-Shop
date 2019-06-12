import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/interfaces/product';
import { Subscription } from 'rxjs';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  private products=new Array<Product>();
  private productsSubscrition: Subscription;

  constructor(private productsService: ProductService) {
    this.productsSubscrition = this.productsService.getProducts().subscribe(data=>{
      this.products= data;
    })
    }

  ngOnInit() {
  }

}
