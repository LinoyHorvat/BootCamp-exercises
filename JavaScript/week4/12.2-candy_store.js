const candyStore = {
  candies: [
    {
      name: "mint gum",
      id: "as12f",
      price: 2,
      amount: 2,
    },
    {
      name: "twix",
      id: "5hd7y",
      price: 5,
      amount: 4,
    },
  ],
  cashRegister: 200,
};

// The function should return the candy element with the specified id.

function getCandy(candyStore, id) {
  let theCandy;
  let idxOfCandy
  candyStore.candies.forEach(function (candy, idx) {
    if (id === candy.id) {
      theCandy = candy;
    }
  });
  return theCandy;
}

// The function should return the price (number) of the candy with the specified id.

function getPrice(candyStore, id) {
  return getCandy(candyStore, id).price;
}

// The function should add a new candy to the candy list in candyStore with a default amount of 1. The function will not return anything.

function addCandy(candyStore, id, name, price) {
  const newCandy = {
    name: name,
    id: id,
    price: price,
    amount: 1,
  };
  candyStore.candies.push(newCandy);
  console.log(candyStore);
}
addCandy(candyStore, "id122222", "alon", 8);

//4. Implement the following buy function: The function should add the candy price to the cashRegister, and decrease the amount property of the relevant candy.

function buy(candyStore, id) {
  // check if the candy is available
  let candy = getCandy(candyStore, id);
  if (candy === undefined) return "sorry, we don't have this candy";
  else if (candy.amount < 1) return "sorry, there's no candy left";
  else {
    // add the candy price to the cashRegister
    candyStore.cashRegister += getPrice(candyStore, id);
    // decrease the amount property of the relevant candy:
    candy.amount --;
  }
};
