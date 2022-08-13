import { getMaxTotalValueOfProducts } from "../src";
import { Product } from "../src/types/Product ";

test("sample case", () => {
  const products: Product[] = [
    { weight: 1, value: 2 },
    { weight: 3, value: 81 },
    { weight: 2, value: 40 },
  ];
  const n = products.length;
  const W = 2;
  expect(getMaxTotalValueOfProducts(n, products, W)).toBe(40);
});

test("Process is quick when the number of products and max weight are maximum", () => {
  const products: Product[] = [];
  for (let i = 0; i < 99; i++) {
    products.push({ weight: 1, value: 1 });
  }
  products.push({ weight: 10000, value: 1000 });
  const n = products.length; //100
  const W = 10000;

  const startTime = performance.now();
  expect(getMaxTotalValueOfProducts(n, products, W)).toBe(1000);
  const endTime = performance.now();
  expect(endTime - startTime).toBeLessThan(300);
});
