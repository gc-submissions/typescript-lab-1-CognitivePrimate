"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.findNameOfTallestMountain = void 0;
const mountains = [{ name: "Kilimanjaro", height: 19341 }, { name: "Everest", height: 29029 }, { name: "Denali", height: 20310 }];
const findNameOfTallestMountain = (mountainArray) => {
    let tallestMountain = mountains[0];
    let tallestMountainName = "";
    for (let mountain of mountains) {
        if (mountain.height > tallestMountain.height) {
            tallestMountain = mountain;
            tallestMountainName = tallestMountain.name;
        }
    }
    return tallestMountainName;
};
exports.findNameOfTallestMountain = findNameOfTallestMountain;
