import Address from "./address";
import Customer from "./customer";

describe("customer unit tests",() => {
    it("should  throw error when id is empty", () => {
        expect(() => {
            let customer = new Customer("", "Paulo");
        }).toThrowError("Id is required");
    });

    it("should  throw error when name is empty", () => {
        expect(() => {
            let customer = new Customer("123", "");
        }).toThrowError("Name is required");
    });

    it("should change name", () => {
        // triplo A

        //Arrange
        let customer = new Customer("123", "Paulo");
        // act
        customer.changeName("João");
        // Assert
        expect(customer.name).toBe("João")
    });

    it("should activate customer", () => {
        const customer = new Customer("1", "Customer 1");
        const address = new Address("Street 1", 123, "52131-295","Recife");
        
        customer.Address = address;
        customer.activate();
        expect(customer.isActive()).toBe(true);
    });

    it("should desactivate customer", () => {
        const customer = new Customer("1", "Customer 1");
        customer.desactivate();
        expect(customer.isActive()).toBe(false);
    });

    it("should throw error when address id undefined when you activate a customer", () => {
        expect(() => {
            const customer = new Customer("1", "Customer 1");
            customer.activate();
        }).toThrowError("Address is mandatory to activate a customer");
    });
});