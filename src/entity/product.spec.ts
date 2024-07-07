import Order from "./order";
import Product from "./product";

describe("product unit tests",() => {
   it("should throw error when id is empty", () => {
        expect(() => {
            const product = new Product("", "Product 1", 100);
        }).toThrowError("Id is required")
   });

   it("should throw error when name is empty", () => {
        expect(() => {
            const product = new Product("123", "", 100);
        }).toThrowError("Name is required")
    });

    it("should change name", () => {
       const newName = "Product new";

       const product = new Product("123","Product 3", 30);
        product.changeName(newName);

        expect(product.name).toBe(newName);

    });
    it("should change price", () => {
       const newPrice = 500;

       const product = new Product("123","Product 3", 150);
        product.changePrice(newPrice);

        expect(product.price).toBe(newPrice);

    });
});