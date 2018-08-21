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



var clickedCell = [];

$(".fruits-grid td").click(function () {
    if ($(this).hasClass("selected")) {
        $(this).removeClass("selected");
        clickedCell.pop(this.innerHTML);
        // $(this).html()
    }
    else {
        $(this).addClass("selected");
        clickedCell.push(this.innerHTML);
    }
    var word = clickedCell.join("");
    console.log(word);
});






// var currentWord = '';
// var foundWord = '';

// currentWord = 'C';
// currentWord.length = 1;

// currentWord = 'CO';
// currentWord.length = 2;


// ONCLICK FUNCTION
fruits.forEach(function (word) {
    currentWord = "";
    var clickedLetter = "";
    if(clickedLetter === word[currentWord.length]) {
        currentWord += maLettreClickée;
        if (fruits.includes(currentWord)) {
             foundWord = currentWord;
             return foundWord;
            }  
        }
})

// ($(this).prev().hasClass("one")) || $(this).next().hasClass("one")
// $("td.one").next();



// currentWord = 'COC';
// currentWord.length = 3;

// // ONCLICK FUNCTION
// possibleWords.forEach( function (word) {
//     if (clickedLetter === word [currentWord.length]) {
//         currentWord += maLettreClickée;
//     }
// })