export function testApiClient(): string {
  return 'test-api-client response';
}
export type Product = {
  id: number;
  title: string;
  description: string;
};

export async function getProduct(): Promise<Product> {
  let response = await fetch('https://dummyjson.com/products/1');
  let product = await response.json();
  return product;
}
