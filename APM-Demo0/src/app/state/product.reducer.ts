import { createAction, on, createReducer } from "@ngrx/store";

export const productReducer = createReducer(
  { showProductCode: true },
  on(createAction('[PRODUCT] Toggle Product Code'), state => {
    console.log('original state: ' + JSON.stringify(state));
    return {
      ...state,
      showProductCode: !state.showProductCode
    }
  })
);