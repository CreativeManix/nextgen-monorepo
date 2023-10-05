import { create } from 'zustand';
import {
  getProduct,
  invokeAsync,
  Product,
} from '@nextgen-monorepo/test-api-client';

type Store = {
  product?: Product;
  isProductLoading: boolean;
  productError: string;
  getProducts: () => Promise<void>;
};

export const useSimpleStore = create<Store>()((set) => ({
  product: undefined,
  isProductLoading: false,
  productError: '',
  getProducts: async () => {
    await invokeAsync(
      () => getProduct(),
      (isProductLoading, product, productError) =>
        set({ isProductLoading, product, productError })
    );
  },
}));
