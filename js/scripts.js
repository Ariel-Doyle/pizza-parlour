function Pizza() {
  this.size = Size.Medium;
  this.toppings = Toppings.;
  this.cost = 0;
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

  constructor(toppings, prices) {
    this.toppings = toppings;
    this.prices = prices;
  }
}

Pizza.prototype.chooseSize = function() {

};

Pizza.prototype.addTopping = function() {

};

Pizza.prototype.addCost = function() {

};

function Toppings() {
  const toppingType = [];
  this.sauce = [];
  this.halfTopping = false;
}

Toppings.prototype.chooseTopping = function() {

}







