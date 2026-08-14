import format, { withVat } from "./pricing.js";
import { orders } from "./orders.js";

const totalOrder = ({ items }) => {
    return items.reduce((sum, { price, qty }) => sum + price * qty,0);
};

const ordersWithTotal = orders.map(order => ({...order,total: withVat(totalOrder(order))
}));

const bigOrders = ordersWithTotal.filter(order => order.total > 500);
console.log("order over 500 ETB:");

bigOrders.forEach(order => {
    console.log(`Order #${order.id} - ${order.customer}: ${format(order.total)}`
    );
});

const grandTotal = ordersWithTotal.reduce((sum, order) => sum + order.total,0
);
console.log(`Grand Total: ${format(grandTotal)}`);