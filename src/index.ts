import { Product } from "./types/Product ";

/**
 *
 * @param productsCount n
 * @param products weight, value
 * @param maxWeight W
 * @returns　maxValue
 */
export function getMaxTotalValueOfProducts(
  productsCount: number,
  products: Product[],
  maxWeight: number
) {
  // 特定の重さを超えないように品物を選んでいった時の最大価値を保存しておくテーブル。
  const weightMaxValueTable: number[][] = [];

  const minValue = 0;

  // 上記のテーブルを0で初期化する。品物を一つも選んでいない状態も表現するためにproductsCount + 1とし、重さが0の場合も考慮するためにmaxWeight +1とした
  for (let i = 0; i < productsCount + 1; i++) {
    weightMaxValueTable[i] = new Array<number>(maxWeight + 1).fill(minValue);
  }

  // 重さの総和がweightを超えないようにi+1番目(<= productsCount)までの品物を選んでいった時の最大価値を更新。
  for (let i = 0; i < productsCount; i++) {
    for (let weight = 0; weight <= maxWeight; weight++) {
      if (weight >= products[i].weight) {
        weightMaxValueTable[i + 1][weight] = Math.max(
          weightMaxValueTable[i][weight - products[i].weight] +
            products[i].value,
          weightMaxValueTable[i][weight]
        );
      } else {
        weightMaxValueTable[i + 1][weight] = weightMaxValueTable[i][weight];
      }
    }
  }

  // productsCount個の品物から選んだ時のmaxWeightを超えない価値の総和の最大値
  return weightMaxValueTable[productsCount][maxWeight];
}
