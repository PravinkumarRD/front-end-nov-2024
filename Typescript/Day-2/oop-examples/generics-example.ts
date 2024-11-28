//Purchase Order System

//	Customer, Employee, Supplier, Shipper, Category, Product, Order, OrderDetail, Invoice

interface ICommonRepository<T> {
    getAll(): T[];
    getDetails(id: number): T;
    insert(item: T): void;
    update(id: number, item: T): void;
    delete(id: number): void;
}

class CommonRepository<T> implements ICommonRepository<T> {
    private _db: Array<T> = new Array<T>();
    getAll(): T[] {
        return this._db;
    }
    getDetails(id: number): T {
        return this._db[0];
    }
    insert(item: T): void {
        this._db.push(item);
    }
    update(id: number, item: T): void {
        throw new Error("Method not implemented.");
    }
    delete(id: number): void {
        throw new Error("Method not implemented.");
    }

}

class Supplier {
    constructor(public supplierId: number, public companyName: string, public owner: string) {

    }
}
class Shipper {
    constructor(public shipperId: number, public contactName: string, public phone: string, public email: string) {

    }
}

const supplier1: Supplier = new Supplier(1000, 'DTC', 'Manisha K.');
const supplier2: Supplier = new Supplier(1001, 'Puma', 'John Mark');

const shippler1: Shipper = new Shipper(5678, "Anjala Johns", "+044 782738232", "anjala.j@abc.com");
const shippler2: Shipper = new Shipper(5678, "Maria Andrus", "+065 782738232", "maria.a@abc.com");

//Using Generic Template to perform CRUD operations

const supplierCurd: ICommonRepository<Supplier> = new CommonRepository<Supplier>();
supplierCurd.insert(supplier1);
supplierCurd.insert(supplier2);

console.log(supplierCurd.getAll());
console.log(supplierCurd.getDetails(supplier1.supplierId));

const shipperCrud: ICommonRepository<Shipper> = new CommonRepository<Shipper>();
shipperCrud.insert(shippler1);
shipperCrud.insert(shippler2);
console.log(shipperCrud.getAll());
console.log(shipperCrud.getDetails(shippler1.shipperId));