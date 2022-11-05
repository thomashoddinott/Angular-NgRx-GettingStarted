import { Component, OnInit } from '@angular/core';

import { Product } from '../product';

/* NgRx */
import { Store } from '@ngrx/store';
import { State, getShowProductCode, getCurrentProduct, getProducts, getError } from '../state';
import * as ProductActions from '../state/product.actions';
import { Observable } from 'rxjs';

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
    this.store.dispatch(ProductActions.loadProducts())
    this.products$ = this.store.select(getProducts)
    this.errorMessage$ = this.store.select(getError)
    this.selectedProduct$ = this.store.select(getCurrentProduct)
    this.displayCode$ = this.store.select(getShowProductCode);
  }

  checkChanged = (): void =>
    this.store.dispatch(ProductActions.toggleProductCode());
  newProduct = (): void =>
    this.store.dispatch(ProductActions.initializeCurrentProduct());
  productSelected = (product: Product): void =>
    this.store.dispatch(ProductActions.setCurrentProduct({ currentProductId: product.id }));
  
}
