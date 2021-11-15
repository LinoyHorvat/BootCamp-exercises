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

function getCandy(candyStore, id){
  let theCandy ; 
  candyStore.candies.forEach(function(candy)
  {
    if (id === candy.id) { 
      theCandy = candy;
    }
  }
  )
  return theCandy;
}
let id = "as12f";
console.log(getCandy(candyStore, id));

// The function should return the price (number) of the candy with the specified id.

function getPrice(candyStore, id){
  return getCandy(candyStore, id).price
}
console.log(getPrice(candyStore, id));

// The function should add a new candy to the candy list in candyStore with a default amount of 1. The function will not return anything.

function addCandy(candyStore, id, name, price){ 
  const newCandy = {
    name: name,
    id: id,
    price: price,
    amount: 1,
  }
  candyStore.candies.push(newCandy)
  console.log(candyStore);
}
addCandy(candyStore, "id122222", "alon", 8)

//4. Implement the following buy function: The function should add the candy price to the cashRegister, and decrease the amount property of the relevant candy.

function buy(candyStore, id){ 
  // add the candy price to the cashRegister
  candyStore.cashRegister +=  getPrice(candyStore, id) ;
  // decrease the amount property of the relevant candy:
  if (getCandy(candyStore, id).amount > 1) getCandy(candyStore, id).amount -- ;
}

buy(candyStore, "id122222")

