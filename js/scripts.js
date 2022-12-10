function roundToNearestNickle(x) {
  return ((Math.ceil(x * 20))/20);
}

class Size {
  static Small = new Size("small");
  static Medium = new Size("medium");
  static Large = new Size("large");

  constructor(size) {
    this.size = size;
  }
}

class Toppings {
  static Sauces = new Toppings(["chocolate ganache", "brown butter caramel", "maple syrup", "lemon curd"], Array(4).fill(0));
  static RegTopping = new Toppings(["M&M's", "caramel popcorn", "peanut butter cups", "Skittles", "Nerdz", "marshmallows", "mixed berries", "sprinkles", "cookie dough", "whipped cream"], Array(10).fill(.75));
  static FunTopping = new Toppings(["pretzels", "peanuts", "chili flakes", "smoked sea salt", "bacon crumbles", "gold leaf"], [.80, .80, .80, .80, 1.50, 3]);
  static AllTopping = new Toppings((Toppings.RegTopping.toppings).concat(Toppings.FunTopping.toppings), (Toppings.RegTopping.prices).concat(Toppings.FunTopping.prices));

  constructor(toppings, prices) {
    this.toppings = toppings;
    this.prices = prices;
  }
}

function PizzaCart() {
  this.pizza = {}
}

function Pizza() {
  this.size = Size.Medium;
  this.sauces = 0;
  this.toppings = Array(Toppings.AllTopping.toppings.length).fill(0);
  //this.halfPizza = false;
}

Pizza.prototype.chooseSize = function(size) {
  this.size = size;
};

Pizza.prototype.toppingPrice = function(toppingIndex) {
  let priceMultiplier = 1
  switch (this.size) {
    case Size.Small: 
      break;
    case Size.Medium:
      priceMultiplier = 1.5;
      break;
    case Size.Large:
      priceMultiplier = 2;
      break;
    default:
      break;
  }
  return Toppings.AllTopping.prices[toppingIndex] * priceMultiplier;
};

Pizza.prototype.cost = function() {
  let totalCost = 0;
  const toppingArrayLength = Toppings.AllTopping.toppings.length;
  switch (this.size) {
    case Size.Small:
      totalCost = 12 
      break;
    case Size.Medium:
      totalCost = 18;
      break;
    case Size.Large:
      totalCost = 25;
      break;
    default:
      break;
  }
  for (i = 0; i < toppingArrayLength; i++) {
    totalCost += this.toppingPrice(i) * this.toppings[i];
  }
  /*if (this.halfPizza) {
    totalCost /= 2;
  }*/
  return totalCost;
}

//UI Logic

window.addEventListener("load", function () {

  //function handleCheckBoxes()

    let legend = document.querySelector('legend#toppings')
    let label = document.createElement("label");
    let input = (document.createElement("input"));
    legend.after(label);
    label.append('M&Ms');
    label.setAttribute('for', 'M&Ms');
    label.append(input);
    input.setAttribute('type', 'checkbox');
    input.setAttribute('name', 'reg-toppings');
    input.setAttribute('value', 'M&Ms');
    input.setAttribute('id', 'M&Ms');
  

  let h1 = document.createElement("h1");
  let body = document.querySelector("body");
  h1.append("Ice Cream Loop");
  body.after(h1);

  let p = document.createElement("p");
  let favoriteFlavors = "My favorite ice cream flavors are...";
  let flavorArray = ["New York Super Fudge Chunk", "Monster Cookie", "Coffee"];
  flavorArray.forEach(function(flavor) {
    favoriteFlavors = favoriteFlavors.concat(" " + flavor + "!");
  });
  p.append(favoriteFlavors);
  h1.after(p);

  function loop() {

  }

  function orderPizza() {

  }

  function addAPizza() {

  }

});