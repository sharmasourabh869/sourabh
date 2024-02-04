const list = document.getElementById("list");
list.addEventListener("mousemove", function () {
  list.style.border = "2px solid white";
  list.style.cursor = "pointer";
  list.style.borderRadius = "4px";
  list.addEventListener("mouseleave", function () {
    list.style.border = "none";
  });
});

const order = document.getElementById("order");
order.addEventListener("mousemove", function () {
  order.style.border = "2px solid white";
  order.style.borderRadius = "4px";
  order.style.cursor = "pointer";
  order.addEventListener("mouseleave", function () {
    order.style.border = "none";
  });
});
