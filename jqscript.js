var list = $("#listHere");
var listItem = $("<li></li>");

listItem.text("I am an item");
listItem.addClass("font-italic");
list.append(listItem);

list.append("<li class='font-weight-bold'>I am another item</li>");