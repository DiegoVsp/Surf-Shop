import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Product } from '../interfaces/product';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private productsColletction: AngularFirestoreCollection<Product>;
  constructor(private afs: AngularFirestore) {
    this.productsColletction = this.afs.collection<Product>('Products');
  }
  getProducts() {
    return this.productsColletction.snapshotChanges().pipe(
      map(actions=>{
        return actions.map(a=>{
          const data = a.payload.doc.data();
          const id  = a.payload.doc.id;

          return {id, ...data};
        })
      })
    );
  }

  addProduct(product: Product) {

  }

  getProduct(id: string) {

  }
  updateProduct(id:string, product:Product){

  }
  deleteProducts(id: string){

  }

}
