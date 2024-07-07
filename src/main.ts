import Address from './entity/address';
import Customer from './entity/customer';
import OrderItem from './entity/order_tem';
import Order from './entity/order';

let customer = new Customer("123","Paulo Victor");
let address = new Address("Rua sol",123,"52131-295","Recife");
customer.Address = address;
customer.activate();

const item1 = new OrderItem("1","Item 1", 10,"p1",2);
const item2 = new OrderItem("2","Item 2", 15,"p2",3);

const order = new Order("1","123",[item1,item2]);