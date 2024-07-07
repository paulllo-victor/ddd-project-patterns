import Order from "./order";
import OrderItem from "./order_tem";

describe("order unit tests",() => {
    it("should  throw error when id is empty", () => {
        expect(() => {
            let order = new Order("","123",[])
        }).toThrowError("Id is required");
    });

    it("should  throw error when customerId is empty", () => {
        expect(() => {
            let order = new Order("123","",[])
        }).toThrowError("CustomerId is required");
    });

    it("should throw error when items is empty", () => {
        expect(() => {
            let order = new Order("123","123",[])
        }).toThrowError("Items are required");
    });

    it("should calculate total", () => {

        const item1 = new OrderItem("123","Item 1",20,"p1", 2);
        const item2 = new OrderItem("456","Item 2",40,"p2", 2);
        const item3 = new OrderItem("789","Item 3",60,"p3", 2);
        const order = new Order("123","123",[item1,item2,item3])

        let total = order.total();
        expect(total).toBe(240);

        const order2 = new Order("456","123",[item1]);
        total = order2.total();
        expect(total).toBe(40);
    });

    it("should throw error if the item qte qty is less or equal zero", () => {
        expect(() => {
            const item1 = new OrderItem("123","Item 1",20,"p1", 0);
            const order = new Order("123","123",[item1])
        }).toThrowError("Quantity must be greater than 0")
    });
});