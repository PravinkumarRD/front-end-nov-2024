interface Physics {
    physicsCalci(): number;
}
interface Chemistry {
    chemistryCalci(): number;
}
interface Biology {
    biologyCalci(): number;
}

//Multiple Inheritance in Interfaces
interface ScienceHod extends Physics, Chemistry, Biology {

}

class Science implements ScienceHod {
    physicsCalci(): number {
        throw new Error("Method not implemented.");
    }
    chemistryCalci(): number {
        throw new Error("Method not implemented.");
    }
    biologyCalci(): number {
        throw new Error("Method not implemented.");
    }
}

const physicsObject: Physics = new Science();
physicsObject.physicsCalci();
const chemistryObject: Chemistry = new Science();
chemistryObject.chemistryCalci();
const biologyObject: Biology = new Science();
biologyObject.biologyCalci();

const hod: ScienceHod = new Science();

interface ProductSchema {
    productId: number;
    productName: string;
    unitPrice: number;
    isBlackListed?: boolean;
    changeDiscount?(value:number):number;
}

class TravelDepartment implements ProductSchema{
    productId: number;
    productName: string;
    unitPrice: number;
}
