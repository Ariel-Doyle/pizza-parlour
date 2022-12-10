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

function Pizza() {
  this.size = Size.Medium;
  this.sauces = 0;
  this.toppings = Array(Toppings.AllTopping.toppings.length).fill(0);
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
  
}

//UI Logic






