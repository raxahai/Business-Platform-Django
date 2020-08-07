// loading cart and if cart doesnt exist make one
if (localStorage.getItem("cart") == null) {
  var cart = {};
} else {
  var cart = JSON.parse(localStorage.getItem("cart"));
}

function display_checkout(cart){
	for(var item in cart){
		let name = cart[item][1];
		let qty = cart[item][0];
		mystr = `<li class="list-group-item d-flex justify-content-between align-items-center">
		  	${name}
		    <span class="badge badge-primary badge-pill">${qty}</span>
		  </li>`;
		$('#items').append(mystr);
	}
}
display_checkout(cart);