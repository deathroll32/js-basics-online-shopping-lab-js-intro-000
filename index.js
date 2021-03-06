var cart=[];

function setCart(newCart) {
  cart = newCart;
}

function total() {
  let t = 0

  for (var i = 0, l = cart.length; i < l; i++) {
    for (var item in cart[i]) {
      t += cart[i][item]
    }
  }

  return t
}

function getCart(){
  return cart;
}

function addToCart(item){
  var price=Math.floor(Math.random()*10)
  cart.push({[item]: price});
  console.log(item+" has been added to your cart.")
  return cart;
}

function viewCart(){
  var keyNames=[];
  for(let i=0;i<cart.length;i++){
    keyNames[i]=Object.keys(cart[i]);
  }
  if(cart.length===0){
    console.log("Your shopping cart is empty.")
  }
  else{
    var cartString = "In your cart, you have "
    for (let i=0;i<cart.length;i++){
      if(i<cart.length-1){
        cartString+=`${keyNames[i]} at $${cart[i][keyNames[i]]}, `
      }
      else{
        cartString+=`${keyNames[i]} at $${cart[i][keyNames[i]]}.`
      }
    }
    console.log(cartString)
  }
}


function removeFromCart(item){
  var flag = false
  var x;
  for(let i=0;i<cart.length;i++){
    if (cart[i].hasOwnProperty(item)){
      flag=true;
      x=i;
    }
  }
  if(flag){
    cart.splice(x,1)
  }
  else {
    console.log("That item is not in your cart.")
  }

  return cart;
}

function placeOrder(number){
  if(!number){
    console.log("We don't have a credit card on file for you to place your order.")
  }
  else{
    console.log(`Your total cost is $${total()}, which will be charged to the card ${number}.`);
  }
  for(let i=0;i<cart.length;i++){
    cart.shift();
  }
}
