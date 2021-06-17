export interface Mountain {
    name: string;
    height: number;
}

const mountains : Mountain[] = [{name: "Kilimanjaro", height: 19341}, {name: "Everest", height: 29029}, {name: "Denali", height: 20310}];

export const findNameOfTallestMountain = (mountainArray: Mountain[]) : string => {
    let tallestMountain: Mountain = mountains[0];
    let tallestMountainName: string = "";
    for (let mountain of mountains){
        if (mountain.height > tallestMountain.height){
            tallestMountain = mountain;
            tallestMountainName = tallestMountain.name;
        }
    }
    return tallestMountainName;
}


