// loading cart and if cart doesnt exist make one
if (localStorage.getItem("cart") == null) {
  var cart = {};
} else {
  var cart = JSON.parse(localStorage.getItem("cart"));
  updateCartValue(cart);
}

// clicking on add to cart button this event will be fired
$(".divpr").on('click','a.cart',function () {
  let idStr = this.id.toString();
  // console.log(idStr);
  if (cart[idStr] != undefined) {
    qty = cart[idStr][0] + 1;
    cart[idStr] = [qty,name];
  } else {
    name = document.getElementById('name'+idStr).innerHTML;
    console.log(name);
    qty = 1;
    cart[idStr] = [qty,name];
  }
  updateCartValue(cart);
  updateCart(cart);
  updatePopOver(cart);
});

// this updates the value of cart
function updateCartValue(cart){
  sum = 0;
  for(var item in cart){
    sum += cart[item][0];
  }
  document.getElementById('Cart').innerHTML = sum;
}


function updateCart(cart){
  for(var item in cart)
  {
    // console.log(item);
    document.getElementById('div'+item).innerHTML = "<button id='minus" + item + "' class='btn btn-primary minus'>-</button> <span id='val"+item+"'>"+cart[item][0]+"</span> <button class='btn btn-primary plus' id='plus"+item+"'>+</button>";
  }
  localStorage.setItem("cart", JSON.stringify(cart));
}

$('.divpr').on('click','button.minus',function(){
  id = this.id.slice(7,);
  cart['pr'+id][0] = cart['pr'+id][0] - 1;
  cart['pr'+id][0] = Math.max(0,cart['pr'+id][0]);
  document.getElementById('valpr'+id).innerHTML = cart['pr'+id][0];
  updateCart(cart);
  updatePopOver(cart);
  updateCartValue(cart);
});

$('.divpr').on('click','button.plus',function(){
  id = this.id.slice(6,);
  cart['pr'+id][0] = cart['pr'+id][0] + 1;
  document.getElementById('valpr'+id).innerHTML = cart['pr'+id][0];
  updateCart(cart);
  updatePopOver(cart);
  updateCartValue(cart);
});

updatePopOver(cart);
function updatePopOver(cart){
  console.log('we are updating pop over');
  var popStr = "";
  var i = 1;
  popStr = popStr + "<h5>Welcome to the cart</h5>";
  for(var item in cart){
    popStr = popStr + "<b>"+i+"</b>. ";
    popStr = popStr + document.getElementById('name'+item).innerHTML + " Qty:" + cart[item][0] + "<br>";
    i = i + 1;
  }
  popStr = popStr + "<a class='btn btn-danger my-2' onclick='clear_cart()'>Clear Cart</a> <a class='btn btn-primary my-2' href='/shop/checkout'>checkout</a>"
  document.getElementById('popCart').setAttribute('data-content',popStr);
  $('#popCart').popover('show');
}

function clear_cart(cart){
  cart = JSON.parse(localStorage.getItem('cart'))
  for(var item in cart){
    document.getElementById('div'+item).innerHTML = '<a id="'+item+'" href="#" class="btn btn-primary cart">Add to Cart</a>';
  }
  localStorage.clear();
  cart = {};
  updateCartValue(cart);
  updatePopOver(cart);
}
