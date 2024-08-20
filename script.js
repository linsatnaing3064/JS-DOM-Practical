let header = document.getElementById("header");
header.textContent = "JS DOM Practical";

let item_wrap = document.getElementsByClassName("item-wrap");
for (let i = 0; i < item_wrap.length; i++) {
  console.log((item_wrap[i].innerHTML = "Item " + i));
}
