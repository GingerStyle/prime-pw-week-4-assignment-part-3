console.log('***** Cart Functions *****');
// Make sure to test all functions here in the JS file!
// We want to see how you are testing your code!!!

let basket = [];

function addItem(item){
    basket.push(item)
    if (basket.includes(item)){
        return true;
    }
}

//testing addItem function 
let result = false;
console.log(result = addItem('juice'));

//adding items to basket to list off in listItems
addItem('crackers');
addItem('cheese');

function listItems(){
    for (let item of basket){
        console.log(item);
    }
}

//testing listItems function
listItems();

//function to empty the basket array
function empty(){
    basket = [];
}

//testing 'empty' function
empty();
console.log(basket);