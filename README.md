Describe: Pizza()

Test: "It should return a Pizza object with 3 properties for size, toppings, and cost."
Code:
let pizza = new Pizza();
Expected Output: Pizza {size: , toppings: , cost: }


Describe: Size

Test: "It should return a Size object for Size."
Code:
Size.Small;
Expected Output: {size: 'small'}

Describe: Toppings

Test: "It should return a Topping object for Topping."
Code:
Toppings.Sauces;
Expected Output: {toppings: Array(4), prices: Array(4)}

Test: "It should return the corresponding item from an array index for AllTopping."
Code:
Toppings.AllTopping.toppings[9];
Expected Output: 'whipped cream'
