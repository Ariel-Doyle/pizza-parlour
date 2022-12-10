Describe: roundToTheNearestNickle()

Test: "It should return an integer rounded to the nearest .05."
Code: 
roundToTheNearestNickle(1.334);
Expected Output: 1.35

Describe: Pizza()

Test: "It should return a Pizza object with 3 properties for size, sauces. and toppings."
Code:
let pizza = new Pizza();
pizza;
Expected Output: Pizza {size: Size {size: 'medium'} , sauces: 0, toppings: Array(16)}

Test: "It should return a Pizza object with a size set to large when input of Size.Large is referenced."
Code: 
let pizza = new Pizza();
pizza.chooseSize(Size.Large);
pizza;
Expected Output: Pizza {size: Size {size: 'large'} ...}

Test: "It should return a Pizza object with a topping price reflecting which property of Size is inputted."
Code: 
let pizza = new Pizza();
pizza.toppingPrice(9);
Expected Output: 1.125
//[9] is 'whipped cream' which costs .75 for a size Small pizza, so the default of Medium pizza returns (.75 * 1.5).

//adding tests for classes because classes are similiar to objects.

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
