const employee = {
    name: "sangita",
    address: {country: "Bangladesh", city: "Sylhet"}
};

const employee2 = {
    ...employee,
    name: "Shormi",
    address: {...employee.address, city: "Dhaka"}
};
// employee2.address.city = "chittagong"; eta avoid korte hobe redux e

console.log(employee, employee2);




/* --------------------- */

// * Currying / Function Curry

/* const add = (a) => (b) => a + b;
console.log(add (3) (5)) */
// or
/* function add(a) {
    return function (b) {
        return a +b;
    };
}
console.log(add(2)); */

/* const totalPrice = (amount, discount) => amount - amount * discount;
console.log(totalPrice(100, 0.3)); */

const totalPrice = (discount) => (amount) => amount - amount * discount;

const withDiscount = totalPrice(0.3);

console.log(withDiscount(100));
console.log(withDiscount(200));
console.log(withDiscount(250));
