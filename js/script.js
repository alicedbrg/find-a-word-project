var fruits = ['Apricot', 'Avocado', 'Coconut', 'Guava', 'Mango', 'Orange', 'Papaya', 'Pear', 'Pineapple'];
var animals = ['a', 'b', 'c', 'd', 'e'];

function checkArray (myArray, myString) {
    if (myArray.includes(myString)) {
        return true;
    }
    else {
        return false;
    }
};

var clickedCell = '';
$(".fruits-grid td").click(function () {
    clickedCell += $(this)[0].innerHTML;
    console.log(clickedCell);

});