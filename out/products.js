"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.calcAverageProductPrice = void 0;
const products = [{ name: "yurt", price: 800 }, { name: "skirt", price: 20 }, { name: "yogurt", price: 1 }];
const calcAverageProductPrice = (productArray) => {
    let averagePriceSetup = 0;
    productArray.forEach((product) => {
        averagePriceSetup += product.price;
    });
    let average = averagePriceSetup / productArray.length;
    console.log(average);
    return average;
};
exports.calcAverageProductPrice = calcAverageProductPrice;
