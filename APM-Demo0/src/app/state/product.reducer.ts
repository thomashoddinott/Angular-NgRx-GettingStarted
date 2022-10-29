// File in wrong dir?

import { createAction, on, createReducer } from "@ngrx/store";
import { Product } from "../products/product";
import * as AppState from './app.state'

export interface State extends AppState.State {
  products: ProductState;
}

export interface ProductState {
  showProductCode: boolean;
  currentProduct: Product,
  products: Product[]
}

export const productReducer = createReducer<ProductState>(
  { showProductCode: true } as ProductState,
  on(createAction('[PRODUCT] Toggle Product Code'), (state): ProductState => {
    return {
      ...state,
      showProductCode: !state.showProductCode
    }
  })
);