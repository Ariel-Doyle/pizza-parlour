# _Pizza Parlour_

#### By _**Ariel Doyle**_

#### _This is a simple HTML webpage as practice for writing code, working with HTML, CSS, Web APIs, Test Driven Development, JavaScript looping and arrays, JavaScript classes, and object-oriented JavaScript._

## Technologies Used

- _HTML_
- _VS Code Editor_
- _CSS_
- _JavaScript_
- _JSON_
- _Web APIs_

## Description

_This webpage is designed to allow a user to choose toppings for a pastry-style pizza and to see the cost of their pizza based on size and amount of toppings._

_This is a simple HTML webpage as practice for writing code in line with lessons taught by [Epicodus](https://www.epicodus.com). This webpage can serve as the framework for starting your own code writing journey as regards working with basic object-oriented JavaScript and Web APIs, as well as HTML and CSS. If you would like to follow in these lessons, please visit [Learn How To Program](https://www.learnhowtoprogram.com/introduction-to-programming-part-time)._

## Setup/Installation Requirements

- _You can access this page via [GitHub Pages](https://Ariel-Doyle.github.io/Mr-Robogers-Neighborhood)_
- _Access [Github](https://github.com/)_
- _Clone this repository (https://github.com/Ariel-Doyle/pizza-parlour.git) to your desktop_
- _Navigate to the top level of the directory_
- _open **index.html** in your browser_

## Known Bugs

- _??_

## Recognition

_Photo by <a href="">Photo Title</a> on <a href="">Unsplash</a>_

## License

_[MIT](https://choosealicense.com/licenses/mit/)_

Copyright (c) _2022_ _Ariel Doyle_ 

## TDD testing implemented:

_Describe: roundToTheNearestNickle()_

>Test: "It should return an integer rounded to the nearest .05."
Code: 
roundToTheNearestNickle(1.334);
Expected Output: 1.35

//adding tests for classes because classes are similiar to objects.

_Describe: Size_

>Test: "It should return a Size object for Size."
Code:
Size.Small;
Expected Output: {size: 'small'}

_Describe: Toppings_

>Test: "It should return a Topping object for Topping."
Code:
Toppings.Sauces;
Expected Output: {toppings: Array(4), prices: Array(4)}

>Test: "It should return the corresponding item from an array index for AllTopping."
Code:
Toppings.AllTopping.toppings[9];
Expected Output: 'whipped cream'

_Describe: Pizza()_

>Test: "It should return a Pizza object with 3 properties for size, sauces. and toppings."
Code:
let pizza = new Pizza();
pizza;
Expected Output: Pizza {size: Size {size: 'medium'} , sauces: 0, toppings: Array(16)}

>Test: "It should return a Pizza object with a size set to large when input of Size.Large is referenced."
Code: 
let pizza = new Pizza();
pizza.chooseSize(Size.Large);
pizza;
Expected Output: Pizza {size: Size {size: 'large'} ...}

>Test: "It should return an integer reflecting topping price multiplied by which property of Size is inputted."
Code: 
let pizza = new Pizza(),;
pizza.toppingPrice(9);
Expected Output: 1.125
//[9] is 'whipped cream' which costs .75 for a size Small pizza, so the default of Medium pizza returns (.75 * 1.5).

>Test: "It should return an integer reflecting Size base price added to topping cost."
Code: 
let pizza = new Pizza();
pizza.chooseSize(Size.Large);
pizza.toppings[9] = 1;
pizza.cost(); 
Expected Output: 26.5

