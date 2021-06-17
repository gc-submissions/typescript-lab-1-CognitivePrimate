"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.calcInventoryValue = void 0;
const inventory = [
    { product: { name: "motor", price: 10.00, }, quantity: 10 },
    { product: { name: "sensor", price: 12.50, }, quantity: 4 },
    { product: { name: "LED", price: 1.00, }, quantity: 20 },
];
const calcInventoryValue = (inventoryArray) => {
    let inventoryTotal = 0;
    for (let item of inventoryArray) {
        inventoryTotal += (item.product.price * item.quantity);
    }
    ;
    console.log(inventoryTotal);
    return inventoryTotal;
};
exports.calcInventoryValue = calcInventoryValue;
