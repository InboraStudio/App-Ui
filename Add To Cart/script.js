//get values
var body = document.body;
var pic = document.querySelector("#main-shoe");
var back = document.querySelector("#back");
var next = document.querySelector("#next");
var cart = document.querySelector(".cart-btn");
var cartList = document.querySelector(".cart-wrapper");
var deleteAll = document.querySelector("#delete-all");
var rose = document.querySelector("#rose");
var red = document.querySelector("#red");
var blue = document.querySelector("#blue");
var black = document.querySelector("#black");
var miniPic = document.querySelectorAll(".mini-pic");
var selectedName = document.querySelectorAll("#selected-name");
var selectedPrice = document.querySelectorAll("#selected-price");
var selectedQty = document.querySelectorAll("#selected-qty");
var plus = document.querySelector("#add");
var minus = document.querySelector("#minus");
var total = document.querySelector("#total");
var price = 135;
var counter = 0;
var cartCounter = -1;
var qtyCounter = 1;

//store product info in object
var info = [
  {
    src: "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/aefbcede-5ec1-4453-adf1-e86f8fd8d94d/air-zoom-pegasus-38-running-shoe-D1tCt1.png",
    color: "rose",
    bg: "var(--rose)"
  },
  {
    src: "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/a7408b02-61f4-40a0-b90a-1648f2316858/air-zoom-pegasus-38-running-shoe-D1tCt1.png",
    color: "red",
    bg: "var(--red)"
  },
  {
    src: "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/2290e1fe-7704-4b39-b287-b6e5b68de732/air-zoom-pegasus-38-running-shoe-D1tCt1.png",
    color: "blue",
    bg: "var(--blue)"
  },
  {
    src: "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/5eb3f240-d722-4652-bbe0-046de40c8067/air-zoom-pegasus-38-running-shoe-D1tCt1.png",
    color: "black",
    bg: "var(--black)"
  }
];

//switch to next img
next.addEventListener('click', function(){
  if(counter < info.length)
    {    
      counter++;
      pic.src = info[counter].src;
      body.style.background = info[counter].bg;
    } else {
      pic.src = info[0].src;
      body.style.background = info[0].bg;
    }
});

//swtich to previous img
back.addEventListener('click', function(){
  if(counter == 0)
    {
      pic.src = info[0].src;
      body.style.background = info[0].bg;
    } else {
      counter--;
      pic.src = info[counter].src;
      body.style.background = info[counter].bg;
    }
});

//change color
rose.addEventListener('click', function(){
  pic.src = info[0].src;
  body.style.background = info[0].bg;
});

red.addEventListener('click', function(){
  pic.src = info[1].src;
  body.style.background = info[1].bg;
});

blue.addEventListener('click', function(){
  pic.src = info[2].src;
  body.style.background = info[2].bg;
});

black.addEventListener('click', function(){
  pic.src = info[3].src;
  body.style.background = info[3].bg;
});

//add to cart
cart.addEventListener('click', function(){
  if(cartCounter < info.length){
  cartCounter++;
    cartList.style.display = "flex";
  miniPic[cartCounter].setAttribute("style", "background-image: url(" + info[counter].src + ")");
  selectedName[cartCounter].innerHTML = "Nike Air Zoom " + info[counter].color;
    selectedPrice[cartCounter].innerHTML = "$" + price;
    total.innerHTML = price*(cartCounter + 1);
   } 
});

/*
plus.addEventListener('click', function(){
      qtyCounter++;
      selectedPrice[cartCounter].innerHTML = "$" + price*qtyCounter;
      selectedQty[cartCounter].innerHTML = qtyCounter;
    });
    minus.addEventListener('click', function(){
      if(qtyCounter > 1){
     qtyCounter--;
     selectedPrice[cartCounter].innerHTML = "$" + price*qtyCounter;
        selectedQty[cartCounter].innerHTML = qtyCounter;
      } else {
        selectedPrice[cartCounter].innerHTML = "$" + price;
        selectedQty[cartCounter].innerHTML = qtyCounter;
      }
*/