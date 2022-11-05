import { Component, OnInit } from '@angular/core';

import { Product } from '../product';

/* NgRx */
import { Store } from '@ngrx/store';
import { State, getShowProductCode, getCurrentProduct, getProducts, getError } from '../state';
import { Observable } from 'rxjs';
import { ProductPageActions, ProductApiActions } from '../state/actions';

@Component({
  templateUrl: './product-shell.component.html'
})
export class ProductShellComponent implements OnInit {
  errorMessage$: Observable<string>
  products$: Observable<Product[]>;
  selectedProduct$: Observable<Product>
  displayCode$: Observable<boolean>

  constructor(private store: Store<State>) { }

  ngOnInit(): void {
    this.store.dispatch(ProductPageActions.loadProducts())
    this.products$ = this.store.select(getProducts)
    this.errorMessage$ = this.store.select(getError)
    this.selectedProduct$ = this.store.select(getCurrentProduct)
    this.displayCode$ = this.store.select(getShowProductCode);
  }

  checkChanged = (): void =>
    this.store.dispatch(ProductPageActions.toggleProductCode());
  newProduct = (): void =>
    this.store.dispatch(ProductPageActions.initializeCurrentProduct());
  productSelected = (product: Product): void =>
    this.store.dispatch(ProductPageActions.setCurrentProduct({ currentProductId: product.id }));
  
}
