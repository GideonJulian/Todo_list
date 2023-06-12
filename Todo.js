// Getting the input area
var addArea = document.getElementById("addList");
// getting the ul
var ItemCont = document.getElementById("itemList");
//  Getting the Add Button
var AddBtn = document.getElementById("addBtn");

var Addmsg = document.getElementById("msg");
var Added = document.getElementById('added')
var count = 0

// Adding event Listener
// Adding item function
AddBtn.addEventListener("click", (e) => {
  e.preventDefault();
  count+=1
  Added.textContent = count;

  console.log(count)
  // Creating new li
  var li = document.createElement("li");

  // Adding ClassName to the new tag (Element)
  li.className = "items";

  // Appending The new TextNode To the "li"

  li.appendChild(document.createTextNode(addArea.value));

  // creating the "x" sign
  var remove = document.createElement("button");

  // Adding class list

  remove.className = "removeBtn";
removeBtnTextNode = document.createTextNode("x")
removeBtnTextNode.className = 'fa fa-times'

  remove.appendChild(removeBtnTextNode);

  li.appendChild(remove);

  // Appending the li and it's new content to the task area "ul"
  ItemCont.appendChild(li);
  // Clearing the input tag after adding an item
  addArea.value = "";

  if ((AddBtn.style.visibility = "visible")) {
    AddBtn.style.visibility = "hidden";
  } else {
    AddBtn.style.visibility = "visible";
  }

});

// REMOVING ITEM FROM LIST

// ADDING EVENTLISTENER
ItemCont.addEventListener("click", (e) => {
  console.log("btn works");
  if (e.target.classList.contains("removeBtn")) {
    var li = e.target.parentElement;
    ItemCont.removeChild(li);
    count-=1
    Added.textContent = count;

  }

  // console.log("btn works");
});

addArea.addEventListener("keyup", (e) => {
  if (!addArea.value == "" || AddBtn.style.visibility == "hidden") {
    AddBtn.style.visibility = "visible";
  } else {
    AddBtn.style.visibility = "hidden";
  }
});
