export interface Product {
    name: string;
    price: number;
}

const products: Product[] = [{name: "yurt", price: 800}, {name: "skirt", price: 20}, {name: "yogurt", price: 1}];


export const calcAverageProductPrice = (productArray: Product[]): number => {
    let averagePriceSetup: number = 0;
    productArray.forEach((product) => {
        averagePriceSetup += product.price;
    });
    let average: number = averagePriceSetup / productArray.length;
    console.log(average);
    return isNaN(average) ? average = 0 : average;
}