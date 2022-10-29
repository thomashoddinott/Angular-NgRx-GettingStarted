import { ProductState } from "./product.reducer";
// violates lazy-loading boundary

export interface State {
    products: ProductState;
    user: any
}