import {calcAverageProductPrice, Product} from "./products";

export interface InventoryItem {
    product: Product,
    quantity: number
}

const inventory: InventoryItem[] = [
    {product: {name: "motor", price: 10.00,},  quantity: 10},
    {product: {name: "sensor", price: 12.50,},  quantity: 4},
    {product: {name: "LED", price: 1.00,},  quantity: 20},  
]

export const calcInventoryValue = (inventoryArray: InventoryItem[]): number => {
    let inventoryTotal: number = 0;
    for (let item of inventoryArray){
        inventoryTotal += (item.product.price * item.quantity);
    };
    console.log(inventoryTotal);
    return inventoryTotal;
}

