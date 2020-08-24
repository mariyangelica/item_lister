let form = document.getElementById('addForm');
let itemList = document.getElementById('items');
let filter = document.getElementById('filter');

// form submit event
form.addEventListener('submit', addItem);

// delete event / removing items;
itemList.addEventListener('click', removeItem);

//add filter event
filter.addEventListener('keyup', filterItems);


// add item
function addItem(e) { //pass in our event parameter/object. remember when we submit the form we need to stop/prevent the initial behavior
  e.preventDefault(); //so normal submission of form doesn't happen;

  // next we want to get the value of this input
  let newItem = document.getElementById('item').value;

  // next we want to create a new li and add it in with that text
  let li = document.createElement('li');
  //add class name
  li.className = 'list-group-item';

  
  //next we want to append the text that comes from the form.
  //add text node with input value. newItem will be the text that comes from the form
  li.appendChild(document.createTextNode(newItem));

  // create delete button element for new li
  let deleteBtn = document.createElement('button');

  //add classes to delete button
  deleteBtn.className = 'btn btn-danger btn-sm float-right delete'
  //append text node
  deleteBtn.appendChild(document.createTextNode('x'));
  //then we want to append the button to the li
  li.appendChild(deleteBtn);

  //we grab the item list and pass in the li that we created
  //append li to list
  itemList.appendChild(li);

  //we are now done with adding items. next lets do remove items.
}

// remove item
function removeItem(e) {
  if (e.target.classList.contains('delete')) {
    if (confirm('Are You Sure?')){
      let li = e.target.parentElement; //if yes, we grab the parent element which is the li
      itemList.removeChild(li); //then remove it from itemList bc the li is the child of the item list which is the ul
    }
  }
}

//last thing we need to do is filter items

function filterItems(e) {
  //first we want to get the text being typed in and convert it to lowercase
  let text = e.target.value.toLowerCase();
  console.log(text);

  //next lets grab all the li within the itemList
  let items = itemList.getElementsByTagName('li');

  //next we turn this collection into an array. because theres certain things we cant do with an html collection
  //array.from(pass in the collection which is items), then we want to loop through them so 'forEach'.
  Array.from(items).forEach(function(item) {
    let itemName = item.firstChild.textContent; //will give us the item name
    console.log(itemName);
    //next we want to compare itemName to the searchbox text. if it is not a match it will be -1. if it ISNT equal to -1 then that is a match to whatever iteration it is on
    if (itemName.toLowerCase().indexOf(text) != -1) {
      item.style.display = 'block';
    } else {
      item.style.display = 'none';
    }
  })
};

